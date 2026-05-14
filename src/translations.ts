export type Language = 'es' | 'en';

export const translations = {
  en: {
    header: {
      book_now: "Book Now",
    },
    hero: {
      badge: "Paradise & Beyond",
      unlock: "Unlock The",
      authentic: "Authentic Costa Rica",
      subtitle_1: "Your frictionless portal to local experiences and products, ",
      powered_by: "powered by Stellar",
      discover: "Discover Packages",
      how_it_works: "How It Works",
      scroll: "Explore"
    },
    current_reality: {
      subtitle: "Curated Experiences",
      title_1: "Our Partners",
      title_2: "& Ecosystem",
      description: "Uniting communities through blockchain technology to generate real human impact. We use the Stellar ecosystem to empower our partners, ensuring that technological progress always translates into social and environmental benefits.",
      explore_btn: "Explore Experience",
      jungle_fish: {
        title: "Jungle Fish Sanctuary",
        desc: "The heart of the ecosystem. A luxury eco-lodge in San Luis, Costa Rica, focused on relaxation, tilapia sanctuaries, premium hospitality, and sustainability."
      },
      trapiche: {
        title: "Heritage Sugar Mill",
        desc: "Living cultural preservation. A traditional sugarcane and coffee production center where funds help maintain ancient operations intact."
      },
      finca: {
        title: "Karl's Organic Farm",
        desc: "Organic regenerative agriculture supplying the ecosystem's food, proving that tourism and permaculture can be profitable and symbiotic."
      }
    },
    roadmap: {
      trust_subtitle: "Trust & Transparency",
      trust_title_1: "Real World",
      trust_title_2: "Backed Assets",
      trust_desc: "Every package is backed by tangible assets and revenue streams from our local partners. Paradise & Beyond transforms land and tradition into secure digital value.",
      whitepaper_btn: "Read our Whitepaper",
      perk_1_title: "Premium Cabins",
      perk_1_desc: "Luxury lodging infrastructure at Jungle Fish Sanctuary.",
      perk_2_title: "Culture & Coffee",
      perk_2_desc: "Preserving tradition and milling at Trapiche de Pemo.",
      perk_3_title: "Sustainability",
      perk_3_desc: "Regenerative organic agriculture at Karl's Farm.",
      timeline_title: "Timeline to Expansion",
      phase_1: "Phase 1 - Q2 2026",
      phase_1_title: "Paradise & Beyond Launch",
      phase_1_desc: "Integration of founding partners and opening of the ecosystem portal on Stellar network.",
      phase_2: "Phase 2 - Q3 2026",
      phase_2_title: "Infrastructure Expansion",
      phase_2_desc: "Upgrades at Jungle Fish, automation at Trapiche de Pemo, and new systems at Karl's Farm.",
      phase_3: "Phase 3 - Q4 2026",
      phase_3_title: "Global Ecosystem",
      phase_3_desc: "Full opening of redemptions and onboarding of new local partners into the network.",
      backed_by: "Backed by Innovation",
      backed_desc: "Paradise & Beyond is built on the world's leading institutional blockchain infrastructure, ensuring security, transparency, and global reach."
    },
    partnership: {
      badge: "Infrastructure & Ecosystem",
      title_1: "Seamless Payments &",
      title_2: "Financial Sovereignty",
      desc: "Our infrastructure on the Stellar network guarantees low-cost transactions that act as a bridge for collective well-being. We serve as connectors by integrating Stronghold Pay technology into local businesses, providing them with on-chain auditability and connecting them with a global community focused on social impact and the common good.",
      steps: [
        {
          title: 'Explore the Ecosystem',
          description: 'Discover lodging, culture, and agriculture in our partner network.'
        },
        {
          title: 'Pay with Stronghold',
          description: 'Use your card or crypto quickly and securely. We manage the conversion.'
        },
        {
          title: 'Enjoy & Support',
          description: 'Instant, low-cost transactions that directly impact the local economy.'
        }
      ]
    },
    footer: {
      transparency: "Total Transparency",
      faqs: "Frequently Asked Questions",
      disclaimer_title: "Legal Disclaimer / Warning:",
      disclaimer_1: "Participation in the Paradise & Beyond ecosystem does not represent an investment in a regulated financial entity or a security in traditional jurisdictions.",
      disclaimer_2: "The services acquired grant usage rights at the Jungle Fish Eco-Resort in San Luis, Costa Rica, and our partnered businesses. Payments are processed through the Stronghold Pay infrastructure and settled on the Stellar network.",
      disclaimer_3: "By using our payment platform and booking experiences, you agree to the terms of service. Transfers are auditable on the blockchain and subject to Stronghold Pay's terms.",
      terms: "Terms",
      whitepaper: "Whitepaper"
    },
    faqs: [
      {
        q: "How do payments work in the ecosystem?",
        a: "We utilize Stronghold Pay's infrastructure and the Stellar network to process payments almost instantly (3-5 seconds) with minimal transaction costs. This allows us to connect local businesses directly with their customers."
      },
      {
        q: "Do I need crypto experience to pay?",
        a: "Not at all. Our integration with Stronghold Pay allows you to use your traditional debit/credit card or bank account. We manage all the blockchain technology transparently in the background."
      },
      {
        q: "Why do we use Stronghold Pay and the Stellar network?",
        a: "Stellar is the leading institutional network designed to move money quickly and securely. Stronghold Pay acts as the regulated bridge, ensuring your fiat payments are settled instantly on the network."
      },
      {
        q: "When can I enjoy the benefits at the eco-resort?",
        a: "Stays at the new Jungle Fish Sanctuary complex will open in Q4 2026. However, you can start using our network at partner businesses, such as Trapiche de Pemo, very soon."
      }
    ],
    whitepaper: {
      badge: "Institutional Document",
      title_1: "Paradise & Beyond",
      title_2: "Litepaper",
      sec_1_title: "1. Executive Summary",
      sec_1_desc: "Paradise & Beyond is not a speculative token or a simple booking platform. It is a bridge ecosystem designed to connect Costa Rica's physical, tourism, and agricultural economy with decentralized, global financial infrastructure. By integrating real businesses with near-instant settlements, we build a network where tradition and sustainability converge with blockchain transparency.",
      sec_2_title: "2. The Current Problem",
      sec_2_desc: "The tourism and commercial industry in developing regions faces immense friction barriers:",
      sec_2_li_1: "High Commissions: Tourism platforms (OTAs) and traditional payment processors retain between 15% and 30% of the value paid by the user, bleeding local businesses.",
      sec_2_li_2: "Settlement Speed: An international card payment can take days to settle and be deposited into the bank accounts of rural businesses.",
      sec_2_li_3: "Value Disconnect: Consumers seek authentic and sustainable experiences, but have no way of knowing if their money truly supports the producer or the local ecosystem.",
      sec_3_title: "3. The Technological Solution",
      sec_3_desc: "To solve these problems, Paradise & Beyond has discarded the issuance of volatile utility tokens in favor of robust, consumer-friendly (Web2.5) infrastructure:",
      sec_3_li_1: "Stellar Network: We use Stellar as our base settlement layer. Transactions are confirmed in 3-5 seconds, with fees representing fractions of a cent, enabling viable micro-payments.",
      sec_3_li_2: "Stronghold Pay: Acts as our regulated bridge (on/off ramp). Users pay with their traditional methods (cards, banks), and Stronghold processes, settles, and transfers the value to the ecosystem using USDC or Stellar balances invisibly to the user.",
      sec_3_li_3: "Soroban (Smart Contracts): As the ecosystem evolves, we will use Soroban to program loyalty, transparent rewards, and agricultural fund traceability, without requiring users to interact with complex wallets.",
      sec_4_title: "4. Our Integrated Ecosystem",
      sec_4_desc: "The value of Paradise & Beyond is backed by real-world operations (RWA - Real World Assets). Our founding partners include:",
      sec_5_title: "5. Future Vision",
      sec_5_desc: "Our 5-year goal is to standardize this 'Sovereign Tourism Stack'. Once the Jungle Fish model proves that hotel ecosystems can be financed and operated without extractive intermediaries, we will package our Stellar/Stronghold solution as a service (B2B) for other eco-resorts in Latin America.",
      quote: "\"True value is not minted in cyberspace; it is cultivated in the earth, served at the table, and experienced in nature. Blockchain is merely the hyper-efficient highway that allows us to connect it all.\"",
      start: "Start Exploring"
    }
  },
  es: {
    header: {
      book_now: "Reservar",
    },
    hero: {
      badge: "Paradise & Beyond",
      unlock: "Descubre La",
      authentic: "Auténtica Costa Rica",
      subtitle_1: "Tu portal sin fricciones hacia experiencias y productos locales, ",
      powered_by: "potenciado por Stellar",
      discover: "Ver Paquetes Locales",
      how_it_works: "Cómo Funciona",
      scroll: "Explorar"
    },
    current_reality: {
      subtitle: "Experiencias Curadas",
      title_1: "Nuestros Aliados",
      title_2: "& Ecosistema",
      description: "Uniendo comunidades mediante tecnología blockchain para generar un impacto humano real. Utilizamos el ecosistema Stellar para empoderar a nuestros socios, garantizando que el progreso tecnológico se traduzca siempre en beneficio social y ambiental.",
      explore_btn: "Explorar Experiencia",
      jungle_fish: {
        title: "Jungle Fish Sanctuary",
        desc: "El corazón del ecosistema. Un eco-lodge de lujo en San Luis, enfocado en el descanso, santuarios de tilapia, hospitalidad premium y sustentabilidad."
      },
      trapiche: {
        title: "Trapiche de Pemo",
        desc: "Preservación cultural viva. Un centro de producción tradicional de caña de azúcar y café donde los fondos ayudan a mantener operaciones milenarias intactas."
      },
      finca: {
        title: "Finca de Karl",
        desc: "Agricultura regenerativa orgánica que suple los alimentos del ecosistema, demostrando que el turismo y la permacultura pueden ser rentables y simbióticos."
      }
    },
    roadmap: {
      trust_subtitle: "Confianza y Transparencia",
      trust_title_1: "Respaldado por",
      trust_title_2: "Activos Reales",
      trust_desc: "Cada paquete está respaldado por activos tangibles y flujos de ingresos de nuestros socios locales. Paradise & Beyond transforma la tierra y la tradición en valor digital seguro.",
      whitepaper_btn: "Leer nuestro Whitepaper",
      perk_1_title: "Cabañas Premium",
      perk_1_desc: "Infraestructura de hospedaje de lujo en Jungle Fish Sanctuary.",
      perk_2_title: "Cultura y Café",
      perk_2_desc: "Preservación de la tradición y molienda en el Trapiche de Pemo.",
      perk_3_title: "Sustentabilidad",
      perk_3_desc: "Agricultura orgánica regenerativa en la Finca de Karl.",
      timeline_title: "Cronograma de Expansión",
      phase_1: "Fase 1 - Q2 2026",
      phase_1_title: "Lanzamiento de Paradise & Beyond",
      phase_1_desc: "Integración de socios fundadores y apertura del portal del ecosistema en la red Stellar.",
      phase_2: "Fase 2 - Q3 2026",
      phase_2_title: "Expansión de Infraestructura",
      phase_2_desc: "Mejoras en Jungle Fish, automatización en Trapiche de Pemo y nuevos sistemas en la Finca de Karl.",
      phase_3: "Fase 3 - Q4 2026",
      phase_3_title: "Ecosistema Global",
      phase_3_desc: "Apertura total de canjes e integración de nuevos socios locales a la red.",
      backed_by: "Respaldado por la Innovación",
      backed_desc: "Paradise & Beyond está construido sobre la infraestructura blockchain institucional líder en el mundo, garantizando seguridad, transparencia y alcance global."
    },
    partnership: {
      badge: "Infrastructure & Ecosystem",
      title_1: "Pagos Fluidos &",
      title_2: "Soberanía Financiera",
      desc: "Nuestra infraestructura en la red Stellar garantiza transacciones de bajo costo que actúan como un puente para el bienestar colectivo. Servimos como conectores integrando la tecnología de Stronghold Pay en negocios locales, brindándoles auditabilidad en cadena y conectándolos con una comunidad global enfocada en el impacto social y el bien común.",
      steps: [
        {
          title: 'Explora el Ecosistema',
          description: 'Descubre hospedaje, cultura y agricultura en nuestra red de socios.'
        },
        {
          title: 'Paga con Stronghold',
          description: 'Usa tu tarjeta o cripto de forma rápida y segura. Nosotros gestionamos la conversión.'
        },
        {
          title: 'Disfruta & Apoya',
          description: 'Transacciones instantáneas de bajo costo que impactan directamente la economía local.'
        }
      ]
    },
    footer: {
      transparency: "Transparencia Total",
      faqs: "Preguntas Frecuentes",
      disclaimer_title: "Disclaimer Legal / Advertencia:",
      disclaimer_1: "La participación en el ecosistema Paradise & Beyond no representa una inversión en una entidad financiera regulada ni un valor bursátil en jurisdicciones tradicionales.",
      disclaimer_2: "Los servicios adquiridos otorgan derechos de uso en el Jungle Fish Eco-Resort en San Luis, Costa Rica y nuestros comercios aliados. Los pagos son procesados a través de la infraestructura de Stronghold Pay y liquidados en la red Stellar.",
      disclaimer_3: "Al utilizar nuestra plataforma de pagos y reservar experiencias, usted acepta los términos de servicio. Las transferencias son auditables en la cadena de bloques y sujetas a los términos de Stronghold Pay.",
      terms: "Términos",
      whitepaper: "Whitepaper"
    },
    faqs: [
      {
        q: "¿Cómo funcionan los pagos en el ecosistema?",
        a: "Utilizamos la infraestructura de Stronghold Pay y la red Stellar para procesar pagos de forma casi instantánea (3-5 segundos) y con costos de transacción mínimos. Esto nos permite conectar a comercios locales directamente con sus clientes."
      },
      {
        q: "¿Necesito experiencia en crypto para pagar?",
        a: "En absoluto. Nuestra integración con Stronghold Pay te permite usar tu tarjeta de débito/crédito tradicional o tu cuenta bancaria. Nosotros gestionamos toda la tecnología blockchain de forma transparente en el fondo."
      },
      {
        q: "¿Por qué utilizamos Stronghold Pay y la red Stellar?",
        a: "Stellar es la red líder institucional diseñada para mover dinero rápido y seguro. Stronghold Pay actúa como el puente regulado, garantizando que tus pagos fiat se liquiden instantáneamente en la red."
      },
      {
        q: "¿Cuándo podré disfrutar de los beneficios en el eco-resort?",
        a: "Las estancias en el nuevo complejo de Jungle Fish Sanctuary abrirán en Q4 2026. Sin embargo, puedes empezar a utilizar nuestra red en comercios aliados, como Trapiche de Pemo, muy pronto."
      }
    ],
    whitepaper: {
      badge: "Documento Institucional",
      title_1: "Paradise & Beyond",
      title_2: "Litepaper",
      sec_1_title: "1. Resumen Ejecutivo",
      sec_1_desc: "Paradise & Beyond no es un token especulativo ni una simple plataforma de reservas. Es un ecosistema puente diseñado para conectar la economía física, turística y agrícola de Costa Rica con la infraestructura financiera descentralizada y global. Al integrar comercios reales con liquidaciones casi instantáneas, construimos una red donde la tradición y la sustentabilidad convergen con la transparencia de blockchain.",
      sec_2_title: "2. El Problema Actual",
      sec_2_desc: "La industria turística y comercial en regiones en desarrollo enfrenta barreras de fricción inmensas:",
      sec_2_li_1: "Altas Comisiones: Plataformas de turismo (OTAs) y procesadores de pago tradicionales retienen entre el 15% y el 30% del valor pagado por el usuario, desangrando a los negocios locales.",
      sec_2_li_2: "Velocidad de Liquidación: Un pago internacional con tarjeta puede tardar días en liquidarse y depositarse en las cuentas bancarias de los comercios rurales.",
      sec_2_li_3: "Desconexión de Valor: Los consumidores buscan experiencias auténticas y sustentables, pero no tienen forma de saber si su dinero realmente apoya al productor o al ecosistema local.",
      sec_3_title: "3. La Solución Tecnológica",
      sec_3_desc: "Para resolver estos problemas, Paradise & Beyond ha descartado la emisión de tokens volátiles de utilidad a favor de una infraestructura robusta y amigable para el consumidor (Web2.5):",
      sec_3_li_1: "Stellar Network: Utilizamos Stellar como nuestra capa base de liquidación. Las transacciones se confirman en 3-5 segundos, con tarifas que representan fracciones de centavo, permitiendo micro-pagos viables.",
      sec_3_li_2: "Stronghold Pay: Actúa como nuestro puente regulado (on/off ramp). Los usuarios pagan con sus métodos tradicionales (tarjetas, bancos), y Stronghold procesa, liquida y transfiere el valor al ecosistema utilizando USDC o balances Stellar de forma invisible para el usuario.",
      sec_3_li_3: "Soroban (Smart Contracts): A medida que el ecosistema evoluciona, utilizaremos Soroban para programar lealtad, recompensas transparentes y trazabilidad de fondos agrícolas, sin requerir que los usuarios interactúen con billeteras complejas.",
      sec_4_title: "4. Nuestro Ecosistema Integrado",
      sec_4_desc: "El valor de Paradise & Beyond está respaldado por operaciones del mundo real (RWA - Real World Assets). Nuestros socios fundadores incluyen:",
      sec_5_title: "5. Visión a Futuro",
      sec_5_desc: "Nuestra meta a 5 años es estandarizar este 'Stack de Turismo Soberano'. Una vez que el modelo de Jungle Fish pruebe que los ecosistemas hoteleros pueden financiarse y operar sin intermediarios extractivos, empaquetaremos nuestra solución Stellar/Stronghold como un servicio (B2B) para otros eco-resorts en Latinoamérica.",
      quote: "\"El valor verdadero no se acuña en el ciberespacio; se cultiva en la tierra, se sirve en la mesa y se experimenta en la naturaleza. Blockchain es solo la carretera hiper-eficiente que nos permite conectarlo todo.\"",
      start: "Comenzar a Explorar"
    }
  }
};
