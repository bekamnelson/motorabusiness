import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Programmes from '../../src/pages/Programmes';
import programmes from '../../src/data/programmes';

function afficher() {
    return render(
        <MemoryRouter>
            <Programmes />
        </MemoryRouter>
    );
}

describe('page Programmes', () => {
    it('affiche une carte cliquable par programme', () => {
        afficher();
        programmes.forEach((programme) => {
            const titre = screen.getByRole('heading', { name: new RegExp(programme.titre) });
            expect(titre.closest('a')).toHaveAttribute('href', `/programmes/${programme.slug}`);
        });
    });

    it('affiche le sigle du Youth Impact Challenge', () => {
        afficher();
        expect(screen.getByRole('heading', { name: 'Youth Impact Challenge (YIC)' })).toBeInTheDocument();
    });

    it('affiche une photo pour chaque programme qui en a une, et aucune sinon', () => {
        afficher();
        programmes.forEach((programme) => {
            const photo = screen.queryByRole('img', { name: programme.titre });
            if (programme.images.length > 0) {
                expect(photo).toHaveAttribute('src', programme.images[0]);
            } else {
                expect(photo).not.toBeInTheDocument();
            }
        });
    });

    it('garde un lien vers le parcours Vision Boost', () => {
        afficher();
        expect(screen.getByRole('link', { name: /Voir le parcours/ })).toHaveAttribute('href', '/programmes/vision-boost');
    });
});
