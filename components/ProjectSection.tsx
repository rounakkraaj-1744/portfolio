"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Section from "./Section"
import { projects } from "@/lib/constants"
import { Project } from "@/lib/types"

export default function Projects() {
  return (
    <Section id="projects" number="02" title="Technical Case Studies"
      headerExtra={
        <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
          {`{p_id: {compiled} | view: "tech_digest"}`}
        </span>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {projects[2] && (
        <div className="mt-5">
          <ProjectCard project={projects[2]} />
        </div>
      )}
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="case-study-card hover-lift">
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

      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>
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
