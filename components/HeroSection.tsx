"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            
            <p className="text-[11px] font-bold text-gray-500 tracking-[0.16em] uppercase font-mono mb-4">
              BACKEND / DISTRIBUTED SYSTEMS / CLOUD
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-tight font-serif mb-5">
              I build<br />
              backend systems<br />
              that survive<br />
              production.
            </h1>

            <p className="text-base sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px] mb-8 font-normal">
              Distributed systems, real-time data pipelines, high-concurrency APIs, and cloud infrastructure built for impact.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-12 sm:mb-14">
              <Link href="#work" className="theme-cta inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white dark:bg-[#F7F5F0] dark:text-[#111318] dark:hover:bg-white text-[13px] font-medium hover:bg-black transition-all shadow-xs">
                View my work <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D5D3CC] bg-white/60 text-[#111111] text-[13px] font-medium hover:bg-white transition-all shadow-2xs">
                Download CV <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 pt-6 border-t border-[#E7E5DE] w-full">
              <div>
                <p className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight">
                  6M+
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500 font-normal mt-0.5 whitespace-nowrap">
                  API requests handled
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight">
                  1M+
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500 font-normal mt-0.5 whitespace-nowrap">
                  Data points / day
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight">
                  35%
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500 font-normal mt-0.5 whitespace-nowrap">
                  Faster deployments
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight">
                  &lt; 200ms
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500 font-normal mt-0.5 whitespace-nowrap">
                  Real-time latency
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] aspect-[4/4.9] rounded-[28px] overflow-hidden shadow-lg border border-black/5 bg-[#2B3542]">
              <Image src="/hero-mountain.png" alt="Rounakk - Building scalable systems" fill priority className="object-cover object-center"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}