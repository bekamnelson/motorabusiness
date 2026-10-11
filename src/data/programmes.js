import { GraduationCap, Trophy, Wrench, Coffee, TrendingUp, Plane } from 'lucide-react';

import mbs1 from '../assets/programmes/mbs-1.jpeg';
import mbs2 from '../assets/programmes/mbs-2.jpeg';
import mbs3 from '../assets/programmes/mbs-3.jpeg';
import yic1 from '../assets/programmes/yic-1.jpeg';
import yic2 from '../assets/programmes/yic-2.jpeg';
import yic3 from '../assets/programmes/yic-3.jpeg';
import yic4 from '../assets/programmes/yic-4.jpeg';
import cfp1 from '../assets/programmes/cfp-1.jpeg';
import cfp2 from '../assets/programmes/cfp-2.jpeg';
import cfp3 from '../assets/programmes/cfp-3.jpeg';
import cfp4 from '../assets/programmes/cfp-4.jpeg';
import cafe1 from '../assets/programmes/cafe-1.jpeg';
import cafe2 from '../assets/programmes/cafe-2.jpeg';
import cafe3 from '../assets/programmes/cafe-3.jpeg';
import riseup1 from '../assets/programmes/riseup-1.jpeg';
import riseup2 from '../assets/programmes/riseup-2.jpeg';

const programmes = [
    {
        slug: 'motora-business-school',
        titre: 'Motora Business School',
        cible: 'Élèves',
        icon: GraduationCap,
        resume: "Programme d'accompagnement des élèves et d'initiation à l'entrepreneuriat.",
        description:
            "Programme d'accompagnement des élèves et d'initiation à l'entrepreneuriat. Les élèves sont formés aux bases de l'entrepreneuriat, apprennent à développer une idée de projet et réalisent un prototype.",
        points: [
            "Formation aux bases de l'entrepreneuriat",
            "Développement d'une idée de projet",
            "Réalisation d'un prototype",
        ],
        modulesLien: '/programmes/initiation-entrepreneuriat',
        images: [mbs1, mbs2, mbs3],
    },
    {
        slug: 'youth-impact-challenge',
        titre: 'Youth Impact Challenge',
        sigle: 'YIC',
        cible: 'Jeunes de tous horizons',
        icon: Trophy,
        resume: 'Challenge régional ouvert à tout projet à impact social.',
        description:
            "Challenge régional ouvert à tout projet à impact social. Les jeunes de tous horizons présentent leur projet devant un jury, et le meilleur projet remporte un prix. Il est organisé durant la Semaine mondiale de l'entrepreneuriat, en novembre.",
        points: [
            'Ouvert à tout projet à impact social',
            "Présentation du projet devant un jury",
            'Un prix pour le meilleur projet',
            "Chaque année en novembre, pendant la Semaine mondiale de l'entrepreneuriat",
        ],
        images: [yic1, yic2, yic3, yic4],
    },
    {
        slug: 'centres-formation-professionnelle',
        titre: "Accompagnement des jeunes des centres de formation professionnelle",
        cible: 'Jeunes des centres de formation professionnelle',
        icon: Wrench,
        resume: 'Un accompagnement intensif sur 8 semaines, jusqu\'au prototype.',
        description:
            "Programme d'accompagnement et d'orientation des jeunes issus des centres de formation professionnelle. Un accompagnement intensif sur 8 semaines : structuration de l'idée de projet et pré-incubation, aboutissant à la réalisation d'un prototype.",
        points: [
            'Accompagnement intensif sur 8 semaines',
            "Structuration de l'idée de projet",
            'Pré-incubation',
            "Réalisation d'un prototype",
        ],
        images: [cfp1, cfp2, cfp3, cfp4],
    },
    {
        slug: 'cafe-entrepreneurial',
        titre: 'Café Entrepreneurial',
        cible: 'Jeunes',
        icon: Coffee,
        resume: "Des entrepreneurs et professionnels partagent leur parcours avec les jeunes.",
        description:
            "Programme d'échange d'expérience : un entrepreneur ou un professionnel partage son parcours avec des jeunes sur un thème précis. Ces rencontres éduquent les jeunes aux réalités du terrain et les aident à préparer leur avenir professionnel.",
        points: [
            'Un entrepreneur ou un professionnel partage son parcours',
            'Chaque rencontre porte sur un thème précis',
            'Découverte des réalités du terrain',
            'Préparation de l\'avenir professionnel',
        ],
        images: [cafe1, cafe2, cafe3],
    },
    {
        slug: 'rise-up',
        titre: 'Programme Rise Up',
        cible: 'Artisans et micro-entrepreneurs',
        icon: TrendingUp,
        resume: 'Orientation et accompagnement des artisans et micro-entrepreneurs vers la croissance.',
        description:
            "Programme d'orientation et d'accompagnement des artisans et des micro-entrepreneurs pour la croissance économique de leur activité. Il comprend la structuration complète de l'entreprise, une proposition de plan marketing, l'aide à la recherche de financements, ainsi que la mise en relation avec des opportunités et du réseautage.",
        points: [
            "Structuration complète de l'entreprise",
            'Proposition de plan marketing',
            'Aide à la recherche de financements',
            'Mise en relation avec des opportunités et réseautage',
        ],
        images: [riseup1, riseup2],
    },
    {
        slug: 'mobilite-internationale',
        titre: 'Programme de mobilité internationale',
        cible: 'Élèves',
        icon: Plane,
        resume: "Encadrement des élèves pour intégrer les grandes écoles à l'international.",
        description:
            "Programme d'encadrement des jeunes élèves dans le cadre de leurs études, pour l'élaboration d'un projet de mobilité internationale afin d'être admis dans les grandes écoles à l'international.",
        points: [
            'Encadrement des élèves dans leurs études',
            "Élaboration d'un projet de mobilité internationale",
            "Objectif : l'admission dans les grandes écoles à l'international",
        ],
        images: [],
    },
];

export default programmes;
