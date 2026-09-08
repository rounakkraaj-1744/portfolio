import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Calendar, Mail } from "lucide-react"
import { getMediumArticles } from "@/lib/medium"
import { personalInfo, CALENDLY_URL } from "@/lib/constants"

export default async function WritingAndAboutSection() {
  const mediumArticles = await getMediumArticles(3)

  return (
    <section id="writing" className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">

          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-mono text-gray-400 font-semibold">04</span>
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                    Writing on Medium
                  </h2>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Technical deep-dives, architectural lessons, and notes on systems.
                </p>
              </div>

              <Link href="https://rounakkraajsabat.medium.com" target="_blank" rel="noreferrer" className="group btn-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 shrink-0 self-start sm:self-auto">
                View all articles 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {mediumArticles.map((art) => (
                <Link key={art.title} href={art.url} target="_blank" rel="noreferrer" className="group bg-white rounded-2xl p-4 min-h-[96px] border border-[#E7E5DE] hover:border-[#D5D3CC] hover:shadow-sm flex items-center gap-4 transition-all duration-200 ease-out hover:-translate-y-0.5" >
                  <div className="relative w-28 h-16 shrink-0 rounded-xl overflow-hidden bg-[#111319] border border-black/5">
                    <Image src={art.thumbnail} alt={art.title} fill className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-[#111111] tracking-tight group-hover:text-black transition-colors line-clamp-1">
                      {art.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5 line-clamp-1 font-normal">
                      {art.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-gray-400 font-mono">
                        {art.date}{art.date && art.readTime ? " · " : ""}{art.readTime}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 transition-all duration-200 ease-out group-hover:text-black group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-2">
            <div id="about" className="scroll-mt-24">
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-xs font-mono text-gray-400 font-semibold">05</span>
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                  About
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-2 font-normal">
                I&apos;m a backend and systems engineer focused on distributed architectures, real-time data pipelines, and cloud infrastructure. I care deeply about latency, fault tolerance, and writing software that stays reliable under real-world production traffic.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#E7E5DE]">
                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span>Distributed Systems</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span>Real-Time Pipelines</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span>Cloud Infrastructure</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span>High-Concurrency APIs</span>
                </div>
              </div>

              <div className="mt-5">
                <Link href="#contact" className="group btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-colors duration-200 shadow-xs">
                  Get in touch 
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="border-t border-[#E7E5DE]" />

            <div id="contact" className="scroll-mt-24">
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-xs font-mono text-gray-400 font-semibold">06</span>
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                  Let&apos;s Work Together
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-2 font-normal">
                Have an interesting systems challenge, high-scale engineering role, or collaboration in mind? I&apos;m always open to discussing new opportunities.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <Link href={personalInfo.calendlyUrl || CALENDLY_URL} target="_blank" rel="noreferrer" className="group btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-colors duration-200 shadow-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a 15-min chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link href={`mailto:${personalInfo.email}`} className="group btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email me</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}