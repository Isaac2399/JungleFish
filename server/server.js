import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import mailchimp from '@mailchimp/mailchimp_marketing';
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

// Initialize Stripe and Mailchimp
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // Add api version, recent one
});

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

// For webhooks, we need the raw body
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Check if it's a token purchase
    if (session.metadata?.type === 'token_purchase') {
      const uid = session.metadata.uid;
      const amountStr = session.metadata.amount;
      if (uid && amountStr) {
        const amount = parseInt(amountStr, 10);
        console.log(`Token purchase successful for user ${uid}. Adding ${amount} tokens.`);
        try {
          const userRef = db.collection('users').doc(uid);
          await userRef.set({
            balance_jfish: FieldValue.increment(amount)
          }, { merge: true });
          console.log(`Successfully added ${amount} tokens to user ${uid}`);
        } catch (err) {
          console.error(`Error updating token balance for user ${uid}:`, err);
        }
      }
    } else {
      // Original logic for early access subscription
      const email = session.customer_details?.email || session.metadata?.email;
      
      if (email) {
        console.log(`Payment successful for ${email}. Adding to Mailchimp...`);
        try {
          const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'pending', // This triggers Double Opt-in
            merge_fields: {
              // Include source to track where they came from
              SOURCE: 'Jungle Fish Landing Page Stripe',
            }
          });
          console.log(`Successfully added user to Mailchimp with status 'pending': ${response.id}`);
        } catch (err) {
          // Log but don't fail the webhook processing itself for Stripe
          console.error(`Error adding to Mailchimp:`, err.status, err.response?.text || err.message);
        }
      } else {
        console.warn("No email found in completed checkout session.");
      }
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
});

// Normal endpoints with JSON body parser
app.use(express.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Jungle Fish Early Access Subscription',
              description: 'Charge $1 USD to join the priority waitlist and keep it spam-free.',
            },
            unit_amount: 100, // $1 USD in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}?success=true`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}?canceled=true`,
      customer_email: email, // Auto-fill checkout email
      metadata: {
        email: email // Also keep it in metadata just in case
      }
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/buy-tokens', async (req, res) => {
  const { uid, email, amount } = req.body;
  if (!uid || !amount) {
    return res.status(400).json({ error: 'UID and amount are required' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Jungle Fish Tokens ($JFISH)',
              description: `${amount} $JFISH tokens for your account.`,
            },
            unit_amount: 12, // $0.12 USD in cents
          },
          quantity: amount,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/dashboard?success=true`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/dashboard?canceled=true`,
      customer_email: email,
      metadata: {
        type: 'token_purchase',
        uid: uid,
        amount: amount.toString()
      }
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Express Backend started on http://localhost:${port}`);
  console.log(`Webhook handler available at /webhook`);
});
