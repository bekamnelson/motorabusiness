import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import Partenariat from './pages/Partenariat';
// Nouvelles pages de programmes
import VisionBoost from './pages/VisionBoost';
import InitiationEntrepreneuriat from './pages/InitiationEntrepreneuriat';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/partenariat" element={<Partenariat />} />
            {/* Nouvelles routes */}
            <Route path="/programmes/vision-boost" element={<VisionBoost />} />
            <Route path="/programmes/initiation-entrepreneuriat" element={<InitiationEntrepreneuriat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;