import { Button } from "@/components/ui/Button";
import { MirrorArt } from "@/components/ui/MirrorArt";
import { hero } from "@/lib/data/hero";
import { sectionIds, site } from "@/lib/data/site";
import { buildWhatsappLink } from "@/lib/services/whatsappLink";

export function HeroSection() {
  const whatsappHref = buildWhatsappLink(
    site.vitrina.whatsappNumber,
    site.vitrina.whatsappMessage,
  );

  return (
    <section id={sectionIds.inicio} className="bg-brand-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full border border-brand-accentText/30 bg-brand-vapor px-4 py-1.5 text-sm font-semibold text-brand-accentText">
            {site.ui.demoBadge}
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-brand-muted sm:text-xl lg:mx-0">
            {hero.description}
          </p>
          <div className="mt-8">
            <Button href={whatsappHref} srHint={site.ui.whatsappOpensIn}>
              {hero.ctaLabel}
            </Button>
          </div>
        </div>

        <MirrorArt image={hero.image} />
      </div>
    </section>
  );
}
