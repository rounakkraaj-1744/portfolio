"use client"

import Link from "next/link"
import { LineChart, MapPin, Code2 } from "lucide-react"
import Section from "./Section"
import { projects } from "@/lib/constants"
import { Project } from "@/lib/types"

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {projects[2] && (
        <div className="mt-6">
          <ProjectCard project={projects[2]} index={2} />
        </div>
      )}
    </Section>
  )
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  // Select an icon based on the index to mimic the screenshot
  const Icon = index === 0 ? LineChart : (index === 1 ? Code2 : MapPin)
  const iconColorClass = index === 0 ? "text-blue-400" : (index === 1 ? "text-blue-400" : "text-purple-400")

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover-lift flex flex-col h-full">
      {/* Top Graphic Area */}
      <div className="w-full h-48 sm:h-56 bg-[#F8F9FA] flex items-center justify-center border-b border-gray-100 pt-4 px-4 pb-0">
         <div className="bg-white/50 w-full h-full rounded-t-lg flex items-center justify-center border-x border-t border-gray-200/50 shadow-sm relative overflow-hidden">
            <Icon className={`w-12 h-12 ${iconColorClass} opacity-80`} strokeWidth={1.5} />
         </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#111] mb-3">
          {project.title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()}
        </h3>
        
        <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-md bg-[#111] text-white text-[11px] font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
