import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Google Analytics page view tracking
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // @ts-ignore - gtag is added by the script in index.html
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search
    });
  }, [location]);

  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageTracker />
      <App />
    </BrowserRouter>
  </StrictMode>
);
