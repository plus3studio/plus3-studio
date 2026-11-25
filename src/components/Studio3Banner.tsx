export default function Studio3Banner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-28">
      {/* Volt accent glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-lime/10 blur-[100px]"
      />

      {/* Volt top border accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
        <img
          src="/logo.png"
          alt="+3 Studio"
          className="mx-auto h-14 w-auto object-contain md:h-20"
        />
        <h2 className="mt-8 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          L&rsquo;agence cr&eacute;ative <span className="text-lime">du sport.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/50 sm:text-base md:text-lg">
          Direction artistique, vid&eacute;o, photo et graphisme. Un r&eacute;seau 360
          au service de vos clubs, joueurs, institutions et &eacute;v&eacute;nements
          sportifs.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-all hover:brightness-95"
        >
          Discutons de votre projet
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}
