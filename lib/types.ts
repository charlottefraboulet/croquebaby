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
  legume: 'bg-menthe-light text-emerald-800',
  fruit: 'bg-rose-light text-pink-800',
  proteine: 'bg-amber-100 text-amber-800',
  feculent: 'bg-jaune-light text-yellow-800',
  matiere_grasse: 'bg-orange-100 text-orange-800',
  epice: 'bg-purple-100 text-purple-800',
  allergene: 'bg-red-100 text-red-800',
  laitage: 'bg-blue-100 text-blue-800',
};
