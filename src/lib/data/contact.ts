import type { ContactData } from "@/types";

export const contact: ContactData = {
  header: {
    title: "Agenda tu cita",
    subtitle: "Escríbenos y reservamos tu lugar.",
  },
  hours: {
    label: "Horario",
    days: "Lunes a sábado",
    time: "10:00 a 19:00",
    note: "Horario de ejemplo",
  },
  zone: { label: "Zona de atención", value: "Zacatecas, Zac." },
  // Mapa genérico de la ciudad: sin calle ni número.
  map: {
    title: "Mapa de Zacatecas, Zac.",
    embedUrl:
      "https://www.google.com/maps?q=Zacatecas,+Zac.,+M%C3%A9xico&z=12&output=embed",
  },
  ctaLabel: "Escríbenos para agendar",
  demoNote:
    "Este es un sitio de ejemplo: el botón te lleva a Vitrina, el estudio que lo creó, para que pidas una página como esta.",
};
