"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, FileText, Code, Zap} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const phrases = ["Full Stack Developer", "Problem Solver", "Systems Designer", "Low Latency Programmer"]

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setCurrentText(
          isDeleting
            ? currentPhrase.substring(0, currentText.length - 1)
            : currentPhrase.substring(0, currentText.length + 1),
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden cyberpunk-grid noise"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-primary/10 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-blue-500/5 animate-pulse-medium"></div>

        {/* Grid lines */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-primary/30 animate-float-medium"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 rounded-full bg-primary/20 animate-float-fast"></div>

      {/* Code symbols floating */}
      <div className="absolute top-1/4 right-1/3 text-primary/20 animate-float-slow text-xl">{"<>"}</div>
      <div className="absolute bottom-1/4 left-1/3 text-primary/20 animate-float-medium text-xl">{"{ }"}</div>
      <div className="absolute top-2/3 right-1/4 text-primary/20 animate-float-fast text-xl">{"( )"}</div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 text-5xl font-bold"
            >
              Hi, I&apos;m Rounakk Raaj Sabat
              <span
                className={`inline-block w-1 h-12 bg-primary ml-2 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
              ></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="h-12 mt-6 flex items-center"
            >
              <span className="text-xl md:text-2xl font-medium mr-2">I&apos;m a</span>
              <span className="text-xl md:text-2xl font-medium text-primary relative min-w-[300px]">
                {currentText}
                <span
                  className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                ></span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mt-6 text-muted-foreground max-w-md text-lg"
            >
              Turning complex problems into elegant, scalable solutions with a passion for creating impactful digital
              experiences that push technological boundaries.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link href="#contact">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-blue-500 group-hover:opacity-90 transition-opacity"></span>
                <span className="relative flex items-center">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Contact Me
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group relative overflow-hidden">
              <Link href="#projects">
                <span className="absolute inset-0 w-0 h-full bg-primary/20 group-hover:w-full transition-all duration-300"></span>
                <span className="relative flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                </span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group relative overflow-hidden">
              <Link href="#projects">
                <span className="absolute inset-0 w-0 h-full bg-primary/20 group-hover:w-full transition-all duration-300"></span>
                <span className="relative flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex gap-4 mt-2"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#333] hover:text-white transition-all group"
              asChild
            >
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#0077B5] hover:text-white transition-all group"
              asChild
            >
              <Link href="https://www.linkedin.com/in/rounakk-raaj-745rrs/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#EA4335] hover:text-white transition-all group"
              asChild
            >
              <Link href="mailto:rounakkraaj707@gmail.com">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 tilt perspective-1000">
            {/* Animated hexagon frame */}
            <div className="absolute inset-0 animate-rotate-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  className="animate-pulse-slow"
                />
              </svg>
            </div>

            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/10 animate-pulse-slow"></div>
            <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/5 animate-pulse-medium"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-tl from-primary/10 to-blue-500/5 animate-pulse-fast"></div>

            {/* Profile image */}
            <div className="absolute inset-9 rounded-full bg-background flex items-center justify-center overflow-hidden tilt-inner">
              <div className="w-full h-full bg-muted flex items-center justify-center text-9xl relative">
                <Image
                  src="/myimage.jpg"
                  alt="Rounakk Raaj Sabat"
                  fill
                  className="object-cover rounded-full"
                  style={{
                    filter: "contrast(1.1) brightness(1.1)",
                    boxShadow: "0 0 20px rgba(var(--primary), 0.5)",
                  }}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-float-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-blue-500/30 animate-float-medium"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.7 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
          asChild
        >
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
