"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { ArrowUpRight, Snowflake } from "lucide-react";

export default function CrioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { crio } = siteConfig.sections;

  return (
    <section id="crio" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[480px] rounded-[1.25rem] overflow-hidden"
          >
            <Image
              src={crio.image}
              alt="Máquina Criolipólisis"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Cold overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4a9ecc]/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent" />

            {/* Badge overlay */}
            <div className="absolute top-5 left-5 glass-pill px-3 py-1.5 flex items-center gap-2">
              <Snowflake size={13} className="text-[var(--color-accent-cold)]" />
              <span className="text-xs text-white/80 font-medium">Criolipólisis</span>
            </div>

            {/* New badge */}
            <div
              className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
              style={{
                background: "var(--color-accent-cold)",
                color: "#fff",
              }}
            >
              {crio.badge}
            </div>
          </motion.div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs tracking-widest uppercase text-[var(--color-accent-cold)] mb-4">
                Tecnología de vanguardia
              </p>
              <h2 className="display-lg text-white mb-4">{crio.title}</h2>
              <p className="text-white/50 leading-relaxed">{crio.description}</p>
            </motion.div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {crio.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="glass-card p-4 flex flex-col gap-1"
                >
                  <span className="text-xl">{b.emoji}</span>
                  <p className="text-white text-sm font-semibold">{b.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2"
            >
              <a
                href={buildWhatsAppUrl(WA_MESSAGES.crio())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm hover:scale-[1.03] transition-transform duration-200"
                style={{
                  background: "var(--color-accent-cold)",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(74,158,204,0.25)",
                }}
              >
                {crio.cta}
                <ArrowUpRight size={15} />
              </a>
              <p className="text-white/30 text-xs">Sin costo · Este mes</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
