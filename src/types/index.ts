export type IconName =
  | "scissors"
  | "palette"
  | "hand"
  | "droplets"
  | "clock"
  | "map-pin"
  | "sparkles"
  | "chevron-down"
  | "menu"
  | "close";

export type SectionKey =
  | "inicio"
  | "servicios"
  | "galeria"
  | "precios"
  | "comoAgendar"
  | "preguntas"
  | "contacto";

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavItem {
  key: SectionKey;
  label: string;
}

export interface SectionHeader {
  title: string;
  subtitle?: string;
}

export interface Servicio {
  id: string;
  icon: IconName;
  image: ImageData;
  title: string;
  description: string;
}

export interface Paso {
  id: string;
  title: string;
  description: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface HeroData {
  headline: string;
  description: string;
  ctaLabel: string;
  image: ImageData;
}

export interface GalleryItem {
  id: string;
  image: ImageData;
  caption: string;
  /** "arch" recorta la parte superior en arco (motivo de la marca). */
  shape: "arch" | "rounded";
}

export interface PriceItem {
  id: string;
  name: string;
  price: string;
}

export interface PriceGroup {
  id: string;
  title: string;
  items: PriceItem[];
}

export interface ContactData {
  header: SectionHeader;
  hours: { label: string; days: string; time: string; note: string };
  zone: { label: string; value: string };
  map: { title: string; embedUrl: string };
  ctaLabel: string;
  demoNote: string;
}

export interface SiteData {
  name: string;
  logo: { wordmark: string; alt: string };
  city: string;
  slogan: string;
  metaTitle: string;
  metaDescription: string;
  lang: string;
  vitrina: {
    url: string;
    ref: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  nav: NavItem[];
  navCtaLabel: string;
  ui: {
    demoBadge: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNavLabel: string;
    footerLinkLabel: string;
    footerLegend: string;
    whatsappOpensIn: string;
  };
}
