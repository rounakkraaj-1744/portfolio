"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
      title: "CodeBriefs",
      description: "A markdown blogpost app for sharing and learning coding through notes and cheatsheets",
      image: "/codebriefs.png?height=300&width=500",
      tags: ["Next.js", "OAuth", "Prisma", "Postgres", "TailwindCSS", "ShadCN"],
      category: "web",
      github: "#",
      // demo: "#",
    },
    {
      id: 2,
      title: "PassSafeX",
      description: "A safe, secure, scalable and reliable password manager that respects your privacy",
      image: "/password.png?height=300&width=500",
      tags: [
        "Next.js",
        "OAuth",
        "Prisma",
        "Postgres",
        "TailwindCSS",
        "ShadCN",
        "Express.js",
        "bcrypt.js",
        "Docker compose",
      ],
      category: "web",
      github: "#",
      // demo: "#",
    },
    {
      id: 3,
      title: "LangMorph",
      description:
        "A VS Code Extension that allows in-editor AI Based code conversion from one programming language to another",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["TypeScript", "Gemini 2.O Flash API"],
      category: "systems",
      github: "#",
    },
    {
      id: 4,
      title: "Music Hunter",
      description: "My personalized music player ... (Spotify clone but my style)",
      image: "/musichunter.png?height=300&width=500",
      tags: ["DevOps", "Docker", "Next.js", "Express.js", "AWS S3", "Kubernetes", "TailwindCSS", "ShadCN"],
      category: "web",
      github: "#",
    },
    {
      id: 5,
      title: "Weather App",
      description: "Full Stack weather app to get accurate weather forecast as per your location",
      image: "/weather.png?height=300&width=500",
      tags: ["Next.js", "Express.js", "OpenWeatherMap API"],
      category: "web",
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
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="overflow-hidden flex flex-col h-full border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group">
                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                      {/* Project image with overlay */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full">
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
