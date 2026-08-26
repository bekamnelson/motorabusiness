import React from 'react';
import {
    Target, Rocket, Briefcase, FileText,
    Compass, CheckCircle2, Monitor,
    PenTool, Lightbulb, Phone, Mail, MapPin
} from 'lucide-react';

export default function Objectifs() {
    const darkOrangeBg = "bg-[#E65C00]";
    const darkOrangeText = "text-[#E65C00]";

    return (
        <div className="animate-fade-in font-sans bg-gray-50 overflow-hidden">

            {/* 1. HERO SECTION (En-tête) */}
            <section className={`${darkOrangeBg} pt-24 pb-16 md:pt-32 md:pb-24 relative`}>
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                        Nos Objectifs & Services
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto font-light leading-relaxed px-2">
                        "Ton projet, ton succès – l'école comme tremplin." <br className="hidden sm:block" />
                        Découvrez comment Motora Business vous accompagne vers l'excellence.
                    </p>
                </div>
            </section>

            {/* 2. VISION BOOST CAREER (Le programme phare) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Colonne Gauche : Mission */}
                        <div className="w-full lg:w-1/2">
                            <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-2 md:mb-4 text-sm md:text-xl`}>
                                Programme Phare
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Vision Boost Career
                            </h3>
                            <div className="inline-block bg-orange-100 text-[#E65C00] font-bold px-4 py-2 md:px-6 md:py-2 rounded-full mb-8 text-sm md:text-lg">
                                Pour les jeunes de 9 à 30 ans
                            </div>

                            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border-l-4 md:border-l-8 border-[#E65C00] shadow-sm">
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                    <Target className={darkOrangeText} size={24} /> Notre Mission
                                </h4>
                                <p className="text-base md:text-xl text-gray-700 leading-relaxed italic">
                                    "Accompagner des jeunes capables de transformer leur vision personnelle en métier, expertise, opportunité économique et impact communautaire durable."
                                </p>
                            </div>
                        </div>

                        {/* Colonne Droite : Activités */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100">
                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
                                    <Compass className={darkOrangeText} size={28} /> Nos Activités
                                </h4>
                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        "L'orientation professionnelle",
                                        "Le leadership",
                                        "L'entrepreneuriat jeune",
                                        "L'employabilité",
                                        "Excursion / voyage"
                                    ].map((activite, index) => (
                                        <div key={index} className="flex gap-3 md:gap-4 items-center p-3 md:p-4 hover:bg-orange-50 rounded-xl transition-colors">
                                            <div className={`${darkOrangeBg} text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0`}>
                                                {index + 1}
                                            </div>
                                            <p className="text-lg md:text-2xl text-gray-800 font-medium">{activite}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. L'INCUBATEUR & PROGRAMMES */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-2 md:mb-4 text-sm md:text-xl`}>
                            L'incubateur des jeunes
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Nos Programmes & Services
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Carte 1 : Programmes */}
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#E65C00]">
                            <Lightbulb className={`${darkOrangeText} mx-auto mb-4 md:mb-6`} size={48} />
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Nos Programmes</h4>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Vision_Boost Career
                                </li>
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Café entrepreneurial
                                </li>
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Youth_Impact_challenge
                                </li>
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Motora_Business_School
                                </li>
                            </ul>
                        </div>

                        {/* Carte 2 : Services */}
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#E65C00]">
                            <Monitor className={`${darkOrangeText} mx-auto mb-4 md:mb-6`} size={48} />
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Nos Services</h4>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Digitalisation et Entreprises
                                </li>
                                <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                    <CheckCircle2 className={`${darkOrangeText} flex-shrink-0 mt-1`} size={20} /> Incubateur d'idée d'entreprise
                                </li>
                            </ul>
                        </div>

                        {/* Carte 3 : CTA */}
                        <div className={`${darkOrangeBg} p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg text-white flex flex-col justify-center items-center text-center`}>
                            <Rocket className="mx-auto mb-4 md:mb-6 text-white" size={48} />
                            <h4 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Prêt à vous lancer ?</h4>
                            <p className="text-base md:text-lg text-orange-100 mb-6 md:mb-8">Rejoignez notre incubateur et donnez vie à vos idées.</p>
                            <a href="#contact" className="bg-white text-[#E65C00] px-6 py-3 md:px-8 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                                Nous rejoindre
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICES PROFESSIONNELS (Montage & Rédaction) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className={`${darkOrangeText} font-black tracking-widest uppercase mb-2 md:mb-4 text-sm md:text-xl`}>
                            Expertise
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Services aux Professionnels
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Montage de projets */}
                        <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                                <div className={`${darkOrangeBg} p-3 md:p-4 rounded-xl md:rounded-2xl text-white flex-shrink-0`}>
                                    <Briefcase size={28} className="md:w-8 md:h-8" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">Montage de Projets</h4>
                            </div>
                            <div className="space-y-4 md:space-y-5">
                                {[
                                    "Business model",
                                    "Propositions de partenariat",
                                    "Dossiers de financement pour micro entreprise",
                                    "Plans stratégiques"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 md:gap-4">
                                        <CheckCircle2 className={`${darkOrangeText} mt-1 flex-shrink-0`} size={20} />
                                        <span className="text-base md:text-xl text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rédaction Professionnelle */}
                        <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                                <div className={`${darkOrangeBg} p-3 md:p-4 rounded-xl md:rounded-2xl text-white flex-shrink-0`}>
                                    <PenTool size={28} className="md:w-8 md:h-8" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">Rédaction Professionnelle</h4>
                            </div>
                            <div className="space-y-4 md:space-y-5">
                                {[
                                    "CV",
                                    "Lettres de motivation",
                                    "Rapports",
                                    "Comptes rendus",
                                    "Notes conceptuelles"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 md:gap-4">
                                        <CheckCircle2 className={`${darkOrangeText} mt-1 flex-shrink-0`} size={20} />
                                        <span className="text-base md:text-xl text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}