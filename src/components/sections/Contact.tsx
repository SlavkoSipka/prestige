import { type FC } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactInfo } from '../contact/ContactInfo';
import { useState } from 'react';
import { sendEmail } from '../../utils/emailjs';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
  <section id="contact" className="relative z-10 py-6 sm:py-8 w-full">
    <div className="absolute inset-0">
      <img 
        src="/images/BOSS/var3_8 - Photo.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marina-dark/90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
    </div>
    <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <a href="/" className="text-marina-gold hover:text-white transition-colors">Početna</a>
        <span className="text-marina-gold/50">&gt;</span>
        <span className="text-white">Kontakt</span>
      </div>
      <h2 className="text-xl sm:text-3xl font-bold mb-2 text-white">Kontaktirajte nas</h2>
      <div className="mb-4 sm:mb-6">
        <p className="text-marina-gold/90 max-w-2xl">
          Naš tim je spreman i raspoložen da odgovori na sva Vaša pitanja. Započnite razgovor sa nama danas putem sledećih kontakt informacija ili ispunite obrazac u nastavku.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <ContactInfo />
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg relative">
          <h2 className="text-xl font-cormorant font-bold text-white mb-4">Pošaljite upit</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">VAŠE IME I PREZIME *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-marina-gold transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">VAŠ E-MAIL *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-marina-gold transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">VAŠ BROJ TELEFONA *</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                  <img src="https://flagcdn.com/w20/rs.png" alt="Serbia" className="w-5 h-auto mr-2" />
                  <span className="text-gray-500">+381</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-24 pr-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-marina-gold transition-all duration-300"
                  placeholder="XX XXXXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">VAŠA PORUKA</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-marina-gold transition-all duration-300 resize-none"
                placeholder="Postavite nam pitanje..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-marina-dark hover:bg-marina-gold text-white hover:text-marina-dark font-medium py-4 rounded transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Slanje...' : 'Pošaljite poruku'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/10 text-green-400 rounded text-sm">
                Vaša poruka je uspešno poslata! Kontaktiraćemo Vas uskoro.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded text-sm">
                Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};