import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navigation from '@/components/Navigation';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CroqueBaby — Diversification alimentaire',
  description: 'Guide de diversification alimentaire pour bébé de 6 à 12 mois',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={nunito.className}>
        <main className="max-w-lg mx-auto px-4 pt-6 pb-24 min-h-screen">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
