import React, { useState } from 'react';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * BuyModal Component
 * 
 * @stellar Web3 Integration Point
 * This component handles the user onboarding & disclaimer agreement before revealing the Vault Address.
 * 
 * Technical Roadmap for Stellar/Soroban Integration:
 * - Integration with @stellar/freighter-api using `isConnected()` and `getPublicKey()`.
 * - Replacement of the `agreed` checkbox with an actual on-chain transaction signing the Smart Contract terms via Soroban `invokeContract`.
 * - Transitioning the static Vault address to an automated escrow Soroban contract.
 */
export const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-brand-dark border border-brand-green w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden mt-10 mb-10">
        
        <div className="p-6 border-b border-brand-green flex justify-between items-center sticky top-0 bg-brand-dark z-10">
          <h2 className="text-2xl font-display font-bold text-white">
            Adquirir <span className="text-brand-accent">$JFISH</span>
          </h2>
          <button 
            onClick={onClose}
            className="text-brand-light/60 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Paso 1: Configurar Cartera Stellar</h3>
              <p className="text-brand-light/80">
                El token $JFISH vive en la red Stellar. Necesitas una cartera compatible para recibir tus tokens y distribuciones de utilidades.
              </p>
              
              <div className="space-y-4">
                <div className="bg-brand-green/10 border border-brand-green/30 p-4 rounded-xl flex items-start space-x-4">
                  <div className="text-brand-accent text-2xl mt-1">🦞</div>
                  <div>
                    <h4 className="font-bold text-white">Opción A: Lobstr Wallet (Recomendado para Móvil)</h4>
                    <p className="text-sm text-brand-light/70 mt-1">Descarga la app Lobstr en tu teléfono o úsala web. Es la forma más sencilla de gestionar activos en Stellar.</p>
                  </div>
                </div>

                <div className="bg-brand-green/10 border border-brand-green/30 p-4 rounded-xl flex items-start space-x-4">
                  <div className="text-brand-accent text-xl mt-1">🛳️</div>
                  <div>
                    <h4 className="font-bold text-white">Opción B: Freighter Wallet (Recomendado para PC)</h4>
                    <p className="text-sm text-brand-light/70 mt-1">Extensión de navegador ideal para interactuar con contratos inteligentes Soroban desde tu computadora.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full py-4 mt-6 bg-brand-green hover:bg-brand-green/80 text-white font-bold rounded-xl transition-colors"
                disabled={!isOpen} // just to quiet typescript empty errors
              >
                Continuar a Riesgos y Términos
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Paso 2: Reconocimiento de Riesgos</h3>
              
              <div className="bg-[#1a0f00] border border-[#ff6b00]/30 p-4 rounded-xl space-y-3 text-sm text-brand-light/80 h-64 overflow-y-auto">
                <p><strong>Por favor lee cuidadosamente:</strong></p>
                <p>1. <strong>Naturaleza del Token:</strong> $JFISH NO es una acción en una entidad financiera regulada. Es un activo digital de utilidad que otorga derechos de participación en ingresos operativos del Jungle Fish Eco-Resort.</p>
                <p>2. <strong>Riesgo Operativo:</strong> Las "Distribuciones Proyectadas" están sujetas al clima, mercado turístico en Costa Rica, y otras variables del negocio. Los resultados pasados no garantizan rendimientos futuros.</p>
                <p>3. <strong>Acuerdo Inteligente:</strong> Las distribuciones se envían por Smart Contracts en Soroban (Stellar) de manera automática. Debes mantener custodia de tu wallet para recibirlas.</p>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <input 
                  type="checkbox" 
                  id="agree" 
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-brand-accent cursor-pointer"
                />
                <label htmlFor="agree" className="text-sm text-brand-light/90 cursor-pointer select-none">
                  Entiendo que esta es una adquisición de tokens de utilidad y participación, y acepto los riesgos operativos asociados con proyectos en el mundo real.
                </label>
              </div>

              <div className="flex space-x-4 mt-6">
                <button 
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 bg-brand-dark border border-brand-green hover:bg-brand-green/30 text-white font-bold rounded-xl transition-colors"
                >
                  Atrás
                </button>
                <button 
                  onClick={() => setStep(3)}
                  disabled={!agreed}
                  className={`w-2/3 py-4 font-bold rounded-xl transition-colors ${agreed ? 'bg-brand-accent text-brand-dark hover:bg-brand-accent/90' : 'bg-brand-green/30 text-brand-light/40 cursor-not-allowed'}`}
                >
                  Ver Bóveda Stellar
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Paso 3: Bóveda de Adquisición</h3>
              <p className="text-brand-light/80 mb-6">
                Envía XLM o USDC a la siguiente dirección de la bóveda de Jungle Fish. Recibirás tus $JFISH equivalentes a la misma dirección emisora en un plazo máximo de 24 horas.
              </p>
              
              <div className="bg-brand-green/20 border border-brand-accent p-6 rounded-xl">
                <p className="text-xs text-brand-accent uppercase tracking-widest mb-3">Dirección Stellar (Vault)</p>
                <code className="text-sm md:text-base font-mono text-white break-all block p-4 bg-brand-dark rounded-lg border border-brand-green/50">
                  &lt;INSERT_STELLAR_VAULT_ADDRESS_HERE&gt;
                </code>
                <button 
                  className="mt-4 text-xs tracking-wider bg-brand-dark border border-brand-green px-4 py-2 rounded-full text-brand-light/80 hover:text-white"
                  onClick={() => navigator.clipboard.writeText('<INSERT_STELLAR_VAULT_ADDRESS_HERE>')}
                >
                  Copiar Dirección
                </button>
              </div>

              <div className="mt-8 p-4 bg-brand-dark border border-brand-green/50 rounded-xl">
                <p className="text-sm text-brand-light/60">
                  Asegúrate de enviar los fondos desde una cartera que controles (como Lobstr). <strong>NO envíes</strong> directamente desde un exchange (como Binance o Coinbase), ya que no podrás recibir los $JFISH.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
