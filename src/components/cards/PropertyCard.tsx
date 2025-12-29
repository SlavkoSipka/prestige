import { type FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  details: string;
  index: number;
  apartmentNumber: string;
}

export const PropertyCard: FC<PropertyCardProps> = ({ image, title, price, details, index, apartmentNumber }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/properties', {
      state: { highlightApartment: apartmentNumber }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 200); // Stagger the animations
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
  }, [index]);

  return (
    <div ref={cardRef} className="property-card-wrapper">
      <div 
        className="group relative overflow-hidden shadow-lg property-card transform perspective-1000 bg-gradient-to-br from-[#1B3964] to-[#0B1A2B] cursor-pointer"
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-marina-gold/20 via-transparent to-marina-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-contain p-4 transform transition-all duration-700 group-hover:scale-105 card-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-500 card-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform card-content">
          <h3 className="text-xl font-bold text-white mb-2 card-title">{title}</h3>
          <p className="text-gray-200 mb-2 card-details">{details}</p>
          <p className="text-2xl font-bold text-white card-price">{price}</p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-marina-gold/10 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150 group-hover:rotate-45"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} 
        />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-marina-dark/10 transform -translate-x-1/2 translate-y-1/2 transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-45"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
        />
      </div>
    </div>
  );
}