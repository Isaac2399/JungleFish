import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

/**
 * Hook to fetch landing page assets (images, etc) from Firebase Firestore.
 * This avoids hardcoding paths and allows real-time updates.
 */
export const useFirebaseAssets = () => {
  const [assets, setAssets] = useState<Record<string, string>>({
    // Default fallbacks while loading
    hero_bg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=2000',
    partner_jungle_fish: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    partner_trapiche: '/assets/trapiche_de_pemo.png',
    partner_finca: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800',
    logo: '/assets/logo.png',
    footer_glow: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We assume a single document 'landing_page' in 'site_config' collection
    const unsub = onSnapshot(doc(db, 'site_config', 'landing_page'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const newAssets = { ...data.assets };
        
        // Also check if logo or other assets are at the root
        if (data.logo) newAssets.logo = data.logo;
        if (data.hero_bg) newAssets.hero_bg = data.hero_bg;
        
        // Force trapiche to use the local high-quality asset regardless of Firebase
        newAssets.partner_trapiche = '/assets/trapiche_de_pemo.png';
        
        setAssets(prev => ({ ...prev, ...newAssets }));
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching firebase assets:", error);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { assets, loading };
};
