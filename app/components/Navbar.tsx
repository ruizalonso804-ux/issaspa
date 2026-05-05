"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { Phone } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Láser", href: "#laser" },
  { label: "Criolipólisis", href: "#crio" },
  { label: "Contacto", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`glass-pill flex items-center gap-6 px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src={siteConfig.brand.logoDark}
            alt={siteConfig.brand.name}
            width={32}
            height={32}
            className="object-contain"
          />
          <span
            className="text-sm font-medium text-white/80 hidden sm:block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Issa-Bella
          </span>
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-white/60 hover:text-[var(--color-primary)] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* CTA */}
        <a
          href={siteConfig.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[var(--color-primary)] text-[#0d0d0d] text-xs font-semibold px-4 py-1.5 rounded-full hover:scale-[1.03] transition-transform duration-200"
        >
          <Phone size={12} />
          <span className="hidden sm:inline">Agenda ahora</span>
          <span className="sm:hidden">Agenda</span>
        </a>
      </div>
    </motion.header>
  );
}
