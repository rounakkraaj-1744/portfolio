"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    tag: "01 / TRADING & FINTECH",
    title: "NSE Stocks Arbitrage Bot",
    description:
      "Automated arbitrage trading bot executing cross-exchange strategies using real-time market data, with 15% annualized returns in backtests.",
    image: "/project-nse.png",
    tags: ["TypeScript", "Next.js", "Express.js"],
    link: "https://github.com/rounakkraaj-1744",
    metrics: [
      { value: "1M+", label: "data points daily" },
      { value: "15%", label: "annualized returns" },
      { value: "<200ms", label: "latency" },
    ],
  },
  {
    tag: "02 / OBSERVABILITY & CLOUD",
    title: "Observability Platform",
    description:
      "Real-time observability dashboard and REST APIs for monitoring 50+ microservices, deployed with Docker, Kubernetes and ArgoCD.",
    image: "/cloudops.png",
    tags: ["TypeScript", "NestJS", "Kubernetes"],
    link: "https://github.com/rounakkraaj-1744",
    metrics: [
      { value: "50+", label: "services monitored" },
      { value: "40%", label: "faster delivery" },
      { value: "24/7", label: "visibility" },
    ],
  },
  {
    tag: "03 / SYSTEMS PROGRAMMING",
    title: "Memory Allocator in C",
    description:
      "Custom memory allocator using segregated free lists with coalescing and block splitting to reduce fragmentation and improve allocation efficiency.",
    image: "/project-nse.png",
    tags: ["C", "Makefile"],
    link: "https://github.com/rounakkraaj-1744",
    metrics: [
      { value: "C", label: "systems language" },
      { value: "Free lists", label: "allocation strategy" },
      { value: "Aligned", label: "memory blocks" },
    ],
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xs font-mono text-gray-400 font-semibold">01</span>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                Selected Work
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
              Real systems, real data, real impact.
            </p>
          </div>

          <Link 
            href="https://github.com/rounakkraaj-1744" 
            target="_blank" 
            rel="noreferrer" 
            className="group btn-secondary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 shrink-0 self-start sm:self-auto"
          >
            View all projects 
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-white rounded-2xl p-4 border border-[#E7E5DE] hover:border-[#D5D3CC] hover:shadow-sm transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] font-mono text-gray-400 mb-2.5 font-semibold tracking-wide">
                  {project.tag}
                </p>

                <div className="relative w-full aspect-[16/9.6] rounded-xl overflow-hidden bg-[#181C24] border border-black/5 mb-3.5">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>

                <h3 className="text-sm sm:text-[15px] font-bold text-[#111111] tracking-tight group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-1.5 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#F0EEE8]">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-sm font-bold text-[#111] tracking-tight">{m.value}</p>
                      <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded-md bg-[#F2F0E8] text-[#555] text-[10px] font-medium font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Link */}
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group/link inline-flex items-center gap-1.5 mt-3 text-[11px] font-semibold text-[#111111] hover:text-black transition-colors"
                >
                  <span>View project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
