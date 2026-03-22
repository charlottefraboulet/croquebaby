'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import WeekSelector from '@/components/WeekSelector';
import FoodCard from '@/components/FoodCard';
import { useFoodEntries } from '@/hooks/useLocalStorage';
import { getNewFoodsForAge } from '@/data/foods';
import { CATEGORY_LABELS, FoodCategory } from '@/lib/types';

function ChecklistContent() {
  const searchParams = useSearchParams();
  const initialAge = Number(searchParams.get('age')) || 6;
  const [selectedAge, setSelectedAge] = useState(initialAge);
  const { entries, toggleFood, setReaction } = useFoodEntries();

  const ageFoods = getNewFoodsForAge(selectedAge);
  const categories = [...new Set(ageFoods.map(f => f.category))];

  const introducedCount = ageFoods.filter(f => entries[f.id]?.introduced).length;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-black text-brun">Checklist</h1>
        <p className="text-sm text-brun-light">Aliments à introduire par tranche d&apos;âge</p>
      </div>

      <WeekSelector selectedAge={selectedAge} onAgeChange={setSelectedAge} />

      <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center justify-between">
        <span className="text-sm font-medium text-brun">
          {selectedAge === 8 ? '8-9' : selectedAge === 10 ? '10-12' : selectedAge} mois
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-menthe-light text-emerald-800 font-semibold">
          {introducedCount}/{ageFoods.length} introduits
        </span>
      </div>

      {categories.map(category => {
        const categoryFoods = ageFoods.filter(f => f.category === category);
        return (
          <div key={category} className="space-y-2">
            <h2 className="text-sm font-bold text-brun flex items-center gap-2 px-1">
              {CATEGORY_LABELS[category as FoodCategory]}
              <span className="text-[10px] font-normal text-brun-light">
                ({categoryFoods.filter(f => entries[f.id]?.introduced).length}/{categoryFoods.length})
              </span>
            </h2>
            <div className="space-y-2">
              {categoryFoods.map(food => (
                <FoodCard
                  key={food.id}
                  food={food}
                  entry={entries[food.id]}
                  onToggle={toggleFood}
                  onReaction={setReaction}
                />
              ))}
            </div>
          </div>
        );
      })}

      {ageFoods.length === 0 && (
        <div className="text-center py-8 text-brun-light">
          <p className="text-4xl mb-2">🤷</p>
          <p className="text-sm">Aucun nouvel aliment pour cet âge</p>
        </div>
      )}
    </div>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense fallback={<div className="text-center py-8 text-brun-light">Chargement...</div>}>
      <ChecklistContent />
    </Suspense>
  );
}
