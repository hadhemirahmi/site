"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
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
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed z-50 inset-0 flex items-center justify-center p-4 sm:p-6"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl"
              style={{ pointerEvents: "auto" }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 text-slate-800 hover:bg-slate-100 hover:scale-105 transition shadow-sm backdrop-blur-sm"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Cover Image & Category Pill */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-[2.5rem] bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="pill-tag bg-white/95 text-slate-900 border-slate-200 shadow-md font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10 space-y-8">
                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-base font-semibold text-slate-600">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metrics / Key highlights if any */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="text-2xl font-black text-slate-900 mb-1">{m.value}</div>
                        <div className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Long Description */}
                <div className="space-y-3">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400">
                    Architecture & Conception
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Features List */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400">
                      Points Forts & Fonctionnalités
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-800"
                        >
                          <CheckCircle2 className="shrink-0 mt-0.5 w-4 h-4 text-emerald-600" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="space-y-3">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400">
                    Technologies & Outils
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white border border-slate-200 text-slate-800 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-button-dark"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-button"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code GitHub</span>
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
