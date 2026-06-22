import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Akram Amer | AI/ML Engineer & Data Scientist Portfolio",
  description: "Enterprise-grade portfolio of Ahmed Akram Amer. Specializing in NLP, Generative AI (QueryGuard AI), custom BPE tokenizers, and Computer Vision pipelines.",
  keywords: ["AI Engineer", "ML Engineer", "Data Scientist", "QueryGuard AI", "Arabic Medical Tokenizer", "Computer Vision", "FastAPI", "Next.js"],
  authors: [{ name: "Ahmed Akram Amer" }],
  creator: "Ahmed Akram Amer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="bg-zinc-950 text-zinc-50 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
