import { type FC } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

interface ShowcaseContent {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Showcase: FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  const showcaseContent: ShowcaseContent[] = [
    {
      image: "http://aislike.rs/BOSS/1_2 - Photo.jpg",
      title: "VB Perla",
      subtitle: "Prestižna Lokacija",
      description: "Smešten u najekskluzivnijem delu Vrnjačke Banje, VB Perla predstavlja vrhunac sofisticiranog životnog prostora. Sa svojom prestižnom lokacijom na samo par koraka od centra i živopisne promenade, ovaj objekat nudi jedinstven spoj luksuza i praktičnosti."
    },
    {
      image: "http://aislike.rs/BOSS/var3_2 - Photo.jpg",
      title: "Vrnjčanka",
      subtitle: "Ekskluzivni Dizajn",
      description: "Vrhunski materijali, pažljivo osmišljeni detalji i moderna arhitektura čine Vrnjčanku simbolom luksuza. Svaka jedinica je projektovana da pruži maksimalan komfor i funkcionalnost uz nenadmašan stil života."
    }
  ];

  useEffect(() => {
    if (!autoplayPaused) {
      const interval = setInterval(() => {
        nextShowcase();
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplayPaused]);

  const nextShowcase = () => {
    if (!imageRef.current || !titleRef.current || isAnimating) return;
    
    setIsAnimating(true);
    
    // Fade out current content
    titleRef.current.style.animation = 'fadeSlideOut 0.5s forwards';
    imageRef.current.style.animation = 'fadeSlideOut 0.5s forwards';
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseContent.length);
      
      // Check refs again after timeout
      if (titleRef.current && imageRef.current) {
        titleRef.current.style.animation = 'fadeSlideIn 0.5s forwards';
        imageRef.current.style.animation = 'fadeSlideIn 0.5s forwards';
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };
  
  const prevShowcase = () => {
    if (!imageRef.current || !titleRef.current || isAnimating) return;
    
    setIsAnimating(true);
    
    // Fade out current content
    titleRef.current.style.animation = 'fadeSlideOut 0.5s forwards';
    imageRef.current.style.animation = 'fadeSlideOut 0.5s forwards';
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + showcaseContent.length) % showcaseContent.length);
      
      // Check refs again after timeout
      if (titleRef.current && imageRef.current) {
        titleRef.current.style.animation = 'fadeSlideIn 0.5s forwards';
        imageRef.current.style.animation = 'fadeSlideIn 0.5s forwards';
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === imageRef.current) {
            entry.target.style.animation = 'fadeSlideIn 1s forwards';
          } else if (entry.target === titleRef.current) {
            entry.target.style.animation = 'fadeSlideIn 1s forwards';
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, [currentIndex]);

  return (
  <section className="relative z-10 overflow-hidden">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-gradient-to-b from-[#0B1A2B] to-[#1B3964]" />
      <div className="h-2/3 bg-marina-cream" />
    </div>
    <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 pt-32 relative">
        <div ref={titleRef} className="opacity-0 transform">
          <h2 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 relative inline-block">
            <span className="block">{showcaseContent[currentIndex].title}</span>
            <span className="inline-block text-xl sm:text-2xl lg:text-3xl text-marina-gold mt-2 lg:mt-4">{showcaseContent[currentIndex].subtitle}</span>
            <div className="absolute -bottom-4 left-1/2 w-32 h-0.5 bg-marina-gold transform -translate-x-1/2" />
          </h2>
        </div>
        <p className="hero-subtitle hidden sm:block text-base sm:text-lg lg:text-xl text-white/60 mt-4 lg:mt-8">
          Luksuzni stambeni kompleks koji postavlja nove standarde elegancije i komfora
        </p>
      </div>

      <div 
        ref={imageRef}
        className="relative max-w-[1400px] mx-auto mb-16 z-10 opacity-0 -mt-4 sm:mt-0"
      >
        <img
          src={showcaseContent[currentIndex].image}
          alt={showcaseContent[currentIndex].title}
          className="w-full aspect-[16/9] object-cover rounded-lg shadow-2xl transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg transition-opacity duration-700" />
        <div className="absolute -left-24 top-1/2 -translate-y-1/2">
          <button
            onClick={prevShowcase}
            onMouseEnter={() => setAutoplayPaused(true)}
            onMouseLeave={() => setAutoplayPaused(false)}
            className="bg-white hover:bg-marina-gold p-5 rounded-lg shadow-lg group disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-8 h-8 text-marina-dark group-hover:text-white transition-colors" />
          </button>
        </div>
        <div className="absolute -right-24 top-1/2 -translate-y-1/2">
          <button
            onClick={nextShowcase}
            onMouseEnter={() => setAutoplayPaused(true)}
            onMouseLeave={() => setAutoplayPaused(false)}
            className="bg-white hover:bg-marina-gold p-5 rounded-lg shadow-lg group disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronRight className="w-8 h-8 text-marina-dark group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center pb-32 relative">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-bold text-marina-dark mb-4 lg:mb-6 tracking-wide">
          LUKSUZNO STANOVANJE U SRCU BANJE
        </h3>
        <p className="text-base sm:text-lg text-marina-dark/70 mb-6 lg:mb-8 leading-relaxed">
          {showcaseContent[currentIndex].description}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to={currentIndex === 0 ? "/properties" : "/vrnjcanka"}
            className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 bg-marina-dark hover:bg-marina-gold text-white rounded-lg transition-all duration-300 group text-sm sm:text-base"
          >
            Pogledaj više
            <ChevronDown className="ml-2 w-5 h-5 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 border border-marina-dark text-marina-dark hover:bg-marina-dark hover:text-white rounded-lg transition-all duration-300 group text-sm sm:text-base"
          >
            Kontaktirajte nas
            <ChevronDown className="ml-2 w-5 h-5 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};