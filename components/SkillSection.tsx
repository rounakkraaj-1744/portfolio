"use client"

import Section from "./Section"
import { skillColumns } from "@/lib/constants"

export default function Skills() {
  return (
    <Section id="skills" title="Stack">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillColumns.map((col, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover-lift">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              {col.header}
            </h3>
            <div className="flex flex-wrap gap-2">
              {col.items.map((item, j) => (
                <span key={j} className="inline-flex items-center justify-center rounded-md bg-gray-100/80 text-gray-700 text-xs font-semibold px-2.5 py-1.5">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}