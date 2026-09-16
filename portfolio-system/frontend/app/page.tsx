"use client";

import React, { useState, useEffect } from "react";

// Certificate Data definition with image paths from /certs/
interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
}

const certificatesData: CertificateItem[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2026",
    image: "/certs/AWS AI Practitioner.png",
    category: "Cloud & AI"
  },
  {
    id: "datacamp-ai-engineer",
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "Apr 2025",
    image: "/certs/AI Engineer.png",
    category: "Artificial Intelligence"
  },
  {
    id: "ml-spec",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    date: "Aug 2024",
    image: "/certs/ML Specialization.png",
    category: "Machine Learning"
  },
  {
    id: "c1-supervised",
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI",
    date: "Aug 2024",
    image: "/certs/C1_Supervised.png",
    category: "Machine Learning"
  },
  {
    id: "c2-advanced",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "Aug 2024",
    image: "/certs/C2_Advanced.png",
    category: "Machine Learning"
  },
  {
    id: "c3-unsupervised",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI",
    date: "Aug 2024",
    image: "/certs/C3_Unsupervised.png",
    category: "Machine Learning"
  },
  {
    id: "nvidia-llm",
    title: "Building LLM Applications using Prompt Engineering",
    issuer: "NVIDIA",
    date: "Feb 2026",
    image: "/certs/Capture.PNG",
    category: "GenAI & LLMs"
  },
  {
    id: "python-ibm",
    title: "Python for AI and Data Science",
    issuer: "IBM",
    date: "Jul 2025",
    image: "/certs/python-ibm.png",
    category: "Python & Data Science"
  },
  {
    id: "python-ibm-badge",
    title: "IBM Applied Python Badge",
    issuer: "IBM Credly",
    date: "Jul 2025",
    image: "/certs/python-ibm-badge.png",
    category: "Python & Data Science"
  },
  {
    id: "hcia-exam",
    title: "HCIA-AI Certification Exam",
    issuer: "Huawei Technologies",
    date: "Sep 2024",
    image: "/certs/HCIA-Exam.png",
    category: "Artificial Intelligence"
  },
  {
    id: "hcia-course",
    title: "HCIA-AI Course Completion",
    issuer: "Huawei Academy",
    date: "Sep 2024",
    image: "/certs/HCIA- Course.jpg",
    category: "Artificial Intelligence"
  },
  {
    id: "depi-ds",
    title: "Data Scientist Professional Certificate",
    issuer: "DEPI & EYouth",
    date: "Dec 2025",
    image: "/certs/Certificate.jpg",
    category: "Data Science"
  },
  {
    id: "oracle",
    title: "Oracle Database & Developer Certificate",
    issuer: "Oracle University",
    date: "2024",
    image: "/certs/oracle.png",
    category: "Databases"
  },
  {
    id: "sprints-ai",
    title: "AI Engineering & Microsoft Camp",
    issuer: "Sprints × Microsoft",
    date: "2025",
    image: "/certs/sprints.png",
    category: "Artificial Intelligence"
  },
  {
    id: "forage",
    title: "Software & AI Engineering Virtual Internship",
    issuer: "Forage",
    date: "2025",
    image: "/certs/forage.png",
    category: "Software Engineering"
  },
  {
    id: "sql-inter",
    title: "SQL Intermediate Certification",
    issuer: "HackerRank",
    date: "2024",
    image: "/certs/sql-intermediate.png",
    category: "Databases"
  },
  {
    id: "ai-fund",
    title: "AI Fundamentals Certificate",
    issuer: "DataCamp",
    date: "2024",
    image: "/certs/AI Fundmentals.png",
    category: "Artificial Intelligence"
  },
  {
    id: "python-cert",
    title: "Python Programming Foundations",
    issuer: "HackerRank",
    date: "2024",
    image: "/certs/python.png",
    category: "Python"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("ALL");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [sendingForm, setSendingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState("");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSendingForm(true);
    setFormError("");
    setActivationNotice("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        if (data.needsActivation) {
          setActivationNotice(data.message);
        } else {
          setFormSubmitted(true);
          setTimeout(() => setFormSubmitted(false), 8000);
        }
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setFormError("Connection error. Please email ahmedakram3ai@gmail.com directly.");
    } finally {
      setSendingForm(false);
    }
  };

  const skillCategories = ["ALL", "MODEL TRAINING", "LLM & AGENTS", "MLOPS & CLOUD", "WEB & APIS"];

  const skillsList = [
    { name: "Python", emoji: "🐍", category: "MODEL TRAINING" },
    { name: "PyTorch", emoji: "🔥", category: "MODEL TRAINING" },
    { name: "TensorFlow", emoji: "🧠", category: "MODEL TRAINING" },
    { name: "HuggingFace", emoji: "🤗", category: "LLM & AGENTS" },
    { name: "LangChain", emoji: "🦜", category: "LLM & AGENTS" },
    { name: "LangGraph", emoji: "🕸️", category: "LLM & AGENTS" },
    { name: "Groq", emoji: "⚡", category: "LLM & AGENTS" },
    { name: "vLLM", emoji: "🚀", category: "LLM & AGENTS" },
    { name: "RAG & Vector", emoji: "🔍", category: "LLM & AGENTS" },
    { name: "Scikit-learn", emoji: "🔬", category: "MODEL TRAINING" },
    { name: "OpenCV", emoji: "👁️", category: "MODEL TRAINING" },
    { name: "MLflow", emoji: "📊", category: "MLOPS & CLOUD" },
    { name: "Docker", emoji: "🐳", category: "MLOPS & CLOUD" },
    { name: "Feast", emoji: "🍴", category: "MLOPS & CLOUD" },
    { name: "Prefect / Airflow", emoji: "⚙️", category: "MLOPS & CLOUD" },
    { name: "GitHub Actions", emoji: "🐙", category: "MLOPS & CLOUD" },
    { name: "Prometheus & Grafana", emoji: "📈", category: "MLOPS & CLOUD" },
    { name: "FastAPI", emoji: "⚡", category: "WEB & APIS" },
    { name: "Flask", emoji: "🌶️", category: "WEB & APIS" },
    { name: "Streamlit", emoji: "🎈", category: "WEB & APIS" },
    { name: "Supabase & Postgres", emoji: "🗄️", category: "WEB & APIS" },
    { name: "Pandas & NumPy", emoji: "🔢", category: "MODEL TRAINING" }
  ];

  const filteredSkills = selectedSkillCategory === "ALL" 
    ? skillsList 
    : skillsList.filter(s => s.category === selectedSkillCategory);

  return (
    <div className="overflow-x-hidden w-full bg-black text-[#efefef] font-sans antialiased min-h-screen">
      
      {/* -------------------- LOADER OVERLAY -------------------- */}
      {loading && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#080808",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.6s ease"
          }}
        >
          <div className="flex flex-col items-center gap-5 px-6 text-center animate-pulse">
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: 0
            }}>
              ORCHESTRATING INTELLIGENCE
            </h1>
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#666]"></span>
              <span className="font-mono text-[11px] text-[#777] uppercase tracking-[0.3em]">
                AHMED AKRAM AMER — AI & MLOPS
              </span>
              <span className="w-10 h-px bg-[#666]"></span>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- TOP NAVIGATION BAR -------------------- */}
      <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 md:px-10 lg:px-14 py-[14px] md:py-[18px] transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="hidden md:flex gap-8">
          <a href="#about" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">Skills</a>
          <a href="#projects" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">Projects</a>
          <a href="#experience" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">Experience</a>
          <a href="#certs" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">Certificates</a>
          <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim hover:text-white transition-colors duration-200">Contact</a>
        </div>
        <div className="flex items-center gap-2 font-mono text-[12px] text-[#888] tracking-widest ml-auto md:ml-0">
          <span className="w-[10px] h-[10px] rounded-full bg-green shadow-[0_0_8px_#4ade80] animate-blink"></span>
          <span className="inline">Available for Hire</span>
        </div>
      </nav>

      {/* -------------------- MAIN PAGE CONTAINER -------------------- */}
      <div className="w-full lg:grid lg:grid-cols-[360px_1fr] min-h-screen">
        
        {/* -------------------- MOBILE COVER (VISIBLE ON LG HIDDEN) -------------------- */}
        <div className="flex lg:hidden w-full flex-col border-b border-border pt-16">
          <div className="relative w-full h-[320px]">
            <img 
              src="/Ahmed.png" 
              alt="Ahmed Akram Amer" 
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <span className="font-script text-2xl text-white/80 absolute top-5 left-5 z-20">Ahmed</span>
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <p className="text-white font-bold text-[20px] mb-0.5">Ahmed Akram Amer</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#4ade80] flex-shrink-0"></span>
                <span className="font-mono text-[10px] text-white/60 tracking-widest">Egypt — AI & MLOps Engineer</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] flex items-center justify-center border border-white/20 rounded-xl bg-black/50 text-white hover:bg-white hover:text-black transition-all">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-akram-kamel-amer/" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] flex items-center justify-center border border-white/20 rounded-xl bg-black/50 text-white hover:bg-white hover:text-black transition-all">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"></path></svg>
                </a>
                <a href="/AHMED_AKRAM_AMER_CV.pdf" download className="h-[42px] px-4 flex items-center gap-2 border border-white/20 rounded-xl bg-black/50 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Download CV ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------- DESKTOP FIXED SIDEBAR (LG STICKY) -------------------- */}
        <aside className="hidden lg:flex flex-col justify-center sticky top-0 h-screen px-8 pt-24 pb-10 overflow-hidden border-r border-border">
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
          
          {/* Profile Photo Card */}
          <div className="relative mb-6 border border-border bg-gradient-to-br from-[#141414] to-[#0c0c0c]" style={{ width: "220px", height: "260px", borderRadius: "20px", overflow: "hidden", flexShrink: 0 }}>
            <img 
              src="/Ahmed.png" 
              alt="Ahmed Akram Amer" 
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <span className="font-script text-xl text-white/70 absolute top-3 left-3 z-20">Ahmed</span>
            <span className="absolute bottom-3 left-3 z-10 font-mono text-[9px] text-white/40 uppercase tracking-widest select-none">AI & MLOps Engineer</span>
          </div>

          {/* Social Badges & Download CV */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-[38px] h-[38px] flex items-center justify-center border border-border2 rounded-md bg-card text-dim hover:text-white hover:border-white hover:bg-card2 transition-all duration-200">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-akram-kamel-amer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[38px] h-[38px] flex items-center justify-center border border-border2 rounded-md bg-card text-dim hover:text-white hover:border-white hover:bg-card2 transition-all duration-200">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"></path></svg>
            </a>
            <a href="/AHMED_AKRAM_AMER_CV.pdf" download className="h-[38px] px-3.5 flex items-center gap-1.5 border border-border2 rounded-md bg-card text-[#efefef] font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-200">
              Download CV ↓
            </a>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-dim tracking-widest mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#4ade80] flex-shrink-0"></span>
            Egypt — Available for Hire
          </div>

          {/* Education Box */}
          <div className="mt-5 pt-5 border-t border-border">
            <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1.5">Education</p>
            <p className="text-[12px] text-white font-medium leading-snug">Menoufia University</p>
            <p className="text-[11px] text-dim mt-0.5 leading-snug">B.Sc. Electronic Engineering (CS)</p>
            <p className="text-[10px] text-green font-mono mt-1">GPA: 3.71 / 4.0 — Excellent</p>
          </div>
        </aside>

        {/* -------------------- MAIN CONTENT COLUMN -------------------- */}
        <main className="w-full min-w-0 px-4 pt-8 sm:px-6 sm:pt-12 md:px-10 lg:px-14 lg:pt-28">
          
          {/* ==================== ABOUT / HERO SECTION ==================== */}
          <section id="about" className="pb-[60px] border-b border-border relative">
            <div className="absolute pointer-events-none" style={{ top: "-60px", left: "40%", width: "800px", height: "550px", background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)", transform: "translateX(-50%)" }}></div>
            
            <p className="font-mono text-[10px] text-dim uppercase tracking-[0.2em] mb-4 flex items-center gap-3 after:flex-1 after:max-w-[50px] after:h-px after:bg-border2">
              AI ENGINEER · MLOPS · LLMS · RAG · GENAI
            </p>

            <h1 className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(34px, 5.5vw, 75px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
              <span className="block text-white">ARTIFICIAL</span>
              <span className="block text-white">INTELLIGENCE</span>
              <span className="block text-ghost">ENGINEER</span>
            </h1>

            <p className="text-sm sm:text-base leading-[1.8] text-[#999] max-w-[560px] mb-8">
              My name is <strong className="text-white font-semibold">Ahmed Akram Amer</strong>. Electronic Engineering graduate in Computer Science & Engineering with an <strong className="text-white font-semibold">Excellent GPA of 3.71/4.0</strong>, focused on <strong className="text-white font-semibold">AI Engineering and MLOps</strong>. Experienced in orchestrating <strong className="text-white font-semibold">Agentic RAG workflows</strong>, fine-tuning open-source LLMs, and deploying reliable machine learning pipelines with <span className="text-[#ccc]">Python, Docker, FastAPI & CI/CD</span>.
            </p>

            {/* Stat Counters */}
            <div className="flex flex-wrap gap-10 sm:gap-14 py-8 border-t border-b border-border mb-8">
              <div>
                <p className="font-mono leading-none text-white font-black text-4xl sm:text-5xl">7+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888] mt-2 font-bold whitespace-pre-line">Projects Delivered</p>
              </div>
              <div>
                <p className="font-mono leading-none text-white font-black text-4xl sm:text-5xl">3+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888] mt-2 font-bold whitespace-pre-line">Internships Completed</p>
              </div>
              <div>
                <p className="font-mono leading-none text-white font-black text-4xl sm:text-5xl">10+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888] mt-2 font-bold whitespace-pre-line">Certificates Earned</p>
              </div>
              <div>
                <p className="font-mono leading-none text-white font-black text-4xl sm:text-5xl">EG</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888] mt-2 font-bold whitespace-pre-line">Egypt Remote-Ready</p>
              </div>
            </div>

            {/* Specialty Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="group relative col-span-1 sm:col-span-2 flex flex-col justify-between min-h-[220px] bg-card border border-border rounded-2xl p-6 hover:border-border2 hover:bg-card2 transition-all duration-300">
                <span className="absolute -bottom-4 -right-2 font-black text-[90px] text-white/[0.03] leading-none pointer-events-none select-none">AI</span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-white"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-white mb-1.5">AI Engineering & MLOps</p>
                  <p className="text-[12px] text-dim leading-relaxed">Building RAG platforms, fine-tuning open-source LLMs (Qwen2.5/Llama) & deploying automated CI/CD pipelines.</p>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[145px] hover:border-border2 hover:bg-card2 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-border flex items-center justify-center text-white">
                  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                </div>
                <div>
                  <p className="text-[24px] font-black text-white leading-none">90%</p>
                  <p className="text-[11px] text-dim mt-1 leading-snug">Supervised Model Accuracy</p>
                </div>
              </div>

              <div className="group col-span-1 sm:col-span-3 bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-border2 hover:bg-card2 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center flex-shrink-0 text-white">
                  <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white mb-0.5">Agentic RAG & Vector Systems</p>
                  <p className="text-[12px] text-dim">LangChain + Supabase pgvector / Pinecone with Groq & vLLM high-speed inference.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== TECHNICAL ARSENAL / SKILLS SECTION ==================== */}
          <section id="skills" className="py-[60px] border-b border-border">
            <div className="mb-8">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Technical Stack
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                TECHNICAL<span className="block text-ghost">ARSENAL</span>
              </h2>
            </div>

            {/* Skill Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-[12px] font-semibold tracking-normal transition-all duration-200 ${
                    selectedSkillCategory === cat 
                      ? "bg-white text-black border-white" 
                      : "border-[#333] text-white hover:border-white bg-card"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {filteredSkills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group bg-card border border-border rounded-xl p-3.5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-border2 hover:bg-card2"
                >
                  <span className="text-2xl mb-1 block transition-transform duration-200 group-hover:scale-110">{skill.emoji}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#777] group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== FEATURED PROJECTS SECTION (2 SECTIONS ONLY) ==================== */}
          <section id="projects" className="py-[60px] border-b border-border">
            <div className="mb-10">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Selected Work
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                FEATURED<span className="block text-ghost">PROJECTS</span>
              </h2>
            </div>

            {/* SECTION 1: MLOPS PROJECTS */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                  1. MLOps & Production Pipelines
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                
                {/* MLOps Project 1: ML Forge */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    ⚙️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">ML Forge — End-to-End ML Lifecycle Platform</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">MLOPS & AUTOMATED LIFECYCLE</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Architected ML Forge, a web platform automating the full end-to-end machine learning lifecycle, from data ingestion to model tracking, experiment logging, and automated deployment via MLflow and Docker.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Python</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Flask</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">MLflow</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Scikit-learn</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Docker</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">CI/CD</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* MLOps Project 2: Automated ML Pipeline (DEPI) */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    📊
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">Automated ML & Predictive Analytics Pipeline (DEPI)</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">PREDICTIVE ANALYTICS & DEPLOYMENT</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Engineered supervised ML models for predictive analytics achieving 90% accuracy across 10+ high-dimensional datasets. Reduced manual reporting overhead via automated ML pipelines deployed with Flask & Docker.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Python</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Scikit-learn</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Flask</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Docker</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Pandas</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Seaborn</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* MLOps Project 3: MLOps Workflows & Orchestration (SAiR) */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    🐳
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">End-to-End MLOps Infrastructure & Workflow Orchestration (SAiR)</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">MLOPS INFRASTRUCTURE & MONITORING</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Production MLOps pipeline featuring feature store management with Feast, workflow orchestration via Prefect & Apache Airflow, automated CI/CD with GitHub Actions, and system observability using Prometheus & Grafana.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">FastAPI</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Docker</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Feast</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Prefect</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">MLflow</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Airflow</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Prometheus</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Grafana</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

              </div>
            </div>

            {/* SECTION 2: AI ENGINEERING PROJECTS */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                  2. AI Engineering & LLM Applications
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                
                {/* AI Project 1: VisionAssist */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    👁️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">VisionAssist — Real-Time Scene Description & Danger Detection</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">MULTIMODAL AI & COMPUTER VISION</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Built the Python and FastAPI AI captioning service for a real-time scene-description system assisting visually impaired users. Captions live camera frames and classifies scenes as SAFE or DANGEROUS using a fine-tuned Qwen2-VL-2B model deployed as a serverless GPU endpoint on Modal.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Python</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">FastAPI</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Qwen2-VL-2B</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Modal Serverless</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Next.js</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Spring Boot</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML/RealTime_Scene_Description" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* AI Project 2: Islamic QA Assistant */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    🎙️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">Islamic-QA-Egyptian-Dialect — Fine-Tuned Voice Assistant</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">GENAI & FINE-TUNED VOICE AGENTS</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Fine-tuned Qwen2.5-7B-Instruct on a curated Egyptian-Arabic Islamic Q&A dataset (Aqeedah, Fiqh, Seerah) using LoRA/QLoRA. Deployed merged 16-bit model via vLLM with real-time voice conversational pipeline (Deepgram STT → LLM → Cartesia TTS).
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Python</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Qwen2.5-7B</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">LoRA / QLoRA</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">vLLM</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">LiveKit Agents</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Deepgram STT</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML/Islamic-QA-Egyptian-Dialect" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* AI Project 3: QueryGuard AI */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    🛡️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">QueryGuard AI — Enterprise Text-to-SQL Platform</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">GENAI & ENTERPRISE SECURITY</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      GenAI platform translating English/Arabic questions into optimized SQL queries. Features dual-layer RBAC: DROP, DELETE, and TRUNCATE blocked at both UI and LLM prompt levels for safe non-technical database exploration.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Python</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Gemini 2.5 Flash</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Streamlit</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">SQLite3</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Dual RBAC</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML/QueryGuard-AI" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* AI Project 4: Chat with PDF */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    📄
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">Chat with PDF | ReActify-PDF Agentic RAG Application</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">AGENTIC RAG & VECTOR SEARCH</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      Enterprise-grade lightweight agentic RAG application. Local embeddings via HuggingFace indexed in Supabase Vector DB (PostgreSQL + pgvector), powering dynamic document QA with Groq's fast qwen3-32b inference engine.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">FastAPI</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">LangChain</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Supabase pgvector</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">HuggingFace</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Groq Engine</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML/ReActify-PDF" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

                {/* AI Project 5: Deep Learning Multi-Domain */}
                <div className="relative group flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6 bg-card border border-border hover:border-border2 hover:bg-card2 transition-all duration-300">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-2xl bg-[#1a1a1a] border border-border flex items-center justify-center text-3xl">
                    🧠
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-tight">Multi-Domain Deep Learning Pipelines</h4>
                    <p className="font-mono text-[10px] text-dim tracking-widest mb-1.5 uppercase">DEEP LEARNING & COMPUTER VISION</p>
                    <p className="text-[13px] text-[#999] leading-[1.7] mb-3">
                      End-to-end PyTorch deep learning pipelines covering image classification (CIFAR-10, MNIST), audio classification models, and medical image analytics for breast cancer detection.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">PyTorch</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">TensorFlow</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">OpenCV</span>
                      <span className="px-2.5 py-1 bg-muted border border-border rounded font-mono text-[11px] text-[#aaa]">Scikit-learn</span>
                    </div>
                  </div>
                  <a href="https://github.com/Ahmed-7-ML" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center border border-border2 rounded-md text-dim text-sm group-hover:bg-white group-hover:text-black transition-all">↗</a>
                </div>

              </div>
            </div>

          </section>

          {/* ==================== WORK EXPERIENCE / INTERNSHIPS ==================== */}
          <section id="experience" className="py-[60px] border-b border-border">
            <div className="mb-10">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Work History
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                WORK<span className="block text-ghost">EXPERIENCE</span>
              </h2>
            </div>

            <div className="relative flex flex-col pl-4 sm:pl-6 border-l border-border2 gap-8">
              
              {/* SAiR Internship */}
              <div className="relative group">
                <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white group-hover:bg-white transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">MLOps Intern</h3>
                  <span className="font-mono text-[11px] text-dim bg-muted px-2.5 py-1 rounded border border-border inline-block w-fit">Jul 2026 – Sep 2026</span>
                </div>
                <p className="text-[13px] text-green font-mono mb-2">SAiR · MLOps Fundamentals and Best Practices</p>
                <ul className="flex flex-col gap-1.5 text-[13px] text-[#999] leading-relaxed list-disc list-inside">
                  <li>Studied machine learning fundamentals, ML lifecycle, and MLOps best practices for maintaining reliable ML systems.</li>
                  <li>Implemented hands-on MLOps workflows using FastAPI, Docker, Feast feature store, Prefect, MLflow, and GitHub Actions.</li>
                  <li>Integrated system monitoring and observability tools using Prometheus & Grafana with Apache Airflow orchestration.</li>
                </ul>
              </div>

              {/* Tips Hindawi Internship */}
              <div className="relative group">
                <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white group-hover:bg-white transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">AI Engineering Intern</h3>
                  <span className="font-mono text-[11px] text-dim bg-muted px-2.5 py-1 rounded border border-border inline-block w-fit">Jun 2026 – Jul 2026</span>
                </div>
                <p className="text-[13px] text-purple-400 font-mono mb-2">Tips Hindawi · Egypt</p>
                <ul className="flex flex-col gap-1.5 text-[13px] text-[#999] leading-relaxed list-disc list-inside">
                  <li>Developed knowledge of HuggingFace Transformers, attention architectures, Groq, Streamlit, LangChain, and RAG.</li>
                  <li>Built and tested end-to-end LLM applications, including a YouTube Video Summarizer and an Egyptian Dialect Islamic QA Assistant.</li>
                </ul>
              </div>

              {/* DEPI | EYouth Internship */}
              <div className="relative group">
                <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white group-hover:bg-white transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">AI & Data Science Intern</h3>
                  <span className="font-mono text-[11px] text-dim bg-muted px-2.5 py-1 rounded border border-border inline-block w-fit">Jun 2024 – Dec 2024</span>
                </div>
                <p className="text-[13px] text-blue-400 font-mono mb-2">DEPI | EYouth · Egypt (Remote)</p>
                <ul className="flex flex-col gap-1.5 text-[13px] text-[#999] leading-relaxed list-disc list-inside">
                  <li>Engineered supervised ML models for predictive analytics, achieving 90% accuracy on structured datasets.</li>
                  <li>Reduced manual reporting time through automated ML pipelines deployed via Flask and Docker.</li>
                  <li>Conducted extensive EDA and feature engineering with Pandas and Seaborn across 10+ high-dimensional datasets.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ==================== ACTIVITIES & IMPACT ==================== */}
          <section className="py-[60px] border-b border-border">
            <div className="mb-8">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Community & Hackathons
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                ACTIVITIES<span className="block text-ghost">& IMPACT</span>
              </h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-border2 hover:bg-card2 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white">NASA Space Apps Challenge</h3>
                  <p className="font-mono text-[11px] text-dim">Participant · Seismic Detection Across the Solar System (Oct 2024)</p>
                </div>
              </div>
              <p className="text-[13px] text-[#999] leading-relaxed mt-3">
                Developed a planetary seismic signal detection system for solar system data analysis. Presented the system architecture in the final demo session and earned a certificate of attendance.
              </p>
            </div>
          </section>

          {/* ==================== CERTIFICATES & COURSES GALLERY ==================== */}
          <section id="certs" className="py-[60px] border-b border-border">
            <div className="mb-10">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Verified Credentials
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                CERTIFICATES<span className="block text-ghost">& COURSES</span>
              </h2>
            </div>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificatesData.map((cert) => (
                <div 
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group bg-card border border-border rounded-xl p-3.5 hover:border-border2 hover:bg-card2 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="w-full h-36 bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/5 mb-3 relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image path fails
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 backdrop-blur-md rounded font-mono text-[9px] text-dim border border-white/10">
                        {cert.category}
                      </span>
                    </div>

                    <h4 className="text-[14px] font-bold text-white leading-snug mb-1 group-hover:text-green transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[12px] text-dim">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5 font-mono text-[10px] text-[#666]">
                    <span>{cert.date}</span>
                    <span className="text-dim group-hover:text-white flex items-center gap-1">View Certificate 🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== CERTIFICATE LIGHTBOX MODAL ==================== */}
          {selectedCert && (
            <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full bg-card border border-border rounded-2xl p-6 flex flex-col max-h-[90vh] overflow-y-auto">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-lg hover:bg-white hover:text-black transition-all z-10"
                >
                  ✕
                </button>
                
                <h3 className="text-xl font-bold text-white mb-1 pr-10">{selectedCert.title}</h3>
                <p className="font-mono text-xs text-dim mb-4">{selectedCert.issuer} · {selectedCert.date}</p>

                <div className="w-full bg-[#050505] rounded-xl overflow-hidden border border-border p-2 flex items-center justify-center">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[65vh] w-auto object-contain rounded-lg"
                  />
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2 bg-white text-black font-mono text-xs font-bold rounded-lg uppercase tracking-wider hover:bg-dim transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==================== CONTACT SECTION ==================== */}
          <section id="contact" className="py-[60px]">
            <div className="mb-10">
              <p className="flex items-center gap-3 font-mono text-[9px] text-dim uppercase tracking-[0.2em] mb-2">
                <span className="w-[18px] h-px bg-dim inline-block"></span>Get In Touch
              </p>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 85px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                LET'S<span className="block text-ghost">CONNECT</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              
              {/* Form */}
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1.5">Name</p>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-[13px] text-white placeholder:text-dim/50 focus:border-white outline-none transition-colors" 
                  />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1.5">Email</p>
                  <input 
                    type="email" 
                    required
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-[13px] text-white placeholder:text-dim/50 focus:border-white outline-none transition-colors" 
                  />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1.5">Message</p>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell me about your project or opportunity..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-[13px] text-white placeholder:text-dim/50 focus:border-white outline-none transition-colors resize-none" 
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={sendingForm}
                  className="self-start px-6 py-3 bg-white text-black rounded-md font-mono text-[11px] uppercase tracking-[0.14em] font-bold hover:bg-dim hover:text-white transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {sendingForm ? "Sending Message..." : "Send Message →"}
                </button>
                {formSubmitted && (
                  <p className="font-mono text-xs text-green mt-2">✓ Thank you! Your message was sent directly to ahmedakram3ai@gmail.com.</p>
                )}
                {activationNotice && (
                  <p className="font-mono text-xs text-yellow-400 mt-2 bg-yellow-950/40 p-3 rounded border border-yellow-500/30 leading-relaxed">
                    ⚠️ {activationNotice}
                  </p>
                )}
                {formError && (
                  <p className="font-mono text-xs text-rose-400 mt-2">{formError}</p>
                )}
              </form>

              {/* Direct Info */}
              <div className="flex flex-col divide-y divide-border">
                <div className="py-4">
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1">Email</p>
                  <a href="mailto:ahmedakram3ai@gmail.com" className="text-[14px] text-white hover:text-green transition-colors">ahmedakram3ai@gmail.com</a>
                </div>
                <div className="py-4">
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1">Phone</p>
                  <p className="text-[14px] text-white">+20 1007952538</p>
                </div>
                <div className="py-4">
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1">Location</p>
                  <p className="text-[14px] text-white">Shebin el-Kom, Menoufia, Egypt</p>
                </div>
                <div className="py-4">
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1">Education</p>
                  <p className="text-[14px] text-white">Menoufia University — B.Sc. Electronic Engineering (GPA: 3.71 / 4.0 - Excellent)</p>
                </div>
                <div className="py-4">
                  <p className="font-mono text-[9px] text-dim uppercase tracking-[0.15em] mb-1">Focus Areas</p>
                  <p className="text-[14px] text-white">AI Engineering · MLOps · Agentic RAG · Fine-Tuned LLMs · Computer Vision</p>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>

      {/* -------------------- FOOTER -------------------- */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-14 py-6 border-t border-border gap-3 text-center sm:text-left">
        <p className="font-mono text-[13px] text-dim tracking-wide">
          © 2026 Ahmed Akram Amer — AI & MLOps Engineer
        </p>
        <p className="font-mono text-[13px] text-dim tracking-wide">
          ahmedakram3ai@gmail.com
        </p>
      </footer>

    </div>
  );
}
