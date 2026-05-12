import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        ></motion.div>

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-[#0A110D] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-[#0A110D]/90 backdrop-blur-md z-10">
            <div>
              <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1">{t.whitepaper.badge}</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
                {t.whitepaper.title_1} <span className="text-white/40">{t.whitepaper.title_2}</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="prose prose-invert prose-brand max-w-none">
              
              <h3 className="text-xl text-brand-accent mb-4 font-display font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t.whitepaper.sec_1_title}</h3>
              <p className="text-brand-light/80 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_1_desc.replace('Paradise & Beyond', '<strong>Paradise & Beyond</strong>') }}>
              </p>

              <h3 className="text-xl text-brand-accent mb-4 font-display font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t.whitepaper.sec_2_title}</h3>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                {t.whitepaper.sec_2_desc}
              </p>
              <ul className="list-disc pl-5 text-brand-light/80 mb-8 space-y-2">
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_2_li_1.replace('High Commissions:', '<strong>High Commissions:</strong>').replace('Altas Comisiones:', '<strong>Altas Comisiones:</strong>') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_2_li_2.replace('Settlement Speed:', '<strong>Settlement Speed:</strong>').replace('Velocidad de Liquidación:', '<strong>Velocidad de Liquidación:</strong>') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_2_li_3.replace('Value Disconnect:', '<strong>Value Disconnect:</strong>').replace('Desconexión de Valor:', '<strong>Desconexión de Valor:</strong>') }}></li>
              </ul>

              <h3 className="text-xl text-brand-accent mb-4 font-display font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t.whitepaper.sec_3_title}</h3>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                {t.whitepaper.sec_3_desc}
              </p>
              <ul className="list-disc pl-5 text-brand-light/80 mb-8 space-y-2">
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_3_li_1.replace('Stellar Network:', '<strong>Stellar Network:</strong>') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_3_li_2.replace('Stronghold Pay:', '<strong>Stronghold Pay:</strong>') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t.whitepaper.sec_3_li_3.replace('Soroban (Smart Contracts):', '<strong>Soroban (Smart Contracts):</strong>') }}></li>
              </ul>

              <h3 className="text-xl text-brand-accent mb-4 font-display font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t.whitepaper.sec_4_title}</h3>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                {t.whitepaper.sec_4_desc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">🏨 {t.current_reality.jungle_fish.title}</h4>
                  <p className="text-sm text-white/60">{t.current_reality.jungle_fish.desc}</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">☕ {t.current_reality.trapiche.title}</h4>
                  <p className="text-sm text-white/60">{t.current_reality.trapiche.desc}</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">🥬 {t.current_reality.finca.title}</h4>
                  <p className="text-sm text-white/60">{t.current_reality.finca.desc}</p>
                </div>
              </div>

              <h3 className="text-xl text-brand-accent mb-4 font-display font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t.whitepaper.sec_5_title}</h3>
              <p className="text-brand-light/80 leading-relaxed mb-8">
                {t.whitepaper.sec_5_desc}
              </p>

              <div className="bg-gradient-to-br from-brand-green/20 to-brand-accent/10 border border-brand-accent/30 rounded-2xl p-6 text-center">
                <p className="text-brand-light font-medium italic">
                  {t.whitepaper.quote}
                </p>
              </div>

            </div>
          </div>
          
          {/* Footer of modal */}
          <div className="flex-shrink-0 p-6 bg-[#0A110D]/90 border-t border-white/10 flex justify-center backdrop-blur-md">
            <button 
              onClick={onClose}
              className="bg-brand-accent text-brand-dark px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
            >
              {t.whitepaper.start}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
