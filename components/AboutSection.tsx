"use client"

import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="education" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        {/* Section Header */}
        <h2 className="text-section flex items-center gap-3 mb-10">
          <span className="section-number">05.</span>
          Education & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-4">
              // Education
            </h3>
            <div className="case-study-card">
              <p className="text-sm font-semibold text-foreground font-mono">NIST University</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                B.Tech — Computer Science Engineering
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                2021 — 2025 &nbsp;|&nbsp; GPA: 8.471
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-4">
              // Achievements
            </h3>
            <div className="case-study-card space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-primary text-xs mt-0.5">→</span>
                <p className="text-xs text-foreground font-mono">
                  Finalist, TechXplorers Int&apos;l Hackathon 2024 (Top 5)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xs mt-0.5">→</span>
                <p className="text-xs text-foreground font-mono">
                  Finalist, SIH Hackathon Finalist 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
