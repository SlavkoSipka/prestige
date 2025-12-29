import { type FC } from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';

interface ContactInfoProps {
  isScrolled: boolean;
}

export const ContactInfo: FC<ContactInfoProps> = ({ isScrolled }) => (
  <div className="flex items-center space-x-4 ml-8">
    <div className="flex items-center space-x-2">
      <a href="tel:+38163610837" className={`flex items-center space-x-2 transition-colors ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>
        <Phone size={14} className={isScrolled ? "text-marina-dark" : "text-marina-gold"} />
        <span className="text-sm">+381 63 610 837</span>
      </a>
    </div>
    <div className="h-4 w-px bg-marina-gold/30"></div>
    <div className="flex items-center space-x-2">
      <a href="tel:+38163646659" className={`flex items-center space-x-2 transition-colors ${isScrolled ? 'text-white hover:text-marina-blue' : 'text-white hover:text-marina-gold'}`}>
        <Phone size={14} className={isScrolled ? "text-marina-dark" : "text-marina-gold"} />
        <span className="text-sm">+381 63 646 659</span>
      </a>
    </div>
    <div className="h-4 w-px bg-marina-gold/30"></div>
    <div className="flex items-center space-x-3">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? 'text-marina-dark hover:text-marina-blue' : 'text-marina-gold hover:text-white'}`}>
        <Facebook size={16} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? 'text-marina-dark hover:text-marina-blue' : 'text-marina-gold hover:text-white'}`}>
        <Instagram size={16} />
      </a>
    </div>
  </div>
);