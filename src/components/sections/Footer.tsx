import { type FC } from 'react';
import { Building } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="relative bg-marina-dark text-white py-8 sm:py-12 w-full">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="relative z-10 w-full px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="md:col-span-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4 sm:mb-6">
            <img
              src="http://aislike.rs/BOSS/pRESTIGE%20VB%20(3).png"
              alt="VBprestige Logo"
              className="h-12 sm:h-16"
            />
          </div>
          <p className="text-marina-gold/80 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Vaš pouzdani partner za luksuzne nekretnine u Vrnjačkoj Banji. Pronađite svoj savršeni dom uz našu stručnu pomoć i dugogodišnje iskustvo.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Korisni linkovi</h4>
          <ul className="space-y-1.5 sm:space-y-2">
            <li><a href="https://www.vrnjackabanja.co.rs" target="_blank" rel="noopener noreferrer" className="text-marina-gold/80 hover:text-white transition-colors">Opština Vrnjačka Banja</a></li>
            <li><a href="https://www.vrnjcispa.rs" target="_blank" rel="noopener noreferrer" className="text-marina-gold/80 hover:text-white transition-colors">Specijalna bolnica Merkur</a></li>
            <li><a href="https://www.goc.rs" target="_blank" rel="noopener noreferrer" className="text-marina-gold/80 hover:text-white transition-colors">Ski centar Goč</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Radno vreme</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-marina-gold/80">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Building size={16} className="text-marina-gold" />
              <span className="text-sm sm:text-base">Ponedeljak - Petak: 08:00 - 20:00</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Building size={16} className="text-marina-gold" />
              <span className="text-sm sm:text-base">Subota: 09:00 - 16:00</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Building size={16} className="text-marina-gold" />
              <span className="text-sm sm:text-base">Nedelja: Po dogovoru</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-marina-gold/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-marina-gold/80 text-sm sm:text-base">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Prestige Gradnja. Sva prava zadržana.</p>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-sm sm:text-base">Dizajn i razvoj:</span>
          <a 
            href="https://aisajt.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-marina-gold hover:text-white transition-colors flex items-center gap-1 sm:gap-2"
          >
            aisajt.com
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
};