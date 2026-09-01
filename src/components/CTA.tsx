"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

// ═══════════════════════════════════════════════════════════════════════════
// Pour que le formulaire envoie les mails directement :
// 1. Va sur https://web3forms.com/
// 2. Entre l'email du studio : contact@plus3studio.fr
// 3. Tu recevras un "access key" par mail — colle-le ci-dessous :
// ═══════════════════════════════════════════════════════════════════════════
const WEB3FORMS_KEY = "9ca242e2-f7aa-4067-8ac3-28afac1057c4";

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Si pas de clé Web3Forms, fallback mailto
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Nouveau projet — ${name}`);
      const body = encodeURIComponent(
        `Nom : ${name}\nEmail : ${email}\n\n${message}`,
      );
      window.open(
        `mailto:${site.email}?subject=${subject}&body=${body}`,
        "_self",
      );
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau projet — ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative bg-bone-100 py-20 md:py-28 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-bone-200" />

      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="text-center">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Contact
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl lg:whitespace-nowrap">
            Un projet sportif en t&ecirc;te&nbsp;?
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-xl text-sm text-mist-500 md:mt-4 md:text-base">
            On en discute autour d'un caf&eacute; — ou d'un terrain.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal reveal-delay-3 mt-12 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
              >
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.fr"
                className="w-full rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
            >
              Votre projet
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="D&eacute;crivez bri&egrave;vement votre projet, vos besoins, votre timing..."
              className="w-full resize-none rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
            />
          </div>

          <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-lime disabled:opacity-50"
            >
              {sent
                ? "Message envoy\u00e9 \u2713"
                : error
                  ? "Erreur, r\u00e9essayez"
                  : loading
                    ? "Envoi en cours\u2026"
                    : "Envoyer le message"}
              {!sent && !loading && !error && (
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
            <a
              href={`mailto:${site.email}`}
              className="text-center text-sm text-mist-500 underline decoration-bone-200 underline-offset-4 transition hover:text-ink hover:decoration-ink sm:text-left"
            >
              {site.email}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
