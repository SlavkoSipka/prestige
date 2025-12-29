import { type FC } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOBILE_BACKGROUND_IMAGES } from '../../constants/images';

interface HeroProps {
  currentImageIndex: number;
  nextImageIndex: number;
  scrollY: number;
  showHeroContent: boolean;
  backgroundImages: string[];
  isLoaded: boolean;
}

export const Hero: FC<HeroProps> = ({
  currentImageIndex,
  nextImageIndex,
  scrollY,
  showHeroContent,
  backgroundImages,
  isLoaded
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
  <div className="relative h-[100vh] w-full">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B]/100 to-[#1B3964]/100 z-0" />
      <img
        src={window.innerWidth < 768 ? MOBILE_BACKGROUND_IMAGES[currentImageIndex] : backgroundImages[currentImageIndex]}
        alt="Luxury Property"
        className="absolute inset-0 w-full h-[120%] object-cover transition-opacity duration-1000 z-10"
        style={{
          filter: 'brightness(0.8)',
          top: `${-10 - (scrollY * 0.05)}%`
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000 z-10"
        style={{
          opacity: 0,
          backgroundImage: window.innerWidth < 768 ? 
            `url(${MOBILE_BACKGROUND_IMAGES[nextImageIndex]})` : 
            `url(${backgroundImages[nextImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          top: `${-10 - (scrollY * 0.05)}%`
        }}
      />
    </div>
    <div 
      className="absolute left-0 right-0 bottom-0 z-[5] text-center transform transition-all duration-500 bg-gradient-to-t from-[#0B1A2B]/100 via-[#0B1A2B]/100 to-transparent py-8 md:py-12"
      style={{
        opacity: Math.min(scrollY / 200, 1),
        transform: `translateY(${Math.min(scrollY / 5, 30)}px)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <img
        src="http://aislike.rs/BOSS/pRESTIGE%20VB%20(3).png"
        alt="VBprestige Logo"
        className="h-16 sm:h-20 md:h-24 mx-auto opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
      />
    </div>
    <div className="relative flex items-center justify-center h-full z-20">
      <div className={`text-center transition-all duration-500 px-4 ${showHeroContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-12">
          <span className="block opacity-0 animate-hero-title text-shadow-lg" style={{ animationPlayState: showHeroContent ? 'running' : 'paused' }}>Prestižne Nekretnine</span>
        </h1>
        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-12 text-shadow-sm">
          <span className="block opacity-0 animate-hero-subtitle" style={{ animationPlayState: showHeroContent ? 'running' : 'paused' }}>Novogradnja u srcu Vrnjačke Banje</span>
        </p>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className="inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 border border-marina-gold text-base sm:text-lg font-medium rounded-lg text-white bg-marina-blue/60 hover:bg-marina-gold hover:text-marina-dark backdrop-blur-sm transition-all duration-300 opacity-0 animate-hero-button shadow-xl"
            style={{ animationPlayState: showHeroContent ? 'running' : 'paused' }}
          >
            Pogledajte ponudu
            <ChevronDown 
              className={`ml-2 w-5 h-5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {showDropdown && (
            <div className="fixed left-1/2 -translate-x-1/2 mt-2 w-[95vw] sm:w-[520px] md:w-[620px] bg-marina-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300" style={{ zIndex: 50 }}>
              <div className="flex">
              <Link
                to="/properties" 
                className="w-1/2 group hover:bg-marina-gold/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src="http://aislike.rs/BOSS/1_9 - Photo-min.jpg" 
                    alt="VB Perla" 
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-marina-gold/90 text-marina-dark text-xs font-medium rounded-full">
                      U izgradnji
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:p-3 md:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">VB Perla</h3>
                  <p className="text-xs sm:text-sm text-white/70">Ekskluzivni stambeni objekat</p>
                </div>
              </Link>
              
              <Link 
                to="/vrnjcanka" 
                className="w-1/2 group hover:bg-marina-gold/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src="http://aislike.rs/BOSS/var3_6 - Photo.jpg" 
                    alt="Vrnjčanka" 
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-marina-gold/90 text-marina-dark text-xs font-medium rounded-full">
                      Završeno
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:p-3 md:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">Vrnjčanka</h3>
                  <p className="text-xs sm:text-sm text-white/70">Luksuzni stambeni objekat</p>
                </div>
              </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};