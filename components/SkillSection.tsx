import React from "react"

const techs = [
  {
    name: "Node.js",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.8l-6.7-3.9V8.1L12 4.2l6.7 3.9v7.8z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <span className="w-4 h-4 bg-black text-white text-[9px] font-bold rounded-xs flex items-center justify-center font-mono">
        TS
      </span>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.4 6.6L12 2.3 4.6 6.6 2 8.1l10 5.8 10-5.8-2.6-1.5zM2 15.9l10 5.8 10-5.8-2.6-1.5-7.4 4.3-7.4-4.3L2 15.9zm0-3.9l10 5.8 10-5.8-2.6-1.5-7.4 4.3-7.4-4.3L2 12z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 10.45h2.12V8.33h-2.12v2.12zm-3.03 0h2.12V8.33h-2.12v2.12zm-3.04 0h2.12V8.33H7.91v2.12zm9.07-3.03h2.12V5.3h-2.12v2.12zm-3.03 0h2.12V5.3h-2.12v2.12zm-3.04 0h2.12V5.3h-2.12v2.12zm-3.03 0h2.12V5.3H7.91v2.12zm13.79 4.32c-.44-.29-1.42-.39-2.2-.18-.15-.84-.66-1.57-1.39-2.02l-.52-.32-.37.48c-.5.66-.69 1.5-.54 2.31-.77.44-2.17.47-2.64.47H2.5v.72c0 3.86 3.14 7 7 7 4.96 0 9.17-3.4 9.94-8.15.54-.04 1.77-.28 2.23-1.07l.22-.38-.4-.36z"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2zm0 2.3l6.5 3.8v7.8L12 19.7l-6.5-3.8V8.1L12 4.3zm0 3.7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <span className="text-[10px] font-extrabold tracking-tighter text-[#111] font-mono">
        aws
      </span>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <span className="w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center font-sans">
        N
      </span>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <span className="text-[10px] font-bold tracking-tight text-[#111] font-mono">
        EX
      </span>
    ),
  },
]

export default function TechStrip() {
  return (
    <div className="w-full border-y border-[#E7E5DE] dark:border-[#30343D] py-3.5 bg-[#F7F5F0] dark:bg-[#111318]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
          <div className="flex items-center shrink-0">
            <span className="text-[10px] font-bold text-gray-500 font-mono tracking-widest uppercase">
              TECH I WORK WITH
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 text-[#111111] dark:text-[#F7F5F0] hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="text-gray-700 dark:text-gray-300 flex items-center">{tech.icon}</span>
                <span className="text-xs font-semibold tracking-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}