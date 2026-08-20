"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import DownloadCVButton from "@/components/DownloadCVButton";
import {
  Cpu,
  Server,
  Layout,
  Smartphone,
  Database,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
  };

  const displayedCategories =
    selectedCategory === "all"
      ? PORTFOLIO_DATA.skillsCategories
      : PORTFOLIO_DATA.skillsCategories.filter(
          (c) => c.name.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-center max-w-4xl mx-auto space-y-4">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="pill-violet flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Savoir-faire &amp; Écosystème Technique</span>
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
          >
            Compétences &amp; Technologies
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--hr-muted)" }}
          >
            Un éventail technologique polyvalent et équilibré, alliant architecture backend robuste (.NET, API REST, SQL) à la création d&apos;interfaces web &amp; mobiles dynamiques (Angular, React, Figma).
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

      {/* Categories Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === "all"
                ? "btn-coral !py-2 !px-4 text-xs shadow-none"
                : "btn-outline !py-2 !px-4 text-xs"
            }`}
          >
            Toutes les compétences
          </button>
          {PORTFOLIO_DATA.skillsCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.name
                  ? "btn-coral !py-2 !px-4 text-xs shadow-none"
                  : "btn-outline !py-2 !px-4 text-xs"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Skills Grid Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCategories.map((cat, catIdx) => (
            <AnimatedSection key={cat.name} delay={catIdx * 0.1}>
              <div className="paper-card p-6 md:p-8 flex flex-col justify-between h-full space-y-6">
                {/* Category Header */}
                <div
                  className="flex items-center gap-3 pb-4 border-b"
                  style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)" }}
                >
                  <div
                    className="p-3 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--hr-coral) 12%, transparent)",
                      color: "var(--hr-coral)",
                      border: "1px solid color-mix(in oklab, var(--hr-coral) 20%, transparent)",
                    }}
                  >
                    {iconMap[cat.iconName] || <Zap className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                    >
                      {cat.name}
                    </h3>
                    <span className="text-xs" style={{ color: "var(--hr-muted)" }}>
                      {cat.skills.length} technologies
                    </span>
                  </div>
                </div>

                {/* Skills Progress Meters */}
                <div className="space-y-4 flex-grow">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium flex items-center gap-1.5" style={{ color: "var(--hr-ink)" }}>
                          {skill.highlighted && (
                            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--hr-coral)" }} />
                          )}
                          {skill.name}
                        </span>
                        <span className="font-mono font-bold text-xs" style={{ color: "var(--hr-coral)" }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div
                        className="h-2 w-full rounded-full overflow-hidden"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.1 + sIdx * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor:
                              catIdx % 3 === 0
                                ? "var(--hr-coral)"
                                : catIdx % 3 === 1
                                ? "var(--hr-acid)"
                                : "var(--hr-violet)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Key Methodologies & Workflow Badges */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="paper-card p-8 md:p-10 space-y-6">
            <h3
              className="text-2xl font-bold text-center"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Méthodologies &amp; Bonnes Pratiques
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[
                { title: "Clean Architecture", desc: "Code modulaire et découplé" },
                { title: "Démarche Agile / Scrum", desc: "Sprints et itérations continues" },
                { title: "Design Responsive", desc: "Mobile-first & pixel perfect" },
                { title: "Sécurité & Auth", desc: "JWT, RBAC & protection API" },
                { title: "Prompt Engineering", desc: "Optimisation de modèles IA" },
                { title: "UI/UX & Prototypage", desc: "Design systems sous Figma" },
                { title: "Tests & Qualité", desc: "Tests unitaires et validation" },
                { title: "Versionnement Git", desc: "Gitflow & revue de code" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl space-y-1 transition-all"
                  style={{
                    backgroundColor: "var(--hr-paper-light)",
                    border: "1px solid color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                  }}
                >
                  <div className="text-xs font-bold" style={{ color: "var(--hr-coral)" }}>
                    {item.title}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--hr-muted)" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Reverse Marquee Strip */}
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="paper-card p-8 md:p-12 space-y-6">
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Besoin de ces compétences pour votre équipe ?
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--hr-muted)" }}>
              Je suis prête à intervenir sur des projets stimulants exigeant rigueur, autonomie et créativité.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <DownloadCVButton variant="primary" />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
