import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export const metadata: Metadata = {
  title: "Hadhemi Rahmi — Développeuse Full-Stack .NET / Angular & Mobile",
  description:
    "Portfolio officiel de Hadhemi Rahmi. Développeuse Full-Stack .NET / Angular / React / Mobile et designer d'interfaces à Sfax, Tunisie. Projets écoresponsables, IA et microservices.",
  keywords: [
    "Hadhemi Rahmi",
    "Développeuse Full-Stack",
    ".NET",
    "Angular",
    "React",
    "React Native",
    "Node.js",
    "Sfax",
    "Tunisie",
    "Portfolio Développeur",
  ],
  authors: [{ name: "Hadhemi Rahmi" }],
  openGraph: {
    title: "Hadhemi Rahmi — Développeuse Full-Stack .NET / Angular & Mobile",
    description:
      "Explorez le portfolio interactif de Hadhemi Rahmi : projets .NET/Angular, applications mobiles React Native, intégrations d'IA et architectures logicielles.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased" style={{ backgroundColor: '#ffffff', color: '#111111' }}>
        <ScrollProgressBar />
        <BackgroundOrbs />
        <Navbar />
        <main className="flex-grow relative z-10 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
