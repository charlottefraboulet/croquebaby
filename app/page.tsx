'use client';

import Link from 'next/link';
import { useFoodEntries } from '@/hooks/useLocalStorage';
import { foods } from '@/data/foods';
import { sarahMachetoTips } from '@/data/textures';
import ProgressBar from '@/components/ProgressBar';
import { CATEGORY_LABELS, FoodCategory } from '@/lib/types';

const AGE_STAGES = [
  { age: 6, label: '6 mois' },
  { age: 7, label: '7 mois' },
  { age: 8, label: '8-9 mois' },
  { age: 10, label: '10-12 mois' },
];

export default function HomePage() {
  const { entries } = useFoodEntries();

  const totalFoods = foods.length;
  const introducedCount = Object.values(entries).filter(e => e.introduced).length;

  const categories = [...new Set(foods.map(f => f.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-black text-brun">CroqueBaby</h1>
        <p className="text-sm text-brun-light">La diversification en douceur, de 6 à 12 mois</p>
      </div>

      {/* Progression globale */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
        <h2 className="font-bold text-brun flex items-center gap-2">
          <span>📊</span> Progression globale
        </h2>
        <ProgressBar
          label={`${introducedCount} aliments introduits sur ${totalFoods}`}
          current={introducedCount}
          total={totalFoods}
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          {categories.map(cat => {
            const catFoods = foods.filter(f => f.category === cat);
            const catIntroduced = catFoods.filter(f => entries[f.id]?.introduced).length;
            return (
              <div key={cat} className="text-xs text-brun-light">
                <span className="font-medium">{CATEGORY_LABELS[cat as FoodCategory]}</span>
                <span className="ml-1 text-brun">{catIntroduced}/{catFoods.length}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accès rapide */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/checklist"
          className="bg-rose-light rounded-2xl p-4 text-center hover:shadow-md transition-all"
        >
          <span className="text-3xl block mb-1">✅</span>
          <span className="text-sm font-bold text-pink-800">Checklist</span>
          <p className="text-[10px] text-pink-700 mt-0.5">Aliments à introduire</p>
        </Link>
        <Link
          href="/recettes"
          className="bg-menthe-light rounded-2xl p-4 text-center hover:shadow-md transition-all"
        >
          <span className="text-3xl block mb-1">👩‍🍳</span>
          <span className="text-sm font-bold text-emerald-800">Recettes</span>
          <p className="text-[10px] text-emerald-700 mt-0.5">Idées de combinaisons</p>
        </Link>
        <Link
          href="/textures"
          className="bg-jaune-light rounded-2xl p-4 text-center hover:shadow-md transition-all"
        >
          <span className="text-3xl block mb-1">🥄</span>
          <span className="text-sm font-bold text-yellow-800">Textures</span>
          <p className="text-[10px] text-yellow-700 mt-0.5">Guide par âge</p>
        </Link>
        <Link
          href="/progression"
          className="bg-purple-100 rounded-2xl p-4 text-center hover:shadow-md transition-all"
        >
          <span className="text-3xl block mb-1">📈</span>
          <span className="text-sm font-bold text-purple-800">Progrès</span>
          <p className="text-[10px] text-purple-700 mt-0.5">Vue d&apos;ensemble</p>
        </Link>
      </div>

      {/* Conseil du Dr Macheto */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
        <h2 className="font-bold text-brun flex items-center gap-2">
          <span>👩‍⚕️</span> Conseils du Dr Macheto
        </h2>
        <div className="space-y-2">
          {sarahMachetoTips.slice(0, 3).map((tip, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-lg flex-shrink-0">{tip.icon}</span>
              <div>
                <p className="text-xs font-bold text-brun">{tip.title}</p>
                <p className="text-[10px] text-brun-light leading-relaxed">{tip.content}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/textures" className="text-xs text-rose font-semibold hover:underline block text-center mt-2">
          Voir tous les conseils →
        </Link>
      </div>

      {/* Prochaines étapes */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-bold text-brun flex items-center gap-2 mb-3">
          <span>🎯</span> Par où commencer ?
        </h2>
        <div className="space-y-2">
          {AGE_STAGES.map(stage => {
            const stageFoods = foods.filter(f => f.ageMonth === stage.age);
            const stageIntroduced = stageFoods.filter(f => entries[f.id]?.introduced).length;
            const isDone = stageIntroduced === stageFoods.length;
            return (
              <Link
                key={stage.age}
                href={`/checklist?age=${stage.age}`}
                className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                  isDone ? 'bg-menthe-light/50' : 'hover:bg-rose-light/30'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  isDone ? 'bg-menthe text-white' : 'bg-rose-light text-pink-800'
                }`}>
                  {isDone ? '✓' : stage.age}
                </span>
                <span className="text-sm font-medium text-brun flex-1">{stage.label}</span>
                <span className="text-xs text-brun-light">{stageIntroduced}/{stageFoods.length}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
