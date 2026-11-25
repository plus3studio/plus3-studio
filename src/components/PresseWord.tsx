"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "locale",
  "départementale",
  "régionale",
  "nationale",
  "internationale",
];

/**
 * Affiche "Presse <mot>" où le mot monte en échelle
 * (locale → départementale → régionale → nationale → internationale)
 * au moment où le bloc entre dans la vue, puis se fige sur "internationale".
 */
export default function PresseWord() {
  const ref = useRef<HTMLSpanElement>(null);
  const [idx, setIdx] = useState(0);
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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;
    if (idx >= WORDS.length - 1) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 520);
    return () => clearTimeout(t);
  }, [run, idx]);

  return (
    <span ref={ref} className="whitespace-nowrap">
      <style>{`@keyframes presseWordIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
      Presse{" "}
      <span
        key={idx}
        style={{ display: "inline-block", animation: "presseWordIn .3s ease" }}
      >
        {WORDS[idx]}
      </span>
    </span>
  );
}
