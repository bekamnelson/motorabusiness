import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, X } from 'lucide-react';
import programmes from '../data/programmes';

export default function ProgrammeDetail() {
    const { slug } = useParams();
    const [imageOuverte, setImageOuverte] = useState(null);
    const programme = programmes.find((p) => p.slug === slug);

    if (!programme) {
        return (
            <div className="pt-40 pb-32 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-motora-navy mb-6">Programme introuvable</h1>
                <Link to="/programmes" className="inline-flex items-center gap-2 text-motora-orange font-bold">
                    <ArrowLeft size={20} /> Retour aux programmes
                </Link>
            </div>
        );
    }

    const Icon = programme.icon;
    const [couverture, ...galerie] = programme.images;

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* En-tête avec photo */}
            <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-motora-navy">
                {couverture && (
                    <>
                        <img src={couverture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-motora-navy via-motora-navy/80 to-motora-navy/30"></div>
                    </>
                )}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-motora-orange/20 blur-3xl"></div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/programmes" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold mb-8 transition-colors">
                        <ArrowLeft size={20} /> Retour aux programmes
                    </Link>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-motora-orange rounded-2xl flex items-center justify-center text-white shadow-lg ring-4 ring-white/30 flex-shrink-0">
                            <Icon size={36} />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                {programme.titre}
                                {programme.sigle && <span className="text-orange-300"> ({programme.sigle})</span>}
                            </h1>
                            <p className="flex items-center gap-2 text-lg text-orange-100 font-semibold mt-3">
                                <Users size={20} /> {programme.cible}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description et points clés */}
            <section className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 lg:gap-16">
                    <div className="lg:col-span-3">
                        <h2 className="text-motora-orange font-black tracking-widest uppercase mb-4 text-sm md:text-lg">Le programme</h2>
                        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">{programme.description}</p>
                        {programme.modulesLien && (
                            <Link to={programme.modulesLien} className="inline-flex items-center gap-2 mt-8 text-motora-orange font-bold text-lg border-b-2 border-motora-orange pb-1 hover:text-motora-navy transition-colors">
                                Voir les modules de formation <ArrowRight size={20} />
                            </Link>
                        )}
                    </div>
                    <div className="lg:col-span-2 bg-orange-50 rounded-3xl p-6 md:p-8 border border-orange-100 h-fit">
                        <h3 className="text-xl md:text-2xl font-bold text-motora-navy mb-6">En bref</h3>
                        <ul className="space-y-4">
                            {programme.points.map((point) => (
                                <li key={point} className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                                    <CheckCircle2 className="text-motora-orange flex-shrink-0 mt-1" size={20} />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Galerie photo */}
            {galerie.length > 0 && (
                <section className="pb-16 md:pb-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-motora-navy mb-8">En images</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {galerie.map((image, index) => (
                                <button
                                    key={image}
                                    onClick={() => setImageOuverte(image)}
                                    className="overflow-hidden rounded-2xl shadow-md group focus:outline-none focus:ring-4 focus:ring-orange-300"
                                >
                                    <img
                                        src={image}
                                        alt={`${programme.titre} - photo ${index + 1}`}
                                        loading="lazy"
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Appel à l'action */}
            <section className="bg-motora-orange py-16 md:py-20 text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ce programme vous intéresse ?</h2>
                <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                    Contactez-nous pour y participer, y inscrire vos élèves ou devenir partenaire.
                </p>
                <Link to={`/contact?programme=${programme.slug}`} className="inline-block bg-white text-motora-orange px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-100 transition-all shadow-xl">
                    Nous contacter
                </Link>
            </section>

            {/* Visionneuse plein écran */}
            {imageOuverte && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setImageOuverte(null)}
                >
                    <button className="absolute top-4 right-4 text-white" aria-label="Fermer">
                        <X size={36} />
                    </button>
                    <img src={imageOuverte} alt="" className="max-w-full max-h-full rounded-xl" />
                </div>
            )}
        </div>
    );
}
