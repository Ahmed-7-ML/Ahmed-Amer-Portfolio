import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf(filename="Ahmed Akram Amer CV.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom typography styles
    title_style = ParagraphStyle(
        'CVTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#000000')
    )

    contact_style = ParagraphStyle(
        'CVContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111111')
    )

    tagline_style = ParagraphStyle(
        'CVTagline',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )

    section_heading_style = ParagraphStyle(
        'CVSectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#000000'),
        spaceBefore=8,
        spaceAfter=2
    )

    item_title_style = ParagraphStyle(
        'CVItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#000000')
    )

    item_date_style = ParagraphStyle(
        'CVItemDate',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#000000')
    )

    sub_line_style = ParagraphStyle(
        'CVSubLine',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#333333'),
        spaceAfter=2
    )

    bullet_style = ParagraphStyle(
        'CVBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12.5,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=1.5
    )

    skill_style = ParagraphStyle(
        'CVSkill',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111'),
        spaceAfter=2.5
    )

    body_style = ParagraphStyle(
        'CVBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111'),
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("Ahmed Akram Amer", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph(
        '<font color="#0056b3"><a href="tel:+201007952538">+20 100 795 2538</a></font> | '
        '<font color="#0056b3"><a href="mailto:ahmedakram3ai@gmail.com">ahmedakram3ai@gmail.com</a></font> | '
        '<font color="#0056b3"><a href="https://linkedin.com/in/ahmed-akram-kamel-amer">linkedin.com/in/ahmed-akram-kamel-amer</a></font> | '
        '<font color="#0056b3"><a href="https://github.com/Ahmed-7-ML">github.com/Ahmed-7-ML</a></font>',
        contact_style
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Shebin el-Kom, Menoufia, Egypt", contact_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Electronics Engineering Graduate | 5+ Production AI Systems | LLM Applications & Multi-Agent Systems", tagline_style))
    story.append(Spacer(1, 6))

    def add_section(title):
        story.append(Paragraph(title, section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#000000'), spaceBefore=1, spaceAfter=5))

    # Education
    add_section("Education")
    edu_table_data = [
        [
            Paragraph("Menoufia University", item_title_style),
            Paragraph("Sep. 2021 – Oct. 2026", item_date_style)
        ]
    ]
    t = Table(edu_table_data, colWidths=[380, 160])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Paragraph("Bachelor of Electronic Engineering — Computer Science & Engineering Department | GPA: 3.71 / 4.0 Shebin el-Kom, Egypt", sub_line_style))
    story.append(Spacer(1, 4))

    # Work Experience
    add_section("Work Experience")

    # Item 1
    exp1_data = [
        [
            Paragraph("AI & ML Engineer Intern · Flyrank.AI", item_title_style),
            Paragraph("Jul. 1 – Aug. 26, 2026", item_date_style)
        ]
    ]
    t1 = Table(exp1_data, colWidths=[380, 160])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("Internship — AI and Machine Learning (8 Weeks)", sub_line_style))
    story.append(Paragraph("• Learning ML fundamentals both in theory and in practice.", bullet_style))
    story.append(Spacer(1, 4))

    # Item 2
    exp2_data = [
        [
            Paragraph("AI Engineering Intern · Tips Hindawi", item_title_style),
            Paragraph("Jun. 18 – Jul. 18, 2026", item_date_style)
        ]
    ]
    t2 = Table(exp2_data, colWidths=[380, 160])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("Internship — AI Engineering, Egypt (1 Month)", sub_line_style))
    story.append(Paragraph("• Learned HuggingFace Transformers architecture (Attention Is All You Need), Groq, Streamlit, LangChain, and RAG.", bullet_style))
    story.append(Paragraph("• Built LLM applications including an HR Q&A Assistant Chatbot and a Custom-PDF RAG application.", bullet_style))
    story.append(Spacer(1, 4))

    # Item 3
    exp3_data = [
        [
            Paragraph("MLOps Intern · SAiR", item_title_style),
            Paragraph("", item_date_style)
        ]
    ]
    t3 = Table(exp3_data, colWidths=[380, 160])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Paragraph("Internship — MLOps Fundamentals and Best Practices", sub_line_style))
    story.append(Paragraph("• Learning the fundamentals of ML, the ML lifecycle, MLOps in theory, and best practices.", bullet_style))
    story.append(Paragraph("• Hands-on tools: FastAPI, Docker, Kubernetes, Contabo, Feast, Prefect, MLflow, AWS.", bullet_style))
    story.append(Spacer(1, 4))

    # Item 4
    exp4_data = [
        [
            Paragraph("AI & Data Science Intern · DEPI | EYouth", item_title_style),
            Paragraph("Jun. 2024 – Dec. 2024", item_date_style)
        ]
    ]
    t4 = Table(exp4_data, colWidths=[380, 160])
    t4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Paragraph("Internship — AI & Machine Learning Egypt (Remote)", sub_line_style))
    story.append(Paragraph("• Engineered supervised ML models for predictive analytics, achieving 90% accuracy on structured datasets.", bullet_style))
    story.append(Paragraph("• Reduced manual reporting time by 50% through automated ML pipelines deployed via Flask and Docker.", bullet_style))
    story.append(Paragraph("• Conducted EDA and feature engineering with Pandas and Seaborn across 10+ high-dimensional datasets.", bullet_style))
    story.append(Spacer(1, 4))

    # Projects
    add_section("Projects")

    # Project 1 (No project link!)
    story.append(Paragraph("QueryGuard AI — Enterprise Text-to-SQL Platform", item_title_style))
    story.append(Paragraph("Python, Gemini 2.5 Flash, Streamlit, SQLite3, RBAC", sub_line_style))
    story.append(Paragraph("• Built a GenAI platform translating English/Arabic questions into optimized SQL queries for non-technical users.", bullet_style))
    story.append(Paragraph("• Implemented Dual-Layer RBAC: DROP, DELETE, TRUNCATE blocked at both UI and LLM prompt levels.", bullet_style))
    story.append(Paragraph("• Modular architecture supports one-line migration from SQLite3 to PostgreSQL or Amazon RDS.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2 (Updated Title, No project link!)
    story.append(Paragraph("ReActify-PDF — Chat with PDF RAG Project", item_title_style))
    story.append(Paragraph("Python, FastAPI, LangChain, Qdrant, SQLite, Gemini API", sub_line_style))
    story.append(Paragraph("• Engineered a bilingual (English/Arabic) ReAct agent for PDF Q&A with source-attributed answers.", bullet_style))
    story.append(Paragraph("• Built lock-free SQLite-backed Qdrant ingestion pipeline achieving document indexing in seconds.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3
    story.append(Paragraph("Multi-Agent Research & Writing System", item_title_style))
    story.append(Paragraph("Python, LangGraph, CrewAI, FastAPI, n8n, Groq LLaMA 3.3", sub_line_style))
    story.append(Paragraph("• Built a multi-agent pipeline cutting research time by ~80%, generating structured reports in under 2 minutes.", bullet_style))
    story.append(Paragraph("• Integrated Groq LLaMA 3.3 70B achieving GPT-4-comparable output; resolved 6+ integration challenges.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 4
    story.append(Paragraph("AI-Powered Procurement System — Multi-Agent", item_title_style))
    story.append(Paragraph("Python, CrewAI, LangChain, Groq LLaMA 3.3, Tavily, AgentOps", sub_line_style))
    story.append(Paragraph("• Designed a 4-agent CrewAI pipeline automating procurement workflow, cutting manual research by 70%.", bullet_style))
    story.append(Paragraph("• Containerized with Docker; agents compare prices across Amazon Egypt, Jumia, and Noon in real-time.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 5
    story.append(Paragraph("Multilingual RAG Chatbot — Customer Support", item_title_style))
    story.append(Paragraph("Python, LangChain, Chroma, Groq, HuggingFace, Gradio", sub_line_style))
    story.append(Paragraph("• Built production RAG chatbot handling Arabic/English queries with MMR retrieval (k=6).", bullet_style))
    story.append(Paragraph("• Implemented hallucination control via strict system prompting — agent escalates to human support when needed.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 6
    story.append(Paragraph("Deep Learning — Multi-Domain | ML Lifecycle Factory", item_title_style))
    story.append(Paragraph("PyTorch, TensorFlow, Scikit-learn, Flask, MLflow, OpenCV", sub_line_style))
    story.append(Paragraph("• End-to-end PyTorch pipelines: image classification (CIFAR-10, MNIST), audio classification, breast cancer detection.", bullet_style))
    story.append(Paragraph("• Architected ML Forge: web platform automating full ML lifecycle, reducing cycle time by 40% via MLflow.", bullet_style))
    story.append(Spacer(1, 4))

    # Extracurricular Activities
    add_section("Extracurricular Activities")
    extra_data = [
        [
            Paragraph("NASA Space Apps Challenge", item_title_style),
            Paragraph("Oct. 2024", item_date_style)
        ]
    ]
    t_ex = Table(extra_data, colWidths=[380, 160])
    t_ex.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_ex)
    story.append(Paragraph("Participant — Seismic Detection Across the Solar System, Egypt", sub_line_style))
    story.append(Paragraph("• Developed a seismic signal detection system for planetary data analysis.", bullet_style))
    story.append(Paragraph("• Presented the project in a final demo and discussion session, receiving an achievement certificate.", bullet_style))
    story.append(Spacer(1, 4))

    # Technical Skills
    add_section("Technical Skills")
    skills = [
        ("Programming Languages:", "Python, SQL, Java"),
        ("AI Agents:", "LangChain, LangGraph, CrewAI, LangSmith, AgentOps, RAG, ReAct, Prompt Engineering"),
        ("LLMs and NLP:", "HuggingFace Transformers, Groq, Google Gemini, OpenAI, NLTK, SpaCy"),
        ("Deep Learning:", "PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, OpenCV"),
        ("Web and APIs:", "FastAPI, Flask, Streamlit, Gradio"),
        ("MLOps and Cloud:", "MLflow, Docker, Kubernetes, GitHub Actions (CI/CD), AWS (EC2, S3, SageMaker), Feast, Prefect"),
        ("Databases:", "SQLite, PostgreSQL, SQL Server, Oracle, Pinecone, Chroma, Qdrant"),
        ("Tools:", "Git, GitHub, VS Code, Jupyter, Google Colab"),
        ("Soft Skills:", "Problem Solving, Critical Thinking, Research & Analysis, Attention to Detail, Fast Learner, Adaptability, Communication, Teamwork & Collaboration")
    ]
    for category, items in skills:
        story.append(Paragraph(f"<b>{category}</b> {items}", skill_style))
    story.append(Spacer(1, 4))

    # Certifications
    add_section("Certifications")
    certs = [
        "Building LLM Applications using Prompt Engineering — NVIDIA",
        "Machine Learning Specialization — DeepLearning.AI",
        "AI Engineer for Data Scientists Associate — DataCamp",
        "HCIA-AI — Huawei | Python for AI and Data Science — IBM",
        "Data Scientist — DEPI & EYouth | Applied Deep Learning — MaharaTech",
        "AI Camp — Sprints × Microsoft"
    ]
    for c in certs:
        story.append(Paragraph(f"• {c}", bullet_style))
    story.append(Spacer(1, 4))

    # Languages
    add_section("Languages")
    story.append(Paragraph("<b>Arabic:</b> Native", body_style))
    story.append(Paragraph("<b>English:</b> Intermediate", body_style))

    doc.build(story)
    print("PDF build successful.")

if __name__ == "__main__":
    build_pdf()
