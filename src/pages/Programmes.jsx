import { ArrowRight, Compass, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import programmes from '../data/programmes';
import PageHero from '../components/PageHero';
import imageHero from '../assets/programmes/mbs-1.jpeg';

export default function Programmes() {
    return (
        <div className="bg-slate-50 min-h-screen animate-fade-in">
            <PageHero
                eyebrow="L'incubateur des jeunes"
                titre="Nos Programmes"
                sousTitre="De l'école à l'atelier de l'artisan, six programmes pour transformer les idées en projets concrets."
                image={imageHero}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                {/* Grille des programmes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programmes.map((programme) => {
                        const Icon = programme.icon;
                        const image = programme.images[0];
                        return (
                            <Link
                                key={programme.slug}
                                to={`/programmes/${programme.slug}`}
                                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group"
                            >
                                <div className="relative h-52 overflow-hidden bg-orange-50">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={programme.titre}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Icon size={80} className="text-motora-orange opacity-30" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-motora-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                                        <Icon size={24} />
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-motora-navy mb-2 leading-snug">
                                        {programme.titre}
                                        {programme.sigle && <span className="text-motora-orange"> ({programme.sigle})</span>}
                                    </h3>
                                    <p className="flex items-center gap-2 text-sm font-semibold text-motora-orange mb-4">
                                        <Users size={16} /> {programme.cible}
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg mb-6 flex-grow">{programme.resume}</p>
                                    <span className="inline-flex items-center gap-2 font-bold text-motora-orange group-hover:gap-4 transition-all">
                                        Découvrir le programme <ArrowRight size={20} />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Parcours d'orientation Vision Boost */}
                <div className="mt-20 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-3 h-3 md:h-auto bg-motora-blue"></div>
                    <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 flex-grow">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Compass size={32} className="text-motora-blue" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-bold text-motora-navy mb-2">Parcours d'orientation : Vision Boost</h3>
                            <p className="text-gray-600 text-base md:text-lg">
                                Un parcours introspectif pour aider les jeunes à mieux se connaître, identifier leur vocation et construire un plan d'action réaliste.
                            </p>
                        </div>
                        <Link
                            to="/programmes/vision-boost"
                            className="inline-flex items-center justify-center gap-3 bg-motora-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors flex-shrink-0"
                        >
                            Voir le parcours <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
