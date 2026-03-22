'use client';

import { useState } from 'react';
import WeekSelector from '@/components/WeekSelector';
import RecipeCard from '@/components/RecipeCard';
import { getNewRecipesForAge, getRecipesByAge } from '@/data/recipes';

export default function RecettesPage() {
  const [selectedAge, setSelectedAge] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const recipes = showAll ? getRecipesByAge(selectedAge) : getNewRecipesForAge(selectedAge);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-black text-brun">Recettes</h1>
        <p className="text-sm text-brun-light">Idées de combinaisons et astuces saveurs</p>
      </div>

      <WeekSelector selectedAge={selectedAge} onAgeChange={setSelectedAge} />

      <div className="flex gap-2">
        <button
          onClick={() => setShowAll(false)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            !showAll ? 'bg-rose text-white' : 'bg-white text-brun border border-rose-light'
          }`}
        >
          Nouvelles recettes
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            showAll ? 'bg-rose text-white' : 'bg-white text-brun border border-rose-light'
          }`}
        >
          Toutes les recettes
        </button>
      </div>

      <div className="space-y-3">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-8 text-brun-light">
          <p className="text-4xl mb-2">👩‍🍳</p>
          <p className="text-sm">Pas de nouvelles recettes pour cet âge</p>
          <button
            onClick={() => setShowAll(true)}
            className="text-xs text-rose font-semibold mt-2 hover:underline"
          >
            Voir toutes les recettes disponibles →
          </button>
        </div>
      )}
    </div>
  );
}
