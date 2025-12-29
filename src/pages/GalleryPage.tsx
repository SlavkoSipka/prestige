import { type FC, useState, useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/sections/Footer';
import { Contact } from '../components/sections/Contact';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { ImageModal } from '../components/modals/ImageModal';

const GALLERY_IMAGES = [
  'http://aislike.rs/BOSS/1_9 - Photo-min.jpg',
  'http://aislike.rs/BOSS/1_2 - Photo-min.jpg',
  'http://aislike.rs/BOSS/1_3 - Photo-min.jpg',
  'http://aislike.rs/BOSS/1_8 - Photo-min.jpg',
  'http://aislike.rs/BOSS/1_4 - Photo-min.jpg',
  'http://aislike.rs/BOSS/1_5 - Photo-min.jpg'
];

export const GalleryPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              src="http://aislike.rs/BOSS/1_9 - Photo-min.jpg"
              alt="VB Perla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-marina-dark/90 via-marina-dark/80 to-marina-dark" />
          </div>

          <div className="relative z-10 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="pt-20 mb-24">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-cormorant font-bold text-white mb-8 lg:mb-12">
                  <span className="block">Galerija</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-marina-gold mt-2 lg:mt-4">VB Perla</span>
                </h1>
                <p className="text-white/80 max-w-2xl text-base lg:text-lg mt-8 lg:mt-12 leading-relaxed">
                  Pogledajte kako napreduje izgradnja VB Perle, ekskluzivnog stambenog kompleksa u srcu Vrnjačke Banje.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`VB Perla ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Contact />
        </main>

        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage || ''}
          alt="VB Perla"
        />

        <Footer />
      </div>
    </>
  );
};