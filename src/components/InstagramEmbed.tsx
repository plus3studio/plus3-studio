"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_ID = "instagram-embed-js";

/**
 * Embed d'une publication Instagram (carrousel photo ou reel).
 *
 * Le blockquote est injecté en innerHTML dans un div que React ne gère pas :
 * le script Instagram remplace ensuite ce noeud sans entrer en conflit avec
 * le rendu React (sinon page blanche au re-render).
 */
export default function InstagramEmbed({ url }: { url: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const permalink = url.endsWith("/") ? url : `${url}/`;
    host.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="margin:0;width:100%;min-width:0;max-width:540px;"></blockquote>`;

    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    }

    const process = () => window.instgrm?.Embeds?.process();
    const t1 = setTimeout(process, 300);
    const t2 = setTimeout(process, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [url]);

  return <div ref={hostRef} className="ig-embed w-full" />;
}
