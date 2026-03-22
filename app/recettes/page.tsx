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
    <div className="space-y-5">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Inspiration</p>
        <h1 className="text-3xl font-black text-noir mt-1">Recettes</h1>
        <p className="text-sm text-gris font-medium mt-1">
          <span className="font-serif italic">Combinaisons & astuces saveurs</span>
        </p>
      </div>

      <WeekSelector selectedAge={selectedAge} onAgeChange={setSelectedAge} />

      <div className="flex gap-2">
        <button
          onClick={() => setShowAll(false)}
          className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 ${
            !showAll
              ? 'bg-menthe text-noir shadow-sm shadow-menthe/30'
              : 'bg-white text-gris border-2 border-gris-light hover:border-menthe'
          }`}
        >
          Nouvelles recettes
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 ${
            showAll
              ? 'bg-menthe text-noir shadow-sm shadow-menthe/30'
              : 'bg-white text-gris border-2 border-gris-light hover:border-menthe'
          }`}
        >
          Toutes les recettes
        </button>
      </div>

      <div className="space-y-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-12 text-gris">
          <p className="text-5xl mb-3">👩‍🍳</p>
          <p className="text-sm font-medium">Pas de nouvelles recettes pour cet âge</p>
          <button
            onClick={() => setShowAll(true)}
            className="mt-3 px-5 py-2.5 bg-blush rounded-full text-xs font-extrabold text-noir hover:shadow-md transition-all duration-300"
          >
            Voir toutes les recettes →
          </button>
        </div>
      )}
    </div>
  );
}
