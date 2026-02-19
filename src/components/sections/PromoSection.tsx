import { type FC, useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromoSection: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-marina-cream via-marina-cream to-marina-cream/95 rounded-lg shadow-xl">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="promo-content">
            <h2 className="text-4xl font-cormorant font-bold text-marina-dark mb-6">
              Više od 40% stanova već rezervisano!
            </h2>
            <p className="text-marina-dark/80 text-lg mb-8 leading-relaxed">
              Najbolje vreme za kupovinu nekretnine u VB Perli je sada! Možete kupiti stan već od 1.800€ po kvadratu. Završetak radova i primopredaja ključeva Vašeg novog stana očekuje se već 1.4.2027.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-marina-dark hover:bg-white text-white hover:text-marina-dark rounded-lg transition-all duration-300 group shadow-lg"
              >
                <span>Kontaktirajte nas</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a 
                href="tel:+38163646659"
                className="inline-flex items-center justify-center px-8 py-4 border border-marina-dark text-marina-dark hover:bg-marina-dark hover:text-white rounded-lg transition-all duration-300 group shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+381 63 646659</span>
              </a>
            </div>
          </div>
          <div ref={imageRef} className="relative hidden lg:block promo-image">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/BOSS/pozadinska.jpg"
                alt="VB Perla Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marina-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-marina-cream backdrop-blur-sm p-6 rounded-lg max-w-xs shadow-lg border border-marina-gold/20">
              <p className="text-sm font-medium text-marina-dark/80 mb-2">CENA VEĆ OD</p>
              <p className="text-3xl font-bold text-marina-dark">1.800€<span className="text-lg font-normal">/m²</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};