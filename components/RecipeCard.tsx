import { Recipe } from '@/lib/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-transparent hover:border-blush transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{recipe.icon}</span>
        <div>
          <h3 className="font-extrabold text-sm text-noir leading-tight">{recipe.name}</h3>
          <span className="inline-block mt-1 text-[10px] px-2.5 py-1 rounded-full bg-blush font-bold text-noir">
            Dès {recipe.ageMonth} mois
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[10px] font-extrabold text-gris uppercase tracking-widest mb-1">Ingrédients</p>
          <ul className="space-y-0.5">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="text-xs text-noir flex items-start gap-2">
                <span className="text-menthe-dark font-black">•</span>
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-extrabold text-gris uppercase tracking-widest mb-1">Préparation</p>
          <p className="text-xs text-gris leading-relaxed">{recipe.instructions}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] px-3 py-1 bg-menthe-light rounded-full font-bold text-noir">
            {recipe.texture}
          </span>
        </div>

        {recipe.flavorTip && (
          <div className="px-3 py-2.5 bg-jaune-light rounded-2xl">
            <p className="text-xs font-bold text-noir">
              ✨ {recipe.flavorTip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
