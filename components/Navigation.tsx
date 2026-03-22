'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/checklist', label: 'Checklist', icon: '✅' },
  { href: '/recettes', label: 'Recettes', icon: '👩‍🍳' },
  { href: '/textures', label: 'Textures', icon: '🥄' },
  { href: '/progression', label: 'Progrès', icon: '📊' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-menthe/30 z-50">
      <div className="max-w-lg mx-auto flex justify-around items-center h-[68px] px-2">
        {navItems.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-menthe-light scale-105'
                  : 'hover:bg-gris-light'
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span className={`text-[10px] font-bold tracking-wide ${
                isActive ? 'text-noir' : 'text-gris'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
