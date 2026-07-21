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
  title: "Electronics Engineering Graduate | 5+ Production AI Systems | LLM Applications & Multi-Agent Systems",
  headline: "Electronics Engineering Graduate specializing in 5+ Production AI Systems, LLM Applications & Multi-Agent Systems.",
  education: "Menoufia University · Bachelor of Electronic Engineering — CSE",
  graduation_year: "2026",
  about: "Electronics Engineering Graduate from Menoufia University (CSE Dept, GPA: 3.71 / 4.0). Engineered 5+ production AI systems with expertise in LLM Applications, Multi-Agent Systems (LangGraph, CrewAI), RAG architectures (Qdrant, Chroma), and MLOps deployment workflows (FastAPI, Docker, MLflow).",
  email: "ahmedakram3ai@gmail.com",
  github: "https://github.com/Ahmed-7-ML",
  linkedin: "https://www.linkedin.com/in/ahmed-akram-kamel-amer",
  avatar_url: "/Ahmed.png"
};

export const FALLBACK_MILESTONES: Milestone[] = [
  {
    id: "flyrank-intern",
    title: "AI & ML Engineer Intern",
    organization: "Flyrank.AI",
    date: "Jul. 1 – Aug. 26, 2026",
    description: "• Internship — AI and Machine Learning (8 Weeks)\n• Learning ML fundamentals both in theory and in practice.",
    type: "internship",
    status: "completed"
  },
  {
    id: "tips-hindawi-intern",
    title: "AI Engineering Intern",
    organization: "Tips Hindawi",
    date: "Jun. 18 – Jul. 18, 2026",
    description: "• Internship — AI Engineering, Egypt (1 Month)\n• Learned HuggingFace Transformers architecture (Attention Is All You Need), Groq, Streamlit, LangChain, and RAG.\n• Built LLM applications including an HR Q&A Assistant Chatbot and a Custom-PDF RAG application.",
    type: "internship",
    status: "completed"
  },
  {
    id: "sair-mlops-intern",
    title: "MLOps Intern",
    organization: "SAiR",
    date: "2025",
    description: "• Internship — MLOps Fundamentals and Best Practices\n• Learning the fundamentals of ML, the ML lifecycle, MLOps in theory, and best practices.\n• Hands-on tools: FastAPI, Docker, Kubernetes, Contabo, Feast, Prefect, MLflow, AWS.",
    type: "internship",
    status: "completed"
  },
  {
    id: "depi-intern",
    title: "AI & Data Science Intern",
    organization: "DEPI | EYouth",
    date: "Jun. 2024 – Dec. 2024",
    description: "• Internship — AI & Machine Learning Egypt (Remote)\n• Engineered supervised ML models for predictive analytics, achieving 90% accuracy on structured datasets.\n• Reduced manual reporting time by 50% through automated ML pipelines deployed via Flask and Docker.\n• Conducted EDA and feature engineering with Pandas and Seaborn across 10+ high-dimensional datasets.",
    type: "internship",
    status: "completed"
  },
  {
    id: "menoufia-degree",
    title: "Bachelor of Electronic Engineering — Computer Science & Engineering Department",
    organization: "Menoufia University",
    date: "Sep. 2021 – Oct. 2026",
    description: "GPA: 3.71 / 4.0. Shebin el-Kom, Egypt. Expected graduation: October 2026.",
    type: "education",
    status: "in-progress"
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge Participant",
    organization: "NASA Space Apps Challenge — Egypt",
    date: "Oct. 2024",
    description: "• Developed a seismic signal detection system for planetary data analysis.\n• Presented the project in a final demo and discussion session, receiving an achievement certificate.",
    type: "award",
    status: "completed"
  }
];

export const FALLBACK_CERTIFICATES: Certificate[] = [
  {
    id: "nvidia-llm",
    title: "Building LLM Applications using Prompt Engineering",
    issuer: "NVIDIA",
    image_path: "/certs/HCIA-Exam.png",
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
    id: "huawei-hcia",
    title: "HCIA-AI Course Certificate",
    issuer: "Huawei",
    image_path: "/certs/HCIA-Exam.png",
    category: "ai-ml"
  },
  {
    id: "python-ibm-course",
    title: "Python for AI and Data Science",
    issuer: "IBM & Coursera",
    image_path: "/certs/python-ibm.png",
    category: "languages"
  },
  {
    id: "depi-data-scientist",
    title: "Data Scientist — DEPI & EYouth",
    issuer: "DEPI & EYouth",
    image_path: "/certs/Certificate.jpg",
    category: "experience"
  },
  {
    id: "maharatech-dl",
    title: "Applied Deep Learning",
    issuer: "MaharaTech",
    image_path: "/certs/HCIA- Course.jpg",
    category: "ai-ml"
  },
  {
    id: "sprints-microsoft-camp",
    title: "AI Camp — Sprints × Microsoft",
    issuer: "Sprints & Microsoft",
    image_path: "/certs/sprints.png",
    category: "ai-ml"
  }
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: "queryguard-ai",
    name: "QueryGuard AI — Enterprise Text-to-SQL Platform",
    tagline: "GenAI Database Agent with Dual-Layer RBAC",
    description: "Built a GenAI platform translating English/Arabic questions into optimized SQL queries for non-technical users. Implemented Dual-Layer RBAC: DROP, DELETE, TRUNCATE blocked at both UI and LLM prompt levels. Modular architecture supports one-line migration from SQLite3 to PostgreSQL or Amazon RDS.",
    tech_stack: ["Python", "Gemini 2.5 Flash", "Streamlit", "SQLite3", "RBAC"],
    business_impact: "Translates English/Arabic questions into optimized SQL while securing operations with Dual-Layer RBAC.",
    repo_url: "https://github.com/Ahmed-7-ML/QueryGuard-AI",
    image_path: "/QueryGuard_SysArch.png",
    youtube_url: "",
    category: "agentic-apps"
  },
  {
    id: "reactify-pdf",
    name: "ReActify-PDF",
    tagline: "Chat with PDF RAG Project",
    description: "Engineered a bilingual (English/Arabic) ReAct agent for PDF Q&A with source-attributed answers. Built lock-free SQLite-backed Qdrant ingestion pipeline achieving document indexing in seconds.",
    tech_stack: ["Python", "FastAPI", "LangChain", "Qdrant", "SQLite", "Gemini API"],
    business_impact: "Bilingual ReAct agent for PDF Q&A with source attribution and lock-free Qdrant document indexing.",
    repo_url: "https://github.com/Ahmed-7-ML/ReActify-PDF",
    image_path: "/reactify-pdf.jpg",
    youtube_url: "",
    category: "llm-apps"
  },
  {
    id: "multi-agent-research",
    name: "Multi-Agent Research & Writing System",
    tagline: "Automated Research & Report Generation Pipeline",
    description: "Built a multi-agent pipeline cutting research time by ~80%, generating structured reports in under 2 minutes. Integrated Groq LLaMA 3.3 70B achieving GPT-4-comparable output; resolved 6+ integration challenges.",
    tech_stack: ["Python", "LangGraph", "CrewAI", "FastAPI", "n8n", "Groq LLaMA 3.3"],
    business_impact: "Cuts research time by ~80%, generating structured reports in under 2 minutes with Groq LLaMA 3.3 70B.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "agentic-apps"
  },
  {
    id: "ai-procurement",
    name: "AI-Powered Procurement System — Multi-Agent",
    tagline: "Four-Agent Procurement Automation Pipeline",
    description: "Designed a 4-agent CrewAI pipeline automating procurement workflow, cutting manual research by 70%. Containerized with Docker; agents compare prices across Amazon Egypt, Jumia, and Noon in real-time.",
    tech_stack: ["Python", "CrewAI", "LangChain", "Groq LLaMA 3.3", "Tavily", "AgentOps", "Docker"],
    business_impact: "Automates procurement workflow cutting manual research by 70% with real-time price comparison.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "agentic-apps"
  },
  {
    id: "multilingual-rag",
    name: "Multilingual RAG Chatbot — Customer Support",
    tagline: "Production RAG Chatbot with MMR Retrieval",
    description: "Built production RAG chatbot handling Arabic/English queries with MMR retrieval (k=6). Implemented hallucination control via strict system prompting — agent escalates to human support when needed.",
    tech_stack: ["Python", "LangChain", "Chroma", "Groq", "HuggingFace", "Gradio"],
    business_impact: "Production RAG chatbot handling Arabic/English queries with MMR retrieval and strict system prompting.",
    repo_url: "",
    image_path: "",
    youtube_url: "",
    category: "llm-apps"
  },
  {
    id: "deep-learning-multi-domain",
    name: "Deep Learning — Multi-Domain | ML Lifecycle Factory",
    tagline: "End-to-End PyTorch Pipelines & ML Forge",
    description: "End-to-end PyTorch pipelines: image classification (CIFAR-10, MNIST), audio classification, breast cancer detection. Architected ML Forge: web platform automating full ML lifecycle, reducing cycle time by 40% via MLflow.",
    tech_stack: ["PyTorch", "TensorFlow", "Scikit-learn", "Flask", "MLflow", "OpenCV"],
    business_impact: "Multi-domain classification pipelines and ML Forge platform automating ML lifecycle, cutting cycle time by 40%.",
    repo_url: "",
    image_path: "",
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
