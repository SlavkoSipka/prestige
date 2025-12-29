import { type FC } from 'react';
import { Building2, Shield, Trophy, Users, ArrowRight } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StatItem: FC<StatItemProps> = ({ icon, title, description }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg bg-marina-gold/10 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-[360deg]">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-marina-gold/80 text-sm">{description}</p>
    </div>
  </div>
);

export const CompanySection: FC = () => (
  <section className="lg:hidden relative bg-gradient-to-b from-[#0B1A2B] to-[#1B3964] py-12">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
    <div className="absolute inset-0">
      <img
        src="http://aislike.rs/BOSS/1_3 - Photo-min.jpg"
        alt="Prestige Gradnja Background"
        className="w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2B] via-[#0B1A2B]/90 to-[#1B3964]" />
    </div>
    <div className="container mx-auto px-4">
      <div className="relative mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="http://aislike.rs/BOSS/pRESTIGE%20VB%20(3).png"
            alt="VBprestige Logo"
            className="h-12"
          />
          <div>
            <h2 className="text-2xl font-bold text-white font-cormorant">Prestige Gradnja</h2>
            <p className="text-marina-gold/80 text-sm">Lider u izgradnji luksuznih nekretnina</p>
          </div>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          Sa više od 4 godine iskustva, postavljamo nove standarde u izgradnji luksuznih stambenih objekata u Vrnjačkoj Banji.
        </p>
      </div>

      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-marina-gold/20 p-6 rounded-lg group hover:bg-marina-blue/20 transition-all duration-300">
        <div className="space-y-6">
          <StatItem
            icon={<Building2 className="w-6 h-6 text-marina-gold" />}
            title="4+"
            description="godina iskustva"
          />
          <div className="h-px bg-gradient-to-r from-transparent via-marina-gold/20 to-transparent" />
          <StatItem
            icon={<Trophy className="w-6 h-6 text-marina-gold" />}
            title="2"
            description="uspešna projekta"
          />
          <div className="h-px bg-gradient-to-r from-transparent via-marina-gold/20 to-transparent" />
          <StatItem
            icon={<Users className="w-6 h-6 text-marina-gold" />}
            title="100+"
            description="zadovoljnih klijenata"
          />
          </div>
      </div>

      <div className="mt-8">
        <a
          href="#contact"
          className="w-full bg-marina-gold/10 hover:bg-marina-gold text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <span>Kontaktirajte nas</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);