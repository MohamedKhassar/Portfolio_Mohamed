import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Analytics } from "@vercel/analytics/react";
import { MainPortfolio } from './components/MainPortfolio';

gsap.registerPlugin(ScrollTrigger);



const App = () => {
  return (
    <HelmetProvider>
      <ReactLenis root>
        <Analytics />
        <BrowserRouter>
          <Routes>
            {/* English / Default route */}
            <Route path="/" element={<MainPortfolio />} />
            {/* Localized route (e.g. /fr) */}
            <Route path="/:lang" element={<MainPortfolio />} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;