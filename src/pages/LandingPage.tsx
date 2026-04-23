import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CurrentReality } from '../components/CurrentReality';
import { Tokenomics } from '../components/Tokenomics';
import { InvestmentPackages } from '../components/InvestmentPackages';
import { RoiCalculator } from '../components/RoiCalculator';
import { Roadmap } from '../components/Roadmap';
import { WalkthroughWidget } from '../components/WalkthroughWidget';
import { Footer } from '../components/Footer';
import { BuyModal } from '../components/BuyModal';

export const LandingPage = () => {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  return (
    <div className="selection:bg-brand-accent/30 selection:text-white bg-brand-dark min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <CurrentReality />
        <Tokenomics />
        <InvestmentPackages onOpenBuyModal={() => setIsBuyModalOpen(true)} />
        <RoiCalculator onOpenBuyModal={() => setIsBuyModalOpen(true)} />
        <Roadmap />
      </main>
      <Footer />
      <BuyModal isOpen={isBuyModalOpen} onClose={() => setIsBuyModalOpen(false)} />
      <WalkthroughWidget />
    </div>
  );
};
