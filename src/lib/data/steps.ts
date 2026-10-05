import type { Paso, SectionHeader } from "@/types";
import { contact } from "./contact";

export const stepsHeader: SectionHeader = {
  title: "Cómo agendar",
  subtitle: "Tres pasos y listo.",
};

export const steps: Paso[] = [
  {
    id: "elige-servicio",
    title: "Elige tu servicio",
    description:
      "Dinos qué te gustaría: corte, color, uñas o un tratamiento para tu cabello.",
  },
  {
    id: "escoge-horario",
    title: "Escoge día y hora",
    description: `Atendemos de ${contact.hours.days.toLowerCase()}, de ${contact.hours.time} horas. Elige el momento que mejor te acomode.`,
  },
  {
    id: "confirmamos-cita",
    title: "Te confirmamos tu cita",
    description: "Te respondemos para confirmar tu lugar. Tú solo llegas.",
  },
];
