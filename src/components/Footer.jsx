import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import contact, { lienWhatsApp } from '../data/contact';
import liens from '../data/navigation';

export default function Footer() {
    return (
        <footer id="contact" className="bg-motora-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    <div>
                        <div className="text-2xl font-black tracking-tighter mb-4">
                            <span className="text-motora-blue">MOTORA</span> <span className="text-motora-orange">BUSINESS</span>
                        </div>
                        <p className="text-gray-400">
                            Always with you, Never without you. <br />
                            Un pont entre l'école et le marché économique.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {[...liens, { to: '/contact', label: 'Contact' }].map((lien) => (
                                <li key={lien.to}>
                                    <Link to={lien.to} className="text-gray-400 hover:text-motora-orange transition-colors">{lien.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-motora-orange flex-shrink-0 mt-0.5" size={20} />
                                <span>{contact.adresse}<br />{contact.villes}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-motora-orange flex-shrink-0 mt-0.5" size={20} />
                                <span>{contact.telephones.map((tel) => (
                                    <a key={tel} href={`tel:${tel.replace(/[^\d+]/g, '')}`} className="block hover:text-white">{tel}</a>
                                ))}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-motora-orange flex-shrink-0" size={20} />
                                <a href={`mailto:${contact.email}`} className="hover:text-white break-all">{contact.email}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Proposition de Collaboration</h3>
                        <p className="text-gray-400 mb-6">
                            Nous recherchons des établissements partenaires (lycées, collèges, centres de formation) ainsi que des bailleurs et soutiens institutionnels.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/partenariat" className="inline-block border border-motora-orange text-motora-orange hover:bg-motora-orange hover:text-white px-5 py-2 rounded-full transition-colors font-medium">
                                Devenir Partenaire
                            </Link>
                            <a href={lienWhatsApp()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-medium hover:brightness-95 transition">
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Motora Business. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
