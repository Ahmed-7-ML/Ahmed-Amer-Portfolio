"""
Central data store and Pydantic models for the portfolio application.
Contains biographical details, milestones, certificates, and project logs.
"""
from typing import List, Dict
from pydantic import BaseModel

# --- Pydantic Data Schemas ---

class Bio(BaseModel):
    """Biographical information of the engineer."""
    name: str
    title: str
    headline: str
    education: str
    graduation_year: str
    about: str
    email: str
    github: str
    linkedin: str
    avatar_url: str

class Milestone(BaseModel):
    """Key achievements, certificates, and work milestones."""
    id: str
    title: str
    organization: str
    date: str
    description: str
    type: str  # e.g., 'award', 'education', 'internship', 'certification'
    status: str  # e.g., 'completed', 'upcoming', 'in-progress'

class Certificate(BaseModel):
    """Professional certifications and courses."""
    id: str
    title: str
    issuer: str
    image_path: str
    category: str  # e.g., 'ai-ml', 'languages', 'cloud-infra', 'experience'

class Project(BaseModel):
    """Core projects showcasing technical expertise."""
    id: str
    name: str
    tagline: str
    description: str
    tech_stack: List[str]
    business_impact: str
    repo_url: str
    image_path: str
    youtube_url: str
    category: str

class ProfileData(BaseModel):
    """Aggregated portfolio data payload."""
    bio: Bio
    milestones: List[Milestone]
    certificates: List[Certificate]
    projects: List[Project]


# --- Data Records ---

BIO_RECORD = Bio(
    name="Ahmed Akram Amer",
    title="Aspiring AI/ML Engineer & Data Scientist",
    headline="Building secure agentic systems, custom tokenizers, and assistive vision pipelines.",
    education="Menoufia University",
    graduation_year="2026",
    about=(
        "Driven AI/ML Engineer and Data Scientist specializing in Generative AI, Natural Language "
        "Processing, and Computer Vision. Dedicated to designing secure, production-ready AI solutions "
        "with robust guardrails, custom tokenization architectures, and real-time inference systems. "
        "Committed to bridging academic research with enterprise-grade deployments."
    ),
    email="ahmed.akram.amer@example.com",
    github="https://github.com/ahmedakram",
    linkedin="https://linkedin.com/in/ahmedakram",
    avatar_url="/images/profile.png"
)

MILESTONES_RECORDS = [
    Milestone(
        id="flyrank-intern",
        title="AI/ML Engineer Intern",
        organization="FlyRank",
        date="Upcoming 2026",
        description="Selected for an upcoming internship focusing on scalable Generative AI model deployments and microservices.",
        type="internship",
        status="upcoming"
    ),
    Milestone(
        id="depi-intern",
        title="AI & Data Science Intern",
        organization="DEPI | EYouth",
        date="Jun 2024 – Dec 2024",
        description=(
            "• Engineered supervised ML models for predictive analytics, achieving 90% accuracy on structured datasets and reducing manual reporting time by 50%.\n"
            "• Conducted EDA and feature engineering with Pandas and Seaborn across 10+ high-dimensional datasets, surfacing actionable business insights for stakeholders.\n"
            "• Deployed supervised ML models as REST APIs using Flask and Docker, enabling real-time inference for business users and reducing inference latency in production environments."
        ),
        type="internship",
        status="completed"
    ),
    Milestone(
        id="menoufia-degree",
        title="B.Sc. in Computer Science / AI Specialty",
        organization="Menoufia University",
        date="2022 - 2026",
        description="Focusing on Algorithm Design, Artificial Intelligence, Database Systems, and Graduation Project in Assistive Vision.",
        type="education",
        status="in-progress"
    )
]

CERTIFICATES_RECORDS = [
    Certificate(
        id="hcia-exam",
        title="HCIA-AI V3.5 Course Certificate",
        issuer="Huawei",
        image_path="/certs/HCIA-Exam.png",
        category="ai-ml"
    ),
    Certificate(
        id="hcia-course",
        title="Huawei HCIA-AI Learning Course Attendance",
        issuer="Huawei & iTB",
        image_path="/certs/HCIA- Course.jpg",
        category="ai-ml"
    ),
    Certificate(
        id="ml-specialization",
        title="Machine Learning Specialization",
        issuer="DeepLearning.AI & Stanford University",
        image_path="/certs/ML Specialization.png",
        category="ai-ml"
    ),
    Certificate(
        id="datacamp-ai-engineer",
        title="AI Engineer for Data Scientists Associate",
        issuer="DataCamp",
        image_path="/certs/AI Engineer.png",
        category="ai-ml"
    ),
    Certificate(
        id="datacamp-ai-fundamentals",
        title="AI Fundamentals Certification",
        issuer="DataCamp",
        image_path="/certs/AI Fundmentals.png",
        category="ai-ml"
    ),
    Certificate(
        id="c1-supervised",
        title="Supervised Machine Learning: Regression & Classification",
        issuer="DeepLearning.AI",
        image_path="/certs/C1_Supervised.png",
        category="ai-ml"
    ),
    Certificate(
        id="c2-advanced",
        title="Advanced Learning Algorithms",
        issuer="DeepLearning.AI",
        image_path="/certs/C2_Advanced.png",
        category="ai-ml"
    ),
    Certificate(
        id="c3-unsupervised",
        title="Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer="DeepLearning.AI",
        image_path="/certs/C3_Unsupervised.png",
        category="ai-ml"
    ),
    Certificate(
        id="sprints-microsoft-camp",
        title="Sprints x Microsoft Summer Camp - AI and Machine Learning",
        issuer="Sprints & Microsoft",
        image_path="/certs/sprints.png",
        category="ai-ml"
    ),
    Certificate(
        id="oracle-ai-foundations",
        title="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer="Oracle University",
        image_path="/certs/oracle.png",
        category="cloud-infra"
    ),
    Certificate(
        id="python-ibm-badge",
        title="Python for Data Science and AI (Digital Badge)",
        issuer="IBM Developer Skills Network & Coursera",
        image_path="/certs/python-ibm-badge.png",
        category="languages"
    ),
    Certificate(
        id="python-ibm-course",
        title="Python for Data Science and AI Course",
        issuer="IBM & Coursera",
        image_path="/certs/python-ibm.png",
        category="languages"
    ),
    Certificate(
        id="python-hackerrank",
        title="Python (Basic) Skill Certification",
        issuer="HackerRank",
        image_path="/certs/python.png",
        category="languages"
    ),
    Certificate(
        id="sql-hackerrank",
        title="SQL (Intermediate) Skill Certification",
        issuer="HackerRank",
        image_path="/certs/sql-intermediate.png",
        category="languages"
    ),
    Certificate(
        id="ba-forage-simulation",
        title="British Airways - Data Science Job Simulation",
        issuer="British Airways & Forage",
        image_path="/certs/forage.png",
        category="experience"
    ),
    Certificate(
        id="depi-data-scientist",
        title="Digital Egypt Pioneers Program (DEPI) - Data Scientist",
        issuer="DEPI & Eyouth & Berlitz (sponsored by MCIT)",
        image_path="/certs/Certificate.jpg",
        category="experience"
    )
]

PROJECTS_RECORDS = [
    Project(
        id="reactify-pdf",
        name="ReActify-PDF",
        tagline="Enterprise ReAct Agent PDF Chat Application",
        description=(
            "An enterprise-grade, agentic PDF chatting application utilizing a ReAct (Reasoning and Acting) Agent framework. "
            "It ingestion-pipelines documents into a local SQLite-backed Qdrant vector database, calculates embeddings using "
            "the Gemini API, and allows users to query documents dynamically with high fidelity in both English and Arabic."
        ),
        tech_stack=["React", "FastAPI", "Qdrant", "SQLite", "Google Gemini API", "Python", "ReAct Agent"],
        business_impact="Enables secure, high-fidelity multilingual PDF querying and automated ingestion with local vector storage for data sovereignty.",
        repo_url="https://github.com/Ahmed-7-ML/ReActify-PDF.git",
        image_path="/images/reactify-pdf.jpg",
        youtube_url="https://youtube.com",
        category="llm-apps"
    ),
    Project(
        id="semantic-search-engine",
        name="Semantic Search & Analytics Engine",
        tagline="Hybrid Keyword & Vector Search on Multi-Modal Corpora",
        description=(
            "A hybrid retrieval engine combining BM25 keyword matching with dense vector embeddings to perform semantic search over enterprise knowledge bases. Integrates cross-encoders for reranking results."
        ),
        tech_stack=["Pinecone", "Cohere Embeddings", "LangChain", "FastAPI", "Next.js"],
        business_impact="Boosted search relevance (NDCG@10) by 35% and cut document retrieval times down to sub-100ms.",
        repo_url="https://github.com/Ahmed-7-ML/semantic-search-engine",
        image_path="/images/semantic-search.png",
        youtube_url="https://youtube.com",
        category="llm-apps"
    ),
    Project(
        id="queryguard-ai",
        name="Enterprise QueryGuard AI",
        tagline="GenAI Database Agent with Dual-Layer RBAC",
        description=(
            "An enterprise-grade GenAI platform translating plain English or Arabic questions into optimized, "
            "executable SQL queries with real-time previews. Powered by Gemini 2.5 Flash, Streamlit, and a robust "
            "Role-Based Access Control (RBAC) security layer."
        ),
        tech_stack=["Python", "Gemini 2.5 Flash", "Streamlit", "Pandas", "SQLite3", "Poetry"],
        business_impact="Democratizes database access for non-technical users while securing destructive operations at both the prompt and database view layers (RBAC).",
        repo_url="https://github.com/Ahmed-7-ML/QueryGuard-AI.git",
        image_path="/images/QueryGuard_SysArch.png",
        youtube_url="https://youtu.be/varTjXiQhZg",
        category="agentic-apps"
    ),
    Project(
        id="n8n-support-automation",
        name="n8n Customer Support Automation",
        tagline="Automated Lead Enrichment & AI Ticket Router",
        description=(
            "A production-grade n8n automation workflow that listens to incoming support tickets, routes them via an LLM classifier, "
            "enriches CRM leads using Clearbit APIs, and posts auto-generated draft replies to Slack and Zendesk."
        ),
        tech_stack=["n8n", "OpenAI API", "PostgreSQL", "Slack API", "Zendesk API"],
        business_impact="Reduced average response time by 75% and automated manual triage for over 10,000+ support leads monthly.",
        repo_url="https://github.com/Ahmed-7-ML/n8n-support-automation",
        image_path="/images/n8n-workflow.png",
        youtube_url="https://youtube.com",
        category="agentic-apps"
    ),
    Project(
        id="langgraph-researcher",
        name="LangGraph Multi-Agent Researcher",
        tagline="Self-Correcting Multi-Agent Content Generation System",
        description=(
            "A stateful multi-agent system built using LangGraph to perform web research, synthesize information, draft reports, "
            "and self-correct based on human-in-the-loop validation or automated reflection steps."
        ),
        tech_stack=["LangGraph", "LangChain", "Tavily Search API", "Python", "Anthropic Claude"],
        business_impact="Enables autonomous generation of comprehensive, fact-checked research papers with 98% factual accuracy verified by critique agents.",
        repo_url="https://github.com/Ahmed-7-ML/langgraph-researcher",
        image_path="/images/langgraph-agent.png",
        youtube_url="https://youtube.com",
        category="agentic-apps"
    ),
    Project(
        id="crewai-dev-crew",
        name="CrewAI Autonomous Dev Crew",
        tagline="Hierarchical Multi-Agent Crew for Automated Code Generation",
        description=(
            "An autonomous agent team composed of a Product Manager Agent, a Senior Developer Agent, and a QA Tester Agent cooperating "
            "via CrewAI. Generates complete, lint-checked web components from user stories."
        ),
        tech_stack=["CrewAI", "Python", "LlamaIndex", "Git API", "ChromaDB"],
        business_impact="Accelerated prototyping cycle from 3 days to under 15 minutes with automated unit test generation and syntax verification.",
        repo_url="https://github.com/Ahmed-7-ML/crewai-dev-crew",
        image_path="/images/crewai-team.png",
        youtube_url="https://youtube.com",
        category="agentic-apps"
    ),
    Project(
        id="arabic-medical-bpe",
        name="Arabic Medical BPE Tokenizer",
        tagline="Custom Byte Pair Encoding Tokenizer for Clinical Corpora",
        description=(
            "A custom-trained Byte Pair Encoding (BPE) tokenizer engineered specifically for Arabic medical "
            "terminology. Trained on specialized medical texts to capture complex clinical syntax and "
            "terminology which standard tokenizers segment poorly."
        ),
        tech_stack=["Python", "Hugging Face Tokenizers", "NLP", "PyTorch", "Arabic Medical Corpus"],
        business_impact="Improved downstream LLM clinical phrase comprehension by 25%. Reduced out-of-vocabulary (OOV) tokens to less than 0.5% on medical test datasets.",
        repo_url="https://github.com/ahmedakram/arabic-medical-tokenizer",
        image_path="/images/tokenizer.png",
        youtube_url="https://youtube.com",
        category="ml-engineering"
    ),
    Project(
        id="vision-context-app",
        name="Vision Assist for Visually Impaired",
        tagline="Real-time Computer Vision & LLM Description Pipeline",
        description=(
            "Graduation project showcasing an end-to-end computer vision assistant. Integrates real-time "
            "object detection (YOLOv8) with a captioning engine (BLIP-2) to translate environment feeds "
            "into descriptive audio guidance with ultra-low latency."
        ),
        tech_stack=["YOLOv8", "PyTorch", "BLIP-2", "OpenCV", "FastAPI", "React Native"],
        business_impact="Delivered real-time environment narration and hazard warnings with sub-200ms latency on edge hardware, greatly increasing spatial awareness.",
        repo_url="https://github.com/ahmedakram/vision-context-app",
        image_path="/images/vision-context.png",
        youtube_url="https://youtube.com",
        category="ml-engineering"
    ),
    Project(
        id="llm-inference-pipeline",
        name="Low-Latency LLM Inference Pipeline",
        tagline="TensorRT-LLM & vLLM Serving Infrastructure on Kubernetes",
        description=(
            "High-performance inference engine hosting fine-tuned Llama-3 models. Features dynamic batching, "
            "paged attention, and FP8 quantization for real-time customer-facing applications."
        ),
        tech_stack=["vLLM", "TensorRT-LLM", "Docker", "Kubernetes", "Triton Server", "Prometheus"],
        business_impact="Reduced inference latency by 45% and doubled throughput (tokens/sec) while lowering cloud compute costs by 30%.",
        repo_url="https://github.com/Ahmed-7-ML/llm-inference-pipeline",
        image_path="/images/inference-pipeline.png",
        youtube_url="https://youtube.com",
        category="ml-engineering"
    )
]

def get_portfolio_profile() -> ProfileData:
    """Returns the aggregated portfolio profile data."""
    return ProfileData(
        bio=BIO_RECORD,
        milestones=MILESTONES_RECORDS,
        certificates=CERTIFICATES_RECORDS,
        projects=PROJECTS_RECORDS
    )
