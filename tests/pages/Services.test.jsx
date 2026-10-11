import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from '../../src/pages/Services';
import services from '../../src/data/services';

describe('page Services', () => {
    it('affiche chaque service avec un lien de demande vers le formulaire', () => {
        render(
            <MemoryRouter>
                <Services />
            </MemoryRouter>
        );
        const demandes = screen.getAllByRole('link', { name: /Demander ce service/ });
        expect(demandes).toHaveLength(services.length);

        services.forEach((service, index) => {
            expect(screen.getByRole('heading', { name: service.titre })).toBeInTheDocument();
            service.elements.forEach((element) => expect(screen.getByText(element)).toBeInTheDocument());
            expect(demandes[index]).toHaveAttribute('href', `/contact?sujet=${encodeURIComponent(service.titre)}`);
        });
    });
});
