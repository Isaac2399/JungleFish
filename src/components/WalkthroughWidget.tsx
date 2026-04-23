import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionsData = [
  {
    id: 'hero',
    title: 'Inicio',
    text: 'Bienvenido a Jungle Fish, el primer ecosistema forestal tokenizado respaldado por RWA (Real World Assets). Descubre cómo ser parte.',
    icon: '🌴'
  },
  {
    id: 'reality',
    title: 'El Proyecto',
    text: 'Conoce nuestras instalaciones físicas en la reserva y la visión comunitaria de permacultura.',
    icon: '🌍'
  },
  {
    id: 'tokenomics',
    title: 'Tokenomics',
    text: 'Entiende la distribución de los 10M de $JFISH y los términos técnicos de la preventa Fase 1.',
    icon: '💎'
  },
  {
    id: 'calculator',
    title: 'Calculadora ROI',
    text: 'Simula tus retornos y beneficios anuales basados en ocupación del resort y tus tokens adquiridos.',
    icon: '🧮'
  },
  {
    id: 'roadmap',
    title: 'Fase 1: Presupuesto',
    text: 'Observa transparente e interactivamente en qué se invertirá el hard cap de inversión.',
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
            className="w-72 sm:w-80 bg-[#111]/95 backdrop-blur-xl border border-[#2ecc71]/40 rounded-2xl shadow-[0_15px_40px_-5px_rgba(46,204,113,0.3)] overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2ecc71] to-[#3498db]"></div>
            
            <div className="p-5 relative">
            <button 
                onClick={handleDismiss}
                className="absolute top-3 right-4 text-brand-light/40 hover:text-white transition-colors text-lg"
                title="Cerrar Guía"
            >
                &times;
            </button>

            <p className="text-[#2ecc71] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
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
                    className={`h-1 rounded-full transition-all duration-500 ${s.id === activeSection.id ? 'w-4 bg-[#2ecc71]' : 'w-1 bg-[#2ecc71]/30'}`}
                />
                ))}
            </div>
            </div>
        </motion.div>
        </AnimatePresence>
    </div>
  );
};
