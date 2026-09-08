"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Writing", href: "#writing" },
  { name: "About", href: "#about" },
]

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E7E5DE]/80 shadow-xs"
          : "bg-[#F7F5F0]/60 backdrop-blur-xs"
      }`}>
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          Rounakk
        </Link>

        {/* Desktop Navigation Links with subtle animated underline */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[13px] font-medium text-gray-600 hover:text-[#111111] transition-colors duration-180 py-1"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] rounded-full transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="#contact" 
            className="group btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Let&apos;s talk 
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-800 hover:text-black rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#111111]" 
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F7F5F0] border-b border-[#E7E5DE] px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="btn-primary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium w-full mt-2 transition-all duration-200" 
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s talk <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}