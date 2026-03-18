"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { personalInfo } from "@/lib/constants"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // The scrolling text items from the screenshot
  const techMarquee = ["NODE", "AWS", "CASSANDRA", "POSTGRESQL", "REDIS", "RUST", "GCP", "DISTRIBUTED SYSTEMS"]

  return (
    <>
    <section id="home" className="pt-32 pb-16 flex items-center bg-[#F4F3EF]">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} 
        style={{ maxWidth: "var(--max-container)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-sm bg-blue-100/50 px-2 py-1 text-[10px] font-semibold text-blue-600 tracking-widest uppercase mb-6">
              PLATFORM ENGINEER
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#111] leading-[1.05] mb-6">
              Building Systems That Don't Break.
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-[480px]">
              Distributed systems reliability, high-concurrency APIs, and cloud-native infrastructure — scaling to 100k+ RPS.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#projects" className="px-6 py-3 bg-[#111] text-white text-sm font-medium rounded hover:bg-black transition-colors">
                View Projects
              </Link>
              <Link href="#" className="px-6 py-3 bg-white border border-gray-300 text-[#111] text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Download CV
              </Link>
            </div>
          </div>

          {/* Right Column - Image & Badges */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-gray-200">
                {/* Fallback pattern or real image */}
                <Image src="/myimage.jpg" alt={personalInfo.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>

              {/* Badges */}
              <div className="absolute top-10 -left-6 lg:left-0 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#111] leading-none">6+</span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">M requests</span>
                </div>
              </div>

              <div className="absolute bottom-10 -right-6 lg:right-4 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-xl">💼</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111] leading-none mb-1">1.5+ Years</span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Work Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Marquee */}
    <div className="w-full bg-[#111] py-4 overflow-hidden flex border-y border-white/10">
      <div className="whitespace-nowrap flex items-center animate-spin-slow" style={{ animation: "marquee 40s linear infinite" }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {techMarquee.map((tech, j) => (
              <div key={`${i}-${j}`} className="flex items-center">
                <span className="text-white text-sm font-bold tracking-widest px-8">
                  {tech}
                </span>
                <span className="text-gray-500 text-[10px]">►</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-33.33%); }
      }
    `}} />
    </>
  )
}
