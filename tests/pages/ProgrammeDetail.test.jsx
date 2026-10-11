import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProgrammeDetail from '../../src/pages/ProgrammeDetail';
import programmes from '../../src/data/programmes';

function afficher(slug) {
    return render(
        <MemoryRouter initialEntries={[`/programmes/${slug}`]}>
            <Routes>
                <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
            </Routes>
        </MemoryRouter>
    );
}

const trouver = (slug) => programmes.find((p) => p.slug === slug);

describe("page détail d'un programme", () => {
    it.each(programmes)('affiche le contenu de $slug', (programme) => {
        afficher(programme.slug);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(programme.titre);
        expect(screen.getByText(programme.description)).toBeInTheDocument();
        expect(screen.getByText(programme.cible)).toBeInTheDocument();
        programme.points.forEach((point) => {
            expect(screen.getByText(point)).toBeInTheDocument();
        });
    });

    it('le bouton de contact préremplit le formulaire avec le programme', () => {
        afficher('rise-up');
        expect(screen.getByRole('link', { name: 'Nous contacter' })).toHaveAttribute('href', '/contact?programme=rise-up');
    });

    it('affiche un message pour un programme inconnu', () => {
        afficher('nexiste-pas');
        expect(screen.getByRole('heading', { name: 'Programme introuvable' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Retour aux programmes/ })).toHaveAttribute('href', '/programmes');
    });

    it('propose les modules de formation pour Motora Business School', () => {
        afficher('motora-business-school');
        expect(screen.getByRole('link', { name: /Voir les modules de formation/ }))
            .toHaveAttribute('href', '/programmes/initiation-entrepreneuriat');
    });

    it('ne propose pas de modules pour les autres programmes', () => {
        afficher('rise-up');
        expect(screen.queryByRole('link', { name: /Voir les modules de formation/ })).not.toBeInTheDocument();
    });

    it('affiche la galerie sans la photo de couverture', () => {
        const programme = trouver('youth-impact-challenge');
        afficher(programme.slug);
        expect(screen.getByRole('heading', { name: 'En images' })).toBeInTheDocument();
        expect(screen.getAllByRole('img', { name: /photo \d/ })).toHaveLength(programme.images.length - 1);
    });

    it("n'affiche pas de galerie sans photos", () => {
        afficher('mobilite-internationale');
        expect(screen.queryByRole('heading', { name: 'En images' })).not.toBeInTheDocument();
    });

    it('ouvre une photo en grand au clic puis la referme', async () => {
        const user = userEvent.setup();
        const programme = trouver('youth-impact-challenge');
        afficher(programme.slug);

        expect(screen.queryByRole('button', { name: 'Fermer' })).not.toBeInTheDocument();
        await user.click(screen.getByRole('img', { name: /photo 1/ }));

        const fermer = screen.getByRole('button', { name: 'Fermer' });
        expect(fermer.parentElement.querySelector('img')).toHaveAttribute('src', programme.images[1]);

        await user.click(fermer);
        expect(screen.queryByRole('button', { name: 'Fermer' })).not.toBeInTheDocument();
    });
});
