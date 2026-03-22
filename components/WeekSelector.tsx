'use client';

const AGE_OPTIONS = [
  { value: 6, label: '6 mois' },
  { value: 7, label: '7 mois' },
  { value: 8, label: '8-9 mois' },
  { value: 10, label: '10-12 mois' },
];

interface WeekSelectorProps {
  selectedAge: number;
  onAgeChange: (age: number) => void;
}

export default function WeekSelector({ selectedAge, onAgeChange }: WeekSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {AGE_OPTIONS.map(option => (
        <button
          key={option.value}
          onClick={() => onAgeChange(option.value)}
          className={`px-5 py-2.5 rounded-full text-sm font-extrabold whitespace-nowrap transition-all duration-300 ${
            selectedAge === option.value
              ? 'bg-menthe text-noir shadow-md shadow-menthe/30 scale-105'
              : 'bg-white text-gris border-2 border-gris-light hover:border-menthe hover:text-noir'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
