"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
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
  GraduationCap,
  ExternalLink,
  MessageSquare,
  FileCode2,
  Flame,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import ProjectModal from "@/components/ProjectModal";
import InfiniteMarquee from "@/components/InfiniteMarquee";

// Verified Standard React Icons
import {
  SiDotnet,
  SiCplusplus,
  SiAngular,
  SiReact,
  SiNextdotjs,
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

import { FaJava, FaDatabase, FaRobot, FaBrain, FaNetworkWired, FaPalette, FaTelegramPlane, FaTachometerAlt } from "react-icons/fa";

// 6 Categories structured with official icons (3 cards per row)
const SKILL_GROUPS_6 = [
  {
    title: "Langages",
    tag: "Languages",
    icon: Code2,
    color: "#0f172a",
    badgeColor: "bg-slate-100 text-slate-800",
    description: "Langages de programmation système, web, orientés objet et fonctionnels.",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, icon: SiJavascript, color: "#E5A00D", bg: "#fefce8" },
      { name: "TypeScript", level: 92, icon: SiTypescript, color: "#3178C6", bg: "#eff6ff" },
      { name: "C# / .NET", level: 90, icon: SiDotnet, color: "#512BD4", bg: "#f3f0ff" },
      { name: "Python", level: 82, icon: SiPython, color: "#3776AB", bg: "#eff6ff" },
      { name: "Java", level: 78, icon: FaJava, color: "#E76F00", bg: "#fff7ed" },
      { name: "PHP", level: 80, icon: SiPhp, color: "#777BB4", bg: "#f5f3ff" },
      { name: "Dart", level: 75, icon: SiDart, color: "#0175C2", bg: "#f0f9ff" },
      { name: "C++", level: 72, icon: SiCplusplus, color: "#00599C", bg: "#eff6ff" },
    ]
  },
  {
    title: "Frameworks & Web",
    tag: "Frameworks & Libs",
    icon: Boxes,
    color: "#0f172a",
    badgeColor: "bg-blue-50 text-blue-800",
    description: "Écosystèmes complets pour le développement Web moderne, Backend & Mobile.",
    skills: [
      { name: "Next.js 15 (App Router)", level: 92, icon: SiNextdotjs, color: "#000000", bg: "#f8fafc" },
      { name: "ASP.NET Core 8", level: 88, icon: SiDotnet, color: "#512BD4", bg: "#f3f0ff" },
      { name: "Angular 17+", level: 88, icon: SiAngular, color: "#DD0031", bg: "#fef2f2" },
      { name: "React.js", level: 92, icon: SiReact, color: "#087ea4", bg: "#f0f9ff" },
      { name: "React Native", level: 90, icon: SiReact, color: "#087ea4", bg: "#f0f9ff" },
      { name: "Node.js & Express", level: 88, icon: SiNodedotjs, color: "#339933", bg: "#f0fdf4" },
      { name: "Flutter", level: 80, icon: SiFlutter, color: "#02569B", bg: "#f0f9ff" },
      { name: "Redux Toolkit", level: 86, icon: SiRedux, color: "#764ABC", bg: "#faf5ff" },
      { name: "FastAPI / Django", level: 78, icon: SiFastapi, color: "#009688", bg: "#f0fdfa" },
    ]
  },
  {
    title: "Bases de Données",
    tag: "Databases & Data",
    icon: Database,
    color: "#0f172a",
    badgeColor: "bg-emerald-50 text-emerald-800",
    description: "Systèmes de gestion de bases de données relationnelles, NoSQL et modélisation.",
    skills: [
      { name: "PostgreSQL", level: 90, icon: SiPostgresql, color: "#4169E1", bg: "#eff6ff" },
      { name: "MongoDB", level: 88, icon: SiMongodb, color: "#47A248", bg: "#f0fdf4" },
      { name: "MySQL", level: 88, icon: SiMysql, color: "#4479A1", bg: "#f0f9ff" },
      { name: "Oracle SQL", level: 80, icon: FaDatabase, color: "#F80000", bg: "#fef2f2" },
    ]
  },
  {
    title: "Design UI / UX",
    tag: "Design & Prototypage",
    icon: Palette,
    color: "#0f172a",
    badgeColor: "bg-rose-50 text-rose-800",
    description: "Conception d'interfaces utilisateurs, design systems et identité visuelle.",
    skills: [
      { name: "Figma (UI Kits & AutoLayout)", level: 92, icon: SiFigma, color: "#F24E1E", bg: "#fff1ee" },
      { name: "Adobe Illustrator", level: 85, icon: FaPalette, color: "#FF9A00", bg: "#fffbeb" },
      { name: "Adobe Photoshop", level: 84, icon: FaPalette, color: "#31A8FF", bg: "#f0f9ff" },
      { name: "Wireframing & Prototypage", level: 90, icon: Layers, color: "#6366F1", bg: "#eef2ff" },
    ]
  },
  {
    title: "DevOps & Cloud",
    tag: "CI/CD & Cloud",
    icon: CloudCog,
    color: "#0f172a",
    badgeColor: "bg-cyan-50 text-cyan-800",
    description: "Conteneurisation, automatisation des déploiements et gestion de versions.",
    skills: [
      { name: "Git & GitHub Actions", level: 90, icon: SiGithub, color: "#000000", bg: "#f5f5f5" },
      { name: "Docker & Docker Compose", level: 80, icon: SiDocker, color: "#2496ED", bg: "#eff6ff" },
      { name: "Jenkins & CI/CD", level: 70, icon: SiJenkins, color: "#D24939", bg: "#fef2f2" },
      { name: "Kubernetes (Notions)", level: 65, icon: SiKubernetes, color: "#326CE5", bg: "#eff6ff" },
      { name: "grafana", level: 80, icon: FaTachometerAlt, color: "#F6531F", bg: "#fff4f2" },
      { name: "Prometheus", level: 80, icon: FaTachometerAlt, color: "#F6531F", bg: "#fff4f2" },
      
    ]
  },
  {
    title: "IA & Prompt Engineering",
    tag: "IA & API Intelligentes",
    icon: Bot,
    color: "#0f172a",
    badgeColor: "bg-purple-50 text-purple-800",
    description: "Intégration d'API d'IA générative, bancs d'évaluation de prompts et pipelines.",
    skills: [
      { name: "Prompt Engineering & Evaluation", level: 92, icon: FaBrain, color: "#10A37F", bg: "#ecfdf5" },
      { name: "REST API IA (OpenAI / Claude)", level: 90, icon: FaRobot, color: "#6366F1", bg: "#eef2ff" },
      { name: "n8n Automation", level: 80, icon: FaNetworkWired, color: "#EA4B71", bg: "#fdf2f8" },
      { name: "LangChain & RAG Basics", level: 75, icon: SiHuggingface, color: "#FFD21E", bg: "#fefce8" },
      {name:"machine learning basics",level:80,icon:FaNetworkWired,color:"#EA4B71",bg:"#fdf2f8"},
      {name:"LLM Fine-tuning & Training",level:65,icon:FaNetworkWired,color:"#EA4B71",bg:"#fdf2f8"},
      {name:"RAG System Implementation",level:72,icon:FaNetworkWired,color:"#EA4B71",bg:"#fdf2f8"},
      {name:"Data Science & Analysis",level:65,icon:FaNetworkWired,color:"#EA4B71",bg:"#fdf2f8"},
    ]
  }
];

// Code symbols and tokens floating across the page with smooth animations
const FLOATING_CODE_SYMBOLS = [
  { text: "</>", top: "4%", left: "3%", size: "text-2xl sm:text-3xl", duration: 12, delay: 0 },
  { text: "{ ... }", top: "10%", right: "5%", size: "text-xl sm:text-2xl", duration: 14, delay: 1 },
  { text: "const app = async () =>", top: "18%", left: "6%", size: "text-xs sm:text-sm", duration: 16, delay: 2 },
  { text: "<div>", top: "26%", right: "7%", size: "text-sm sm:text-base", duration: 13, delay: 0.5 },
  { text: "SELECT * FROM users;", top: "34%", left: "4%", size: "text-xs sm:text-sm", duration: 18, delay: 3 },
  { text: "[].map(item => )", top: "42%", right: "4%", size: "text-xs sm:text-sm", duration: 15, delay: 1.5 },
  { text: "git commit -m 'feat: live'", top: "50%", left: "5%", size: "text-xs sm:text-sm", duration: 17, delay: 4 },
  { text: "Task<IActionResult>", top: "58%", right: "6%", size: "text-xs sm:text-sm", duration: 16, delay: 2.5 },
  { text: "=>", top: "66%", left: "6%", size: "text-2xl sm:text-4xl", duration: 11, delay: 1 },
  { text: "docker-compose up -d", top: "74%", right: "5%", size: "text-xs sm:text-sm", duration: 15, delay: 3.5 },
  { text: "<Component />", top: "82%", left: "4%", size: "text-sm sm:text-base", duration: 14, delay: 2 },
  { text: "01011001", top: "90%", right: "7%", size: "text-xs sm:text-sm", duration: 19, delay: 0 },
  { text: "npm i @next/core", top: "14%", left: "85%", size: "text-xs sm:text-sm", duration: 14, delay: 4 },
  { text: "status: 200 OK", top: "38%", left: "88%", size: "text-xs sm:text-sm", duration: 16, delay: 1 },
  { text: "export default", top: "62%", left: "90%", size: "text-xs sm:text-sm", duration: 15, delay: 2 },
  { text: "useEffect(() => {}, [])", top: "78%", left: "87%", size: "text-xs sm:text-sm", duration: 17, delay: 5 },
  { text: "#!/usr/bin/env node", top: "94%", left: "10%", size: "text-xs sm:text-sm", duration: 18, delay: 3 },
];

export default function BehanceWhitePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Carousel state for bottom hero strip (matching Behance Screenshot 1)
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = ["Tous", "Full-Stack", ".NET & Angular", "Mobile", "IA & Web", "UI/UX Design"];

  const filteredProjects = activeCategory === "Tous"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  const carouselItems = PORTFOLIO_DATA.projects;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white relative overflow-x-hidden">

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          ANIMATED FLOATING CODE SYMBOLS & TOKENS (GLOBAL BACKGROUND)
      ══════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {FLOATING_CODE_SYMBOLS.map((sym, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.18 }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              opacity: [0.15, 0.4, 0.15],
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: sym.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sym.delay,
            }}
            className={`absolute font-mono font-black tracking-wider text-slate-500/80 select-none ${sym.size}`}
            style={{
              top: sym.top,
              left: sym.left,
              right: sym.right,
            }}
          >
            {sym.text}
          </motion.div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (BEHANCE BORDERLESS EDITORIAL DESIGN)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="px-4 sm:px-8 lg:px-14 pt-4 pb-16">
        {/* Master Frame Container */}
        <div className="behance-master-frame p-8 sm:p-12 lg:p-16 overflow-hidden relative">

          {/* Subtle Ambient Background Orbital Curves inside Frame */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <svg className="absolute -top-[20%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-40 text-slate-200" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.25" />
              <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1.5,1.5" />
            </svg>
          </div>

          {/* Massive Typography Layout (Exact Behance Composition) */}
          <div className="relative z-10 space-y-8 sm:space-y-12 py-4">

            {/* ROW 1: Full-stack (Left) + Projects Pill & Arrow (Right) */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[13vw] sm:text-[11vw] lg:text-[7.8rem] font-black tracking-[-0.03em] uppercase text-slate-900 leading-[0.88] select-none"
              >
                Full-stack
              </motion.h1>

              {/* Projects Pill & Arrow Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2.5"
              >
                <a
                  href="#projects"
                  className="px-8 sm:px-14 py-3 sm:py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-editorial-italic italic font-medium transition shadow-xs"
                >
                  Projects
                </a>
                <a
                  href="#projects"
                  aria-label="Voir les projets"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-800 transition shadow-xs group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </div>

            {/* ROW 2: Bio Manifesto (Left) + Developer Serif Heading (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Manifesto Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 space-y-2"
              >
                <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-md">
                  My goal is to <span className="italic text-slate-900 font-medium">write maintainable, clean</span> and <span className="italic text-slate-900 font-medium">understandable code</span> to process development was enjoyable.
                </p>
              </motion.div>

              {/* Right Column: Massive Developer Serif */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-7 flex justify-start lg:justify-end"
              >
                <h2
                  className="font-editorial-serif text-[14vw] sm:text-[12vw] lg:text-[8.5rem] italic font-normal tracking-tight text-slate-900 leading-[0.85] select-none"
                >
                  Developer
                </h2>
              </motion.div>
            </div>

            {/* ROW 3: Full-Width 5 Social Pill Buttons (Exact Behance Layout) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-start sm:justify-between gap-3 pt-4"
            >
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="pill-button px-6 py-3"
              >
                <SiGithub className="w-4 h-4 text-slate-900" />
                <span>Github</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pill-button px-6 py-3"
              >
                <span className="font-bold text-xs">in</span>
                <span>Linkedin</span>
              </a>

              <a
                href="https://t.me/hadhemi_rahmi"
                target="_blank"
                rel="noreferrer"
                className="pill-button px-6 py-3"
              >
                <FaTelegramPlane className="w-4 h-4 text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="pill-button px-6 py-3"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>Email</span>
              </a>

              <Link
                href="/cv"
                className="pill-button px-6 py-3 bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Resume CV</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. DEUX BANDES TRÈS CROISÉES — TRANSLATION INFINIE CONTINUE DES MOTS
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative py-28 my-10 overflow-hidden select-none bg-white pointer-events-none">

        {/* Bande 1: (-6deg) - Translation infinie des mots vers la droite */}
        <div
          className="relative z-10 -rotate-6 transform scale-125 shadow-2xl py-4 border-y border-neutral-900 flex overflow-hidden whitespace-nowrap"
          style={{ backgroundColor: "#000000" }}
        >
          <motion.div
            className="flex gap-0 items-center shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...Array(4)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center">
                {[
                  "FULL-STACK DEVELOPER",
                  "C# / ASP.NET CORE 8",
                  "ANGULAR 17+",
                  "REACT NATIVE",
                  "NEXT.JS & TYPESCRIPT",
                  "DEVOPS & DOCKER",
                  "POSTGRESQL & MONGODB",
                  "FIGMA & UI/UX",
                  "AI & PROMPT ENGINEERING",
                ].map((text, i) => (
                  <span key={i} className="inline-flex items-center">
                    <span className="text-white font-mono font-black text-sm sm:text-base tracking-[0.25em] uppercase px-6">
                      {text}
                    </span>
                    <span className="text-amber-400 text-xs px-2">.</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bande 2: (+5.5deg) - Translation infinie des mots vers la gauche (30s) */}
        <div
          className="relative z-20 rotate-[5.5deg] -mt-16 transform scale-125 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-4 border-y border-neutral-900 flex overflow-hidden whitespace-nowrap"
          style={{ backgroundColor: "#000000" }}
        >
          <motion.div
            className="flex gap-0 items-center shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 70,
              repeat: Infinity,
            }}
          >
            {[...Array(4)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center">
                {PORTFOLIO_DATA.marqueeItems.map((item, i) => (
                  <span key={i} className="inline-flex items-center">
                    <span className="text-white font-mono font-black text-sm sm:text-base tracking-[0.22em] uppercase px-6">
                      {item.text}
                    </span>
                    <span className="text-amber-400 text-xs px-2">.</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          2. À PROPOS — PROFIL & IDENTITÉ
      ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-28 px-4 sm:px-8 lg:px-14 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                    02 / Profil & Identité
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900">
                  À Propos
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                  {PORTFOLIO_DATA.personal.bio}
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { label: "Structure", text: "Architecture fiable, code lisible, APIs conçues pour durer." },
                  { label: "Précision", text: "Interfaces pensées pour les utilisateurs réels, pas les flux idéaux." },
                  { label: "Momentum", text: "Itérations courtes, retours honnêtes, logiciels utiles livrés." },
                ].map((item, i) => (
                  <div key={item.label} className="bento-card-white p-6 space-y-3">
                    <span className="font-mono text-xs text-slate-400 font-bold">0{i + 1}</span>
                    <h3 className="font-extrabold text-lg text-slate-900">{item.label}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Status & CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-700">{PORTFOLIO_DATA.personal.status}</span>
                </div>
                <a
                  href="/#contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all hover:opacity-90 shadow-sm"
                  style={{ backgroundColor: "#111", color: "#fff" }}
                >
                  Me Contacter
                </a>
              </div>
            </motion.div>

            {/* Right: Photo originale sans modification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center p-2">
                <Image
                  src="/profile.jpg"
                  alt="Hadhemi Rahmi"
                  width={460}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════
          3. BOÎTE À OUTILS & COMPÉTENCES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="skills" className="relative py-28 px-4 sm:px-8 lg:px-14 bg-slate-50/60 border-t border-slate-100 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900">
             Compétences<span className="italic font-editorial-serif font-normal text-slate-700"> Techniques</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed font-mono">
              Outils et technologies que j&apos;utilise pour concevoir des applications performantes.
            </p>
          </motion.div>

          {/* Grid de Cartes de compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_GROUPS_6.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md rounded-3xl p-7 hover:border-slate-400/60 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 transform flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-extrabold mb-6 border-b border-slate-100 pb-4 text-slate-900 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400 font-mono text-sm">{`0${idx + 1}.`}</span>
                      <span>{group.title}</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {group.skills.length}
                    </span>
                  </h3>

                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="group relative"
                      >
                        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-2xs shrink-0 transition-transform group-hover:scale-110"
                              style={{ backgroundColor: skill.bg || "#f8fafc", color: skill.color, borderColor: "#e2e8f0" }}
                            >
                              {renderSkillIcon(skill.icon)}
                            </div>
                            <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-slate-900 transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          {/* Proficiency gauge */}
                          <div className="flex items-center gap-2.5">
                            <div className="w-16 sm:w-20 h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level || 85}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                              />
                            </div>
                            <span className="font-mono text-[10px] font-bold text-slate-400 w-7 text-right">
                              {skill.level || 85}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. SECTION PROJETS RÉALISÉS (DESIGN ÉPURÉ & MODERNE)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="relative py-28 px-4 sm:px-8 lg:px-14 border-t border-slate-100 overflow-hidden bg-transparent">
        {/* Background radial glow */}
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">04 / Réalisations</span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900 mb-2 mt-2">
                Projets <span className="italic font-editorial-serif font-normal text-slate-700">Réalisés</span>
              </h2>
              <p className="text-slate-600 font-mono text-sm max-w-lg">
                Une sélection de travaux illustrant mon approche de l&apos;architecture logicielle, du web et du mobile.
              </p>
            </div>
            <a 
              href="https://github.com/hadhemirahmi" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm font-mono text-slate-900 font-bold hover:underline underline-offset-4 flex items-center gap-2 transition-colors duration-300"
            >
              Voir tout sur GitHub <Github className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                title: "BloodConnect",
                description: "Plateforme médicale connectant les donneurs de sang et les centres hospitaliers en temps réel. Permet aux donneurs de s'inscrire et aux hôpitaux de signaler des urgences avec groupe sanguin et localisation.",
                image: "/images/bloodconnect.png",
                tags: ["Python", "Django", "SQLite", "HTML/CSS", "JavaScript"],
                github: "https://github.com/hadhemirahmi/BloodConnect",
                demo: "https://hadhemi.pythonanywhere.com/"
              },
              {
                title: "movieForja",
                description: "Application web de découverte de films permettant de rechercher, consulter et mettre en favoris des films populaires. Interface intuitive avec mode sombre et système d'authentification.",
                image: "/images/simplemovies.png",
                tags: ["React", "HTML/CSS", "JavaScript", "API TMDB"],
                github: "https://github.com/hadhemirahmi/movie",
                demo: "https://movieforja.netlify.app/"
              },
              {
                title: "GreenLife",
                description: "Application innovante qui transforme vos choix quotidiens en un impact positif mesurable pour la planète. Sensibilisation environnementale avec suivi de l'empreinte carbone.",
                image: "/images/greenlife.png",
                tags: ["React Native", "JavaScript", "TypeScript", "MongoDB", "Node.js", "Express.js"],
                github: "https://github.com/hadhemirahmi/stage",
                demo: "https://greenlifehadh.netlify.app/"
              },
              {
                title: "Motorz.tn",
                description: "Plateforme moderne de vente et de location de véhicules en Tunisie avec catalogue interactif et filtres personnalisés.",
                image: "/images/motorz.png",
                tags: ["React.js", "Material UI", "JavaScript", "REST API"],
                github: "https://github.com/hadhemirahmi/voiture",
                demo: "https://voiture-production.up.railway.app/"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md rounded-3xl p-6 hover:border-slate-400/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Project Image Frame with overlays */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-200/80 group-hover:border-slate-300 transition-all duration-500 shadow-sm bg-slate-50">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    
                    {/* Glassmorphic hover actions panel */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-xs">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-900 transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer shadow-lg"
                          title="Code GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-900 transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer shadow-lg"
                          title="Démo en direct"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200/70 text-slate-700 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Title & Actions Links */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-black text-slate-900 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-sans mt-auto">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════
          5. EXPÉRIENCES & PARCOURS PROFESSIONNEL
      ══════════════════════════════════════════════════════════════════ */}
      <section id="experience" className="relative py-28 px-4 sm:px-8 lg:px-14 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-900" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                  05 / Parcours & Expériences
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900">
                Expérience
              </h2>
            </div>

            <Link
              href="/cv"
              className="pill-button"
            >
              <span>Consulter mon CV complet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Timeline Experience Cards */}
          <div className="space-y-8">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bento-card-white p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Role & Meta */}
                  <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 lg:border-r border-slate-100 lg:pr-6">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      <span className="text-slate-900 font-bold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>
                  </div>

                  {/* Right Details & Achievements */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {exp.technologies.map((t) => (
                        <span key={t} className="pill-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formation & Clubs Subsection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">

            {/* Formation Card */}
            <div className="bento-card-white p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-slate-900" />
                  <h3 className="font-extrabold text-xl text-slate-900">Formation & Diplômes</h3>
                </div>
                <span className="pill-tag font-bold">2022 – 2026</span>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">2024 – 2026</span>
                    <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">En cours</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Licence en Technologie de l&apos;Informatique</h4>
                  <p className="text-xs font-semibold text-slate-600">ISET Sfax (Institut Supérieur des Études Technologiques)</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Génie logiciel, architectures .NET / Angular / Node, SGBD avancés (SQL, PostgreSQL), mobile et cybersécurité.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">2022 – 2023</span>
                    <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">Mention Assez Bien</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Baccalauréat Informatique</h4>
                  <p className="text-xs font-semibold text-slate-600">Lycée Hedi Chaker, Sfax</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Algorithmique, programmation orientée objet, bases de données et mathématiques appliquées.
                  </p>
                </div>
              </div>
            </div>

            {/* Clubs & Engagement */}
            <div className="bento-card-white p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-slate-900" />
                  <h3 className="font-extrabold text-xl text-slate-900">Clubs & Engagement</h3>
                </div>
                <span className="pill-tag font-bold">ISET Sfax</span>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase">Club Robotique</span>
                    <span className="text-[10px] font-mono bg-slate-900 text-white px-2.5 py-0.5 rounded-full font-bold">Membre Active</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Programmation de microcontrôleurs, capteurs IoT et algorithmes de navigation pour robots autonomes lors de concours nationaux.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase">Club CPC (Compétitions)</span>
                    <span className="text-[10px] font-mono bg-slate-900 text-white px-2.5 py-0.5 rounded-full font-bold">Compétitrice</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Résolution intensive de problèmes algorithmiques en C++ et Python, speed-coding et optimisation de structures de données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. CONTACT & COLLABORATION
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-28 px-4 sm:px-8 lg:px-14 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                    06 / Contact
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900 leading-[0.95]">
                  Travaillons<br />
                  <span className="font-editorial-italic italic font-normal text-slate-600">Ensemble</span>
                </h2>
              </div>

              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Je suis actuellement disponible pour des opportunités de stage, des contrats professionnels et des collaborations de développement web, mobile ou IA.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition group shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Email Direct</div>
                    <div className="text-sm font-bold text-slate-900">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition group shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Téléphone / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900">{PORTFOLIO_DATA.personal.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Localisation</div>
                    <div className="text-sm font-bold text-slate-900">{PORTFOLIO_DATA.personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bento-card-white p-8 sm:p-12 shadow-xl bg-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
