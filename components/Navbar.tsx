"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F5F0]/90 dark:bg-[#111318]/90 backdrop-blur-md border-b border-[#E7E5DE]/80 dark:border-[#30343D]/80 shadow-xs"
          : "bg-[#F7F5F0]/60 dark:bg-[#111318]/60 backdrop-blur-xs"
      }`}>
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#111111] dark:text-[#F7F5F0]">
          Rounakk
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="#work" className="text-[13px] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#experience" className="text-[13px] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="#writing" className="text-[13px] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
            Writing
          </Link>
          <Link href="#about" className="text-[13px] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setTheme(isDark ? "light" : "dark")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D5D3CC] text-[#111111] transition-colors hover:bg-white dark:border-[#3A3A3A] dark:text-[#F5F3EE] dark:hover:bg-[#252525]" aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} title={`Switch to ${isDark ? "light" : "dark"} theme`}>
            <span className="sr-only">Toggle theme</span>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="mailto:rounakkraaj707@gmail.com" className="theme-cta inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] text-white text-[13px] font-medium hover:bg-black dark:bg-[#F7F5F0] dark:text-[#111318] dark:hover:bg-white transition-all shadow-xs">
            Let&apos;s talk <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button onClick={() => setTheme(isDark ? "light" : "dark")} className="p-2 text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white" aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white" aria-label="Toggle Menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#F7F5F0] dark:bg-[#111318] border-b border-[#E7E5DE] dark:border-[#30343D] px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            <Link href="#work" className="text-sm font-medium text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <Link href="#experience" className="text-sm font-medium text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
            <Link href="#writing" className="text-sm font-medium text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>
              Writing
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="mailto:rounakkraaj707@gmail.com" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#111111] dark:bg-[#F7F5F0] dark:text-[#111318] text-white text-xs font-medium w-full mt-2" onClick={() => setIsOpen(false)}>
              Let&apos;s talk <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}