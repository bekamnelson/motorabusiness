import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import liens from '../data/navigation';

// Lien de la page en cours en orange
const classeLien = (base) => ({ isActive }) => `${base} ${isActive ? 'text-motora-orange' : 'text-gray-800'}`;

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
                            <span className="text-motora-blue">MOTORA</span><br />
                            <span className="text-motora-orange">BUSINESS</span>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {liens.map((lien) => (
                            <NavLink key={lien.to} to={lien.to} end={lien.to === "/"} className={classeLien('hover:text-motora-orange font-semibold transition-colors')}>{lien.label}</NavLink>
                        ))}
                        <Link to="/contact" className="bg-motora-orange text-white px-6 py-2.5 rounded-full font-bold hover:bg-motora-orange-dark transition-colors shadow-lg shadow-orange-500/30">
                            Nous Contacter
                        </Link>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-motora-navy focus:outline-none" aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen}>
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            <div className={`lg:hidden absolute w-full bg-white border-t transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden invisible'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                    {liens.map((lien) => (
                        <NavLink key={lien.to} to={lien.to} end={lien.to === "/"} className={classeLien('block px-3 py-3 font-semibold hover:bg-orange-50 hover:text-motora-orange rounded-lg')}>{lien.label}</NavLink>
                    ))}
                    <Link to="/contact" className="block px-3 py-3 mt-4 text-center bg-motora-orange text-white font-bold rounded-lg">Nous Contacter</Link>
                </div>
            </div>
        </nav>
    );
}