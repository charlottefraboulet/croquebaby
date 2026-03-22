interface ProgressBarProps {
  label: string;
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({ label, current, total, color = 'bg-menthe' }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-noir">{label}</span>
        <span className="text-xs font-extrabold text-gris">{current}/{total}</span>
      </div>
      <div className="h-3 bg-gris-light rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
