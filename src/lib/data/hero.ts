import type { HeroData } from "@/types";

export const hero: HeroData = {
  headline: "Tu cita, tu momento.",
  description:
    "Estética en Zacatecas con servicios de cabello y uñas, atención por cita.",
  ctaLabel: "Agendar mi cita",
  // Foto de stock VERTICAL (se recorta en arco). Al cambiarla, ajusta el alt.
  image: {
    src: "/images/hero.webp",
    alt: "Cabello largo con ondas suaves",
    width: 800,
    height: 1200,
  },
};
