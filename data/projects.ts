export const projects = [
  {
    slug: "hirepilot",
    title: "HirePilot",
    description:
      "An AI-powered job matching dashboard that aggregates opportunities and scores job relevance.",
    liveUrl: "https://hire-pilot-job.vercel.app",
    repoUrl: "https://github.com/ugobuez/HirePilot",
    stack: ["React", "Node.js", "Express", "MongoDB", "LLM APIs"],
  },
  {
    slug: "eld-trip-planner",
    title: "ELD Trip Planner",
    description:
      "A trip-planning application built around commercial-driver Hours of Service rules and route planning.",
    liveUrl: "https://eld-trip-planner-mu.vercel.app",
    repoUrl: "https://github.com/ugobuez/Eld-trip-planner",
    stack: ["TypeScript", "Mapping", "Routing", "Docker", "CI/CD"],
  },
  {
    slug: "gadgetng",
    title: "GadgetNG",
    description:
      "An e-commerce project focused on comparing gadget offers and presenting product information.",
    liveUrl: "https://gadget-store-ebon.vercel.app",
    repoUrl: null,
    stack: ["React", "JavaScript", "E-commerce"],
  },
  {
    slug: "zutech",
    title: "Zutech",
    description:
      "A web project built with Next.js, with an emphasis on frontend performance.",
    liveUrl: "https://zutech.vercel.app",
    repoUrl: null,
    stack: ["Next.js", "React", "Web Performance"],
  },
] as const;
