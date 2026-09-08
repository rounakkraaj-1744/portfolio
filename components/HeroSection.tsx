"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const PHRASES = [
  "BACKEND ENGINEERING",
  "DISTRIBUTED SYSTEMS",
  "REAL-TIME SYSTEMS",
  "CLOUD INFRASTRUCTURE",
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(PHRASES[phraseIndex])
      const timer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length)
      }, 3000)
      return () => clearTimeout(timer)
    }

    const currentPhrase = PHRASES[phraseIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1))
        }, 60)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1400)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length - 1))
        }, 35)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length)
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, prefersReducedMotion])

  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            
            <p className="text-[11px] font-bold text-gray-500 tracking-[0.16em] uppercase font-mono mb-4">
              BACKEND / DISTRIBUTED SYSTEMS / CLOUD
            </p>

            {/* 1. Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-tight font-serif mb-5">
              I build<br />
              backend systems<br />
              that survive<br />
              production.
            </h1>

            <p className="text-base sm:text-[17px] text-gray-600 leading-relaxed max-w-[500px] mb-8 font-normal">
              Distributed systems, real-time data pipelines, high-concurrency APIs, and cloud infrastructure built for reliability and scale.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-10 sm:mb-12">
              <Link 
                href="#work" 
                className="group btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-200 active:translate-y-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
              
              <Link href="/resume" className="group btn-secondary inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-200 active:translate-y-0 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" >
                <span>View CV</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="pt-6 border-t border-[#E7E5DE] w-full">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 min-h-[36px]">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span className="text-[11px] font-bold text-gray-500 font-mono uppercase tracking-wider">
                    FOCUS AREA:
                  </span>
                </div>

                <div 
                  className="inline-flex items-center font-mono text-xs sm:text-[13px] font-semibold text-[#111111] tracking-wider uppercase"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span className="sr-only">Focus area: {PHRASES[phraseIndex]}</span>
                  <span aria-hidden="true" className="inline-block min-w-[210px] sm:min-w-[245px]">
                    {text}
                    {!prefersReducedMotion && (
                      <span className="inline-block w-[2px] h-[1.15em] bg-[#111111] ml-1 align-middle animate-pulse" />
                    )}
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] aspect-[4/4.9] rounded-[28px] overflow-hidden shadow-lg border border-black/5 bg-[#2B3542] group">
              <Image 
                src="/myimage.png" 
                alt="Rounakk - Building scalable backend systems" 
                fill 
                priority 
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}