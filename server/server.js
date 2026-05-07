import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// Initialize Firebase Admin
try {
  initializeApp();
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase Admin initialization error', error.stack);
  }
}
const db = getFirestore();

const app = express();
const port = process.env.PORT || 4242;

// Stronghold Webhook
app.post('/stronghold-webhook', express.json(), async (req, res) => {
  const event = req.body;
  console.log('Received Stronghold Webhook:', event);
  
  // Replace this condition with the actual success event type from Stronghold docs
  if (event.type === 'charge.succeeded' || event.status === 'success' || event.type === 'transaction.created') {
    const metadata = event.data?.metadata || event.metadata || {};
    const uid = metadata.uid;
    const amountStr = metadata.amount;
    
    if (uid && amountStr) {
      const amount = parseInt(amountStr, 10);
      console.log(`Stronghold: Payment successful for ${uid}. Adding ${amount} tokens.`);
      try {
        const userRef = db.collection('users').doc(uid);
        await userRef.set({ balance_jfish: FieldValue.increment(amount) }, { merge: true });
      } catch (err) {
        console.error(`Stronghold: Error updating balance for ${uid}:`, err);
      }
    }
  }
  res.send('OK');
});

// Normal endpoints with JSON body parser
app.use(express.json());
app.use(cors());

// Create Stronghold Charge
app.post('/create-stronghold-charge', async (req, res) => {
  const { uid, email, amount } = req.body;
  if (!uid || !amount) {
    return res.status(400).json({ error: 'UID and amount are required' });
  }

  const priceInCents = amount * 12; // 12 cents per token ($0.12 USD)
  const strongholdHeaders = {
    'Content-Type': 'application/json',
    'SH-SECRET-KEY': process.env.STRONGHOLD_SECRET_KEY,
    'SH-INTEGRATION-ID': process.env.STRONGHOLD_INTEGRATION_ID
  };

  try {
    // 1. Create Customer (or retrieve if it already exists by external_id)
    const customerRes = await fetch('https://api.strongholdpay.com/v2/customers', {
      method: 'POST',
      headers: strongholdHeaders,
      body: JSON.stringify({ 
        email: email,
        external_id: uid,
        first_name: "Jungle", // Required by Sandbox
        last_name: "Fish",
        country: "US",
        state: "CA"
      })
    });
    
    // We parse the data. If it fails due to existing email/external_id, Stronghold might return the ID in the error or we should catch it.
    let customerData = await customerRes.json();
    let customerId = customerData.result ? customerData.result.id : customerData.id;

    if (!customerRes.ok) {
        // Handle existing customer error
        if (customerData.error && customerData.error.message.includes("already exists")) {
             // In production, we'd fetch the existing customer. For now, we suggest a new email.
            throw new Error('Este usuario ya está registrado en Stronghold Sandbox. Por favor, usa un correo diferente para la prueba.');
        } else if (!customerId) {
            throw new Error(customerData.message || JSON.stringify(customerData.error) || 'Failed to create Stronghold customer');
        }
    }
    
    // 2. Generate Customer Token (GET request, NO body)
    const tokenRes = await fetch(`https://api.strongholdpay.com/v2/customers/${customerId}/token`, {
      method: 'GET',
      headers: strongholdHeaders
    });
    const tokenData = await tokenRes.json();
    
    if (!tokenRes.ok) {
        throw new Error(tokenData.message || JSON.stringify(tokenData.error) || 'Failed to generate customer token');
    }

    // The result token is nested in tokenData.result.token as per docs
    const finalToken = tokenData.result ? tokenData.result.token : tokenData.token;

    // Return the generated customer token to the frontend
    res.json({ customerToken: finalToken, amountInCents: priceInCents });
  } catch (err) {
    console.error('Stronghold Charge Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Express Backend started on http://localhost:${port}`);
  console.log(`Webhook handler available at /webhook`);
});
