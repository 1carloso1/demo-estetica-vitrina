import type { PriceGroup, SectionHeader } from "@/types";

export const pricesHeader: SectionHeader = {
  title: "Lista de precios",
  // Rótulo obligatorio en demo: los precios no son reales.
  subtitle: "Precios de ejemplo: no corresponden a un negocio real.",
};

export const priceGroups: PriceGroup[] = [
  {
    id: "corte-peinado",
    title: "Corte y peinado",
    items: [
      { id: "corte", name: "Corte", price: "Desde $200" },
      { id: "peinado", name: "Peinado", price: "Desde $250" },
    ],
  },
  {
    id: "color-tinte",
    title: "Color y tinte",
    items: [
      { id: "tinte-raiz", name: "Tinte de raíz", price: "Desde $450" },
      { id: "color-completo", name: "Color completo", price: "Desde $700" },
    ],
  },
  {
    id: "manicure-pedicure",
    title: "Manicure y pedicure",
    items: [
      { id: "manicure", name: "Manicure", price: "Desde $180" },
      { id: "pedicure", name: "Pedicure", price: "Desde $250" },
    ],
  },
  {
    id: "tratamientos",
    title: "Tratamientos capilares",
    items: [
      { id: "hidratacion", name: "Hidratación", price: "Desde $300" },
      { id: "tratamiento-intensivo", name: "Tratamiento intensivo", price: "Desde $450" },
    ],
  },
];
