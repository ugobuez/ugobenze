import type { Metadata } from "next";
import { projects } from "../data/projects";

const siteUrl = "https://ugobenze.vercel.app";

export const metadata: Metadata = {
  title: "Ugochukwu Meshach | Full-Stack Software Developer",
  description:
    "Explore Ugochukwu Meshach's software engineering portfolio, including HirePilot, ELD Trip Planner, web applications, full-stack development, cloud deployment, and CI/CD.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Ugochukwu Meshach",
    "Full-Stack Developer",
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
    title: "Ugochukwu Meshach | Full-Stack Software Developer",
    description:
      "Software engineering portfolio featuring full-stack applications, AI integrations, deployment workflows, and technical projects.",
    siteName: "Ugochukwu Meshach Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Ugochukwu Meshach | Software Developer",
    description:
      "Full-stack development, AI integrations, cloud deployment, and software projects.",
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
  jobTitle: "Full-Stack Software Developer",
  description:
    "Software developer focused on full-stack applications, AI integrations, APIs, and deployment automation.",
  sameAs: [
    "https://linkedin.com/in/ugochukwu-meshach-69b830285",
    "https://github.com/ugobuez",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Python",
    "AWS",
    "Docker",
    "CI/CD",
    "AI Integration",
  ],
};

const skills = [
  {
    title: "Frontend",
    items: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap",
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
            UM<span className="text-violet-500">.</span>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-violet-950 sm:gap-6">
            <a className="transition hover:text-violet-600" href="#about">About</a>
            <a className="transition hover:text-violet-600" href="#projects">Projects</a>
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
                Open to software engineering opportunities
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-violet-950 sm:text-6xl lg:text-7xl">
                Building useful software,{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                  from idea to deployment.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                I&apos;m Ugochukwu Meshach, a full-stack software developer
                working across web applications, API development, AI-powered
                features, and reliable deployment workflows.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-violet-700 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
                >
                  Explore my projects
                </a>
                <a
                  href="https://github.com/ugobuez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-950 transition hover:border-violet-400 hover:bg-violet-50"
                >
                  GitHub profile ↗
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
                    <p className="text-sm text-slate-500">Developer profile</p>
                    <p className="mt-1 text-xl font-semibold text-violet-950">Ugochukwu Meshach</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-bold text-white shadow-lg shadow-violet-200">
                    UM
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  {[
                    ["01", "Build", "Accessible, responsive user experiences"],
                    ["02", "Integrate", "APIs, data, and AI-powered features"],
                    ["03", "Deliver", "Testing, automation, and deployment"],
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
                  <p className="mt-1 text-lg font-semibold">Full-stack engineering · Cloud · AI</p>
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
                Engineering with purpose.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I build web products that connect thoughtful interfaces with
                dependable backend systems. My work spans frontend development,
                API design, database-backed applications, and delivery pipelines.
              </p>
              <p>
                I enjoy turning practical problems into working software,
                learning unfamiliar tools, and improving how applications are
                tested, deployed, and maintained. I&apos;m particularly
                interested in opportunities where product engineering,
                automation, and AI intersect.
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
                remote opportunities, collaborations, and practical products
                that need thoughtful engineering.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ugochukwumeshach5@gmail.com?subject=Software%20Engineering%20Opportunity"
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

