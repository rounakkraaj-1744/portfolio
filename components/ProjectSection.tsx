
"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const projects = [
    {
      id: 1,
      title: "LangMorph - AI Code Converter",
      problem: "Developers struggle to manually migrate legacy codebases between languages while preserving logic.",
      challenge: "Parsing ASTs accurately and maintaining context across large files was computationally expensive and error-prone.",
      solution: "Built a VS Code extension using Gemini 2.0 Flash API for context-aware translation. Implemented optimized caching for repetitive code blocks and streaming responses for lower latency.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["TypeScript", "Gemini 2.0 Flash API", "VS Code API", "AST Parsing"],
      category: "ai",
      github: "#",
    },
    {
      id: 2,
      title: "Cloud Observability Platform",
      problem: "Monitoring microservices across fragmented cloud environments is complex and lacks unified visibility.",
      challenge: "Aggregating metrics, logs, and traces from distributed clusters in real-time without adding latency.",
      solution: "Architected a full-stack observability suite integrating Prometheus & Grafana. Automated deployment pipelines using ArgoCD and Helm charts on Kubernetes.",
      image: "/weather.png?height=300&width=500",
      tags: ["Kubernetes", "Prometheus", "Grafana", "Terraform", "ArgoCD", "Go"],
      category: "devops",
      github: "#",
    },
    {
      id: 3,
      title: "ROSH - High-Performance Shell",
      problem: "Standard shells can be slow and lack modern, improved developer experience features.",
      challenge: "Managing low-level process control and memory safety while ensuring high throughput.",
      solution: "Engineered a custom shell in Rust with a custom-built parser and job control system. Achieved 20% faster startup time compared to Zsh by optimizing resource allocation.",
      image: "/weather.png?height=300&width=500",
      tags: ["Rust", "Systems Programming", "Memory Safety", "Linux APIs"],
      category: "systems",
      github: "#",
    },
    {
      id: 4,
      title: "Distributed Music Engine",
      problem: "Handling concurrent audio streams and metadata synchronization at scale is resource-intensive.",
      challenge: "Ensuring consistent state across distributed content delivery nodes and managing container orchestration.",
      solution: "Deployed a containerized microservices architecture on AWS EKS. Utilized S3 for object storage and implemented a custom load balancing strategy for media streaming.",
      image: "/musichunter.png?height=300&width=500",
      tags: ["NestJS", "Kubernetes", "AWS S3", "Docker", "Microservices"],
      category: "backend",
      github: "#",
    },
    {
      id: 5,
      title: "Zero-Knowledge Password Vault",
      problem: "Centralized password managers are vulnerable to single points of failure and data breaches.",
      challenge: "Securely storing credentials without the server ever having access to the encryption keys.",
      solution: "Implemented a zero-knowledge architecture using client-side AES-256 encryption. Backend (Node.js) only stores encrypted blobs, ensuring complete data privacy.",
      image: "/password.png?height=300&width=500",
      tags: ["Node.js", "Cryptography", "AES-256", "Docker", "PostgreSQL"],
      category: "backend",
      github: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">
            My Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            A curated selection of my technical projects showcasing my skills and expertise.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center mb-8"
          >
            <TabsList className="bg-background/80 backdrop-blur-sm">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI / GenAI</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value={activeTab} className="mt-8 focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full"
            >
              <Carousel
                opts={{
                  align: filteredProjects.length === 1 ? "center" : "start",
                  loop: filteredProjects.length > 1,
                }}
                className="w-full relative"
              >
                <div
                  className="relative overflow-hidden px-4 md:px-12"
                  style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                  }}
                >
                  {/* Gradient Masks removed in favor of CSS mask for better blending */}

                  <CarouselContent className="-ml-2 md:-ml-4 py-4">
                    {filteredProjects.map((project) => (
                      <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <motion.div variants={itemVariants} className="h-full">
                          <Card className="flex flex-col h-full border border-border bg-card hover-lift hover-glow overflow-hidden group">
                            <div className="aspect-video w-full overflow-hidden bg-muted relative">
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                <Button variant="secondary" size="sm" className="rounded-full" asChild>
                                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                  </Link>
                                </Button>
                              </div>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>

                            <CardHeader className="p-6 pb-4">
                              <div className="flex justify-between items-start mb-2">
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                  {project.title}
                                </CardTitle>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="font-normal text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 3 && <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>}
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 flex-grow space-y-4">
                              <div>
                                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">The Problem</h4>
                                <p className="text-sm text-muted-foreground leading-snug">{project.problem}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Challenge</h4>
                                <p className="text-sm text-muted-foreground leading-snug">{project.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution</h4>
                                <p className="text-sm text-muted-foreground leading-snug">{project.solution}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
                <CarouselPrevious className="absolute left-0 -translate-x-1/2 lg:-translate-x-full h-12 w-12" />
                <CarouselNext className="absolute right-0 translate-x-1/2 lg:translate-x-full h-12 w-12" />
              </Carousel>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
            <Link href="https://github.com/rounakkraaj-1744" target="_blank" rel="noopener noreferrer">
              <Code className="h-5 w-5 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
