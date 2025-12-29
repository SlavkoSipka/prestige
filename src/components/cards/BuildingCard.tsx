import { type FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface BuildingCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export const BuildingCard: FC<BuildingCardProps> = ({ image, title, description, features }) => (
  <div className="w-full h-[450px] max-w-4xl mx-auto bg-marina-cream rounded-lg shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(11,26,43,0.3)] flex">
    <div className="w-[45%] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-marina-dark/30 z-10" />
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-marina-cream text-marina-dark px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg border border-marina-gold/20">Premium</span>
      </div>
    </div>
    <div className="w-[55%] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-3xl font-bold mb-3 text-marina-dark font-cormorant">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-base line-clamp-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/50 px-3 py-1.5 rounded-full border border-marina-gold/10">
              <span className="text-marina-dark/80 text-base flex items-center">
                <div className="w-1.5 h-1.5 bg-marina-gold rounded-full mr-2" />
                {feature}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 text-sm text-marina-dark/70">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            U izgradnji
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-marina-gold rounded-full" />
            Useljivo 2025
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-sm text-marina-dark/60 mb-1">Cena od</p>
          <p className="text-3xl font-bold text-marina-dark">2.100 <span className="text-xl font-normal">€/m²</span></p>
        </div>
        <a href="#contact" className="group/btn bg-marina-dark hover:bg-marina-gold text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-base">
          Saznaj više
          <ChevronDown className="rotate-[-90deg] transition-all duration-300 group-hover/btn:translate-x-1" size={20} />
        </a>
      </div>
    </div>
  </div>
);