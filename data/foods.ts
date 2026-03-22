import { Food } from '@/lib/types';

export const foods: Food[] = [
  // ===== 6 MOIS — LÉGUMES =====
  { id: 'courgette', name: 'Courgette', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Ajouter une feuille de basilic frais', icon: '🥒' },
  { id: 'carotte', name: 'Carotte', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Se marie bien avec le cumin', icon: '🥕' },
  { id: 'haricots-verts', name: 'Haricots verts', category: 'legume', ageMonth: 6, texture: 'Purée lisse bien mixée', flavorTip: 'Ajouter un filet d\'huile d\'olive', icon: '🫛' },
  { id: 'patate-douce', name: 'Patate douce', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Délicieuse avec une pincée de cannelle', icon: '🍠' },
  { id: 'potiron', name: 'Potiron', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Ajouter une pointe de muscade', icon: '🎃' },
  { id: 'epinards', name: 'Épinards', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Mélanger avec pomme de terre pour adoucir', icon: '🥬' },
  { id: 'brocoli', name: 'Brocoli', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Ajouter du fromage frais pour adoucir', icon: '🥦' },
  { id: 'panais', name: 'Panais', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Goût naturellement sucré, bébé adore', icon: '🥕' },
  { id: 'blanc-poireau', name: 'Blanc de poireau', category: 'legume', ageMonth: 6, texture: 'Purée lisse bien mixée', flavorTip: 'Mélanger avec pomme de terre', icon: '🧅' },
  { id: 'potimarron', name: 'Potimarron', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Onctueux, se suffit à lui-même', icon: '🎃' },
  { id: 'pomme-de-terre', name: 'Pomme de terre', category: 'legume', ageMonth: 6, texture: 'Purée lisse', flavorTip: 'Idéale pour épaissir les purées de légumes', icon: '🥔' },

  // ===== 6 MOIS — FRUITS =====
  { id: 'pomme', name: 'Pomme', category: 'fruit', ageMonth: 6, texture: 'Compote lisse', flavorTip: 'Ajouter une gousse de vanille à la cuisson', icon: '🍎' },
  { id: 'poire', name: 'Poire', category: 'fruit', ageMonth: 6, texture: 'Compote lisse', flavorTip: 'Parfaite avec de la vanille', icon: '🍐' },
  { id: 'banane', name: 'Banane', category: 'fruit', ageMonth: 6, texture: 'Écrasée à la fourchette', flavorTip: 'Mélanger avec un peu de poudre d\'amande', icon: '🍌' },
  { id: 'peche', name: 'Pêche', category: 'fruit', ageMonth: 6, texture: 'Compote lisse', flavorTip: 'Ajouter une feuille de menthe fraîche', icon: '🍑' },
  { id: 'abricot', name: 'Abricot', category: 'fruit', ageMonth: 6, texture: 'Compote lisse', flavorTip: 'Se marie très bien avec la vanille', icon: '🍑' },
  { id: 'prune', name: 'Prune / pruneau', category: 'fruit', ageMonth: 6, texture: 'Compote lisse', flavorTip: 'Excellent pour le transit', icon: '🫐' },
  { id: 'coing', name: 'Coing', category: 'fruit', ageMonth: 6, texture: 'Compote bien cuite et lisse', flavorTip: 'Goût délicat, cuisson longue nécessaire', icon: '🍐' },

  // ===== 6 MOIS — MATIÈRES GRASSES =====
  { id: 'huile-colza', name: 'Huile de colza', category: 'matiere_grasse', ageMonth: 6, texture: '1 c. à café dans la purée APRÈS cuisson', specialNote: 'Huile n°1 recommandée (Dr Macheto) : riche en oméga 3. Ajouter APRÈS cuisson, jamais pendant', flavorTip: 'Goût neutre, idéale au quotidien', icon: '🧴' },
  { id: 'huile-noix', name: 'Huile de noix', category: 'matiere_grasse', ageMonth: 6, texture: '1 c. à café dans la purée APRÈS cuisson', specialNote: 'Riche en oméga 3, à alterner avec le colza (Dr Macheto)', flavorTip: 'Goût subtil de noix, délicieuse dans les purées', icon: '🥜' },
  { id: 'huile-olive', name: 'Huile d\'olive', category: 'matiere_grasse', ageMonth: 6, texture: '1 c. à café dans la purée APRÈS cuisson', specialNote: 'Utiliser occasionnellement — pauvre en oméga 3 et 6 (Dr Macheto). Colza et noix à privilégier', flavorTip: 'Apporte du goût, en alternance', icon: '🫒' },
  { id: 'beurre', name: 'Beurre', category: 'matiere_grasse', ageMonth: 6, texture: 'Une noisette dans la purée tiède', specialNote: 'Ajouter cru APRÈS cuisson (Dr Macheto). En alternance avec les huiles', flavorTip: 'Ajouter cru dans la purée après cuisson', icon: '🧈' },

  // ===== 6 MOIS — ÉPICES & HERBES =====
  { id: 'vanille', name: 'Vanille', category: 'epice', ageMonth: 6, texture: 'Gousse fendue dans la cuisson', flavorTip: 'Parfaite dans les compotes de fruits', icon: '🌿' },
  { id: 'cannelle', name: 'Cannelle', category: 'epice', ageMonth: 6, texture: 'Une pincée dans la compote', flavorTip: 'Idéale avec pomme, poire, patate douce', icon: '🫚' },
  { id: 'cumin', name: 'Cumin', category: 'epice', ageMonth: 6, texture: 'Une pointe dans la purée', flavorTip: 'Se marie très bien avec la carotte', icon: '🌿' },
  { id: 'coriandre', name: 'Coriandre fraîche', category: 'epice', ageMonth: 6, texture: 'Quelques feuilles ciselées', flavorTip: 'Ajouter crue après cuisson', icon: '🌿' },
  { id: 'menthe', name: 'Menthe fraîche', category: 'epice', ageMonth: 6, texture: 'Quelques feuilles dans la cuisson', flavorTip: 'Délicieuse avec courgette ou petits pois', icon: '🌿' },
  { id: 'basilic', name: 'Basilic frais', category: 'epice', ageMonth: 6, texture: 'Quelques feuilles ciselées', flavorTip: 'Ajouter cru après cuisson', icon: '🌿' },
  { id: 'persil', name: 'Persil frais', category: 'epice', ageMonth: 6, texture: 'Quelques feuilles ciselées', flavorTip: 'Se marie avec tous les légumes', icon: '🌿' },
  { id: 'muscade', name: 'Muscade', category: 'epice', ageMonth: 6, texture: 'Très légère râpure', flavorTip: 'Parfaite avec potiron et épinards', icon: '🌰' },

  // ===== 6 MOIS — ALLERGÈNES (introduction précoce recommandée) =====
  { id: 'poudre-amande', name: 'Poudre d\'amande', category: 'allergene', ageMonth: 6, texture: '1 c. à café dans la purée ou compote', specialNote: 'Introduire tôt les fruits à coque en poudre — jamais entiers !', flavorTip: 'Enrichit les compotes en goût et texture', icon: '🌰' },
  { id: 'poudre-noisette', name: 'Poudre de noisette', category: 'allergene', ageMonth: 6, texture: '1 c. à café dans la purée ou compote', specialNote: 'Introduction précoce recommandée des fruits à coque', flavorTip: 'Sublime les compotes de pomme', icon: '🌰' },

  // ===== 7 MOIS — LÉGUMES =====
  { id: 'petits-pois', name: 'Petits pois', category: 'legume', ageMonth: 7, texture: 'Purée mixée finement (avec pomme de terre)', flavorTip: 'Ajouter de la menthe fraîche', icon: '🟢' },
  { id: 'poireau', name: 'Poireau (vert)', category: 'legume', ageMonth: 7, texture: 'Purée lisse avec pomme de terre', flavorTip: 'Onctueux en velouté', icon: '🥬' },
  { id: 'aubergine', name: 'Aubergine', category: 'legume', ageMonth: 7, texture: 'Purée lisse', flavorTip: 'Ajouter un filet d\'huile d\'olive et du cumin', icon: '🍆' },
  { id: 'betterave', name: 'Betterave', category: 'legume', ageMonth: 7, texture: 'Purée lisse', flavorTip: 'Sucré naturellement, mélanger avec chèvre frais à 8 mois', icon: '🟣' },
  { id: 'fenouil', name: 'Fenouil', category: 'legume', ageMonth: 7, texture: 'Purée lisse', flavorTip: 'Goût anisé doux, se marie avec le poisson', icon: '🌿' },
  { id: 'artichaut', name: 'Artichaut', category: 'legume', ageMonth: 7, texture: 'Purée lisse (fond d\'artichaut)', flavorTip: 'Mélanger avec pomme de terre', icon: '🌿' },
  { id: 'navet', name: 'Navet', category: 'legume', ageMonth: 7, texture: 'Purée lisse', flavorTip: 'Goût prononcé, mélanger avec carotte ou patate douce', icon: '🥔' },
  { id: 'celeri', name: 'Céleri-rave', category: 'legume', ageMonth: 7, texture: 'Purée lisse', flavorTip: 'Goût prononcé, couper avec pomme de terre', icon: '🥬' },

  // ===== 7 MOIS — PROTÉINES =====
  { id: 'poulet', name: 'Poulet', category: 'proteine', ageMonth: 7, texture: 'Mixé finement dans la purée (10g/jour)', specialNote: '10g par jour = 2 cuillères à café', flavorTip: 'Avec légumes et herbes', icon: '🍗' },
  { id: 'dinde', name: 'Dinde', category: 'proteine', ageMonth: 7, texture: 'Mixé finement dans la purée (10g/jour)', specialNote: '10g par jour = 2 cuillères à café', flavorTip: 'Viande douce, idéale pour commencer', icon: '🦃' },
  { id: 'jambon-blanc', name: 'Jambon blanc', category: 'proteine', ageMonth: 7, texture: 'Mixé finement (10g/jour)', specialNote: 'Choisir sans nitrites de préférence', flavorTip: 'Apprécié par la plupart des bébés', icon: '🥩' },
  { id: 'poisson-blanc', name: 'Poisson blanc (cabillaud, merlan, colin)', category: 'proteine', ageMonth: 7, texture: 'Émietté finement dans la purée (10g/jour)', specialNote: '10g par jour, 1 à 2 fois par semaine', flavorTip: 'Cuire vapeur, émietter dans purée de légumes', icon: '🐟' },
  { id: 'jaune-oeuf', name: 'Jaune d\'œuf', category: 'allergene', ageMonth: 7, texture: 'Dur, émietté dans la purée', specialNote: 'Commencer par 1/4 de jaune, augmenter progressivement', flavorTip: 'Apporte onctuosité et goût', icon: '🥚' },

  // ===== 8-9 MOIS — LÉGUMES =====
  { id: 'champignons', name: 'Champignons', category: 'legume', ageMonth: 8, texture: 'Mixés ou en tout petits morceaux', flavorTip: 'Avec du persil et un filet de crème', icon: '🍄' },
  { id: 'chou-fleur', name: 'Chou-fleur', category: 'legume', ageMonth: 8, texture: 'Purée ou petits fleurons fondants', flavorTip: 'Avec muscade et beurre', icon: '🥦' },
  { id: 'tomate-cuite', name: 'Tomate (cuite, sans peau ni pépins)', category: 'legume', ageMonth: 8, texture: 'Coulis ou purée', specialNote: 'Toujours cuite et sans peau ni pépins', flavorTip: 'Avec basilic frais', icon: '🍅' },
  { id: 'courgette-morceaux', name: 'Courgette en bâtonnets', category: 'legume', ageMonth: 8, texture: 'Bâtonnets fondants cuits vapeur', specialNote: 'Pour la DME — bien fondants !', flavorTip: 'Parfaits pour manger avec les doigts', icon: '🥒' },
  { id: 'brocoli-morceaux', name: 'Brocoli en fleurons', category: 'legume', ageMonth: 8, texture: 'Fleurons très cuits et fondants', specialNote: 'Pour la DME — bien fondants !', flavorTip: 'Faciles à attraper pour bébé', icon: '🥦' },
  { id: 'poivron', name: 'Poivron (cuit, sans peau)', category: 'legume', ageMonth: 8, texture: 'Purée ou petits morceaux fondants', flavorTip: 'Le rouge est plus doux et sucré', icon: '🫑' },

  // ===== 8-9 MOIS — FÉCULENTS =====
  { id: 'semoule', name: 'Semoule fine', category: 'feculent', ageMonth: 8, texture: 'Cuite dans la purée de légumes', flavorTip: 'Idéale avec légumes du soleil', icon: '🌾' },
  { id: 'pates-fines', name: 'Petites pâtes (vermicelles, étoiles)', category: 'feculent', ageMonth: 8, texture: 'Très cuites, écrasées ou entières', flavorTip: 'Avec sauce tomate maison et basilic', icon: '🍝' },
  { id: 'riz', name: 'Riz', category: 'feculent', ageMonth: 8, texture: 'Très cuit et écrasé', flavorTip: 'En risotto crémeux avec légumes', icon: '🍚' },
  { id: 'pain', name: 'Pain / croûte', category: 'feculent', ageMonth: 8, texture: 'Croûte à sucer / bâtonnet de pain', specialNote: 'Surveiller bébé, ne pas donner de mie compacte', flavorTip: 'Parfait pour soulager les gencives', icon: '🍞' },
  { id: 'quinoa', name: 'Quinoa', category: 'feculent', ageMonth: 8, texture: 'Bien cuit, dans purée de légumes', flavorTip: 'Riche en protéines végétales', icon: '🌾' },

  // ===== 8-9 MOIS — LAITAGES =====
  { id: 'yaourt-nature', name: 'Yaourt nature', category: 'laitage', ageMonth: 8, texture: 'Lisse, nature', specialNote: 'Yaourt nature au lait entier, pas de yaourt aromatisé', flavorTip: 'Ajouter purée de fruits maison', icon: '🥛' },
  { id: 'fromage-frais', name: 'Fromage frais type petit-suisse', category: 'laitage', ageMonth: 8, texture: 'Lisse', specialNote: 'Nature, sans sucre ajouté', flavorTip: 'Mélanger avec compote de fruits', icon: '🧀' },
  { id: 'gruyere-rape', name: 'Gruyère râpé', category: 'laitage', ageMonth: 8, texture: 'Fondu dans la purée', flavorTip: 'Apporte du goût et du calcium', icon: '🧀' },

  // ===== 8-9 MOIS — ALLERGÈNES =====
  { id: 'beurre-cacahuete', name: 'Beurre de cacahuète', category: 'allergene', ageMonth: 8, texture: 'Dilué dans la compote ou purée', specialNote: 'Introduction précoce recommandée — ne jamais donner à la cuillère pur', flavorTip: '1/2 c. à café dans compote de banane', icon: '🥜' },
  { id: 'oeuf-entier', name: 'Œuf entier', category: 'allergene', ageMonth: 8, texture: 'Dur, émietté ou en omelette bien cuite', specialNote: 'Si le jaune a été bien toléré', flavorTip: 'En omelette avec herbes', icon: '🥚' },

  // ===== 8-9 MOIS — PROTÉINES =====
  { id: 'veau', name: 'Veau', category: 'proteine', ageMonth: 8, texture: 'Mixé ou en tout petits morceaux (20g/jour)', specialNote: '20g par jour à partir de 8 mois', flavorTip: 'Viande tendre, avec légumes', icon: '🥩' },
  { id: 'boeuf', name: 'Bœuf', category: 'proteine', ageMonth: 8, texture: 'Mixé ou en petits morceaux (20g/jour)', specialNote: '20g par jour, riche en fer', flavorTip: 'Haché dans purée de légumes', icon: '🥩' },
  { id: 'saumon', name: 'Saumon', category: 'proteine', ageMonth: 8, texture: 'Émietté dans la purée', specialNote: 'Poisson gras, 1 fois par semaine', flavorTip: 'Riche en oméga 3, avec aneth', icon: '🐟' },

  // ===== 10-12 MOIS — LÉGUMES =====
  { id: 'crudites', name: 'Crudités râpées (carotte, concombre)', category: 'legume', ageMonth: 10, texture: 'Râpées finement', specialNote: 'Premières crudités — râper très fin', flavorTip: 'Avec un filet de citron et huile d\'olive', icon: '🥗' },
  { id: 'avocat', name: 'Avocat', category: 'legume', ageMonth: 10, texture: 'Écrasé ou en lamelles', flavorTip: 'Nature ou avec un filet de citron', icon: '🥑' },
  { id: 'mais-doux', name: 'Maïs doux', category: 'legume', ageMonth: 10, texture: 'En grains écrasés', flavorTip: 'Sucré, souvent apprécié', icon: '🌽' },

  // ===== 10-12 MOIS — FRUITS =====
  { id: 'fruits-crus', name: 'Fruits crus mûrs (banane, poire, pêche)', category: 'fruit', ageMonth: 10, texture: 'En petits morceaux mous ou râpés', specialNote: 'Fruits bien mûrs pour éviter risque de fausse route', flavorTip: 'Varier les fruits selon les saisons', icon: '🍓' },
  { id: 'kiwi', name: 'Kiwi', category: 'fruit', ageMonth: 10, texture: 'En petits morceaux', flavorTip: 'Très riche en vitamine C', icon: '🥝' },
  { id: 'mangue', name: 'Mangue', category: 'fruit', ageMonth: 10, texture: 'En morceaux mous ou compote', flavorTip: 'Sucrée naturellement, bébé adore', icon: '🥭' },
  { id: 'ananas', name: 'Ananas', category: 'fruit', ageMonth: 10, texture: 'En petits morceaux bien mûrs', flavorTip: 'Peut être un peu acide, mélanger avec banane', icon: '🍍' },

  // ===== 10-12 MOIS — LÉGUMINEUSES =====
  { id: 'lentilles', name: 'Lentilles corail', category: 'feculent', ageMonth: 10, texture: 'Bien cuites, en purée ou écrasées', flavorTip: 'Avec cumin et coriandre, en dahl', icon: '🫘' },
  { id: 'pois-chiches', name: 'Pois chiches', category: 'feculent', ageMonth: 10, texture: 'Bien cuits et écrasés ou en houmous', flavorTip: 'En houmous avec huile d\'olive et citron', icon: '🫘' },
  { id: 'haricots-rouges', name: 'Haricots rouges', category: 'feculent', ageMonth: 10, texture: 'Bien cuits et écrasés', flavorTip: 'Dans un chili doux sans piment', icon: '🫘' },

  // ===== 10-12 MOIS — PROTÉINES =====
  { id: 'agneau', name: 'Agneau', category: 'proteine', ageMonth: 10, texture: 'Petits morceaux tendres (20g/jour)', flavorTip: 'Avec romarin et ail doux', icon: '🍖' },
  { id: 'poisson-gras', name: 'Sardine / maquereau', category: 'proteine', ageMonth: 10, texture: 'Émietté, sans arêtes', specialNote: 'Poisson gras 1x/semaine, riche en oméga 3', flavorTip: 'En rillettes avec fromage frais', icon: '🐟' },
];

export function getFoodsByAge(ageMonth: number): Food[] {
  return foods.filter(f => f.ageMonth <= ageMonth);
}

export function getNewFoodsForAge(ageMonth: number): Food[] {
  return foods.filter(f => f.ageMonth === ageMonth);
}

export function getFoodsByCategory(ageMonth: number, category: string): Food[] {
  return foods.filter(f => f.ageMonth <= ageMonth && f.category === category);
}
