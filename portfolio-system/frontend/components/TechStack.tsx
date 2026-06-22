"use client";

import React from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; tag?: string }[];
  colorClass: string;
}

export default function TechStack() {
  const categories: SkillCategory[] = [
    {
      title: "Generative AI & LLMs",
      colorClass: "from-emerald-500/20 to-teal-500/5 border-emerald-500/20 text-emerald-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: "LangChain & LlamaIndex", level: "Advanced" },
        { name: "OpenAI / Hugging Face APIs", level: "Expert" },
        { name: "Prompt Security (Injection Defense)", level: "Advanced", tag: "Security" },
        { name: "Agentic Workflows", level: "Intermediate" },
        { name: "Vector Databases (Chroma, Pinecone)", level: "Advanced" },
        { name: "RAG Architectures", level: "Expert" }
      ]
    },
    {
      title: "Machine Learning & Core AI",
      colorClass: "from-indigo-500/20 to-blue-500/5 border-indigo-500/20 text-indigo-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: [
        { name: "PyTorch & Deep Learning", level: "Advanced" },
        { name: "Computer Vision (YOLOv8, OpenCV)", level: "Advanced" },
        { name: "Custom Tokenization (BPE)", level: "Specialist", tag: "NLP" },
        { name: "Scikit-Learn", level: "Expert" },
        { name: "Natural Language Processing", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Expert" }
      ]
    },
    {
      title: "Cloud & Dev Mgt",
      colorClass: "from-purple-500/20 to-pink-500/5 border-purple-500/20 text-purple-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: "FastAPI / REST Endpoints", level: "Expert" },
        { name: "AWS (SageMaker, S3, EC2)", level: "Prep Phase" },
        { name: "Docker / Containerization", level: "Advanced" },
        { name: "PostgreSQL & SQLite", level: "Advanced" },
        { name: "Git / CI-CD Pipelines", level: "Advanced" },
        { name: "Model Deployment & APIs", level: "Advanced" }
      ]
    },
    {
      title: "Languages",
      colorClass: "from-teal-500/20 to-emerald-500/5 border-teal-500/20 text-teal-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "Python", level: "Expert" },
        { name: "SQL", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "C++", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="techstack" className="py-20 px-4 md:px-8 bg-zinc-950 border-b border-zinc-900 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Stack & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Structured skillsets categorized by focus area. Constantly expanding and validating capabilities against enterprise requirements.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`p-6 rounded-xl bg-gradient-to-br ${category.colorClass} border backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group flex flex-col p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/80 hover:bg-zinc-900 transition-all duration-300 transform hover:scale-[1.03] cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-950 text-indigo-400 border border-indigo-500/20">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono mt-1">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
