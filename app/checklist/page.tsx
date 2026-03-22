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
    <div className="space-y-5">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Diversification</p>
        <h1 className="text-3xl font-black text-noir mt-1">Checklist</h1>
        <p className="text-sm text-gris font-medium mt-1">
          <span className="font-serif italic">Aliments à introduire par tranche d&apos;âge</span>
        </p>
      </div>

      <WeekSelector selectedAge={selectedAge} onAgeChange={setSelectedAge} />

      <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-between">
        <span className="text-sm font-bold text-noir">
          {selectedAge === 8 ? '8-9' : selectedAge === 10 ? '10-12' : selectedAge} mois
        </span>
        <span className="text-xs px-4 py-1.5 rounded-full bg-menthe font-extrabold text-noir">
          {introducedCount}/{ageFoods.length} introduits
        </span>
      </div>

      {categories.map(category => {
        const categoryFoods = ageFoods.filter(f => f.category === category);
        return (
          <div key={category} className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <h2 className="text-sm font-extrabold text-noir">
                {CATEGORY_LABELS[category as FoodCategory]}
              </h2>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gris-light font-bold text-gris">
                {categoryFoods.filter(f => entries[f.id]?.introduced).length}/{categoryFoods.length}
              </span>
            </div>
            <div className="space-y-3">
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
        <div className="text-center py-12 text-gris">
          <p className="text-5xl mb-3">🤷</p>
          <p className="text-sm font-medium">Aucun nouvel aliment pour cet âge</p>
        </div>
      )}
    </div>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-gris text-sm">Chargement...</div>}>
      <ChecklistContent />
    </Suspense>
  );
}
