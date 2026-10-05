import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery, galleryHeader } from "@/lib/data/gallery";
import { sectionIds } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function GaleriaSection() {
  const headingId = `${sectionIds.galeria}-titulo`;

  return (
    <section
      id={sectionIds.galeria}
      aria-labelledby={headingId}
      className="bg-brand-vapor"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading id={headingId} {...galleryHeader} />

        <ul className="mt-10 columns-2 gap-4 md:columns-3 md:gap-5">
          {gallery.map((item) => (
            <li key={item.id} className="mb-4 break-inside-avoid md:mb-5">
              <figure>
                <div
                  className={cn(
                    "overflow-hidden",
                    item.shape === "arch" ? "rounded-t-full rounded-b-2xl" : "rounded-2xl",
                  )}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 1152px) 360px, (min-width: 768px) 30vw, 46vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 text-center text-base text-brand-muted sm:text-left">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
