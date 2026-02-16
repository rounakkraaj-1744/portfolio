"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-section mb-2">Get in Touch</h2>
            <p className="text-xs font-mono text-muted-foreground">
              Open for backend, platform, and infrastructure roles.
            </p>
          </div>
          <div className="flex items-center gap-5 font-mono text-xs">
            <Link
              href="mailto:rounakkraaj707@gmail.com"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/rounakkraaj-1744"
              target="_blank"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rounakk-raaj-745rrs/"
              target="_blank"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
