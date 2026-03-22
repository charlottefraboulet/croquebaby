'use client';

import { useFoodEntries } from '@/hooks/useLocalStorage';
import { foods } from '@/data/foods';
import ProgressBar from '@/components/ProgressBar';
import { CATEGORY_LABELS, FoodCategory } from '@/lib/types';

const AGE_STAGES = [
  { age: 6, label: '6 mois', color: 'bg-rose' },
  { age: 7, label: '7 mois', color: 'bg-menthe' },
  { age: 8, label: '8-9 mois', color: 'bg-jaune' },
  { age: 10, label: '10-12 mois', color: 'bg-purple-400' },
];

export default function ProgressionPage() {
  const { entries } = useFoodEntries();

  const totalFoods = foods.length;
  const introducedFoods = foods.filter(f => entries[f.id]?.introduced);
  const lovedFoods = introducedFoods.filter(f => entries[f.id]?.reaction === 'loved');
  const refusedFoods = introducedFoods.filter(f => entries[f.id]?.reaction === 'refused');

  const categories = [...new Set(foods.map(f => f.category))] as FoodCategory[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-brun">Progression</h1>
        <p className="text-sm text-brun-light">Vue d&apos;ensemble de la diversification</p>
      </div>

      {/* Stats globales */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-menthe-light rounded-2xl p-3 text-center">
          <p className="text-2xl font-black text-emerald-800">{introducedFoods.length}</p>
          <p className="text-[10px] text-emerald-700 font-medium">Introduits</p>
        </div>
        <div className="bg-rose-light rounded-2xl p-3 text-center">
          <p className="text-2xl font-black text-pink-800">{lovedFoods.length}</p>
          <p className="text-[10px] text-pink-700 font-medium">Adorés 😍</p>
        </div>
        <div className="bg-orange-100 rounded-2xl p-3 text-center">
          <p className="text-2xl font-black text-orange-800">{refusedFoods.length}</p>
          <p className="text-[10px] text-orange-700 font-medium">Refusés 😣</p>
        </div>
      </div>

      {/* Progression par âge */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
        <h2 className="font-bold text-brun text-sm">Par tranche d&apos;âge</h2>
        {AGE_STAGES.map(stage => {
          const stageFoods = foods.filter(f => f.ageMonth === stage.age);
          const stageIntroduced = stageFoods.filter(f => entries[f.id]?.introduced).length;
          return (
            <ProgressBar
              key={stage.age}
              label={stage.label}
              current={stageIntroduced}
              total={stageFoods.length}
              color={stage.color}
            />
          );
        })}
      </div>

      {/* Progression par catégorie */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
        <h2 className="font-bold text-brun text-sm">Par catégorie</h2>
        {categories.map(cat => {
          const catFoods = foods.filter(f => f.category === cat);
          const catIntroduced = catFoods.filter(f => entries[f.id]?.introduced).length;
          return (
            <ProgressBar
              key={cat}
              label={CATEGORY_LABELS[cat]}
              current={catIntroduced}
              total={catFoods.length}
              color="bg-menthe"
            />
          );
        })}
      </div>

      {/* Aliments adorés */}
      {lovedFoods.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
          <h2 className="font-bold text-brun text-sm flex items-center gap-2">
            <span>😍</span> Bébé adore
          </h2>
          <div className="flex flex-wrap gap-2">
            {lovedFoods.map(f => (
              <span key={f.id} className="text-xs px-3 py-1.5 bg-rose-light rounded-full text-pink-800 font-medium">
                {f.icon} {f.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Aliments refusés */}
      {refusedFoods.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
          <h2 className="font-bold text-brun text-sm flex items-center gap-2">
            <span>😣</span> À reproposer plus tard
          </h2>
          <p className="text-[10px] text-brun-light">
            Ne pas se décourager ! Il faut parfois 10-15 présentations avant qu&apos;un aliment soit accepté (Dr Macheto).
          </p>
          <div className="flex flex-wrap gap-2">
            {refusedFoods.map(f => (
              <span key={f.id} className="text-xs px-3 py-1.5 bg-orange-100 rounded-full text-orange-800 font-medium">
                {f.icon} {f.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Timeline des introductions */}
      {introducedFoods.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
          <h2 className="font-bold text-brun text-sm flex items-center gap-2">
            <span>📅</span> Historique
          </h2>
          <div className="space-y-1">
            {introducedFoods
              .sort((a, b) => {
                const dateA = entries[a.id]?.date || '';
                const dateB = entries[b.id]?.date || '';
                return dateB.localeCompare(dateA);
              })
              .map(f => (
                <div key={f.id} className="flex items-center gap-2 text-xs py-1 border-b border-gray-50 last:border-0">
                  <span>{f.icon}</span>
                  <span className="font-medium text-brun flex-1">{f.name}</span>
                  {entries[f.id]?.reaction && (
                    <span>
                      {entries[f.id].reaction === 'loved' ? '😍' : entries[f.id].reaction === 'refused' ? '😣' : '😐'}
                    </span>
                  )}
                  <span className="text-brun-light">{entries[f.id]?.date || ''}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {introducedFoods.length === 0 && (
        <div className="text-center py-8 text-brun-light">
          <p className="text-4xl mb-2">🌱</p>
          <p className="text-sm">Commence par cocher des aliments dans la Checklist !</p>
        </div>
      )}
    </div>
  );
}
