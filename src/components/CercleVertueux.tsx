"use client";

import { useState } from "react";

type Step = {
  n: number;
  label: string;
  desc: string;
  icon: React.ReactNode;
};

const I = {
  com: <path d="M3 11l18-7-4 18-5-6-4 4V12z" />,
  eye: (
    <>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  media: (
    <>
      <path d="M4 5h13v14H4z" />
      <path d="M17 9h3v8a2 2 0 0 1-2 2M7 9h6M7 13h6M7 17h4" />
    </>
  ),
  hands: <path d="M3 12l4-4 4 4 3-3 4 4M2 12l5 5h4l3-3M13 9l3-3 5 5-3 3" />,
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 15h6M8 20h8M12 17v3" />
    </>
  ),
  deal: (
    <>
      <path d="M12 3l2.5 2 3.2-.3.7 3.1 2.6 1.9-1.5 2.8 1.5 2.8-2.6 1.9-.7 3.1-3.2-.3L12 21l-2.5-2-3.2.3-.7-3.1L3 14.3l1.5-2.8L3 8.7l2.6-1.9.7-3.1 3.2.3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  euro: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 8.5A4 4 0 0 0 9 11h5M9 13h5a4 4 0 0 1-5.5 2.3M7.5 11H14M7.5 13H13" />
    </>
  ),
};

const STEPS: Step[] = [
  {
    n: 1,
    label: "Investir dans la communication",
    desc: "Un investissement, pas une dépense : photo, vidéo et vraie direction artistique.",
    icon: I.com,
  },
  {
    n: 2,
    label: "Gagner en visibilité",
    desc: "Un contenu soigné est vu, partagé et remarqué sur les réseaux.",
    icon: I.eye,
  },
  {
    n: 3,
    label: "Intérêt des médias & e-réputation",
    desc: "Les médias relaient, votre image en ligne se renforce.",
    icon: I.media,
  },
  {
    n: 4,
    label: "Intérêt des clubs & des agents",
    desc: "Une image professionnelle attire l'œil des clubs et des agents.",
    icon: I.hands,
  },
  {
    n: 5,
    label: "De meilleures opportunités",
    desc: "Transferts, essais, sélections : les portes s'ouvrent.",
    icon: I.trophy,
  },
  {
    n: 6,
    label: "Sponsors & partenaires",
    desc: "Votre visibilité séduit les marques et génère des partenariats.",
    icon: I.deal,
  },
  {
    n: 7,
    label: "Des revenus supplémentaires",
    desc: "Ces contrats vous rapportent… de quoi réinvestir dans la com. Le cercle repart, en plus grand.",
    icon: I.euro,
  },
];

function tint(i: number) {
  const t = i / (STEPS.length - 1);
  const r = Math.round(245 + (255 - 245) * t);
  const g = Math.round(242 + (217 - 242) * t);
  const b = Math.round(236 + (217 - 236) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

const R = 30; // rayon des pastilles (% du conteneur)
function node(i: number) {
  const a = (-90 + (360 / STEPS.length) * i) * (Math.PI / 180);
  return { cos: Math.cos(a), sin: Math.sin(a), x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
}

function Pastille({ s, i, active, onHover }: { s: Step; i: number; active: boolean; onHover: (n: number) => void }) {
  const p = node(i);
  const side = p.cos > 0.25 ? "right" : p.cos < -0.25 ? "left" : "center";

  const textPos =
    side === "right"
      ? "left-full top-1/2 ml-3 -translate-y-1/2 items-start text-left"
      : side === "left"
        ? "right-full top-1/2 mr-3 -translate-y-1/2 items-end text-right"
        : "bottom-full left-1/2 mb-3 -translate-x-1/2 items-center text-center";

  return (
    <div
      className="group absolute z-10"
      style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%,-50%)" }}
      onMouseEnter={() => onHover(i)}
      onMouseLeave={() => onHover(-1)}
    >
      {/* pastille */}
      <div
        className={`relative flex h-14 w-14 cursor-default items-center justify-center rounded-full ring-1 ring-black/5 transition-transform duration-300 ${
          active ? "scale-110" : ""
        }`}
        style={{ background: tint(i) }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {s.icon}
        </svg>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white">
          {s.n}
        </span>
      </div>

      {/* bloc texte, en dehors du cercle */}
      <div className={`pointer-events-none absolute flex w-44 flex-col ${textPos}`}>
        <p className="text-sm font-bold leading-tight text-ink">{s.label}</p>
        <p
          className={`mt-1 text-xs leading-snug text-ink/60 transition-all duration-300 ${
            active ? "max-h-28 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          {s.desc}
        </p>
      </div>
    </div>
  );
}

export default function CercleVertueux() {
  const [active, setActive] = useState<number>(-1);

  return (
    <div className="mt-12">
      {/* DESKTOP : cercle */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r={R} fill="none" stroke="#dc2626" strokeOpacity="0.3" strokeWidth="0.4" strokeDasharray="1.4 1.4" />
          {/* flèches sens horaire */}
          <polygon points="80.4,48 82.4,50 80.4,52" fill="#dc2626" fillOpacity="0.55" />
          <polygon points="19.6,52 17.6,50 19.6,48" fill="#dc2626" fillOpacity="0.55" />
        </svg>
        {STEPS.map((s, i) => (
          <Pastille key={s.n} s={s} i={i} active={active === i} onHover={setActive} />
        ))}
      </div>

      {/* MOBILE / TABLETTE : liste */}
      <div className="lg:hidden">
        <ol className="space-y-3">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-2xl border border-bone-200 bg-white p-4"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5"
                style={{ background: tint(i) }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-ink">
                  <span className="text-red-600">{s.n}.</span> {s.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-ink/60">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
