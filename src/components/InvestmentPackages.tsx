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
      '1 Taller (Permacultura, Cocina o Healing Center)',
      'Para 1 persona',
      'Acceso a comunidad de fundadores'
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
      '1 noche en cabaña premium (baño privado)',
      'Actividades inmersivas incluidas',
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
      '1 semana de Escuela de Idiomas (1-a-1)',
      'Alojamiento en cabaña premium',
      'Comidas (desayuno, almuerzo, cena) para 1 pers'
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
    <section id="packages" className="py-24 bg-[#08120b] relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#2D5A27]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">Ecosistema & Utilidad</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Paquetes de Fundador: <br className="md:hidden" /><span className="text-[#2D5A27] text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] to-[#4caf50]">Tu Inmersión</span>
          </h2>
          <p className="text-brand-light/70 mb-8 text-lg">
            Asegura tu participación en la Fase 1 a $0.12 USD por token. Elige el paquete que mejor se adapte a tu visión y disfruta de beneficios exclusivos.
          </p>

          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              <span>Fase 1 (Pre-venta)</span>
              <span>35% Completado</span>
            </div>
            <div className="h-3 w-full bg-[#08120b] rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '35%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#2D5A27] to-[#4caf50]"
              />
            </div>
            <p className="text-brand-light/60 text-xs mt-3">Precio actual: <strong className="text-white">$0.12 USD = 1 $JFISH</strong>. El precio pre-venta aumentará en la Fase 2.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border backdrop-blur-xl ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-[#2D5A27]/20 to-[#08120b] border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' 
                  : 'bg-white/5 border-white/10 hover:border-[#2D5A27]/50 shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-brand-dark text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 text-center shadow-md">
                  Best Value
                </div>
              )}

              <div className={`p-8 flex flex-col h-full ${pkg.popular ? 'pt-12' : 'pt-8'}`}>
                <h3 className="text-2xl text-white font-display font-bold mb-2 drop-shadow-sm">{pkg.title}</h3>
                <div className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-6">
                  {pkg.duration}
                </div>

                <div className="mb-8 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-display font-bold text-white">{pkg.usdPrice}</span>
                    {pkg.price !== 'Custom' && (
                      <span className="text-brand-light/50 text-sm tracking-wider">USD</span>
                    )}
                  </div>
                  <div className="text-sm mt-2 flex items-center gap-2 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5 self-start">
                    <span className="text-brand-light/50">Tokens:</span>
                    <span className="text-[#D4AF37] font-bold">{pkg.price !== 'Custom' ? `${pkg.price} $JFISH` : 'Variable'}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-brand-light/80 text-sm leading-relaxed">
                      <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-[#D4AF37]' : 'text-[#2D5A27]'}`} strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => pkg.id === 'custom' ? setIsBuildModalOpen(true) : onOpenBuyModal?.()}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 md:mt-auto ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-brand-dark shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02]'
                      : 'bg-white/5 text-white hover:bg-[#2D5A27] hover:text-white border border-white/10 hover:border-[#2D5A27] hover:shadow-[0_0_20px_rgba(45,90,39,0.3)]'
                  }`}
                >
                  Comprar con $JFISH
                </button>
              </div>
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
              <li>Las redenciones se realizan <strong>on-site</strong> con el equipo local de Jungle Fish en Costa Rica.</li>
              <li>El holding de tokens $JFISH otorga entre un <strong>30% y 40% de descuento</strong> en servicios adicionales dentro del ecosistema.</li>
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
