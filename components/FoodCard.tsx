'use client';

import { Food, FoodEntry, Reaction, CATEGORY_COLORS } from '@/lib/types';

interface FoodCardProps {
  food: Food;
  entry?: FoodEntry;
  onToggle: (foodId: string) => void;
  onReaction: (foodId: string, reaction: Reaction) => void;
}

const reactionEmojis: Record<Reaction, string> = {
  loved: '😍',
  neutral: '😐',
  refused: '😣',
};

export default function FoodCard({ food, entry, onToggle, onReaction }: FoodCardProps) {
  const isIntroduced = entry?.introduced ?? false;

  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-sm border transition-all ${
        isIntroduced ? 'border-menthe bg-menthe-light/30' : 'border-transparent'
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(food.id)}
          className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
            isIntroduced
              ? 'bg-menthe border-menthe text-white'
              : 'border-brun-light hover:border-rose'
          }`}
        >
          {isIntroduced && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg">{food.icon}</span>
            <h3 className={`font-bold text-sm ${isIntroduced ? 'line-through text-brun-light' : 'text-brun'}`}>
              {food.name}
            </h3>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[food.category]}`}>
              {food.category.replace('_', ' ')}
            </span>
          </div>

          <p className="text-xs text-brun-light mt-1">
            <span className="font-semibold">Texture :</span> {food.texture}
          </p>

          {food.flavorTip && (
            <p className="text-xs text-brun-light mt-0.5">
              <span className="font-semibold">Astuce saveur :</span> {food.flavorTip}
            </p>
          )}

          {food.specialNote && (
            <p className="text-xs mt-1 px-2 py-1 bg-jaune-light rounded-lg text-yellow-800 font-medium">
              💡 {food.specialNote}
            </p>
          )}

          {isIntroduced && (
            <div className="flex gap-2 mt-2">
              <span className="text-[10px] text-brun-light font-medium self-center">Réaction :</span>
              {(Object.entries(reactionEmojis) as [Reaction, string][]).map(([reaction, emoji]) => (
                <button
                  key={reaction}
                  onClick={() => onReaction(food.id, reaction)}
                  className={`text-lg transition-all ${
                    entry?.reaction === reaction
                      ? 'scale-125'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
