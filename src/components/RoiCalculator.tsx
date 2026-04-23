import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RoiCalculatorProps {
  onOpenBuyModal?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBuyModal }) => {
  const [tokens, setTokens] = useState<number>(25000);
  const [monthlyUtility, setMonthlyUtility] = useState<number>(25000);

  const totalSupply = 10000000;
  const tokenPrice = 0.088;
  const roiShare = 0.30; // 30%

  const ownershipPercentage = tokens / totalSupply;
  const userMonthlyBenefit = (monthlyUtility * roiShare) * ownershipPercentage;
  const userYearlyBenefit = userMonthlyBenefit * 12;
  const initialInvestment = tokens * tokenPrice;

  // Formatting helpers
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };
  const formatCurrencyExact = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  };
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section id="calculator" className="py-24 bg-brand-dark/80 relative border-t border-brand-green/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#2ecc71]/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#3498db]/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Calculadora de <span className="text-[#2ecc71]">Beneficios</span>
          </h2>
          <p className="text-brand-light/70 max-w-2xl mx-auto text-lg">
            Estima el retorno potencial de tu contribución. Como holder de $JFISH, recibes beneficios basados en tu porcentaje sobre el total del suministro sobre el 30% de las utilidades netas del proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTROL PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#111] border border-[#2ecc71]/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2ecc71] to-[#3498db]"></div>
            
            <h3 className="text-2xl text-white font-medium mb-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ecc71]/20 text-[#2ecc71] text-sm">1</span>
              Ajusta tus parámetros
            </h3>

            {/* Token Slider */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <label className="block text-brand-light/60 text-sm tracking-wide uppercase mb-1">Tokens a adquirir</label>
                  <div className="text-3xl font-display text-white">{formatNumber(tokens)} <span className="text-[#2ecc71] text-xl px-1">$JFISH</span></div>
                </div>
                <div className="text-right">
                  <span className="text-brand-light/50 text-xs uppercase block">Inversión Estimada</span>
                  <span className="text-white font-mono">{formatCurrencyExact(initialInvestment)}</span>
                </div>
              </div>
              
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={tokens} 
                onChange={(e) => setTokens(Number(e.target.value))}
                className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-[#2ecc71] hover:accent-[#3498db] transition-colors"
              />
              <div className="flex justify-between text-xs text-brand-light/40 mt-2 font-mono">
                <span>1k</span>
                <span>50k</span>
                <span>100k</span>
              </div>
            </div>

            {/* Utility Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <label className="block text-brand-light/60 text-sm tracking-wide uppercase mb-1">Utilidad Mensual Estimada</label>
                  <div className="text-3xl font-display text-white">{formatCurrency(monthlyUtility)} <span className="text-brand-light/50 text-base">/mes</span></div>
                </div>
              </div>
              
              <input 
                type="range" 
                min="5000" 
                max="50000" 
                step="500"
                value={monthlyUtility} 
                onChange={(e) => setMonthlyUtility(Number(e.target.value))}
                className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-[#3498db] hover:accent-[#2ecc71] transition-colors"
              />
              <div className="flex justify-between text-xs text-brand-light/40 mt-2 font-mono">
                <span>$5k</span>
                <span>$25k</span>
                <span>$50k</span>
              </div>
              <p className="text-xs text-brand-light/50 mt-4 leading-relaxed">
                * Las fuentes de ingreso de la Fase 1 incluyen la ocupación de 7 cabañas ecológicas, tours, producción agrícola y servicios de la escuela de idiomas/restaurante.
              </p>
            </div>
          </motion.div>

          {/* RESULTS PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-gradient-to-br from-[#152e22] to-[#0f2129] border border-[#2ecc71]/40 p-8 rounded-3xl shadow-[0_0_40px_rgba(46,204,113,0.15)] flex-1 flex flex-col relative overflow-hidden">
              
              {/* Premium Background Glow inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ecc71] opacity-10 blur-3xl"></div>

              <h3 className="text-2xl text-white font-medium mb-6 flex items-center gap-3 relative z-10">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3498db]/20 text-[#3498db] text-sm">2</span>
                Tus Beneficios
              </h3>
              
              <div className="space-y-6 relative z-10">
                {/* Monthly */}
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-brand-light/60 text-sm uppercase tracking-wider mb-2">Ingreso Mensual Proyectado</p>
                  <p className="text-4xl font-display font-bold text-[#2ecc71] drop-shadow-md">
                    {formatCurrencyExact(userMonthlyBenefit)}
                  </p>
                </div>
                
                {/* Yearly */}
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-brand-light/60 text-sm uppercase tracking-wider mb-2">Ingreso Anual Proyectado</p>
                  <p className="text-4xl font-display font-bold text-[#3498db] drop-shadow-md">
                    {formatCurrencyExact(userYearlyBenefit)}
                  </p>
                  <p className="text-[#3498db]/60 text-xs mt-2 uppercase tracking-wide">
                    ROI Anual: {initialInvestment > 0 ? ((userYearlyBenefit / initialInvestment) * 100).toFixed(1) : 0}%
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-8 relative z-10">
                <button 
                  onClick={onOpenBuyModal}
                  className="w-full relative group overflow-hidden bg-[#2ecc71] text-black font-bold text-xl py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_40px_rgba(46,204,113,0.5)] hover:scale-[1.02]"
                >
                  {/* Sweep animation fx */}
                  <div className="absolute inset-0 w-0 bg-white/30 transition-all duration-300 ease-out group-hover:w-full"></div>
                  <span className="relative uppercase tracking-widest">Get $JFish Token</span>
                </button>
              </div>
            </div>
          </motion.div>
        
        </div>

        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] sm:text-xs text-brand-light/40 max-w-4xl mx-auto leading-relaxed border-t border-white/10 pt-6">
            Estas cifras son proyecciones basadas en escenarios operativos estimados. No garantizan rendimientos fijos. La utilidad varía según la ocupación y producción real del proyecto en la región de Pérez Zeledón. El 30% de la utilidad se distribuye de manera prorrateada basándose en el suministro total de 10M de tokens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
