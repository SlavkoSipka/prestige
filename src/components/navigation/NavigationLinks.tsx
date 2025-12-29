import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavigationLinksProps {
  isScrolled: boolean;
}

export const NavigationLinks: FC<NavigationLinksProps> = ({ isScrolled }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center space-x-8">
      <Link to="/" className={`font-medium transition-colors text-sm ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>Početna</Link>
      <Link to="/gallery" className={`font-medium transition-colors text-sm ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>Galerija</Link>
      <Link to="/location" className={`font-medium transition-colors text-sm ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>Lokacija</Link>
      <Link to="/contact" className={`font-medium transition-colors text-sm ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>Kontakt</Link>
      <div 
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`font-medium text-white nav-button ${!isScrolled ? 'bg-[#0B1A2B]/40' : ''} flex items-center gap-2`}
        >
          Nekretnine
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {showDropdown && (
          <div className="absolute top-[calc(100%-1px)] left-0 w-[300px] bg-marina-dark/95 backdrop-blur-sm rounded-b-lg overflow-hidden shadow-2xl transform transition-all duration-300 z-50">
            <Link
              to="/properties" 
              className="block group hover:bg-marina-gold/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="http://aislike.rs/BOSS/1_9 - Photo-min.jpg" 
                  alt="VB Perla" 
                  className="w-full h-40 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-marina-gold/90 text-marina-dark text-xs font-medium rounded-full">
                    U izgradnji
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">VB Perla</h3>
                <p className="text-sm text-white/70">Ekskluzivni stambeni objekat</p>
              </div>
            </Link>
            
            <Link 
              to="/vrnjcanka" 
              className="block group hover:bg-marina-gold/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="http://aislike.rs/BOSS/var3_6 - Photo.jpg" 
                  alt="Rezidencija Panorama" 
                  className="w-full h-40 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-marina-gold/90 text-marina-dark text-xs font-medium rounded-full">
                    Završeno
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">Vrnjčanka</h3>
                <p className="text-sm text-white/70">Luksuzni stambeni objekat</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};