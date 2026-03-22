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
      className={`bg-white rounded-3xl p-5 transition-all duration-300 ${
        isIntroduced
          ? 'border-2 border-menthe shadow-sm shadow-menthe/20'
          : 'border-2 border-transparent shadow-sm hover:shadow-md hover:border-blush'
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(food.id)}
          className={`mt-0.5 w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
            isIntroduced
              ? 'bg-menthe border-menthe-dark text-white shadow-sm shadow-menthe/30'
              : 'border-gray-300 hover:border-menthe-dark'
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
            <span className="text-xl">{food.icon}</span>
            <h3 className={`font-extrabold text-sm ${isIntroduced ? 'line-through text-gris' : 'text-noir'}`}>
              {food.name}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${CATEGORY_COLORS[food.category]}`}>
              {food.category.replace('_', ' ')}
            </span>
          </div>

          <p className="text-xs text-gris mt-2 leading-relaxed">
            <span className="font-bold text-noir">Texture :</span> {food.texture}
          </p>

          {food.flavorTip && (
            <p className="text-xs text-gris mt-1 leading-relaxed">
              <span className="font-bold text-noir">Saveur :</span> {food.flavorTip}
            </p>
          )}

          {food.specialNote && (
            <div className="mt-2 px-3 py-2 bg-jaune-light rounded-2xl">
              <p className="text-xs font-bold text-noir">
                💡 {food.specialNote}
              </p>
            </div>
          )}

          {isIntroduced && (
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gris-light">
              <span className="text-[10px] text-gris font-bold uppercase tracking-wider">Verdict</span>
              {(Object.entries(reactionEmojis) as [Reaction, string][]).map(([reaction, emoji]) => (
                <button
                  key={reaction}
                  onClick={() => onReaction(food.id, reaction)}
                  className={`text-xl transition-all duration-200 ${
                    entry?.reaction === reaction
                      ? 'scale-125 drop-shadow-sm'
                      : 'opacity-30 hover:opacity-60 hover:scale-110'
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
