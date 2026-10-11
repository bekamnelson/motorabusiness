import { ArrowLeft, Rocket, Briefcase, Monitor, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InitiationEntrepreneuriat() {
    return (
        <div className="bg-white min-h-screen animate-fade-in pt-28 pb-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/programmes" className="inline-flex items-center gap-2 text-gray-500 hover:text-motora-orange font-semibold mb-12 transition-colors">
                    <ArrowLeft size={20} /> Retour aux programmes
                </Link>

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-motora-orange rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Rocket size={40} />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-motora-navy">Initiation à l'Entrepreneuriat</h1>
                        <p className="text-xl text-motora-orange font-bold mt-2">Niveau Débutant</p>
                    </div>
                </div>

                <p className="text-2xl text-gray-600 leading-relaxed mb-16 max-w-3xl">
                    Une introduction concrète et contextualisée à l’entrepreneuriat, adaptée aux réalités locales et aux aspirations des jeunes.
                </p>

                <div className="space-y-12">

                    {/* Module 1 */}
                    <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
                        <Briefcase size={120} className="absolute -right-10 -bottom-10 text-orange-200 opacity-50" />
                        <h2 className="text-3xl font-bold text-motora-navy mb-8 relative z-10">
                            <span className="text-motora-orange">Module 1 :</span> Introduction à l’Entrepreneuriat
                        </h2>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 1 :</strong> Comprendre le profil, les opportunités et les défis de l’entrepreneur africain.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 2 :</strong> Définir les concepts clés : entrepreneuriat, entreprise, éthique des affaires.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 3 :</strong> Comment détecter une opportunité d’affaire ?</p>
                            </li>
                        </ul>
                    </div>

                    {/* Module 2 */}
                    <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
                        <Presentation size={120} className="absolute -right-10 -bottom-10 text-orange-200 opacity-50" />
                        <h2 className="text-3xl font-bold text-motora-navy mb-8 relative z-10">
                            <span className="text-motora-orange">Module 2 :</span> Concevoir son Projet
                        </h2>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 1 :</strong> Diagnostiquer l’environnement (spécificités africaines).</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 2 :</strong> Étude de faisabilité et prototypage.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 3 :</strong> Prise de parole en public.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 4 :</strong> Rédaction et présentation d’un plan économique.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Module 3 */}
                    <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
                        <Monitor size={120} className="absolute -right-10 -bottom-10 text-orange-200 opacity-50" />
                        <h2 className="text-3xl font-bold text-motora-navy mb-8 relative z-10">
                            <span className="text-motora-orange">Module 3 :</span> Entrepreneuriat Numérique
                        </h2>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 1 :</strong> Personal branding.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 2 :</strong> Le digital au service de l’entreprise.</p>
                            </li>
                            <li className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-motora-orange flex-shrink-0"></div>
                                <p className="text-lg text-gray-800"><strong className="text-motora-navy">Thématique 3 :</strong> Le digital comme source de revenu.</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <Link to="/contact?programme=motora-business-school" className="inline-block bg-motora-orange text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-motora-orange-dark transition-all shadow-xl">
                        Intégrer ce programme
                    </Link>
                </div>

            </div>
        </div>
    );
}