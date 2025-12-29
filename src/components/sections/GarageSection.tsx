import { type FC } from 'react';
import { Store } from 'lucide-react';

export const GarageSection: FC = () => (
  <section className="w-full py-12 sm:py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-[#1B3964] to-[#0B1A2B]" />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
    <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl font-cormorant font-bold text-white mb-3 sm:mb-4 relative inline-block">
          Podzemna Garaža
          <div className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-marina-gold transform -translate-x-1/2" />
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-lg px-4">
          Prostrana garaža sa direktnim pristupom lokalu i svim spratovima, dizajnirana za maksimalnu funkcionalnost i udobnost.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-[#1B3964]/80 to-[#0B1A2B]/80 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-marina-gold/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-marina-gold/20 flex items-center justify-center">
                <Store className="w-5 h-5 sm:w-7 sm:h-7 text-marina-gold" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">636,02m²</h3>
                <p className="text-marina-gold/80 text-sm sm:text-base">Ukupna površina</p>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                </div>
                <span className="text-sm sm:text-base">Prostran parking prostor za stanare</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                </div>
                <span className="text-sm sm:text-base">Direktan pristup lokalu i liftovima</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                </div>
                <span className="text-sm sm:text-base">Savremeni ventilacioni sistem</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-marina-gold/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-marina-gold rounded-full" />
                </div>
                <span className="text-sm sm:text-base">LED osvetljenje i video nadzor</span>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://aislike.rs/BOSS/garaza.png"
              alt="Garaža Plan"
              className="w-full h-48 sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs sm:text-sm font-medium">Plan garaže</p>
            </div>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="https://aislike.rs/BOSS/garaza slika.jpeg"
            alt="Garaža Izgled"
            className="w-full h-48 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs sm:text-sm font-medium">Izgled garaže</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);