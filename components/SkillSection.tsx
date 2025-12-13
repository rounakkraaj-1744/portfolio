"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "AI & LLM Systems",
      skills: ["LangChain", "LangGraph", "Agents", "RAG", "Vector Databases", "Memory Systems"],
      icon: "🤖",
    },
    {
      title: "Backend & Systems",
      skills: ["NestJS", "Node.js", "Rust", "System Design", "REST APIs", "Async Systems"],
      icon: "⚙️",
    },
    {
      title: "Distributed Systems",
      skills: ["Microservices", "Caching Strategies", "Event-Driven Architecture", "Concurrency", "Message Queues"],
      icon: "🏗️",
    },
    {
      title: "Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
      icon: "☁️",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-start mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight">
            Technical Arsenal
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical skills and competencies, focused on high-performance and scalable systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
