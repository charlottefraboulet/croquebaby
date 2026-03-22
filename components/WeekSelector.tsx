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
    <div className="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-hide">
      {AGE_OPTIONS.map(option => (
        <button
          key={option.value}
          onClick={() => onAgeChange(option.value)}
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
            selectedAge === option.value
              ? 'bg-rose text-white shadow-md scale-105'
              : 'bg-white text-brun border border-rose-light hover:bg-rose-light'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
