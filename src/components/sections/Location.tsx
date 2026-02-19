import { type FC, useEffect, useRef } from 'react';
import { MapPin, Clock, Coffee, Trees as Tree } from 'lucide-react';

export const Location: FC = () => {
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
  <section className="py-16 relative bg-gradient-to-r from-marina-dark to-marina-blue">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div ref={imageRef} className="relative location-image">
          <img
            src="/images/BOSS/1_9 - Photo-min.jpg"
            alt="VB Perla Lokacija"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-[4/3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent rounded-lg" />
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:left-6 bg-marina-cream backdrop-blur-sm p-4 lg:p-6 rounded-lg max-w-[200px] lg:max-w-xs shadow-lg border border-marina-gold/20">
            <div className="flex items-center gap-2 lg:gap-3 mb-1 lg:mb-2">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-marina-gold" />
              <span className="text-marina-dark font-medium text-sm lg:text-base">Ekskluzivna Lokacija</span>
            </div>
            <p className="text-marina-dark/80 text-xs lg:text-sm">500m od Kraljevskog parka</p>
          </div>
        </div>
        <div ref={contentRef} className="location-content">
          <h2 className="text-2xl lg:text-4xl font-cormorant font-bold text-white mb-4 lg:mb-6">
            Ekskluzivna Lokacija u Srcu Vrnjačke Banje
          </h2>
          <p className="text-white/80 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-lg">
            VB Perla - prestižna lokacija u ulici Kneza Miloša, 500m od Kraljevskog parka.
          </p>
          <p className="text-white/80 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-lg">
            Miran kraj sa svim pogodnostima centra Vrnjačke Banje na dohvat ruke.
          </p>
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center gap-2 lg:gap-3 text-white/90 bg-marina-blue/30 p-3 lg:p-4 rounded-lg border border-marina-gold/20">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-marina-gold" />
              </div>
              <span className="text-sm lg:text-base">Ulica Kneza Miloša 56</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 text-white/90 bg-marina-blue/30 p-3 lg:p-4 rounded-lg border border-marina-gold/20">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-marina-gold" />
              </div>
              <span className="text-sm lg:text-base">5 min hodom do centra </span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 text-white/90 bg-marina-blue/30 p-3 lg:p-4 rounded-lg border border-marina-gold/20">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                <Coffee className="w-4 h-4 lg:w-5 lg:h-5 text-marina-gold" />
              </div>
              <span className="text-sm lg:text-base">Restorani i kafići</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};