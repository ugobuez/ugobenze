import type { Metadata } from "next";
import { projects } from "../data/projects";

const siteUrl = "https://ugobenze.vercel.app";

export const metadata: Metadata = {
  title: "Ugochukwu Meshach | Full-Stack Software Developer & Digital Illustrator",
  description:
    "Explore Ugochukwu Meshach's software engineering and digital illustration portfolio, including HirePilot, ELD Trip Planner, web applications, full-stack development, character concept art, and cloud deployment.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    'Ugobenze',
    "Ugochukwu Meshach",
    "Full-Stack Developer",
    "Digital Illustrator",
    "Concept Artist",
    "Character Design",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS",
    "DevOps",
    "Remote Software Developer",
    "HirePilot",
    "ELD Trip Planner",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ugochukwu Meshach | Full-Stack Developer & Illustrator",
    description:
      "Software engineering and digital illustration portfolio featuring full-stack applications, character concept art, AI integrations, and deployment workflows.",
    siteName: "Ugochukwu Meshach Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Ugochukwu Meshach | Software Developer & Illustrator",
    description:
      "Full-stack development, digital character illustration, AI integrations, cloud deployment, and creative projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ugochukwu Meshach",
  url: siteUrl,
  jobTitle: "Full-Stack Software Developer & Digital Illustrator",
  description:
    "Software developer and digital artist focused on full-stack applications, character concept art, AI integrations, APIs, and deployment automation.",
  sameAs: [
    "https://linkedin.com/in/ugochukwu-meshach-69b830285",
    "https://github.com/ugobuez",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Digital Illustration",
    "Character Design",
    "Concept Art",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "AI Integration",
  ],
};

const skills = [
  {
    title: "Frontend & Creative",
    items: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Character Design, Vector Illustration",
  },
  {
    title: "Backend & Data",
    items: "Node.js, Express, REST APIs, MongoDB, PostgreSQL fundamentals",
  },
  {
    title: "Cloud & Delivery",
    items: "AWS, Docker, GitHub Actions, Vercel, Railway, CI/CD",
  },
  {
    title: "AI & Quality",
    items: "LLM integrations, prompt engineering, API testing, Jest, documentation",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a href="#home" className="font-bold tracking-tight text-violet-950">
            Ugobenze<span className="text-violet-500">.</span>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-violet-950 sm:gap-6">
            <a className="transition hover:text-violet-600" href="#about">About</a>
            <a className="transition hover:text-violet-600" href="#projects">Projects</a>
            <a className="transition hover:text-violet-600" href="#art-portfolio">Art & Illustration</a>
            <a className="transition hover:text-violet-600" href="#skills">Skills</a>
            <a className="transition hover:text-violet-600" href="#experience">Experience</a>
            <a className="rounded-full bg-violet-700 px-4 py-2 font-medium text-white transition hover:bg-violet-800" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="flex-1 overflow-hidden">
        <section className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(216,180,254,0.35),transparent_48%),radial-gradient(ellipse_at_top_right,rgba(125,211,252,0.25),transparent_42%),linear-gradient(180deg,#fffaff_0%,#ffffff_85%)]"
          />

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm text-violet-800 shadow-sm">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to software engineering & digital illustration roles
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-violet-950 sm:text-6xl lg:text-7xl">
                Building useful software &{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                  visual experiences.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                I&apos;m Ugochukwu Meshach, a full-stack software developer and digital illustrator
                working across web applications, API development, character design, and AI integrations.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-violet-700 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
                >
                  Explore my projects
                </a>
                <a
                  href="#art-portfolio"
                  className="rounded-full border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-950 transition hover:border-violet-400 hover:bg-violet-50"
                >
                  View Illustration Portfolio 🎨
                </a>
              </div>

              <p className="mt-7 text-sm text-slate-500">
                Remote opportunities · GMT+1 · Open to international teams
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-200/70 via-violet-200/50 to-sky-200/70 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/90 bg-white/75 p-6 shadow-2xl shadow-violet-200/50 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-violet-100 pb-5">
                  <div>
                    <p className="text-sm text-slate-500">Developer & Visual Artist</p>
                    <p className="mt-1 text-xl font-semibold text-violet-950">Ugochukwu Meshach</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-bold text-white shadow-lg shadow-violet-200">
                    UM
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  {[
                    ["01", "Build", "Accessible, responsive web user experiences"],
                    ["02", "Illustrate", "Character designs, turnaround sheets & concepts"],
                    ["03", "Deliver", "Full-stack apps, AI tools & deployment pipelines"],
                  ].map(([number, title, description]) => (
                    <div key={number} className="flex gap-4 rounded-2xl border border-violet-100/80 bg-white/80 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-700">
                        {number}
                      </span>
                      <div>
                        <h2 className="font-semibold text-violet-950">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-600 p-5 text-white">
                  <p className="text-sm text-violet-100">Current focus</p>
                  <p className="mt-1 text-lg font-semibold">Full-stack engineering · Digital Art · AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">About me</p>
              <h2 id="about-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
                Engineering & Creativity with Purpose.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I build web products that connect thoughtful interfaces with
                dependable backend systems. My work spans frontend development,
                API design, digital illustration, and delivery pipelines.
              </p>
              <p>
                I enjoy turning practical problems into working software and visual designs,
                learning unfamiliar tools, and building applications where product engineering,
                digital illustration, and AI intersect.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/ugochukwu-meshach-69b830285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-950"
                >
                  Connect on LinkedIn ↗
                </a>
                <a
                  href="https://github.com/ugobuez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-950"
                >
                  View source code ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 bg-violet-50/60 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Selected work</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 id="projects-title" className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
                Projects built to solve problems.
              </h2>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Explore selected applications, their technologies, and the
                problems they are designed to address.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.slug}
                  className="group flex h-full flex-col rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 font-semibold text-violet-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-violet-100 px-3 py-1 text-xs text-slate-500">
                      Selected project
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-violet-950">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{project.description}</p>

                  <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <li key={technology} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-800">
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-4 border-t border-violet-100 pt-5 text-sm font-semibold">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-700 hover:text-violet-950"
                    >
                      View live project ↗
                    </a>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-violet-800"
                      >
                        Source code ↗
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* ART & ILLUSTRATION SHOWCASE (MATCHES PEARL-WHITE SYSTEM)     */}
        {/* ============================================================= */}
        <section id="art-portfolio" aria-labelledby="art-title" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Visual Portfolio</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 id="art-title" className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
                Digital Illustration & Concept Art
              </h2>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Demonstrating character identity consistency, lighting, anatomical proportion, and style variation across visual themes.
              </p>
            </div>

            <div className="mt-10 space-y-12">

              {/* CARD 1: CHARACTER TURNAROUND SHEET */}
              <article className="group flex flex-col gap-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 lg:flex-row lg:p-8">
                <div className="w-full overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 via-fuchsia-50/30 to-sky-50/50 p-4 lg:w-3/5">
                  <svg viewBox="0 0 800 450" className="w-full h-auto rounded-xl shadow-inner bg-white">
                    <defs>
                      <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="steamGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#b45309" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>

                    {/* Panel 1: Clean Vector / Cartoon */}
                    <g transform="translate(10, 10)">
                      <rect width="250" height="430" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                      <text x="125" y="38" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#64748b">STYLE 01: VECTOR / CARTOON</text>
                      
                      {/* Character Silhouette & Features */}
                      <circle cx="125" cy="110" r="42" fill="#f1f5f9" stroke="#8b5cf6" strokeWidth="3" />
                      <path d="M95 105 Q125 70 155 105 Q145 75 125 75 Q105 75 95 105 Z" fill="#8b5cf6" />
                      <circle cx="110" cy="110" r="5" fill="#1e293b" />
                      <circle cx="140" cy="110" r="5" fill="#1e293b" />
                      <path d="M112 128 Q125 140 138 128" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Torso / Outfit */}
                      <path d="M85 160 L165 160 L180 320 L70 320 Z" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="3" />
                      <path d="M100 160 L150 160 L140 250 L110 250 Z" fill="#ec4899" opacity="0.25" />
                      
                      {/* Legs */}
                      <rect x="90" y="320" width="28" height="90" rx="10" fill="#1e293b" />
                      <rect x="132" y="320" width="28" height="90" rx="10" fill="#1e293b" />
                    </g>

                    {/* Panel 2: Cyberpunk Sci-Fi */}
                    <g transform="translate(275, 10)">
                      <rect width="250" height="430" rx="16" fill="#090d16" stroke="#8b5cf6" strokeWidth="2" />
                      <text x="125" y="38" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#38bdf8">STYLE 02: CYBERPUNK</text>
                      
                      {/* Cyber Visor & Head */}
                      <circle cx="125" cy="110" r="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                      <rect x="95" y="100" width="60" height="16" rx="8" fill="url(#neonGlow)" />
                      <path d="M95 105 Q125 70 155 105 Q145 75 125 75 Q105 75 95 105 Z" fill="#ec4899" />
                      
                      {/* Cyber Armor & Neon Circuits */}
                      <path d="M85 160 L165 160 L180 320 L70 320 Z" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
                      <line x1="125" y1="160" x2="125" y2="300" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" />
                      <line x1="85" y1="200" x2="165" y2="200" stroke="#ec4899" strokeWidth="2" />

                      {/* Legs with LED strips */}
                      <rect x="90" y="320" width="28" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                      <rect x="132" y="320" width="28" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                    </g>

                    {/* Panel 3: Steampunk Vintage */}
                    <g transform="translate(540, 10)">
                      <rect width="250" height="430" rx="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                      <text x="125" y="38" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#92400e">STYLE 03: STEAMPUNK</text>
                      
                      {/* Brass Goggles & Leather Cap */}
                      <circle cx="125" cy="110" r="42" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
                      <circle cx="108" cy="108" r="14" fill="#78350f" stroke="#d97706" strokeWidth="3" />
                      <circle cx="142" cy="108" r="14" fill="#78350f" stroke="#d97706" strokeWidth="3" />
                      <line x1="122" y1="108" x2="128" y2="108" stroke="#d97706" strokeWidth="4" />
                      
                      {/* Leather Vest & Brass Gears */}
                      <path d="M85 160 L165 160 L180 320 L70 320 Z" fill="#78350f" opacity="0.8" stroke="#451a03" strokeWidth="2" />
                      <circle cx="125" cy="220" r="20" fill="none" stroke="#d97706" strokeWidth="4" strokeDasharray="8 4" />
                      <circle cx="125" cy="220" r="8" fill="#d97706" />

                      {/* Trousers */}
                      <rect x="90" y="320" width="28" height="90" rx="10" fill="#451a03" />
                      <rect x="132" y="320" width="28" height="90" rx="10" fill="#451a03" />
                    </g>
                  </svg>
                </div>

                <div className="flex flex-1 flex-col justify-center space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800">
                    Character Design & Consistency
                  </div>
                  <h3 className="text-2xl font-bold text-violet-950">
                    Character Identity & Multi-Style Turnaround
                  </h3>
                  <p className="leading-7 text-slate-600">
                    Demonstration of character identity preservation across three distinct aesthetic styles—Vector Cartoon, Cyberpunk, and Vintage Steampunk—maintaining strict proportions, facial structure, and pose alignment.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-4 text-xs text-slate-700">
                    <div><strong>Subject:</strong> Hero Character Sheet</div>
                    <div><strong>Lighting:</strong> Dual Rim & Accent Light</div>
                    <div><strong>Composition:</strong> 3-Panel Turnaround</div>
                    <div><strong>Tools:</strong> Photoshop, Illustrator</div>
                  </div>
                </div>
              </article>

              {/* CARD 2: SURREAL STEAMPUNK CONCEPT ART */}
              <article className="group flex flex-col gap-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 lg:flex-row lg:p-8">
                <div className="w-full overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-yellow-50/50 p-4 lg:w-3/5">
                  <svg viewBox="0 0 640 400" className="w-full h-auto rounded-xl shadow-inner bg-amber-950/90">
                    <defs>
                      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Atmospheric Sky */}
                    <rect width="640" height="400" fill="#451a03" />
                    <circle cx="320" cy="180" r="160" fill="url(#sunGlow)" />

                    {/* Mechanical Clockwork Wings */}
                    <g stroke="#d97706" strokeWidth="3" fill="none">
                      {/* Left Wing */}
                      <path d="M320 200 C240 100, 120 120, 40 220 C120 230, 220 250, 320 220" fill="#b45309" opacity="0.6" />
                      <line x1="320" y1="200" x2="80" y2="150" stroke="#fef08a" strokeWidth="2" />
                      <line x1="320" y1="200" x2="120" y2="240" stroke="#fef08a" strokeWidth="2" />

                      {/* Right Wing */}
                      <path d="M320 200 C400 100, 520 120, 600 220 C520 230, 420 250, 320 220" fill="#b45309" opacity="0.6" />
                      <line x1="320" y1="200" x2="560" y2="150" stroke="#fef08a" strokeWidth="2" />
                      <line x1="320" y1="200" x2="520" y2="240" stroke="#fef08a" strokeWidth="2" />
                    </g>

                    {/* Floating Gear Island */}
                    <circle cx="320" cy="350" r="120" fill="#78350f" stroke="#d97706" strokeWidth="6" strokeDasharray="24 12" />
                    <circle cx="320" cy="350" r="90" fill="#451a03" stroke="#fde68a" strokeWidth="2" />

                    {/* Central Inventor Figure */}
                    <circle cx="320" cy="180" r="20" fill="#fef08a" />
                    <path d="M305 200 L335 200 L345 280 L295 280 Z" fill="#d97706" />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col justify-center space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    World Building & Concept Art
                  </div>
                  <h3 className="text-2xl font-bold text-violet-950">
                    Surreal Steampunk Inventor Concept
                  </h3>
                  <p className="leading-7 text-slate-600">
                    A surreal concept exploration combining mechanical brass wings, clockwork gear islands, and warm volumetric sunlight to demonstrate atmospheric perspective and world-building capabilities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-4 text-xs text-slate-700">
                    <div><strong>Subject:</strong> Aviator & Clockwork Wings</div>
                    <div><strong>Lighting:</strong> Volumetric Warm Sunlight</div>
                    <div><strong>Composition:</strong> Centered Low-Angle</div>
                    <div><strong>Tools:</strong> Procreate, Clip Studio Paint</div>
                  </div>
                </div>
              </article>

              {/* CARD 3: GLITCH & CYBERPUNK DIGITAL SKETCH */}
              <article className="group flex flex-col gap-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 lg:flex-row lg:p-8">
                <div className="w-full overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-fuchsia-50/50 via-purple-50/30 to-sky-50/50 p-4 lg:w-3/5">
                  <svg viewBox="0 0 500 400" className="w-full h-auto rounded-xl shadow-inner bg-slate-950">
                    {/* Chromatic Aberration RGB Layers */}
                    {/* Cyan Shift Layer */}
                    <g transform="translate(-6, 0)" opacity="0.7">
                      <circle cx="250" cy="160" r="70" stroke="#06b6d4" strokeWidth="3" fill="none" />
                      <path d="M190 270 Q250 200 310 270" stroke="#06b6d4" strokeWidth="4" fill="none" />
                    </g>
                    {/* Magenta Shift Layer */}
                    <g transform="translate(6, 0)" opacity="0.7">
                      <circle cx="250" cy="160" r="70" stroke="#ec4899" strokeWidth="3" fill="none" />
                      <path d="M190 270 Q250 200 310 270" stroke="#ec4899" strokeWidth="4" fill="none" />
                    </g>
                    {/* Primary White Sketch Layer */}
                    <g>
                      <circle cx="250" cy="160" r="70" stroke="#ffffff" strokeWidth="3" fill="#090d16" />
                      <ellipse cx="225" cy="150" rx="10" ry="6" fill="#38bdf8" />
                      <ellipse cx="275" cy="150" rx="10" ry="6" fill="#ec4899" />
                      <path d="M210 200 Q250 225 290 200" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <path d="M180 280 L320 280 L340 370 L160 370 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                    </g>
                    {/* Digital Glitch Slices */}
                    <rect x="120" y="120" width="260" height="8" fill="#38bdf8" opacity="0.6" />
                    <rect x="160" y="190" width="180" height="6" fill="#ec4899" opacity="0.6" />
                    <rect x="200" y="250" width="220" height="5" fill="#a855f7" opacity="0.5" />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col justify-center space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-800">
                    Digital Sketch & Glitch Effects
                  </div>
                  <h3 className="text-2xl font-bold text-violet-950">
                    Glitch & Cyberpunk Portrait Study
                  </h3>
                  <p className="leading-7 text-slate-600">
                    A digital portrait character study exploring chromatic aberration, RGB displacement layers, and digital glitch artifacts while maintaining clear underlying facial anatomy.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-4 text-xs text-slate-700">
                    <div><strong>Subject:</strong> Cybernetic Portrait</div>
                    <div><strong>Lighting:</strong> Magenta & Cyan LED Glow</div>
                    <div><strong>Composition:</strong> Dynamic Headshot</div>
                    <div><strong>Tools:</strong> Photoshop, After Effects</div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Technical toolkit</p>
          <h2 id="skills-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Tools I use to build and ship.
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill.title} className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-violet-950">{skill.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 border-y border-violet-100 bg-gradient-to-br from-white via-violet-50/60 to-sky-50/50 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Experience & learning</p>
            <h2 id="experience-title" className="mt-3 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
              Building experience through practice.
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8">
                <p className="text-sm font-medium text-violet-600">May 2025 – October 2025</p>
                <h3 className="mt-3 text-xl font-semibold text-violet-950">Intermediate Software Developer Intern</h3>
                <p className="mt-1 text-slate-600">Pluralcode Academy / Sage Institute</p>
                <p className="mt-4 leading-7 text-slate-600">
                  Contributed to the Sage LMS platform, working across web
                  interfaces, APIs, deployment workflows, monitoring,
                  documentation, and collaborative software delivery.
                </p>
              </article>

              <article className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8">
                <p className="text-sm font-medium text-violet-600">April 2026</p>
                <h3 className="mt-3 text-xl font-semibold text-violet-950">AWS Certified Generative AI Developer – Professional</h3>
                <p className="mt-1 text-slate-600">Certification</p>
                <p className="mt-4 leading-7 text-slate-600">
                  Professional-level certification focused on generative AI
                  development on AWS. Add a verification link here when the
                  public credential URL is available.
                </p>
              </article>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Additional project details, education, and career history can be
              expanded in a dedicated HTML resume page.
            </p>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-800 via-violet-700 to-fuchsia-700 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/15" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Let&apos;s connect</p>
              <h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Have a problem worth solving?
              </h2>
              <p className="mt-5 leading-8 text-violet-100">
                I&apos;m open to conversations about software engineering roles,
                remote opportunities, collaborations, digital illustration, and practical products
                that need thoughtful engineering.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ugochukwumeshach5@gmail.com?subject=Software%20Engineering%20%26%20Illustration%20Opportunity"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-violet-900 transition hover:bg-violet-50"
                >
                  Email me
                </a>
                <a
                  href="https://linkedin.com/in/ugochukwu-meshach-69b830285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-violet-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ugochukwu Meshach. Built with care.</p>
          <div className="flex gap-5">
            <a className="hover:text-violet-700" href="https://github.com/ugobuez" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-violet-700" href="https://linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-violet-700" href="mailto:ugochukwumeshach5@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}