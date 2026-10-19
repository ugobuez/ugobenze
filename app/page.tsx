"use client";

import { useState } from "react";
import { projects } from "../data/projects";

const siteUrl = "https://ugobuezeweb.vercel.app";

const certifications = [
  {
    title: "AWS Certified Generative AI Developer – Professional (AIP-C01)",
    issuer: "Amazon Web Services",
    date: "April 2026",
    credentialUrl: "https://aws.amazon.com/certification/",
    imageSrc: "/image/aws.png", 
  },
  {
    title: "Citi ICG Technology Software Development Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    credentialUrl: "https://www.theforage.com/completion-certificates/8eNRcRqBZM9HLvwGw/2jxESPvorR7fmypXj_8eNRcRqBZM9HLvwGw_BqYsxsQMKcfvJBi8r_1781199635499_completion_certificate.pdf",
    imageSrc: "/image/Capture.PNG",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ugochukwu Meshach",
  alternateName: "Ugobenze",
  url: siteUrl,
  jobTitle: "Full-Stack Software Engineer & Digital Illustrator",
  description:
    "Top-tier Full-Stack Software Engineer, Digital Illustrator, and Creative Technologist specializing in scalable web architecture, character concept art, and high-performance AI integration.",
  sameAs: [
    "https://linkedin.com/in/ugochukwu-meshach-69b830285",
    "https://github.com/ugobuez",
    "https://www.instagram.com/meshachugochukwu/",
  ],
  knowsAbout: [
    "Full-Stack Software Engineering",
    "Digital Illustration",
    "Character Concept Art",
    "Visual Identity & Consistency",
    "Music Production",
    "React & Next.js",
    "TypeScript & JavaScript",
    "Node.js & Express",
    "MongoDB & PostgreSQL",
    "AWS Cloud Infrastructure",
    "Docker & CI/CD Pipelines",
    "Generative AI & Prompt Engineering",
  ],
};

const skills = [
  {
    title: "Frontend & Creative",
    icon: (
      <svg className="h-6 w-6 text-violet-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "React", icon: <span className="text-sky-500 font-bold">⚛️</span> },
      { name: "Next.js", icon: <span className="text-slate-900 font-bold">▲</span> },
      { name: "TypeScript", icon: <span className="text-blue-600 font-bold">TS</span> },
      { name: "JavaScript", icon: <span className="text-amber-500 font-bold">JS</span> },
      { name: "Tailwind CSS", icon: <span className="text-teal-500 font-bold">🎨</span> },
      { name: "Character Design", icon: <span className="text-fuchsia-500 font-bold">🖌️</span> },
      { name: "Vector Illustration", icon: <span className="text-violet-500 font-bold">✏️</span> },
    ],
  },
  {
    title: "Backend & Data",
    icon: (
      <svg className="h-6 w-6 text-violet-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: [
      { name: "Node.js", icon: <span className="text-emerald-600 font-bold">🟢</span> },
      { name: "Express", icon: <span className="text-slate-700 font-bold">EX</span> },
      { name: "REST APIs", icon: <span className="text-indigo-500 font-bold">🔌</span> },
      { name: "MongoDB", icon: <span className="text-emerald-500 font-bold">🍃</span> },
      { name: "PostgreSQL fundamentals", icon: <span className="text-sky-600 font-bold">🐘</span> },
    ],
  },
  {
    title: "Cloud & Delivery",
    icon: (
      <svg className="h-6 w-6 text-violet-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    items: [
      { name: "AWS", icon: <span className="text-amber-600 font-bold">☁️</span> },
      { name: "Docker", icon: <span className="text-sky-500 font-bold">🐳</span> },
      { name: "GitHub Actions", icon: <span className="text-purple-600 font-bold">⚙️</span> },
      { name: "Vercel", icon: <span className="text-slate-900 font-bold">▲</span> },
      { name: "Railway", icon: <span className="text-pink-500 font-bold">🚂</span> },
      { name: "CI/CD", icon: <span className="text-indigo-600 font-bold">🔄</span> },
    ],
  },
  {
    title: "AI & Quality",
    icon: (
      <svg className="h-6 w-6 text-violet-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      { name: "LLM integrations", icon: <span className="text-violet-600 font-bold">🤖</span> },
      { name: "prompt engineering", icon: <span className="text-fuchsia-600 font-bold">✨</span> },
      { name: "API testing", icon: <span className="text-teal-600 font-bold">🧪</span> },
      { name: "Jest", icon: <span className="text-rose-500 font-bold">🃏</span> },
      { name: "documentation", icon: <span className="text-amber-600 font-bold">📄</span> },
    ],
  },
];

const experience = [
  {
    role: "AI Training Expert & Illustrator (Contract, Remote)",
    company: "micro1 & Turing Network",
    period: "Sep 2026 – Present",
    description: [
      "Create high-quality character illustrations and concept variations while maintaining strict visual consistency and identity across advanced AI training tasks.",
      "Evaluate, fine-tune, and train next-generation AI vision and art generation models through rigorous prompt engineering and design guidelines.",
    ],
  },
  {
    role: "Intermediate Software Developer (Internship)",
    company: "SAGE LMS Platform, Sage Institute (Pluralcode Academy partner) | Lagos, Nigeria",
    period: "May 2025 – Oct 2025",
    description: [
      "Designed and maintained CI/CD pipelines on Vercel and Railway, cutting manual deployment time by 60% and enabling repeatable releases.",
      "Containerized services with Docker and added automated build, test, and deploy steps, keeping environments consistent.",
      "Built secure RESTful APIs with JWT authentication and role-based access control (RBAC).",
      "Optimized MongoDB queries and indexing, improving average API response time by 40% under peak load.",
      "Diagnosed and resolved 15+ production issues through root-cause analysis and robust monitoring.",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/85 backdrop-blur-xl transition-all duration-300">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a href="#home" className="group flex items-center gap-2 font-bold tracking-tight text-violet-950 transition hover:text-violet-600">
            <svg className="h-6 w-6 text-violet-600 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Ugobenze<span className="text-violet-500">.</span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center justify-end gap-x-5 text-sm text-violet-950">
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#about">About</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#projects">Projects</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#art-portfolio">Art & Illustration</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#music">Music</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#skills">Skills</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#experience">Experience</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#education">Education</a>
            <a className="transition hover:text-violet-600 hover:-translate-y-0.5 inline-block" href="#certifications">Certifications</a>
            
            <div className="flex items-center gap-3 pl-2 border-l border-violet-200">
              <a href="https://linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700 transition" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/ugobuez" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700 transition" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.instagram.com/meshachugochukwu/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700 transition" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>

            <a
              href="/Ugochukwu_Meshach_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-2 font-semibold text-violet-950 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:shadow-sm"
            >
              Resume ↗
            </a>

            <a className="flex items-center gap-1.5 rounded-full bg-violet-700 px-4 py-2 font-medium text-white transition duration-300 hover:bg-violet-800 hover:shadow-md hover:shadow-violet-200 hover:-translate-y-0.5 active:translate-y-0" href="#contact">
              Contact
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 bg-white text-violet-950 transition hover:bg-violet-50 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="border-t border-violet-100 bg-white/95 px-5 py-6 shadow-xl backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col space-y-4 text-base font-medium text-violet-950">
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#about">About</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#projects">Projects</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#art-portfolio">Art & Illustration</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#music">Music</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#skills">Skills</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#experience">Experience</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#education">Education</a>
              <a onClick={() => setMobileMenuOpen(false)} className="transition hover:text-violet-600" href="#certifications">Certifications</a>
              
              <div className="flex items-center gap-4 py-2">
                <a href="https://linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700">LinkedIn</a>
                <a href="https://github.com/ugobuez" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700">GitHub</a>
                <a href="https://www.instagram.com/meshachugochukwu/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-700">Instagram</a>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="/Ugochukwu_Meshach_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white py-3 font-semibold text-violet-950 shadow-sm"
                >
                  View Resume ↗
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-violet-700 py-3 font-semibold text-white shadow-md shadow-violet-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="flex-1 overflow-hidden">
        <section className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(216,180,254,0.35),transparent_48%),radial-gradient(ellipse_at_top_right,rgba(125,211,252,0.25),transparent_42%),linear-gradient(180deg,#fffaff_0%,#ffffff_85%)]"
          />

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm text-violet-800 shadow-sm transition hover:border-violet-300 hover:bg-white">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Full-Stack Software Engineer & Digital Illustrator · Available for Global Roles
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-violet-950 sm:text-6xl lg:text-7xl">
                Building software &{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                  digital character art.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                I&apos;m <strong className="text-violet-950 font-semibold">Ugochukwu Meshach</strong> (Ugobenze) a versatile Full-Stack Software Engineer, Digital Illustrator, and Creative Technologist. I build high-performance web applications, scalable backend APIs, and precise character concept art with rigorous visual consistency.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-violet-700 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-xl hover:shadow-violet-300 active:translate-y-0"
                >
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Explore Software Projects
                </a>
                <a
                  href="#art-portfolio"
                  className="group flex items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-950 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-md active:translate-y-0"
                >
                  <svg className="h-5 w-5 text-violet-600 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Art & Illustration ↗
                </a>
              </div>

              <p className="mt-7 text-sm text-slate-500">
                Remote Worldwide · GMT+1 · Full-Stack & Generative AI Excellence
              </p>
            </div>

            {/* PROFILE CARD WITH USER IMAGE */}
            <div className="relative mx-auto w-full max-w-md">
              <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-200/70 via-violet-200/50 to-sky-200/70 blur-2xl animate-pulse" />
              <div className="relative rounded-[2rem] border border-white/90 bg-white/75 p-6 shadow-2xl shadow-violet-200/50 backdrop-blur-xl transition duration-500 hover:scale-[1.01] sm:p-8">
                <div className="flex items-center gap-4 border-b border-violet-100 pb-5">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-violet-500 shadow-md">
                    <img 
                      src="/image/587282.jpg" 
                      alt="Ugochukwu Meshach" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Developer & Visual Artist</p>
                    <p className="text-xl font-semibold text-violet-950">Ugochukwu Meshach</p>
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  {[
                    ["01", "Build", "Accessible, responsive web user experiences"],
                    ["02", "Illustrate", "Character designs, turnaround sheets & concepts"],
                    ["03", "Deliver", "Full-stack apps, AI tools & deployment pipelines"],
                  ].map(([number, title, description]) => (
                    <div key={number} className="group flex gap-4 rounded-2xl border border-violet-100/80 bg-white/80 p-4 transition duration-300 hover:border-violet-200 hover:shadow-md hover:-translate-y-0.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-700 transition duration-300 group-hover:bg-violet-600 group-hover:text-white">
                        {number}
                      </span>
                      <div>
                        <h2 className="font-semibold text-violet-950">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-600 p-5 text-white shadow-lg shadow-violet-200/50">
                  <p className="text-sm text-violet-100">Music Artist (Ugobenze)</p>
                  <p className="mt-1 text-base font-semibold">Streaming releases like &quot;My Heart go follow you go&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 items-center">
            <div className="group overflow-hidden rounded-3xl border border-violet-200 shadow-xl shadow-violet-100 transition duration-500 hover:shadow-2xl hover:shadow-violet-200/60">
              <img 
                src="/image/587282.jpg" 
                alt="Ugochukwu Meshach Ugobenze" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">About me</p>
              <h2 id="about-title" className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
                Engineering Scalable Systems & Captivating Visual Art.
              </h2>
              <p>
                I am <strong className="text-violet-950 font-semibold">Ugochukwu Meshach</strong> (known as <strong className="text-violet-950 font-semibold">Ugobenze</strong>), a multidisciplinary software engineer and visual artist based in Lagos, Nigeria. I combine rigorous full-stack development expertise with an advanced background in digital character illustration and generative AI workflows.
              </p>
              <p>
                Recognized with a merit award and fully funded Generative AI scholarship from Pluralcode Academy, I specialize in architecting modern web applications using React, Next.js, TypeScript, Node.js, and AWS cloud pipelines. My engineering philosophy centers on clean code, robust API security, optimized database indexing, and automated CI/CD deployments.
              </p>
              <p>
                Simultaneously, my creative practice as a digital illustrator and concept artist focuses on character design, turnaround sheets, and strict visual identity retention. This unique dual capability allows me to build immersive, aesthetically polished digital products that bridge engineering precision with exceptional design.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/ugochukwu-meshach-69b830285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-950 hover:decoration-violet-600"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/ugobuez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-950 hover:decoration-violet-600"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub ↗
                </a>
                <a
                  href="https://www.instagram.com/meshachugochukwu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-950 hover:decoration-violet-600"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION WITH TECH STACK ICONS */}
        <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Featured Work</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 id="projects-title" className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
              Software Engineering Projects
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-violet-900/85 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white shadow-md">
                    Project #{String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold text-violet-950">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{project.description}</p>

                  {/* Project Tech Stack with Icons */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3.5 py-1.5 text-xs font-semibold text-violet-800 border border-violet-100 shadow-2xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-violet-100 pt-5 text-sm font-semibold">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-violet-700 transition hover:text-violet-950 hover:translate-x-1"
                    >
                      <span>Live Demo</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-700 transition hover:text-violet-950 hover:translate-x-1"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DIGITAL ART & ILLUSTRATION SHOWCASE */}
        <section id="art-portfolio" aria-labelledby="art-title" className="scroll-mt-24 py-20 bg-violet-50/30">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Visual Art Showcase</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 id="art-title" className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
                Character Illustration & Concept Art
              </h2>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Demonstrating character identity preservation, turnaround consistency, and professional execution across digital artwork.
              </p>
            </div>

            <div className="mt-10 space-y-12">
              <article className="group flex flex-col gap-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-500 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-100/70 lg:flex-row lg:p-8">
                <div className="w-full overflow-hidden rounded-2xl border border-violet-100 bg-slate-900 lg:w-3/5">
                  <img 
                    src="image/716f5346-b283-460d-8baf-5ae97f059309.png" 
                    alt="Character Concept Variations and Illustration | adobe.io" 
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 transition duration-300 group-hover:border-violet-300 group-hover:bg-violet-100">
                    Character Identity & Consistency
                  </div>
                  <h3 className="text-2xl font-bold text-violet-950 transition duration-300 group-hover:text-violet-700">
                    Stylized Character Concept Art
                  </h3>
                  <p className="leading-7 text-slate-600">
                    High-quality digital illustration showcasing proportion balance, color harmony, and precise identity retention across multiple creative variations.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-4 text-xs text-slate-700">
                    <div><strong>Specialty:</strong> Character Design</div>
                    <div><strong>Tools:</strong> Adobe Illustrator & Photoshop</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* MUSIC & MEDIA FEATURE SECTION (UGOBENZE) */}
        <section id="music" aria-labelledby="music-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 bg-gradient-to-br from-violet-950 via-violet-900 to-fuchsia-950 rounded-3xl my-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-200 backdrop-blur-md">
                Music Release · Ugobenze
              </span>
              <h2 id="music-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Heart go follow you go
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                As <strong className="text-white">Ugobenze</strong>, I craft soulful Afrobeats and contemporary rhythms. Stream my featured single <strong className="text-violet-200">&quot;My Heart go follow you go&quot;</strong> across all platforms.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://ffm.to/ugobenze-my-heart-go-follow-you-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-950 shadow-lg transition duration-300 hover:bg-violet-50 hover:-translate-y-0.5"
                >
                  Feature.fm Stream Link ↗
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/3iCqtmUOiNFJPIYuOriLlM?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="My Heart go follow you go by Ugobenze on Spotify"
                />
              </div>
              <p className="text-xs text-violet-300 text-center">
                Official Spotify Track Preview · Ugobenze — My Heart go follow you go
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION WITH ICONS */}
        <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Technical toolkit</p>
          <h2 id="skills-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Tools I use to build and ship.
          </h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill.title} className="group rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/80">
                <div className="flex items-center gap-3 border-b border-violet-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 transition duration-300 group-hover:bg-violet-100">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-violet-950">{skill.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-violet-100 bg-violet-50/50 px-3.5 py-2 text-xs font-semibold text-violet-900 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white hover:shadow-sm"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white shadow-xs border border-violet-100">
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 bg-violet-50/40 rounded-3xl my-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Career History</p>
          <h2 id="experience-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Professional Experience
          </h2>
          <div className="mt-10 space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-violet-100 pb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-violet-950">{exp.role}</h3>
                    <p className="text-sm font-medium text-violet-700">{exp.company}</p>
                  </div>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">{exp.period}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & SCHOLARSHIP SECTION */}
        <section id="education" aria-labelledby="education-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Academic Background</p>
          <h2 id="education-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Education & Scholarships
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-violet-100 pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-violet-950">Software Engineering, Full-Stack Track</h3>
                  <p className="text-sm font-medium text-violet-700">Pluralcode Academy | Lagos, Nigeria</p>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">Jun 2024 – Dec 2024</span>
              </div>
              <p className="mt-4 text-slate-600 leading-7">
                Intensive full-stack track covering modern web engineering principles, backend scalability, and database architecture.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-violet-100 pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-violet-950">Fully Funded Generative AI Scholarship</h3>
                  <p className="text-sm font-medium text-violet-700">Pluralcode Academy · Merit Award for Technical Excellence</p>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">Jan 2026</span>
              </div>
              <p className="mt-4 text-slate-600 leading-7">
                Awarded a fully funded scholarship in Generative AI recognizing high performance and technical excellence in advanced AI workflows, prompt architecture, and LLM implementations.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" aria-labelledby="certifications-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Credentials & Awards</p>
          <h2 id="certifications-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Certifications
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {certifications.map((cert) => (
              <article key={cert.title} className="flex flex-col justify-between rounded-3xl border border-violet-100 bg-white p-6 sm:p-8 shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-xl">
                <div>
                  <div className="overflow-hidden rounded-2xl border border-violet-100 bg-slate-50 mb-6">
                    <img 
                      src={cert.imageSrc} 
                      alt={cert.title} 
                      className="w-full h-64 object-contain p-2"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-600">{cert.issuer} · {cert.date}</span>
                  <h3 className="mt-2 text-xl font-semibold text-violet-950">{cert.title}</h3>
                </div>

                <div className="mt-6 pt-5 border-t border-violet-100">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 py-3 px-4 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800"
                  >
                    View Original PDF Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION WITH FULL SOCIAL & EMAIL ICONS */}
        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-800 via-violet-700 to-fuchsia-700 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12 lg:p-16">
            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Let&apos;s Connect</p>
              <h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Ready to collaborate?
              </h2>
              <p className="mt-4 text-violet-100 text-lg">
                Reach out for full-stack engineering, digital illustration, AI training, or music opportunities.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:ugochukwumeshach5@gmail.com?subject=Collaboration%20Opportunity%20-%20Portfolio"
                  className="group flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-violet-900 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-lg"
                >
                  <svg className="h-5 w-5 text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Me (ugochukwumeshach5@gmail.com)</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-violet-600/50">
                <a 
                  href="https://linkedin.com/in/ugochukwu-meshach-69b830285" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/ugobuez" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.instagram.com/meshachugochukwu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-violet-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ugochukwu Meshach (Ugobenze). Creator of &quot;My Heart go follow you go&quot;.</p>
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank" rel="noopener noreferrer" className="hover:text-violet-700 font-medium">LinkedIn</a>
            <a href="https://github.com/ugobuez" target="_blank" rel="noopener noreferrer" className="hover:text-violet-700 font-medium">GitHub</a>
            <a href="https://www.instagram.com/meshachugochukwu/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-700 font-medium">Instagram</a>
            <a href="mailto:ugochukwumeshach5@gmail.com" className="hover:text-violet-700 font-medium">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}