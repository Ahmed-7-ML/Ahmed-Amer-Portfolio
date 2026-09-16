import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Akram Amer — AI & MLOps Engineer",
  description: "AI & MLOps Engineer specialized in RAG systems, LLM fine-tuning, Agentic AI, PyTorch, Docker, FastAPI & end-to-end ML lifecycle automation.",
  authors: [{ name: "Ahmed Akram Amer" }],
  keywords: ["AI Engineer", "MLOps", "LLM", "RAG", "Machine Learning", "Python", "FastAPI", "Docker", "PyTorch", "LangChain"],
  openGraph: {
    title: "Ahmed Akram Amer — AI & MLOps Engineer",
    description: "Building production-grade AI systems, MLOps pipelines & LLM apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Akram Amer — AI & MLOps Engineer",
    description: "Building production-grade AI systems, MLOps pipelines & LLM apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#080808" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-[#efefef] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

