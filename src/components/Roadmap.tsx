import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'Phase 1 - Q2 2026',
    title: 'Paradise & Beyond Launch',
    description: 'Integration of founding partners and opening of the ecosystem portal on Stellar network.'
  },
  {
    phase: 'Phase 2 - Q3 2026',
    title: 'Infrastructure Expansion',
    description: 'Upgrades at Jungle Fish, automation at Trapiche de Pemo, and new systems at Finca de Karl.'
  },
  {
    phase: 'Phase 3 - Q4 2026',
    title: 'Global Ecosystem',
    description: 'Full opening of redemptions and onboarding of new local partners into the network.'
  }
];

export const Roadmap = () => {
  return (
    <section id="about" className="py-32 bg-[#0A110D] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-b from-brand-green/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BLOQUE: SEGURIDAD Y RESPALDO */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Trust & Transparency</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter uppercase leading-none">
              Real World <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-accent">Backed Assets</span>
            </h2>
            <p className="text-brand-light/70 text-xl leading-relaxed mb-12">
              Every package is backed by tangible assets and revenue streams from our local partners. Paradise & Beyond transforms land and tradition into secure digital value.
            </p>
            
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all px-10 py-5 rounded-full text-white font-bold uppercase tracking-widest text-xs group shadow-xl"
              >
                <svg className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read our Whitepaper
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏨', title: 'Premium Cabins', desc: 'Luxury lodging infrastructure at Jungle Fish Sanctuary.' },
              { icon: '☕', title: 'Culture & Coffee', desc: 'Preserving tradition and milling at Trapiche de Pemo.' },
              { icon: '🥬', title: 'Sustainability', desc: 'Regenerative organic agriculture at Finca de Karl.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] flex items-start gap-6 hover:border-brand-green/50 transition-all hover:bg-white/[0.05] group"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-xl">{item.title}</h4>
                  <p className="text-sm text-brand-light/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOQUE: ROADMAP */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-24"
          >
             <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tighter">Timeline to Expansion</h3>
             <div className="h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
             {/* Vertical Line */}
             <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-accent via-brand-green to-transparent opacity-30"></div>

             <div className="space-y-24">
                {phases.map((phase, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Node */}
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0A110D] border-4 border-brand-accent rounded-full z-20 shadow-[0_0_15px_rgba(251,191,36,0.4)]"></div>

                    {/* Content */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0">
                       <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-brand-accent/40 transition-all shadow-2xl group">
                          <div className="text-brand-accent font-bold text-xs tracking-widest uppercase mb-4">{phase.phase}</div>
                          <h4 className="text-2xl text-white font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">{phase.title}</h4>
                          <p className="text-brand-light/70 text-lg leading-relaxed">{phase.description}</p>
                       </div>
                    </div>
                    <div className="hidden md:block w-[45%]"></div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* RESPALDO INSTITUCIONAL */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center bg-gradient-to-br from-[#1A2E1A] to-transparent p-20 rounded-[3.5rem] border border-white/10"
        >
          <h3 className="text-4xl text-white font-display font-bold mb-10 tracking-tighter uppercase">Backed by Innovation</h3>
          <p className="text-brand-light/70 text-xl max-w-4xl mx-auto leading-relaxed mb-16">
            Paradise & Beyond is built on the world's leading institutional blockchain infrastructure, ensuring security, transparency, and global reach.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
             <div className="flex flex-col items-center gap-4 group cursor-help">
                <span className="text-white font-black text-2xl tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">STELLAR</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-brand-green transition-all duration-500"></div>
             </div>
             <div className="flex flex-col items-center gap-4 group cursor-help">
                <span className="text-white font-black text-2xl tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">STRONGHOLD</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-brand-accent transition-all duration-500"></div>
             </div>
             <div className="flex flex-col items-center gap-4 group cursor-help">
                <span className="text-white font-black text-2xl tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">SOROBAN</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
