import { site } from "@/data/site";

const ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path
      d="M14 3c.3 2.2 1.7 3.8 3.9 4v2.6c-1.4 0-2.7-.4-3.9-1.1v5.6a5.1 5.1 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.5 2.5 0 1 0 1.7 2.3V3H14z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path
        d="M7 10v7M7 7.2v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"
        fill="none"
      />
    </>
  ),
  facebook: (
    <path
      d="M14 8.5V7c0-.8.5-1 1-1h1.5V3H14c-2.2 0-3.5 1.4-3.5 3.6V8.5H8V12h2.5v9H14v-9h2.3l.5-3.5H14z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

function iconFor(label: string): React.ReactNode | null {
  const key = Object.keys(ICONS).find((k) => label.toLowerCase().includes(k));
  return key ? ICONS[key] : null;
}

type Props = {
  /** "dark" = sur fond clair (icônes sombres), "light" = sur fond sombre (icônes claires) */
  variant?: "dark" | "light";
  className?: string;
};

export default function SocialIcons({ variant = "light", className }: Props) {
  const base =
    variant === "light"
      ? "border-white/15 text-white/80 hover:border-lime hover:text-lime"
      : "border-bone-200 text-ink/70 hover:border-ink hover:text-ink";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      {site.socials.map((s) => {
        const icon = iconFor(s.label);
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${base}`}
          >
            {icon ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {icon}
              </svg>
            ) : (
              <span className="text-xs font-semibold">{s.label.slice(0, 2)}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
