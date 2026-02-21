import { type FC, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Store, Maximize2, ArrowRight, MapPin, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

interface PropertiesProps {
  showContent: boolean;
}

export const Properties: FC<PropertiesProps> = ({ showContent }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      }, 
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="relative z-10 bg-marina-cream w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 ref={titleRef} className={`text-5xl font-cormorant font-bold text-marina-dark mb-6 relative inline-block ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
          Izdvajamo iz ponude
          <div className="absolute -bottom-2 left-1/2 w-32 h-0.5 bg-marina-gold transform -translate-x-1/2" />
        </h2>
        <p ref={descriptionRef} className={`text-lg text-marina-dark/80 mb-8 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-200`}>
          Otkrijte našu pažljivo odabranu kolekciju luksuznih stanova. Svaka jedinica je dizajnirana da pruži vrhunski komfor i moderan životni prostor.
        </p>
        </div>

        <div ref={cardsRef} className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} transition-all duration-1000 delay-400`}>
          {[
            {
              image: "/images/BOSS/3d stanovi/1-18.png",
              title: "Stan 18",
              type: "Garsonjera",
              area: "29,20m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: false
            },
            {
              image: "/images/BOSS/3d stanovi/2-19.png",
              title: "Stan 19",
              type: "Jednosoban",
              area: "40,89m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: false
            },
            {
              image: "/images/BOSS/3d stanovi/3-20.png",
              title: "Stan 20",
              type: "Garsonjera",
              area: "29,20m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: false
            },
            {
              image: "/images/BOSS/3d stanovi/4-12-21-29.png",
              title: "Stan 21",
              type: "Jednosoban",
              area: "47,93m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: true
            },
            {
              image: "/images/BOSS/3d stanovi/5-13-22-30.png",
              title: "Stan 22",
              type: "Jednosoban",
              area: "36,29m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: true
            },
            {
              image: "/images/BOSS/3d stanovi/6-14-23-31.png",
              title: "Stan 23",
              type: "Jednosoban",
              area: "40,94m²",
              features: ["Terasa", "Lift", "Parking"],
              sold: true
            }
          ].map((apartment, index) => (
            <div key={index} className={`relative bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-500 shadow-lg group h-full ${apartment.sold ? 'border-red-500/30 cursor-not-allowed' : 'border-marina-gold/20 hover:bg-marina-blue hover:border-marina-gold/40'}`}>
              {apartment.sold && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className="text-red-500 font-black text-3xl sm:text-5xl transform -rotate-12 select-none tracking-widest opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    PRODATO
                  </span>
                </div>
              )}
              <div className={`${apartment.sold ? 'blur-[2px] opacity-50' : ''}`}>
                <div className="relative aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={apartment.image}
                    alt={apartment.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2B]/90 via-[#1B3964]/30 to-transparent" />
                  {apartment.sold && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-white shadow-md backdrop-blur-sm bg-red-500">
                        Prodato
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div>
                      <h3 className="text-[13px] sm:text-xl font-bold text-white">{apartment.title}</h3>
                      <p className="text-[11px] sm:text-base text-marina-gold/80">{apartment.type}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-6">
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-[11px] sm:text-base whitespace-nowrap">Cena:</span>
                      <p className="text-[11px] sm:text-base font-medium text-white">
                        od 2.000€/m²
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-[11px] sm:text-base whitespace-nowrap">Površina:</span>
                      <span className="text-[11px] sm:text-base font-medium text-white">{apartment.area}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {apartment.features.map((feature, fIndex) => (
                        <span key={fIndex} className="bg-marina-gold/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-sm text-white/80">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  {apartment.sold ? (
                    <div className="w-full bg-red-500/20 text-red-400 py-1.5 sm:py-3 px-2 sm:px-4 rounded flex items-center justify-center text-[10px] sm:text-base font-medium">
                      Prodato
                    </div>
                  ) : (
                    <Link
                      to={`/properties/apartment/${apartment.title.split(' ')[1]}`}
                      className="w-full bg-marina-dark group-hover:bg-marina-gold text-white py-1.5 sm:py-3 px-2 sm:px-4 rounded flex items-center justify-center gap-1 sm:gap-2 transition-all duration-500 backdrop-blur-sm group-hover:text-marina-dark relative overflow-hidden text-[10px] sm:text-base"
                      state={{ 
                        type: apartment.type,
                        area: apartment.area,
                        floor: 'III sprat',
                        image: apartment.image
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <span>Detaljnije</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}