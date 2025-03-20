"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with product catalog, user authentication, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Full Stack", "React", "Node.js", "MongoDB", "Express"],
      category: "web",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A mobile application for task management with features like task creation, reminders, categories, and progress tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Mobile", "React Native", "Firebase", "Redux"],
      category: "mobile",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Distributed File System",
      description:
        "A distributed file system implementation with features like replication, fault tolerance, and load balancing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Systems", "Java", "Networking", "Concurrency"],
      category: "systems",
      github: "#",
    },
    {
      id: 4,
      title: "CI/CD Pipeline Automation",
      description:
        "Automated CI/CD pipeline for a microservices architecture, including testing, building, and deployment stages.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["DevOps", "Docker", "Jenkins", "AWS", "Kubernetes"],
      category: "devops",
      github: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "A responsive dashboard for social media analytics with real-time data visualization and reporting features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Full Stack", "Next.js", "TypeScript", "Chart.js", "API Integration"],
      category: "web",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "A system for tracking inventory levels, orders, sales, and deliveries for small to medium businesses.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Full Stack", "Spring Boot", "React", "MySQL", "REST API"],
      category: "web",
      github: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">A showcase of my technical projects and applications.</p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
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
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Code className="h-5 w-5 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}