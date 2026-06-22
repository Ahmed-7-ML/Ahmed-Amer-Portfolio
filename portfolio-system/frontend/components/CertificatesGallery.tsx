"use client";

import React, { useState } from "react";
import { Certificate } from "../app/fallbackData";

interface CertificatesGalleryProps {
  certificates: Certificate[];
}

// Resilient Certificate Image component with loading states and fallback representations
function SafeCertImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div className="w-full h-40 bg-zinc-950 flex flex-col items-center justify-center border-b border-zinc-800/80 p-4 text-center">
        <svg className="h-8 w-8 text-zinc-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
          Document Offline
        </span>
        <span className="text-[9px] text-zinc-600 block mt-1 line-clamp-1">{title}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-40 bg-zinc-950 overflow-hidden border-b border-zinc-850 flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <div className="w-6 h-6 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onLoad={() => setLoading(false)}
        onError={() => setHasError(true)}
      />
      {/* Dark overlay showing "view" icon on hover */}
      <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="p-2.5 rounded-full bg-emerald-500/90 text-zinc-950 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
          <svg className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function CertificatesGallery({ certificates }: CertificatesGalleryProps) {
  const [filter, setFilter] = useState<string>("all");
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Grouped Filter Tabs
  const tabs = [
    { id: "all", label: "All Credentials" },
    { id: "ai-ml", label: "AI & Machine Learning" },
    { id: "languages", label: "Languages (Python & SQL)" },
    { id: "cloud-experience", label: "Cloud & Simulation" }
  ];

  // Filter Logic
  const filteredCertificates = certificates.filter((cert) => {
    if (filter === "all") return true;
    if (filter === "cloud-experience") {
      return cert.category === "cloud-infra" || cert.category === "experience";
    }
    return cert.category === filter;
  });

  return (
    <section id="certificates" className="py-20 px-4 md:px-8 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Verified Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Credentials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Click on any certificate badge to inspect the original qualification artifact in high resolution.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase border transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent text-zinc-950 shadow-md shadow-emerald-500/10"
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group flex flex-col bg-zinc-900/30 border border-zinc-800/80 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              {/* Certificate Image Frame */}
              <SafeCertImage src={cert.image_path} alt={cert.title} title={cert.title} />

              {/* Certificate Details */}
              <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-xs font-bold text-zinc-100 group-hover:text-emerald-400 line-clamp-2 leading-snug transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-medium mt-1">
                    Issued by {cert.issuer}
                  </p>
                </div>
                <div className="pt-1">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-zinc-950 border border-zinc-850 text-zinc-400 uppercase tracking-wider">
                    {cert.category === "ai-ml"
                      ? "AI / ML"
                      : cert.category === "languages"
                      ? "Programming"
                      : cert.category === "cloud-infra"
                      ? "Cloud"
                      : "Simulation"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Viewer */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md transition-all duration-300 fade-in-up"
            onClick={() => setActiveCert(null)}
          >
            {/* Modal Body Container */}
            <div
              className="relative max-w-4xl w-full max-h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Title bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-wide">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    Verified Credential — Issued by {activeCert.issuer}
                  </p>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors duration-250 cursor-pointer"
                  aria-label="Close credentials view"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Large Image Frame */}
              <div className="flex-1 bg-zinc-950/40 p-4 md:p-8 flex items-center justify-center overflow-auto">
                <img
                  src={activeCert.image_path}
                  alt={activeCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl border border-zinc-900"
                />
              </div>

              {/* Footer details */}
              <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-900/40 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Secure Digital Credential Verification Active
                </span>
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  Dismiss View
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
