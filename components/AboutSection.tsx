"use client"

import { Trophy, Medal } from "lucide-react"

export default function About() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: "var(--max-container)" }}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Education Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#111] mb-8 relative inline-block">
              Education
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#111] mb-1">NIST University</h3>
              <p className="text-blue-600 font-medium text-sm mb-3">
                BTech in Computer Science and Engineering
              </p>
              <p className="text-gray-500 text-sm font-medium">
                2023 — 2027 <span className="mx-2">|</span> CGPA: 8.47
              </p>
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#111] mb-8 relative inline-block">
              Achievements
            </h2>
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                  <Trophy className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[#111] font-bold text-base mb-1">Finalist</h3>
                  <p className="text-gray-600 text-sm">
                    TechFiesta International Hackathon 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                  <Medal className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[#111] font-bold text-base mb-1">Finalist</h3>
                  <p className="text-gray-600 text-sm">
                    GDG HackFest Bhubaneswar 2026
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
