import { type FC, useState, useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { sendEmail } from '../utils/emailjs';
import { Phone, Mail, MapPin, Building, Clock, Coffee, Car } from 'lucide-react';

export const ContactPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
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

        <main className="bg-[#0B1A2B] relative overflow-hidden">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src="http://aislike.rs/BOSS/var3_8 - Photo.jpg"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-marina-dark via-marina-dark/60 to-transparent" />
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-2xl">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
                  <span className="block">Kontaktirajte nas</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-marina-gold mt-3">VB Perla - Vrnjačka Banja</span>
                </h1>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Naš tim je tu da odgovori na sva Vaša pitanja i pomogne Vam u izboru idealnog stana.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8 shadow-[0_8px_32px_rgba(196,169,98,0.1)]">
                    <h2 className="text-xl font-cormorant font-bold text-white mb-4">Pošaljite upit</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠE IME I PREZIME *</label>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠ E-MAIL *</label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠ BROJ TELEFONA *</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                            <img src="https://flagcdn.com/w20/rs.png" alt="Serbia" className="w-5 h-auto mr-2" />
                            <span className="text-gray-500">+381</span>
                          </div>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-24 pr-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300"
                            placeholder="XX XXXXXXX"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-marina-gold mb-2">VAŠA PORUKA</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 border border-marina-gold/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-marina-gold focus:ring-2 focus:ring-marina-gold/20 transition-all duration-300 resize-none"
                          placeholder="Postavite nam pitanje..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-marina-gold hover:bg-white text-marina-dark font-medium py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                        {isSubmitting ? 'Slanje...' : 'Pošaljite'}
                      </button>
                      
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mt-4 p-4 bg-green-50/10 text-green-400 rounded-lg text-sm backdrop-blur-sm">
                          Vaša poruka je uspešno poslata! Kontaktiraćemo Vas uskoro.
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="mt-4 p-4 bg-red-50/10 text-red-400 rounded-lg text-sm backdrop-blur-sm">
                          Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Kontakt informacije</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-marina-gold" />
                        </div>
                        <div>
                          <span className="text-marina-gold text-sm block mb-1">Adresa</span>
                          <span className="text-white">Kneza Miloša 56, Vrnjačka Banja</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-marina-gold" />
                        </div>
                        <div>
                          <span className="text-marina-gold text-sm block mb-1">Telefon</span>
                          <span className="text-white block">+381 63 646 659</span>
                          <span className="text-white">+381 63 610 837</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-marina-gold" />
                        </div>
                        <div>
                          <span className="text-marina-gold text-sm block mb-1">Email</span>
                          <span className="text-white">prestigegradnjavb@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Radno vreme</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white/90">
                        <Clock className="w-5 h-5 text-marina-gold" />
                        <span>Ponedeljak - Petak: 08:00 - 20:00</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <Clock className="w-5 h-5 text-marina-gold" />
                        <span>Subota: 09:00 - 16:00</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <Clock className="w-5 h-5 text-marina-gold" />
                        <span>Nedelja: Po dogovoru</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-20">
                <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 p-8 pt-4">
                      <h3 className="text-3xl font-cormorant font-bold text-white mb-4 relative inline-block">
                        Kako do nas?
                        <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-marina-gold" />
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        Nalazimo se u centru Vrnjačke Banje, na samo par minuta hoda od Promenade i Kraljevskog parka.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white/90 bg-white/5 p-4 rounded-lg border border-marina-gold/10 group hover:bg-marina-gold/10 transition-all duration-300">
                          <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-[360deg]">
                            <Car className="w-5 h-5 text-marina-gold" />
                          </div>
                          <span className="text-lg">Parking ispred objekta</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/90 bg-white/5 p-4 rounded-lg border border-marina-gold/10 group hover:bg-marina-gold/10 transition-all duration-300">
                          <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-[360deg]">
                            <Coffee className="w-5 h-5 text-marina-gold" />
                          </div>
                          <span className="text-lg">5 min do centra</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/90 bg-white/5 p-4 rounded-lg border border-marina-gold/10 group hover:bg-marina-gold/10 transition-all duration-300">
                          <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-[360deg]">
                            <MapPin className="w-5 h-5 text-marina-gold" />
                          </div>
                          <span className="text-lg">500m od Kraljevskog parka</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[600px] relative group">
                      <div className="absolute inset-0 bg-gradient-to-l from-[#0B1A2B]/20 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9589341240087!2d20.894416776891714!3d43.62276005555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757652aeaaaaa01%3A0x5ce4851cab7eaac7!2z0JLRgNGa0LDRh9C60LAg0JHQsNGa0LA!5e0!3m2!1ssr!2srs!4v1709991160811!5m2!1ssr!2srs"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};