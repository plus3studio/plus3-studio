"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { team, type TeamMember } from "@/data/team";

function MemberAvatar({ member, size = "md" }: { member: TeamMember; size?: "md" | "lg" }) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPhoto = Boolean(member.photo) && !imgFailed;
  const sizeClasses = size === "lg"
    ? "h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44"
    : "h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32";

  return (
    <div className={`relative overflow-hidden rounded-full bg-ink ${sizeClasses}`}>
      {hasPhoto ? (
        <Image
          src={member.photo as string}
          alt={member.firstName}
          fill
          sizes={size === "lg" ? "176px" : "128px"}
          className="object-cover"
          loading="eager"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold tracking-wider text-lime">
          {member.initials}
        </div>
      )}
    </div>
  );
}

function ExpandedProfile({ member }: { member: TeamMember }) {
  const hasSocials =
    member.socials &&
    Object.values(member.socials).some((v) => v && v.length > 0);

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-12">
      {/* Photo */}
      {member.photo && (
        <div className="relative mx-auto h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl bg-bone-200 sm:h-56 sm:w-56 md:mx-0 md:h-64 md:w-64">
          <Image
            src={member.photo}
            alt={member.firstName}
            fill
            sizes="256px"
            className="object-cover"
            loading="eager"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 space-y-6">
        {/* Name + role */}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight">
            {member.firstName}
          </h3>
          <p className="mt-1 text-sm text-mist-500">{member.role}</p>
        </div>

        {/* Instagram + Email */}
        {(member.instagram_handle || member.email) && (
          <div className="flex flex-wrap gap-3">
            {member.instagram_handle && (
              <a
                href={
                  member.socials?.instagram ||
                  `https://instagram.com/${member.instagram_handle.replace("@", "")}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                {member.instagram_handle}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-medium text-ink transition hover:bg-ink hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {member.email}
              </a>
            )}
          </div>
        )}

        {/* Bio */}
        {member.bio && (
          <p className="text-sm leading-relaxed text-ink/80">{member.bio}</p>
        )}

        {/* Expertise block */}
        {member.expertise && (
          <div className="rounded-xl bg-ink p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-lime/70">
              Expertise
            </p>
            <h4 className="mt-2 text-lg font-bold text-white">
              {member.expertise.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {member.expertise.description}
            </p>
          </div>
        )}

        {/* Specialties */}
        {member.specialties && member.specialties.length > 0 && (
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-mist-400">
              Comp&eacute;tences
            </p>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink/10 bg-bone-100 px-3 py-1.5 text-[11px] font-medium text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Socials */}
        {hasSocials && (
          <div className="flex flex-wrap gap-3 pt-2">
            {Object.entries(member.socials!).map(([key, url]) => {
              if (!url) return null;
              if (key === "instagram") return null; // already shown above
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white transition hover:bg-lime hover:text-ink"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <span className="transition group-hover:translate-x-0.5">&nearr;</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reveal animation managed via React state (not DOM class) to survive re-renders
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (expandedId && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    }
  }, [expandedId]);

  const revealClass = (delay = 0) =>
    `transition-all duration-700 ease-out ${
      sectionVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    }${delay ? ` delay-[${delay}ms]` : ""}`;

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="relative bg-white py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <div className={`mb-10 flex flex-col items-center gap-3 text-center md:mb-20 md:gap-4 ${revealClass()}`}>
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le collectif
          </span>
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-6xl">
            Qui sommes-nous
          </h2>
          <p className="mt-3 max-w-xl text-sm text-mist-500 md:mt-4 md:text-base">
            Deux cofondateurs, un r&eacute;seau de cr&eacute;atifs. On r&eacute;unit sur chaque projet
            les bons profils (photo, vid&eacute;o, graphisme, motion) pour construire une image
            &agrave; la hauteur de vos ambitions sportives.
          </p>
        </div>

        {/* 3 avatars — always 3 cols, even on mobile */}
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:gap-8 md:gap-10">
          {team.map((member, i) => {
            const isActive = expandedId === member.id;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() =>
                  setExpandedId(isActive ? null : member.id)
                }
                style={{ transitionDelay: sectionVisible ? `${(i + 1) * 80}ms` : "0ms" }}
                className={`group flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${isActive ? "scale-[1.02]" : ""}`}
              >
                <div className="relative">
                  <div className={`transition-transform duration-500 ${isActive ? "scale-105" : "group-hover:scale-105"}`}>
                    <MemberAvatar member={member} size="lg" />
                  </div>
                  <div
                    className={`pointer-events-none absolute -inset-2 rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? "border-lime -inset-3"
                        : "border-transparent group-hover:-inset-3 group-hover:border-bone-200"
                    }`}
                  />
                </div>

                <h3 className="mt-3 text-base font-semibold text-ink sm:mt-5 sm:text-xl md:text-2xl">
                  {member.firstName}
                </h3>
                <p className="mt-0.5 text-[11px] text-mist-500 sm:mt-1 sm:text-sm">
                  {member.expertise?.title ?? member.role}
                </p>
                <span className={`mt-2 text-[11px] font-medium transition sm:mt-3 sm:text-xs ${isActive ? "text-ink" : "text-mist-500"}`}>
                  {isActive ? "R\u00e9duire \u2715" : "Voir le profil \u2192"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Single panel container — stays open when switching profiles */}
        <div
          ref={panelRef}
          className={`mx-auto max-w-5xl overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            expandedId !== null
              ? "mt-12 max-h-[2000px] opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-bone-200 bg-bone-50 p-5 sm:rounded-3xl sm:p-8 md:p-12">
            {team.map((member) => (
              <div
                key={member.id}
                className={expandedId === member.id ? "" : "hidden"}
              >
                <ExpandedProfile member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
