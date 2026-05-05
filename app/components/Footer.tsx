"use client";

import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { AtSign, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="py-16 px-4 border-t border-white/5 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <Image
          src={siteConfig.brand.logoDark}
          alt={siteConfig.brand.name}
          width={64}
          height={64}
          className="object-contain opacity-70"
        />

        <div>
          <p
            className="text-white/70 text-xl mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteConfig.brand.name}
          </p>
          <p className="text-white/30 text-sm">{siteConfig.brand.slogan}</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-5 py-2.5 text-sm text-white/60 hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            <Phone size={14} />
            {siteConfig.brand.contactPhone}
          </a>
          <a
            href={siteConfig.brand.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-5 py-2.5 text-sm text-white/60 hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            <AtSign size={14} />
            {siteConfig.brand.tagline}
          </a>
        </div>

        {/* Bottom */}
        <p className="text-white/20 text-xs flex items-center gap-1">
          Hecho con <Heart size={11} className="text-[var(--color-primary)]" /> en Curicó · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
