"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { ArrowDown } from "lucide-react";

const words = siteConfig.sections.hero.title.split(/\s+/);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 ken-burns">
        <Image
          src={siteConfig.sections.hero.mediaSrc}
          alt="Issa-Bella Spa"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0d0d0d]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
          className="glass-pill px-4 py-1.5 mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-xs text-white/70 tracking-widest uppercase">
            Curicó · Chile
          </span>
        </motion.div>

        {/* Title with stagger words */}
        <h1 className="display-xl text-white mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em] last:mr-0"
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 3.2 + i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word === "bienestar." ? (
                <em className="not-italic text-[var(--color-primary)]">{word}</em>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.7 }}
          className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          {siteConfig.sections.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-primary)] text-[#0d0d0d] font-semibold px-8 py-3.5 rounded-full text-sm tracking-wide hover:scale-[1.03] transition-transform duration-200 shadow-lg shadow-[#e8a0b4]/20"
          >
            {siteConfig.sections.hero.cta}
          </a>
          <a
            href="#servicios"
            className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5"
          >
            Ver servicios
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
    </section>
  );
}
