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
      title: "Programming Languages",
      skills: ["Java", "C", "TypeScript", "Rust"],
      icon: "💻",
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS"],
      icon: "⚙️",
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Android (Java)"],
      icon: "📱",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Bash"],
      icon: "🔧",
    },
    {
      title: "Systems Design",
      skills: ["Database Design", "System Architecture", "Microservices", "Design Patterns"],
      icon: "🏗️",
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            My Skills
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            A comprehensive overview of my technical skills and competencies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background border border-border/50 p-6 rounded-lg shadow-sm hover:border-primary/20 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
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
