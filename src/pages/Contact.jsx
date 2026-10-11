import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import contact, { construireMessage, lienEmail, lienWhatsApp, profils } from '../data/contact';
import programmes from '../data/programmes';
import services from '../data/services';
import PageHero from '../components/PageHero';

const AUTRES_SUJETS = ['Devenir partenaire', 'Parcours Vision Boost', 'Autre demande'];

function sujetInitial(searchParams) {
    const programme = programmes.find((p) => p.slug === searchParams.get('programme'));
    if (programme) return programme.titre;
    return searchParams.get('sujet') || '';
}

const champ = 'w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-motora-orange';

export default function Contact() {
    const [searchParams] = useSearchParams();
    const [form, setForm] = useState(() => ({
        nom: '',
        telephone: '',
        profil: '',
        sujet: sujetInitial(searchParams),
        message: '',
    }));

    const modifier = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const texte = construireMessage(form);

    const envoyerWhatsApp = (e) => {
        e.preventDefault();
        window.open(lienWhatsApp(texte), '_blank', 'noopener');
    };

    // Un sujet venu de l'URL qui ne figure pas dans la liste reste sélectionnable
    const sujetsConnus = [...programmes.map((p) => p.titre), ...services.map((s) => s.titre), ...AUTRES_SUJETS];
    const sujetHorsListe = form.sujet && !sujetsConnus.includes(form.sujet) ? form.sujet : null;

    return (
        <div className="bg-slate-50 min-h-screen animate-fade-in">
            <PageHero
                eyebrow="Parlons-en"
                titre="Contactez-nous"
                sousTitre="Une question, une inscription, un partenariat ? Écrivez-nous, nous vous répondons rapidement."
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="grid lg:grid-cols-5 gap-8">

                    {/* Coordonnées */}
                    <div className="lg:col-span-2 space-y-4">
                        <a href={lienWhatsApp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-6 shadow-lg hover:brightness-95 transition">
                            <MessageCircle size={32} className="flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg">Écrire sur WhatsApp</p>
                                <p className="text-white/90">{contact.telephones[0]}</p>
                            </div>
                        </a>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
                            <p className="flex items-start gap-3 text-gray-700">
                                <Phone className="text-motora-orange flex-shrink-0 mt-0.5" size={22} />
                                <span>{contact.telephones.map((tel) => (
                                    <a key={tel} href={`tel:${tel.replace(/[^\d+]/g, '')}`} className="block hover:text-motora-orange">{tel}</a>
                                ))}</span>
                            </p>
                            <p className="flex items-center gap-3 text-gray-700">
                                <Mail className="text-motora-orange flex-shrink-0" size={22} />
                                <a href={`mailto:${contact.email}`} className="hover:text-motora-orange break-all">{contact.email}</a>
                            </p>
                            <p className="flex items-start gap-3 text-gray-700">
                                <MapPin className="text-motora-orange flex-shrink-0 mt-0.5" size={22} />
                                <span>{contact.adresse}<br />{contact.villes}</span>
                            </p>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={envoyerWhatsApp} className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <label className="block">
                                <span className="block font-semibold text-gray-800 mb-2">Nom complet *</span>
                                <input name="nom" required value={form.nom} onChange={modifier} className={champ} />
                            </label>
                            <label className="block">
                                <span className="block font-semibold text-gray-800 mb-2">Téléphone</span>
                                <input name="telephone" type="tel" value={form.telephone} onChange={modifier} className={champ} />
                            </label>
                        </div>
                        <label className="block">
                            <span className="block font-semibold text-gray-800 mb-2">Vous êtes</span>
                            <select name="profil" value={form.profil} onChange={modifier} className={champ}>
                                <option value="">Choisir…</option>
                                {profils.map((profil) => <option key={profil}>{profil}</option>)}
                            </select>
                        </label>
                        <label className="block">
                            <span className="block font-semibold text-gray-800 mb-2">Sujet</span>
                            <select name="sujet" value={form.sujet} onChange={modifier} className={champ}>
                                <option value="">Choisir…</option>
                                {sujetHorsListe && <option>{sujetHorsListe}</option>}
                                <optgroup label="Programmes">
                                    {programmes.map((p) => <option key={p.slug}>{p.titre}</option>)}
                                </optgroup>
                                <optgroup label="Services">
                                    {services.map((s) => <option key={s.titre}>{s.titre}</option>)}
                                </optgroup>
                                <optgroup label="Autre">
                                    {AUTRES_SUJETS.map((s) => <option key={s}>{s}</option>)}
                                </optgroup>
                            </select>
                        </label>
                        <label className="block">
                            <span className="block font-semibold text-gray-800 mb-2">Message *</span>
                            <textarea name="message" required rows={5} value={form.message} onChange={modifier} className={champ} />
                        </label>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-95 transition">
                                <MessageCircle size={22} /> Envoyer sur WhatsApp
                            </button>
                            <a
                                href={lienEmail(form.sujet || 'Demande de contact', texte)}
                                className="inline-flex items-center justify-center gap-2 border-2 border-motora-orange text-motora-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors"
                            >
                                <Send size={20} /> Envoyer par email
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
