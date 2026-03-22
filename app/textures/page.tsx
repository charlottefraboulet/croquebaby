'use client';

import { textureGuides, sarahMachetoTips } from '@/data/textures';

export default function TexturesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-brun">Guide des textures</h1>
        <p className="text-sm text-brun-light">Comment adapter la texture à l&apos;âge de bébé</p>
      </div>

      {/* Texture par âge */}
      <div className="space-y-4">
        {textureGuides.map((guide, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-rose text-white font-bold">
                {guide.ageRange}
              </span>
            </div>
            <p className="text-sm text-brun font-medium">{guide.description}</p>

            <div>
              <p className="text-[10px] font-bold text-brun uppercase tracking-wide mb-1">Exemples</p>
              <ul className="space-y-0.5">
                {guide.examples.map((example, j) => (
                  <li key={j} className="text-xs text-brun-light flex items-start gap-1.5">
                    <span className="text-menthe mt-0.5">●</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold text-brun uppercase tracking-wide mb-1">Conseils</p>
              <ul className="space-y-0.5">
                {guide.tips.map((tip, j) => (
                  <li key={j} className="text-xs text-brun-light flex items-start gap-1.5">
                    <span className="text-jaune mt-0.5">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Conseils Dr Macheto */}
      <div className="space-y-3">
        <h2 className="text-lg font-black text-brun flex items-center gap-2">
          <span>👩‍⚕️</span> Recommandations du Dr Macheto
        </h2>
        <p className="text-xs text-brun-light">
          Basées sur les recommandations PNNS 4 (2019) et la thèse du Dr Sarah Macheto Grego
        </p>
        <div className="space-y-2">
          {sarahMachetoTips.map((tip, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-brun">{tip.title}</h3>
                  <p className="text-xs text-brun-light mt-1 leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aliments interdits */}
      <div className="bg-red-50 rounded-2xl p-4 shadow-sm space-y-2">
        <h2 className="text-sm font-bold text-red-800 flex items-center gap-2">
          <span>⛔</span> Aliments interdits avant 1 an
        </h2>
        <ul className="space-y-1">
          {[
            'Miel (risque de botulisme)',
            'Viande crue ou peu cuite',
            'Poisson cru (sushi, sashimi)',
            'Lait cru et fromage au lait cru',
            'Œufs crus ou peu cuits',
            'Fruits à coque entiers (risque de fausse route)',
            'Sel ajouté',
            'Sucre ajouté',
          ].map((item, i) => (
            <li key={i} className="text-xs text-red-700 flex items-center gap-1.5">
              <span>🚫</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Poissons à éviter */}
      <div className="bg-orange-50 rounded-2xl p-4 shadow-sm space-y-2">
        <h2 className="text-sm font-bold text-orange-800 flex items-center gap-2">
          <span>⚠️</span> Poissons à éviter (Dr Macheto)
        </h2>
        <div className="space-y-2">
          <div>
            <p className="text-[10px] font-bold text-orange-800 uppercase">Interdits (métaux lourds)</p>
            <p className="text-xs text-orange-700">Espadon, marlin, siki, requin, lamproie</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-orange-800 uppercase">Interdits (PCB)</p>
            <p className="text-xs text-orange-700">Anguille, barbeau, brème, carpe, silure</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-orange-800 uppercase">À limiter</p>
            <p className="text-xs text-orange-700">Lotte, loup, thon, dorade, raie, brochet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
