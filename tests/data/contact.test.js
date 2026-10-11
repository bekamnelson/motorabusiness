import contact, { construireMessage, lienEmail, lienWhatsApp } from '../../src/data/contact';

describe('données de contact', () => {
    it('a un numéro WhatsApp au format international', () => {
        expect(contact.whatsapp).toMatch(/^237\d{9}$/);
    });

    it('le numéro WhatsApp correspond au premier numéro affiché', () => {
        expect(contact.telephones[0].replace(/\D/g, '')).toBe(contact.whatsapp);
    });
});

describe('construireMessage', () => {
    it('assemble toutes les informations du formulaire', () => {
        const texte = construireMessage({
            nom: '  Awa  ',
            telephone: '699 00 00 00',
            profil: 'Parent',
            sujet: 'Café Entrepreneurial',
            message: 'Mon fils peut-il participer ?',
        });
        expect(texte).toBe(
            "Bonjour Motora Business, je m'appelle Awa.\n\n" +
            'Je suis : Parent.\n\n' +
            'Je vous contacte au sujet de : Café Entrepreneurial.\n\n' +
            'Mon fils peut-il participer ?\n\n' +
            'Mon numéro : 699 00 00 00'
        );
    });

    it('ignore les champs facultatifs vides', () => {
        const texte = construireMessage({ nom: 'Awa', telephone: ' ', profil: '', sujet: '', message: 'Bonjour' });
        expect(texte).toBe("Bonjour Motora Business, je m'appelle Awa.\n\nBonjour");
    });
});

describe('liens de contact', () => {
    it('encode le message dans le lien WhatsApp', () => {
        expect(lienWhatsApp('Salut & merci')).toBe(`https://wa.me/${contact.whatsapp}?text=Salut%20%26%20merci`);
        expect(lienWhatsApp()).toBe(`https://wa.me/${contact.whatsapp}`);
    });

    it("encode le sujet et le texte dans le lien email", () => {
        expect(lienEmail('Rise Up', 'a b')).toBe(`mailto:${contact.email}?subject=Rise%20Up&body=a%20b`);
    });
});
