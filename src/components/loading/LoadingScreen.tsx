import { type FC, useEffect, useState, useRef } from 'react';

const MIN_DURATION = 2000; // Minimum loading time in milliseconds
const MAX_DURATION = 3500; // Maximum loading time in milliseconds

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const completeLoading = () => {
      const elapsedTime = Date.now() - startTime.current;
      const remainingTime = Math.max(0, MIN_DURATION - elapsedTime);
      
      if (remainingTime > 0) {
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete?.();
        }, remainingTime);
      } else {
        setIsVisible(false);
        onLoadingComplete?.();
      }
    };

    // Set up maximum duration timer
    const maxTimer = setTimeout(() => {
      completeLoading();
    }, MAX_DURATION);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 - prev) * 0.1;
        return newProgress >= 98 ? 98 : newProgress;
      });
    }, 100);

    // Check if all images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setProgress(100);
        completeLoading();
      }
    };

    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded); // Count errors to avoid infinite loading
      }
    });

    return () => {
      clearTimeout(maxTimer);
      clearInterval(progressInterval);
      images.forEach(img => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B1A2B] flex items-center justify-center">
      <div className="relative">
        <img
          src="/images/BOSS/pRESTIGE%20VB%20(3).png"
          alt="VBprestige Logo"
          className="h-32 animate-[fadeIn_0.5s_ease-out_forwards] opacity-0"
        />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-marina-gold/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-marina-gold transition-all duration-700 ease-out relative" 
            style={{ width: `${progress}%` }}
          >
            <div 
              className="absolute inset-0 animate-[loadingBar_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};