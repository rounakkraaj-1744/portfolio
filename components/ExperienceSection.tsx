"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const experiences = [
    {
      company: "Torqly Horizons",
      role: "Backend & Cloud Engineer",
      period: "November 2024 — Present",
      status: "WORKING",
      statusColor: "text-green-400",
      items: [
        { tag: "PROBLEM", type: "problem", text: "Payment webhook race conditions detected." },
        { tag: "ANALYSIS", type: "solution", text: "Inconsistent order status during high-volume webhook event changing." },
        { tag: "RECOVERY", type: "impact", text: "Implemented idempotency keys in Redis over CTS locks to eliminate lock contention." },
        { tag: "RESULT", type: "result", text: "0% duplicate orders detected. System reliability restored." },
      ],
    },
    {
      company: "Deladdo Food Products",
      role: "SDE Intern",
      period: "August 2024 — November 2024",
      status: "RESOLVED",
      statusColor: "text-yellow-400",
      items: [
        { tag: "TASK", type: "solution", text: "Implemented deployment pipelines for real-time data pipelines." },
        { tag: "ACTIONS", type: "solution", text: "Migrated to GitHub Actions (CI/CD), centralized features schema for functions." },
        { tag: "RESULT", type: "result", text: "Deployment time reduced to 30%. Real-time error latency eliminated." },
      ],
    },
    {
      company: "Strmly Technologies",
      role: "Software Engineer Intern",
      period: "Feb 2024 — Jul 2024",
      status: "RESOLVED",
      statusColor: "text-yellow-400",
      items: [
        { tag: "CONTEXT", type: "problem", text: "Video streaming platform serving 1,000+ RPS experiencing load latency." },
        { tag: "ACTIONS", type: "solution", text: "Implemented caching layer with Redis. Offloaded static assets to AWS S3." },
        { tag: "RESULT", type: "result", text: "Video load times reduced by 67%. Backend load dropped by ~30%." },
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-section flex items-center gap-3">
            <span className="section-number">01.</span>
            Production Incident Logs
          </h2>
          <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
            {`{view: → sequential_timeline}`}
          </span>
        </div>

        {/* Experience Entries */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="log-entry">
              {/* Log Header */}
              <div className="log-entry-header">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-sm font-semibold text-foreground font-mono">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">|</span>
                  <span className="text-xs text-muted-foreground font-mono">{exp.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground font-mono hidden sm:inline">{exp.period}</span>
                  <span className="tag-status">{`STATUS: ${exp.status}`}</span>
                </div>
              </div>

              {/* Log Body */}
              <div className="log-entry-body">
                {exp.items.map((item, i) => (
                  <div key={i} className="log-item">
                    <span className={`tag tag-${item.type} flex-shrink-0`}>
                      {item.tag}:
                    </span>
                    <span className="log-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
