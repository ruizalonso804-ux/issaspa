"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/siteConfig";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d]"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src={siteConfig.brand.logoDark}
              alt={siteConfig.brand.name}
              width={120}
              height={120}
              className="object-contain"
              priority
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[var(--color-primary)] tracking-[0.3em] text-sm uppercase font-light"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {siteConfig.brand.name}
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-primary)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
