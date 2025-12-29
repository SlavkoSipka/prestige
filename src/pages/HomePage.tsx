import { useState, useEffect, useRef, type FC } from 'react';
import { BACKGROUND_IMAGES } from '../constants/images';
import { Navigation } from '../components/navigation/Navigation';
import { Hero } from '../components/sections/Hero';
import { Showcase } from '../components/sections/Showcase';
import { CompanySection } from '../components/sections/CompanySection';
import { Projects } from '../components/sections/Projects';
import { Properties } from '../components/sections/Properties';
import { PromoSection } from '../components/sections/PromoSection';
import { Location } from '../components/sections/Location';
import { WhyInvest } from '../components/sections/WhyInvest';
import { Parallax } from '../components/sections/Parallax';
import { Contact } from '../components/sections/Contact';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { Footer } from '../components/sections/Footer';

interface HomePageProps {
  isLoaded: boolean;
}

export const HomePage: FC<HomePageProps> = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [[currentImageIndex, nextImageIndex], setImageIndexes] = useState([0, 1]);
  
  // Refs for sections
  const showcaseRef = useRef<HTMLDivElement>(null);
  const whyInvestRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const propertiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    // Observe all section refs
    [
      showcaseRef,
      whyInvestRef,
      companyRef,
      promoRef,
      locationRef,
      propertiesRef,
      contactRef
    ].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const changeImage = () => {
      setImageIndexes(([, next]) => [next, (next + 1) % BACKGROUND_IMAGES.length]);
    };

    const interval = setInterval(() => {
      changeImage();
    }, 8500);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
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
    const timer = setTimeout(() => {
      if (showContent) {
        setShowHeroContent(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [showContent]);

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
        <Hero
        currentImageIndex={currentImageIndex}
        nextImageIndex={nextImageIndex}
        scrollY={scrollY}
        showHeroContent={showHeroContent}
        backgroundImages={BACKGROUND_IMAGES}
        isLoaded={isLoaded}
        />
        <div ref={showcaseRef} className="showcase-section">
          <Showcase />
        </div>
        <div ref={whyInvestRef} className="why-invest-section">
          <WhyInvest />
        </div>
        <div ref={companyRef} className="company-section">
          <CompanySection />
        </div>
        <div ref={promoRef} className="promo-section">
          <PromoSection />
        </div>
        <div ref={locationRef} className="location-section">
          <Location />
        </div>
        <div ref={propertiesRef} className="properties-section">
          <Properties showContent={showContent} />
        </div>
        <Parallax />
        <div ref={contactRef} className="contact-section">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};