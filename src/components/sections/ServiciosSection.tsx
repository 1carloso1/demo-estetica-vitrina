import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesHeader } from "@/lib/data/services";
import { sectionIds } from "@/lib/data/site";

export function ServiciosSection() {
  const headingId = `${sectionIds.servicios}-titulo`;

  return (
    <section
      id={sectionIds.servicios}
      aria-labelledby={headingId}
      className="bg-brand-mist"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading id={headingId} {...servicesHeader} />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.id}
              className="overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-vapor/60 text-left"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1152px) 560px, (min-width: 640px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <span className="relative -mt-7 flex h-14 w-11 items-center justify-center rounded-t-full rounded-b-md bg-brand-accent text-brand-ink">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
                <p className="mt-2 text-lg text-brand-muted">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
