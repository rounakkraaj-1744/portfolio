"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown, Code, FileText, Github, Linkedin, Mail, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"

const phrases = ["Full Stack Developer", "Problem Solver", "Systems Designer", "Low Latency Programmer", "Web3 and Blockchain developer"]

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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
        }
        else {
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
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">Hi, I&apos;m Rounakk Raaj Sabat</h1>
            <div className="h-12 mt-4">
              <h2 className="text-xl md:text-2xl font-medium text-primary">
                I&apos;m a{" "}
                <span className="relative">
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
            <p className="mt-4 text-muted-foreground max-w-md">
              Turning complex problems into elegant, scalable solutions with a passion for creating impactful digital
              experiences that push technological boundaries.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link href="#contact">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-purple-500 group-hover:opacity-90 transition-opacity"></span>
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
            <Button asChild variant="ghost" size="lg" className="group">
              <Link href="/resume.pdf" target="_blank">
                <FileText className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">Resume</span>
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
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all group"
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
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all group"
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
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all group"
              asChild
            >
              <Link href="mailto:rounakkraaj707@gmail.com">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
          </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/80 to-primary/20 flex items-center justify-center">
            <div className="absolute inset-3 rounded-full bg-background flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center text-6xl">
                <Image src="/myimage.jpg" alt="loading..." fill className="object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}