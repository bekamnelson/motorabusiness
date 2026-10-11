import { Briefcase, Lightbulb, Monitor, PenTool } from 'lucide-react';

const services = [
    {
        titre: 'Montage de projets',
        icon: Briefcase,
        elements: ['Business model', 'Propositions de partenariat', 'Dossiers de financement pour micro-entreprise', 'Plans stratégiques'],
    },
    {
        titre: 'Rédaction professionnelle',
        icon: PenTool,
        elements: ['CV', 'Lettres de motivation', 'Rapports', 'Comptes rendus', 'Notes conceptuelles'],
    },
    {
        titre: 'Digitalisation des entreprises',
        icon: Monitor,
        elements: ['Accompagnement des entreprises dans leur passage au numérique'],
    },
    {
        titre: "Incubateur d'idées d'entreprise",
        icon: Lightbulb,
        elements: ["Accompagnement d'une idée d'entreprise jusqu'au projet concret"],
    },
];

export default services;
