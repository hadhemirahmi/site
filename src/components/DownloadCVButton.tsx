"use client";

import React, { useState } from "react";
import { Download, FileText, Check } from "lucide-react";
import Link from "next/link";

interface DownloadCVButtonProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function DownloadCVButton({
  variant = "primary",
  className = "",
}: DownloadCVButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Open clean printable CV view in new tab or trigger print
      window.open("/cv", "_blank");
    }, 400);
  };

  if (variant === "outline") {
    return (
      <Link
        href="/cv"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:border-cyan-400 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all ${className}`}
      >
        <FileText className="w-3.5 h-3.5 text-cyan-400" />
        <span>Consulter CV</span>
      </Link>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg ${
        variant === "primary"
          ? "bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          : "bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-white/10 hover:border-cyan-400/40"
      } ${className}`}
    >
      {downloading ? (
        <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
      ) : (
        <Download className="w-4 h-4 text-cyan-300" />
      )}
      <span>{downloading ? "Ouverture..." : "Télécharger CV (PDF)"}</span>
    </button>
  );
}
