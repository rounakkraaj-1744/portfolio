"use client"

import Section from "./Section"
import { experiences } from "@/lib/constants"

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100/50 hover-lift">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#111]">
                  {exp.role}
                </h3>
                <p className="text-blue-600 font-medium text-sm mt-1">
                  {exp.company}
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                  {exp.period}
                </span>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              {exp.items.map((item, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}