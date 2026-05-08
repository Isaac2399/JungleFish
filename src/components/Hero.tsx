import React from 'react';
import { motion } from 'framer-motion';
import { useFirebaseAssets } from '../hooks/useFirebaseAssets';

export const Hero: React.FC = () => {
  const { assets } = useFirebaseAssets();
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-6xl w-full flex flex-col items-center text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-bold mb-6 leading-tight tracking-tight text-white uppercase"
          >
            Paradise & Beyond: Unlock<br/>The Authentic Costa Rica
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-white font-medium mb-12 max-w-4xl leading-relaxed opacity-90"
          >
            Your frictionless portal to local experiences and products, powered by Stellar
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button 
              onClick={() => {
                document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-[#0A110D] bg-gradient-to-r from-[#50FFB4] to-[#3BB2FF] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(80,255,180,0.4)] active:scale-95 text-sm tracking-widest uppercase"
            >
              Discover Local Packages
            </button>
            
            <button 
              onClick={() => {
                document.getElementById('payments')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-transparent border-2 border-brand-accent rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-accent/10 active:scale-95 text-sm tracking-widest uppercase"
            >
              How It Works
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
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">Explorar</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
    </section>
  );
};
