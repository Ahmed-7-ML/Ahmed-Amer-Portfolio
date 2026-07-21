export interface Bio {
  name: string;
  title: string;
  headline: string;
  education: string;
  graduation_year: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  avatar_url: string;
}

export interface Milestone {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'award' | 'education' | 'internship' | 'certification' | string;
  status: 'completed' | 'upcoming' | 'in-progress' | string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image_path: string;
  category: 'ai-ml' | 'languages' | 'cloud-infra' | 'experience' | string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech_stack: string[];
  business_impact: string;
  repo_url: string;
  image_path: string;
  youtube_url: string;
  category: 'llm-apps' | 'agentic-apps' | 'ml-engineering' | string;
}

export interface ProfileData {
  bio: Bio;
  milestones: Milestone[];
  certificates: Certificate[];
  projects: Project[];
}

export const FALLBACK_BIO: Bio = {
  name: "Ahmed Akram Amer",
  title: "AI Engineer | LLM Applications & Multi-Agent Systems",
  headline: "Building production-ready GenAI systems, from secure Text-to-SQL platforms to multilingual RAG and multi-agent automation.",
  education: "Menoufia University · B.Sc. Electronic Engineering (CSE)",
  graduation_year: "2026",
  about: "Computer Science and Engineering candidate (GPA 3.71/4.0) specializing in LLM applications, multi-agent systems, and GenAI solutions. Delivered production-ready AI systems with LangGraph, CrewAI, RAG pipelines, and Gemini 2.5 Flash, with measurable improvements in accuracy, response time, and manual-work reduction.",
  email: "ahmedakram3ai@gmail.com",
  github: "https://github.com/Ahmed-7-ML",
  linkedin: "https://www.linkedin.com/in/ahmed-akram-kamel-amer",
  avatar_url: "/images/Ahmed.png"
};

export const FALLBACK_MILESTONES: Milestone[] = [
  {
    id: "depi-intern",
    title: "AI & Data Science Intern",
    organization: "DEPI | EYouth",
    date: "Jun 2024 – Dec 2024",
    description: "• Engineered supervised ML models for predictive analytics, achieving 90% accuracy on structured datasets and reducing manual reporting time by 50%.\n• Conducted EDA and feature engineering with Pandas and Seaborn across 10+ high-dimensional datasets, surfacing actionable business insights for stakeholders.\n• Deployed supervised ML models as REST APIs using Flask and Docker, enabling real-time inference for business users and reducing inference latency in production environments.",
    type: "internship",
    status: "completed"
  },
  {
    id: "menoufia-degree",
    title: "B.Sc. in Electronic Engineering — Computer Science & Engineering",
    organization: "Menoufia University",
    date: "2022 - 2026",
    description: "GPA: 3.71 / 4.0. Expected graduation: October 2026.",
    type: "education",
    status: "in-progress"
  }
];

export const FALLBACK_CERTIFICATES: Certificate[] = [
  {
    id: "hcia-exam",
    title: "HCIA-AI V3.5 Course Certificate",
    issuer: "Huawei",
    image_path: "/certs/HCIA-Exam.png",
    category: "ai-ml"
  },
  {
    id: "hcia-course",
    title: "Huawei HCIA-AI Learning Course Attendance",
    issuer: "Huawei & iTB",
    image_path: "/certs/HCIA- Course.jpg",
    category: "ai-ml"
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    image_path: "/certs/ML Specialization.png",
    category: "ai-ml"
  },
  {
    id: "datacamp-ai-engineer",
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    image_path: "/certs/AI Engineer.png",
    category: "ai-ml"
  },
  {
    id: "datacamp-ai-fundamentals",
    title: "AI Fundamentals Certification",
    issuer: "DataCamp",
    image_path: "/certs/AI Fundmentals.png",
    category: "ai-ml"
  },
  {
    id: "c1-supervised",
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI",
    image_path: "/certs/C1_Supervised.png",
    category: "ai-ml"
  },
  {
    id: "c2-advanced",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    image_path: "/certs/C2_Advanced.png",
    category: "ai-ml"
  },
  {
    id: "c3-unsupervised",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI",
    image_path: "/certs/C3_Unsupervised.png",
    category: "ai-ml"
  },
  {
    id: "sprints-microsoft-camp",
    title: "Sprints x Microsoft Summer Camp - AI and Machine Learning",
    issuer: "Sprints & Microsoft",
    image_path: "/certs/sprints.png",
    category: "ai-ml"
  },
  {
    id: "oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    image_path: "/certs/oracle.png",
    category: "cloud-infra"
  },
  {
    id: "python-ibm-badge",
    title: "Python for Data Science and AI (Digital Badge)",
    issuer: "IBM Developer Skills Network & Coursera",
    image_path: "/certs/python-ibm-badge.png",
    category: "languages"
  },
  {
    id: "python-ibm-course",
    title: "Python for Data Science and AI Course",
    issuer: "IBM & Coursera",
    image_path: "/certs/python-ibm.png",
    category: "languages"
  },
  {
    id: "python-hackerrank",
    title: "Python (Basic) Skill Certification",
    issuer: "HackerRank",
    image_path: "/certs/python.png",
    category: "languages"
  },
  {
    id: "sql-hackerrank",
    title: "SQL (Intermediate) Skill Certification",
    issuer: "HackerRank",
    image_path: "/certs/sql-intermediate.png",
    category: "languages"
  },
  {
    id: "ba-forage-simulation",
    title: "British Airways - Data Science Job Simulation",
    issuer: "British Airways & Forage",
    image_path: "/certs/forage.png",
    category: "experience"
  },
  {
    id: "depi-data-scientist",
    title: "Digital Egypt Pioneers Program (DEPI) - Data Scientist",
    issuer: "DEPI & EYouth & Berlitz (sponsored by MCIT)",
    image_path: "/certs/Certificate.jpg",
    category: "experience"
  },
  {
    id: "nvidia-prompt-engineering",
    title: "Building LLM Apps using Prompt Engineering",
    issuer: "Nvidia",
    image_path: "/certs/Capture.PNG",
    category: "ai-ml"
  }
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: "queryguard-ai",
    name: "Enterprise QueryGuard AI",
    tagline: "GenAI Database Agent with Dual-Layer RBAC",
    description: "An enterprise-grade GenAI platform translating plain English or Arabic questions into optimized, executable SQL queries with real-time previews. Powered by Gemini 2.5 Flash, Streamlit, and a robust Role-Based Access Control (RBAC) security layer.",
    tech_stack: ["Python", "Gemini 2.5 Flash", "Streamlit", "Pandas", "SQLite3", "Poetry"],
    business_impact: "Democratizes database access for non-technical users while securing destructive operations at both the prompt and database view layers (RBAC).",
    repo_url: "https://github.com/Ahmed-7-ML/QueryGuard-AI.git",
    image_path: "/images/QueryGuard_SysArch.png",
    youtube_url: "https://youtu.be/varTjXiQhZg",
    category: "agentic-apps"
  },
  {
    id: "reactify-pdf",
    name: "ReActify-PDF",
    tagline: "Enterprise ReAct Agent PDF Chat Application",
    description: "An enterprise-grade, agentic PDF chatting application utilizing a ReAct (Reasoning and Acting) Agent framework. Ingests documents into a local SQLite-backed Qdrant vector database, calculates embeddings using the Gemini API, and enables dynamic high-fidelity querying in both English and Arabic.",
    tech_stack: ["React", "FastAPI", "Qdrant", "SQLite", "Google Gemini API", "Python", "ReAct Agent"],
    business_impact: "Delivers source-attributed English and Arabic answers while indexing documents into a local SQLite-backed Qdrant vector database in seconds.",
    repo_url: "https://github.com/Ahmed-7-ML/ReActify-PDF.git",
    image_path: "/images/reactify-pdf.jpg",
    youtube_url: "",
    category: "llm-apps"
  },
  {
    id: "multi-agent-research-writing",
    name: "Multi-Agent Research & Writing System",
    tagline: "Automated Research and Structured Report Generation",
    description: "Built an end-to-end multi-agent pipeline that connects n8n, FastAPI, LangGraph, and CrewAI. A router dispatches work to specialized research and content-writing agents with AgentOps observability.",
    tech_stack: ["Python", "LangGraph", "CrewAI", "FastAPI", "n8n", "Groq LLaMA 3.3", "AgentOps"],
    business_impact: "Cut manual research time by about 80% and generated structured reports in under two minutes.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "agentic-apps"
  },
  {
    id: "ai-procurement-system",
    name: "AI-Powered Procurement System",
    tagline: "Four-Agent Procurement Automation",
    description: "Designed a four-agent CrewAI workflow for query generation, product discovery, web scraping, and Bootstrap report generation. Agents compare real-time prices across Amazon Egypt, Jumia, and Noon.",
    tech_stack: ["Python", "CrewAI", "LangChain", "Groq LLaMA 3.3", "Tavily", "AgentOps", "Docker"],
    business_impact: "Cut manual procurement research by 70% with full monitoring of token use, cost, failure rate, and execution traces.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "agentic-apps"
  },
  {
    id: "customer-support-chatbot",
    name: "Customer Support Chatbot",
    tagline: "Multilingual RAG for Arabic and English Support",
    description: "Built a production-style RAG chatbot over a PDF knowledge base using multilingual embeddings and MMR retrieval. The chatbot only answers from retrieved context or escalates the request to human support.",
    tech_stack: ["Python", "LangChain", "Chroma", "Groq", "Hugging Face", "Gradio"],
    business_impact: "Provided controlled, context-grounded Arabic and English customer support with hallucination guardrails.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "llm-apps"
  },
  {
    id: "deep-learning-pytorch",
    name: "Deep Learning with PyTorch",
    tagline: "Multi-Domain Classification Pipelines",
    description: "Developed end-to-end PyTorch pipelines for image, audio, e-commerce clothing, and breast-cancer classification, using regularization and inference-ready deployment practices.",
    tech_stack: ["Python", "PyTorch", "CNNs", "Transfer Learning", "Audio Classification"],
    business_impact: "Applied reusable deep-learning workflows across multiple real-world classification domains.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "ml-engineering"
  },
  {
    id: "ml-forge",
    name: "ML Lifecycle Factory — ML Forge",
    tagline: "Automated ML Lifecycle and Deployment Platform",
    description: "Architected a web platform that automates the ML lifecycle from data ingestion to REST API deployment, using MLflow for experiment tracking.",
    tech_stack: ["Python", "Flask", "MLflow"],
    business_impact: "Reduced the overall ML cycle time by 40% through a factory-style pipeline.",
    repo_url: "https://github.com/Ahmed-7-ML/MLForge.git",
    image_path: "/images/ml-forge.png",
    youtube_url: "",
    category: "ml-engineering"
  }
];

export const FALLBACK_PROFILE_DATA: ProfileData = {
  bio: FALLBACK_BIO,
  milestones: FALLBACK_MILESTONES,
  certificates: FALLBACK_CERTIFICATES,
  projects: FALLBACK_PROJECTS
};

