"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden pt-20 pb-12 bg-white border-t border-slate-200 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Identity & Bio */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Hadhemi<br />Rahmi
            </h2>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500 font-medium">
              Développeuse Full-Stack .NET, Angular, React &amp; Mobile — concevant des systèmes logiciels performants, sécurisés et agréables à utiliser.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2.5 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-800 transition shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-800 transition shadow-2xs"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-[0.15em] text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { label: "À Propos", href: "/#about" },
                { label: "Projets Phares", href: "/#projects" },
                { label: "Boîte à Outils", href: "/#skills" },
                { label: "Expériences", href: "/#experience" },
                { label: "Contact", href: "/#contact" },
                { label: "Consulter CV", href: "/cv" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-500 hover:text-slate-900 transition font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-[0.15em] text-slate-900">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-slate-600 hover:text-slate-900 transition truncate">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span className="text-slate-600">{PORTFOLIO_DATA.personal.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span className="text-slate-600">{PORTFOLIO_DATA.personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono border-t border-slate-100 text-slate-400">
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} Hadhemi Rahmi — Portfolio Full-Stack Developer
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-900 transition shadow-2xs font-semibold"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
