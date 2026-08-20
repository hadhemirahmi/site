"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import DownloadCVButton from "@/components/DownloadCVButton";
import {
  Briefcase,
  GraduationCap,
  Award,
  Bot,  
  Code2,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-center max-w-4xl mx-auto space-y-4">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="pill-acid flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Parcours Professionnel &amp; Académique</span>
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
          >
            Expériences &amp; Formations
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--hr-muted)" }}
          >
            Une trajectoire orientée vers l&apos;excellence technique, alliant rigueur académique à l&apos;ISET Sfax et réalisations concrètes en entreprise.
          </p>
        </AnimatedSection>
      </section>

      {/* Marquee Strip 1 */}
      <section
        className="relative py-2 border-y"
        style={{
          borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
          backgroundColor: "var(--hr-paper-light)",
        }}
      >
        <InfiniteMarquee
          items={PORTFOLIO_DATA.marqueeItems}
          speed="normal"
          direction="left"
        />
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: "color-mix(in oklab, var(--hr-coral) 12%, transparent)",
                color: "var(--hr-coral)",
                border: "1px solid color-mix(in oklab, var(--hr-coral) 25%, transparent)",
              }}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              >
                Expériences Professionnelles
              </h2>
              <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
                Stages et développement de solutions logicielles en entreprise
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline Cards */}
        <div
          className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5"
          style={{
            ["--timeline-color" as any]: "color-mix(in oklab, var(--hr-ink) 12%, transparent)",
          }}
        >
          {PORTFOLIO_DATA.experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <AnimatedSection key={exp.id} delay={idx * 0.15}>
                <div className={`relative flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                    style={{
                      backgroundColor: "var(--hr-coral)",
                      boxShadow: "0 0 0 4px var(--hr-paper)",
                    }}
                  />

                  {/* Spacer for 2-column layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0">
                    <div className="paper-card p-6 md:p-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="pill-coral flex items-center gap-1.5 text-xs">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-xs flex items-center gap-1 font-mono" style={{ color: "var(--hr-muted)" }}>
                          <MapPin className="w-3 h-3" style={{ color: "var(--hr-violet)" }} />
                          {exp.location}
                        </span>
                      </div>

                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                        >
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold" style={{ color: "var(--hr-coral)" }}>
                          {exp.company}
                        </div>
                        <div className="text-xs" style={{ color: "var(--hr-muted)" }}>
                          {exp.type}
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed" style={{ color: "var(--hr-muted)" }}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 pt-2">
                        <div
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: "var(--hr-ink)" }}
                        >
                          Réalisations clés :
                        </div>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs" style={{ color: "var(--hr-ink)" }}>
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--hr-acid)" }} />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div
                        className="pt-3 border-t flex flex-wrap gap-1.5"
                        style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)" }}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium"
                            style={{
                              backgroundColor: "var(--hr-paper-light)",
                              color: "var(--hr-ink)",
                              border: "1px solid color-mix(in oklab, var(--hr-ink) 10%, transparent)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: "color-mix(in oklab, var(--hr-violet) 12%, transparent)",
                color: "var(--hr-violet)",
                border: "1px solid color-mix(in oklab, var(--hr-violet) 25%, transparent)",
              }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              >
                Formation &amp; Diplômes
              </h2>
              <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
                Parcours d&apos;études supérieures et spécialisation informatique
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <AnimatedSection key={edu.id} delay={idx * 0.15}>
              <div className="paper-card p-6 md:p-8 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="pill-violet font-mono text-xs">
                      {edu.period}
                    </span>
                    {edu.mention && (
                      <span className="pill-acid text-xs">
                        {edu.mention}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                    >
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold" style={{ color: "var(--hr-coral)" }}>
                      {edu.institution}
                    </div>
                    <div className="text-xs" style={{ color: "var(--hr-muted)" }}>
                      {edu.location}
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed pt-2" style={{ color: "var(--hr-muted)" }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Clubs & Associative Engagement */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: "color-mix(in oklab, var(--hr-acid) 12%, transparent)",
                color: "var(--hr-acid)",
                border: "1px solid color-mix(in oklab, var(--hr-acid) 25%, transparent)",
              }}
            >
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              >
                Centres d&apos;Intérêt &amp; Clubs Universitaires
              </h2>
              <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
                Engagement actif en robotique et programmation compétitive à l&apos;ISET Sfax
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.clubs.map((club, idx) => (
            <AnimatedSection key={club.name} delay={idx * 0.15}>
              <div className="paper-card p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--hr-ink) 6%, transparent)",
                      color: "var(--hr-ink)",
                    }}
                  >
                    {idx === 0 ? <Bot className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                    >
                      {club.name}
                    </h3>
                    <span className="text-xs font-semibold" style={{ color: "var(--hr-coral)" }}>
                      {club.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed pt-2" style={{ color: "var(--hr-muted)" }}>
                  {club.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Continuous Philosophy Marquee 2 */}
      <section
        className="relative py-3 border-y"
        style={{
          borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
          backgroundColor: "var(--hr-paper-light)",
        }}
      >
        <InfiniteMarquee
          items={PORTFOLIO_DATA.philosophyMarquee.map((phrase) => ({
            text: phrase,
          }))}
          speed="normal"
          direction="right"
        />
      </section>

      {/* CV Download / Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="paper-card p-8 md:p-12 space-y-6">
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Intéressé(e) par mon profil pour un stage ou une mission ?
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--hr-muted)" }}>
              Téléchargez mon curriculum vitae complet ou découvrez le détail de mes compétences techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <DownloadCVButton variant="primary" />
              <Link
                href="/skills"
                className="btn-outline text-xs"
              >
                Explorer mes compétences
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
