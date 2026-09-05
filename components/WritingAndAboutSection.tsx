"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const mediumArticles = [
  {
    title: "I Built a Self-Learning AI Agent",
    description:
      "How I built an adaptive agent that learns from feedback and improves over time.",
    image: "/article-agent.png",
    date: "Sep 2025",
    readTime: "5 min read",
    url: "https://rounakkraajsabat.medium.com",
  },
  {
    title: "Understanding Pub/Sub with Real-world Examples",
    description:
      "A practical guide to pub/sub systems with code examples and real-world use cases.",
    image: "/article-pubsub.png",
    date: "Sep 2025",
    readTime: "6 min read",
    url: "https://rounakkraajsabat.medium.com/understanding-asynchronous-communication-the-backbone-of-distributed-systems-89c6faeb89c4",
  },
  {
    title: "Lessons from Building Real-time Systems",
    description:
      "Key lessons I learned while building real-time infrastructure for production.",
    image: "/article-realtime.png",
    date: "Aug 2025",
    readTime: "4 min read",
    url: "https://rounakkraajsabat.medium.com",
  },
]

export default function WritingAndAboutSection() {
  return (
    <section id="writing" className="py-16 sm:py-20">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          <div className="lg:col-span-8 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-mono text-gray-400 font-semibold">04</span>
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                    Writing on Medium
                  </h2>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Technical articles, learnings, and thoughts on building systems.
                </p>
              </div>

              <Link href="https://rounakkraajsabat.medium.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D5D3CC] bg-white/60 text-[#111111] text-xs font-medium hover:bg-white transition-all shrink-0 self-start sm:self-auto">
                View all articles <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {mediumArticles.map((art) => (
                <Link key={art.title} href={art.url} target="_blank" rel="noreferrer" className="group bg-white rounded-2xl p-4 border border-[#E7E5DE] flex items-center gap-4 hover-lift">
                  <div className="relative w-28 h-16 shrink-0 rounded-xl overflow-hidden bg-[#111319] border border-black/5">
                    <Image src={art.image} alt={art.title} fill className="object-cover group-hover:scale-102 transition-transform duration-300" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-[#111111] tracking-tight group-hover:text-black line-clamp-1">
                      {art.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5 line-clamp-2 font-normal">
                      {art.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-gray-400 font-mono">
                        {art.date} · {art.readTime}
                      </span>
                      <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-2">
            <div id="about">
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-xs font-mono text-gray-400 font-semibold">05</span>
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                  About
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-2 font-normal">
                I&apos;m a backend engineer who enjoys building distributed systems, real-time data pipelines and cloud infrastructure. I like understanding how things work at scale and turning complex problems into reliable, simple systems.
              </p>
              <div className="mt-5">
                <Link href="mailto:rounakkraaj707@gmail.com" className="theme-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white dark:bg-[#F7F5F0] dark:text-[#111318] dark:hover:bg-white text-xs font-medium hover:bg-black transition-all shadow-xs">
                  More about me <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="border-t border-[#E7E5DE]" />

            <div>
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-xs font-mono text-gray-400 font-semibold">06</span>
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                  Let&apos;s Work Together
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-2 font-normal">
                Have an interesting problem or opportunity? I&apos;m always open to discussing new projects, roles, or just chatting about systems and infrastructure.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <Link href="mailto:rounakkraaj707@gmail.com" className="theme-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white dark:bg-[#F7F5F0] dark:text-[#111318] dark:hover:bg-white text-xs font-medium hover:bg-black transition-all shadow-xs">
                  Let&apos;s talk <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="mailto:rounakkraaj707@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5D3CC] bg-white/60 text-[#111111] text-xs font-medium hover:bg-white transition-all">
                  Email me
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}