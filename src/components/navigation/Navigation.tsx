import { type FC } from 'react';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { NavigationLinks } from './NavigationLinks';
import { ContactInfo } from './ContactInfo';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationProps {
  isScrolled: boolean;
  showNavbar: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const Navigation: FC<NavigationProps> = ({
  isScrolled,
  showNavbar,
  isMenuOpen,
  setIsMenuOpen
}) => (
  <nav className={`fixed w-full z-50 transition-all duration-700 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isScrolled || isMenuOpen ? 'bg-marina-gold shadow-lg scrolled' : 'bg-gradient-to-b from-[#0B1A2B]/80 to-transparent backdrop-blur-[2px]'}`}>
    <div className="w-full px-8">
      <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex-shrink-0">
          <div className="flex items-center">
            <img
              src="/images/BOSS/pRESTIGE%20VB%20(3).png"
              alt="VBprestige Logo"
              className={`transition-all duration-300 ${isScrolled || isMenuOpen ? 'h-16' : 'h-24'}`}
            />
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center">
            <NavigationLinks isScrolled={isScrolled} />
            <ContactInfo isScrolled={isScrolled} />
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-marina-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden fixed inset-x-0 top-[72px] bg-marina-dark/95 backdrop-blur-md z-50">
        <div className="px-6 py-8 space-y-6 border-t border-marina-gold/20">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-lg text-white hover:bg-marina-gold/10 rounded-lg transition-all duration-300"
          >
            <span>Početna</span>
            <ArrowRight size={20} className="text-marina-gold" />
          </Link>
          <Link 
            to="/gallery" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-lg text-white hover:bg-marina-gold/10 rounded-lg transition-all duration-300"
          >
            <span>Galerija</span>
            <ArrowRight size={20} className="text-marina-gold" />
          </Link>
          <Link 
            to="/location" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-lg text-white hover:bg-marina-gold/10 rounded-lg transition-all duration-300"
          >
            <span>Lokacija</span>
            <ArrowRight size={20} className="text-marina-gold" />
          </Link>
          <Link 
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-lg text-white hover:bg-marina-gold/10 rounded-lg transition-all duration-300"
          >
            <span>Kontakt</span>
            <ArrowRight size={20} className="text-marina-gold" />
          </Link>
          
          <div className="pt-6 mt-6 border-t border-marina-gold/20">
            <div className="px-4 mb-4">
              <span className="text-marina-gold text-sm">Naši projekti</span>
            </div>
            <Link 
              to="/properties" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-start gap-4 p-4 hover:bg-marina-gold/10 rounded-lg transition-all duration-300 group"
            >
              <img 
                src="/images/BOSS/1_9 - Photo-min.jpg"
                alt="VB Perla"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-white font-medium mb-1">VB Perla</h3>
                <p className="text-white/70 text-sm">Ekskluzivni stambeni objekat</p>
                <span className="inline-block mt-2 px-2 py-1 bg-marina-gold/20 text-marina-gold text-xs rounded-full">
                  U izgradnji
                </span>
              </div>
            </Link>
            <Link 
              to="/vrnjcanka" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-start gap-4 p-4 hover:bg-marina-gold/10 rounded-lg transition-all duration-300 group"
            >
              <img 
                src="/images/BOSS/var3_6 - Photo.jpg"
                alt="Rezidencija Panorama"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-white font-medium mb-1">Vrnjčanka</h3>
                <p className="text-white/70 text-sm">Luksuzni stambeni objekat</p>
                <span className="inline-block mt-2 px-2 py-1 bg-marina-gold/20 text-marina-gold text-xs rounded-full">
                  Završeno
                </span>
              </div>
            </Link>
          </div>
          
          <div className="pt-6 mt-6 border-t border-marina-gold/20">
            <div className="flex items-center justify-between gap-4">
              <a 
                href="tel:+38163610837"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-marina-gold text-marina-dark rounded-lg hover:bg-white transition-all duration-300"
              >
                <Phone size={18} />
                <span>Pozovite</span>
              </a>
              <a 
                href="mailto:prestigegradnjavb@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-marina-gold text-white rounded-lg hover:bg-marina-gold hover:text-marina-dark transition-all duration-300"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </nav>
);