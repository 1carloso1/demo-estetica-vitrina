import { site } from "@/lib/data/site";
import { buildVitrinaLink } from "@/lib/services/whatsappLink";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const vitrinaHref = buildVitrinaLink(site.vitrina.url, site.vitrina.ref);

  return (
    <footer className="bg-brand-ink text-brand-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Wordmark tone="dark" />
          <p className="font-display text-lg text-brand-mist/80">{site.slogan}</p>
        </div>

        <div className="flex max-w-sm flex-col items-center gap-3 sm:items-end sm:text-right">
          <p className="text-base text-brand-mist/80">{site.ui.footerLegend}</p>
          <a
            href={vitrinaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-accent underline underline-offset-4 transition-colors duration-200 hover:text-brand-mist"
          >
            {site.ui.footerLinkLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
