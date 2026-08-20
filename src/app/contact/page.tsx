"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-center max-w-4xl mx-auto space-y-4">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="pill-coral flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5" />
              <span>Échangeons ensemble</span>
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
          >
            Contactez-moi
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--hr-muted)" }}
          >
            Vous avez une opportunité professionnelle, un stage ou un projet innovant à développer ? Remplissez le formulaire ci-dessous ou contactez-moi directement.
          </p>
        </AnimatedSection>
      </section>

      {/* Marquee Strip */}
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

      {/* Main Content Grid: Info Cards + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection>
              <div className="paper-card p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <div>
                    <span className="pill-acid text-xs">
                      <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: "var(--hr-acid)" }} />
                      Réponse rapide garantie
                    </span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                  >
                    Coordonnées Directes
                  </h2>
                  <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
                    N&apos;hésitez pas à me joindre via vos canaux préférés.
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-4">
                  {/* Email */}
                  <div
                    className="p-4 rounded-2xl flex items-center justify-between gap-3 group transition-all"
                    style={{
                      backgroundColor: "var(--hr-paper-light)",
                      border: "1px solid color-mix(in oklab, var(--hr-ink) 10%, transparent)",
                    }}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div
                        className="p-2.5 rounded-xl shrink-0"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--hr-coral) 12%, transparent)",
                          color: "var(--hr-coral)",
                        }}
                      >
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[11px] font-mono" style={{ color: "var(--hr-muted)" }}>Email</div>
                        <a
                          href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                          className="text-xs sm:text-sm font-semibold hover:underline truncate block"
                          style={{ color: "var(--hr-ink)" }}
                        >
                          {PORTFOLIO_DATA.personal.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, "email")}
                      className="p-2 rounded-xl transition-colors shrink-0"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--hr-ink) 6%, transparent)",
                        color: "var(--hr-ink)",
                      }}
                      title="Copier l'email"
                    >
                      {copiedField === "email" ? (
                        <Check className="w-3.5 h-3.5" style={{ color: "var(--hr-acid)" }} />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div
                    className="p-4 rounded-2xl flex items-center justify-between gap-3 group transition-all"
                    style={{
                      backgroundColor: "var(--hr-paper-light)",
                      border: "1px solid color-mix(in oklab, var(--hr-ink) 10%, transparent)",
                    }}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div
                        className="p-2.5 rounded-xl shrink-0"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--hr-acid) 12%, transparent)",
                          color: "var(--hr-acid)",
                        }}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono" style={{ color: "var(--hr-muted)" }}>Téléphone</div>
                        <a
                          href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
                          className="text-xs sm:text-sm font-semibold hover:underline"
                          style={{ color: "var(--hr-ink)" }}
                        >
                          {PORTFOLIO_DATA.personal.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, "phone")}
                      className="p-2 rounded-xl transition-colors shrink-0"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--hr-ink) 6%, transparent)",
                        color: "var(--hr-ink)",
                      }}
                      title="Copier le numéro"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-3.5 h-3.5" style={{ color: "var(--hr-acid)" }} />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div
                    className="p-4 rounded-2xl flex items-center gap-3 transition-all"
                    style={{
                      backgroundColor: "var(--hr-paper-light)",
                      border: "1px solid color-mix(in oklab, var(--hr-ink) 10%, transparent)",
                    }}
                  >
                    <div
                      className="p-2.5 rounded-xl shrink-0"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--hr-violet) 12%, transparent)",
                        color: "var(--hr-violet)",
                      }}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono" style={{ color: "var(--hr-muted)" }}>Localisation</div>
                      <div className="text-xs sm:text-sm font-semibold" style={{ color: "var(--hr-ink)" }}>
                        {PORTFOLIO_DATA.personal.location}
                      </div>
                      <div className="text-[11px]" style={{ color: "var(--hr-muted)" }}>
                        {PORTFOLIO_DATA.personal.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Networks Links */}
                <div
                  className="pt-4 border-t space-y-3"
                  style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)" }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--hr-ink)" }}
                  >
                    Réseaux Professionnels
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-coral flex-1 flex items-center justify-center gap-2 text-xs"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 flex items-center justify-center gap-2 text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <AnimatedSection>
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hr-coral)" }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Questions Fréquentes</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Questions &amp; Réponses
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {PORTFOLIO_DATA.faqItems.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="paper-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold transition-colors"
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--hr-coral)" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t pt-3"
                        style={{
                          borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)",
                          color: "var(--hr-muted)",
                        }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Reverse Marquee Quote Strip */}
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
    </div>
  );
}
