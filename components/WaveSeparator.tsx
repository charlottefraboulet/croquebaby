interface WaveSeparatorProps {
  color?: string;
  flip?: boolean;
}

export default function WaveSeparator({ color = '#E9F6F0', flip = false }: WaveSeparatorProps) {
  return (
    <div className={`w-full h-8 -mx-5 ${flip ? 'rotate-180' : ''}`} style={{ marginLeft: '-1.25rem', width: 'calc(100% + 2.5rem)' }}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
