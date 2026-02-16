"use client"

import Section from "./Section"
import { skillColumns } from "@/lib/constants"

export default function Skills() {
  return (
    <Section id="skills" number="03" title="Tech Stack Decisions"
      headerExtra={
        <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
          cat ./.env/stack/tech/tooling_base
        </span>
      }
    >
      <div className="overflow-x-auto border border-border rounded-md">
        <table className="tech-table">
          <thead>
            <tr>
              {skillColumns.map((col, i) => (
                <th key={i}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3].map((rowIndex) => (
              <tr key={rowIndex}>
                {skillColumns.map((col, colIndex) => {
                  const item = col.items[rowIndex]
                  return (
                    <td key={colIndex}>
                      {item ? (
                        <>
                          <span className="text-foreground">{item.name}</span>
                          <span className="tech-sub">{item.sub}</span>
                        </>
                      ) : null}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}