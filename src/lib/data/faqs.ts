import type { Faq, SectionHeader } from "@/types";

export const faqsHeader: SectionHeader = {
  title: "Preguntas frecuentes",
};

export const faqs: Faq[] = [
  {
    id: "necesito-cita",
    question: "¿Necesito cita?",
    answer:
      "Sí. Trabajamos por cita para dedicarte el tiempo que tu servicio necesita.",
  },
  {
    id: "como-agendo",
    question: "¿Cómo agendo?",
    answer:
      "Elige tu servicio, dinos el día y la hora que te acomodan y te confirmamos tu cita. Puedes escribirnos desde el botón de esta página.",
  },
  {
    id: "donde-estan",
    question: "¿Dónde están?",
    answer:
      "Estamos en Zacatecas, Zac. Al confirmar tu cita te compartimos cómo llegar.",
  },
];
