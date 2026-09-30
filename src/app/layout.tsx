import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./landing.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SWK Vision Solutions — Visão computacional para a sua operação",
  description:
    "Conectamos IA às câmeras que você já tem: segurança, produtividade e qualidade em tempo real. Análise na borda, alertas no WhatsApp e soluções sob medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div
          className={`lk-root ${display.variable} ${body.variable} ${mono.variable}`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
