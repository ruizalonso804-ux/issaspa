"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/siteConfig";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { Zap, ArrowUpRight, Star, MessageCircle } from "lucide-react";

export default function LaserSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { laser } = siteConfig.sections;

  return (
    <section id="laser" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 mb-6"
          >
            <Zap size={13} className="text-[var(--color-primary)]" />
            <span className="text-xs tracking-widest uppercase text-[var(--color-primary)]">
              Tecnología de punta
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display-lg text-white mb-4"
          >
            {laser.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white/50 text-sm max-w-lg mx-auto mb-2"
          >
            {laser.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-[var(--color-secondary)] text-xs tracking-wide"
          >
            ★ {laser.note}
          </motion.p>
        </div>

        {/* Price grid — cada card es un link a WhatsApp con mensaje personalizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {laser.packages.map((pkg, i) => (
            <motion.a
              key={i}
              href={buildWhatsAppUrl(WA_MESSAGES.laser(pkg.zone, pkg.price))}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`glass-card p-5 flex flex-col gap-3 group cursor-pointer
                hover:scale-[1.03] hover:border-white/15 transition-all duration-300 ${
                pkg.featured
                  ? "border-[var(--color-primary)]/30 ring-1 ring-[var(--color-primary)]/20"
                  : ""
              }`}
            >
              {pkg.featured && (
                <div className="flex items-center gap-1 mb-1">
                  <Star
                    size={12}
                    fill="var(--color-secondary)"
                    className="text-[var(--color-secondary)]"
                  />
                  <span className="text-[10px] text-[var(--color-secondary)] tracking-widest uppercase">
                    Más popular
                  </span>
                </div>
              )}

              <p className="text-white/70 text-sm leading-snug font-medium">
                {pkg.zone}
              </p>

              <p className="text-white/30 text-xs">{pkg.sessions} sesiones</p>

              <div className="mt-auto flex items-end justify-between">
                <p
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: pkg.featured
                      ? "var(--color-primary)"
                      : "var(--color-secondary)",
                  }}
                >
                  {pkg.price}
                </p>
                {/* Ícono sutil que aparece en hover */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/40">
                  <MessageCircle size={15} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Hint debajo del grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-white/20 text-xs mt-5 flex items-center justify-center gap-1.5"
        >
          <MessageCircle size={11} />
          Toca cualquier paquete para consultar por WhatsApp
        </motion.p>
      </div>
    </section>
  );
}
