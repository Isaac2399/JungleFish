import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-brand-green' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-orange-500 flex items-center justify-center shadow-[0_4px_15px_rgba(251,191,36,0.3)] group-hover:shadow-[0_4px_20px_rgba(251,191,36,0.5)] transition-all">
            <svg className="w-6 h-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <span className="font-display font-bold text-2xl tracking-widest text-white drop-shadow-md">JUNGLE FISH</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#reality" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors tracking-wide">El Proyecto</a>
          <a href="#tokenomics" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors tracking-wide">Tokenomics</a>
          <a href="#calculator" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors tracking-wide">Calculadora ROI</a>
          <Link to="/login" className="px-6 py-2.5 text-xs font-bold bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark hover:shadow-[0_4px_20px_rgba(251,191,36,0.2)] rounded-full transition-all duration-300 tracking-widest uppercase">
            Acceso Huésped
          </Link>
        </nav>
      </div>
    </header>
  );
};
