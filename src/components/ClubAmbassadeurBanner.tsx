import Image from "next/image";
import Link from "next/link";
import BanniereStats from "./BanniereStats";

export default function ClubAmbassadeurBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-28">
      {/* Fond photo */}
      <Image
        src="/cas-ligugeenne/banner-ca.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_50%,rgba(10,10,10,0.84)_0%,rgba(10,10,10,0.6)_55%,rgba(10,10,10,0.74)_100%)]"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
        <img
          src="/ca-liguge-logo.png"
          alt="Ligugé — Club Ambassadeur +3 Studio"
          className="mx-auto w-full max-w-[240px] md:max-w-xs"
        />
        <p className="mx-auto mt-6 max-w-2xl text-sm text-white/55 sm:text-base md:text-lg">
          En novembre 2025, +3 Studio a lanc&eacute; son programme Club Ambassadeur :
          offrir &agrave; un club amateur une saison enti&egrave;re de communication de
          niveau professionnel. Apr&egrave;s plus d&rsquo;une centaine de candidatures,
          La Ligug&eacute;enne a &eacute;t&eacute; le club choisi. &Agrave; la cl&eacute; :
          une nouvelle identit&eacute;, un nouveau logo, un site e-commerce, un maillot
          collector avec Kappa, et une port&eacute;e qui a d&eacute;pass&eacute; les
          fronti&egrave;res.
        </p>

        <Link
          href="/club-ambassadeur"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-all hover:brightness-95"
        >
          D&eacute;couvrir le projet
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>

        {/* Chiffres clés */}
        <BanniereStats />

        <p className="mt-8 font-display text-xl italic text-lime sm:text-2xl">
          Et ce n&rsquo;est pas fini.
        </p>
      </div>
    </section>
  );
}
