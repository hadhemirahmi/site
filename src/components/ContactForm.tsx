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
        colors: ["#0f172a", "#10b981", "#3b82f6", "#f59e0b"],
      });
    }, 800);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Message envoyé avec succès !
            </h3>
            <p className="text-sm max-w-md mx-auto leading-relaxed text-slate-500 font-medium">
              Merci pour votre message. Je vous répondrai dans les plus brefs délais à l&apos;adresse{" "}
              <span className="font-mono font-bold text-slate-900">
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
              className="pill-button mt-4"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 pb-3 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Envoyer un Message
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Remplissez ce formulaire et je vous répondrai sous 24h.
              </p>
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl text-xs font-medium bg-red-50 border border-red-200 text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-900" />
                  Votre Nom *
                </label>
                <input
                  type="text"
                  placeholder="ex: Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-900" />
                  Votre Email *
                </label>
                <input
                  type="email"
                  placeholder="ex: contact@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  required
                />
              </div>
            </div>

            {/* Sujet */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                Objet du message
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 cursor-pointer"
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
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-900" />
                  Votre Message *
                </label>
                <span className="text-[11px] font-mono text-slate-400">
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                rows={5}
                placeholder="Décrivez votre projet, vos attentes ou votre proposition..."
                value={formData.message}
                maxLength={1000}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition disabled:opacity-50 shadow-md cursor-pointer"
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
