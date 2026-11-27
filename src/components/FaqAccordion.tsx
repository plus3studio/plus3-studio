"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="divide-y divide-bone-200 border-y border-bone-200">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:text-ink md:py-6"
            >
              <span className="flex-1 text-base font-semibold text-ink md:text-lg">
                {it.q}
              </span>
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bone-200 text-ink transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-lime" : ""
                }`}
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M8 2.5v11M2.5 8h11" />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="pb-6 pr-10 text-base leading-relaxed text-ink/70">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
