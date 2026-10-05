import type { SectionHeader, Servicio } from "@/types";

export const servicesHeader: SectionHeader = {
  title: "Lo que hacemos por ti",
  subtitle: "Cabello y uñas, siempre con cita para atenderte con calma.",
};

// Fotos de stock horizontales 4:3 (800×600). Al cambiar una foto, ajusta su alt.
export const services: Servicio[] = [
  {
    id: "corte-peinado",
    icon: "scissors",
    title: "Corte y peinado",
    description:
      "Un corte a tu medida y un peinado para el día a día o para una ocasión especial.",
    image: {
      src: "/images/servicios/corte-peinado.webp",
      alt: "Tijeras y peine sobre una mesa de trabajo",
      width: 800,
      height: 600,
    },
  },
  {
    id: "color-tinte",
    icon: "palette",
    title: "Color y tinte",
    description: "Cambia de look o renueva tu color con tonos que van contigo.",
    image: {
      src: "/images/servicios/color-tinte.webp",
      alt: "Mechones de cabello en distintos tonos de color",
      width: 800,
      height: 600,
    },
  },
  {
    id: "manicure-pedicure",
    icon: "hand",
    title: "Manicure y pedicure",
    description:
      "Manos y pies cuidados, con el acabado sencillo o el diseño que prefieras.",
    image: {
      src: "/images/servicios/manicure-pedicure.webp",
      alt: "Esmaltes de uñas en tonos suaves",
      width: 800,
      height: 600,
    },
  },
  {
    id: "tratamientos-capilares",
    icon: "droplets",
    title: "Tratamientos capilares",
    description:
      "Hidratación y cuidado para devolverle suavidad y brillo a tu cabello.",
    image: {
      src: "/images/servicios/tratamientos-capilares.webp",
      alt: "Productos de cuidado capilar sobre una toalla",
      width: 800,
      height: 600,
    },
  },
];
