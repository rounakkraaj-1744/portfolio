"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const projects = [
    {
      title: "NSE Stocks Arbitrage Bot",
      emoji: "📊",
      description: "Automated arbitrage trader for real-time stock exchange data extraction with high-frequency delta streaming.",
      items: [
        { tag: "BOTTLENECK", type: "problem", text: "Time-MI-tick batch limits." },
        { tag: "SOLUTION", type: "solution", text: "Custom event parser with O(1) sized-event flow control." },
      ],
      tags: ["TypeScript", "Socket.IO"],
      github: "https://github.com/rounakkraaj-1744",
    },
    {
      title: "Observability Platform",
      emoji: "📡",
      description: "Open-sourced monitoring dashboard for 50+ microservices with real-time trace-alerting.",
      items: [
        { tag: "BOTTLENECK", type: "problem", text: "Metric ingestor latency." },
        { tag: "SOLUTION", type: "solution", text: "Prometheus compaction strategy + Grafana dashboards." },
      ],
      tags: ["Kubernetes", "Prometheus"],
      github: "https://github.com/rounakkraaj-1744",
    },
    {
      title: "KiraLyze - AI Mining Platform",
      emoji: "⛏️",
      description: "AI-driven mining system for resource augmentation and predictable ranking using multi-agent workflows. Reduced recruiter screening effort by 50%.",
      items: [
        { tag: "CHALLENGE", type: "problem", text: "Stochastic models inadequate for large datasets." },
        { tag: "SOLUTION", type: "solution", text: "LLM-free NLP relevance models for sub-second LLT responses." },
        { tag: "RESULT", type: "result", text: "Implemented auto-correcting error catching for semantic queries." },
      ],
      tags: ["Python", "FastAPI", "NLP"],
      github: "https://github.com/rounakkraaj-1744",
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-section flex items-center gap-3">
            <span className="section-number">02.</span>
            Technical Case Studies
          </h2>
          <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
            {`{p_id: {compiled} | view: "tech_digest"}`}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Full-width third project */}
        {projects[2] && (
          <div className="mt-5">
            <ProjectCard project={projects[2]} />
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: {
  project: {
    title: string
    emoji: string
    description: string
    items: { tag: string; type: string; text: string }[]
    tags: string[]
    github: string
  }
}) {
  return (
    <div className="case-study-card hover-lift">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-card-title text-foreground font-mono flex items-center gap-2">
          <span>{project.emoji}</span>
          {project.title}
        </h3>
        <Link
          href={project.github}
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 flex-shrink-0"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Items */}
      <div className="space-y-2 mb-4">
        {project.items.map((item, i) => (
          <div key={i} className="log-item">
            <span className={`tag tag-${item.type} flex-shrink-0`}>
              {item.tag}:
            </span>
            <span className="text-xs text-foreground">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Tags + Link */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.github}
          target="_blank"
          className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1"
        >
          View Source →
        </Link>
      </div>
    </div>
  )
}
