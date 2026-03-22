import { Recipe } from '@/lib/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-transparent hover:border-rose-light transition-all">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{recipe.icon}</span>
        <div>
          <h3 className="font-bold text-sm text-brun">{recipe.name}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-light text-pink-800 font-medium">
            Dès {recipe.ageMonth} mois
          </span>
        </div>
      </div>

      <div className="space-y-2 mt-3">
        <div>
          <p className="text-[10px] font-bold text-brun uppercase tracking-wide">Ingrédients</p>
          <ul className="text-xs text-brun-light mt-0.5">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="text-rose">•</span> {ing}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold text-brun uppercase tracking-wide">Préparation</p>
          <p className="text-xs text-brun-light mt-0.5">{recipe.instructions}</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 bg-menthe-light rounded-full text-emerald-800 font-medium">
            {recipe.texture}
          </span>
        </div>

        {recipe.flavorTip && (
          <p className="text-xs px-2 py-1.5 bg-jaune-light rounded-lg text-yellow-800 font-medium">
            ✨ {recipe.flavorTip}
          </p>
        )}
      </div>
    </div>
  );
}
