"use client";

import React from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level?: string; tag?: string }[];
  colorClass: string;
}

export default function TechStack() {
  const categories: SkillCategory[] = [
    {
      title: "AI Agents",
      colorClass: "from-emerald-500/20 to-teal-500/5 border-emerald-500/20 text-emerald-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: "LangGraph" },
        { name: "CrewAI" },
        { name: "LangChain" },
        { name: "LangSmith" },
        { name: "AgentOps" },
        { name: "RAG" },
        { name: "ReAct" },
        { name: "Prompt Engineering" }
      ]
    },
    {
      title: "LLMs & NLP",
      colorClass: "from-cyan-500/20 to-blue-500/5 border-cyan-500/20 text-cyan-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      skills: [
        { name: "Hugging Face Transformers" },
        { name: "NLTK" },
        { name: "SpaCy" },
        { name: "Groq" },
        { name: "Google Gemini" },
        { name: "OpenAI" }
      ]
    },
    {
      title: "Deep Learning",
      colorClass: "from-indigo-500/20 to-purple-500/5 border-indigo-500/20 text-indigo-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: [
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "Scikit-learn" },
        { name: "XGBoost" },
        { name: "OpenCV" },
        { name: "Keras" }
      ]
    },
    {
      title: "Web & APIs",
      colorClass: "from-pink-500/20 to-rose-500/5 border-pink-500/20 text-pink-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: [
        { name: "FastAPI" },
        { name: "Flask" },
        { name: "Streamlit" },
        { name: "Gradio" }
      ]
    },
    {
      title: "MLOps & Cloud",
      colorClass: "from-sky-500/20 to-indigo-500/5 border-sky-500/20 text-sky-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: "MLflow" },
        { name: "Docker" },
        { name: "GitHub Actions (CI/CD)" },
        { name: "AWS (EC2, S3, SageMaker)" },
        { name: "Pinecone" },
        { name: "Chroma" },
        { name: "LangSmith" }
      ]
    },
    {
      title: "Data",
      colorClass: "from-amber-500/20 to-orange-500/5 border-amber-500/20 text-amber-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { name: "Plotly" },
        { name: "Dash" }
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
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
        { name: "C#" },
        { name: "SQL (SQL Server, Oracle, SQLite)" }
      ]
    },
    {
      title: "Tools",
      colorClass: "from-violet-500/20 to-fuchsia-500/5 border-violet-500/20 text-violet-400",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Jupyter" },
        { name: "Google Colab" },
        { name: "VS Code" }
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
                    className="group flex flex-col justify-center p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/80 hover:bg-zinc-900 transition-all duration-300 transform hover:scale-[1.03] cursor-default"
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
                    {skill.level && (
                      <span className="text-[10px] text-zinc-500 font-mono mt-1">
                        {skill.level}
                      </span>
                    )}
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
