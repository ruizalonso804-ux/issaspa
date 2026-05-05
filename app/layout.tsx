import type { Metadata } from "next";
import "./globals.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Issa-Bella Spa · Curicó",
  description:
    "Tratamientos de estética integral en el corazón de Curicó. Faciales, corporales, masajes, depilación láser y criolipólisis.",
  keywords: "spa curicó, estética curicó, masajes curicó, depilación láser curicó, criolipólisis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full bg-[#0d0d0d]">
        <Preloader />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
