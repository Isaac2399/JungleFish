import { motion } from 'framer-motion';

/**
 * Tokenomics Component
 * 
 * @stellar RWA Architecture Overview
 * The Jungle Fish ($JFISH) token leverages Stellar's native assets framework for lightning-fast, eco-friendly settlement.
 * - Asset Issuance: A dedicated Issuer Account manages the fixed supply and orchestrates Trustlines.
 * - Automated Market Maker (AMM): The 20% Liquidity Pool allocation will be deposited into StellarX AMMs.
 * - Yield Distribution: The "Community & Holder Rewards" will be distributed programmatically via Soroban Smart Contracts to all active trustlines.
 */
export const Tokenomics = () => {
  const stats = [
    { label: 'Suministro Total', value: '10M', sub: '$JFISH' },
    { label: 'Precio Presale', value: '$0.12', sub: 'USD' },
    { label: 'Hard Cap', value: '$88K', sub: 'USD' },
    { label: 'Network', value: 'Stellar', sub: '(Soroban)' }
  ];

  const allocations = [
    { name: 'Public Token Sale', percent: 10, amount: '1,000,000', details: 'Immediate upon purchase ($0.10 each)', color: 'bg-[#FF8C00]' },
    { name: 'Liquidity Pool (StellarX)', percent: 20, amount: '2,000,000', details: 'Locked for minimum 12 months', color: 'bg-blue-400' },
    { name: 'Operational Reserve', percent: 15, amount: '1,500,000', details: 'For perks, redemptions, and daily operations', color: 'bg-emerald-400' },
    { name: 'Community & Holder Rewards', percent: 15, amount: '1,500,000', details: 'Phased release over 24 months', color: 'bg-rose-500' },
    { name: 'Team & Founders', percent: 15, amount: '1,500,000', details: '12-month cliff + 36-month linear vesting', color: 'bg-teal-500' },
    { name: 'Long-term Resort Growth', percent: 25, amount: '2,500,000', details: 'Milestone-based for expansions and existing operations', color: 'bg-[#2ecc71]' },
  ];

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-display font-bold text-center mb-16 text-white"
        >
          Tokenomics: <span className="text-brand-accent">$JFISH</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-brand-light/80 mb-6 leading-relaxed">
              El token $JFISH es tu pase de membresía al ecosistema de Jungle Fish Eco-Resort en Costa Rica, ofreciendo utilidad real y participación en nuestra comunidad apoyada por activos del mundo real.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-brand-accent font-bold">★</span>
                <span className="text-brand-light">Acceso prioritario y descuentos en reservas de Eco-Cabañas</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-accent font-bold">★</span>
                <span className="text-brand-light">Descuentos exclusivos en la Escuela de Idiomas Mango</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-accent font-bold">★</span>
                <span className="text-brand-light">Participación en la economía circular del resort: recepción de beneficios, recompensas e incentivos comunitarios a través de la red Stellar / Soroban</span>
              </li>
            </ul>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-brand-green/20 border border-brand-green p-6 rounded-xl text-center"
              >
                <p className="text-brand-light/60 text-sm mb-1 uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-display text-white">{stat.value}</p>
                <p className="text-xs text-brand-accent mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Allocation Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-brand-dark/50 border border-brand-green/50 p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-10 text-white uppercase tracking-wider">Asignación de Tokens (Allocation)</h3>
          
          {/* Stacked Percentage Bar */}
          <div className="md:px-4">
            <div className="w-full h-8 md:h-10 flex rounded-full overflow-hidden mb-12 shadow-[0_0_20px_rgba(42,77,56,0.3)] bg-brand-darkgreen">
              {allocations.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`h-full ${item.color} flex items-center justify-center relative group`}
                  title={`${item.name} (${item.percent}%)`}
                >
                  <span className="text-[10px] md:text-xs font-bold text-black/70 drop-shadow-sm">{item.percent}%</span>
                  
                  {/* Optional Tooltip for Hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-brand-dark text-white text-xs p-2 rounded shadow-xl whitespace-nowrap transition-opacity z-20 pointer-events-none">
                    {item.name}: {item.percent}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Allocation Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {allocations.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
                  className="bg-brand-dark/80 p-5 rounded-xl border border-brand-green/30 flex flex-col items-center text-center hover:border-brand-accent/50 transition-colors"
                >
                  <div className={`w-5 h-5 rounded-full ${item.color} mb-4 shadow-lg shadow-black/50`}></div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.name}</h4>
                  <p className="text-brand-accent font-display text-xl mb-1">{item.percent}%</p>
                  <p className="text-brand-light/60 text-xs mb-3 font-mono">{item.amount}</p>
                  <p className="text-brand-light/80 text-xs italic mt-auto border-t border-brand-green/30 pt-3">"{item.details}"</p>
                </motion.div>
             ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
