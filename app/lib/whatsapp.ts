const PHONE = "56977974940";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  generic:
    "Hola, quisiera consultar por sus servicios 🌸",

  service: (name: string) =>
    `Hola 🌸 Estoy interesada en *${name}*. ¿Podrían darme más información y disponibilidad?`,

  laser: (zone: string, price: string) =>
    `Hola 🌸 Estoy interesada en *Depilación Láser — ${zone}* (6 sesiones · ${price}). ¿Tienen disponibilidad para agendar?`,

  crio: () =>
    `Hola 🌸 Me interesa conocer más sobre la *Criolipólisis* y la evaluación sin costo que ofrecen. ¿Cuándo tienen hora disponible?`,
};
