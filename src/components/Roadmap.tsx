import { motion } from 'framer-motion';

const phases = [
  {
    quarter: 'Q2 2026',
    title: 'Fase 1: Preventa Inicial',
    description: 'Levantamiento de Capital RWA y distribución de paquetes fundadores.'
  },
  {
    quarter: 'Q3 2026',
    title: 'Construcción',
    description: 'Inicio de obras: 7 Cabañas Premium, Escuela Mango e Infraestructura Base.'
  },
  {
    quarter: 'Q4 2026',
    title: 'Apertura Oficial',
    description: 'Inauguración del resort y primeras redenciones de utilidad (reservas).'
  }
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-32 bg-[#0a0f0d] relative overflow-hidden border-t border-[#2ecc71]/10">
      {/* Premium Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-b from-[#2ecc71]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BLOQUE 4: RESPALDO EN ACTIVOS REALES */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-xs uppercase tracking-widest font-medium mb-6"
            >
              Confianza & Transparencia
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Seguridad Financiera: <span className="text-[#2D5A27] text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#2D5A27]">Respaldado por Activos Tangibles</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-light/70 text-lg leading-relaxed mb-8"
            >
              Tu inversión no está en la nube; está en la tierra. Los fondos recaudados en esta Fase 1 se destinan 100% al desarrollo físico en nuestra propiedad de Pérez Zeledón.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-6 py-3 rounded-full text-white font-medium group">
                <svg className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Leer nuestro Whitepaper completo
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[#2ecc71]/50 transition-colors">
              <div className="text-3xl">🏗️</div>
              <div>
                <h4 className="text-white font-bold mb-1">7 Cabañas Premium</h4>
                <p className="text-sm text-brand-light/60">Construcción de unidades de hospedaje 7x7 con diseño ecológico.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[#2ecc71]/50 transition-colors">
              <div className="text-3xl">🏫</div>
              <div>
                <h4 className="text-white font-bold mb-1">Escuela Mango</h4>
                <p className="text-sm text-brand-light/60">Desarrollo de la infraestructura educativa y área de juegos.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[#2ecc71]/50 transition-colors">
              <div className="text-3xl">🌿</div>
              <div>
                <h4 className="text-white font-bold mb-1">Infraestructura</h4>
                <p className="text-sm text-brand-light/60">Senderos ecológicos, internet de alta velocidad y caminos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE 6: ROADMAP Y EQUIPO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Roadmap Timeline */}
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-10">Línea de Tiempo</h3>
            <div className="relative border-l border-brand-green/30 ml-4 md:ml-0 space-y-12">
              {phases.map((phase, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-brand-accent -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                  <div className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-1">{phase.quarter}</div>
                  <h4 className="text-xl font-display text-white mb-2">{phase.title}</h4>
                  <p className="text-brand-light/60 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* El Equipo */}
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-10">El Equipo & Alianzas</h3>
            <p className="text-brand-light/70 mb-8">Liderado por un equipo multidisciplinario con sólida experiencia, uniendo tecnología Web3 con sabiduría de la tierra.</p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark/50 border border-[#2ecc71]/20 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-orange-500 flex items-center justify-center text-brand-dark font-bold text-xl">I</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Isaac & Equipo</h4>
                    <p className="text-brand-accent text-xs uppercase tracking-widest">Project Management & Tech</p>
                  </div>
                </div>
                <p className="text-sm text-brand-light/60">
                  Más de 10 años en Project Management y en el ecosistema tecnológico con Tavuel, asegurando una ejecución técnica, administrativa y financiera impecable para Jungle Fish.
                </p>
              </motion.div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
