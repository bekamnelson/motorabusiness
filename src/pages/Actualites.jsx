import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Newspaper } from 'lucide-react';
import actualites from '../data/actualites';
import { formaterDate } from '../utils/date';
import PageHero from '../components/PageHero';
import imageHero from '../assets/programmes/yic-3.jpeg';

export default function Actualites() {
    return (
        <div className="bg-slate-50 min-h-screen animate-fade-in">
            <PageHero
                eyebrow="Sur le terrain"
                titre="Actualités"
                sousTitre="Ateliers, challenges, rencontres : suivez nos activités auprès des jeunes."
                image={imageHero}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                {actualites.length === 0 ? (
                    <div className="max-w-xl mx-auto text-center bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                        <Newspaper size={56} className="text-motora-orange opacity-40 mx-auto mb-6" />
                        <p className="text-xl font-bold text-motora-navy mb-2">Les premières actualités arrivent bientôt.</p>
                        <p className="text-gray-600 mb-8">En attendant, découvrez nos programmes.</p>
                        <Link to="/programmes" className="inline-flex items-center gap-2 bg-motora-orange text-white px-8 py-4 rounded-full font-bold hover:bg-motora-orange-dark transition-colors">
                            Nos programmes <ArrowRight size={20} />
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {actualites.map((actualite) => (
                            <Link
                                key={actualite.slug}
                                to={`/actualites/${actualite.slug}`}
                                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group"
                            >
                                <div className="h-52 overflow-hidden bg-orange-50">
                                    {actualite.images?.[0] && (
                                        <img src={actualite.images[0]} alt={actualite.titre} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    )}
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-motora-orange mb-3">
                                        <span className="flex items-center gap-1"><CalendarDays size={16} /> {formaterDate(actualite.date)}</span>
                                        {actualite.lieu && <span className="flex items-center gap-1"><MapPin size={16} /> {actualite.lieu}</span>}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-bold text-motora-navy mb-3 leading-snug">{actualite.titre}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{actualite.resume}</p>
                                    <span className="inline-flex items-center gap-2 font-bold text-motora-orange group-hover:gap-4 transition-all">
                                        Lire la suite <ArrowRight size={20} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
