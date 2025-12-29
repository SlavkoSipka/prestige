import { type FC, useState, useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { Phone, Mail, ArrowLeft, Store, MapPin, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoadingScreen } from '../components/loading/LoadingScreen';

interface BusinessSpaceDetails {
  lokal: string;
  magacin: string;
  pomocniProstor1: string;
  pomocniProstor2: string;
  predprostor: string;
  garderober: string;
  sanitarniCvor: string;
  netArea: string;
}

const BUSINESS_SPACE: BusinessSpaceDetails = {
  lokal: '172.84',
  magacin: '186.19',
  pomocniProstor1: '45.77',
  pomocniProstor2: '33.60',
  predprostor: '4.14',
  garderober: '6.84',
  sanitarniCvor: '6.24',
  netArea: '455.62'
};

export const BusinessSpacePage: FC = () => {
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

      <main className="bg-[#0B1A2B] relative overflow-hidden pt-32 pb-20">
        <div className="fixed inset-0 z-0 opacity-50">
          <img
            src="http://aislike.rs/BOSS/1_3 - Photo-min.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marina-dark/90 via-marina-dark/70 to-marina-dark" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8 sm:mb-16 relative">
            <Link 
              to="/properties" 
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-marina-gold/90 hover:bg-white text-marina-dark rounded-lg transition-all duration-300 group backdrop-blur-sm text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">Nazad na ponudu</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:max-w-xl">
              <div className="bg-white/5 backdrop-blur-sm border border-marina-gold/20 rounded-lg p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-marina-gold/20 flex items-center justify-center">
                    <Store className="w-5 h-5 sm:w-6 sm:h-6 text-marina-gold" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white font-cormorant">Poslovni prostor L1</h1>
                    <p className="text-marina-gold/80 text-sm sm:text-base">Lokal u prizemlju</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-marina-gold" />
                        </div>
                        <div>
                          <span className="text-white/80 text-xs sm:text-sm">Površina</span>
                          <p className="text-lg sm:text-2xl font-bold text-white">{BUSINESS_SPACE.netArea}m²</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-marina-gold" />
                        </div>
                        <div>
                          <span className="text-white/80 text-xs sm:text-sm">Sprat</span>
                          <p className="text-lg sm:text-2xl font-bold text-white">Prizemlje</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 sm:p-8 rounded-lg border border-white/5">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Struktura lokala</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80"> 
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">1</div>
                          Lokal
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.lokal} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">2</div>
                          Magacin
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.magacin} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">3</div>
                          Pomoćni prostor 1
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.pomocniProstor1} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">4</div>
                          Pomoćni prostor 2
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.pomocniProstor2} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">5</div>
                          Predprostor
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.predprostor} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">6</div>
                          Garderober
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.garderober} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">7</div>
                          Sanitarni čvor
                        </span>
                        <span className="font-medium text-white">{BUSINESS_SPACE.sanitarniCvor} m²</span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-marina-gold font-medium">Neto površina</span>
                          <span className="font-bold text-white text-xl">{BUSINESS_SPACE.netArea} m²</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                  <a 
                    href="tel:+38163610837"
                    className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-marina-gold hover:bg-white text-marina-dark rounded transition-all duration-300 gap-2 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4" />
                    <span>063 610 837</span>
                  </a>
                  <a 
                    href="mailto:prestigegradnjavb@gmail.com"
                    className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-marina-gold text-white hover:bg-marina-gold hover:text-marina-dark rounded transition-all duration-300 gap-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4" />
                    <span>prestigegradnjavb@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-32 lg:ml-[-2rem] lg:mr-[-8rem]">
                <div className="relative w-full bg-[#FFFFF0] border border-marina-gold/20 rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:border-marina-gold/40">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-marina-gold/5 via-transparent to-marina-dark/5" />
                  <img 
                    src="https://aislike.rs/BOSS/crtezi/LOKAL.png"
                    alt="Poslovni prostor L1"
                    className="relative z-10 block w-full h-[400px] sm:h-[650px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="w-full py-12 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-[#1B3964] to-[#0B1A2B]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-4xl font-cormorant font-bold text-white mb-3 sm:mb-4 relative inline-block">
                Podzemna Garaža
                <div className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-marina-gold transform -translate-x-1/2" />
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-lg px-4">
                Prostrana garaža sa direktnim pristupom lokalu i svim spratovima, dizajnirana za maksimalnu funkcionalnost i udobnost.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-marina-gold/20">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-marina-gold/20 flex items-center justify-center">
                      <Store className="w-5 h-5 sm:w-7 sm:h-7 text-marina-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">636,02m²</h3>
                      <p className="text-marina-gold/80 text-sm sm:text-base">Ukupna površina</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base">Prostran parking prostor za stanare</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base">Direktan pristup lokalu i liftovima</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base">Savremeni ventilacioni sistem</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base">LED osvetljenje i video nadzor</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src="https://aislike.rs/BOSS/garaza.png"
                    alt="Garaža Plan"
                    className="w-full h-48 sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs sm:text-sm font-medium">Plan garaže</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="https://aislike.rs/BOSS/garaza slika.jpeg"
                  alt="Garaža Izgled"
                  className="w-full h-48 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs sm:text-sm font-medium">Izgled garaže</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Contact />
        <Footer />
      </main>
      </div>
    </>
  );
};