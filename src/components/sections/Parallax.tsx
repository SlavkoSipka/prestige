import { type FC } from 'react';

export const Parallax: FC = () => {
  const imageUrl = "http://aislike.rs/BOSS/1_2 - Photo.jpg";
  
  return (
    <section className="relative z-10">
      {/* Mobile version - regular image */}
      <div className="md:hidden h-[40vh] relative">
        <img
          src={imageUrl}
          alt="Parallax Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-transparent to-[#0B1A2B] opacity-90" />
      </div>
      
      {/* Desktop version - parallax effect */}
      <div 
        className="hidden md:block h-[40vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-transparent to-[#0B1A2B] opacity-90" />
      </div>
    </section>
  );
};