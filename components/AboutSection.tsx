"use client"

import Section from "./Section"

export default function About() {
  return (
    <Section id="education" number="05" title="Education & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </Section>
  )
}
