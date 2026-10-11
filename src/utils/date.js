// « 2025-11-20 » -> « 20 novembre 2025 »
export function formaterDate(date) {
    return new Date(`${date}T12:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
