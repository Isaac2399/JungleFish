import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionsData = [
  {
    id: 'hero',
    title: 'Explore',
    text: 'Welcome to Paradise & Beyond, your portal to authentic Costa Rican experiences backed by the Stellar network.',
    icon: '✨'
  },
  {
    id: 'partners',
    title: 'Experiences',
    text: 'Discover Jungle Fish, Trapiche de Pemo, and Finca de Karl, the pillars of our local ecosystem.',
    icon: '🤝'
  },
  {
    id: 'payments',
    title: 'Payments',
    text: 'Stronghold infrastructure for fast and transparent payments with card or crypto.',
    icon: '💳'
  },
  {
    id: 'roadmap',
    title: 'About Us',
    text: 'Our vision for expanding regenerative tourism throughout the region.',
    icon: '🗺️'
  }
];

export const WalkthroughWidget = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(sectionsData[0]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('jf_walkthrough_dismissed', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('jf_walkthrough_dismissed') === 'true') {
      setIsVisible(false);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = sectionsData.find(s => s.id === entry.target.id);
            if (section) {
                setActiveSection(section);
            }
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -40% 0px', 
      threshold: 0
    });

    sectionsData.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence mode="wait">
        <motion.div 
            key={activeSection.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="w-72 sm:w-80 bg-[#0A110D]/95 backdrop-blur-xl border border-blue-500/40 rounded-2xl shadow-[0_15px_40px_-5px_rgba(59,130,246,0.3)] overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#00C896] to-brand-accent"></div>
            
            <div className="p-5 relative">
            <button 
                onClick={handleDismiss}
                className="absolute top-3 right-4 text-brand-light/40 hover:text-white transition-colors text-lg"
                title="Cerrar Guía"
            >
                &times;
            </button>

            <p className="text-[#00C896] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
                <span className="text-sm">{activeSection.icon}</span> {activeSection.title}
            </p>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-white/90 text-[13px] sm:text-sm leading-relaxed"
            >
                {activeSection.text}
            </motion.p>

            <div className="flex gap-1.5 mt-5">
                {sectionsData.map((s) => (
                <div 
                    key={s.id}
                    className={`h-1 rounded-full transition-all duration-500 ${s.id === activeSection.id ? 'w-4 bg-[#00C896]' : 'w-1 bg-[#00C896]/30'}`}
                />
                ))}
            </div>
            </div>
        </motion.div>
        </AnimatePresence>
    </div>
  );
};
