"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-10 border-t"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e5e5", color: "#666666" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Identity */}
          <div className="space-y-4 lg:col-span-2">
            <h2
              className="text-3xl font-black uppercase tracking-tight"
              style={{ color: "#111" }}
            >
              Hadhemi<br />Rahmi
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#666" }}>
              Développeuse Full-Stack .NET, Angular, React & Mobile — concevant des systèmes logiciels performants, évolutifs et soignés.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-black hover:text-black"
                style={{ borderColor: "#e5e5e5", color: "#444" }}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-black hover:text-black"
                style={{ borderColor: "#e5e5e5", color: "#444" }}
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Sections Anchor Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-[0.15em]" style={{ color: "#111" }}>
              Sections
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { label: "À Propos", href: "/#about" },
                { label: "Projets", href: "/#projects" },
                { label: "Compétences", href: "/#skills" },
                { label: "Expérience", href: "/#experience" },
                { label: "Contact", href: "/#contact" },
                { label: "Curriculum Vitae", href: "/cv" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-black" style={{ color: "#666" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-[0.15em]" style={{ color: "#111" }}>
              Contact Direct
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: "#e84c30" }} />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-black transition truncate">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0" style={{ color: "#2d9c6b" }} />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "#e84c30" }} />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono border-t"
          style={{ borderColor: "#e5e5e5", color: "#888" }}
        >
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} Hadhemi Rahmi — Portfolio Full-Stack Next.js
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border px-4 py-2 transition hover:bg-neutral-100 text-black"
            style={{ borderColor: "#e5e5e5" }}
          >
            <span>Haut de page</span>
            <ArrowUp className="h-3.5 w-3.5" style={{ color: "#e84c30" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
