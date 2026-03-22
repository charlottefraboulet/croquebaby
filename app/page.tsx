'use client';

import Link from 'next/link';
import { useFoodEntries } from '@/hooks/useLocalStorage';
import { foods } from '@/data/foods';
import { sarahMachetoTips } from '@/data/textures';
import ProgressBar from '@/components/ProgressBar';
import WaveSeparator from '@/components/WaveSeparator';
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
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-block px-4 py-1 bg-menthe-light rounded-full">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-noir">De 6 à 12 mois</span>
        </div>
        <h1 className="text-4xl font-black text-noir tracking-tight">CroqueBaby</h1>
        <p className="text-sm text-gris font-medium">
          <span className="font-serif italic">La diversification en douceur</span>
        </p>
      </div>

      {/* Progression globale */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-noir">Progression</h2>
          <span className="text-xs px-3 py-1 bg-menthe rounded-full font-extrabold text-noir">
            {Math.round((introducedCount / totalFoods) * 100)}%
          </span>
        </div>
        <ProgressBar
          label={`${introducedCount} aliments sur ${totalFoods}`}
          current={introducedCount}
          total={totalFoods}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
          {categories.map(cat => {
            const catFoods = foods.filter(f => f.category === cat);
            const catIntroduced = catFoods.filter(f => entries[f.id]?.introduced).length;
            return (
              <div key={cat} className="flex justify-between text-xs">
                <span className="text-gris">{CATEGORY_LABELS[cat as FoodCategory]}</span>
                <span className="font-bold text-noir">{catIntroduced}/{catFoods.length}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accès rapide — style Carryboo cards */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/checklist"
          className="bg-menthe-light rounded-3xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">✅</span>
          <span className="text-sm font-extrabold text-noir block">Checklist</span>
          <p className="text-[10px] text-gris font-medium mt-1">Aliments à introduire</p>
        </Link>
        <Link
          href="/recettes"
          className="bg-blush-light rounded-3xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">👩‍🍳</span>
          <span className="text-sm font-extrabold text-noir block">Recettes</span>
          <p className="text-[10px] text-gris font-medium mt-1">Idées de combinaisons</p>
        </Link>
        <Link
          href="/textures"
          className="bg-jaune-light rounded-3xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">🥄</span>
          <span className="text-sm font-extrabold text-noir block">Textures</span>
          <p className="text-[10px] text-gris font-medium mt-1">Guide par âge</p>
        </Link>
        <Link
          href="/progression"
          className="bg-bleu-light rounded-3xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">📈</span>
          <span className="text-sm font-extrabold text-noir block">Progrès</span>
          <p className="text-[10px] text-gris font-medium mt-1">Vue d&apos;ensemble</p>
        </Link>
      </div>

      <WaveSeparator color="#E9F6F0" />

      {/* Conseils Dr Macheto — style Joone épuré */}
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Recommandations</p>
          <h2 className="text-xl font-black text-noir mt-1">
            Conseils du <span className="font-serif italic font-normal">Dr Macheto</span>
          </h2>
        </div>
        <div className="space-y-3">
          {sarahMachetoTips.slice(0, 3).map((tip, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <p className="text-sm font-extrabold text-noir">{tip.title}</p>
                  <p className="text-xs text-gris mt-1 leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/textures" className="block text-center">
          <span className="inline-block px-5 py-2.5 bg-menthe rounded-full text-sm font-extrabold text-noir hover:shadow-md hover:shadow-menthe/30 transition-all duration-300">
            Voir tous les conseils →
          </span>
        </Link>
      </div>

      <WaveSeparator color="#FDF0EC" />

      {/* Étapes par âge */}
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Parcours</p>
          <h2 className="text-xl font-black text-noir mt-1">
            Par où <span className="font-serif italic font-normal">commencer ?</span>
          </h2>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-sm space-y-1">
          {AGE_STAGES.map(stage => {
            const stageFoods = foods.filter(f => f.ageMonth === stage.age);
            const stageIntroduced = stageFoods.filter(f => entries[f.id]?.introduced).length;
            const isDone = stageIntroduced === stageFoods.length;
            return (
              <Link
                key={stage.age}
                href={`/checklist?age=${stage.age}`}
                className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${
                  isDone ? 'bg-menthe-light' : 'hover:bg-gris-light'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                  isDone ? 'bg-menthe text-noir' : 'bg-blush text-noir'
                }`}>
                  {isDone ? '✓' : stage.age}
                </span>
                <span className="text-sm font-bold text-noir flex-1">{stage.label}</span>
                <span className="text-xs font-extrabold text-gris">{stageIntroduced}/{stageFoods.length}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
