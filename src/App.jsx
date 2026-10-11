import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import Partenariat from './pages/Partenariat';
// Nouvelles pages de programmes
import VisionBoost from './pages/VisionBoost';
import InitiationEntrepreneuriat from './pages/InitiationEntrepreneuriat';
import QuiSommesNous from './pages/QuiSommesNous';
import Services from './pages/Services';
import Actualites from './pages/Actualites';
import ActualiteDetail from './pages/ActualiteDetail';
import Contact from './pages/Contact';
import ProgrammeDetail from './pages/ProgrammeDetail';
import NotFound from './pages/NotFound';

// Remonte en haut de la page à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/partenariat" element={<Partenariat />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/services" element={<Services />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/actualites/:slug" element={<ActualiteDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* Ancienne adresse, conservée pour les liens déjà partagés */}
            <Route path="/objectifs" element={<Navigate to="/qui-sommes-nous" replace />} />
            {/* Nouvelles routes */}
            <Route path="/programmes/vision-boost" element={<VisionBoost />} />
            <Route path="/programmes/initiation-entrepreneuriat" element={<InitiationEntrepreneuriat />} />
            <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;