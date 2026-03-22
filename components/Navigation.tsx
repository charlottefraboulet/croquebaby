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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-light shadow-lg z-50">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16">
        {navItems.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-rose scale-110'
                  : 'text-brun-light hover:text-brun'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
