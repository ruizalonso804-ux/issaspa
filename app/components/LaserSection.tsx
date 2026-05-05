"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/siteConfig";
import { Zap, ArrowUpRight, Star } from "lucide-react";

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

        {/* Price grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {laser.packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`glass-card p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300 ${
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

              <div className="mt-auto">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[#0d0d0d] font-semibold px-8 py-3.5 rounded-full text-sm hover:scale-[1.03] transition-transform duration-200 shadow-lg shadow-[#e8a0b4]/15"
          >
            Consultar disponibilidad
            <ArrowUpRight size={15} />
          </a>
          <p className="text-white/30 text-xs mt-3">
            Agenda por WhatsApp · {siteConfig.brand.contactPhone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
