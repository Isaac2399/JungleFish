import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <header className={`fixed top-0 w-full z-[60] transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-brand-green' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group z-[60]">
            <div className="h-14 md:h-24 w-auto flex items-center justify-center overflow-visible">
              <img 
                src="/assets/logo-transparent.png" 
                alt="Paradise & Beyond Logo" 
                className="h-full w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] opacity-90 group-hover:opacity-100 transition-opacity md:scale-125 origin-left" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 mr-2">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${language === 'es' ? 'bg-brand-accent text-black' : 'text-white/50 hover:text-white'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${language === 'en' ? 'bg-brand-accent text-black' : 'text-white/50 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <Link to="/login" className="px-8 py-2.5 text-xs font-bold bg-transparent border-2 border-brand-accent text-white hover:bg-brand-accent/10 rounded-full transition-all duration-300 tracking-widest uppercase">
              {t.header.book_now}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-[60] text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[50]"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 mb-4">
                <button 
                  onClick={() => setLanguage('es')}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all ${language === 'es' ? 'bg-brand-accent text-black' : 'text-white/50 hover:text-white'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all ${language === 'en' ? 'bg-brand-accent text-black' : 'text-white/50 hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              <Link 
                to="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-12 py-4 text-sm font-bold bg-brand-accent text-brand-dark rounded-full transition-all tracking-widest uppercase shadow-xl"
              >
                {t.header.book_now}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
