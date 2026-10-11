// Coordonnées de Motora Business, utilisées dans tout le site
const contact = {
    email: 'motorabusiness@gmail.com',
    telephones: ['(+237) 656 75 98 79', '(+237) 671 02 44 58'],
    // Numéro WhatsApp au format international, sans espace ni « + »
    whatsapp: '237656759879',
    adresse: 'Bafoussam, place de fête',
    villes: 'Bafoussam - Douala - Cameroun',
};

export const profils = [
    'Jeune / élève / étudiant',
    'Parent',
    'Établissement scolaire ou centre de formation',
    'Artisan ou micro-entrepreneur',
    'Partenaire, bailleur ou institution',
    'Autre',
];

// Construit le message envoyé depuis le formulaire de contact
export function construireMessage({ nom, telephone, profil, sujet, message }) {
    return [
        `Bonjour Motora Business, je m'appelle ${nom.trim()}.`,
        profil && `Je suis : ${profil}.`,
        sujet && `Je vous contacte au sujet de : ${sujet}.`,
        message.trim(),
        telephone.trim() && `Mon numéro : ${telephone.trim()}`,
    ]
        .filter(Boolean)
        .join('\n\n');
}

export function lienWhatsApp(texte = '') {
    const base = `https://wa.me/${contact.whatsapp}`;
    return texte ? `${base}?text=${encodeURIComponent(texte)}` : base;
}

export function lienEmail(sujet, texte) {
    return `mailto:${contact.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(texte)}`;
}

export default contact;
