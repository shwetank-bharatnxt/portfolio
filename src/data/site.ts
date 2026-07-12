/**
 * ─── Single source of truth for all site content ────────────────────────────
 * Edit copy, links, and projects here — no component changes needed.
 *
 * TODO(Shwetank): confirm the GitHub / LinkedIn URLs below are correct.
 */

export const site = {
  name: "Shwetank Agarwal",
  role: "Software Development Engineer",
  company: "BharatNXT",
  location: "Mumbai, India",
  email: "shwetank2003@gmail.com",
  domain: "shwetankagarwal.com",
  photo: "/photo.png",
  resumeUrl: "/resume.pdf",

  socials: {
    github: "https://github.com/shwetank-bharatnxt", // TODO: confirm handle
    linkedin: "https://www.linkedin.com/in/shwetank-agarwal", // TODO: confirm handle
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "Open to interesting problems",
    eyebrow: "SDE-1 · BharatNXT · Fintech",
    headline: ["I build products", "that move money."],
    sub: "Payment rails in Spring Boot. Wallet services in Go. Frontends in Angular that people actually enjoy paying through. I ship fintech end-to-end — and I deploy it myself.",
    primaryCta: { label: "See the work", href: "#projects" },
    secondaryCta: { label: "Let's talk", href: "#contact" },
  },

  stats: [
    { value: "6+", label: "Payment & lending integrations shipped to production" },
    { value: "4", label: "Languages running in prod — Java, Go, Python, TypeScript" },
    { value: "1", label: "Full product frontend built solo, 0 → 1" },
    { value: "8.57", label: "CGPA · B.Tech CS (AI & ML), Amity University" },
  ],

  about: {
    heading: "Engineer first. Product-minded always.",
    paragraphs: [
      "Most engineers pick a lane — frontend or backend, build or deploy. I never saw the point. At BharatNXT I took a payments product from empty repo to production: the onboarding funnel, the dashboard, the bank verification APIs behind it, the RabbitMQ queues behind those, and the deployment pipeline that ships all of it.",
      "In my first year as an SDE I've written production code in four stacks — Spring Boot, Golang, FastAPI, and Angular — because the problem decides the tool, not the other way around. When a lender needed integrating, I learned their API. When invoices needed reading, I wired up OCR. When credit reports needed explaining, I built a Gemini-powered insights service.",
      "And here's the part that surprises people: my CS degree came with a minor in Animation. It's why my APIs are reliable and my UIs don't look like an API built them.",
    ],
    traits: [
      { title: "End-to-end ownership", desc: "From database schema to deploy — no handoffs, no gaps." },
      { title: "Fast on new ground", desc: "Four production stacks in year one. New tools are a Tuesday." },
      { title: "Fintech-grade rigor", desc: "Money doesn't forgive bugs. Neither do I." },
      { title: "Design sensibility", desc: "An Animation minor means the pixels get respect too." },
    ],
  },

  experience: {
    company: "BharatNXT",
    role: "Software Development Engineer 1",
    period: "Jan 2025 — Present",
    place: "Mumbai · On-site",
    intro:
      "BharatNXT helps Indian businesses pay and get paid with credit cards. I build across the whole stack — here's where I've left fingerprints:",
    stack: ["Spring Boot", "Angular", "Golang · Gin", "Python · FastAPI", "PostgreSQL", "RabbitMQ", "Docker"],
    tabs: [
      {
        key: "product",
        label: "Product · 0→1",
        points: [
          "Built the complete collector-facing frontend for BharatNXT Collect — a new product letting business owners collect payments via shareable links and QR codes, with credit card support.",
          "Designed the end-to-end onboarding funnel — landing → phone capture → OTP → bank details — responsive across desktop and mobile.",
          "Shipped the collector dashboard: collection summaries, a real-time transaction feed with settlement statuses, and one-tap actions for links, QR sharing, and buyer management.",
        ],
      },
      {
        key: "payments",
        label: "Payments & Lending",
        points: [
          "Engineered a CVV-less payment flow for credit card transactions — fewer fields, faster checkout, better conversion.",
          "Built lending integrations with Muthoot Finance and Fatak Pay, covering loan origination through disbursement.",
          "Implemented real-time bank account verification (Befisc) and UPI address resolution — Phone-to-VPA and VPA validation via gridlines APIs.",
          "Developed wallet load functionality in Golang supporting credit card and UPI payment methods.",
        ],
      },
      {
        key: "platform",
        label: "Platform & AI",
        points: [
          "Designed asynchronous workflows on RabbitMQ for reliable, decoupled inter-service communication.",
          "Built a credit insights microservice in FastAPI that turns raw credit reports into personalised insights using the Gemini API.",
          "Developed an MCP (Model Context Protocol) server in Golang and a client on the Gemini JS SDK for real-time, context-aware data exchange.",
          "Refactored the admin dashboard with OCR to auto-extract invoice data, plus a side-by-side review UI with approval workflows.",
        ],
      },
      {
        key: "ship",
        label: "Data & Deploys",
        points: [
          "Wrote the PostgreSQL analytics layer — API call volumes, payload analysis, and date-based usage trends for internal dashboards.",
          "Independently deploy Spring Boot, Golang, and Angular services to production — owning the full build-and-release lifecycle.",
        ],
      },
    ],
  },

  projects: {
    intro:
      "Work that shipped — to real users, real money, or real interviews.",
    items: [
      {
        title: "BharatNXT Collect",
        tag: "Flagship · In production",
        description:
          "A payments collection product built 0 → 1. I built the entire collector-facing frontend solo: a conversion-optimised onboarding funnel, a live dashboard with settlement tracking, and payment-link + QR sharing flows businesses use to get paid every day.",
        tech: ["Angular", "TypeScript", "REST APIs", "Responsive UI"],
        accent: "from-[#8b7cff] to-[#34e0ff]",
        featured: true,
      },
      {
        title: "Interview AI",
        tag: "AI · Side project",
        description:
          "An AI interview coach that talks back. Realistic mock interviews powered by the Gemini API with text-to-speech, giving candidates practice and feedback that actually sounds human.",
        tech: ["Python", "Gemini API", "TTS", "NLP"],
        accent: "from-[#34e0ff] to-[#6ee7b7]",
        featured: false,
      },
      {
        title: "MCP Server & Client",
        tag: "Infra · AI tooling",
        description:
          "A Model Context Protocol server written in Golang with a Gemini JS SDK client — real-time, context-aware data exchange between LLMs and live systems, built before MCP was cool.",
        tech: ["Golang", "MCP", "Gemini JS SDK"],
        accent: "from-[#ff6ec7] to-[#8b7cff]",
        featured: false,
      },
      {
        title: "Alumni Directorate Platform",
        tag: "Full-stack · MERN",
        description:
          "A complete alumni network: registration, profiles, networking, and an admin dashboard for user and event management — the whole MERN stack, wired end-to-end.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        accent: "from-[#fbbf24] to-[#ff6ec7]",
        featured: false,
      },
    ],
  },

  skills: {
    heading: "The toolkit",
    sub: "Picked up by shipping, not by watching tutorials.",
    rows: [
      ["Java", "Spring Boot", "Golang", "Gin", "Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Docker", "REST APIs"],
      ["TypeScript", "Angular", "React", "Node.js", "Express", "MongoDB", "HTML/CSS", "Git", "MCP", "Gemini API"],
    ],
    groups: [
      { title: "Backend", items: ["Java · Spring Boot", "Golang · Gin", "Python · FastAPI", "Node.js · Express"] },
      { title: "Frontend", items: ["Angular", "React", "TypeScript", "Responsive design"] },
      { title: "Data & Infra", items: ["PostgreSQL", "MongoDB", "RabbitMQ", "Docker", "Production deploys"] },
      { title: "AI & Emerging", items: ["Gemini API", "MCP servers", "NLP", "OCR pipelines"] },
    ],
  },

  achievements: [
    { icon: "🥇", title: "1st Rank — CodeChef Contest", desc: "Competitive programming, against the clock and everyone else." },
    { icon: "🏆", title: "1st — Code Combat Hackathon", desc: "Won solo, as an individual participant against teams." },
    { icon: "💯", title: "100/100 in Mathematics — CBSE Nation Topper", desc: "Certified by CBSE for a perfect score in Class 10 boards." },
    { icon: "🎓", title: "School Topper — 98.4% in Class 12", desc: "Amity International School, Lucknow." },
  ],

  contact: {
    heading: "Let's build something worth shipping.",
    sub: "Whether it's a product that moves money, an AI tool that moves minds, or a role that moves my career — my inbox is open and I reply fast.",
    cta: "Say hello",
  },
} as const;

export type Site = typeof site;
