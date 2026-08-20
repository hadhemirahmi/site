"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import TiltCard from "./TiltCard";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const stitchImage =
    project.id === "ecotrack" ? "/stitch/stitch-4.jpg"
    : project.id === "ai-prompt-studio" ? "/stitch/stitch-5.jpg"
    : project.id === "dotnet-quantum-erp" ? "/stitch/stitch-1.jpg"
    : project.id === "educode-platform" ? "/stitch/stitch-3.jpg"
    : project.id === "figma-design-system" ? "/stitch/stitch-2.jpg"
    : project.image;
  const categoryColor =
    project.category === "Mobile" ? "var(--hr-acid)"
    : project.category === ".NET & Angular" ? "var(--hr-violet)"
    : project.category === "IA & Web" ? "var(--hr-coral)"
    : project.category === "UI/UX Design" ? "var(--hr-amber)"
    : "var(--hr-ink)";

  return (
    <TiltCard className="h-full">
      <div
        className="group relative h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
        style={{
          backgroundColor: "var(--hr-paper)",
          borderColor: "color-mix(in oklab, var(--hr-ink) 10%, transparent)",
          boxShadow: "0 4px 20px color-mix(in oklab, var(--hr-ink) 4%, transparent)",
        }}
      >
        {/* Thumbnail Image */}
        <div className="relative h-48 w-full overflow-hidden" style={{ backgroundColor: "var(--hr-sand)" }}>
          <Image
            src={stitchImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, var(--hr-paper) 0%, transparent 60%)",
            }}
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide"
              style={{
                backgroundColor: "color-mix(in oklab, var(--hr-paper) 90%, transparent)",
                color: categoryColor,
                border: `1px solid color-mix(in oklab, ${categoryColor} 20%, transparent)`,
                backdropFilter: "blur(8px)",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Quick Peek Button */}
          <button
            onClick={() => onSelect(project)}
            className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "var(--hr-coral)",
              color: "white",
            }}
            title="Voir les détails"
          >
            <ArrowUpRight className="w-4 h-4 font-bold" />
          </button>
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-grow p-6 space-y-4">
          <div className="space-y-1">
            <h3
              className="text-lg font-bold cursor-pointer group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              onClick={() => onSelect(project)}
            >
              {project.title}
            </h3>
            <p className="text-xs font-medium" style={{ color: "var(--hr-coral)" }}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs leading-relaxed line-clamp-2 flex-grow" style={{ color: "var(--hr-muted)" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--hr-ink) 5%, transparent)",
                  color: "var(--hr-ink)",
                  border: "1px solid color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span
                className="px-2 py-0.5 rounded text-[11px] font-mono"
                style={{ color: "var(--hr-coral)" }}
              >
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between pt-4 border-t"
            style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)" }}
          >
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-semibold flex items-center gap-1 transition-all group/btn"
              style={{ color: "var(--hr-coral)" }}
            >
              <span>En savoir plus</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "var(--hr-muted)" }}
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "var(--hr-muted)" }}
                  title="Démo live"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
