"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Cpu,
  Bot,
} from "lucide-react";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0"
      style={{ backgroundColor: "var(--hr-paper)", color: "var(--hr-ink)" }}
    >
      {/* Top Action Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="btn-outline inline-flex items-center gap-2 text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="btn-coral inline-flex items-center gap-2 text-xs"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimer / Télécharger en PDF</span>
        </button>
      </div>

      {/* CV Sheet Container */}
      <div className="max-w-4xl mx-auto paper-card p-8 sm:p-12 space-y-8 print:shadow-none print:border-none print:p-6 print:bg-white print:text-black print:rounded-none">
        {/* Header / Identity */}
        <div
          className="border-b pb-6 space-y-3 print:border-slate-300"
          style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 12%, transparent)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1
                className="text-3xl sm:text-4xl font-extrabold print:text-black tracking-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              >
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <h2
                className="text-base sm:text-lg font-semibold mt-1 print:text-slate-700"
                style={{ color: "var(--hr-coral)" }}
              >
                Développeuse Full-Stack .NET / Angular
              </h2>
            </div>
            <div
              className="text-xs font-mono print:text-slate-600"
              style={{ color: "var(--hr-muted)" }}
            >
              ISET Sfax • Licence Informatique
            </div>
          </div>

          {/* Contact Details Bar */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-3 text-xs print:text-slate-800"
            style={{ color: "var(--hr-ink)" }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 print:text-black" style={{ color: "var(--hr-acid)" }} />
              <span>{PORTFOLIO_DATA.personal.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 print:text-black" style={{ color: "var(--hr-coral)" }} />
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 print:text-black" style={{ color: "var(--hr-violet)" }} />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 print:text-black" style={{ color: "var(--hr-coral)" }} />
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline truncate"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Profil Professionnel */}
        <div className="space-y-2">
          <h3
            className="text-sm font-bold uppercase tracking-wider print:text-black flex items-center gap-2"
            style={{ color: "var(--hr-coral)" }}
          >
            <span className="w-2 h-2 rounded-full print:bg-black" style={{ backgroundColor: "var(--hr-coral)" }} />
            Profil Professionnel
          </h3>
          <p
            className="text-xs sm:text-sm print:text-slate-800 leading-relaxed"
            style={{ color: "var(--hr-muted)" }}
          >
            {PORTFOLIO_DATA.personal.bio}
          </p>
        </div>

        {/* Expérience Professionnelle */}
        <div className="space-y-4">
          <h3
            className="text-sm font-bold uppercase tracking-wider print:text-black flex items-center gap-2"
            style={{ color: "var(--hr-coral)" }}
          >
            <Briefcase className="w-4 h-4" />
            Expérience Professionnelle
          </h3>

          <div className="space-y-4">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-4 rounded-2xl border print:border-slate-200 print:bg-transparent space-y-2"
                style={{
                  backgroundColor: "var(--hr-paper-light)",
                  borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div
                    className="font-bold print:text-black text-sm"
                    style={{ color: "var(--hr-ink)" }}
                  >
                    {exp.role} — <span style={{ color: "var(--hr-coral)" }}>{exp.company}</span>
                  </div>
                  <div
                    className="text-xs font-mono print:text-slate-600"
                    style={{ color: "var(--hr-muted)" }}
                  >
                    {exp.period}
                  </div>
                </div>
                <ul
                  className="space-y-1 text-xs print:text-slate-800 list-disc list-inside"
                  style={{ color: "var(--hr-muted)" }}
                >
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
                <div
                  className="text-[11px] print:text-slate-600 font-mono pt-1"
                  style={{ color: "var(--hr-ink)" }}
                >
                  <strong>Technologies :</strong> {exp.technologies.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences Techniques */}
        <div className="space-y-3">
          <h3
            className="text-sm font-bold uppercase tracking-wider print:text-black flex items-center gap-2"
            style={{ color: "var(--hr-coral)" }}
          >
            <Cpu className="w-4 h-4" />
            Compétences Techniques
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div
              className="p-3 rounded-xl border print:border-slate-200 space-y-1"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Langages de programmation :</strong>
              <p style={{ color: "var(--hr-muted)" }}>
                Java, JavaScript, TypeScript, PHP, Python, C++, C#
              </p>
            </div>

            <div
              className="p-3 rounded-xl border print:border-slate-200 space-y-1"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Frameworks &amp; Bibliothèques :</strong>
              <p style={{ color: "var(--hr-muted)" }}>
                .NET, Angular, React.js, React Native, Express.js, Redux, Node.js, Flutter, FastAPI, Django, Flask
              </p>
            </div>

            <div
              className="p-3 rounded-xl border print:border-slate-200 space-y-1"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Bases de Données (SGBD) :</strong>
              <p style={{ color: "var(--hr-muted)" }}>
                PostgreSQL, MySQL, Oracle Database, MongoDB
              </p>
            </div>

            <div
              className="p-3 rounded-xl border print:border-slate-200 space-y-1"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Design &amp; Prototypage :</strong>
              <p style={{ color: "var(--hr-muted)" }}>
                Figma, Adobe Illustrator, Adobe Photoshop
              </p>
            </div>
          </div>
        </div>

        {/* Formation */}
        <div className="space-y-3">
          <h3
            className="text-sm font-bold uppercase tracking-wider print:text-black flex items-center gap-2"
            style={{ color: "var(--hr-coral)" }}
          >
            <GraduationCap className="w-4 h-4" />
            Formation &amp; Diplômes
          </h3>

          <div className="space-y-2">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3 rounded-xl border print:border-slate-200"
                style={{
                  backgroundColor: "var(--hr-paper-light)",
                  borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                }}
              >
                <div>
                  <div className="font-bold print:text-black" style={{ color: "var(--hr-ink)" }}>{edu.degree}</div>
                  <div className="print:text-slate-600" style={{ color: "var(--hr-muted)" }}>
                    {edu.institution}, {edu.location} {edu.mention && `• ${edu.mention}`}
                  </div>
                </div>
                <div
                  className="font-mono print:text-slate-600 sm:text-right mt-1 sm:mt-0"
                  style={{ color: "var(--hr-muted)" }}
                >
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt & Clubs */}
        <div className="space-y-3">
          <h3
            className="text-sm font-bold uppercase tracking-wider print:text-black flex items-center gap-2"
            style={{ color: "var(--hr-coral)" }}
          >
            <Bot className="w-4 h-4" />
            Centres d&apos;Intérêt &amp; Clubs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div
              className="p-3 rounded-xl border print:border-slate-200 flex items-start gap-2"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full print:bg-black mt-1.5 shrink-0" style={{ backgroundColor: "var(--hr-coral)" }} />
              <div>
                <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Club Robotique — ISET Sfax</strong>
                <p className="text-[11px] mt-0.5 print:text-slate-600" style={{ color: "var(--hr-muted)" }}>
                  Conception &amp; programmation de robots autonomes, IoT
                </p>
              </div>
            </div>

            <div
              className="p-3 rounded-xl border print:border-slate-200 flex items-start gap-2"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full print:bg-black mt-1.5 shrink-0" style={{ backgroundColor: "var(--hr-violet)" }} />
              <div>
                <strong className="print:text-black" style={{ color: "var(--hr-ink)" }}>Club CPC (Compétitions de Programmation) — ISET Sfax</strong>
                <p className="text-[11px] mt-0.5 print:text-slate-600" style={{ color: "var(--hr-muted)" }}>
                  Algorithmique avancée, speed coding et concours de code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
