"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Github, Tag, Clock, Users, Zap, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(26, 22, 16, 0.7)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-3xl shadow-2xl"
              style={{
                backgroundColor: "var(--hr-paper-light)",
                border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                boxShadow: "0 40px 120px color-mix(in oklab, var(--hr-ink) 25%, transparent)",
                pointerEvents: "auto",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                  color: "var(--hr-ink)",
                  border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                }}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hero Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, var(--hr-paper-light) 0%, transparent 50%)",
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="pill-coral">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Title Block */}
                <div className="space-y-2">
                  <h2
                    className="text-3xl sm:text-4xl font-bold leading-tight"
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                  >
                    {project.title}
                  </h2>
                  <p className="font-semibold text-sm" style={{ color: "var(--hr-coral)" }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "var(--hr-muted)" }}>
                  {project.longDescription || project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-4">
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                    >
                      Fonctionnalités Clés
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs"
                          style={{ color: "var(--hr-ink)" }}
                        >
                          <span
                            className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                            style={{
                              backgroundColor: "color-mix(in oklab, var(--hr-acid) 15%, transparent)",
                              color: "var(--hr-acid)",
                            }}
                          >
                            ✓
                          </span>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                  >
                    Stack Technique
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--hr-ink) 5%, transparent)",
                          color: "var(--hr-ink)",
                          border: "1px solid color-mix(in oklab, var(--hr-ink) 10%, transparent)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div
                  className="flex flex-wrap gap-3 pt-6 border-t"
                  style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 10%, transparent)" }}
                >
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-coral flex items-center gap-2 text-xs">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Voir la démo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-xs">
                      <Github className="w-3.5 h-3.5" />
                      <span>Code source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
