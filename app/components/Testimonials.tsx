"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-[var(--color-primary)] mb-3">
            Clientas felices
          </p>
          <h2 className="display-md text-white">Lo que dicen de nosotras</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {siteConfig.sections.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    fill="var(--color-secondary)"
                    className="text-[var(--color-secondary)]"
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic">"{t.text}"</p>
              <p className="text-white/40 text-xs font-medium mt-auto">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
