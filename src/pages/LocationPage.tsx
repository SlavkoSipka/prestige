import { type FC, useState, useEffect, useRef } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import CountUp from 'react-countup';
import { MapPin, Clock, Coffee, Trees as Tree, Car, Building2, Waves, Heart } from 'lucide-react';

export const LocationPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [showContent, setShowContent] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const gocImages = [
    '/images/BOSS/goc1.jpg',
    '/images/BOSS/ski.jpg',
    '/images/BOSS/goc2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((prevIndex) => (prevIndex + 1) % gocImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
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
          <section className="relative h-[80vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src="/images/BOSS/vrnjacka_banja_za_tb_turizam_park_110324_tw1024.jpg"
                alt="Vrnjačka Banja"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-marina-dark via-marina-dark/60 to-transparent" />
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-2xl px-2">
                <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-cormorant font-bold text-white mb-6 sm:mb-8 md:mb-12">
                  <span className="block">Vrnjačka Banja</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl text-marina-gold mt-2 sm:mt-3 md:mt-4">Prestižna Lokacija</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed font-cormorant">
                  Otkrijte čari života u najpoznatijem banjskom lečilištu Srbije. Spoj tradicije i modernog životnog stila u srcu Vrnjačke Banje.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: 800, suffix: 'K+', label: 'Godišnjih posetilaca' },
                  { number: 7, label: 'Mineralnih izvora' },
                  { number: 27, suffix: 'ha', label: 'Površina parka' },
                  { number: 180, suffix: '+', label: 'Biljnih vrsta' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`bg-marina-blue/30 p-8 rounded-lg border border-marina-gold/20 text-center group hover:bg-marina-blue/40 transition-all duration-500 transform ${
                      statsVisible ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <p className="text-4xl font-bold text-marina-gold mb-2 tabular-nums transition-all duration-300">
                      {statsVisible && (
                        <CountUp
                          end={stat.number}
                          duration={3}
                          separator=","
                          suffix={stat.suffix}
                          useEasing={true}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                        />
                      )}
                    </p>
                    <p className="text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Highlight */}
          <section className="py-16 relative bg-gradient-to-r from-marina-dark to-marina-blue/90">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/BOSS/1_9 - Photo-min.jpg"
                    alt="VB Perla Lokacija"
                    className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent rounded-lg" />
                  <div className="absolute bottom-6 left-6 bg-marina-cream backdrop-blur-sm p-6 rounded-lg max-w-xs shadow-lg border border-marina-gold/20">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-marina-gold" />
                      <span className="text-marina-dark font-medium">Ekskluzivna Lokacija</span>
                    </div>
                    <p className="text-marina-dark/80">Samo 500m od Kraljevskog parka</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-cormorant font-bold text-white mb-6">
                    Ekskluzivna Lokacija u Srcu Vrnjačke Banje
                  </h2>
                  <p className="text-white/80 mb-8 leading-relaxed text-lg">
                    VB Perla se nalazi na prestižnoj lokaciji, na samo 500 metara od Kraljevskog parka. 
                    Ova privilegovana pozicija omogućava stanarima da uživaju u miru rezidencijalne zone, 
                    uz istovremenu blizinu svih sadržaja koje nudi centar Vrnjačke Banje.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/90 bg-marina-blue/30 p-4 rounded-lg border border-marina-gold/20">
                      <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-marina-gold" />
                      </div>
                      <span>500m od Kraljevskog parka</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90 bg-marina-blue/30 p-4 rounded-lg border border-marina-gold/20">
                      <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-marina-gold" />
                      </div>
                      <span>5 minuta do centra grada</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90 bg-marina-blue/30 p-4 rounded-lg border border-marina-gold/20">
                      <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <Coffee className="w-5 h-5 text-marina-gold" />
                      </div>
                      <span>Restorani i kafići u blizini</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Tree className="w-8 h-8 text-marina-gold" />,
                    title: 'Kraljevski Park',
                    description: 'Prostrani park sa preko 180 različitih biljnih vrsta, fontanama i uređenim šetalištima.',
                    image: '/images/BOSS/vrnjacka_banja_za_tb_turizam_park_110324_tw1024.jpg'
                  },
                  {
                    icon: <Waves className="w-8 h-8 text-marina-gold" />,
                    title: 'Mineralni Izvori',
                    description: 'Sedam lekovitih mineralnih izvora sa različitim svojstvima i temperaturama.',
                    image: '/images/BOSS/mineralni-lekoviti-izvori-vrnjacka-banja-share.png'
                  },
                  {
                    icon: <Heart className="w-8 h-8 text-marina-gold" />,
                    title: 'Most Ljubavi',
                    description: 'Kultni most sa katancima ljubavi, inspirisan romantičnom pričom o Nadi i Relji.',
                    image: '/images/BOSS/Most_Ljubavi_overview.jpg'
                  },
                  {
                    icon: <Coffee className="w-8 h-8 text-marina-gold" />,
                    title: 'Restorani i Kafići',
                    description: 'Bogata gastronomska ponuda sa tradicionalnim i internacionalnim specijalitetima.',
                    image: '/images/BOSS/fontana kafic.jpg'
                  },
                  {
                    icon: <Car className="w-8 h-8 text-marina-gold" />,
                    title: 'Pristupačnost',
                    description: 'Odlična povezanost sa glavnim putnim pravcima i blizina autoputa.',
                    image: '/images/BOSS/pristupacnost.jpg'
                  },
                  {
                    icon: <Building2 className="w-8 h-8 text-marina-gold" />,
                    title: 'Moderna Infrastruktura',
                    description: 'Kontinuirana ulaganja u razvoj grada i turističke infrastrukture.',
                    image: '/images/BOSS/infrastruktura.jpg'
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent" />
                    </div>
                    <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-cormorant font-bold text-white mb-6">Prestižna Lokacija</h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    U srcu Vrnjačke Banje, na samo par koraka od čuvene Promenade i Kraljevskog parka, nalazi se VB Perla.
                    Ova ekskluzivna lokacija spaja mir rezidencijalne zone sa neposrednom blizinom svih sadržaja koje nudi
                    najposećenije banjsko lečilište Srbije.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: <MapPin className="w-5 h-5 text-marina-gold" />, text: '400m od Promenade' },
                      { icon: <Clock className="w-5 h-5 text-marina-gold" />, text: '5min do Merkura' },
                      { icon: <Car className="w-5 h-5 text-marina-gold" />, text: 'Obezbeđen parking' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-white/80 bg-marina-blue/30 p-4 rounded-lg border border-marina-gold/20">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.369678462527!2d20.89905831816136!3d43.62864301224619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4756578bc5422e61%3A0x4901f98d9b0aa6a1!2sKneza%20Milo%C5%A1a%2056%2C%20Vrnja%C4%8Dka%20Banja!5e0!3m2!1sen!2srs!4v1743088589944!5m2!1sen!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Lifestyle Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h2 className="text-4xl font-cormorant font-bold text-white mb-4 relative inline-block">
                      Život u Vrnjačkoj Banji
                      <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-marina-gold" />
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Vrnjačka Banja nudi bogat izbor aktivnosti i sadržaja za sve generacije, od aktivnog odmora do opuštajućih spa tretmana.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 backdrop-blur-sm p-8 rounded-lg border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Wellness & Spa</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Termalni bazeni
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Masaže i tretmani
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Saune i đakuzi
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 backdrop-blur-sm p-8 rounded-lg border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Sport & Rekreacija</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Teniski tereni
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Biciklističke staze
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Trim staze
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 backdrop-blur-sm p-8 rounded-lg border border-marina-gold/20 group hover:bg-marina-blue/60 transition-all duration-500 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Kultura & Zabava</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Kulturni centar
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Bioskop
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                      </div>
                      Letnja pozornica
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Parallax Section */}
          <section className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center" style={{
            backgroundImage: "url('/images/BOSS/Vrh goca.jpeg')"
          }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-transparent to-[#0B1A2B] opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B]/80 via-transparent to-[#0B1A2B]/80" />
          </section>

          {/* Nature & Recreation */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-cormorant font-bold text-white mb-6">Priroda & Rekreacija</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Istražite prirodne lepote Vrnjačke Banje i okolnih planina kroz brojne rekreativne aktivnosti dostupne tokom cele godine.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[500px] rounded-lg overflow-hidden group">
                  <div className="absolute inset-0">
                    <img
                      src={gocImages[currentImageIndex]}
                      alt="Planina Goč"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                      opacity: nextImageIndex === currentImageIndex ? 0 : 1,
                      backgroundImage: `url(${gocImages[nextImageIndex]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/60 to-transparent transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Planina Goč</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                        <span>Planinarske staze različitih težina</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                        <span>Ski centar sa 3 staze</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                        <span>Vidikovci sa panoramskim pogledom</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-marina-blue/30 p-8 rounded-lg border border-marina-gold/20 group hover:bg-marina-blue/40 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-4">Rekreativne Aktivnosti</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Pešačke ture</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Planinski biciklizam</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Jahanje</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Skijanje</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Paraglajding</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                          <span>Off-road ture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-marina-blue/30 p-8 rounded-lg border border-marina-gold/20 group hover:bg-marina-blue/40 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-4">Prirodne Atrakcije</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Tree className="w-5 h-5 text-marina-gold" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Japanski Vrt</h4>
                          <p className="text-white/80 text-sm">
                            Jedinstveni vrt uređen po principima japanske vrtne arhitekture, sa autentičnim biljnim vrstama.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Waves className="w-5 h-5 text-marina-gold" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Jezero Goč</h4>
                          <p className="text-white/80 text-sm">
                            Veštačko jezero okruženo šumom, idealno za ribolov i piknik u prirodi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Potential */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="bg-marina-blue/30 rounded-lg border border-marina-gold/20 p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-cormorant font-bold text-white mb-6">Investicioni Potencijal</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-marina-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Rastući Turizam</h3>
                          <p className="text-white/80">
                            Godišnji rast broja turista od 15%, uz produženje prosečne dužine boravka.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-marina-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Strateška Lokacija</h3>
                          <p className="text-white/80">
                            Centralna pozicija u Srbiji, odlična povezanost sa glavnim gradovima regiona.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-marina-gold/20 flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-marina-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Kvalitet Života</h3>
                          <p className="text-white/80">
                            Spoj banjskog lečilišta i modernog turističkog centra stvara idealno mesto za život.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                      alt="Investicioni potencijal"
                      className="w-full rounded-lg shadow-xl"
                    />
                    <div className="absolute bottom-4 left-4 bg-marina-gold/90 backdrop-blur-sm p-6 rounded-lg max-w-xs">
                      <p className="text-sm font-medium text-marina-dark/80 mb-2">PROSEČAN GODIŠNJI RAST</p>
                      <p className="text-3xl font-bold text-marina-dark">5-7%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Contact />
        <Footer />
      </div>
    </>
  );
};