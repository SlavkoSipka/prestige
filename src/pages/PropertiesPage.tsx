import { type FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { ApartmentCard } from '../components/cards/ApartmentCard';
import { ExpandedApartmentCard } from '../components/cards/ExpandedApartmentCard';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { PromoSection } from '../components/sections/PromoSection'; 
import { sendEmail } from '../utils/emailjs';
import { useLocation } from 'react-router-dom';
import { Store, ArrowRight, Phone, Maximize2, Car } from 'lucide-react';

export const PropertiesPage: FC = () => {
  const { state } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(0.66);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: '',
        message: 'Brzi upit sa stranice Properties'
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
      // Calculate opacity based on scroll position
      const maxScroll = 500; // Maximum scroll for full effect
      const newOpacity = Math.min(0.8 + (window.scrollY / maxScroll) * 0.2, 0.95);
      setOpacity(newOpacity);
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

  useEffect(() => {
    if (state?.scrollPosition) {
      window.scrollTo(0, state.scrollPosition);
    }
  }, [state?.scrollPosition]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);
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
            src="/images/BOSS/1_9 - Photo-min.jpg"
            alt="VB Perla"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-marina-dark via-marina-dark/80 to-marina-dark transition-opacity duration-300"
            style={{ opacity }}
          />
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="pt-20 mb-24">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-cormorant font-bold text-white mb-8 lg:mb-12">
                <span className="block">VB Perla - Stanovi</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-marina-gold mt-2 lg:mt-4">Prestižna Lokacija</span>
              </h1>
              <p className="text-white/80 max-w-2xl text-base lg:text-lg mt-8 lg:mt-12 leading-relaxed">
                Ekskluzivni stambeni kompleks u srcu Vrnjačke Banje. Izaberite svoj savršeni dom iz naše pažljivo dizajnirane ponude stanova.
              </p>
              <div className="mt-12">
                <Link
                  to="/gallery"
                  className="relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-marina-gold via-marina-gold to-marina-gold hover:from-white hover:via-white hover:to-white text-marina-dark rounded-xl transition-all duration-500 group shadow-[0_8px_32px_rgba(196,169,98,0.3)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <img
                    src="/images/BOSS/pRESTIGE%20VB%20(3).png"
                    alt="VB Perla Logo"
                    className="h-10 transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="text-lg font-semibold tracking-wide">Pogledajte Galeriju</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-marina-dark rounded-full animate-ping animation-delay-500" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              <div className="col-span-full">
                <div className="group relative bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg overflow-hidden transition-all duration-500 hover:bg-marina-blue hover:border-marina-gold/40 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="p-4 md:p-8">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-marina-gold/20 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg]">
                          <Store className="w-6 h-6 text-marina-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-white font-cormorant">Poslovni prostor L1 - Za izdavanje</h3>
                          <p className="text-marina-gold/80">Lokal u prizemlju</p>
                        </div>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                            <Maximize2 className="w-4 h-4 text-marina-gold" />
                          </div>
                          <span className="text-sm md:text-base">Površina: 455.62m²</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                            <Store className="w-4 h-4 text-marina-gold" />
                          </div>
                          <span className="text-sm md:text-base">Izlog: 15m</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 bg-white/5 p-3 md:p-4 rounded-lg">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                            <Car className="w-4 h-4 text-marina-gold" />
                          </div>
                          <span className="text-sm md:text-base">Parking: Da</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-marina-gold/20"> 
                        <Link 
                          to="/properties/business-space"
                          className="w-full bg-marina-gold/10 hover:bg-marina-gold text-white py-2.5 md:py-3 px-3 md:px-4 rounded flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm group-hover:text-marina-dark text-sm md:text-base"
                        >
                          <span>Detaljnije</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                    <div className="aspect-[4/3] md:aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/images/BOSS/3d stanovi/lokal.png"
                        alt="Poslovni prostor L1"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4 md:p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <ApartmentCard
                number="1"
                type="Garsonjera"
                area="29,20m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="2"
                type="Jednosoban"
                area="40,89m²"
                status="reserved"
                floor="I sprat"
              />
              <ApartmentCard
                number="3"
                type="Garsonjera"
                area="29,20m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="4"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="5"
                type="Jednosoban"
                area="36,29m²"
                status="sold"
                floor="I sprat"
              />
              <ApartmentCard
                number="6"
                type="Jednosoban"
                area="40,94m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="7"
                type="Jednosoban"
                area="40,78m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="8"
                type="Jednosoban"
                area="36,29m²"
                status="reserved"
                floor="I sprat"
              />
              <ApartmentCard
                number="9"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="I sprat"
              />
              <ApartmentCard
                number="10"
                type="Jednosoban"
                area="49,83m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="11"
                type="Jednosoban"
                area="49,83m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="12"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="II sprat"
              />
            </div>
          </div>

          <div className="mt-24 mb-24">
            <PromoSection />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 pt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              <ApartmentCard
                number="13"
                type="Jednosoban"
                area="36,29m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="14"
                type="Jednosoban"
                area="40,94m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="15"
                type="Jednosoban"
                area="40,78m²"
                status="reserved"
                floor="II sprat"
              />
              <ApartmentCard
                number="16"
                type="Jednosoban"
                area="36,29m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="17"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="II sprat"
              />
              <ApartmentCard
                number="18"
                type="Garsonjera"
                area="29,20m²"
                status="reserved"
                floor="III sprat"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 pt-24">
            <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-12 shadow-[0_8px_32px_rgba(196,169,98,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-marina-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-marina-blue/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-cormorant font-bold text-white mb-4 relative inline-block">
                    Pošaljite brzi upit
                    <div className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-marina-gold transform -translate-x-1/2" />
                  </h2>
                  <p className="text-white/80 text-lg">
                  Imate pitanje? Upišite svoje kontakt podatke i VB Perla tim će Vas kontaktirati u najkraćem roku.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-marina-gold mb-2">VAŠE IME I PREZIME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Upišite ime i prezime"
                      className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-marina-gold mb-2">VAŠ E-MAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Upišite e-mail"
                      className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-marina-gold hover:bg-white text-marina-dark font-medium py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      {isSubmitting ? 'Slanje...' : 'Pošaljite'}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-500/10 text-green-400 rounded-lg text-sm backdrop-blur-sm">
                        Vaša poruka je uspešno poslata! Kontaktiraćemo Vas uskoro.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-lg text-sm backdrop-blur-sm">
                        Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 pt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              <ApartmentCard
                number="19"
                type="Jednosoban"
                area="40,89m²"
                status="available"
                floor="III sprat"
              />
              <ApartmentCard
                number="20"
                type="Garsonjera"
                area="29.20m²"
                status="reserved"
                floor="III sprat"
              />
              <ApartmentCard
                number="21"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="III sprat"
              />
              <ApartmentCard
                number="22"
                type="Jednosoban"
                area="36,29m²"
                status="available"
                floor="III sprat"
              />
              <ApartmentCard
                number="23"
                type="Jednosoban"
                area="40,94m²"
                status="reserved"
                floor="III sprat"
              />
              <ApartmentCard
                number="24"
                type="Jednosoban"
                area="40,78m²"
                status="available"
                floor="III sprat"
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 pt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              <ExpandedApartmentCard
                number="25"
                type="Jednosoban"
                area="36,29m²"
                floor="III sprat"
                hasBalcony={true}
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 pt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              <ApartmentCard
                number="26"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="III sprat"
              />
              <ApartmentCard
                number="27"
                type="Jednosoban"
                area="49,83m²"
                status="reserved"
                floor="IV sprat"
              />
              <ApartmentCard
                number="28"
                type="Jednosoban"
                area="49,83m²"
                status="available"
                floor="IV sprat"
              />
              <ApartmentCard
                number="29"
                type="Jednosoban"
                area="47,93m²"
                status="available"
                floor="IV sprat"
              />
              <ApartmentCard
                number="30"
                type="Jednosoban"
                area="36,29m²"
                status="reserved"
                floor="IV sprat"
              />
              <ApartmentCard
                number="31"
                type="Jednosoban"
                area="40,94m²"
                status="available"
                floor="IV sprat"
              />
              <ApartmentCard
                number="32"
                type="Jednosoban"
                area="42,13m²"
                status="available"
                floor="IV sprat"
              />
              <ApartmentCard
                number="33"
                type="Garsonjera"
                area="34,77m²"
                status="reserved"
                floor="IV sprat"
              />
              <ApartmentCard
                number="34"
                type="Jednosoban"
                area="41,86m²"
                status="available"
                floor="IV sprat"
              />
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