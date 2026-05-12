
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CurrentReality } from '../components/CurrentReality';
import { StrongholdPartnership } from '../components/StrongholdPartnership';
import { Roadmap } from '../components/Roadmap';
import { WalkthroughWidget } from '../components/WalkthroughWidget';
import { Footer } from '../components/Footer';

export const LandingPage = () => {

  return (
    <div className="selection:bg-brand-accent/30 selection:text-white bg-brand-dark min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <CurrentReality />
        <StrongholdPartnership />
        <Roadmap />
      </main>
      <Footer />
      <WalkthroughWidget />
    </div>
  );
};
