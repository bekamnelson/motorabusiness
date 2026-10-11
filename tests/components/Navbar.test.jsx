import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

const pages = [
    ['Accueil', '/'],
    ['Qui sommes-nous', '/qui-sommes-nous'],
    ['Programmes', '/programmes'],
    ['Services', '/services'],
    ['Actualités', '/actualites'],
    ['Partenariat', '/partenariat'],
];

function afficher(chemin = '/') {
    return render(
        <MemoryRouter initialEntries={[chemin]}>
            <Navbar />
        </MemoryRouter>
    );
}

describe('barre de navigation', () => {
    it.each(pages)('le lien « %s » est présent dans les menus ordinateur et mobile', (label, href) => {
        afficher();
        const liens = screen.getAllByRole('link', { name: label, hidden: true });
        expect(liens).toHaveLength(2);
        liens.forEach((lien) => expect(lien).toHaveAttribute('href', href));
    });

    it('le bouton « Nous Contacter » mène à la page Contact', () => {
        afficher();
        screen.getAllByRole('link', { name: 'Nous Contacter', hidden: true }).forEach((lien) => {
            expect(lien).toHaveAttribute('href', '/contact');
        });
    });

    it('met en avant la rubrique en cours, y compris sur une sous-page', () => {
        afficher('/programmes/rise-up');
        const [programmes] = screen.getAllByRole('link', { name: 'Programmes', hidden: true });
        const [accueil] = screen.getAllByRole('link', { name: 'Accueil', hidden: true });
        expect(programmes).toHaveClass('text-motora-orange');
        expect(accueil).not.toHaveClass('text-motora-orange');
    });

    it('ouvre et ferme le menu mobile', async () => {
        const user = userEvent.setup();
        const { container } = afficher();
        const menuMobile = container.querySelector('nav > div:last-child');

        expect(menuMobile).toHaveClass('invisible');

        await user.click(screen.getByRole('button', { name: 'Ouvrir le menu' }));
        expect(menuMobile).not.toHaveClass('invisible');
        expect(within(menuMobile).getByRole('link', { name: 'Actualités' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Fermer le menu' }));
        expect(menuMobile).toHaveClass('invisible');
    });
});
