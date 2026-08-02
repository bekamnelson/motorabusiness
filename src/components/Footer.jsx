import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="text-2xl font-black tracking-tighter mb-4">
                            <span className="text-motora-blue">MOTORA</span> <span className="text-motora-orange">BUSINESS</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Always with you, Never without you. <br />
                            Un pont entre l'école et le marché économique.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Contactez-nous</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="text-motora-orange" size={20} />
                                Bafoussam - Douala - Cameroun
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-motora-orange" size={20} />
                                (+237) 656 759 879 / 671 024 458
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-motora-orange" size={20} />
                                motorabusiness@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Proposition de Collaboration</h3>
                        <p className="text-gray-400 mb-4">
                            Nous recherchons des établissements partenaires (lycées, collèges, centres de formation) ainsi que des bailleurs et soutiens institutionnels.
                        </p>
                        <a href="mailto:motorabusiness@gmail.com" className="inline-block border border-motora-blue text-motora-blue hover:bg-motora-blue hover:text-white px-6 py-2 rounded-full transition-colors font-medium">
                            Devenir Partenaire
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Motora Business School. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}