export const siteConfig = {
  brand: {
    name: "Issa-Bella Spa",
    tagline: "Issa_Bella.spa",
    slogan: "Reconecta con tu bienestar en el corazón de Curicó.",
    logoLight: "/assets/logo-pink.png",
    logoDark: "/assets/logo-dark.png",
    contactPhone: "+56 9 7797 4940",
    whatsappUrl: "https://wa.me/56977974940",
    socialLinks: {
      instagram: "https://www.instagram.com/issa_bella.spa",
    },
  },

  theme: {
    primaryColor: "#E8A0B4",
    secondaryColor: "#D4AF37",
    accentCold: "#4A9ECC",
    darkBase: "#0D0D0D",
    darkCard: "#111111",
    darkCardAlt: "#1A1A1A",
    roseLight: "#FDF0F3",
    fontDisplay: "Playfair Display",
    fontBody: "Inter",
  },

  sections: {
    hero: {
      title: "Reconecta con\ntu bienestar.",
      subtitle:
        "Tratamientos de estética integral diseñados para resaltar tu belleza natural en un ambiente de total relajación.",
      cta: "Agenda tu hora",
      mediaSrc: "/assets/hero-bg.png",
    },

    services: [
      {
        id: "faciales",
        title: "Tratamientos Faciales",
        description:
          "Limpiezas profundas, hidratación y luminosidad. Tu piel merece lo mejor.",
        image: "/assets/logo-pink.png",
        accent: "#E8A0B4",
        size: "large",
      },
      {
        id: "corporales",
        title: "Corporales Reductivos",
        description:
          "Tratamientos reafirmantes y reductivos con tecnología de última generación.",
        image: "/assets/crio-machine.png",
        accent: "#4A9ECC",
        size: "small",
      },
      {
        id: "masajes",
        title: "Masajes Terapéuticos",
        description:
          "Relajantes y descontracturantes. Libera la tensión, reconecta con tu cuerpo.",
        image: "/assets/masajes-bg.png",
        accent: "#D4AF37",
        size: "small",
      },
      {
        id: "estetica",
        title: "Estética & Complementos",
        description:
          "Diseño de pestañas, uñas y tratamientos de manos. El detalle que hace la diferencia.",
        image: "/assets/ambiente.jpg",
        accent: "#E8A0B4",
        size: "large",
      },
    ],

    laser: {
      title: "Depilación Láser",
      subtitle:
        "Tecnología de punta para una piel suave y sin vello. Resultados desde la primera sesión.",
      note: "Todos los paquetes incluyen 6 sesiones",
      packages: [
        { zone: "Axilas", price: "$49.990", sessions: 6 },
        { zone: "Piernas Completas", price: "$89.990", sessions: 6 },
        { zone: "Axilas + Rebaje + Interglúteo", price: "$89.990", sessions: 6 },
        { zone: "Rostro Completo", price: "$74.990", sessions: 6 },
        {
          zone: "Rebaje + Interglúteo + Piernas",
          price: "$129.990",
          sessions: 6,
          featured: false,
        },
        {
          zone: "Pack Completo",
          price: "$159.990",
          sessions: 6,
          featured: true,
        },
        { zone: "Cuerpo Completo", price: "$249.990", sessions: 6 },
      ],
    },

    crio: {
      badge: "Nuevo Servicio",
      title: "Criolipólisis",
      subtitle: "El gold standard mundial para eliminar grasa localizada.",
      description:
        "Incorporamos a nuestros tratamientos la tecnología más avanzada en reducción de medidas. Sin agujas, sin cortes, sin reposo.",
      image: "/assets/crio-machine.png",
      benefits: [
        {
          emoji: "❄️",
          title: "Reducción de medidas",
          desc: "Ataca directamente las células grasas con frío controlado.",
        },
        {
          emoji: "✨",
          title: "No invasivo",
          desc: "Sin agujas, sin cortes, sin tiempo de reposo.",
        },
        {
          emoji: "💎",
          title: "Resultados duraderos",
          desc: "Las células eliminadas no vuelven.",
        },
        {
          emoji: "🎯",
          title: "Zonas tratables",
          desc: "Abdomen, flancos, piernas, brazos y papada.",
        },
      ],
      cta: "Evaluación sin costo este mes",
    },

    testimonials: [
      {
        name: "Valentina M.",
        text: "El ambiente es increíble, salí completamente renovada. Los masajes son de otro nivel.",
        rating: 5,
      },
      {
        name: "Camila R.",
        text: "Llevo 3 sesiones de depilación láser y los resultados son visibles desde la primera. Super profesionales.",
        rating: 5,
      },
      {
        name: "Fernanda T.",
        text: "La limpieza facial que me hicieron fue espectacular. Mi piel nunca había estado tan bien.",
        rating: 5,
      },
    ],
  },
};
