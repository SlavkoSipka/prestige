import { type FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { LocationPage } from './pages/LocationPage';
import { BusinessSpacePage } from './pages/BusinessSpacePage';
import { ContactPage } from './pages/ContactPage';
import { VrnjcankaPage } from './pages/VrnjcankaPage';
import { GalleryPage } from './pages/GalleryPage';
import { ApartmentPage } from './pages/ApartmentPage';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useEffect, useState } from 'react';

const App: FC = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleLoadingComplete = () => {
    setShowContent(true);
    // Add a small delay before starting hero animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };
  
  return (
    <div className="relative">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Routes>
          <Route path="/" element={<HomePage isLoaded={isLoaded} />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vrnjcanka" element={<VrnjcankaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/properties/business-space" element={<BusinessSpacePage />} />
          <Route path="/properties/apartment/:id" element={<ApartmentPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;