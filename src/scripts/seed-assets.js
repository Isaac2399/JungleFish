import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// Manual parsing of .env to avoid dependency on dotenv for a one-off script
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) env[key.trim()] = value.trim();
});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedAssets = async () => {
  console.log("Seeding Firestore assets for Paradise & Beyond...");
  
  const assetsRef = doc(db, 'site_config', 'landing_page');
  
  const initialAssets = {
    assets: {
      hero_bg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=2000', // Lush jungle
      partner_jungle_fish: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800', // Luxury Eco Lodge
      partner_trapiche: 'https://images.unsplash.com/photo-1559056191-4917a1195462?auto=format&fit=crop&q=80&w=800', // Coffee/Traditional
      partner_finca: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800', // Organic Farm
      logo: '/assets/logo.png', // Default path to the logo I saved
    }
  };

  try {
    await setDoc(assetsRef, initialAssets, { merge: true });
    console.log("✅ Successfully seeded assets in site_config/landing_page");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding assets:", error);
    process.exit(1);
  }
};

seedAssets();
