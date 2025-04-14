"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const phrases = [
  "Full Stack Developer",
  "Problem Solver",
  "Systems Designer",
  "Low Latency Programmer",
  "Web3 and Blockchain developer",
]

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const backgroundRef = useRef<HTMLDivElement>(null)

  // Handle mouse movement for interactive background
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!backgroundRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = backgroundRef.current.getBoundingClientRect()

    const x = (clientX - left) / width
    const y = (clientY - top) / height

    backgroundRef.current.style.setProperty("--mouse-x", `${x}`)
    backgroundRef.current.style.setProperty("--mouse-y", `${y}`)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150
    const deletingSpeed = 50
    const pauseTime = 1500

    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setTypedText(currentPhrase.substring(0, typedText.length - 1))

          if (typedText.length === 0) {
            setIsDeleting(false)
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          }
        } else {
          setTypedText(currentPhrase.substring(0, typedText.length + 1))
          if (typedText.length === currentPhrase.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, pauseTime)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentPhraseIndex, isDeleting])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={backgroundRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/40 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-transparent via-primary/[0.03] to-transparent bg-[size:50px_50px] bg-[position:center] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div
          className={cn(
            "flex flex-col gap-6 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div>
            <div className="inline-block relative">
              <span className="absolute -left-3 -top-3 w-10 h-10 border-t-2 border-l-2 border-primary/60"></span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Rounakk</span> Raaj Sabat
              </h1>
              <span className="absolute -right-3 -bottom-3 w-10 h-10 border-b-2 border-r-2 border-primary/60"></span>
            </div>

            <div className="h-12 mt-6">
              <h2 className="text-xl md:text-2xl font-medium">
                I&apos;m a{" "}
                <span className="relative text-primary font-semibold">
                  {typedText}
                  <span
                    className={cn(
                      "absolute ml-1 top-0 h-full w-[2px] bg-primary",
                      typedText.length === phrases[currentPhraseIndex].length && !isDeleting ? "animate-blink" : "",
                    )}
                  ></span>
                </span>
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md text-lg">
              Turning complex problems into efficient, scalable solutions with a passion for creating impactful digital
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild size="lg" className="relative group overflow-hidden">
              <Link href="#contact">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 group-hover:animate-shimmer"></span>
                <span className="relative flex items-center gap-2">
                  Contact Me <Mail className="h-4 w-4 ml-1" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="#projects">
                <span className="relative flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  View Projects{" "}
                  <ArrowDown className="h-4 w-4 ml-1 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hidden sm:flex">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  Resume <Download className="h-4 w-4 ml-1" />
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex gap-4 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <Link href="https://www.linkedin.com/in/rounakk-raaj-745rrs/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "hidden md:flex justify-center items-center transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="relative w-[340px] h-[340px] group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 animate-slow-spin"></div>

            {/* Inner circle with image */}
            <div className="absolute inset-3 rounded-full bg-background flex items-center justify-center overflow-hidden shadow-xl">
              <div className="w-full h-full bg-muted flex items-center justify-center text-6xl relative group-hover:scale-105 transition-transform duration-500">
                <Image src="/myimage.jpg" alt="Rounakk Raaj Sabat" fill className="object-cover rounded-full" />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>

            {/* Decorative dots around the circle */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-primary/20 hover:bg-primary/10 transition-colors duration-300"
          asChild
        >
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}