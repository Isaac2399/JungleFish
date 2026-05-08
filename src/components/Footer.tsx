import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: '¿Qué respaldo físico tiene el token $JFISH?',
    answer: 'Todo token tiene un par base anclado al desarrollo de la tierra y la infraestructura física en Pérez Zeledón. Los fondos de la preventa construyen 7 cabañas y la escuela, aportando un suelo de valor y utilidad tangible innegable.'
  },
  {
    question: '¿Cómo puedo adquirir $JFISH si no tengo experiencia en crypto?',
    answer: 'Nuestra prioridad es la accesibilidad. Tenemos procesos guiados y atención personalizada (concerge) para que adquieras tus tokens utilizando dinero fiat (tarjeta) sin complicaciones técnicas.'
  },
  {
    question: '¿Por qué utilizamos la red Stellar y LOBSTR wallet?',
    answer: 'Stellar (XLM) es la red blockchain líder institucional diseñada específicamente para activos del mundo real (RWA). Garantiza transferencias instantáneas, comisiones de menos de un centavo y bajo impacto energético. Recomendamos LOBSTR porque es la billetera móvil más segura, intuitiva y fácil de usar del ecosistema Stellar.'
  },
  {
    question: '¿Cuándo puedo empezar a canjear mis beneficios en el eco-resort?',
    answer: 'Las redenciones formales y estancias se abrirán de cara al Q4 2026, con la gran apertura del complejo de cabañas. Sin embargo, los holders de Seed Pack podrán redimir talleres seleccionados a partir de finales de este año.'
  }
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
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
  return (
    <footer className="bg-[#0A110D] pt-32 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* FAQ Section */}
        <div className="w-full max-w-3xl mb-32">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-xs tracking-widest uppercase font-bold mb-3 block">Transparencia Total</span>
            <h3 className="text-4xl text-white font-display font-bold">Preguntas Frecuentes</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-gradient-to-br from-[#1E3A8A] to-[#1e1b4b] border border-blue-500/30 rounded-3xl p-10 text-center mb-16 shadow-[0_10px_40px_rgba(30,58,138,0.3)] relative overflow-hidden"
        >
          {/* subtle glow bg */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-brand-accent/20 blur-[80px] pointer-events-none rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl text-white font-display font-bold mb-6 relative z-10">
            Únete al Ecosistema del Futuro.
          </h2>
          <p className="text-brand-light/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Descubre paquetes exclusivos de hospedaje, cultura y agricultura sostenible. El paraíso te espera a un clic de distancia.
          </p>
          <a href="#hero" className="inline-block bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all relative z-10">
            Ver Paquetes
          </a>
        </motion.div>

        {/* Payment Logos & Trust Text (Design Strip) */}
        <div className="w-full mt-20 relative overflow-hidden">
          <div className="bg-[#1A2E1A] py-6 px-10 flex flex-col md:flex-row items-center justify-between border-t border-white/10 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 opacity-90 transition-all">
               <span className="text-white font-black text-xl italic tracking-tighter">VISA</span>
               <span className="text-white font-bold text-xl tracking-tighter flex items-center gap-1">
                 <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                 <div className="w-4 h-4 bg-yellow-500 -ml-2 rounded-full"></div>
                 mastercard
               </span>
               <span className="text-white font-bold text-xl flex items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
                 Stronghold
               </span>
            </div>
            
            <div className="text-white font-bold tracking-[0.2em] text-sm my-6 md:my-0">
               SEAMLESSLY PAY WITH STRONGHOLD PAY
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 opacity-90 transition-all">
               <span className="text-white font-bold text-xl flex items-center gap-2">
                 <div className="w-6 h-6 bg-[#2775CA] rounded-full flex items-center justify-center text-[10px]">$</div> USDC
               </span>
               <span className="text-white font-bold text-xl flex items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg> Stellar <span className="font-light opacity-60 ml-1">network</span>
               </span>
            </div>

            {/* Right side gradient glow */}
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-[#FFB000]/60 pointer-events-none"></div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="w-full text-center mb-10 max-w-4xl bg-brand-dark/50 border border-brand-green/30 p-6 rounded-xl text-xs text-brand-light/50 text-left leading-relaxed">
          <h4 className="font-bold text-white/70 mb-2 text-sm uppercase">Disclaimer Legal / Advertencia de Riesgo:</h4>
          <p className="mb-2">
            Este token ($JFISH) <strong>no representa una acción en una entidad financiera regulada</strong> ni un valor bursátil en jurisdicciones tradicionales.
          </p>
          <p className="mb-2">
            Es un activo digital criptográfico que otorga derechos de uso y participación en ingresos operativos del Jungle Fish Eco-Resort en San Luis, Costa Rica. Los resultados pasados no garantizan rendimientos futuros. Las "distribuciones proyectadas" son estimaciones matemáticas basadas en modelos de ocupación turística, y están sujetas a variaciones climáticas, de mercado, y regulatorias en Costa Rica.
          </p>
          <p>
            Al interactuar con los contratos inteligentes Soroban (Stellar) y adquirir tokens, usted asume la responsabilidad total por la custodia de sus activos digitales y comprende los riesgos inherentes de los proyectos del mundo real (RWA) tokenizados.
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
            <a href="#" className="hover:text-brand-accent transition-colors tracking-wide">Whitepaper</a>
            <a href="#" className="hover:text-brand-accent transition-colors tracking-wide">Términos</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
