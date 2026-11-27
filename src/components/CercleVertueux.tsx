type Step = {
  n: number;
  label: string;
  icon: React.ReactNode;
};

// Pictos ligne, cohérents (stroke currentColor)
const I = {
  com: (
    <path d="M3 11l18-7-4 18-5-6-4 4V12z" />
  ),
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
  hands: (
    <path d="M3 12l4-4 4 4 3-3 4 4M2 12l5 5h4l3-3M13 9l3-3 5 5-3 3" />
  ),
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
  { n: 1, label: "Investir dans la communication", icon: I.com },
  { n: 2, label: "Gagner en visibilité", icon: I.eye },
  { n: 3, label: "Intérêt des médias & e-réputation", icon: I.media },
  { n: 4, label: "Intérêt des clubs & des agents", icon: I.hands },
  { n: 5, label: "De meilleures opportunités sportives", icon: I.trophy },
  { n: 6, label: "Des contrats sponsors & partenaires", icon: I.deal },
  { n: 7, label: "Des revenus supplémentaires", icon: I.euro },
];

// Teinte de fond qui monte de neutre (étape 1) vers rouge (étape 7)
function tint(i: number) {
  const t = i / (STEPS.length - 1); // 0 → 1
  // de bone #f5f2ec vers rouge clair #ffd9d9
  const r = Math.round(245 + (255 - 245) * t);
  const g = Math.round(242 + (217 - 242) * t);
  const b = Math.round(236 + (217 - 236) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

// Positions autour du cercle (desktop)
const R = 39;
function pos(i: number) {
  const a = (-90 + (360 / STEPS.length) * i) * (Math.PI / 180);
  return { left: `${50 + R * Math.cos(a)}%`, top: `${50 + R * Math.sin(a)}%` };
}

function Node({ s, i }: { s: Step; i: number }) {
  return (
    <div
      className="flex w-32 flex-col items-center text-center"
      style={{ background: "transparent" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-black/5 shadow-sm"
        style={{ background: tint(i) }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {s.icon}
        </svg>
      </div>
      <span className="mt-2 text-sm font-bold text-red-600">{s.n}</span>
      <span className="mt-0.5 text-xs font-medium leading-tight text-ink/80">
        {s.label}
      </span>
    </div>
  );
}

export default function CercleVertueux() {
  return (
    <div className="mt-12">
      {/* DESKTOP : cercle */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[600px] lg:block">
        {/* anneau pointillé */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#dc2626"
            strokeOpacity="0.35"
            strokeWidth="0.5"
            strokeDasharray="1.5 1.5"
          />
          {/* flèches de sens horaire */}
          <polygon points="89,47 92,50 89,53" fill="#dc2626" fillOpacity="0.6" />
          <polygon points="11,53 8,50 11,47" fill="#dc2626" fillOpacity="0.6" />
        </svg>

        {/* centre : réinvestissement */}
        <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink p-4 text-center text-white">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 15-6.7L21 7" />
            <path d="M21 3v4h-4" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 17" />
            <path d="M3 21v-4h4" />
          </svg>
          <p className="mt-2 text-sm font-bold leading-tight">
            Les revenus sont réinvestis dans la com&rsquo;
          </p>
        </div>

        {/* noeuds */}
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={pos(i)}
          >
            <Node s={s} i={i} />
          </div>
        ))}
      </div>

      {/* MOBILE / TABLETTE : liste verticale qui boucle */}
      <div className="lg:hidden">
        <ol className="relative space-y-3 border-l-2 border-dashed border-red-600/30 pl-6">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              <span
                className="absolute -left-[33px] flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black/5"
                style={{ background: tint(i) }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <div className="flex items-baseline gap-3 rounded-xl border border-bone-200 bg-white px-4 py-3">
                <span className="text-sm font-bold text-red-600">{s.n}</span>
                <span className="text-sm font-medium text-ink/85">{s.label}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-ink px-4 py-3 text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 15-6.7L21 7" />
            <path d="M21 3v4h-4" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 17" />
            <path d="M3 21v-4h4" />
          </svg>
          <p className="text-sm font-semibold leading-tight">
            Les revenus sont réinvestis dans la com&rsquo; : le cercle repart, en plus
            grand.
          </p>
        </div>
      </div>
    </div>
  );
}
