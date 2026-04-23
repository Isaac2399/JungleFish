import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CurrentReality = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    { 
      title: '🌱 Terra a la Mesa', 
      text: 'Conéctate con el origen de tus alimentos en nuestro santuario botánico y horno artesanal.',
      imageUrl: '/restaurant.png',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
      videoTitle: 'Permacultura y Gastronomía'
    },
    { 
      title: '🗣️ Aprendizaje en la Selva', 
      text: 'Domina una nueva lengua en un entorno natural sin distracciones con la Escuela Mango.',
      imageUrl: '/river.png',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
      videoTitle: 'Mango Language School'
    },
    { 
      title: '🧘 Sanación y Balance', 
      text: 'Revitaliza cuerpo y mente en nuestro Healing Center diseñado para la paz absoluta.',
      imageUrl: '/natural_pool.png',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      videoTitle: 'Wellness y Cuidado Personal'
    },
    { 
      title: '🛖 Eco-Hospedaje RWA', 
      text: 'Tu inversión respalda la construcción de 7 cabañas premium en nuestro santuario.',
      imageUrl: '/ponds.png',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      videoTitle: 'Cabañas y Desarrollo'
    }
  ];

  return (
    <section id="reality" className="py-24 bg-brand-green/20 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            El Futuro es el <span className="text-brand-accent">Turismo Regenerativo</span>
          </h2>
          <p className="text-brand-light/80 text-lg leading-relaxed">
            El turismo tradicional agota; el turismo regenerativo nutre. No solo construimos un Eco-Resort, creamos un santuario de permacultura, bienestar y educación. Con <strong>$JFISH</strong>, tu contribución financia directamente el desarrollo y te otorga utilidades inigualables.
          </p>
        </motion.div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {cards.map((card, i) => {
            const isHovered = hoveredCard === i;
            const isOthersHovered = hoveredCard !== null && hoveredCard !== i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => { setActiveCard(i); setHoveredCard(i); }}
                onClick={() => setActiveCard(i)}
                className={`relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-end h-80 ${
                  activeCard === i 
                    ? 'scale-105 border-brand-accent shadow-[0_0_20px_rgba(251,191,36,0.4)] ring-2 ring-brand-accent ring-offset-4 ring-offset-[#08120b]' 
                    : 'border-brand-green hover:border-brand-accent/50'
                }`}
              >
                {/* Background Image with Hover FX */}
                <div 
                  className={`absolute inset-0 transition-all duration-700 ease-out origin-center
                  ${isHovered ? 'scale-110 blur-0 brightness-110' : isOthersHovered ? 'scale-100 blur-[8px] brightness-[0.3]' : 'scale-100 blur-0 brightness-75'}`}
                >
                  <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08120b] via-[#08120b]/50 to-transparent"></div>

                <div className="relative z-10 transition-transform duration-500 translate-y-2 group-hover:-translate-y-0">
                  <h3 className={`text-xl sm:text-2xl text-white font-display mb-2 drop-shadow-lg transition-transform duration-500`}>
                    {card.title}
                  </h3>
                  <p className={`text-brand-light/90 text-xs sm:text-sm leading-relaxed drop-shadow-md transition-all duration-500`}>
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Video Box - Remains open once activated */}
        <div className="w-full flex justify-center mt-8">
          <AnimatePresence mode="wait">
            {activeCard !== null && (
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-4xl bg-brand-dark border-2 border-brand-accent/50 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/3 bg-black aspect-video relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-green/10 pointer-events-none z-10"></div>
                  {/* Simulate video playing */}
                  <video 
                    src={cards[activeCard].videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Fake "Play" icon styling */}
                  <div className="absolute opacity-50 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                     <span className="text-brand-dark text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-display text-white mb-2">{cards[activeCard].videoTitle}</h4>
                  <p className="text-brand-light/60 text-sm mb-6">Reproduciendo clip en vivo desde el Eco-Resort...</p>
                  <p className="text-brand-accent tracking-widest text-xs uppercase font-bold">Ver Completo →</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
