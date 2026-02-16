"use client"

import Section from "./Section"
import { experiences } from "@/lib/constants"

export default function Experience() {
  return (
    <Section id="experience" number="01" title="Production Incident Logs"
      headerExtra={
        <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
          {`{view: → sequential_timeline}`}
        </span>
      }
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="log-entry">
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
    </Section>
  )
}