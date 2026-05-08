import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BuildYourOwnModal } from './BuildYourOwnModal';

interface InvestmentPackagesProps {
  onOpenBuyModal?: () => void;
}

const packages = [
  {
    id: 'seed',
    title: 'Seed Pack',
    duration: 'Básico',
    price: '1,000',
    usdPrice: '$120',
    popular: false,
    features: [
      '1 Taller (Permacultura en Finca de Karl o Cocina en Trapiche de Pemo)',
      'Para 1 persona',
      'Acceso a comunidad Paradise & Beyond'
    ]
  },
  {
    id: 'explorer',
    title: 'Explorer Pack',
    duration: 'Best Value',
    price: '4,000',
    usdPrice: '$480',
    popular: true,
    features: [
      '1 noche en Jungle Fish Sanctuary (cabaña premium)',
      'Tour guiado en Trapiche de Pemo o Finca de Karl',
      'Para 2 personas'
    ]
  },
  {
    id: 'founder',
    title: "Founder's Experience",
    duration: 'Premium',
    price: '12,000',
    usdPrice: '$1,440',
    popular: false,
    features: [
      'Experiencia completa: Estancia, Café y Tierra',
      'Alojamiento en Jungle Fish + Tours en todos los socios',
      'Comidas locales incluidas (Trapiche de Pemo)'
    ]
  },
  {
    id: 'custom',
    title: 'Build Your Own Package',
    duration: 'Flexible',
    price: 'Custom',
    usdPrice: 'Custom',
    popular: false,
    features: [
      'Combinación libre de noches',
      'Clases y masajes a elegir',
      'Consultoría personalizada'
    ]
  }
];

export const InvestmentPackages: React.FC<InvestmentPackagesProps> = ({ onOpenBuyModal }) => {
  const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);

  return (
    <section id="packages" className="py-32 bg-[#0A110D] relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#2D5A27]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#FFB000]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Ecosystem & Utility</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter uppercase">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-accent">Packages</span>
          </h2>
          <p className="text-brand-light/70 mb-12 text-xl leading-relaxed">
            Secure your participation in the Paradise & Beyond ecosystem. Choose the package that best fits your vision and enjoy benefits across our entire partner network.
          </p>

          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] max-w-2xl mx-auto backdrop-blur-md">
            <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
              <span>Phase 1 (Pre-sale)</span>
              <span>35% Completed</span>
            </div>
            <div className="h-4 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '35%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-brand-green to-brand-accent shadow-[0_0_20px_rgba(0,200,150,0.4)]"
              />
            </div>
            <p className="text-brand-light/60 text-sm mt-4 italic">Current price: <strong className="text-white">$0.12 USD = 1 $JFISH</strong>. Pre-sale price will increase in Phase 2.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15 }}
              className={`relative group rounded-[2.5rem] overflow-hidden transition-all duration-500 border backdrop-blur-xl flex flex-col h-full ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-brand-green/10 to-transparent border-brand-accent/50 shadow-[0_20px_50px_rgba(251,191,36,0.1)]' 
                  : 'bg-white/[0.03] border-white/10 hover:border-brand-accent/30 shadow-2xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-brand-accent to-orange-500 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] py-2 text-center shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={`p-10 flex flex-col flex-grow ${pkg.popular ? 'pt-14' : 'pt-10'}`}>
                <h3 className="text-2xl text-white font-display font-bold mb-2 group-hover:text-brand-accent transition-colors">{pkg.title}</h3>
                <div className="text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-8 opacity-80">
                  {pkg.duration}
                </div>

                <div className="mb-10 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-display font-bold text-white group-hover:scale-110 transition-transform origin-left duration-500">{pkg.usdPrice}</span>
                    {pkg.price !== 'Custom' && (
                      <span className="text-brand-light/50 text-xs sm:text-sm tracking-widest uppercase">USD</span>
                    )}
                  </div>
                  <div className="text-xs mt-4 flex items-center gap-2 bg-white/5 py-2 px-4 rounded-xl border border-white/5 self-start">
                    <span className="text-brand-light/50">Tokens:</span>
                    <span className="text-brand-accent font-bold">{pkg.price !== 'Custom' ? `${pkg.price} $JFISH` : 'Variable'}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-brand-light/80 text-sm leading-relaxed group/item">
                      <div className={`mt-1 p-0.5 rounded-full ${pkg.popular ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-green/20 text-brand-green'}`}>
                        <Check className="w-3.5 h-3.5" strokeWidth={4} />
                      </div>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => pkg.id === 'custom' ? setIsBuildModalOpen(true) : onOpenBuyModal?.()}
                  className={`w-full py-5 rounded-[1.5rem] font-bold uppercase tracking-widest text-[10px] transition-all duration-500 transform active:scale-95 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-brand-accent to-orange-500 text-brand-dark shadow-[0_10px_25px_rgba(251,191,36,0.4)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.6)] hover:scale-[1.03]'
                      : 'bg-white/5 text-white hover:bg-brand-green hover:text-brand-dark border border-white/10 hover:border-brand-green'
                  }`}
                >
                  Get Started
                </button>
              </div>
              
              {/* Subtle light sweep effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="bg-[#2D5A27]/20 p-4 rounded-xl shrink-0">
            <span className="text-3xl">💡</span>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Información Adicional</h4>
            <ul className="text-brand-light/70 text-sm space-y-2 list-disc list-inside">
              <li>Las redenciones se realizan en los establecimientos de nuestros socios (Jungle Fish, Trapiche de Pemo o Finca de Karl).</li>
              <li>El holding de tokens $JFISH otorga beneficios exclusivos y descuentos en todos los productos del ecosistema Paradise & Beyond.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <BuildYourOwnModal 
        isOpen={isBuildModalOpen} 
        onClose={() => setIsBuildModalOpen(false)} 
        onConfirmPurchase={() => {
          setIsBuildModalOpen(false);
          onOpenBuyModal?.();
        }}
      />
    </section>
  );
};
