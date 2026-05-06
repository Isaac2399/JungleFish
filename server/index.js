import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { setGlobalOptions } from 'firebase-functions/v2';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

initializeApp();

// Configurar la región si es necesario, por defecto us-central1 suele cubrir nam5 para bases de datos (default)
setGlobalOptions({ region: 'us-central1' });

const db = getFirestore();

export const onOrderCreated = onDocumentCreated('orders/{orderId}', async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log('No data associated with the event');
    return;
  }

  const orderData = snapshot.data();
  const items = orderData.items || [];

  if (items.length === 0) {
    return;
  }

  try {
    await db.runTransaction(async (transaction) => {
      for (const item of items) {
        if (!item.id || !item.cantidad) continue;

        const inventoryRef = db.collection('inventory').doc(item.id);
        const inventoryDoc = await transaction.get(inventoryRef);

        if (inventoryDoc.exists) {
          const currentQty = inventoryDoc.data().cantidad || 0;
          const newQty = Math.max(0, currentQty - item.cantidad);
          transaction.update(inventoryRef, { cantidad: newQty });
        }
      }
    });
    console.log(`Inventory successfully updated for order ${event.params.orderId}`);
  } catch (error) {
    console.error(`Error updating inventory for order ${event.params.orderId}:`, error);
  }
});
