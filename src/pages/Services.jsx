import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import services from '../data/services';
import PageHero from '../components/PageHero';
import imageHero from '../assets/programmes/cfp-2.jpeg';

export default function Services() {
    return (
        <div className="bg-slate-50 min-h-screen animate-fade-in">
            <PageHero
                eyebrow="Expertise"
                titre="Nos Services"
                sousTitre="Pour les particuliers, porteurs de projet et entreprises : nous vous aidons à structurer, rédiger et présenter vos projets."
                image={imageHero}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map(({ titre, icon: Icon, elements }) => (
                        <div key={titre} className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border-t-4 border-motora-orange flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-motora-orange p-3 md:p-4 rounded-2xl text-white flex-shrink-0">
                                    <Icon size={28} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-motora-navy">{titre}</h2>
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {elements.map((element) => (
                                    <li key={element} className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                        <CheckCircle2 className="text-motora-orange flex-shrink-0 mt-1" size={20} /> {element}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={`/contact?sujet=${encodeURIComponent(titre)}`}
                                className="inline-flex items-center gap-2 font-bold text-motora-orange hover:gap-4 transition-all"
                            >
                                Demander ce service <ArrowRight size={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
