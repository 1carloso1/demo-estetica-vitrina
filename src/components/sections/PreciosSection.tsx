import { SectionHeading } from "@/components/ui/SectionHeading";
import { priceGroups, pricesHeader } from "@/lib/data/prices";
import { sectionIds } from "@/lib/data/site";

export function PreciosSection() {
  const headingId = `${sectionIds.precios}-titulo`;

  return (
    <section
      id={sectionIds.precios}
      aria-labelledby={headingId}
      className="bg-brand-mist"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading id={headingId} {...pricesHeader} />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {priceGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-brand-ink/10 bg-brand-vapor/60 p-6 text-left sm:p-8"
            >
              <h3 className="font-display text-2xl">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.id} className="flex items-baseline gap-3 text-lg">
                    <span>{item.name}</span>
                    <span
                      aria-hidden="true"
                      className="min-w-6 flex-1 border-b border-dotted border-brand-ink/40"
                    />
                    <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
