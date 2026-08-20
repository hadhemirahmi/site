"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, Layers, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "Tous",
  "Full-Stack",
  ".NET & Angular",
  "Mobile",
  "IA & Web",
  "UI/UX Design",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((project) => {
      const matchesCategory =
        activeCategory === "Tous" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="relative mx-auto max-w-7xl px-5 pt-12 text-left md:px-16 md:pt-20">
        <AnimatedSection>
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="pill-coral flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Catalogue &amp; Réalisations</span>
            </span>
          </div>
          <h1
            className="text-5xl font-bold leading-tight sm:text-7xl"
            style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
          >
            Projets &amp; Études de Cas
          </h1>
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--hr-muted)" }}
          >
            Découvrez l&apos;ensemble de mes applications web, mobiles et architectures backend conçues avec rigueur, performance et sens du design.
          </p>
        </AnimatedSection>
      </section>

      {/* Marquee Banner */}
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

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="stitch-surface p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Tab */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "btn-coral !py-1.5 !px-3.5 text-xs shadow-none"
                    : "btn-outline !py-1.5 !px-3.5 text-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2"
              style={{ color: "var(--hr-muted)" }}
            />
            <input
              type="text"
              placeholder="Rechercher par techno, mot-clé..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs outline-none transition-all"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                color: "var(--hr-ink)",
              }}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div
          className="flex items-center justify-between text-xs px-2"
          style={{ color: "var(--hr-muted)" }}
        >
          <span>
            Affichage de <strong style={{ color: "var(--hr-coral)" }}>{filteredProjects.length}</strong> projet(s)
          </span>
          {activeCategory !== "Tous" && (
            <button
              onClick={() => {
                setActiveCategory("Tous");
                setSearchQuery("");
              }}
              className="font-semibold underline hover:no-underline"
              style={{ color: "var(--hr-coral)" }}
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[360px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
                <motion.div
                key={project.id}
                  className={idx % 3 === 0 ? "md:col-span-7" : idx % 3 === 1 ? "md:col-span-5" : "md:col-span-6"}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="paper-card py-20 text-center space-y-3">
            <Filter className="w-10 h-10 mx-auto" style={{ color: "var(--hr-muted)" }} />
            <h3
              className="text-lg font-bold"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Aucun projet ne correspond à vos critères
            </h3>
            <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
              Essayez un autre mot-clé ou réinitialisez la sélection.
            </p>
            <button
              onClick={() => {
                setActiveCategory("Tous");
                setSearchQuery("");
              }}
              className="btn-coral text-xs"
            >
              Voir tous les projets
            </button>
          </div>
        )}
      </section>

      {/* Continuous Quote Strip */}
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
          speed="slow"
          direction="right"
        />
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
