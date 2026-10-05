import type { SiteData } from "@/types";

/**
 * Fuente única de los `id` de sección: de aquí salen tanto los `id` de cada
 * <section> como los `href` de la navegación. Nunca se escriben a mano.
 */
export const sectionIds = {
  inicio: "inicio",
  servicios: "servicios",
  galeria: "galeria",
  precios: "precios",
  comoAgendar: "como-agendar",
  preguntas: "preguntas",
  contacto: "contacto",
} as const;

export const site: SiteData = {
  name: "Estética Brisa",
  logo: { wordmark: "Brisa", alt: "Estética Brisa" },
  city: "Zacatecas, Zac.",
  slogan: "Tu cita, tu momento.",
  metaTitle: "Estética Brisa — Demo",
  metaDescription:
    "Sitio de ejemplo creado por Vitrina: estética en Zacatecas con servicios de cabello y uñas, atención por cita.",
  lang: "es-MX",

  /**
   * Todos los botones de contacto de este demo apuntan a Vitrina (no a un
   * número del negocio, que es ficticio).
   * TODO: reemplazar `whatsappNumber` por el WhatsApp real de Vitrina
   * (formato internacional sin "+", ej. 52 + 10 dígitos) antes de publicar.
   */
  vitrina: {
    url: "https://vitrinaweb.com.mx",
    ref: "demo-estetica",
    whatsappNumber: "524921877078",
    whatsappMessage: "Hola, vi el demo de estética y quiero una página así.",
  },

  nav: [
    { key: "servicios", label: "Servicios" },
    { key: "galeria", label: "Galería" },
    { key: "precios", label: "Precios" },
    { key: "comoAgendar", label: "Cómo agendar" },
    { key: "preguntas", label: "Preguntas" },
    { key: "contacto", label: "Contacto" },
  ],
  navCtaLabel: "Agendar cita",

  ui: {
    demoBadge: "Sitio de ejemplo creado por Vitrina",
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNavLabel: "Navegación principal",
    footerLinkLabel: "Conoce Vitrina",
    footerLegend: "Sitio de ejemplo creado por Vitrina. Negocio, precios e imágenes de ejemplo.",
    whatsappOpensIn: "(se abre en una pestaña nueva)",
  },
};
