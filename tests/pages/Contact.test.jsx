import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../../src/pages/Contact';
import contact from '../../src/data/contact';

function afficher(chemin = '/contact') {
    return render(
        <MemoryRouter initialEntries={[chemin]}>
            <Contact />
        </MemoryRouter>
    );
}

describe('page Contact', () => {
    beforeEach(() => {
        window.open = jest.fn();
    });

    it('affiche les coordonnées', () => {
        afficher();
        expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute('href', `mailto:${contact.email}`);
        contact.telephones.forEach((tel) => expect(screen.getByRole('link', { name: tel })).toBeInTheDocument());
    });

    it('préremplit le sujet depuis la page d\'un programme', () => {
        afficher('/contact?programme=rise-up');
        expect(screen.getByRole('combobox', { name: 'Sujet' })).toHaveValue('Programme Rise Up');
    });

    it('préremplit le sujet depuis la page Services', () => {
        afficher('/contact?sujet=Montage%20de%20projets');
        expect(screen.getByRole('combobox', { name: 'Sujet' })).toHaveValue('Montage de projets');
    });

    it('accepte un sujet absent de la liste', () => {
        afficher('/contact?sujet=Visite%20de%20classe');
        expect(screen.getByRole('combobox', { name: 'Sujet' })).toHaveValue('Visite de classe');
    });

    it("n'envoie rien tant que les champs obligatoires sont vides", async () => {
        const user = userEvent.setup();
        afficher();
        await user.click(screen.getByRole('button', { name: /Envoyer sur WhatsApp/ }));
        expect(window.open).not.toHaveBeenCalled();
    });

    it('ouvre WhatsApp avec le message du formulaire', async () => {
        const user = userEvent.setup();
        afficher('/contact?programme=cafe-entrepreneurial');

        await user.type(screen.getByRole('textbox', { name: 'Nom complet *' }), 'Awa');
        await user.selectOptions(screen.getByRole('combobox', { name: 'Vous êtes' }), 'Parent');
        await user.type(screen.getByRole('textbox', { name: 'Message *' }), 'Quand a lieu le prochain café ?');
        await user.click(screen.getByRole('button', { name: /Envoyer sur WhatsApp/ }));

        expect(window.open).toHaveBeenCalledTimes(1);
        const url = new URL(window.open.mock.calls[0][0]);
        expect(url.origin + url.pathname).toBe(`https://wa.me/${contact.whatsapp}`);
        const texte = url.searchParams.get('text');
        expect(texte).toContain("je m'appelle Awa");
        expect(texte).toContain('Je suis : Parent.');
        expect(texte).toContain('au sujet de : Café Entrepreneurial.');
        expect(texte).toContain('Quand a lieu le prochain café ?');
    });

    it('propose aussi l\'envoi par email avec le même message', async () => {
        const user = userEvent.setup();
        afficher('/contact?programme=rise-up');
        await user.type(screen.getByRole('textbox', { name: 'Nom complet *' }), 'Awa');

        const lien = screen.getByRole('link', { name: /Envoyer par email/ });
        expect(lien.getAttribute('href')).toMatch(`mailto:${contact.email}?subject=Programme%20Rise%20Up`);
        expect(decodeURIComponent(lien.getAttribute('href'))).toContain("je m'appelle Awa");
    });
});
