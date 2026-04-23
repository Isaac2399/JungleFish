import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, X } from 'lucide-react';

interface BuildYourOwnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPurchase: (total: number) => void;
}

export const BuildYourOwnModal: React.FC<BuildYourOwnModalProps> = ({ isOpen, onClose, onConfirmPurchase }) => {
  const [days, setDays] = useState(1);
  const [people, setPeople] = useState(1);
  const [meals, setMeals] = useState(false);
  const [tours, setTours] = useState(0);
  const [permaculture, setPermaculture] = useState(0);
  const [healing, setHealing] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Base prices in USD
  const PRICES = {
    lodgingPerDay: 30,
    mealsPerDay: 15,
    tour: 20,
    permaculture: 25,
    healing: 30,
  };

  useEffect(() => {
    let total = 0;
    // Lodging
    total += days * people * PRICES.lodgingPerDay;
    // Meals
    if (meals) {
      total += days * people * PRICES.mealsPerDay;
    }
    // Tours
    total += tours * people * PRICES.tour;
    // Permaculture
    total += permaculture * people * PRICES.permaculture;
    // Healing
    total += healing * people * PRICES.healing;
    
    setTotalPrice(total);
  }, [days, people, meals, tours, permaculture, healing]);

  if (!isOpen) return null;

  const Counter = ({ label, value, setter, min = 0, priceLabel }: any) => (
    <div className="flex items-center justify-between py-3 border-b border-white/10">
      <div>
        <span className="text-white font-medium block">{label}</span>
        {priceLabel && <span className="text-xs text-brand-light/50">{priceLabel}</span>}
      </div>
      <div className="flex items-center gap-4 bg-white/5 rounded-full px-2 py-1">
        <button 
          onClick={() => setter(Math.max(min, value - 1))}
          className="p-1 text-brand-light/60 hover:text-white"
        >
          <Minus size={16} />
        </button>
        <span className="text-white w-6 text-center font-bold">{value}</span>
        <button 
          onClick={() => setter(value + 1)}
          className="p-1 text-brand-light/60 hover:text-white"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#08120b] border border-[#2D5A27] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden my-10"
      >
        <div className="p-6 border-b border-[#2D5A27]/50 flex justify-between items-center bg-[#08120b] sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-white">
              Build Your <span className="text-[#D4AF37]">Own Package</span>
            </h2>
            <p className="text-sm text-brand-light/60 mt-1">Personaliza tu inmersión en Jungle Fish</p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-light/60 hover:text-white rounded-full p-2 bg-white/5"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="space-y-2 mb-8">
            <Counter label="Días de Hospedaje" value={days} setter={setDays} min={1} priceLabel={`$${PRICES.lodgingPerDay} USD p/p por noche`} />
            <Counter label="Número de Personas" value={people} setter={setPeople} min={1} />
            
            <div className="flex items-center justify-between py-4 border-b border-white/10">
              <div>
                <span className="text-white font-medium block">Comidas Incluidas</span>
                <span className="text-xs text-brand-light/50">Desayuno, almuerzo y cena (${PRICES.mealsPerDay} USD p/p por día)</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={meals} onChange={(e) => setMeals(e.target.checked)} />
                <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2D5A27]"></div>
              </label>
            </div>

            <Counter label="Tours (Cascadas, Café, etc)" value={tours} setter={setTours} priceLabel={`$${PRICES.tour} USD p/p por tour`} />
            <Counter label="Clases de Permacultura" value={permaculture} setter={setPermaculture} priceLabel={`$${PRICES.permaculture} USD p/p por clase`} />
            <Counter label="Sesiones en Healing Center" value={healing} setter={setHealing} priceLabel={`$${PRICES.healing} USD p/p por sesión`} />
          </div>

          <div className="bg-[#2D5A27]/20 border border-[#2D5A27]/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <span className="text-sm text-brand-light/70 uppercase tracking-widest mb-2 font-bold">Total Estimado</span>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-display font-bold text-white">
                  {(totalPrice * 10).toLocaleString()}
                </span>
                <span className="text-[#D4AF37] font-bold tracking-wider">$JFISH</span>
              </div>
              <div className="text-brand-light/60 font-medium">
                ~${totalPrice.toLocaleString()} USD
              </div>
            </div>
            <p className="text-xs text-brand-light/50 mt-3">* El equivalente exacto de tokens se calculará al momento de la compra.</p>
          </div>

          <button 
             onClick={() => onConfirmPurchase(totalPrice)}
             className="w-full mt-6 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:scale-[1.02] text-[#08120b] font-bold rounded-xl transition-all shadow-lg text-sm uppercase tracking-widest"
          >
            Continuar al Pago
          </button>
        </div>
      </motion.div>
    </div>
  );
};
