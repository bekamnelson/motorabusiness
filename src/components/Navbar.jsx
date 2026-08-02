import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Effet pour ajouter une ombre quand on scrolle
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu mobile quand on change de page
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/logo.jpeg"
                            alt="Motora Business School"
                            className="h-12 md:h-16 object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        {/* Texte de secours si le logo ne charge pas */}
                        <div className="hidden text-xl font-black tracking-tighter leading-none">
                            <span className="text-[#0072BC]">MOTORA</span><br />
                            <span className="text-[#E65C00]">BUSINESS</span>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-[#E65C00] font-semibold transition-colors">Accueil</Link>
                        <Link to="/programmes" className="text-gray-700 hover:text-[#E65C00] font-semibold transition-colors">Nos Programmes</Link>
                        <Link to="/partenariat" className="text-gray-700 hover:text-[#E65C00] font-semibold transition-colors">Partenariat</Link>
                        <a href="#contact" className="bg-[#E65C00] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#cc5200] transition-colors shadow-lg shadow-orange-500/30">
                            Nous Contacter
                        </a>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            <div className={`md:hidden absolute w-full bg-white border-t transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                    <Link to="/" className="block px-3 py-3 text-gray-800 font-semibold hover:bg-orange-50 hover:text-[#E65C00] rounded-lg">Accueil</Link>
                    <Link to="/programmes" className="block px-3 py-3 text-gray-800 font-semibold hover:bg-orange-50 hover:text-[#E65C00] rounded-lg">Nos Programmes</Link>
                    <Link to="/partenariat" className="block px-3 py-3 text-gray-800 font-semibold hover:bg-orange-50 hover:text-[#E65C00] rounded-lg">Partenariat</Link>
                    <a href="#contact" className="block px-3 py-3 mt-4 text-center bg-[#E65C00] text-white font-bold rounded-lg">Nous Contacter</a>
                </div>
            </div>
        </nav>
    );
}