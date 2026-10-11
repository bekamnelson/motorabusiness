import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="pt-40 pb-32 px-4 text-center animate-fade-in">
            <p className="text-motora-orange font-black text-7xl md:text-9xl mb-6">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-motora-navy mb-4">Page introuvable</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
                La page que vous cherchez n'existe pas ou a été déplacée.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 bg-motora-orange text-white px-8 py-4 rounded-full font-bold hover:bg-motora-orange-dark transition-colors">
                <ArrowLeft size={20} /> Retour à l'accueil
            </Link>
        </div>
    );
}
