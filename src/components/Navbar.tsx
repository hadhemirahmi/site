"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "À Propos", href: "/#about" },
  { label: "Compétences", href: "/#skills" },
  { label: "Projets", href: "/#projects" },
  { label: "Expérience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker matching the new order
      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.98)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid transparent",
        padding: scrolled ? "14px 0" : "20px 0",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}
      >
        {/* Logo / Name stacked top-left — Nikita Khvatov style */}
        <Link
          href="/#hero"
          className="text-sm font-black leading-tight tracking-tight uppercase transition hover:opacity-70"
          style={{ color: "#111", lineHeight: 1.15 }}
        >
          Hadhemi<br />Rahmi
        </Link>

        {/* Desktop Nav Links — synchronized in order */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("/", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-mono uppercase tracking-[0.14em] font-medium transition-all duration-200 hover:text-black"
                style={{ color: isActive ? "#000000" : "#666666" }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: "#e84c30" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right action links (CV / Hire) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cv"
            className="flex items-center gap-1 text-xs font-mono font-medium px-4 py-2 rounded-full border transition hover:bg-neutral-100"
            style={{ borderColor: "#e5e5e5", color: "#111" }}
          >
            <span>CV</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <a
            href="/#contact"
            className="text-xs font-mono font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all hover:opacity-90 shadow-sm"
            style={{ backgroundColor: "#111", color: "#fff" }}
          >
            Me Recruter
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-full border transition hover:bg-neutral-100"
          style={{ borderColor: "#e5e5e5", color: "#111" }}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e5e5" }}
          >
            <div className="px-6 py-5 space-y-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition"
                  style={{ color: "#111" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t space-y-2" style={{ borderColor: "#eee" }}>
                <Link
                  href="/cv"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-2.5 text-center text-xs font-mono font-medium rounded-full border"
                  style={{ borderColor: "#e5e5e5" }}
                >
                  Consulter mon CV
                </Link>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider rounded-full"
                  style={{ backgroundColor: "#111", color: "#fff" }}
                >
                  Me Recruter
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
