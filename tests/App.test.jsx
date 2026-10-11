import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

function ouvrir(chemin) {
    window.history.pushState({}, '', chemin);
    return render(<App />);
}

describe("routes de l'application", () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    it("affiche la page détail d'un programme", () => {
        ouvrir('/programmes/rise-up');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Programme Rise Up');
    });

    it('garde la page dédiée Vision Boost', () => {
        ouvrir('/programmes/vision-boost');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vision Boost Program');
    });

    it("garde la page dédiée Initiation à l'entrepreneuriat", () => {
        ouvrir('/programmes/initiation-entrepreneuriat');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Initiation à l'Entrepreneuriat");
    });

    it.each([
        ['/qui-sommes-nous', 'Qui sommes-nous ?'],
        ['/programmes', 'Nos Programmes'],
        ['/services', 'Nos Services'],
        ['/actualites', 'Actualités'],
        ['/partenariat', 'Devenir Partenaire'],
        ['/contact', 'Contactez-nous'],
    ])('la page %s s\'affiche', (chemin, titre) => {
        ouvrir(chemin);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(titre);
    });

    it("redirige l'ancienne page /objectifs vers « Qui sommes-nous »", () => {
        ouvrir('/objectifs');
        expect(window.location.pathname).toBe('/qui-sommes-nous');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Qui sommes-nous ?');
    });

    it('affiche le bouton WhatsApp sur toutes les pages', () => {
        ouvrir('/services');
        expect(screen.getByRole('link', { name: 'Nous écrire sur WhatsApp' }).getAttribute('href')).toMatch(/^https:\/\/wa\.me\/237\d{9}\?text=/);
    });

    it('affiche une page 404 pour une adresse inconnue', () => {
        ouvrir('/cette-page-nexiste-pas');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page introuvable');
        expect(screen.getByRole('link', { name: /Retour à l'accueil/ })).toHaveAttribute('href', '/');
    });

    it('remonte en haut de la page en changeant de page', async () => {
        const user = userEvent.setup();
        ouvrir('/programmes');
        window.scrollTo.mockClear();

        await user.click(screen.getByRole('heading', { name: 'Café Entrepreneurial' }));

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Café Entrepreneurial');
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});
