"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            Get to know more about me, my background, and what drives me.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 text-left"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-foreground">
              AI Backend & Systems Engineer
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I design and build high-performance backend systems and scalable AI infrastructure. My expertise lies in architecting distributed systems, optimizing low-latency workflows, and productionizing Large Language Models (LLMs) for real-world applications.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I specialize in the intersection of Backend Engineering and Generative AI. I have built agentic workflows using LangGraph, scalable microservices with NestJS and Rust, and retrieval systems using vector databases. My focus is on reliability, concurrency, and system design patterns that stand up to production traffic.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              Currently, I am deepening my work in multi-agent systems and event-driven architectures. I am actively building tools that bridge the gap between experimental AI scripts and robust, enterprise-grade platforms.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I am open to roles in AI Infrastructure, Backend Engineering, and Distributed Systems, where I can solve complex architectural challenges.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/20 transition-colors group"
            >
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">Education</h4>
              <p className="text-sm text-muted-foreground">
                Bachelor&apos;s of Technology in Computer Science
                <br />
                Year of Graduation: 2027
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/20 transition-colors group"
            >
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">Location</h4>
              <p className="text-sm text-muted-foreground">
                Based in Odisha, India
                <br />
                Open to Hybrid/Remote Opportunities
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/20 transition-colors group col-span-2"
            >
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">Interests</h4>
              <p className="text-sm text-muted-foreground">
                Blockchain • Low Latency Programming • Open Source Contributor • System Design • Cloud Architecture •
                AI/ML Integration
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/20 transition-colors group col-span-2"
            >
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">Philosophy</h4>
              <p className="text-sm text-muted-foreground">
                I believe in continuous learning and building solutions that make a real difference. My approach
                combines technical excellence with user-centered design to create meaningful experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
