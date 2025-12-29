import { type FC } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; 
import { useEffect, useRef } from 'react';

export const ContactInfo: FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
  <div ref={cardRef} className="bg-[#0B1A2B] p-3 sm:p-6 relative contact-card contact-info-card">
      <div className="space-y-6">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Prodajna kancelarija</h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-marina-dark rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <MapPin className="w-5 h-5 text-marina-gold" />
            </div>
            <div>
              <span className="text-marina-gold text-xs sm:text-sm block mb-1 sm:mb-2">Adresa</span>
              <span className="text-white text-sm sm:text-base">Kneza Miloša 56, Vrnjačka Banja</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-marina-dark rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <Phone className="w-5 h-5 text-marina-gold" />
            </div>
            <div>
              <span className="text-marina-gold text-xs sm:text-sm block mb-1 sm:mb-2">Telefon</span>
              <span className="text-white block text-sm sm:text-base">+381 63 646 659</span>
              <span className="text-white text-sm sm:text-base">+381 63 610 837</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-marina-dark rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <Mail className="w-5 h-5 text-marina-gold" />
            </div>
            <div>
              <span className="text-marina-gold text-xs sm:text-sm block mb-1 sm:mb-2">Email</span>
              <span className="text-white text-sm sm:text-base">prestigegradnjavb@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="pt-3 sm:pt-4 border-t border-marina-gold/20">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Za ugodan život</h3>
          <div className="space-y-1.5 sm:space-y-2 text-white/80">
            <p className="text-sm sm:text-base">Prestige Gradnja</p>
            <p className="text-sm sm:text-base">Adresa: Kneza Miloša 56</p>
            <p className="text-sm sm:text-base">Poštanski broj: 36210 Vrnjačka Banja</p>
          </div>
        </div>
      </div>
  </div>
  );
};