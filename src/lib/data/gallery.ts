import type { GalleryItem, SectionHeader } from "@/types";

export const galleryHeader: SectionHeader = {
  title: "Estilos que puedes pedir",
  // Rótulo obligatorio en demo: no son trabajos reales.
  subtitle: "Imágenes de ejemplo: no son trabajos reales del negocio.",
};

// Fotos de stock sin rostros identificables. Verticales 3:4 (900×1200) y cuadradas (900×900).
// Al cambiar una foto, ajusta su alt y su caption.
export const gallery: GalleryItem[] = [
  {
    id: "galeria-1",
    shape: "arch",
    caption: "Cabello con ondas",
    image: { src: "/images/galeria/galeria-1.webp", alt: "Cabello largo con ondas suaves", width: 900, height: 1200 },
  },
  {
    id: "galeria-2",
    shape: "rounded",
    caption: "Manicure en tonos suaves",
    image: { src: "/images/galeria/galeria-2.webp", alt: "Manos con manicure en tono claro", width: 900, height: 900 },
  },
  {
    id: "galeria-3",
    shape: "rounded",
    caption: "Color con brillo",
    image: { src: "/images/galeria/galeria-3.webp", alt: "Cabello con color cálido y brillante", width: 900, height: 1200 },
  },
  {
    id: "galeria-4",
    shape: "rounded",
    caption: "Cuidado capilar",
    image: { src: "/images/galeria/galeria-4.webp", alt: "Productos de cuidado capilar", width: 900, height: 900 },
  },
  {
    id: "galeria-5",
    shape: "arch",
    caption: "Peinado recogido",
    image: { src: "/images/galeria/galeria-5.webp", alt: "Peinado recogido visto de espaldas", width: 900, height: 1200 },
  },
  {
    id: "galeria-6",
    shape: "rounded",
    caption: "Pedicure",
    image: { src: "/images/galeria/galeria-6.webp", alt: "Pies con pedicure y esmalte claro", width: 900, height: 900 },
  },
];
