"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  projectFilters,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

// Chargé uniquement quand on clique sur un projet
const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

type Filter = (typeof projectFilters)[number];
const PAGE_SIZE = 6; // 3 columns × 2 rows

const decoColorMap: Record<Project["decoColor"], string> = {
  lime: "bg-lime",
  gray: "bg-white/30",
  black: "bg-white/10",
};

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const hasCover = Boolean(project.cover);

  return (
    <article onClick={onClick} className="group cursor-pointer">
      {/* Kicker au-dessus du bloc (projet mis en avant) */}
      {project.overline && (
        <p className="mb-2 font-serif text-[11px] italic tracking-wide text-lime sm:text-sm md:mb-3">
          {project.overline}
        </p>
      )}
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-ink md:rounded-2xl ${
          project.featured ? "ring-2 ring-white md:ring-[3px]" : ""
        }`}
      >
        {/* Cover */}
        {hasCover && project.cover!.type === "image" ? (
          <Image
            src={project.cover!.src}
            alt={
              ("alt" in project.cover! ? project.cover!.alt : undefined) ??
              project.title
            }
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            quality={40}
            loading="lazy"
            placeholder="empty"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : hasCover && project.cover!.type === "video" ? (
          <video
            src={project.cover!.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className={`absolute right-6 top-6 h-14 w-14 rounded-full transition-transform duration-700 group-hover:scale-110 ${decoColorMap[project.decoColor]}`}
            />
          </>
        )}

        {/* Gradient overlay from bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content at bottom */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 md:gap-3 md:p-6">
          <div className="min-w-0 flex-1">
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/60 sm:block">
              {project.tags.join(" · ")}
              {project.year && ` — ${project.year}`}
            </span>
            <h3 className="text-sm font-bold leading-tight text-white sm:mt-1 sm:text-lg md:text-xl">
              {project.title}
            </h3>
          </div>
          {project.logo && (
            <Image
              src={project.logo}
              alt=""
              width={60}
              height={60}
              className="h-8 w-8 flex-shrink-0 object-contain drop-shadow-lg sm:h-12 sm:w-12 md:h-[60px] md:w-[60px]"
            />
          )}
        </div>

        {/* Hover CTA — hidden on touch devices */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
          <span className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink">
            Voir le projet →
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("Tous");
  const [page, setPage] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "Tous") return projects;
    return projects.filter((p) =>
      p.tags.includes(active as ProjectCategory),
    );
  }, [active, projects]);

  // Reset page when filter changes
  const setFilter = useCallback((f: Filter) => {
    setActive(f);
    setPage(0);
  }, []);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <>
      <section
        id="projets"
        className="relative bg-ink text-white py-20 md:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Heading */}
          <div className="reveal mb-8 flex flex-col gap-3 md:mb-16 md:gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Portfolio
            </span>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
              Nos projets
            </h2>
          </div>

          {/* Filters — scrollable on mobile */}
          <div className="reveal reveal-delay-1 -mx-5 mb-8 overflow-x-auto px-5 md:mx-0 md:mb-12 md:overflow-visible md:px-0">
            <div className="flex gap-2.5 pb-2 md:flex-wrap md:gap-3 md:pb-0">
              {projectFilters.map((filter) => {
                const isActive = active === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setFilter(filter)}
                    className={`flex-shrink-0 rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 md:px-5 ${
                      isActive
                        ? "border-white bg-white text-ink"
                        : "border-white/25 text-white/70 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid: 3 columns × 2 rows */}
          <div className="grid gap-4 grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setOpenProject(project)}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-white/10 p-10 text-center md:p-16">
              <p className="text-white/60">
                Aucun projet dans cette cat&eacute;gorie pour le moment.
              </p>
            </div>
          )}

          {/* Navigation arrows below the grid */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4 md:mt-12">
              <button
                type="button"
                onClick={() => setPage((p) => p - 1)}
                disabled={!canPrev}
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg transition ${
                  canPrev
                    ? "border-white/30 text-white hover:bg-white hover:text-ink"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                }`}
                aria-label="Page pr&eacute;c&eacute;dente"
              >
                ←
              </button>
              <span className="text-sm text-white/50">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={!canNext}
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg transition ${
                  canNext
                    ? "border-white/30 text-white hover:bg-white hover:text-ink"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                }`}
                aria-label="Page suivante"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  );
}
