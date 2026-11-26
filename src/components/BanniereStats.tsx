"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "locale",
  "départementale",
  "régionale",
  "nationale",
  "internationale",
];

function useCountUp(target: number, run: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return n;
}

/** Les 3 chiffres du bandeau Club Ambassadeur (home) :
 *  les vues et les pays défilent de 0, et le mot monte en échelle,
 *  tout se déclenche ensemble quand le bloc entre dans la vue. */
export default function BanniereStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;
    if (wordIdx >= WORDS.length - 1) return;
    const t = setTimeout(() => setWordIdx((i) => i + 1), 520);
    return () => clearTimeout(t);
  }, [run, wordIdx]);

  const vues = useCountUp(639584, run);
  const pays = useCountUp(9, run);

  return (
    <div
      ref={ref}
      className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
    >
      <style>{`@keyframes banWordIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>

      <div>
        <p className="text-xl font-bold text-lime sm:text-2xl">
          {Math.round(vues).toLocaleString("fr-FR")}
        </p>
        <p className="mt-1 text-xs text-white/40 sm:text-sm">vues en un mois</p>
      </div>

      <div>
        <p className="text-xl font-bold text-lime sm:text-2xl">
          {Math.round(pays)} pays
        </p>
        <p className="mt-1 text-xs text-white/40 sm:text-sm">
          de ventes de maillots · 13 départements français
        </p>
      </div>

      <div>
        <p className="text-xl font-bold text-lime sm:text-2xl">
          <span className="whitespace-nowrap">
            Presse{" "}
            <span
              key={wordIdx}
              style={{ display: "inline-block", animation: "banWordIn .3s ease" }}
            >
              {WORDS[wordIdx]}
            </span>
          </span>
        </p>
        <p className="mt-1 text-xs text-white/40 sm:text-sm">
          SoccerBible, Footy Headlines, Dégaine, France 3
        </p>
      </div>
    </div>
  );
}
