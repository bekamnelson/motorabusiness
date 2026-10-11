import { ArrowLeft, Compass, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VisionBoost() {
    const modules = [
        "Introduction : Le point de départ de ton voyage intérieur",
        "Ce que j’aime vraiment",
        "Ce pour quoi je suis réellement doué",
        "Ce dont le monde a réellement besoin (ma contribution)",
        "Ce pour quoi je pourrais être payé",
        "Ma passion",
        "Ma mission",
        "Ma vocation",
        "Ma profession",
        "Mes filières connexes",
        "Mon 1er plan d’acquisition de compétences"
    ];

    const activites = [
        "L'orientation professionnelle",
        'Le leadership',
        "L'entrepreneuriat jeune",
        "L'employabilité",
        'Excursion / voyage',
    ];

    return (
        <div className="bg-white min-h-screen animate-fade-in pt-28 pb-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/programmes" className="inline-flex items-center gap-2 text-gray-500 hover:text-motora-blue font-semibold mb-12 transition-colors">
                    <ArrowLeft size={20} /> Retour aux programmes
                </Link>

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-motora-blue rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Compass size={40} />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-motora-navy">Vision Boost Program</h1>
                        <p className="text-xl text-motora-blue font-bold mt-2">Orientation & Vision Professionnelle</p>
                        <p className="flex items-center gap-2 text-gray-600 font-semibold mt-2"><Users size={18} /> Pour les jeunes de 9 à 30 ans</p>
                    </div>
                </div>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                    Un parcours introspectif et progressif pour accompagner les jeunes à mieux se connaître, à identifier leur vocation et à construire un plan d’action réaliste.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border-l-8 border-motora-blue">
                        <h2 className="text-xl md:text-2xl font-bold text-motora-navy mb-3 flex items-center gap-2">
                            <Target className="text-motora-blue" size={24} /> Notre mission
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                            « Accompagner des jeunes capables de transformer leur vision personnelle en métier, expertise, opportunité économique et impact communautaire durable. »
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
                        <h2 className="text-xl md:text-2xl font-bold text-motora-navy mb-4">Nos activités</h2>
                        <ul className="space-y-2">
                            {activites.map((activite, index) => (
                                <li key={activite} className="flex items-center gap-3 text-base md:text-lg text-gray-800">
                                    <span className="w-7 h-7 bg-motora-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{index + 1}</span>
                                    {activite}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <h2 className="text-3xl font-bold text-motora-navy mb-10">Les Modules du Parcours</h2>

                    <div className="space-y-6">
                        {modules.map((module, index) => (
                            <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-motora-blue rounded-full flex items-center justify-center font-black text-xl">
                                    {index}
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold text-gray-800">{module}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link to={`/contact?sujet=${encodeURIComponent('Parcours Vision Boost')}`} className="inline-block bg-motora-blue text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl">
                        Intégrer ce programme
                    </Link>
                </div>

            </div>
        </div>
    );
}