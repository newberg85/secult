// src/app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Montsserat } from "next/font/google";
import VLibras from "@/Components/Vlibras";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export const metadata = {
  title: "Secult",
  description: "Projeto usando Montserrat + Geist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <VLibras />
        {children}
      </body>
    </html>
  );
}
