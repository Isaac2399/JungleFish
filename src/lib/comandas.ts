import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface ComandaItem {
  nombre: string;
  cantidad: number;
}

export interface ComandaData {
  cliente: string;
  uid?: string;
  mesa_o_cabana: string;
  items: ComandaItem[];
  total: number;
}

/**
 * Crea una nueva comanda en la colección 'comandas' de Firestore.
 * @param data Datos de la comanda (cliente, mesa/cabaña, items y total).
 * @returns El ID del documento creado.
 */
export const enviarComanda = async (data: ComandaData): Promise<string> => {
  try {
    const comandasRef = collection(db, 'comandas');
    const docRef = await addDoc(comandasRef, {
      cliente: data.cliente,
      uid: data.uid || null,
      mesa_o_cabana: data.mesa_o_cabana,
      items: data.items,
      total: data.total,
      estado: 'pendiente', // Valor por defecto
      fecha: serverTimestamp(),
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error al enviar la comanda:', error);
    throw error;
  }
};
