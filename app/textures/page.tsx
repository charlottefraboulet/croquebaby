'use client';

import { textureGuides, sarahMachetoTips } from '@/data/textures';
import WaveSeparator from '@/components/WaveSeparator';

export default function TexturesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Guide pratique</p>
        <h1 className="text-3xl font-black text-noir mt-1">Textures</h1>
        <p className="text-sm text-gris font-medium mt-1">
          <span className="font-serif italic">Adapter la texture à l&apos;âge de bébé</span>
        </p>
      </div>

      {/* Textures par âge */}
      <div className="space-y-4">
        {textureGuides.map((guide, i) => {
          const bgColors = ['bg-menthe-light', 'bg-blush-light', 'bg-jaune-light', 'bg-bleu-light'];
          return (
            <div key={i} className={`${bgColors[i % 4]} rounded-3xl p-6 space-y-4`}>
              <span className="inline-block text-xs px-4 py-1.5 rounded-full bg-white font-extrabold text-noir shadow-sm">
                {guide.ageRange}
              </span>
              <p className="text-sm font-bold text-noir leading-relaxed">{guide.description}</p>

              <div>
                <p className="text-[10px] font-extrabold text-gris uppercase tracking-widest mb-2">Exemples</p>
                <ul className="space-y-1.5">
                  {guide.examples.map((example, j) => (
                    <li key={j} className="text-xs text-noir flex items-start gap-2">
                      <span className="text-menthe-dark font-black mt-px">●</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-extrabold text-gris uppercase tracking-widest mb-2">Conseils</p>
                <ul className="space-y-1.5">
                  {guide.tips.map((tip, j) => (
                    <li key={j} className="text-xs text-noir flex items-start gap-2">
                      <span className="flex-shrink-0">💡</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <WaveSeparator color="#E9F6F0" />

      {/* Conseils Dr Macheto */}
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gris">Recommandations PNNS 4</p>
          <h2 className="text-xl font-black text-noir mt-1">
            <span className="font-serif italic font-normal">Dr</span> Sarah Macheto Grego
          </h2>
        </div>
        <div className="space-y-3">
          {sarahMachetoTips.map((tip, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-noir">{tip.title}</h3>
                  <p className="text-xs text-gris mt-1.5 leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveSeparator color="#FDF0EC" />

      {/* Aliments interdits */}
      <div className="bg-red-50 rounded-3xl p-6 space-y-3">
        <h2 className="font-extrabold text-red-800 flex items-center gap-2">
          <span>⛔</span> Interdits avant 1 an
        </h2>
        <ul className="space-y-2">
          {[
            'Miel (risque de botulisme)',
            'Viande crue ou peu cuite',
            'Poisson cru (sushi, sashimi)',
            'Lait cru et fromage au lait cru',
            'Œufs crus ou peu cuits',
            'Fruits à coque entiers (fausse route)',
            'Sel ajouté',
            'Sucre ajouté',
          ].map((item, i) => (
            <li key={i} className="text-xs text-red-700 flex items-center gap-2 font-medium">
              <span>🚫</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Poissons à éviter */}
      <div className="bg-orange-50 rounded-3xl p-6 space-y-4">
        <h2 className="font-extrabold text-orange-800 flex items-center gap-2">
          <span>⚠️</span> Poissons à éviter
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-[10px] font-extrabold text-orange-800 uppercase tracking-widest">Interdits (métaux lourds)</p>
            <p className="text-xs text-orange-700 mt-1 font-medium">Espadon, marlin, siki, requin, lamproie</p>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-orange-800 uppercase tracking-widest">Interdits (PCB)</p>
            <p className="text-xs text-orange-700 mt-1 font-medium">Anguille, barbeau, brème, carpe, silure</p>
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-orange-800 uppercase tracking-widest">À limiter</p>
            <p className="text-xs text-orange-700 mt-1 font-medium">Lotte, loup, thon, dorade, raie, brochet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
