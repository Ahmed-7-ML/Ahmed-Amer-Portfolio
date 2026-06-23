"use client";

import React, { useState } from "react";
import { Bio } from "../app/fallbackData";
import NeuralNetworkBg from "./NeuralNetworkBg";

interface HeroProps {
  bio: Bio;
}

// Resilient profile image loader that occupies the full card and falls back if the file is missing
function SafeAvatarImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-950 to-zinc-900 flex flex-col items-center justify-center p-6 text-center select-none relative">
        {/* Visual Neural Network Art (representing AI/ML focus) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full stroke-zinc-700 stroke-[1.5]" viewBox="0 0 100 100">
            <line x1="25" y1="25" x2="50" y2="50" />
            <line x1="75" y1="50" x2="50" y2="50" />
            <line x1="33" y1="66" x2="50" y2="50" />
            <line x1="25" y1="25" x2="33" y2="66" />
            <line x1="75" y1="50" x2="33" y2="66" />
          </svg>
        </div>

        {/* Big initials representation */}
        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-650">
          AAA
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function Hero({ bio }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 border-b border-zinc-900 grid-bg"
    >
      {/* Dynamic Background Neural Network Interactive Animation */}
      <NeuralNetworkBg />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Bio Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1 fade-in-up">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              Available for Internships & Projects
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">{bio.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-400 mt-2">
              {bio.title}
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            {bio.headline}
          </p>

          {/* Detailed About */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
            {bio.about}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-zinc-950 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25"
            >
              Explore Engineering Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-bold text-sm bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-zinc-800/80"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links & Info */}
          <div className="flex items-center space-x-6 pt-4 border-t border-zinc-900/60 max-w-md">
            {/* GitHub */}
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-indigo-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href={`mailto:${bio.email}`}
              className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
              aria-label="Send Email"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h-3a2 2 0 01-2-2V8a2 2 0 012-2h6a2 2 0 012 2v7a2 2 0 01-2 2z" />
              </svg>
            </a>
            {/* Education Badge */}
            <div className="text-zinc-500 text-xs font-semibold flex items-center space-x-1.5">
              <svg className="h-4.5 w-4.5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span>{bio.education} Class of {bio.graduation_year}</span>
            </div>
          </div>

        </div>

        {/* Profile Visual Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Decorative Pulse Glow Behind Profile Image */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-emerald-500 to-indigo-500 opacity-25 blur-xl group-hover:opacity-45 transition duration-1000 group-hover:duration-200 pulse-neon" />
            
            {/* Avatar Card Container */}
            <div className="relative w-72 h-[380px] md:w-80 md:h-[420px] rounded-3xl bg-zinc-900 border border-zinc-800/80 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-zinc-700">
              
              <SafeAvatarImage src={bio.avatar_url} alt={bio.name} />

              {/* Text Info Overlay on bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 pt-16 flex flex-col text-left">
                <h3 className="font-extrabold text-zinc-100 text-lg group-hover:text-emerald-400 transition-colors duration-300">
                  {bio.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  AI/ML & Data Science Specialist
                </p>
                
                <div className="flex items-center space-x-1.5 mt-3.5 px-2.5 py-1 bg-zinc-950/90 rounded-lg border border-zinc-800/60 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400 tracking-tight">
                    Menoufia Univ. (Grad 2026)
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
