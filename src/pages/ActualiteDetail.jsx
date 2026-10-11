import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import actualites from '../data/actualites';
import programmes from '../data/programmes';
import { formaterDate } from '../utils/date';

export default function ActualiteDetail() {
    const { slug } = useParams();
    const actualite = actualites.find((a) => a.slug === slug);

    if (!actualite) {
        return (
            <div className="pt-40 pb-32 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-motora-navy mb-6">Actualité introuvable</h1>
                <Link to="/actualites" className="inline-flex items-center gap-2 text-motora-orange font-bold">
                    <ArrowLeft size={20} /> Retour aux actualités
                </Link>
            </div>
        );
    }

    const programme = programmes.find((p) => p.slug === actualite.programme);
    const [couverture, ...galerie] = actualite.images ?? [];

    return (
        <article className="pt-28 pb-24 bg-white min-h-screen animate-fade-in">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/actualites" className="inline-flex items-center gap-2 text-gray-500 hover:text-motora-orange font-semibold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Retour aux actualités
                </Link>

                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold text-motora-orange mb-4">
                    <span className="flex items-center gap-1"><CalendarDays size={18} /> {formaterDate(actualite.date)}</span>
                    {actualite.lieu && <span className="flex items-center gap-1"><MapPin size={18} /> {actualite.lieu}</span>}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-motora-navy mb-8 leading-tight">{actualite.titre}</h1>

                {couverture && <img src={couverture} alt={actualite.titre} className="w-full rounded-3xl shadow-lg mb-10 max-h-[32rem] object-cover" />}

                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                    {actualite.contenu.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}
                </div>

                {galerie.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                        {galerie.map((image, index) => (
                            <img key={image} src={image} alt={`${actualite.titre} - photo ${index + 1}`} loading="lazy" className="w-full h-64 object-cover rounded-2xl shadow-md" />
                        ))}
                    </div>
                )}

                {programme && (
                    <Link to={`/programmes/${programme.slug}`} className="mt-12 flex items-center justify-between gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="text-gray-800">Programme : <strong>{programme.titre}</strong></span>
                        <ArrowRight className="text-motora-orange flex-shrink-0" size={24} />
                    </Link>
                )}
            </div>
        </article>
    );
}
