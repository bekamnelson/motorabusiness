import {
    ArrowRight, Target, Lightbulb, Briefcase,
    AlertCircle, TrendingDown, GraduationCap,
    CheckCircle2, Users, Rocket, Globe, BookOpen,
    Map
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const darkOrangeBg = "bg-[#E65C00]";
    const darkOrangeText = "text-[#E65C00]";

    return (
        <div className="animate-fade-in font-sans">

            {/* 1. HERO SECTION (Image en arrière-plan avec texte par-dessus) */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                {/* Image de fond (Vous pouvez changer l'URL par une photo de vos étudiants si vous en avez) */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed" // Effet parallaxe léger
                    }}
                ></div>

                {/* Filtre sombre pour rendre le texte lisible */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Contenu du Hero */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                        Un pont entre l'école <br className="hidden md:block" />
                        et le marché économique
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                        Nous accompagnons la jeunesse camerounaise et africaine dans la découverte de sa vocation professionnelle.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/programmes" className="bg-[#E65C00] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#cc5200] transition-all shadow-xl flex items-center justify-center gap-3">
                            Découvrir nos programmes <ArrowRight size={24} />
                        </Link>
                        <Link to="/partenariat" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center">
                            Devenir Partenaire
                        </Link>
                    </div>
                </div>

                {/* Indicateur de scroll */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white z-20 opacity-80">
                    <ArrowRight size={32} className="rotate-90" />
                </div>
            </section>

            {/* 2. LE CONSTAT */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-4 text-xl`}>Le Contexte</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Une urgence pour notre jeunesse</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto text-2xl leading-relaxed">
                            Entre opportunités multiples et distractions permanentes, de nombreux jeunes peinent à trouver leur cap. Au Cameroun, ce défi prend une dimension alarmante.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
                            <TrendingDown className={`${darkOrangeText} mx-auto mb-6`} size={64} />
                            <div className="text-7xl font-black text-gray-900 mb-4">60%</div>
                            <p className="text-gray-600 text-lg">Des jeunes sont sans emploi ou sous-employés (BAD).</p>
                        </div>
                        <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
                            <Users className={`${darkOrangeText} mx-auto mb-6`} size={64} />
                            <div className="text-7xl font-black text-gray-900 mb-4">300k</div>
                            <p className="text-gray-600 text-lg">Jeunes Camerounais arrivent sur le marché du travail chaque année.</p>
                        </div>
                        <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
                            <AlertCircle className={`${darkOrangeText} mx-auto mb-6`} size={64} />
                            <div className="text-7xl font-black text-gray-900 mb-4">10%</div>
                            <p className="text-gray-600 text-lg">Seulement trouvent un emploi formel. La majorité se réfugie dans l'informel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LE PARADOXE */}
            <section className={`${darkOrangeBg} py-32 text-white`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                        "Les salles de classe regorgent de talents, et pourtant ces talents restent trop souvent en friche."
                    </h3>
                    <p className="text-2xl text-orange-100 font-light leading-relaxed">
                        Les jeunes sortent des lycées et des universités armés de diplômes, mais désarmés face aux réalités du marché. L'entrepreneuriat et l'orientation sont abordés en surface, sans profondeur ni continuité.
                    </p>
                </div>
            </section>

            {/* 4. NOTRE APPROCHE */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-4 text-xl`}>Notre Solution</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Une réponse pragmatique</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto text-2xl leading-relaxed">
                            Motora Business School s'inscrit dans la continuité des politiques gouvernementales, mais ose aller plus loin en aidant chaque jeune à :
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-12">
                            <div className={`${darkOrangeBg} p-8 rounded-full text-white flex-shrink-0 shadow-xl`}>
                                <Target size={48} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold mb-4 text-gray-900">Clarifier sa vision</h4>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Accompagner les jeunes à la découverte de leurs passions et domaines professionnels, en les guidant vers une meilleure connaissance de leurs talents personnels et professionnels.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-12">
                            <div className={`${darkOrangeBg} p-8 rounded-full text-white flex-shrink-0 shadow-xl`}>
                                <Map size={48} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold mb-4 text-gray-900">Aligner ses talents</h4>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Relier leurs rêves à des filières concrètes et à des métiers porteurs, en tenant compte des réalités économiques locales et globales pour un avenir sécurisé.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-12">
                            <div className={`${darkOrangeBg} p-8 rounded-full text-white flex-shrink-0 shadow-xl`}>
                                <Briefcase size={48} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold mb-4 text-gray-900">Transformer ses idées</h4>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Élaborer un projet professionnel clair et un plan de carrière personnalisé. Développer la capacité à négocier, s'adapter et saisir les opportunités.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OBJECTIFS SPÉCIFIQUES */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className={`absolute -inset-4 ${darkOrangeBg} rounded-3xl transform rotate-3 opacity-20`}></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Jeunes étudiants"
                                    className="relative rounded-3xl shadow-2xl object-cover h-[700px] w-full"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-4 text-xl`}>Le Programme</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                                Devenir des acteurs dynamiques et résilients
                            </h3>
                            <div className="space-y-10">
                                {[
                                    "Découverte des passions et domaines professionnels.",
                                    "Connexion avec des filières concrètes et métiers porteurs.",
                                    "Élaboration d'un plan de carrière personnalisé (feuille de route).",
                                    "Développement des capacités de négociation et d'adaptation."
                                ].map((objectif, index) => (
                                    <div key={index} className="flex gap-6 items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <CheckCircle2 className={darkOrangeText} size={36} />
                                        </div>
                                        <p className="text-2xl text-gray-700 leading-relaxed">{objectif}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16">
                                <Link to="/programmes" className={`inline-flex items-center gap-3 ${darkOrangeText} font-bold text-2xl hover:text-gray-900 transition-colors border-b-4 border-[#E65C00] pb-2`}>
                                    Explorer nos modules de formation <ArrowRight size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. VISION & IMPACT */}
            <section className={`${darkOrangeBg} py-32 text-white`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-orange-200 font-black tracking-widest uppercase mb-4 text-xl">Notre Vision sur 10 ans</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-24">L'impact attendu au Cameroun</h3>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-8 border border-orange-400/30 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <GraduationCap className="text-white mx-auto mb-8" size={80} />
                            <div className="text-7xl font-black mb-6">10 000</div>
                            <p className="text-2xl text-orange-100 font-medium">Jeunes formés et orientés</p>
                        </div>
                        <div className="p-8 border border-orange-400/30 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <Rocket className="text-white mx-auto mb-8" size={80} />
                            <div className="text-7xl font-black mb-6">1 000</div>
                            <p className="text-2xl text-orange-100 font-medium">Projets entrepreneuriaux incubés</p>
                        </div>
                        <div className="p-8 border border-orange-400/30 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <Globe className="text-white mx-auto mb-8" size={80} />
                            <div className="text-7xl font-black mb-6">50</div>
                            <p className="text-2xl text-orange-100 font-medium">Partenariats institutionnels consolidés</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SLOGAN & PHILOSOPHIE */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <BookOpen className={`${darkOrangeText} mx-auto mb-10`} size={64} />
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 italic">
                        "Always with you, <br />
                        <span className={darkOrangeText}>Never without you"</span>
                    </h2>
                    <p className="text-2xl text-gray-600">
                        Plus qu'une école, nous sommes un mouvement pour l'avenir de la jeunesse africaine.
                    </p>
                </div>
            </section>

            {/* 8. CALL TO ACTION FINAL */}
            <section className={`${darkOrangeBg} py-32`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
                        Prêt à transformer l'avenir de la jeunesse ?
                    </h2>
                    <p className="text-2xl text-orange-100 mb-16 font-light">
                        Que vous soyez un jeune en quête de repères, un parent, un établissement scolaire ou un partenaire institutionnel, rejoignez l'aventure.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#contact" className="bg-white text-[#E65C00] px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-all shadow-2xl">
                            Nous Contacter
                        </a>
                        <Link to="/partenariat" className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-white hover:text-[#E65C00] transition-all">
                            Devenir Partenaire
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}