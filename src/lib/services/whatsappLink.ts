/** Construye el enlace de WhatsApp con mensaje prellenado. */
export function buildWhatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Enlace a vitrinaweb.com.mx con el parámetro `ref` propio del demo. */
export function buildVitrinaLink(url: string, ref: string): string {
  return `${url}/?ref=${encodeURIComponent(ref)}`;
}
