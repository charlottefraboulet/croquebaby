import type { Metadata } from 'next';
import { Nunito, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'CroqueBaby — Diversification alimentaire',
  description: 'Guide de diversification alimentaire pour bébé de 6 à 12 mois',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} ${playfair.variable} font-sans`}>
        <main className="max-w-lg mx-auto px-5 pt-8 pb-28 min-h-screen">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
