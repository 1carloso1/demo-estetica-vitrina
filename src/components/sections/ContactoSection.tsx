import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/lib/data/contact";
import { sectionIds, site } from "@/lib/data/site";
import { buildWhatsappLink } from "@/lib/services/whatsappLink";

export function ContactoSection() {
  const headingId = `${sectionIds.contacto}-titulo`;
  const whatsappHref = buildWhatsappLink(
    site.vitrina.whatsappNumber,
    site.vitrina.whatsappMessage,
  );

  return (
    <section
      id={sectionIds.contacto}
      aria-labelledby={headingId}
      className="bg-brand-vapor"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="text-center lg:text-left">
          <SectionHeading id={headingId} {...contact.header} align="center" className="lg:text-left" />

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-ink/10 bg-brand-mist p-5">
              <Icon name="clock" className="h-6 w-6 text-brand-accentText" />
              <h3 className="mt-3 font-display text-xl">{contact.hours.label}</h3>
              <p className="mt-1 text-lg">{contact.hours.days}</p>
              <p className="text-lg">{contact.hours.time}</p>
              <p className="mt-2 text-sm text-brand-muted">{contact.hours.note}</p>
            </div>
            <div className="rounded-2xl border border-brand-ink/10 bg-brand-mist p-5">
              <Icon name="map-pin" className="h-6 w-6 text-brand-accentText" />
              <h3 className="mt-3 font-display text-xl">{contact.zone.label}</h3>
              <p className="mt-1 text-lg">{contact.zone.value}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button href={whatsappHref} srHint={site.ui.whatsappOpensIn}>
              {contact.ctaLabel}
            </Button>
            <p className="mx-auto mt-4 max-w-md text-sm text-brand-muted lg:mx-0">
              {contact.demoNote}
            </p>
          </div>
        </div>

        <div className="min-h-72 overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-mist lg:min-h-full">
          <iframe
            title={contact.map.title}
            src={contact.map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
