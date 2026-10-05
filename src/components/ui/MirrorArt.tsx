import Image from "next/image";
import type { ImageData } from "@/types";
import { Icon } from "./Icon";

interface MirrorArtProps {
  image: ImageData;
}

/**
 * Hero: tres "espejos" en arco, como los de un salón. El central lleva la foto.
 * Es el único momento de movimiento del sitio (entrada escalonada al cargar).
 */
export function MirrorArt({ image }: MirrorArtProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div className="flex aspect-[4/5] items-end justify-center gap-3 sm:gap-4">
        {/* Espejo izquierdo (decorativo) */}
        <div
          aria-hidden="true"
          className="relative flex h-[62%] w-[25%] items-start justify-center rounded-t-full bg-brand-vapor pt-[30%] motion-safe:animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          <span className="pointer-events-none absolute inset-1.5 rounded-t-full border border-brand-ink/15" />
          <Icon name="scissors" className="h-6 w-6 text-brand-ink sm:h-8 sm:w-8" />
        </div>

        {/* Espejo central: foto */}
        <div
          className="relative h-full w-[44%] overflow-hidden rounded-t-full bg-brand-accent motion-safe:animate-rise"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 200px, 160px"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-1.5 rounded-t-full border border-brand-mist/70"
          />
        </div>

        {/* Espejo derecho (decorativo) */}
        <div
          aria-hidden="true"
          className="relative flex h-[76%] w-[25%] items-start justify-center rounded-t-full bg-brand-ink pt-[32%] motion-safe:animate-rise"
          style={{ animationDelay: "240ms" }}
        >
          <span className="pointer-events-none absolute inset-1.5 rounded-t-full border border-brand-accent/40" />
          <Icon name="droplets" className="h-6 w-6 text-brand-accent sm:h-8 sm:w-8" />
        </div>
      </div>
      <div aria-hidden="true" className="h-px w-full bg-brand-ink/20" />
    </div>
  );
}
