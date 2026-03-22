'use client';

import { useFoodEntries } from '@/hooks/useLocalStorage';
import { foods } from '@/data/foods';
import ProgressBar from '@/components/ProgressBar';
import WaveSeparator from '@/components/WaveSeparator';
import { CATEGORY_LABELS, FoodCategory } from '@/lib/types';

const AGE_STAGES = [
  { age: 6, label: '6 mois', color: 'bg-menthe' },
  { age: 7, label: '7 mois', color: 'bg-blush' },
  { age: 8, label: '8-9 mois', color: 'bg-jaune' },
  { age: 10, label: '10-12 mois', color: 'bg-rose' },
];

export default function ProgressionPage() {
  const { entries } = useFoodEntries();

  const introducedFoods = foods.filter(f => entries[f.id]?.introduced);
  const lovedFoods = introducedFoods.filter(f => entries[f.id]?.reaction === 'loved');
  const refusedFoods = introducedFoods.filter(f => entries[f.id]?.reaction === 'refused');

  const categories = [...new Set(foods.map(f => f.category))] as FoodCategory[];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Tableau de bord</p>
        <h1 className="text-3xl font-black text-noir mt-1">Progression</h1>
        <p className="text-sm text-gris font-medium mt-1">
          <span className="font-serif italic">Vue d&apos;ensemble de la diversification</span>
        </p>
      </div>

      {/* Stats globales */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-menthe-light rounded-3xl p-4 text-center">
          <p className="text-3xl font-black text-noir">{introducedFoods.length}</p>
          <p className="text-[10px] text-gris font-bold mt-1 uppercase tracking-wider">Introduits</p>
        </div>
        <div className="bg-blush-light rounded-3xl p-4 text-center">
          <p className="text-3xl font-black text-noir">{lovedFoods.length}</p>
          <p className="text-[10px] text-gris font-bold mt-1 uppercase tracking-wider">Adorés 😍</p>
        </div>
        <div className="bg-jaune-light rounded-3xl p-4 text-center">
          <p className="text-3xl font-black text-noir">{refusedFoods.length}</p>
          <p className="text-[10px] text-gris font-bold mt-1 uppercase tracking-wider">Refusés 😣</p>
        </div>
      </div>

      {/* Par âge */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="font-extrabold text-noir">Par tranche d&apos;âge</h2>
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

      {/* Par catégorie */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="font-extrabold text-noir">Par catégorie</h2>
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

      <WaveSeparator color="#E9F6F0" />

      {/* Adorés */}
      {lovedFoods.length > 0 && (
        <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
          <h2 className="font-extrabold text-noir flex items-center gap-2">
            😍 <span className="font-serif italic font-normal">Bébé adore</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {lovedFoods.map(f => (
              <span key={f.id} className="text-xs px-3 py-2 bg-blush rounded-full font-bold text-noir">
                {f.icon} {f.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Refusés */}
      {refusedFoods.length > 0 && (
        <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
          <h2 className="font-extrabold text-noir flex items-center gap-2">
            😣 <span className="font-serif italic font-normal">À reproposer</span>
          </h2>
          <p className="text-xs text-gris leading-relaxed">
            Pas de panique ! Il faut parfois 10 à 15 présentations avant qu&apos;un aliment soit accepté.
          </p>
          <div className="flex flex-wrap gap-2">
            {refusedFoods.map(f => (
              <span key={f.id} className="text-xs px-3 py-2 bg-jaune-light rounded-full font-bold text-noir">
                {f.icon} {f.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Historique */}
      {introducedFoods.length > 0 && (
        <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
          <h2 className="font-extrabold text-noir flex items-center gap-2">
            📅 <span className="font-serif italic font-normal">Historique</span>
          </h2>
          <div className="space-y-0">
            {introducedFoods
              .sort((a, b) => {
                const dateA = entries[a.id]?.date || '';
                const dateB = entries[b.id]?.date || '';
                return dateB.localeCompare(dateA);
              })
              .map(f => (
                <div key={f.id} className="flex items-center gap-3 text-xs py-2.5 border-b border-gris-light last:border-0">
                  <span className="text-base">{f.icon}</span>
                  <span className="font-bold text-noir flex-1">{f.name}</span>
                  {entries[f.id]?.reaction && (
                    <span className="text-base">
                      {entries[f.id].reaction === 'loved' ? '😍' : entries[f.id].reaction === 'refused' ? '😣' : '😐'}
                    </span>
                  )}
                  <span className="text-gris font-medium">{entries[f.id]?.date || ''}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {introducedFoods.length === 0 && (
        <div className="text-center py-12 text-gris">
          <p className="text-5xl mb-3">🌱</p>
          <p className="text-sm font-medium">Commence par cocher des aliments dans la Checklist !</p>
        </div>
      )}
    </div>
  );
}
