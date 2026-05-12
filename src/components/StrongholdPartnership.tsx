import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StrongholdPartnership: React.FC = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: '01',
      title: t.partnership.steps[0].title,
      description: t.partnership.steps[0].description,
      icon: '🌍'
    },
    {
      number: '02',
      title: t.partnership.steps[1].title,
      description: t.partnership.steps[1].description,
      icon: '💳'
    },
    {
      number: '03',
      title: t.partnership.steps[2].title,
      description: t.partnership.steps[2].description,
      icon: '✨'
    }
  ];


  return (
    <section id="stronghold-partnership" className="py-32 bg-[#0A110D] text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header combined */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            {t.partnership.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-white tracking-tight leading-tight uppercase">
            {t.partnership.title_1} <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-accent">{t.partnership.title_2}</span>
          </h2>
          <p className="text-white/70 md:text-xl leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t.partnership.desc.replace('"Blockchain-Oriented"', '<strong class="text-white font-bold">"Blockchain-Oriented"</strong>') }}>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-brand-accent/40 transition-all shadow-2xl"
            >
              <div className="text-7xl font-black text-white/[0.02] absolute top-4 right-8 group-hover:text-brand-accent/5 transition-colors pointer-events-none">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-[0_10px_30px_rgba(0,200,150,0.3)] group-hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)] transition-all">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">{step.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
