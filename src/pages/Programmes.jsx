import { ArrowRight, Compass, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programmes() {
    return (
        <div className="py-24 bg-gray-50 min-h-screen animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* En-tête */}
                <div className="text-center mb-20 mt-10">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Nos Programmes</h1>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                        Choisissez le parcours adapté à vos ambitions. Une approche pragmatique pensée pour transformer vos intentions en résultats tangibles.
                    </p>
                </div>

                {/* Grille des boîtes (Cards) */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Boîte 1 : Vision Boost */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                        <div className="h-4 bg-[#0072BC]"></div>
                        <div className="p-12 flex flex-col flex-grow">
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Compass size={40} className="text-[#0072BC]" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Orientation & Vision Professionnelle</h2>
                            <h3 className="text-xl text-[#0072BC] font-semibold mb-6">Vision_Boost_program</h3>
                            <p className="text-gray-600 text-lg mb-10 flex-grow">
                                Un parcours introspectif et progressif pour accompagner les jeunes à mieux se connaître, à identifier leur vocation et à construire un plan d’action réaliste.
                            </p>
                            <Link
                                to="/programmes/vision-boost"
                                className="inline-flex items-center justify-center gap-3 bg-[#0072BC] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors w-full"
                            >
                                Découvrir le programme <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Boîte 2 : Initiation Entrepreneuriat */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                        <div className="h-4 bg-[#E65C00]"></div>
                        <div className="p-12 flex flex-col flex-grow">
                            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Rocket size={40} className="text-[#E65C00]" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Initiation à l'Entrepreneuriat & Business</h2>
                            <h3 className="text-xl text-[#E65C00] font-semibold mb-6">Niveau Débutant</h3>
                            <p className="text-gray-600 text-lg mb-10 flex-grow">
                                Une introduction concrète et contextualisée à l’entrepreneuriat, adaptée aux réalités locales et aux aspirations des jeunes pour créer des projets viables.
                            </p>
                            <Link
                                to="/programmes/initiation-entrepreneuriat"
                                className="inline-flex items-center justify-center gap-3 bg-[#E65C00] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#cc5200] transition-colors w-full"
                            >
                                Découvrir le programme <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}