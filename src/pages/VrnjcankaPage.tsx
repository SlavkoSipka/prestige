import { type FC, useState, useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { Phone, Mail, ArrowLeft, Home, MapPin, Maximize2 } from 'lucide-react';

interface SoldApartmentCardProps {
  number: string;
  area: string;
  floor: string;
  image: string;
}

const SoldApartmentCard: FC<SoldApartmentCardProps> = ({ number, area, floor, image }) => (
  <div className="bg-gradient-to-br from-[#1B3964]/20 to-[#0B1A2B]/20 backdrop-blur-xl border border-marina-gold/5 rounded-lg overflow-hidden shadow-lg group relative">
    <div className="aspect-[4/3] relative overflow-hidden">
      <img
        src={image}
        alt={`Stan ${number}`}
        className="w-full h-full object-contain bg-white p-2 sm:p-4"
      />
      <div className="absolute inset-0 bg-marina-dark/70 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-marina-gold font-bold text-3xl sm:text-5xl transform -rotate-12 select-none tracking-wider">PRODATO</span>
      </div>
    </div>
    <div className="relative p-2 sm:p-4 opacity-30 backdrop-blur-xl">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-marina-gold/10 flex items-center justify-center">
          <Home className="w-4 h-4 sm:w-5 sm:h-5 text-marina-gold/50" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white/50">Stan {number}</h3>
          <p className="text-marina-gold/40 text-xs sm:text-sm">Prodato</p>
        </div>
      </div>
      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-center gap-2 text-white/40 bg-white/5 p-2 sm:p-3 rounded-lg">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-marina-gold/5 flex items-center justify-center">
            <Maximize2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-marina-gold/40" />
          </div>
          <span className="text-[10px] sm:text-sm whitespace-nowrap">P: {area}</span>
        </div>
        <div className="flex items-center gap-2 text-white/40 bg-white/5 p-2 sm:p-3 rounded-lg">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-marina-gold/5 flex items-center justify-center">
            <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-marina-gold/40" />
          </div>
          <span className="text-[10px] sm:text-sm whitespace-nowrap">S: {floor}</span>
        </div>
      </div>
    </div>
  </div>
);

interface ApartmentCardProps {
  number: string;
  area: string;
  price: string;
  floor: string;
  image: string;
}

const ApartmentCard: FC<ApartmentCardProps> = ({ number, area, price, floor, image }) => (
  <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg overflow-hidden transition-all duration-500 hover:bg-marina-blue hover:border-marina-gold/40 shadow-lg group">
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      <div className="p-4 md:p-8">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-marina-gold/20 flex items-center justify-center">
            <Home className="w-6 h-6 text-marina-gold" />
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-white">Stan {number}</h3>
            <p className="text-marina-gold/80">Dvosoban stan</p>
          </div>
        </div>
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
              <Maximize2 className="w-4 h-4 text-marina-gold" />
            </div>
            <span className="text-sm md:text-base">Površina: {area}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-marina-gold" />
            </div>
            <span className="text-sm md:text-base">Sprat: {floor}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
              <Home className="w-4 h-4 text-marina-gold" />
            </div>
            <span className="text-sm md:text-base">Cena: {price}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-marina-gold/20">
          <a 
            href="tel:+38163646659"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-marina-gold hover:bg-white text-marina-dark rounded transition-all duration-300 gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>063 646 659</span>
          </a>
          <a 
            href="mailto:info@prestigegradnja.rs"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-marina-gold text-white hover:bg-marina-gold hover:text-marina-dark rounded transition-all duration-300 gap-2 text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>prestigegradnja@gmail.rs</span>
          </a>
        </div>
      </div>
      <div className="aspect-[4/3] md:aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={`Stan ${number}`}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4 md:p-0 bg-white"
        />
      </div>
    </div>
  </div>
);

export const VrnjcankaPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setShowContent(true)} />
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation
          isScrolled={isScrolled}
          showNavbar={showNavbar}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <main className="bg-[#0B1A2B] relative overflow-hidden">
          <div className="fixed inset-0 z-0">
            <img
              src="/images/BOSS/var3_6 - Photo.jpg"
              alt="Vrnjčanka"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-marina-dark/90 via-marina-dark/80 to-marina-dark" />
          </div>

          <div className="relative z-10 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="pt-20 mb-24">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-cormorant font-bold text-white mb-8 lg:mb-12">
                  <span className="block">Vrnjčanka</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-marina-gold mt-2 lg:mt-4">Preostala ponuda</span>
                </h1>
                <p className="text-white/80 max-w-2xl text-base lg:text-lg mt-8 lg:mt-12 leading-relaxed">
                  Ekskluzivni stambeni kompleks u centru Vrnjačke Banje. Poslednja dva stana u ponudi.
                </p>
              </div>

              <div className="space-y-8">
                <ApartmentCard
                  number="2"
                  area="40.30m²"
                  price="2.000€/m²"
                  floor="Prizemlje"
                  image="/images/BOSS/STAN 2 V.png"
                />
                <ApartmentCard
                  number="14"
                  area="47.19m²"
                  price="2.000€/m²"
                  floor="III sprat"
                  image="/images/BOSS/STAN 14 V.png"
                />
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-12">
                  {[...Array(30)].map((_, index) => {
                    const number = index + 1;
                    // Skip apartments 2 and 14 as they are shown above
                    if (number !== 2 && number !== 14) {
                      const area = 35 + Math.floor(Math.random() * 20);
                      
                      // Set specific images for apartments 17, 23, and 25
                      let image;
                      if (number === 17 || number === 23 || number === 25) {
                        image = "/images/BOSS/mali.png";
                      } else {
                        // Array of available images for other apartments
                        const images = [
                          "/images/BOSS/srednji.png",
                          "/images/BOSS/veliki.png",
                          "/images/BOSS/STAN 2 V.png",
                          "/images/BOSS/STAN 14 V.png"
                        ];
                        image = images[Math.floor(Math.random() * images.length)];
                      }
                      
                      return (
                        <SoldApartmentCard
                          key={number}
                          number={`${number}`}
                          image={image}
                          area={`${area}.${Math.floor(Math.random() * 100)}m²`}
                          floor={`${Math.floor((number - 1) / 7) + 1}. sprat`}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="mt-24">
                <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-12 shadow-[0_8px_32px_rgba(196,169,98,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-marina-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-marina-blue/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-cormorant font-bold text-white mb-4 relative inline-block">
                        Zakažite obilazak
                        <div className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-marina-gold transform -translate-x-1/2" />
                      </h2>
                      <p className="text-white/80 text-lg">
                        Posetite nas i uverite se u kvalitet gradnje i materijala. Naš tim je tu da Vam pomogne.
                      </p>
                    </div>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠE IME I PREZIME *</label>
                        <input
                          type="text"
                          placeholder="Upišite ime i prezime"
                          className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠ E-MAIL *</label>
                        <input
                          type="email"
                          placeholder="Upišite e-mail"
                          className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="w-full bg-marina-gold hover:bg-white text-marina-dark font-medium py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          Pošaljite
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Contact />
        <Footer />
      </div>
    </>
  );
};
