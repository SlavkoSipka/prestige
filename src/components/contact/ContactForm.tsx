import { type FC, useEffect, useRef } from 'react';
import { useState } from 'react';
import { sendEmail } from '../../utils/emailjs';

export const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
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
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-3 sm:p-5 rounded-lg relative contact-card contact-form-card">
      <div className="space-y-4">
        <div className="flex items-baseline mb-0.5 sm:mb-1">
          <label className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Vaše ime i prezime</label>
          <span className="text-marina-gold ml-1">*</span>
        </div>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Vaše ime i prezime*"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base focus:outline-none focus:border-marina-gold transition-colors"
        />
        <div className="flex items-baseline mb-0.5 sm:mb-1">
          <label className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Vaš e-mail</label>
          <span className="text-marina-gold ml-1">*</span>
        </div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Vaš e-mail*"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base focus:outline-none focus:border-marina-gold transition-colors"
        />
        <div className="flex items-baseline mb-0.5 sm:mb-1">
          <label className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Vaš broj telefona</label>
          <span className="text-marina-gold ml-1">*</span>
        </div>
        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex items-center">
            <img src="https://flagcdn.com/w20/rs.png" alt="Serbia" className="w-4 sm:w-5 h-auto mr-1.5 sm:mr-2" />
            <span className="text-gray-500 text-sm sm:text-base">+381</span>
          </div>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="XX XXXXXXX"
            className="w-full pl-20 sm:pl-24 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base focus:outline-none focus:border-marina-gold transition-colors"
          />
        </div>
        <div className="flex items-baseline mb-0.5 sm:mb-1">
          <label className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Napomena (opciono)</label>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Bez ustručavanja, postavite nam sva pitanja o nekretninama, gradnji, investitoru i lokaciji! Naš tim je tu da Vam pruži direktan uvid o svemu."
          rows={4}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base focus:outline-none focus:border-marina-gold transition-colors resize-none"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-marina-dark text-white py-3 sm:py-4 px-4 sm:px-6 rounded hover:bg-marina-blue transition-colors font-medium text-sm sm:text-base relative ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Slanje...' : 'Pošaljite upit'}
        </button>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-sm">
            Vaša poruka je uspešno poslata! Kontaktiraćemo Vas uskoro.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
            Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
          </div>
        )}
      </div>
    </form>
  );
};