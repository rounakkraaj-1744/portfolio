import Link from "next/link"
import { personalInfo } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A24] text-white pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: "var(--max-container)" }}>

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Let&apos;s build something<br />that scales.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium text-gray-400">
            <Link href={personalInfo.github} target="_blank" className="hover:text-white transition-colors">
              Github
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              Email
            </Link>
            <Link href="https://rounakkraajsabat.medium.com" target="_blank" className="hover:text-white transition-colors">
              Medium
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500 font-medium">
          <p className="text-lg font-bold text-white tracking-tight">Rounakk</p>
          <p>
            {personalInfo.name} © {new Date().getFullYear()} • Platform Engineer • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}