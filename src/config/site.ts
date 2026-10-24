// Datos de contacto del sitio. Completar antes de publicar.
export const site = {
  name: "UnoDev",
  tagline: "Building @ Technology Solutions",
  // Numero de WhatsApp en formato internacional, solo digitos (ej. "56912345678"). Vacio = sin enlace.
  whatsapp: "56939137442",
  email: "",
  location: "Chile",
};

export function whatsappUrl(message?: string) {
  if (!site.whatsapp) return "#contacto";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
