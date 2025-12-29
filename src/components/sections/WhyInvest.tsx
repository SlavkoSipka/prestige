import { type FC, useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building2, Landmark } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { INVESTMENT_IMAGES } from '../../constants/images';

export const WhyInvest: FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % INVESTMENT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + INVESTMENT_IMAGES.length) % INVESTMENT_IMAGES.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (cardsContainerRef.current) observer.observe(cardsContainerRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hidden lg:block relative z-10 py-32 bg-gradient-to-r from-[#0B1A2B] via-[#1B3964] to-[#0B1A2B] overflow-hidden">
      <div className="absolute inset-0 lg:block">
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-marina-gold/5"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
            filter: 'blur(100px)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-marina-blue/10"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
            filter: 'blur(100px)'
          }}
        />
      </div>
      <div className="absolute right-0 top-0 w-[60%] h-full">
        <div className="relative h-full w-full overflow-hidden hidden lg:block">
          <div className="absolute inset-0 bg-[#1B3964]/30" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[75%] aspect-[16/10] group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B]/40 to-transparent" />
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform transition-all duration-700 group-hover:scale-105">
                <img
                  src={INVESTMENT_IMAGES[currentImageIndex]}
                  alt="Vrnjačka Banja"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2B]/80 via-[#0B1A2B]/20 to-transparent" />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-marina-gold p-2.5 backdrop-blur-sm rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:text-marina-dark transition-colors" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-marina-gold p-2.5 backdrop-blur-sm rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-marina-dark transition-colors" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {INVESTMENT_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-sm transition-all duration-500 ${
                        index === currentImageIndex 
                          ? 'bg-marina-gold scale-110 shadow-[0_0_10px_rgba(196,169,98,0.5)]' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto">
        <div className="max-w-3xl px-4 lg:pl-8">
          <h2 ref={titleRef} className="text-3xl lg:text-6xl font-cormorant font-bold text-white mb-4 lg:mb-8 overflow-hidden investment-title relative inline-block">
            <span>
              Investiciona prilika
            </span>
            <div className="absolute -bottom-4 left-0 w-32 h-1 bg-marina-gold transform scale-x-0 animate-[scaleIn_1s_ease-out_forwards_0.5s] origin-left" />
          </h2>
          <p ref={descriptionRef} className="text-base lg:text-xl text-white/90 mb-6 lg:mb-16 overflow-hidden investment-description leading-relaxed">
            <span>
              800.000+ godišnjih posetilaca. Jedinstvena prilika za ulaganje.
            </span>
          </p>
          
          <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 pr-4 lg:pr-8">
            <div 
              ref={el => cardRefs.current[0] = el}
              className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 p-5 lg:p-8 shadow-lg about-card backdrop-blur-sm investment-card border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500">
              <div className="w-12 lg:w-14 h-12 lg:h-14 bg-[#2A4A7F] rounded-xl flex items-center justify-center mb-4 lg:mb-6 card-icon transform transition-all duration-500 group-hover:rotate-[360deg]">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-white mb-2 lg:mb-4 card-title">Stabilna Investicija</h3>
              <p className="text-sm lg:text-base text-white/70 card-text">
                Godišnji rast vrednosti 5-7%. Prihod od izdavanja do 8% godišnje.
              </p>
            </div>
            
            <div
              ref={el => cardRefs.current[1] = el}
              className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 p-5 lg:p-8 shadow-lg about-card backdrop-blur-sm investment-card border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500">
              <div className="w-12 lg:w-14 h-12 lg:h-14 bg-[#2A4A7F] rounded-xl flex items-center justify-center mb-4 lg:mb-6 card-icon transform transition-all duration-500 group-hover:rotate-[360deg]">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-white mb-2 lg:mb-4 card-title">Rastući Turizam</h3>
              <p className="text-sm lg:text-base text-white/70 card-text">
                15% više turista godišnje. Prosečan boravak produžen na 6 dana.
              </p>
            </div>
            
            <div
              ref={el => cardRefs.current[2] = el}
              className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 p-5 lg:p-8 shadow-lg about-card backdrop-blur-sm investment-card border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500">
              <div className="w-12 lg:w-14 h-12 lg:h-14 bg-[#2A4A7F] rounded-xl flex items-center justify-center mb-4 lg:mb-6 card-icon transform transition-all duration-500 group-hover:rotate-[360deg]">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-white mb-2 lg:mb-4 card-title">Premium Lokacija</h3>
              <p className="text-sm lg:text-base text-white/70 card-text">
                500m od Kraljevskog parka. Idealan spoj mira i pristupačnosti.
              </p>
            </div>
            
            <div
              ref={el => cardRefs.current[3] = el}
              className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 p-5 lg:p-8 shadow-lg about-card backdrop-blur-sm investment-card border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500">
              <div className="w-12 lg:w-14 h-12 lg:h-14 bg-[#2A4A7F] rounded-xl flex items-center justify-center mb-4 lg:mb-6 card-icon transform transition-all duration-500 group-hover:rotate-[360deg]">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-white mb-2 lg:mb-4 card-title">Pouzdani Investitor</h3>
              <p className="text-sm lg:text-base text-white/70 card-text">
                Dugogodišnje iskustvo. Dva uspešna projekta. Novi standardi kvaliteta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};