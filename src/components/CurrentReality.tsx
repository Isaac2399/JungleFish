import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFirebaseAssets } from '../hooks/useFirebaseAssets';
import { useLanguage } from '../context/LanguageContext';

export const CurrentReality = () => {
  const { assets } = useFirebaseAssets();
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    { 
      title: t.current_reality.jungle_fish.title, 
      text: t.current_reality.jungle_fish.desc,
      imageUrl: assets.partner_jungle_fish,
      icon: '🏨'
    },
    { 
      title: t.current_reality.trapiche.title, 
      text: t.current_reality.trapiche.desc,
      imageUrl: assets.partner_trapiche,
      icon: '☕'
    },
    { 
      title: t.current_reality.finca.title, 
      text: t.current_reality.finca.desc,
      imageUrl: assets.partner_finca,
      icon: '🥬'
    }
  ];

  return (
    <section id="partners" className="py-32 bg-[#0A110D] relative transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            className="text-brand-accent text-xs font-bold uppercase mb-4 block"
          >
            {t.current_reality.subtitle}
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white uppercase tracking-tighter leading-none">
            {t.current_reality.title_1} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-accent">{t.current_reality.title_2}</span>
          </h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {cards.map((card, i) => {
            const isHovered = hoveredCard === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for snappy reveal
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                onMouseEnter={() => { setHoveredCard(i); }}
                onClick={() => {}}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 transition-all duration-500 cursor-pointer flex flex-col justify-end h-[450px] md:h-[550px] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Background Image with Parallax-like scale */}
                <motion.div 
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A110D] via-[#0A110D]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                </motion.div>

                {/* Glassmorphism Icon */}
                <div className="absolute top-8 left-8 z-20">
                   <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      {card.icon}
                   </div>
                </div>

                {/* Tech/QR Overlays */}
                <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 bg-brand-accent border-2 border-black rounded-xl flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                        <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                            <div className="bg-black"></div><div className="bg-black"></div>
                            <div className="bg-black"></div><div className="bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '40px' }}
                    className="h-1 bg-brand-accent mb-4 rounded-full"
                  ></motion.div>
                  <h3 className="text-2xl md:text-3xl text-white font-display font-bold mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    {card.text}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-accent font-bold text-xs tracking-widest uppercase mt-4">
                    {t.current_reality.explore_btn} 
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div className={`absolute inset-0 border-2 rounded-[2.5rem] transition-colors pointer-events-none ${isHovered ? 'border-brand-accent/30' : 'border-brand-accent/0'}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
