import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0A110D]">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep, highly saturated background image with slow cinematic zoom */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.8 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-fixed"
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
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-4xl w-full"
        >
          {/* Stunning Glass Presentation Box */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 md:p-16 backdrop-blur-[16px] bg-white/[0.03] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]">
            {/* Soft inner glow line for premium glass edge realism */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-[#FF8C00]/30 bg-[#FF8C00]/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,140,0,0.1)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF8C00]"></span>
                </span>
                <span className="text-[#FFB000] text-xs font-bold tracking-[0.25em] uppercase">El Santuario de Costa Rica</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-sans font-black mb-6 leading-[1.05] tracking-tight text-white drop-shadow-2xl uppercase"
              >
                <span className="opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Siente La Magia De</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] filter drop-shadow-[0_0_30px_rgba(255,140,0,0.3)]">
                  Jungle Fish
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                Un refugio inmersivo de ecoturismo y bienestar. Escucha el río, respira el bosque virgen y descubre un nivel de conexión donde la naturaleza es el mayor lujo.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                <button 
                  onClick={() => {
                    document.getElementById('reality')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center justify-center px-10 md:px-12 py-5 font-bold text-[#0A110D] bg-gradient-to-r from-[#FFB000] to-[#FF8C00] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,140,0,0.5)] active:scale-95"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-64 opacity-20"></span>
                  <span className="relative text-base md:text-lg uppercase tracking-[0.1em] flex items-center gap-3">
                    Ingresar al Paraíso
                    <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
                
                <div className="flex flex-wrap justify-center items-center gap-3 text-white/50 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase mt-2">
                  <span className="flex items-center gap-1.5 drop-shadow-md"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Turismo Regenerativo</span>
                  <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></span>
                  <span className="flex items-center gap-1.5 drop-shadow-md"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Pérez Zeledón, CR</span>
                </div>
              </motion.div>
            </div>
          </div>
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
