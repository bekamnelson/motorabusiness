import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Lightbulb, MapPin, Rocket, Target, Users, Wrench, Sprout } from 'lucide-react';
import imageGroupe from '../assets/back1.jpeg';
import imageAtelier from '../assets/programmes/cfp-1.jpeg';
import contact from '../data/contact';
import PageHero from '../components/PageHero';
import equipe from '../data/equipe';

const mission = [
    { verbe: 'Soutenir', texte: 'les jeunes dans la concrétisation de leurs idées en projets viables.', icon: Lightbulb },
    { verbe: 'Accompagner', texte: 'les jeunes dans la structuration et le développement de leurs initiatives.', icon: Users },
    { verbe: 'Fournir', texte: 'les ressources adaptées pour renforcer leurs compétences et aptitudes entrepreneuriales.', icon: Wrench },
    { verbe: 'Créer', texte: "un cadre dynamique et collaboratif propice à l'apprentissage et à la croissance.", icon: Sprout },
];

const demarche = [
    {
        etape: 'Pré-incubation',
        texte: "Nous vous accompagnons à la réalisation de votre dossier projet jusqu'à son prototypage.",
        details: ['Formation', 'Sensibilisation', 'Mise en équipe', 'Mentorat'],
    },
    {
        etape: 'Incubation',
        texte: "Nous vous accompagnons à l'implémentation de votre projet en suivant un dossier technique, accompagné par des experts et soutenu par un réseau de jeunes entrepreneurs expérimentés.",
        details: ['Accès au prototypage', 'Recherche de financements', 'Formation', 'Compétition', 'Coaching', 'Mise en réseau', 'Accompagnement'],
    },
];

export default function QuiSommesNous() {
    return (
        <div className="animate-fade-in">

            <PageHero
                eyebrow="Motora Business"
                titre="Qui sommes-nous ?"
                sousTitre="Un incubateur des jeunes basé au Cameroun : un pont entre l'école et le marché économique. « Always with you, Never without you »"
                image={imageGroupe}
            />

            {/* Mission */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-motora-orange font-black tracking-widest uppercase mb-3 text-sm md:text-lg flex items-center justify-center gap-2">
                            <Target size={20} /> Notre mission
                        </h2>
                        <p className="text-3xl md:text-5xl font-bold text-motora-navy">Ce que nous faisons pour les jeunes</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mission.map(({ verbe, texte, icon: Icon }) => (
                            <div key={verbe} className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
                                <div className="w-12 h-12 bg-motora-orange rounded-xl flex items-center justify-center text-white mb-5">
                                    <Icon size={24} />
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong className="text-motora-navy">{verbe}</strong> {texte}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-16 md:py-24 bg-motora-orange text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-orange-200 font-black tracking-widest uppercase mb-6 text-sm md:text-lg flex items-center justify-center gap-2">
                        <Eye size={20} /> Notre vision
                    </h2>
                    <p className="text-2xl md:text-4xl font-bold leading-snug">
                        « Nous façonnons une génération d'entrepreneurs passionnés, audacieux, innovants et dynamiques, qui proposent des solutions durables pour développer leurs communautés et élever celles-ci au sommet mondial. »
                    </p>
                </div>
            </section>

            {/* Démarche */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-motora-orange font-black tracking-widest uppercase mb-3 text-sm md:text-lg flex items-center gap-2">
                            <Rocket size={20} /> Notre démarche
                        </h2>
                        <p className="text-3xl md:text-4xl font-bold text-motora-navy mb-10">De l'idée au projet concret</p>
                        <div className="space-y-6">
                            {demarche.map((etape, index) => (
                                <div key={etape.etape} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-motora-navy mb-3">
                                        <span className="text-motora-orange">{index + 1}.</span> {etape.etape}
                                    </h3>
                                    <p className="text-gray-700 text-base md:text-lg mb-4">{etape.texte}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {etape.details.map((detail) => (
                                            <span key={detail} className="bg-orange-50 text-motora-orange text-sm font-semibold px-3 py-1 rounded-full">{detail}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={imageAtelier} alt="Atelier d'accompagnement Motora Business" className="rounded-3xl shadow-2xl w-full h-72 md:h-[32rem] object-cover" />
                </div>
            </section>

            {/* Équipe (affichée seulement si renseignée dans src/data/equipe.js) */}
            {equipe.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-motora-navy text-center mb-12">Notre équipe</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {equipe.map((membre) => (
                                <div key={membre.nom} className="text-center">
                                    <img src={membre.photo} alt={membre.nom} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-4 shadow-lg" />
                                    <p className="text-lg font-bold text-motora-navy">{membre.nom}</p>
                                    <p className="text-motora-orange font-semibold text-sm">{membre.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Où nous trouver + appel à l'action */}
            <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-motora-navy mb-3">Où nous trouver</h2>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-lg text-gray-700">
                            <MapPin className="text-motora-orange" size={22} /> {contact.adresse} · {contact.villes}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/programmes" className="inline-flex items-center justify-center gap-2 bg-motora-orange text-white px-8 py-4 rounded-full font-bold hover:bg-motora-orange-dark transition-colors">
                            Nos programmes <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center border-2 border-motora-orange text-motora-orange px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-colors">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
