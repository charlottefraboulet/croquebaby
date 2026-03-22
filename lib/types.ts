export type FoodCategory =
  | 'legume'
  | 'fruit'
  | 'proteine'
  | 'feculent'
  | 'matiere_grasse'
  | 'epice'
  | 'allergene'
  | 'laitage';

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  ageMonth: number;
  texture: string;
  flavorTip?: string;
  specialNote?: string;
  icon: string;
};

export type Reaction = 'loved' | 'neutral' | 'refused';

export type FoodEntry = {
  foodId: string;
  introduced: boolean;
  reaction?: Reaction;
  date?: string;
};

export type Recipe = {
  id: string;
  name: string;
  ageMonth: number;
  ingredients: string[];
  texture: string;
  flavorTip: string;
  instructions: string;
  icon: string;
};

export type TextureGuide = {
  ageRange: string;
  ageMonths: [number, number];
  description: string;
  examples: string[];
  tips: string[];
};

export const CATEGORY_LABELS: Record<FoodCategory, string> = {
  legume: 'Légumes',
  fruit: 'Fruits',
  proteine: 'Protéines',
  feculent: 'Féculents',
  matiere_grasse: 'Matières grasses',
  epice: 'Épices & herbes',
  allergene: 'Allergènes',
  laitage: 'Laitages',
};

export const CATEGORY_COLORS: Record<FoodCategory, string> = {
  legume: 'bg-menthe-light text-noir',
  fruit: 'bg-blush text-noir',
  proteine: 'bg-jaune-light text-noir',
  feculent: 'bg-bleu-light text-noir',
  matiere_grasse: 'bg-jaune text-noir',
  epice: 'bg-menthe text-noir',
  allergene: 'bg-blush text-noir',
  laitage: 'bg-bleu-light text-noir',
};
