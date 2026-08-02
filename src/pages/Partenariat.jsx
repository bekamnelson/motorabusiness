import { Handshake, Building, Users, Calendar, Monitor, BookOpen, TrendingUp } from 'lucide-react';

export default function Partenariat() {
    return (
        <div className="py-16 bg-white animate-fade-in">
            {/* En-tête de la page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Devenir Partenaire</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Sur une décennie, Motora Business School ambitionne de former <span className="font-bold text-motora-blue">10 000 jeunes</span>,
                    d’incuber <span className="font-bold text-motora-orange">1 000 projets</span> entrepreneuriaux, et de consolider un réseau national de 50 partenariats institutionnels.
                </p>
            </div>

            {/* Modèle économique et Ressources */}
            <section className="bg-motora-light py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Modèle Économique</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Notre modèle est simple et souple : nous travaillons bénévolement, en collaboration avec les institutions, les parents et les jeunes eux-mêmes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-motora-blue">
                            <Users className="text-motora-blue mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Humaines</h3>
                            <p className="text-gray-600 text-sm">Formateurs, mentors et coordinateurs pédagogiques (actuellement bénévoles).</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-motora-orange">
                            <TrendingUp className="text-motora-orange mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Financières</h3>
                            <p className="text-gray-600 text-sm">Recherche progressive de sponsors. Le modèle repose sur l'implication des partenaires et des parents.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-motora-blue">
                            <Monitor className="text-motora-blue mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Matérielles</h3>
                            <p className="text-gray-600 text-sm">Salles de classe, outils numériques et kits pédagogiques fournis en partie par les établissements.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-motora-orange">
                            <Building className="text-motora-orange mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-2">Institutionnelles</h3>
                            <p className="text-gray-600 text-sm">Partenariats avec lycées, universités, ONG et entreprises locales pour garantir la pérennité.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logistique pour les établissements */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Logistique du Programme</h2>
                            <p className="text-gray-600 mb-8">
                                Nous recherchons des établissements partenaires (lycées, collèges, centres de formation) prêts à intégrer le programme dans leurs activités parascolaires ou clubs.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-motora-blue h-fit">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fréquence & Format</h4>
                                        <p className="text-gray-600 text-sm">1 atelier par semaine pendant 5 semaines. Durée : 4 heures par séance. Maximum 50 jeunes par atelier.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-orange-100 p-3 rounded-lg text-motora-orange h-fit">
                                        <Building size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Infrastructure requise</h4>
                                        <p className="text-gray-600 text-sm">Salle équipée et électrifiée (places assises, vidéoprojecteur, tableau blanc, prises électriques, aération).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-motora-blue h-fit">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Matériel pédagogique</h4>
                                        <p className="text-gray-600 text-sm">Livret d'accompagnement, feuilles, stylos pour les participants. Table pour les animateurs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-1/2 bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
                            <Handshake size={48} className="text-motora-orange mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Proposition de Collaboration</h3>
                            <p className="text-gray-300 mb-8">
                                Que vous soyez un établissement scolaire souhaitant offrir cette opportunité à vos élèves, ou un bailleur/sponsor institutionnel (ex: MINPMEESA) désirant soutenir l'entrepreneuriat jeune au Cameroun, rejoignez-nous.
                            </p>
                            <a
                                href="mailto:motorabusiness@gmail.com"
                                className="block w-full text-center bg-motora-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-colors"
                            >
                                Contactez-nous pour collaborer
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}