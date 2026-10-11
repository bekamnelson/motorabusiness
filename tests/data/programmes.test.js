import programmes from '../../src/data/programmes';

describe('données des programmes', () => {
    it('contient les 6 programmes', () => {
        expect(programmes.map((p) => p.titre)).toEqual([
            'Motora Business School',
            'Youth Impact Challenge',
            'Accompagnement des jeunes des centres de formation professionnelle',
            'Café Entrepreneurial',
            'Programme Rise Up',
            'Programme de mobilité internationale',
        ]);
    });

    it('a des slugs uniques et utilisables dans une URL', () => {
        const slugs = programmes.map((p) => p.slug);
        expect(new Set(slugs).size).toBe(slugs.length);
        slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
    });

    it("n'utilise pas un slug déjà pris par une page dédiée", () => {
        const routesDediees = ['vision-boost', 'initiation-entrepreneuriat'];
        programmes.forEach((p) => expect(routesDediees).not.toContain(p.slug));
    });

    it.each(programmes)('$slug a tous les champs requis', (programme) => {
        expect(programme.titre).toBeTruthy();
        expect(programme.cible).toBeTruthy();
        expect(programme.resume).toBeTruthy();
        expect(programme.description).toBeTruthy();
        expect(programme.icon).toBeTruthy();
        expect(programme.points.length).toBeGreaterThan(0);
        expect(Array.isArray(programme.images)).toBe(true);
    });
});
