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
              {"// Education"}
            </h3>
            <div className="case-study-card">
              <p className="text-sm font-semibold text-foreground font-mono">NIST University</p>
              <p className="text-[11px] text-muted-foreground mt-1 font-mono">
                Berhampur, Odisha
              </p>
              <p className="text-xs text-foreground mt-2 font-mono">
                BTech — Computer Science and Engineering
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground font-mono">
                  2023 — 2027
                </p>
                <p className="text-xs text-primary font-mono font-semibold">
                  CGPA: 8.47
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-4">
              {"// Achievements"}
            </h3>
            <div className="case-study-card space-y-4">
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-0.5">→</span>
                  <p className="text-xs text-foreground font-mono font-semibold">
                    Finalist, TechFiesta International Hackathon, 2025
                  </p>
                </div>
                <ul className="ml-5 mt-1.5 space-y-1">
                  <li className="text-[11px] text-muted-foreground font-mono">
                    • Top 100 / 600+ teams globally; Top 5 in grand finals among 60 finalists
                  </li>
                  <li className="text-[11px] text-muted-foreground font-mono">
                    • Led frontend development (React Native) for a healthcare app adopted by 150+ users
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-0.5">→</span>
                  <p className="text-xs text-foreground font-mono font-semibold">
                    Finalist, GDG HackFest Bhubaneswar, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
