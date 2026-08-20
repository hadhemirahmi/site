"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Sparkles, User, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Proposition de projet / Opportunité",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Veuillez renseigner une adresse email valide.");
      return;
    }

    setStatus("submitting");

    // Realistic submission simulation
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e84c30", "#2d9c6b", "#7c4fff", "#f4a261"],
      });
    }, 800);
  };

  return (
    <div className="paper-card p-6 md:p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center space-y-4"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
              style={{
                backgroundColor: "color-mix(in oklab, var(--hr-acid) 15%, transparent)",
                color: "var(--hr-acid)",
                border: "1px solid color-mix(in oklab, var(--hr-acid) 30%, transparent)",
              }}
            >
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
            >
              Message envoyé avec succès !
            </h3>
            <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "var(--hr-muted)" }}>
              Merci pour votre message. Je vous répondrai dans les plus brefs délais à l&apos;adresse{" "}
              <span className="font-mono font-semibold" style={{ color: "var(--hr-coral)" }}>
                {formData.email}
              </span>
              .
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  subject: "Proposition de projet / Opportunité",
                  message: "",
                });
              }}
              className="btn-outline text-xs mt-4"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 pb-2 border-b" style={{ borderColor: "color-mix(in oklab, var(--hr-ink) 8%, transparent)" }}>
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--hr-ink)" }}
              >
                Envoyer un Message
              </h3>
              <p className="text-xs" style={{ color: "var(--hr-muted)" }}>
                Remplissez ce formulaire et je vous réponds sous 24h.
              </p>
            </div>

            {status === "error" && (
              <div
                className="flex items-center gap-2 p-3 rounded-xl text-xs font-medium"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                  border: "1px solid rgba(220, 38, 38, 0.2)",
                  color: "#dc2626",
                }}
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--hr-ink)" }}>
                  <User className="w-3.5 h-3.5" style={{ color: "var(--hr-coral)" }} />
                  Votre Nom *
                </label>
                <input
                  type="text"
                  placeholder="ex: Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    backgroundColor: "var(--hr-paper-light)",
                    border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                    color: "var(--hr-ink)",
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--hr-ink)" }}>
                  <Mail className="w-3.5 h-3.5" style={{ color: "var(--hr-coral)" }} />
                  Votre Email *
                </label>
                <input
                  type="email"
                  placeholder="ex: contact@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    backgroundColor: "var(--hr-paper-light)",
                    border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                    color: "var(--hr-ink)",
                  }}
                  required
                />
              </div>
            </div>

            {/* Sujet */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--hr-ink)" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--hr-acid)" }} />
                Objet du message
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all cursor-pointer"
                style={{
                  backgroundColor: "var(--hr-paper-light)",
                  border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                  color: "var(--hr-ink)",
                }}
              >
                <option value="Proposition de projet / Opportunité">Opportunité professionnelle / Emploi</option>
                <option value="Proposition de stage Full-Stack">Stage PFE / Professionnel</option>
                <option value="Projet Freelance & Développement Web/Mobile">Mission Freelance Web / Mobile</option>
                <option value="Autre demande">Autre collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--hr-ink)" }}>
                  <MessageSquare className="w-3.5 h-3.5" style={{ color: "var(--hr-coral)" }} />
                  Votre Message *
                </label>
                <span className="text-[11px] font-mono" style={{ color: "var(--hr-muted)" }}>
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                rows={5}
                placeholder="Décrivez votre projet, vos attentes ou votre proposition..."
                value={formData.message}
                maxLength={1000}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  backgroundColor: "var(--hr-paper-light)",
                  border: "1px solid color-mix(in oklab, var(--hr-ink) 12%, transparent)",
                  color: "var(--hr-ink)",
                }}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-coral w-full flex items-center justify-center gap-2 text-sm disabled:opacity-50 py-3.5"
            >
              {status === "submitting" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmission en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer mon message</span>
                </>
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
