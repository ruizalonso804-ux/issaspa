"use client";

import { motion } from "framer-motion";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/app/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl(WA_MESSAGES.generic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.5, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
      }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="text-white relative z-10" fill="white" />
    </motion.a>
  );
}
