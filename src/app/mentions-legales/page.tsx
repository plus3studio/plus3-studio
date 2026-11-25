import Link from "next/link";
import { site } from "@/data/site";

export const metadata = {
  title: "Mentions l\u00e9gales — +3 Studio",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            &larr; Retour au site
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Mentions l&eacute;gales
          </h1>
          <p className="mt-4 text-white/50">
            Conform&eacute;ment aux dispositions de la loi n&deg; 2004-575 du 21
            juin 2004 pour la confiance dans l&rsquo;&eacute;conomie
            num&eacute;rique.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-12 text-ink/80 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:md:text-2xl [&_p]:leading-relaxed [&_p]:mb-3">
          {/* 1. Éditeur */}
          <section>
            <h2>1. &Eacute;diteur du site</h2>
            <p>
              Le site <strong>plus3studio.fr</strong>{" "}est &eacute;dit&eacute; par&nbsp;:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Raison sociale :</strong> +3 Studio &mdash; collectif de
                freelances
              </li>
              <li>
                <strong>Responsable de la publication :</strong> Christopher DEBENHAM
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink underline underline-offset-2 hover:text-lime"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <strong>Statut :</strong> Micro-entrepreneurs / freelances
              </li>
            </ul>
          </section>

          {/* 2. Hébergeur */}
          <section>
            <h2>2. H&eacute;bergement</h2>
            <p>Le site est h&eacute;berg&eacute; par :</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Vercel Inc.</strong>
              </li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, &Eacute;tats-Unis</li>
              <li>
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-2 hover:text-lime"
                >
                  vercel.com
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Le nom de domaine <strong>plus3studio.fr</strong>{" "}est
              enregistr&eacute; aupr&egrave;s de IONOS (1&amp;1 Ionos SE).
            </p>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section>
            <h2>3. Propri&eacute;t&eacute; intellectuelle</h2>
            <p>
              L&rsquo;ensemble des contenus pr&eacute;sents sur le site
              plus3studio.fr (textes, images, photographies, vid&eacute;os,
              logos, cr&eacute;ations graphiques) sont la propri&eacute;t&eacute;
              exclusive de +3 Studio et/ou de ses clients respectifs, et sont
              prot&eacute;g&eacute;s par les lois fran&ccedil;aises et
              internationales relatives &agrave; la propri&eacute;t&eacute;
              intellectuelle.
            </p>
            <p>
              Toute reproduction, repr&eacute;sentation, modification,
              distribution ou exploitation, totale ou partielle, de ces contenus
              est strictement interdite sans autorisation &eacute;crite
              pr&eacute;alable de +3 Studio.
            </p>
          </section>

          {/* 4. Données personnelles */}
          <section>
            <h2>4. Donn&eacute;es personnelles &amp; RGPD</h2>
            <p>
              Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur
              la Protection des Donn&eacute;es (RGPD) et &agrave; la loi
              Informatique et Libert&eacute;s du 6 janvier 1978 modifi&eacute;e,
              vous disposez des droits suivants concernant vos donn&eacute;es
              personnelles :
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Droit d&rsquo;acc&egrave;s, de rectification et de suppression</li>
              <li>Droit &agrave; la portabilit&eacute; des donn&eacute;es</li>
              <li>Droit d&rsquo;opposition et de limitation du traitement</li>
            </ul>
            <p className="mt-3">
              Les seules donn&eacute;es collect&eacute;es sur ce site sont celles
              que vous transmettez volontairement via le formulaire de contact
              (nom, email, message). Ces donn&eacute;es sont utilis&eacute;es
              uniquement pour r&eacute;pondre &agrave; votre demande et ne sont
              ni conserv&eacute;es au-del&agrave; du n&eacute;cessaire, ni
              transmises &agrave; des tiers.
            </p>
            <p>
              Le traitement des donn&eacute;es du formulaire est assur&eacute;
              par le service Web3Forms (
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-lime"
              >
                politique de confidentialit&eacute;
              </a>
              ).
            </p>
            <p>
              Pour exercer vos droits, contactez-nous &agrave; :{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline underline-offset-2 hover:text-lime"
              >
                {site.email}
              </a>
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2>5. Cookies</h2>
            <p>
              Ce site n&rsquo;utilise aucun cookie publicitaire ni outil de
              suivi analytique. Aucun cookie n&rsquo;est d&eacute;pos&eacute;
              sur votre navigateur lors de votre visite.
            </p>
          </section>

          {/* 6. Responsabilité */}
          <section>
            <h2>6. Responsabilit&eacute;</h2>
            <p>
              +3 Studio s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des
              informations diffus&eacute;es sur ce site. Toutefois, il ne saurait
              &ecirc;tre tenu responsable des omissions, inexactitudes ou
              r&eacute;sultats obtenus par un mauvais usage de ces informations.
            </p>
            <p>
              +3 Studio se r&eacute;serve le droit de modifier le contenu du site
              &agrave; tout moment et sans pr&eacute;avis.
            </p>
          </section>

          {/* 7. Crédits */}
          <section>
            <h2>7. Cr&eacute;dits</h2>
            <p>
              Conception &amp; d&eacute;veloppement : +3 Studio
            </p>
            <p>
              Photographies : &copy; +3 Studio &mdash; Alix HUBERT, Christopher
              DEBENHAM, Alexis PATIENT. Toute utilisation non autoris&eacute;e
              est interdite.
            </p>
          </section>
        </div>

        {/* Back */}
        <div className="mt-16 border-t border-bone-200 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-lime"
          >
            &larr; Retour au site
          </Link>
        </div>
      </div>
    </main>
  );
}
