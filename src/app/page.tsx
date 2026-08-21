"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Sparkles,
  Cpu,
  Layers,
  Server,
  Globe,
  Smartphone,
  Palette,
  Terminal,
  Bot,
  CloudCog,
  Boxes,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import ProjectModal from "@/components/ProjectModal";
import InfiniteMarquee from "@/components/InfiniteMarquee";

// Verified Standard React Icons from react-icons/si and react-icons/fa
import {
  SiDotnet,
  SiCplusplus,
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiDart,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiRedux,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiSpringboot,
  SiFigma,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiHuggingface,
  SiGit,
  SiGithub
} from "react-icons/si";

import { FaJava, FaDatabase, FaRobot, FaBrain, FaNetworkWired, FaPalette } from "react-icons/fa";

// 6 Categories structured strictly as requested (3 cards per row)
const SKILL_GROUPS_6 = [
  {
    title: "Langages",
    tag: "Languages",
    icon: Code2,
    color: "#E5A00D",
    description: "Langages de programmation système, web, objet et fonctionnels.",
    skills: [
      { name: "JavaScript (ES6+)", level: 85, icon: SiJavascript, color: "#E5A00D", bg: "#fefce8" },
      { name: "TypeScript", level: 82, icon: SiTypescript, color: "#3178C6", bg: "#eff6ff" },
      { name: "Python", level: 80, icon: SiPython, color: "#3776AB", bg: "#eff6ff" },
      { name: "Java", level: 75, icon: FaJava, color: "#E76F00", bg: "#fff7ed" },
      { name: "PHP", level: 72, icon: SiPhp, color: "#777BB4", bg: "#f5f3ff" },
      { name: "Dart", level: 70, icon: SiDart, color: "#0175C2", bg: "#f0f9ff" },
      { name: "C++", level: 68, icon: SiCplusplus, color: "#00599C", bg: "#eff6ff" },
    ]
  },
  {
    title: "Frameworks & Bibliothèques",
    tag: "Frameworks & Libs",
    icon: Boxes,
    color: "#512BD4",
    description: "Écosystèmes complets pour le développement Web, Backend et Mobile.",
    skills: [
      { name: ".NET Core / ASP.NET", level: 85, icon: SiDotnet, color: "#512BD4", bg: "#f3f0ff" },
      { name: "React.js", level: 84, icon: SiReact, color: "#087ea4", bg: "#f0f9ff" },
      { name: "Angular", level: 82, icon: SiAngular, color: "#DD0031", bg: "#fef2f2" },
      { name: "React Native", level: 80, icon: SiReact, color: "#087ea4", bg: "#f0f9ff" },
      { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#339933", bg: "#f0fdf4" },
      { name: "Express.js", level: 78, icon: SiExpress, color: "#000000", bg: "#f5f5f5" },
      { name: "FastAPI", level: 75, icon: SiFastapi, color: "#009688", bg: "#f0fdfa" },
      { name: "Flutter", level: 74, icon: SiFlutter, color: "#02569B", bg: "#f0f9ff" },
      { name: "Redux", level: 74, icon: SiRedux, color: "#764ABC", bg: "#faf5ff" },
      { name: "Flask", level: 70, icon: SiFlask, color: "#000000", bg: "#f5f5f5" },
      { name: "Django", level: 68, icon: SiDjango, color: "#092E20", bg: "#f0fdf4" },
      { name: "Spring Boot", level: 65, icon: SiSpringboot, color: "#6DB33F", bg: "#f0fdf4" },
    ]
  },
  {
    title: "SGBD",
    tag: "Databases & Data",
    icon: Database,
    color: "#4169E1",
    description: "Systèmes de gestion de bases de données relationnelles et NoSQL.",
    skills: [
      { name: "PostgreSQL", level: 82, icon: SiPostgresql, color: "#4169E1", bg: "#eff6ff" },
      { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248", bg: "#f0fdf4" },
      { name: "MySQL", level: 78, icon: SiMysql, color: "#4479A1", bg: "#f0f9ff" },
      { name: "Oracle", level: 70, icon: FaDatabase, color: "#F80000", bg: "#fef2f2" },
    ]
  },
  {
    title: "Design",
    tag: "UI / UX & Création",
    icon: Palette,
    color: "#F24E1E",
    description: "Conception d'interfaces utilisateurs, maquettage et identité visuelle.",
    skills: [
      { name: "Figma", level: 85, icon: SiFigma, color: "#F24E1E", bg: "#fff1ee" },
      { name: "Photoshop", level: 72, icon: FaPalette, color: "#31A8FF", bg: "#f0f9ff" },
      { name: "Illustrator", level: 70, icon: FaPalette, color: "#FF9A00", bg: "#fffbeb" },
    ]
  },
  {
    title: "DevOps",
    tag: "CI/CD & Cloud",
    icon: CloudCog,
    color: "#2496ED",
    description: "Conteneurisation, automatisation de déploiements et orchestration.",
    skills: [
      { name: "Docker", level: 75, icon: SiDocker, color: "#2496ED", bg: "#eff6ff" },
      { name: "Jenkins", level: 65, icon: SiJenkins, color: "#D24939", bg: "#fef2f2" },
      { name: "Kubernetes", level: 60, icon: SiKubernetes, color: "#326CE5", bg: "#eff6ff" },
    ]
  },
  {
    title: "AI",
    tag: "IA & Machine Learning",
    icon: Bot,
    color: "#10A37F",
    description: "Agents intelligents, pipelines RAG, modèles et automatisation IA.",
    skills: [
      { name: "n8n", level: 80, icon: FaNetworkWired, color: "#EA4B71", bg: "#fdf2f8" },
      { name: "LangChain", level: 76, icon: FaBrain, color: "#1C3C3C", bg: "#f5f5f5" },
      { name: "RAG", level: 75, icon: FaNetworkWired, color: "#10A37F", bg: "#ecfdf5" },
      { name: "Machine Learning", level: 70, icon: FaRobot, color: "#6366F1", bg: "#eef2ff" },
      { name: "Hugging Face", level: 70, icon: SiHuggingface, color: "#FFD21E", bg: "#fefce8" },
    ]
  }
];

// Color Tokens - Clean Modern White Theme
const BG = "#ffffff";
const SURFACE = "#f8f8f8";
const SURFACE_CARD = "#ffffff";
const BORDER = "#e5e5e5";
const TEXT = "#111111";
const TEXT_MUTED = "#666666";
const CORAL = "#e84c30";
const ACID = "#2d9c6b";

export default function SinglePagePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ["Tous", "Full-Stack", ".NET & Angular", "Mobile", "IA & Web"];

  const filteredProjects = activeCategory === "Tous"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Safe icon renderer
  const renderSkillIcon = (IconComponent: any) => {
    if (IconComponent && (typeof IconComponent === "function" || typeof IconComponent === "object")) {
      const Icon = IconComponent;
      return <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />;
    }
    return <Code2 className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white" style={{ backgroundColor: BG, color: TEXT }}>

      {/* ══════════════════════════════════════════════════════════════
          1. HERO SECTION — NIKITA KHVATOV DESIGN (WHITE MODE)
      ══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative px-6 sm:px-12 lg:px-20 pt-32 pb-20 overflow-hidden border-b" style={{ borderColor: BORDER }}>
        {/* Background Decorative Wireframe Circles */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <svg className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] opacity-[0.03]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="#000" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#000" strokeWidth="0.2" />
          </svg>
        </div>

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono"
          style={{ color: TEXT_MUTED }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: ACID }} />
            <span className="font-semibold text-black uppercase tracking-wider">{PORTFOLIO_DATA.personal.status}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" style={{ color: CORAL }} />
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Massive Title */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-black leading-[0.88] tracking-[-0.04em] uppercase select-none mb-10"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 9rem)",
                color: TEXT,
              }}
            >
              Full‑Stack<br/>
              <span style={{ color: "transparent", WebkitTextStroke: `2px ${TEXT}` }}>Développeuse</span>
            </motion.h1>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 transition-all"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ backgroundColor: TEXT, color: BG, borderColor: TEXT }}
                >
                  <ArrowRight className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest transition-colors group-hover:text-[#e84c30]" style={{ color: TEXT }}>
                  Projets
                </span>
              </a>

              <a
                href="/cv"
                className="group flex items-center gap-3 transition-all ml-4"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ borderColor: BORDER, color: TEXT }}
                >
                  <Download className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest transition-colors group-hover:text-[#2d9c6b]" style={{ color: TEXT }}>
                  Curriculum
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Bio Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div 
              className="relative p-10 rounded-[3rem] border bg-neutral-100 shadow-xl overflow-hidden group"
              style={{ borderColor: BORDER }}
            >
              {/* Blur accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e84c30]/10 rounded-full blur-3xl group-hover:bg-[#e84c30]/20 transition-all duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border" style={{ borderColor: BORDER }}>
                  <Terminal className="h-5 w-5" style={{ color: TEXT }} />
                </div>
                <p className="text-base leading-relaxed font-medium" style={{ color: TEXT }}>
                  Mon objectif est de concevoir du code <strong className="font-black">maintenable, propre</strong> et <strong className="font-black">robuste</strong> pour des applications web, mobiles et IA.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-white font-semibold shadow-sm border" style={{ borderColor: BORDER }}>.NET 8</span>
                  <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-white font-semibold shadow-sm border" style={{ borderColor: BORDER }}>Angular</span>
                  <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-white font-semibold shadow-sm border" style={{ borderColor: BORDER }}>React Native</span>
                </div>

                {/* Social Links Mini Bento */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t" style={{ borderColor: `${BORDER}80` }}>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:scale-110 transition-transform" style={{ borderColor: BORDER }}>
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:scale-110 transition-transform" style={{ borderColor: BORDER }}>
                    <Linkedin className="h-4 w-4 text-[#0077b5]" />
                  </a>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:scale-110 transition-transform" style={{ borderColor: BORDER }}>
                    <Mail className="h-4 w-4" style={{ color: CORAL }} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. TECH INFINITE MARQUEE BAND
      ══════════════════════════════════════════════════════════════ */}
      <div className="border-b py-4 overflow-hidden" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <InfiniteMarquee
          items={PORTFOLIO_DATA.marqueeItems.map(i => ({ text: i.text }))}
          speed="normal"
          direction="left"
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          3. À PROPOS & STATS (Editorial Zigzag)
      ══════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-32 px-6 sm:px-12 lg:px-20 border-b overflow-hidden" style={{ borderColor: BORDER }}>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACID }} />
              <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: ACID }}>
                01 / À Propos
              </p>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
              Ingénierie & Passion
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: TEXT }}>
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#contact"
                className="group flex items-center gap-3 transition-all"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ backgroundColor: TEXT, color: BG, borderColor: TEXT }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-[#e84c30]" style={{ color: TEXT }}>
                  Discuter d&apos;un projet
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Stats Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="group relative p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
                  style={{ borderColor: BORDER }}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${idx % 2 === 0 ? 'bg-[#e84c30]/15' : 'bg-[#2d9c6b]/15'}`} />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-neutral-50 shadow-sm" style={{ borderColor: BORDER }}>
                      <Sparkles className="h-5 w-5" style={{ color: idx % 2 === 0 ? CORAL : ACID }} />
                    </div>
                    <div>
                      <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2" style={{ color: TEXT }}>
                        {stat.value}
                      </div>
                      <div className="text-sm font-mono font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. BOÎTE À OUTILS — 3 CARTES PAR LIGNE
             (Langages, Frameworks, SGBD, Design, DevOps, AI)
      ══════════════════════════════════════════════════════════════ */}
      <section id="skills" className="relative py-32 px-6 sm:px-12 lg:px-20 border-b overflow-hidden" style={{ borderColor: BORDER }}>
        <div className="relative z-10 max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CORAL }} />
            <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: CORAL }}>
              02 / Compétences & Technologies
            </p>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
            Boîte à Outils
          </h2>
          <p className="text-base leading-relaxed font-medium" style={{ color: TEXT_MUTED }}>
            6 catégories structurées regroupant tous mes langages, frameworks, bases de données, outils de design, DevOps et IA.
          </p>
        </div>

        {/* 3 Cards per row grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS_6.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1, type: "spring", stiffness: 100 }}
                className="group relative flex flex-col rounded-[3rem] border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-white"
                style={{ borderColor: BORDER }}
              >
                {/* Decorative Hover Glow */}
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" 
                  style={{ backgroundColor: group.color }}
                />

                {/* Vertical Card Header */}
                <div className="relative z-10 pb-6 border-b mb-6" style={{ borderColor: `${BORDER}80` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: `${group.color}15`, color: group.color }}
                    >
                      <GroupIcon className="h-6 w-6" />
                    </div>
                    <span
                      className="font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm"
                      style={{ borderColor: BORDER, backgroundColor: SURFACE, color: TEXT_MUTED }}
                    >
                      {group.skills.length} techs
                    </span>
                  </div>

                  <h3 className="font-black text-2xl uppercase tracking-tight group-hover:text-black transition-colors" style={{ color: TEXT }}>
                    {group.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed font-medium" style={{ color: TEXT_MUTED }}>
                    {group.description}
                  </p>
                </div>

                {/* Vertical List of Skills inside the Card */}
                <div className="relative z-10 space-y-4 flex-grow">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex flex-col gap-2 py-1 transition-all"
                    >
                      {/* Top: Icon + Name + Percentage */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3"
                            style={{ backgroundColor: skill.bg, color: skill.color, borderColor: BORDER }}
                          >
                            {renderSkillIcon(skill.icon)}
                          </div>
                          <span className="font-bold text-sm truncate group-hover/item:text-black transition-colors" style={{ color: TEXT }}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-black shrink-0" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. PROJETS & SYSTÈMES (Editorial Layout)
      ══════════════════════════════════════════════════════════════ */}
      <section id="projects" className="relative py-32 px-6 sm:px-12 lg:px-20 border-b overflow-hidden" style={{ borderColor: BORDER }}>
        
        {/* Background Decorative Wireframe Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <svg className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] opacity-[0.03]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="#000" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#000" strokeWidth="0.2" />
          </svg>
          <svg className="absolute top-[40%] -right-[15%] w-[80vw] h-[80vw] opacity-[0.03]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="#000" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#000" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: CORAL }}>
              03 / Réalisations
            </p>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
              Projets & Systèmes
            </h2>
            <p className="text-sm max-w-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
              Applications complètes .NET, Angular, React Native et architectures microservices. Cliquez sur la flèche pour voir l&apos;architecture détaillée.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5 p-1 rounded-full border bg-white shadow-sm" style={{ borderColor: BORDER }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#111] text-white font-semibold shadow-md scale-105"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Alternating Projects List */}
        <div className="relative z-10 flex flex-col gap-32">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full lg:w-5/12 space-y-6"
                >
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: TEXT }}>
                    {project.title}
                  </h3>

                  {/* Tags Pill Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold transition-colors hover:bg-neutral-100"
                        style={{
                          backgroundColor: SURFACE_CARD,
                          color: TEXT,
                          border: `1px solid ${BORDER}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 pt-2">
                    <p className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: TEXT_MUTED }}>
                      {project.description}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                      {project.longDescription || "Conception d'une architecture robuste, intégration d'API et optimisation des performances pour une expérience utilisateur fluide."}
                    </p>
                  </div>

                  {/* Action Buttons (Circular + Label) */}
                  <div className="pt-6 flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
                        style={{ backgroundColor: TEXT, color: BG, borderColor: TEXT }}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-[#e84c30]" style={{ color: TEXT }}>
                        Voir les détails
                      </span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 transition-all ml-4"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full border shadow-sm bg-white transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
                          style={{ borderColor: BORDER, color: TEXT }}
                        >
                          <Github className="h-5 w-5" />
                        </div>
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Image Bento/Collage Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-7/12"
                >
                  <div className="relative group cursor-pointer" onClick={() => setSelectedProject(project)}>
                    {/* Decorative Background Blob behind image */}
                    <div
                      className="absolute -inset-4 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                      style={{ backgroundColor: isEven ? "#2d9c6b15" : "#e84c3015" }}
                    />
                    
                    {/* Main Image Container */}
                    <div
                      className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border bg-neutral-100 shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
                      style={{ borderColor: BORDER, aspectRatio: "4/3" }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          if (target.parentElement) {
                            target.parentElement.style.backgroundColor = "#f5f5f5";
                          }
                        }}
                      />
                      
                      {/* Floating overlay tag on image */}
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <span className="px-4 py-2 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-white/95 text-black border shadow-lg backdrop-blur-md" style={{ borderColor: BORDER }}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Decorative floating mini card (simulating a collage) */}
                    <div
                      className={`absolute -bottom-6 ${isEven ? "-left-6" : "-right-6"} hidden sm:flex h-24 w-24 rounded-3xl border bg-white shadow-xl items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 z-20`}
                      style={{ borderColor: BORDER }}
                    >
                      <Sparkles className="h-8 w-8" style={{ color: isEven ? ACID : CORAL }} />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. EXPÉRIENCES, FORMATION & CENTRES D'INTÉRÊT
      ══════════════════════════════════════════════════════════════ */}
      <section id="experience" className="relative py-32 px-6 sm:px-12 lg:px-20 border-b overflow-hidden" style={{ borderColor: BORDER }}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CORAL }} />
              <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: CORAL }}>
                04 / Parcours & Expériences
              </p>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
              Expériences
            </h2>
          </div>
          <a
            href="/cv"
            className="group flex items-center gap-3 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-[#e84c30]" style={{ color: TEXT }}>
              Consulter le CV complet
            </span>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
              style={{ backgroundColor: TEXT, color: BG, borderColor: TEXT }}
            >
              <ArrowRight className="h-5 w-5" />
            </div>
          </a>
        </div>

        {/* Editorial Timeline Experience List */}
        <div className="relative z-10 flex flex-col gap-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 sm:p-12 rounded-[3rem] border bg-white shadow-sm overflow-hidden"
              style={{ borderColor: BORDER }}
            >
              {/* Decorative Blur Background on Hover */}
              <div 
                className={`absolute -top-32 ${idx % 2 === 0 ? '-right-32' : '-left-32'} w-96 h-96 rounded-full blur-[4rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}
                style={{ backgroundColor: idx % 2 === 0 ? CORAL : ACID }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
                {/* Left side: Timeline info & Title */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-8" style={{ borderColor: `${BORDER}60` }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border bg-neutral-50 shadow-sm font-black font-mono text-xs" style={{ borderColor: BORDER, color: idx % 2 === 0 ? CORAL : ACID }}>
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm bg-white" style={{ borderColor: BORDER, color: TEXT }}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2" style={{ color: TEXT }}>
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
                      <span>{exp.company}</span>
                      <span className="h-1 w-1 rounded-full" style={{ backgroundColor: TEXT_MUTED }} />
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Description & Tech */}
                <div className="w-full lg:w-2/3 space-y-6">
                  <p className="text-base leading-relaxed font-medium" style={{ color: TEXT_MUTED }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1.5 rounded-full text-[11px] font-mono font-bold shadow-sm transition-colors group-hover:bg-neutral-50"
                        style={{ backgroundColor: SURFACE_CARD, color: TEXT, border: `1px solid ${BORDER}` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formation & Diplômes Subsection */}
        <div className="mt-20 pt-16 border-t" style={{ borderColor: BORDER }}>
          <div className="space-y-2 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACID }} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: ACID }}>
                Cursus Académique
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
              Formation & Diplômes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Licence */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative p-8 rounded-[2rem] overflow-hidden border bg-white shadow-sm"
              style={{ borderColor: BORDER }}
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2d9c6b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span
                    className="font-mono text-xs px-4 py-1.5 rounded-full font-bold shadow-sm"
                    style={{ backgroundColor: "#f0fdf4", color: ACID, border: `1px solid ${ACID}30` }}
                  >
                    2024 – 2026
                  </span>
                  <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span className="text-[10px] font-mono font-semibold text-neutral-600">Sfax</span>
                  </div>
                </div>
                <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-[#2d9c6b] transition-colors" style={{ color: TEXT }}>
                  Licence en Technologie de l&apos;Informatique
                </h4>
                <p className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: CORAL }}>
                  ISET Sfax
                </p>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Formation approfondie en génie logiciel, architectures orientées services (.NET / Java / Node), modélisation SGBD avancée, web &amp; mobile et cybersécurité.
                </p>
                
                {/* Decorative floating icon */}
                <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <GraduationCap className="w-40 h-40" />
                </div>
              </div>
            </motion.div>

            {/* Baccalauréat */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
              className="relative p-8 rounded-[2rem] overflow-hidden border bg-white shadow-sm"
              style={{ borderColor: BORDER }}
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3178C6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <span
                    className="font-mono text-xs px-4 py-1.5 rounded-full font-bold shadow-sm"
                    style={{ backgroundColor: "#eff6ff", color: "#3178C6", border: "1px solid #3178C630" }}
                  >
                    2022 – 2023
                  </span>
                  <span
                    className="font-mono text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-wider shadow-sm"
                    style={{ backgroundColor: "#fefce8", color: "#d49e00", border: "1px solid #d49e0030" }}
                  >
                    Mention Assez Bien
                  </span>
                </div>
                <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-[#3178C6] transition-colors" style={{ color: TEXT }}>
                  Baccalauréat Informatique
                </h4>
                <p className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: CORAL }}>
                  Lycée Hedi Chaker
                </p>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Spécialisation en algorithmique fondamentale, programmation procédurale &amp; orientée objet, bases de données relationnelles et mathématiques appliquées.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Centres d'Intérêt & Activités Parascolaires */}
        <div className="mt-16 pt-14 border-t" style={{ borderColor: BORDER }}>
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CORAL }} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: CORAL }}>
                Engagement & Passions
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight" style={{ color: TEXT }}>
              Centres d&apos;Intérêt &amp; Clubs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Club Robotique */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-[2rem] border bg-white shadow-sm overflow-hidden relative"
              style={{ borderColor: BORDER }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e84c30]/5 rounded-full blur-3xl group-hover:bg-[#e84c30]/20 transition-all duration-700" />
              
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm z-10 transition-transform duration-500 group-hover:rotate-12"
                style={{ backgroundColor: "#fef2f2", color: CORAL, border: "1px solid #fecaca" }}
              >
                <Bot className="h-8 w-8" />
              </div>
              <div className="space-y-3 z-10 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <h4 className="text-xl font-black tracking-tight" style={{ color: TEXT }}>
                    Club Robotique
                  </h4>
                  <span
                    className="font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold shadow-sm"
                    style={{ backgroundColor: "#fff", color: CORAL, border: "1px solid #fee2e2" }}
                  >
                    ISET Sfax
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Participation à la programmation de modules embarqués, capteurs IoT et algorithmes de navigation pour robots autonomes lors de compétitions nationales.
                </p>
                <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-mono font-bold rounded uppercase tracking-wider">
                  Membre active
                </div>
              </div>
            </motion.div>

            {/* Club CPC */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 120 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-[2rem] border bg-white shadow-sm overflow-hidden relative"
              style={{ borderColor: BORDER }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d9c6b]/5 rounded-full blur-3xl group-hover:bg-[#2d9c6b]/20 transition-all duration-700" />

              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm z-10 transition-transform duration-500 group-hover:-rotate-12"
                style={{ backgroundColor: "#f0fdf4", color: ACID, border: "1px solid #bbf7d0" }}
              >
                <Code2 className="h-8 w-8" />
              </div>
              <div className="space-y-3 z-10 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <h4 className="text-xl font-black tracking-tight" style={{ color: TEXT }}>
                    Club CPC
                  </h4>
                  <span
                    className="font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold shadow-sm"
                    style={{ backgroundColor: "#fff", color: ACID, border: "1px solid #dcfce7" }}
                  >
                    ISET Sfax
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Résolution intensive de problèmes algorithmiques complexes, optimisation de structures de données et entraînements aux concours de programmation compétitive.
                </p>
                <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-mono font-bold rounded uppercase tracking-wider">
                  Compétitrice
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. FORMULAIRE DE CONTACT
      ══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: BG }}>
        <div className="absolute inset-0 z-0">
          <svg className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] opacity-[0.02]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="#000" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACID }} />
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: ACID }}>
                  05 / Contact
                </p>
              </div>
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.9]" style={{ color: TEXT }}>
                Travaillons<br />
                <span style={{ color: "transparent", WebkitTextStroke: `2px ${TEXT}` }}>Ensemble</span>
              </h2>
            </div>
            
            <p className="text-base leading-relaxed font-medium max-w-sm" style={{ color: TEXT_MUTED }}>
              Disponible pour des opportunités d&apos;emploi, stages PFE, missions freelance ou projets innovants. 
            </p>

            <div className="space-y-6 pt-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="group flex items-center gap-4 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md bg-white" style={{ borderColor: BORDER }}>
                  <Mail className="h-5 w-5" style={{ color: CORAL }} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: TEXT_MUTED }}>Email</div>
                  <div className="text-sm font-bold mt-0.5 group-hover:text-[#e84c30] transition-colors" style={{ color: TEXT }}>{PORTFOLIO_DATA.personal.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="group flex items-center gap-4 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md bg-white" style={{ borderColor: BORDER }}>
                  <Phone className="h-5 w-5" style={{ color: ACID }} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: TEXT_MUTED }}>Téléphone</div>
                  <div className="text-sm font-bold mt-0.5 group-hover:text-[#2d9c6b] transition-colors" style={{ color: TEXT }}>{PORTFOLIO_DATA.personal.phone}</div>
                </div>
              </a>

              <div className="group flex items-center gap-4 transition-all cursor-default">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border shadow-sm bg-white" style={{ borderColor: BORDER }}>
                  <MapPin className="h-5 w-5 text-neutral-500" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: TEXT_MUTED }}>Localisation</div>
                  <div className="text-sm font-bold mt-0.5" style={{ color: TEXT }}>{PORTFOLIO_DATA.personal.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right contact form card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 sm:p-12 rounded-[3rem] border bg-white shadow-xl overflow-hidden group" style={{ borderColor: BORDER }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e84c30]/10 rounded-full blur-3xl group-hover:bg-[#e84c30]/20 transition-all duration-700 pointer-events-none" />
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
