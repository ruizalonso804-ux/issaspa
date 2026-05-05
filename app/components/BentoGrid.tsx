"use client";

import { useRef, MouseEvent, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

function BentoCard({
  service,
  index,
}: {
  service: (typeof siteConfig.sections.services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Detect mobile (no hover) vs desktop (hover available)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll-based: card visible in viewport
  const imageInView = useInView(imageRef, { once: false, amount: 0.45 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const isLarge = service.size === "large";

  // Mobile: scroll-triggered color reveal
  // Desktop: stays grayscale until hover (whileHover)
  const filterAnimate = isMobile
    ? { filter: imageInView ? "grayscale(0%)" : "grayscale(100%)" }
    : { filter: "grayscale(100%)" };

  const filterHover = !isMobile ? { filter: "grayscale(0%)" } : undefined;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      className={`glare-card glass-card group relative flex flex-col justify-end overflow-hidden cursor-pointer
        ${isLarge ? "md:col-span-2 min-h-[380px]" : "min-h-[280px]"}
        hover:scale-[1.01] transition-transform duration-500`}
    >
      {/* Background image — filter controlled by Framer Motion */}
      <div ref={imageRef} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={filterAnimate}
          whileHover={filterHover}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Accent corner */}
      <div
        className="absolute top-4 left-4 w-2 h-2 rounded-full z-10"
        style={{ backgroundColor: service.accent }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: service.accent }}>
          Servicio
        </p>
        <h3
          className="text-white mb-2 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
          }}
        >
          {service.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
          {service.description}
        </p>

        <a
          href={buildWhatsAppUrl(WA_MESSAGES.service(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.02]"
          style={{
            borderColor: `${service.accent}50`,
            color: service.accent,
            backgroundColor: `${service.accent}15`,
          }}
        >
          Reservar
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section header */}
      <div ref={titleRef} className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-[var(--color-primary)] mb-3"
        >
          Lo que hacemos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display-lg text-white"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/40 mt-3 text-sm max-w-md mx-auto"
        >
          Tecnología de vanguardia y atención personalizada por profesionales.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {siteConfig.sections.services.map((service, i) => (
          <BentoCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
