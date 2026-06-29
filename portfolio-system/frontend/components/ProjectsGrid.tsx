"use client";

import React, { useState } from "react";
import { Project } from "../app/fallbackData";

interface ProjectsGridProps {
  projects: Project[];
}

// Resilient image component that displays a beautiful animated placeholder if asset is missing
function SafeProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-48 md:h-52 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 flex flex-col items-center justify-center border-b border-zinc-800/80 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Generative AI / Graph SVG representation */}
        <svg className="w-12 h-12 text-zinc-700 stroke-[1.2] mb-3 group-hover:text-emerald-500/20 group-hover:scale-105 transition-all duration-300" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="20" r="3" fill="currentColor" />
          <circle cx="25" cy="50" r="3" fill="currentColor" />
          <circle cx="75" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          
          <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" />
          <line x1="25" y1="50" x2="50" y2="50" stroke="currentColor" />
          <line x1="75" y1="50" x2="50" y2="50" stroke="currentColor" />
          <line x1="50" y1="80" x2="50" y2="50" stroke="currentColor" />
          
          <line x1="25" y1="50" x2="50" y2="20" stroke="currentColor" strokeDasharray="3 3" />
          <line x1="75" y1="50" x2="50" y2="20" stroke="currentColor" strokeDasharray="3 3" />
          <line x1="25" y1="50" x2="50" y2="80" stroke="currentColor" strokeDasharray="3 3" />
          <line x1="75" y1="50" x2="50" y2="80" stroke="currentColor" strokeDasharray="3 3" />
        </svg>

        <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase select-none">
          System Visualization
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 md:h-52 overflow-hidden border-b border-zinc-800/80">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setHasError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
    </div>
  );
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const agenticProjects = projects.filter((project) => project.category === "agentic-ai");
  const mlProjects = projects.filter((project) => project.category === "ml-engineering");
  const otherProjects = projects.filter(
    (project) => project.category !== "agentic-ai" && project.category !== "ml-engineering"
  );

  const renderGrid = (projectList: Project[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projectList.map((project) => (
        <div
          key={project.id}
          className="group flex flex-col h-full bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 shadow-xl hover:shadow-indigo-500/5"
        >
          {/* Project Image Panel */}
          <SafeProjectImage
            src={project.image_path}
            alt={project.name}
          />

          {/* Project Body */}
          <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Name & Tagline */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech_stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Business Impact and Action Buttons */}
            <div className="space-y-4 pt-2">
              {/* Business Impact Log */}
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/10 flex items-start space-x-2.5">
                <svg className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Business Impact Log
                  </h4>
                  <p className="text-zinc-300 text-[11px] leading-snug mt-0.5">
                    {project.business_impact}
                  </p>
                </div>
              </div>

              {/* Repository & Demo Action Buttons */}
              <div className={project.youtube_url ? "grid grid-cols-2 gap-3" : "w-full"}>
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-300 hover:text-white text-xs font-semibold transition-all duration-300 w-full text-center"
                >
                  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>Code</span>
                </a>

                {project.youtube_url && (
                  <a
                    href={project.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 hover:text-red-300 text-xs font-semibold transition-all duration-300 shadow-sm w-full text-center"
                  >
                    <svg className="h-3.5 w-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-zinc-950 border-b border-zinc-900 relative">
      {/* Background Neon Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-20">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Demonstrating robust software automation, secure agentic systems, and high-performance machine learning deployments.
          </p>
        </div>

        {/* 1. Agentic AI & Automation Projects Section */}
        {agenticProjects.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-zinc-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  Agentic AI & Automation Projects
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">
                  Stateful multi-agent systems, autonomous coding assistants, and automated integrations using n8n, LangGraph, and CrewAI.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start md:self-auto">
                {agenticProjects.length} Projects
              </span>
            </div>
            {renderGrid(agenticProjects)}
          </div>
        )}

        {/* 2. ML Engineering Projects Section */}
        {mlProjects.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-zinc-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                  ML Engineering Projects
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">
                  Custom-trained tokenizers, high-throughput inference hosting, and real-time computer vision assistance models.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 self-start md:self-auto">
                {mlProjects.length} Projects
              </span>
            </div>
            {renderGrid(mlProjects)}
          </div>
        )}

        {/* 3. Other/Fallback Projects Section */}
        {otherProjects.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-zinc-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-400 animate-pulse" />
                  General Engineering Projects
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">
                  Additional software systems and full stack applications.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 self-start md:self-auto">
                {otherProjects.length} Projects
              </span>
            </div>
            {renderGrid(otherProjects)}
          </div>
        )}

      </div>
    </section>
  );
}
