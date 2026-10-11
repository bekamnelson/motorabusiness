// Actualités de Motora Business, de la plus récente à la plus ancienne.
//
// Pour ajouter une actualité :
// 1. Mettre les photos dans src/assets/actualites/
// 2. Les importer en haut de ce fichier
// 3. Ajouter un objet au début de la liste, sur ce modèle :
//
// {
//     slug: 'youth-impact-challenge-2025',       // adresse de la page : /actualites/youth-impact-challenge-2025
//     titre: 'Youth Impact Challenge 2025',
//     date: '2025-11-20',                         // format AAAA-MM-JJ
//     lieu: 'Bafoussam',                          // facultatif
//     programme: 'youth-impact-challenge',        // facultatif : slug d'un programme de src/data/programmes.js
//     resume: 'Une phrase affichée dans la liste des actualités.',
//     contenu: [
//         'Premier paragraphe.',
//         'Deuxième paragraphe.',
//     ],
//     images: [photo1, photo2],                   // la première sert de couverture
// },

const actualites = [];

export default actualites;
