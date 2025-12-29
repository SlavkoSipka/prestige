import { type FC } from 'react';
import { X, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEE5NjIiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10" />
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="text-white/60 text-sm hidden sm:block">Kliknite bilo gde za zatvaranje</span>
        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-marina-gold p-2 rounded-lg backdrop-blur-sm transition-all duration-300 group"
        >
          <ZoomOut className="w-6 h-6 text-white group-hover:text-marina-dark" />
        </button>
      </div>
      <img
        src={imageUrl}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );
};