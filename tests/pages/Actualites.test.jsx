import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Actualites from '../../src/pages/Actualites';
import ActualiteDetail from '../../src/pages/ActualiteDetail';
import actualites from '../../src/data/actualites';

jest.mock('../../src/data/actualites', () => ({ __esModule: true, default: [] }));

const exemple = {
    slug: 'yic-2025',
    titre: 'Youth Impact Challenge 2025',
    date: '2025-11-20',
    lieu: 'Bafoussam',
    programme: 'youth-impact-challenge',
    resume: 'Retour sur la finale.',
    contenu: ['Premier paragraphe.', 'Deuxième paragraphe.'],
    images: ['couverture.jpeg', 'photo.jpeg'],
};

function afficher(chemin) {
    return render(
        <MemoryRouter initialEntries={[chemin]}>
            <Routes>
                <Route path="/actualites" element={<Actualites />} />
                <Route path="/actualites/:slug" element={<ActualiteDetail />} />
            </Routes>
        </MemoryRouter>
    );
}

describe('page Actualités', () => {
    afterEach(() => {
        actualites.length = 0;
    });

    it("affiche un message d'attente quand il n'y a pas encore d'actualité", () => {
        afficher('/actualites');
        expect(screen.getByText('Les premières actualités arrivent bientôt.')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Nos programmes/ })).toHaveAttribute('href', '/programmes');
    });

    it('liste les actualités avec leur date en français', () => {
        actualites.push(exemple);
        afficher('/actualites');
        const titre = screen.getByRole('heading', { name: exemple.titre });
        expect(titre.closest('a')).toHaveAttribute('href', '/actualites/yic-2025');
        expect(screen.getByText('20 novembre 2025')).toBeInTheDocument();
        expect(screen.getByText(exemple.resume)).toBeInTheDocument();
    });
});

describe("page détail d'une actualité", () => {
    afterEach(() => {
        actualites.length = 0;
    });

    it("affiche l'article complet et le programme lié", () => {
        actualites.push(exemple);
        afficher('/actualites/yic-2025');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(exemple.titre);
        expect(screen.getByText('Premier paragraphe.')).toBeInTheDocument();
        expect(screen.getByText('Deuxième paragraphe.')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: exemple.titre })).toHaveAttribute('src', 'couverture.jpeg');
        expect(screen.getByRole('img', { name: /photo 1/ })).toHaveAttribute('src', 'photo.jpeg');
        expect(screen.getByRole('link', { name: /Youth Impact Challenge/ })).toHaveAttribute('href', '/programmes/youth-impact-challenge');
    });

    it('affiche un message pour une actualité inconnue', () => {
        afficher('/actualites/inconnue');
        expect(screen.getByRole('heading', { name: 'Actualité introuvable' })).toBeInTheDocument();
    });
});
