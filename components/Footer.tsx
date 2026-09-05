"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E7E5DE] py-10 bg-[#F7F5F0]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div>
            <h3 className="text-base font-bold text-[#111111] tracking-tight">
              Rounakk
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 font-normal">
              Building for a more reliable future.
            </p>
          </div>

          <div className="flex items-center gap-5 text-gray-700 dark:text-gray-300">
            <Link href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </Link>

            <Link href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </Link>

            <Link href="https://twitter.com/rounakkraaj" target="_blank" rel="noreferrer" className="social-link hover:text-black dark:hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link href={`mailto:${personalInfo.email}`} className="social-link hover:text-black dark:hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}