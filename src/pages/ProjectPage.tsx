import { type FC, useState, useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { Code, Zap, TrendingUp, Users, Palette, Search } from 'lucide-react';

export const ProjectPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set canonical tag for SEO
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://prestigegradnja.rs/o-projektu');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://prestigegradnja.rs/o-projektu';
      document.head.appendChild(link);
    }

    // Update document title
    document.title = 'O projektu | Prestige Gradnja - Kako je kreiran sajt';

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
          <section className="relative h-[50vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src="/images/BOSS/var3_8 - Photo.jpg"
                alt="Project Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-marina-dark via-marina-dark/70 to-transparent" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
                  <span className="block">O projektu</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-marina-gold mt-3">
                    Kako je kreiran sajt Prestige Gradnja
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Detaljan pregled procesa kreiranja i optimizacije web prezentacije za premium nekretnine u Vrnjačkoj Banji.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Introduction */}
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8 sm:p-12 shadow-[0_8px_32px_rgba(196,169,98,0.1)]">
                    <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-white mb-6">
                      O klijentu
                    </h2>
                    <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-4">
                      Prestige Gradnja je renomirana kompanija koja se bavi izgradnjom i prodajom luksuznih stambenih objekata u Vrnjačkoj Banji. 
                      Njihov najnoviji projekat, VB Perla, predstavlja ekskluzivni stambeni kompleks sa 34 stana, lociran u samom centru grada. 
                      Kompanija je potrebovala moderan, profesionalan web sajt koji će efikasno prezentovati njihove nekretnine i olakšati komunikaciju 
                      sa potencijalnim kupcima.
                    </p>
                    <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                      Glavni izazov je bio kreirati digitalnu prezentaciju koja odražava premium pozicioniranje brenda, dok istovremeno pruža 
                      intuitivno korisničko iskustvo i tehničku optimizaciju za pretraživače.
                    </p>
                  </div>
                </div>

                {/* Goals Section */}
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-white mb-8 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-marina-gold" />
                    Ciljevi projekta
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Digitalna Prezentacija</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Kreirati vizuelno privlačan sajt koji ističe kvalitet i luksuz VB Perla projekta kroz profesionalne fotografije, 
                        interaktivne galerije i detaljne opise nekretnina.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Korisničko Iskustvo</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Osigurati brzu navigaciju, responzivan dizajn za sve uređaje i jednostavan proces kontaktiranja za potencijalne kupce.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">SEO Optimizacija</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Implementirati tehničku SEO optimizaciju koja omogućava bolju vidljivost u Google pretrazi za ključne termine 
                        vezane za novogradnju u Vrnjačkoj Banji.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Performanse</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Postići visoke performanse sajta sa brzim vremenom učitavanja, optimizovanim slikama i efikasnim kodom koji 
                        pruža besprekorno iskustvo korisnicima.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What Was Done */}
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-white mb-8 flex items-center gap-3">
                    <Code className="w-8 h-8 text-marina-gold" />
                    Šta je urađeno
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Palette className="w-6 h-6 text-marina-gold" />
                        Dizajn i Razvoj
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Sajt je kreiran koristeći moderne tehnologije React i TypeScript, uz implementaciju Tailwind CSS za stilizaciju. 
                        Dizajn je inspirisan premium estetikom luksuznih nekretnina, sa elegantnom paletom boja koja kombinuje tamno plavu 
                        i zlatne akcente. Implementirane su animacije i tranzicije koje pružaju fluidno korisničko iskustvo, dok su sve 
                        komponente potpuno responzivne za mobilne, tablet i desktop uređaje.
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        Posebna pažnja je posvećena galeriji slika sa modalnim pregledom, interaktivnoj mapi lokacije i detaljnom prikazu 
                        svakog stana sa svim relevantnim informacijama. Kontakt forma je integrisana sa EmailJS servisom za direktno slanje 
                        upita, dok je navigacija optimizovana za brzu i intuitivnu pretragu sadržaja.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Search className="w-6 h-6 text-marina-gold" />
                        SEO Optimizacija
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Implementirana je sveobuhvatna SEO strategija koja uključuje optimizaciju meta tagova, strukturisanih podataka 
                        (Schema.org markup), XML sitemap i robots.txt konfiguraciju. Sajt koristi semantički HTML i pravilno postavljene 
                        heading tagove za bolje razumevanje od strane pretraživača.
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        Ključni termini vezani za novogradnju u Vrnjačkoj Banji su strategijski integrisani u sadržaj, dok su sve slike 
                        optimizovane sa alt tagovima. Implementiran je Google Analytics za praćenje performansi i ponašanja korisnika, 
                        što omogućava kontinuirano poboljšanje sajta.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-marina-gold" />
                        Performanse i Optimizacija
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Sajt je optimizovan za maksimalne performanse kroz code splitting, lazy loading slika i efikasno upravljanje 
                        resursima. Implementirane su tehnike za smanjenje veličine bundle-a i ubrzanje vremena učitavanja, što direktno 
                        utiče na korisničko iskustvo i SEO rangiranje.
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        Sve slike su optimizovane za web sa balansom između kvaliteta i veličine fajla, dok su fontovi i ikone učitani 
                        efikasno kroz Google Fonts i Lucide React biblioteku. Implementirana je i caching strategija koja poboljšava 
                        performanse za ponovne posete.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-white mb-8 flex items-center gap-3">
                    <Users className="w-8 h-8 text-marina-gold" />
                    Konkretni rezultati
                  </h2>
                  <div className="bg-gradient-to-br from-marina-gold/10 via-marina-gold/5 to-marina-gold/10 backdrop-blur-sm border border-marina-gold/30 rounded-lg p-8 sm:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Brza Učitanost</h3>
                        <p className="text-white/90 leading-relaxed">
                          Sajt se učitava za manje od 2 sekunde na većini uređaja, što značajno poboljšava korisničko iskustvo i 
                          smanjuje stopu napuštanja stranice. Optimizacija resursa i efikasno kodiranje omogućavaju brz odziv čak i 
                          na sporijim internet konekcijama.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Poboljšano Korisničko Iskustvo</h3>
                        <p className="text-white/90 leading-relaxed">
                          Intuitivna navigacija, responzivan dizajn i interaktivni elementi omogućavaju posetiocima da lako pronađu 
                          informacije koje traže. Galerija sa modalnim pregledom, detaljni opisi stanova i integrisana mapa lokacije 
                          pružaju sveobuhvatan pregled ponude.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Povećane Konverzije</h3>
                        <p className="text-white/90 leading-relaxed">
                          Optimizovana kontakt forma i jasni pozivi na akciju (CTA) rezultiraju većim brojem upita od potencijalnih 
                          kupaca. Strukturisan prikaz informacija i profesionalan dizajn grade poverenje i podstiču korisnike na 
                          kontaktiranje kompanije.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 text-marina-gold">Bolja Vidljivost u Pretrazi</h3>
                        <p className="text-white/90 leading-relaxed">
                          Implementirana SEO optimizacija omogućava sajtu da se bolje rangira u Google pretrazi za relevantne termine. 
                          Strukturirani podaci, optimizovani meta tagovi i kvalitetan sadržaj pomažu pretraživačima da bolje razumeju 
                          i indeksiraju sajt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] backdrop-blur-sm border border-marina-gold/20 rounded-lg p-8 sm:p-12">
                    <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-white mb-6">
                      Zaključak
                    </h2>
                    <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-4">
                      Web prezentacija Prestige Gradnja predstavlja uspešnu kombinaciju modernog dizajna, tehničke izvrsnosti i 
                      SEO optimizacije. Sajt efikasno prezentuje premium nekretnine VB Perla projekta, pružajući posetiocima 
                      sveobuhvatan pregled ponude uz profesionalno korisničko iskustvo.
                    </p>
                    <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-4">
                      Kroz pažljivo planiranje, implementaciju najboljih praksi u web razvoju i fokus na performanse, sajt je 
                      postao ključni alat za digitalnu prezentaciju kompanije. Kontinuirano praćenje performansi i optimizacija 
                      omogućavaju da sajt ostane aktuelan i efikasan u dugom roku.
                    </p>
                    <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                      Projekat je realizovan u saradnji sa <a href="https://aisajt.com" className="text-marina-gold hover:text-white transition-colors underline">AiSajt</a> timom, 
                      koji je pružio kompletnu uslugu <a href="https://aisajt.com/izrada-sajta-cena" className="text-marina-gold hover:text-white transition-colors underline">izrade web sajta</a> i tehničke optimizacije, 
                      osiguravajući da finalni proizvod ispunjava sve postavljene ciljeve i očekivanja klijenta.
                    </p>
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

