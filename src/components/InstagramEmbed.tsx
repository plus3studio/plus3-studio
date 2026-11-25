"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Embed Instagram via iframe native (pas de script instagram.com).
 * Robuste : une iframe ne peut pas faire planter le rendu React.
 * La hauteur s'ajuste via le postMessage que renvoie la page /embed.
 */
export default function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(560);

  const code = url.match(/\/(?:p|reel|tv)\/([^/?#]+)/)?.[1] ?? "";
  const src = `https://www.instagram.com/p/${code}/embed/captioned`;

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("instagram.com")) {
        return;
      }
      if (ref.current && e.source && e.source !== ref.current.contentWindow) {
        return;
      }
      let data: unknown = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      const d = data as { type?: string; details?: { height?: number }; height?: number };
      const h = d?.details?.height ?? d?.height;
      if (typeof h === "number" && h > 240) setHeight(Math.ceil(h));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!code) return null;

  return (
    <iframe
      ref={ref}
      src={src}
      title="Publication Instagram"
      loading="lazy"
      scrolling="no"
      allowFullScreen
      className="w-full rounded-2xl border border-bone-200 bg-white"
      style={{ height }}
    />
  );
}
