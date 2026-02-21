import { type FC } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExpandedApartmentCardProps {
  number: string;
  type: string;
  area: string;
  floor: string;
  hasBalcony?: boolean;
  sold?: boolean;
}

export const ExpandedApartmentCard: FC<ExpandedApartmentCardProps> = ({
  number,
  type,
  area,
  floor,
  hasBalcony,
  sold = false
}) => (
  <div className={`col-span-full backdrop-blur-sm rounded-lg overflow-hidden relative ${sold ? 'bg-white/5 border border-red-500/30 cursor-not-allowed' : 'bg-white/5 border border-marina-gold/20'}`}>
    {sold && (
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-red-500 font-black text-5xl sm:text-7xl transform -rotate-12 select-none tracking-widest opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          PRODATO
        </span>
      </div>
    )}
    <div className={`flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 ${sold ? 'blur-[2px] opacity-50' : ''}`}>
      <div className="relative">
        <img 
          src="/images/BOSS/3d stanovi/8-16-25.png"
          alt={`Stan B${number}`}
          className="w-full h-full object-contain rounded"
        />
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Jednosoban stan {number}</h2>
          {sold && (
            <span className="px-2 py-1 rounded-full text-xs font-medium text-white bg-red-500 shadow-md">Prodato</span>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="bg-white/5 p-3 md:p-4 rounded-lg">
            <span className="text-xs text-marina-gold/80">Površina</span>
            <p className="text-lg md:text-2xl font-bold text-white mt-1">{area}</p>
          </div>
          <div className="bg-white/5 p-3 md:p-4 rounded-lg">
            <span className="text-xs text-marina-gold/80">Sprat</span>
            <p className="text-lg md:text-2xl font-bold text-white mt-1">{floor}</p>
          </div>
        </div>
        
        {hasBalcony && (
          <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg">
            <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
            <span className="text-white text-sm">Terasa</span>
          </div>
        )}
        
        <p className="text-white/80 text-sm md:text-base">
          Kupovinom jednosobnog stana u Vrnjačkoj Banji u zgradi "VB Perla" dobija se savršen prostor za miran život u dvoje ili nekretnina za izdavanje na turistički sve atraktivnijoj destinaciji.
        </p>

        {sold ? (
          <div className="w-full bg-red-500/20 text-red-400 py-2.5 md:py-3 px-4 rounded flex items-center justify-center gap-2 text-sm font-medium mt-4">
            <span>Prodato</span>
          </div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+381641234567"
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 bg-marina-gold hover:bg-white text-marina-dark rounded transition-all duration-300 gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>063 610 837</span>
              </a>
              <a 
                href="mailto:prestigegradnjavb@gmail.com"
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 border border-marina-gold text-white hover:bg-marina-gold hover:text-marina-dark rounded transition-all duration-300 gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>prestigegradnjavb@gmail.com</span>
              </a>
            </div>
            <div className="pt-4">
              <Link
                to={`/properties/apartment/${number}`}
                state={{ 
                  type,
                  area,
                  floor,
                  image: "/images/BOSS/3d stanovi/8-16-25.png"
                }}
                className="w-full bg-marina-dark hover:bg-marina-gold/90 text-white py-2.5 md:py-3 px-4 rounded flex items-center justify-center gap-2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span>Detaljnije</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);