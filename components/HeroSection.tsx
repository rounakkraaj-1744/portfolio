"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

function InteractivePhoto() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    // Capture position relative to the container
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setIsHovered(true)
  }

  return (
    <div
      className="relative group w-full max-w-md cursor-crosshair"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-background">
        {/* Color Image (Base - Always there) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/myimage.jpg"
          alt="Rounakk Raaj"
          className="w-full h-auto object-cover relative z-0"
        />

        {/* Grayscale Overlay (Top - Wipes away) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          animate={{
            clipPath: isHovered
              ? `circle(0% at ${mousePos.x}px ${mousePos.y}px)`
              : `circle(150% at ${mousePos.x}px ${mousePos.y}px)`
          }}
          transition={{
            duration: 0.7,
            ease: "circOut"
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/myimage.jpg"
            alt="Rounakk Raaj Grayscale"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Subtle parallax for text
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-background"
    >
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex flex-col gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4">
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                AI Backend & <br />
                <span className="text-muted-foreground">Systems Engineer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Building scalable GenAI infrastructure, LLM workflows, agents, and distributed backend systems using NestJS, LangGraph, Rust, and vector search.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 hover-lift hover-glow">
              <Link href="#projects">
                <Code className="mr-2 h-4 w-4" />
                View AI Projects
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover-lift">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-6 mt-2 items-center"
          >
            {/* Social Links with standard minimal icons */}
            <Link href="https://github.com/rounakkraaj-1744" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rounakk-raaj-745rrs/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:rounakkraaj707@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>

        {/* Right side - Abstract architectural visualization or code snippet instead of image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center items-center relative"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10" />

          {/* User Photo with Interactive Reveal */}
          <InteractivePhoto />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}