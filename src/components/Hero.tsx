import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFirebaseAssets } from '../hooks/useFirebaseAssets';
import { useLanguage } from '../context/LanguageContext';
import { WhitepaperModal } from './WhitepaperModal';

export const Hero: React.FC = () => {
  const { assets } = useFirebaseAssets();
  const { t } = useLanguage();
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0A110D]">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep, highly saturated background image with slow cinematic zoom */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.8 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${assets.hero_bg})` }}
        />
        
        {/* Multi-layered cinematic gradient overlays */}
        {/* Dark vignette to focus the user's eye to the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A110D_120%)]"></div>
        {/* Smooth top/bottom fading to blend with other sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A110D] via-transparent to-[#0A110D] opacity-90"></div>
        {/* Magical forest green multiply overlay for a lush tone */}
        <div className="absolute inset-0 bg-[#0E1F14]/40 mix-blend-multiply"></div>
        
        {/* Dynamic Sunlight / Glow Effects */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#FFB000]/15 rounded-full blur-[140px] mix-blend-screen pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] bg-[#00C896]/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        ></motion.div>

        {/* Network Nodes Overlay (Blockchain visual) */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 200 L300 100 L500 250 L400 500 L100 200" stroke="#00C896" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M500 250 L800 150 L900 400 L700 600 L500 250" stroke="#00D1FF" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M400 500 L700 600 L600 850 L300 800 L400 500" stroke="#0070FF" strokeWidth="0.5" strokeDasharray="4 4" />
            
            <circle cx="100" cy="200" r="3" fill="#00C896">
              <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="100" r="3" fill="#00D1FF" />
            <circle cx="500" cy="250" r="4" fill="#00C896">
               <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="150" r="3" fill="#00D1FF" />
            <circle cx="900" cy="400" r="3" fill="#0070FF" />
            <circle cx="700" cy="600" r="4" fill="#00D1FF" />
            <circle cx="400" cy="500" r="3" fill="#00C896" />
            <circle cx="600" cy="850" r="3" fill="#0070FF" />
            <circle cx="300" cy="800" r="3" fill="#00C896" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl w-full flex flex-col items-center text-center"
        >
          {/* Elegant Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-8 flex items-center gap-3 px-5 py-2.5 rounded-full border border-brand-accent/20 bg-black/40 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-white/90">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Staggered Elegant Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-bold mb-8 leading-[1.05] tracking-tight text-white flex flex-col items-center gap-1">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.hero.unlock}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-accent to-[#FF8C00] drop-shadow-[0_0_30px_rgba(251,191,36,0.15)] pb-4"
            >
              {t.hero.authentic}
            </motion.span>
          </h1>
          
          {/* Refined Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light mb-14 max-w-3xl leading-relaxed"
          >
            {t.hero.subtitle_1} <strong className="font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{t.hero.powered_by}</strong>.
          </motion.p>

          {/* Elegant Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button 
              onClick={() => setIsWhitepaperOpen(true)}
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-accent to-[#FF8C00] text-[#0A110D] rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] text-sm tracking-[0.15em] uppercase font-bold"
            >
              <svg className="w-5 h-5 text-[#0A110D] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t.roadmap.whitepaper_btn}</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator down to Current Reality */}
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/40"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">{t.hero.scroll}</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>

      <WhitepaperModal isOpen={isWhitepaperOpen} onClose={() => setIsWhitepaperOpen(false)} />
    </section>
  );
};
