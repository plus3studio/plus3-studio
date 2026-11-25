"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "639 584", label: "vues cumulées en un mois" },
  { value: "310 302", label: "comptes touchés" },
  { value: "14 883", label: "interactions" },
  { value: "×2,07", label: "de vues par publication vs saison précédente" },
  { value: "9 pays", label: "2 continents, 13 départements" },
  { value: "4 400", label: "sessions sur le nouveau site" },
];

type Parsed = { prefix: string; num: number; decimals: number; suffix: string };

function parseValue(value: string): Parsed {
  const m = value.match(/^(×?)\s*([\d  .,]+)\s*(.*)$/u);
  if (!m) return { prefix: "", num: 0, decimals: 0, suffix: value };
  const prefix = m[1] ?? "";
  const raw = m[2].replace(/[\s ]/g, "");
  const decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
  const num = parseFloat(raw.replace(",", "."));
  return { prefix, num, decimals, suffix: m[3] ?? "" };
}

function format(n: number, decimals: number): string {
  if (decimals > 0) return n.toFixed(decimals).replace(".", ",");
  return Math.round(n).toLocaleString("fr-FR");
}

function Stat({ value, label, run }: { value: string; label: string; run: boolean }) {
  const parsed = parseValue(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(parsed.num * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, parsed.num]);

  return (
    <div>
      <p className="text-3xl font-bold text-lime md:text-4xl">
        {parsed.prefix}
        {format(n, parsed.decimals)}
        {parsed.suffix ? ` ${parsed.suffix}` : ""}
      </p>
      <p className="mt-2 text-sm text-white/50">{label}</p>
    </div>
  );
}

export default function StatsResultats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
        Un mois, un lancement international
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
        {STATS.map((s) => (
          <Stat key={s.value} value={s.value} label={s.label} run={run} />
        ))}
      </div>
    </div>
  );
}
