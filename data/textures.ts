import { TextureGuide } from '@/lib/types';

export const textureGuides: TextureGuide[] = [
  {
    ageRange: '6 mois',
    ageMonths: [6, 6],
    description: 'Purées lisses et compotes — tout doit être parfaitement lisse, sans aucun morceau.',
    examples: [
      'Purées de légumes lisses (courgette, carotte, patate douce...)',
      'Compotes de fruits lisses (pomme, poire, banane écrasée...)',
      'Texture type "velours" — passer au mixeur puis au tamis si nécessaire',
    ],
    tips: [
      'Mixer longuement pour obtenir une texture vraiment lisse',
      'Ajouter un peu d\'eau de cuisson si la purée est trop épaisse',
      'Toujours ajouter les matières grasses APRÈS cuisson (huile de colza ou noix en priorité)',
      'Proposer un seul légume ou fruit par jour au début pour que bébé identifie chaque goût',
      'Ne pas se décourager face à un refus — l\'exposition répétée aide à l\'acceptation',
    ],
  },
  {
    ageRange: '6-7 mois',
    ageMonths: [6, 7],
    description: 'Début des textures légèrement granuleuses et premiers bâtonnets fondants pour la DME.',
    examples: [
      'Purées légèrement moins lisses (mixer moins longtemps)',
      'Bâtonnets de légumes très fondants pour la DME (courgette, patate douce)',
      'Banane écrasée à la fourchette (pas mixée)',
      'Semoule très fine dans les purées',
    ],
    tips: [
      'Tester la texture : le morceau doit s\'écraser entre le pouce et l\'index sans effort',
      'Pour la DME : morceaux de la taille du poing de bébé pour qu\'il puisse les attraper',
      'Toujours surveiller bébé pendant le repas',
      'Le réflexe de haut-le-cœur (gag reflex) est normal et protecteur — ne pas paniquer',
    ],
  },
  {
    ageRange: '8-9 mois',
    ageMonths: [8, 9],
    description: 'Morceaux écrasés, finger food mou, premières pâtes et céréales.',
    examples: [
      'Purées écrasées à la fourchette (pas mixées)',
      'Petits morceaux fondants de légumes',
      'Pâtes très cuites (étoiles, vermicelles)',
      'Pain / croûte à sucer',
      'Omelette en lamelles',
      'Fleurons de brocoli fondants',
      'Riz très cuit et écrasé',
    ],
    tips: [
      'Écraser à la fourchette plutôt que mixer — bébé apprend à gérer les morceaux',
      'Les pâtes doivent être TRÈS cuites (plus que pour les adultes)',
      'Le pain : donner la croûte à sucer, éviter la mie compacte',
      'Couper en petits dés ou en bâtonnets selon l\'aliment',
      'Proposer des morceaux que bébé peut attraper lui-même',
    ],
  },
  {
    ageRange: '10-12 mois',
    ageMonths: [10, 12],
    description: 'Textures variées, premiers morceaux plus fermes, début des crudités râpées.',
    examples: [
      'Petits morceaux de viande tendre',
      'Crudités râpées finement (carotte, concombre)',
      'Fruits crus mûrs en morceaux',
      'Légumineuses écrasées (lentilles, pois chiches)',
      'Tartines (pain + rillettes, houmous)',
      'Petits morceaux de fromage',
    ],
    tips: [
      'Proposer progressivement des textures variées au même repas',
      'Les crudités doivent être râpées très finement au début',
      'Les fruits crus doivent être TRÈS mûrs pour être suffisamment mous',
      'Bébé peut commencer à manger "comme les grands" avec les doigts',
      'Continuer à couper les aliments ronds (raisin, tomate cerise) en deux ou en quatre',
    ],
  },
];

export const sarahMachetoTips = [
  {
    title: 'Les lipides sont essentiels',
    content: '63% des parents n\'ajoutent pas assez de matières grasses. Un déficit en lipides chez le nourrisson pourrait augmenter le risque de surpoids à l\'âge adulte. Les lipides doivent représenter 45% de l\'apport énergétique de 6 mois à 3 ans.',
    icon: '🧈',
  },
  {
    title: 'Huile de colza et noix en priorité',
    content: 'Privilégier les huiles de colza et de noix, riches en oméga 3. L\'huile d\'olive est pauvre en oméga 3 et 6 — à utiliser seulement occasionnellement. Éviter maïs, tournesol, arachide (trop d\'oméga 6).',
    icon: '🫒',
  },
  {
    title: 'Matières grasses après cuisson',
    content: 'Toujours ajouter les matières grasses APRÈS la cuisson pour préserver leurs qualités nutritionnelles. 1 à 2 cuillères à café par année d\'âge.',
    icon: '🌡️',
  },
  {
    title: 'Pas d\'ordre imposé',
    content: 'Il n\'y a pas d\'ordre obligatoire pour introduire les aliments, y compris les allergènes. Un seul nouveau légume/fruit par jour pour identifier les réactions.',
    icon: '📋',
  },
  {
    title: 'Miel interdit avant 1 an',
    content: 'Le miel est strictement interdit avant 12 mois (risque de botulisme). Pas de viande/poisson/œuf cru non plus.',
    icon: '🍯',
  },
  {
    title: 'Protéines : attention aux quantités',
    content: 'Avant 1 an : 10g/jour max. De 1 à 2 ans : 20g/jour. Un excès de protéines est associé à un risque d\'obésité. Les viandes rouges sont plus riches en fer.',
    icon: '🥩',
  },
  {
    title: 'Poisson 2 fois par semaine',
    content: '1x poisson maigre (cabillaud, merlan, sole) + 1x poisson gras (saumon, sardine, maquereau). Éviter : espadon, requin, marlin (métaux lourds).',
    icon: '🐟',
  },
  {
    title: 'Lait : 500-750 ml/jour',
    content: 'Le lait reste essentiel de 6 mois à 3 ans. Maintenir au minimum 250 ml de lait infantile par jour (enrichi en fer). 500-750 ml au total avec laitages.',
    icon: '🍼',
  },
  {
    title: 'Respecter l\'appétit de bébé',
    content: 'Ne jamais forcer bébé à manger. Respecter les signes de satiété : repousse la cuillère, ferme la bouche, tourne la tête. Pas d\'écrans pendant les repas.',
    icon: '👶',
  },
  {
    title: 'Féculents à chaque repas',
    content: 'Ajouter des féculents (1/4 de la quantité de légumes) à chaque repas : pomme de terre, patate douce, semoule, pâtes, riz, quinoa, légumineuses.',
    icon: '🌾',
  },
];
