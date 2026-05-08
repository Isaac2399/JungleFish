import React from 'react';
import { motion } from 'framer-motion';

export const StellarPayments = () => {
  const steps = [
    {
      number: '01',
      title: 'Elige tu Paquete',
      description: 'Combinamos hospedaje, cultura y agricultura en paquetes diseñados para tu disfrute y bienestar.',
      icon: '📦'
    },
    {
      number: '02',
      title: 'Paga con Stronghold',
      description: 'Usa tu tarjeta o cripto de forma segura. Nosotros gestionamos la conversión de forma transparente.',
      icon: '💳'
    },
    {
      number: '03',
      title: 'Disfruta la Experiencia',
      description: 'Recibe tus tokens digitales y accede a todos los beneficios de nuestro ecosistema en tiempo real.',
      icon: '✨'
    }
  ];

  return (
    <section id="payments" className="py-32 bg-[#0A110D] relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter uppercase">
            Seamless & Secure <br/> <span className="text-brand-green">Stellar Payments</span>
          </h2>
          <p className="text-brand-light/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Our infrastructure on the Stellar network ensures your transactions are near-instant, global, and cost-effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-brand-accent/40 transition-all shadow-2xl"
            >
              <div className="text-8xl font-black text-white/[0.02] absolute top-4 right-8 group-hover:text-brand-accent/5 transition-colors pointer-events-none">
                {step.number}
              </div>
              
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-[0_10px_30px_rgba(0,200,150,0.3)] group-hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)] transition-all"
              >
                {step.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">{step.title}</h3>
              <p className="text-brand-light/70 leading-relaxed text-lg">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[1px] bg-gradient-to-r from-white/20 to-transparent z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
