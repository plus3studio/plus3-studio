"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_ID = "instagram-embed-js";

/**
 * Embed d'une publication Instagram (post carrousel ou reel).
 * Le carrousel se feuillette dans la carte, sans quitter le site.
 */
export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    }
    const t = setTimeout(() => window.instgrm?.Embeds?.process(), 400);
    return () => clearTimeout(t);
  }, [url]);

  const permalink = url.endsWith("/") ? url : `${url}/`;

  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 14,
        margin: 0,
        maxWidth: "100%",
        minWidth: "unset",
        width: "100%",
      }}
    />
  );
}
