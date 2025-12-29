import { type FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, ArrowLeft, Home, MapPin, Maximize2, Compass, ZoomIn } from 'lucide-react';
import { APARTMENT_DETAILS } from '../constants/apartments';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { ImageModal } from '../components/modals/ImageModal';
import { GarageSection } from '../components/sections/GarageSection';

export const ApartmentPage: FC = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const details = APARTMENT_DETAILS[id ?? ''];
  const pricePerSquareMeter = parseFloat(details?.netArea || '0') < 40 ? '1.900' : '1.800';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  const handleBack = () => {
    navigate('/properties', { 
      state: { 
        scrollPosition: state?.scrollPosition || 0
      }
    });
  };

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
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-marina-gold/90 hover:bg-white text-marina-dark rounded-lg transition-all duration-300 group backdrop-blur-sm text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium">Nazad na ponudu</span>
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="lg:max-w-xl">
                <div className="bg-white/5 backdrop-blur-sm border border-marina-gold/20 rounded-lg p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-marina-gold/20 flex items-center justify-center">
                      <Home className="w-5 h-5 sm:w-6 sm:h-6 text-marina-gold" />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-4xl font-bold text-white font-cormorant">Stan {id}</h1>
                      <p className="text-marina-gold/80 text-sm sm:text-base">{state?.type}</p>
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
                            <span className="text-white/80 block text-xs sm:text-sm">Površina</span>
                            <span className="text-lg sm:text-2xl font-bold text-white">{state?.area}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-marina-gold" />
                          </div>
                          <div>
                            <span className="text-white/80 block text-xs sm:text-sm">Sprat</span>
                            <span className="text-lg sm:text-2xl font-bold text-white">{state?.floor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 bg-white/5 p-4 sm:p-6 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between">
                        <div className="w-full text-center">
                          <span className="text-marina-gold text-xs sm:text-sm">Cena po m²</span>
                          <p className="text-xl sm:text-3xl font-bold text-white mt-1">{pricePerSquareMeter}€</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-lg border border-white/5">
                      <h3 className="text-lg font-bold text-white mb-4">Struktura stana</h3>
                      <div className="space-y-3">
                        {details?.hallway2 && (
                          <>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">1</div>
                                Hodnik
                              </span>
                              <span className="font-medium text-white">{details.hallway} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">2</div>
                                Dnevna soba
                              </span>
                              <span className="font-medium text-white">{details.livingRoom} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">3</div>
                                Hodnik
                              </span>
                              <span className="font-medium text-white">{details.hallway2} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">4</div>
                                Garderober
                              </span>
                              <span className="font-medium text-white">{details.wardrobe} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">5</div>
                                Kupatilo
                              </span>
                              <span className="font-medium text-white">{details.bathroom} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">6</div>
                                Spavaća soba
                              </span>
                              <span className="font-medium text-white">{details.bedRoom} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">7</div>
                                Terasa
                              </span>
                              <span className="font-medium text-white">{details.balcony} m²</span>
                            </div>
                          </>
                        )}
                        {!details?.hallway2 && details?.hallway && ['6', '14', '23', '31', '7', '15', '24'].includes(id ?? '') ? (
                          <>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">1</div>
                                Hodnik
                              </span>
                              <span className="font-medium text-white">{details.hallway} m²</span>
                            </div>
                          <div className="flex items-center justify-between text-white/80">
                            <span className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">2</div>
                              Dnevna soba
                            </span>
                            <span className="font-medium text-white">{details.livingRoom} m²</span>
                          </div>
                          <div className="flex items-center justify-between text-white/80">
                            <span className="flex items-center gap-2">
                             <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">3</div>
                              Kupatilo
                            </span>
                            <span className="font-medium text-white">{details.bathroom} m²</span>
                          </div>
                          <div className="flex items-center justify-between text-white/80">
                            <span className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">4</div>
                              Spavaća soba
                            </span>
                            <span className="font-medium text-white">{details.bedRoom} m²</span>
                          </div>
                          <div className="flex items-center justify-between text-white/80">
                            <span className="flex items-center gap-2">
                             <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">5</div>
                              Terasa
                            </span>
                            <span className="font-medium text-white">{details.balcony} m²</span>
                          </div>
                          </>
                        ) : !details?.hallway2 && details?.hallway && ['1', '3', '18', '20', '33'].includes(id ?? '') ? (
                          <>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">1</div>
                                Hodnik
                              </span>
                              <span className="font-medium text-white">{details.hallway} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">2</div>
                                Dnevna soba
                              </span>
                              <span className="font-medium text-white">{details.livingRoom} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">3</div>
                                Kupatilo
                              </span>
                              <span className="font-medium text-white">{details.bathroom} m²</span>
                            </div>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">4</div>
                                Terasa
                              </span>
                              <span className="font-medium text-white">{details.balcony} m²</span>
                            </div>
                          </>
                        ) : !details?.hallway2 && details?.hallway ? (
                          <>
                            <div className="flex items-center justify-between text-white/80">
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">1</div>
                                Hodnik
                              </span>
                              <span className="font-medium text-white">{details.hallway} m²</span>
                            </div>
                            {details?.livingRoom && (
                              <div className="flex items-center justify-between text-white/80">
                                <span className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">2</div>
                                  Dnevna soba
                                </span>
                                <span className="font-medium text-white">{details.livingRoom} m²</span>
                              </div>
                            )}
                            {details?.bedRoom && (
                              <div className="flex items-center justify-between text-white/80">
                                <span className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">3</div>
                                  Spavaća soba
                                </span>
                                <span className="font-medium text-white">{details.bedRoom} m²</span>
                              </div>
                            )}
                            {details?.bathroom && (
                              <div className="flex items-center justify-between text-white/80">
                                <span className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">4</div>
                                  Kupatilo
                                </span>
                                <span className="font-medium text-white">{details.bathroom} m²</span>
                              </div>
                            )}
                            {details?.balcony && (
                              <div className="flex items-center justify-between text-white/80">
                                <span className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-marina-blue flex items-center justify-center text-xs text-white">5</div>
                                  Terasa
                                </span>
                                <span className="font-medium text-white">{details.balcony} m²</span>
                              </div>
                            )}
                          </>
                        ) : null}
                        <div className="pt-3 mt-3 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-marina-gold font-medium">Neto površina</span>
                            <span className="font-bold text-white text-xl">{details?.netArea} m²</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                    <a 
                      href="tel:+38163646659"
                      className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-marina-gold hover:bg-white text-marina-dark rounded transition-all duration-300 gap-2 text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4" />
                      <span>063 646 659</span>
                    </a>
                    <a 
                      href="mailto:info@vbprestige.rs"
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
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="absolute inset-0 w-full h-full z-20 transition-all duration-300 cursor-zoom-in"
                    >
                      <div className="absolute top-4 right-4 bg-white/10 hover:bg-marina-gold p-2 rounded-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:scale-110">
                        <ZoomIn className="w-5 h-5 text-white group-hover:text-marina-dark" />
                      </div>
                    </button>
                    <img 
                      src={details?.drawingUrl || state?.image}
                      alt={`Stan ${id}`}
                      className="relative z-10 block w-full h-[400px] sm:h-[650px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GarageSection />

          <Contact />
        </main>

        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={details?.drawingUrl || state?.image || ''}
          alt={`Stan ${id}`}
        />

        <Footer />
      </div>
    </>
  );
};