import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({ faq, index }: { faq: { question: string, answer: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-brand-accent transition-colors pr-6">{faq.question}</span>
        <span className={`text-brand-accent text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-light/70 leading-relaxed pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const faqs = t.faqs.map(f => ({ question: f.q, answer: f.a }));

  return (
    <footer className="bg-[#0A110D] pt-32 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* FAQ Section */}
        <div className="w-full max-w-3xl mb-32">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-xs tracking-widest uppercase font-bold mb-3 block">{t.footer.transparency}</span>
            <h3 className="text-4xl text-white font-display font-bold">{t.footer.faqs}</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="w-full text-center mb-10 max-w-4xl bg-brand-dark/50 border border-brand-green/30 p-6 rounded-xl text-xs text-brand-light/50 text-left leading-relaxed">
          <h4 className="font-bold text-white/70 mb-2 text-sm uppercase">{t.footer.disclaimer_title}</h4>
          <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.footer.disclaimer_1.replace('no representa una inversión en una entidad financiera regulada', '<strong>no representa una inversión en una entidad financiera regulada</strong>').replace('does not represent an investment in a regulated financial entity', '<strong>does not represent an investment in a regulated financial entity</strong>') }}>
          </p>
          <p className="mb-2">
            {t.footer.disclaimer_2}
          </p>
          <p>
            {t.footer.disclaimer_3}
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-brand-light/50 text-sm mt-10">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <span className="font-display font-bold text-lg tracking-widest text-white uppercase">Paradise & Beyond</span>
            <span>&copy; {new Date().getFullYear()} Costa Rica</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors tracking-wide">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors tracking-wide">{t.footer.whitepaper}</a>
            <a href="#" className="hover:text-brand-accent transition-colors tracking-wide">{t.footer.terms}</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
