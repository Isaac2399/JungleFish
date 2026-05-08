import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useFirebaseAssets } from '../hooks/useFirebaseAssets';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { assets } = useFirebaseAssets();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '#hero' },
    { name: 'Experiences', href: '#partners' },
    { name: 'Payments', href: '#payments' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-brand-green' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group z-50">
          <div className="h-10 md:h-12 w-auto overflow-hidden">
            <img 
              src={assets.logo} 
              alt="Paradise & Beyond Logo" 
              className="h-full w-auto object-contain brightness-110" 
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-xs font-bold text-white/70 hover:text-brand-accent transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login" className="px-8 py-2.5 text-xs font-bold bg-transparent border-2 border-brand-accent text-white hover:bg-brand-accent/10 rounded-full transition-all duration-300 tracking-widest uppercase">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-brand-dark flex flex-col items-center justify-center gap-8 z-40"
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-brand-accent transition-colors tracking-widest uppercase"
                  >
                    {link.name}
                  </a>
                ))}
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-12 py-4 text-sm font-bold bg-brand-accent text-brand-dark rounded-full transition-all tracking-widest uppercase shadow-xl"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
