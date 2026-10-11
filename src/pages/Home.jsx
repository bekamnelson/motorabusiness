import {
    ArrowRight, Target, Briefcase, AlertCircle, TrendingDown,
    GraduationCap, Users, Rocket, Globe, Map, Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import programmes from '../data/programmes';
import imageHero from '../assets/programmes/yic-4.jpeg';
import imageClasse from '../assets/programmes/mbs-2.jpeg';
import terrain1 from '../assets/programmes/mbs-1.jpeg';
import terrain2 from '../assets/programmes/yic-1.jpeg';
import terrain3 from '../assets/programmes/cfp-1.jpeg';
import terrain4 from '../assets/programmes/cafe-1.jpeg';
import terrain5 from '../assets/programmes/yic-3.jpeg';

const constats = [
    { chiffre: '60%', texte: 'des jeunes sont sans emploi ou sous-employés (BAD).', icon: TrendingDown },
    { chiffre: '300k', texte: 'jeunes Camerounais arrivent sur le marché du travail chaque année.', icon: Users },
    { chiffre: '10%', texte: "seulement trouvent un emploi formel. La majorité se réfugie dans l'informel.", icon: AlertCircle },
];

const approche = [
    {
        titre: 'Clarifier sa vision',
        texte: 'Découvrir ses passions et ses domaines professionnels, et mieux connaître ses talents personnels et professionnels.',
        icon: Target,
    },
    {
        titre: 'Aligner ses talents',
        texte: 'Relier ses rêves à des filières concrètes et à des métiers porteurs, en tenant compte des réalités économiques locales et globales.',
        icon: Map,
    },
    {
        titre: 'Transformer ses idées',
        texte: "Élaborer un projet professionnel clair et un plan de carrière personnalisé. Apprendre à négocier, s'adapter et saisir les opportunités.",
        icon: Briefcase,
    },
];

const objectifs = [
    { chiffre: '10 000', texte: 'jeunes formés et orientés', icon: GraduationCap },
    { chiffre: '1 000', texte: 'projets entrepreneuriaux incubés', icon: Rocket },
    { chiffre: '50', texte: 'partenariats institutionnels consolidés', icon: Globe },
];

export default function Home() {
    return (
        <div className="animate-fade-in">

            {/* 1. HERO */}
            <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-motora-navy">
                <img src={imageHero} alt="" className="absolute inset-0 w-full h-full object-cover lg:bg-fixed" />
                <div className="absolute inset-0 bg-gradient-to-r from-motora-navy via-motora-navy/80 to-motora-navy/20"></div>
                <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-motora-orange/25 blur-3xl"></div>

                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-orange-200 font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-white/15">
                            <span className="w-2 h-2 rounded-full bg-motora-orange"></span> Incubateur des jeunes · Cameroun
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] mb-6">
                            Un pont entre l'école et le <span className="text-motora-orange">marché économique</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
                            Nous accompagnons la jeunesse camerounaise et africaine dans la découverte de sa vocation professionnelle et la réalisation de ses projets.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/programmes" className="inline-flex items-center justify-center gap-2 bg-motora-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-motora-orange-dark transition-colors shadow-lg shadow-motora-orange/30">
                                Découvrir nos programmes <ArrowRight size={20} />
                            </Link>
                            <Link to="/partenariat" className="inline-flex items-center justify-center border-2 border-white/70 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-motora-navy transition-colors">
                                Devenir partenaire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LE CONTEXTE */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        eyebrow="Le contexte"
                        titre="Une urgence pour notre jeunesse"
                        texte="Entre opportunités multiples et distractions permanentes, de nombreux jeunes peinent à trouver leur cap. Au Cameroun, ce défi prend une dimension alarmante."
                    />
                    <div className="grid md:grid-cols-3 gap-6">
                        {constats.map(({ chiffre, texte, icon: Icon }) => (
                            <div key={chiffre} className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden">
                                <Icon className="absolute -right-4 -top-4 text-motora-orange/10" size={120} />
                                <p className="relative text-5xl md:text-6xl font-extrabold text-motora-orange mb-3">{chiffre}</p>
                                <p className="relative text-slate-700 text-lg leading-relaxed">{texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LE PARADOXE */}
            <section className="bg-motora-navy text-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch">
                    <div className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 flex flex-col justify-center">
                        <Quote className="text-motora-orange mb-6" size={48} />
                        <p className="text-2xl md:text-4xl font-bold leading-snug mb-8">
                            Les salles de classe regorgent de talents, et pourtant ces talents restent trop souvent en friche.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Les jeunes sortent des lycées et des universités armés de diplômes, mais désarmés face aux réalités du marché. L'entrepreneuriat et l'orientation sont abordés en surface, sans profondeur ni continuité.
                        </p>
                    </div>
                    <img src={imageClasse} alt="Élèves en classe lors d'un atelier Motora Business" className="w-full h-72 lg:h-full object-cover" />
                </div>
            </section>

            {/* 4. NOTRE APPROCHE */}
            <section className="py-20 md:py-28 bg-motora-orange-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        eyebrow="Notre solution"
                        titre="Une réponse pragmatique"
                        texte="Motora Business s'inscrit dans la continuité des politiques gouvernementales, mais ose aller plus loin en aidant chaque jeune à :"
                    />
                    <div className="grid md:grid-cols-3 gap-6">
                        {approche.map(({ titre, texte, icon: Icon }, index) => (
                            <div key={titre} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-motora-orange rounded-2xl flex items-center justify-center text-white shadow-lg shadow-motora-orange/30">
                                        <Icon size={28} />
                                    </div>
                                    <span className="text-5xl font-extrabold text-motora-orange/15">0{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-motora-navy mb-3">{titre}</h3>
                                <p className="text-slate-600 leading-relaxed">{texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. NOS PROGRAMMES */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div className="max-w-2xl">
                            <p className="text-motora-orange font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Nos programmes</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-motora-navy tracking-tight leading-tight">
                                Un accompagnement pour chaque profil
                            </h2>
                        </div>
                        <Link to="/programmes" className="inline-flex items-center gap-2 font-bold text-motora-orange hover:gap-4 transition-all flex-shrink-0">
                            Tous les programmes <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {programmes.map(({ slug, titre, resume, icon: Icon }) => (
                            <Link
                                key={slug}
                                to={`/programmes/${slug}`}
                                className="group flex gap-5 p-6 rounded-3xl border border-slate-200 hover:border-motora-orange hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-motora-orange-light text-motora-orange group-hover:bg-motora-orange group-hover:text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-motora-navy leading-snug mb-1">{titre}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{resume}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SUR LE TERRAIN */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        eyebrow="Sur le terrain"
                        titre="Avec les jeunes, dans les écoles et les centres"
                        texte="Ateliers en lycée, challenges, rencontres avec des entrepreneurs : nous allons à la rencontre des jeunes là où ils sont."
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[32rem]">
                        <img src={terrain1} alt="Atelier Motora Business School en lycée" loading="lazy" className="col-span-2 md:row-span-2 w-full h-56 md:h-full object-cover rounded-3xl" />
                        <img src={terrain2} alt="Remise de prix du Youth Impact Challenge" loading="lazy" className="w-full h-40 md:h-full object-cover rounded-3xl" />
                        <img src={terrain3} alt="Accompagnement des jeunes d'un centre de formation" loading="lazy" className="w-full h-40 md:h-full object-cover rounded-3xl" />
                        <img src={terrain4} alt="Café Entrepreneurial" loading="lazy" className="w-full h-40 md:h-full object-cover rounded-3xl" />
                        <img src={terrain5} alt="Participants du Youth Impact Challenge" loading="lazy" className="w-full h-40 md:h-full object-cover rounded-3xl" />
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/actualites" className="inline-flex items-center gap-2 font-bold text-motora-orange hover:gap-4 transition-all">
                            Suivre nos actualités <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. VISION & IMPACT */}
            <section className="relative py-20 md:py-28 bg-motora-orange text-white overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-white/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-orange-100 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Notre vision sur 10 ans</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-14">L'impact attendu au Cameroun</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {objectifs.map(({ chiffre, texte, icon: Icon }) => (
                            <div key={chiffre} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                                <Icon className="mx-auto mb-4 text-orange-100" size={40} />
                                <p className="text-5xl md:text-6xl font-extrabold mb-2">{chiffre}</p>
                                <p className="text-lg text-orange-50">{texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. APPEL À L'ACTION */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-motora-navy rounded-[2.5rem] px-6 py-14 md:px-16 md:py-20 text-center overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-motora-orange/30 blur-3xl"></div>
                        <p className="relative text-2xl md:text-3xl font-extrabold italic text-motora-orange mb-6">
                            « Always with you, Never without you »
                        </p>
                        <h2 className="relative text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Prêt à transformer l'avenir de la jeunesse ?
                        </h2>
                        <p className="relative text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                            Que vous soyez un jeune en quête de repères, un parent, un établissement scolaire ou un partenaire institutionnel, rejoignez l'aventure.
                        </p>
                        <div className="relative flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-motora-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-motora-orange-dark transition-colors">
                                Nous contacter <ArrowRight size={20} />
                            </Link>
                            <Link to="/partenariat" className="inline-flex items-center justify-center border-2 border-white/70 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-motora-navy transition-colors">
                                Devenir partenaire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
