import { type FC } from 'react';
import { Home, ArrowRight, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ApartmentCardProps {
  number: string;
  type: string;
  area: string;
  status: 'available' | 'sold' | 'reserved';
  floor: string;
}

export const ApartmentCard: FC<ApartmentCardProps> = ({ number, type, area, status, floor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const shouldHighlight = location.state?.highlightApartment === number;

  const pricePerSquareMeter = parseFloat(area) < 40 ? '1.900' : '1.800';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldHighlight && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardRef.current.classList.add('highlight-pulse');
    }
  }, [shouldHighlight]);

  const statusColors = {
    available: 'bg-emerald-500',
    sold: 'bg-red-500',
    reserved: 'bg-amber-500'
  };

  // Override status to always show as available
  const displayStatus = 'available';

  const getImage = (number: string) => {
    if (number === '1') return '/images/BOSS/3d stanovi/1-18.png';
    if (number === '2') return '/images/BOSS/3d stanovi/2-19.png';
    if (number === '3') return '/images/BOSS/3d stanovi/3-20.png';
    if (number === '4') return '/images/BOSS/3d stanovi/4-12-21-29.png';
    if (number === '5') return '/images/BOSS/3d stanovi/5-13-22-30.png';
    if (number === '6') return '/images/BOSS/3d stanovi/6-14-23-31.png';
    if (number === '7') return '/images/BOSS/3d stanovi/7-15-24.png';
    if (number === '8') return '/images/BOSS/3d stanovi/8-16-25.png';
    if (number === '9') return '/images/BOSS/3d stanovi/9-17-26.png';
    if (number === '10') return '/images/BOSS/3d stanovi/10-27.png';
    if (number === '11') return '/images/BOSS/3d stanovi/11-28.png';
    if (number === '12') return '/images/BOSS/3d stanovi/4-12-21-29.png';
    if (number === '13') return '/images/BOSS/3d stanovi/5-13-22-30.png';
    if (number === '14') return '/images/BOSS/3d stanovi/6-14-23-31.png';
    if (number === '15') return '/images/BOSS/3d stanovi/7-15-24.png';
    if (number === '16') return '/images/BOSS/3d stanovi/8-16-25.png';
    if (number === '17') return '/images/BOSS/3d stanovi/9-17-26.png';
    if (number === '18') return '/images/BOSS/3d stanovi/1-18.png';
    if (number === '19') return '/images/BOSS/3d stanovi/2-19.png';
    if (number === '20') return '/images/BOSS/3d stanovi/3-20.png';
    if (number === '21') return '/images/BOSS/3d stanovi/4-12-21-29.png';
    if (number === '22') return '/images/BOSS/3d stanovi/5-13-22-30.png';
    if (number === '23') return '/images/BOSS/3d stanovi/6-14-23-31.png';
    if (number === '24') return '/images/BOSS/3d stanovi/7-15-24.png';
    if (number === '26') return '/images/BOSS/3d stanovi/9-17-26.png';
    if (number === '27') return '/images/BOSS/3d stanovi/10-27.png';
    if (number === '28') return '/images/BOSS/3d stanovi/11-28.png';
    if (number === '29') return '/images/BOSS/3d stanovi/4-12-21-29.png';
    if (number === '30') return '/images/BOSS/3d stanovi/5-13-22-30.png';
    if (number === '31') return '/images/BOSS/3d stanovi/6-14-23-31.png';
    if (number === '32') return '/images/BOSS/3d stanovi/32.png';
    if (number === '33') return '/images/BOSS/3d stanovi/33.png';
    if (number === '34') return '/images/BOSS/3d stanovi/34.png';
    return '';
  };

  const getLink = () => {
    if (number === 'L1') return '/properties/business-space';
    return `/properties/apartment/${number}`;
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg overflow-hidden transition-all duration-500 hover:bg-marina-blue hover:border-marina-gold/40 shadow-lg transform ${shouldHighlight ? 'border-marina-gold opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="aspect-[3/2] sm:aspect-[4/3] relative overflow-hidden">
        <img
          src={getImage(number)}
          alt={`Stan ${number}`}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2B]/90 via-[#1B3964]/30 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white shadow-md backdrop-blur-sm ${statusColors[displayStatus]}`}>
            Dostupno
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
            <Home className="w-4 h-4 text-marina-gold" />
          </div>
          <div>
            <h3 className="text-xs sm:text-base font-bold text-white">Stan {number}</h3>
            <p className="text-marina-gold text-[10px] sm:text-[11px]">{type}</p>
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center justify-between text-white/70">
            <span className="text-[10px] sm:text-sm">P:</span>
            <span className="font-medium text-white text-[10px] sm:text-sm whitespace-nowrap">{area}</span>
          </div>
          <div className="flex items-center justify-between text-white/70">
            <span className="text-[10px] sm:text-sm">S:</span>
            <span className="font-medium text-white text-[10px] sm:text-sm">{floor}</span>
          </div>
          <div className="flex items-center justify-between text-white/70">
            <span className="text-[10px] sm:text-sm whitespace-nowrap">Cena/m²:</span>
            <span className="font-medium text-white text-[10px] sm:text-sm">{pricePerSquareMeter}€</span>
          </div>
        </div>

        <div className="pt-3 border-t border-marina-gold/20">
          <Link 
            to={getLink()}
            state={{ 
              scrollPosition: window.scrollY,
              type,
              area,
              floor,
              image: getImage(number)
            }}
            className="w-full bg-marina-dark group-hover:bg-marina-gold text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded flex items-center justify-center gap-1 sm:gap-2 transition-all duration-500 backdrop-blur-sm group-hover:text-marina-dark relative overflow-hidden text-[10px] sm:text-sm" 
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span>Više</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};