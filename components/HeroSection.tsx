"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { personalInfo } from "@/lib/constants"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="home" className="min-h-screen flex items-center section-padding" style={{ paddingTop: "var(--space-2xl)" }}>
      <div ref={ref} className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`} style={{ maxWidth: "var(--max-container)" }}>
        <div className="mb-6">
          <span className="tag-status font-mono text-[10px]">
            SYSTEM_STATUS: STABLE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-hero text-foreground mb-6">
              {personalInfo.role}{" "}
              <span className="text-muted-foreground">|</span> Scaling{" "}
              <span className="text-primary">100k+ RPS</span>{" "}
              <span className="text-muted-foreground">|</span> Distributed Systems Reliability
            </h1>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 font-mono" style={{ maxWidth: "480px" }}>
              Focusing on concurrency, idempotency, and high-availability failure recovery.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="stat-badge">
                  <span className="stat-label">{stat.label.toLowerCase()}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <Link href={personalInfo.github} target="_blank" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </Link>
              <Link href={personalInfo.linkedin} target="_blank" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </Link>
              <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </Link>
            </div>
          </div>

          <div className="terminal-block">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="text-[10px] text-muted-foreground ml-2 font-mono">~/system_stats</span>
            </div>
            <div className="terminal-body">
              <p><span className="comment"># distributed_stats</span></p>
              <p>&nbsp;</p>
              <p>→ OS: <span className="string">Linux 6.1.0-generic</span></p>
              <p>→ Kernel: <span className="string">LTS-5-generic</span></p>
              <p>→ Uptime: <span className="string">1 day, 5 months</span></p>
              <p>→ Shell: <span className="string">zsh 5.9</span></p>
              <p>→ Terminal: <span className="string">Alacritty, vs_host</span></p>
              <p>&nbsp;</p>
              <p>→ upstreams: <span className="string">NodeJS, Go, Rust</span></p>
              <p>→ infra: <span className="string">k8s, Terraform, AWS</span></p>
              <p>&nbsp;</p>
              <p><span className="prompt">$</span> <span className="keyword">tail</span> -f /var/log/production.log</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
