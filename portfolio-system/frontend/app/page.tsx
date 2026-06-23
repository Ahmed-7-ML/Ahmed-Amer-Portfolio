"use client";

import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import ProjectsGrid from "../components/ProjectsGrid";
import Milestones from "../components/Milestones";
import CertificatesGallery from "../components/CertificatesGallery";
import ContactForm from "../components/ContactForm";

import {
  FALLBACK_PROFILE_DATA,
  Bio,
  Milestone,
  Project,
  Certificate
} from "./fallbackData";

export default function PortfolioHub() {
  const [profileData, setProfileData] = useState<{
    bio: Bio;
    milestones: Milestone[];
    certificates: Certificate[];
    projects: Project[];
  }>(FALLBACK_PROFILE_DATA);

  const [backendStatus, setBackendStatus] = useState<"connected" | "standalone">("standalone");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Load theme and retrieve portfolio data on mount
  useEffect(() => {
    // 1. Initial Theme Resolution (decouple from render to prevent cascading renders)
    setTimeout(() => {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
      if (savedTheme === "light") {
        setTheme("light");
        document.documentElement.classList.add("light");
      } else {
        setTheme("dark");
        document.documentElement.classList.remove("light");
      }
    }, 0);

    // 2. Fetch Portfolio Data
    async function fetchPortfolio() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const response = await fetch(`${apiUrl}/api/portfolio`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.bio && data.projects && data.milestones && data.certificates) {
            setProfileData(data);
            setBackendStatus("connected");
            console.log("FastAPI backend connection established successfully.");
          }
        } else {
          throw new Error(`HTTP Error Status: ${response.status}`);
        }
      } catch {
        console.warn("Python FastAPI backend is currently unreachable. Gracefully fallback to client-side data cache.");
        setBackendStatus("standalone");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    }

    fetchPortfolio();
  }, []);

  // Theme Toggler Action
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-4">
        {/* Loading Spinner with Neon Glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full border-4 border-indigo-500/10 border-t-indigo-500 animate-spin" />
          <div className="w-12 h-12 rounded-full border-4 border-emerald-500/10 border-b-emerald-400 animate-pulse" />
        </div>
        <p className="text-zinc-500 font-mono text-xs tracking-wider uppercase animate-pulse">
          Synchronizing Portfolio Engine...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 selection:bg-emerald-500/20 selection:text-emerald-400 transition-colors duration-300">
      
      {/* Decoupled Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/80 border-b border-zinc-900/60 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo / Initials */}
          <a
            href="#hero"
            className="flex items-center space-x-2 group focus:outline-none flex-shrink-0"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-black text-zinc-950 text-sm group-hover:scale-105 transition-transform duration-300">
              AA
            </div>
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300 hidden sm:inline-block">
              Amer.AI
            </span>
          </a>

          {/* Responsive Scrollable Navigation Links */}
          <nav className="flex items-center space-x-3 sm:space-x-5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none px-1 py-1 flex-grow justify-start md:justify-center">
            <a href="#hero" className="hover:text-white transition-colors duration-200">Bio</a>
            <a href="#techstack" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#milestones" className="hover:text-white transition-colors duration-200">Timeline</a>
            <a href="#certificates" className="hover:text-white transition-colors duration-200">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </nav>

          {/* Header Controls (Theme Toggle & Status) */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Dark / Light Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-zinc-900/65 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200 cursor-pointer shadow-sm focus:outline-none"
              aria-label="Toggle light/dark theme"
            >
              {theme === "dark" ? (
                /* Sun Icon */
                <svg className="h-4 w-4 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="h-4 w-4 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Connection Status */}
            <div className="flex items-center space-x-1.5">
              <div
                className={`h-2 w-2 rounded-full ${
                  backendStatus === "connected"
                    ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                    : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                }`}
              />
              <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider select-none hidden xs:inline-block">
                {backendStatus === "connected" ? "API Live" : "Sandbox"}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Single Page Hub */}
      <main className="flex-grow">
        <Hero bio={profileData.bio} />
        <TechStack />
        <ProjectsGrid projects={profileData.projects} />
        <Milestones milestones={profileData.milestones} />
        <CertificatesGallery certificates={profileData.certificates} />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-zinc-900 bg-zinc-950 relative transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
          
          <div>
            <p className="text-zinc-500 text-xs font-mono">
              &copy; {new Date().getFullYear()} Ahmed Akram Amer. All rights reserved.
            </p>
            <p className="text-zinc-600 text-[10px] font-mono mt-1">
              Engineered with FastAPI + Next.js App Router (Tailwind v4)
            </p>
          </div>

          {/* Quick External Actions */}
          <div className="flex items-center space-x-6 text-xs text-zinc-500 font-mono">
            <a
              href={profileData.bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={profileData.bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.bio.email}`}
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              Email API
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
