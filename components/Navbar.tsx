"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 font-sans",
      scrolled ? "bg-[#F4F3EF]/90 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
    )}>
      <div className="mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-20" style={{ maxWidth: "var(--max-container)" }}>

        {/* Logo */}
        <Link href="#home" className="text-xl font-bold tracking-tight text-[#111]">
          Rounakk
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200">
            Work
          </Link>
          <Link href="#skills" className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200">
            Resources
          </Link>
          <Link href="#experience" className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200">
            Chats
          </Link>
          <Link href="#articles" className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200">
            Writing
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="mailto:rounakkraaj707@gmail.com" className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111] text-white text-sm font-medium hover:bg-black transition-all hover-lift">
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600" aria-label="Toggle Menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F4F3EF] border-b border-gray-200 absolute w-full left-0 top-full">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link href="#projects" className="text-base font-medium text-gray-800" onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="#skills" className="text-base font-medium text-gray-800" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="#experience" className="text-base font-medium text-gray-800" onClick={() => setIsOpen(false)}>Chats</Link>
            <Link href="#articles" className="text-base font-medium text-gray-800" onClick={() => setIsOpen(false)}>Writing</Link>
            <Link href="mailto:rounakkraaj707@gmail.com" className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111] text-white text-sm font-medium w-max" onClick={() => setIsOpen(false)}>
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}