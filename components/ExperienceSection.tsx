"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      title: "SDE Intern (Backend Systems)",
      company: "Strmly: Decentralized Entertainment",
      period: "June 2024 - July 2024",
      location: "Remote",
      description:
        "Architected the core video streaming pipeline for a decentralized media platform. Designed a microservices-based backend using NestJS to handle high-concurrency video encoding and delivery. Implemented Redis caching layers to reduce database load by 40% during peak traffic.",
      skills: [
        "NestJS",
        "Microservices",
        "System Design",
        "Redis",
        "AWS S3",
        "MongoDB",
        "Video Encoding",
      ],
    },
    {
      title: "Backend & Infrastructure Engineer",
      company: "Freelance",
      period: "May 2024 - Present",
      location: "Remote",
      description:
        "Designing and deploying scalable backend solutions for diverse clients. Migrating legacy monolithic applications to containerized microservices on Kubernetes. Implementing CI/CD pipelines using GitHub Actions and conducting load testing to ensure 99.9% uptime availability.",
      skills: ["Kubernetes", "Docker", "Terraform", "PostgreSQL", "NestJS", "Rust", "CI/CD"],
    },
    {
      title: "Backend Engineer Intern",
      company: "Suminite",
      period: "April 2024 - May 2024",
      location: "Remote",
      description:
        "Engineered secure payment processing services integrating multiple gateways (Razorpay, PhonePe) with transactional integrity. Optimized database queries in MongoDB, reducing validation latency by 30%. Developed standard REST APIs for merchant dashboard analytics.",
      skills: ["Node.js", "Express.js", "MongoDB", "Payment Gateways", "API Security"],
    },
    {
      title: "Technical Educator (Systems & Algo)",
      company: "Self-Employed",
      period: "Jan 2024 - Present",
      location: "Remote",
      description:
        "Creating advanced technical content on Distributed Systems, Rust, and Data Structures. Mentoring students on low-level programming concepts, memory management, and concurrent algorithm design.",
      skills: ["System Design", "Rust", "Algorithms", "Concurrency", "Distributed Systems"],
    },
  ]

  const education = [
    {
      degree: "BTech in Computer Science and Engineering",
      institution: "NIST University",
      period: "2021 - 2025 (Expected)",
      location: "Berhampur, India",
      description:
        "Focusing on computer science fundamentals, data structures, algorithms, computer architecture and software engineering principles.",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning",
        "Computer Organisation and Architecture",
      ],
    },
  ]

  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "IT World Education",
      period: "2023",
    },
    {
      title: "Full Stack Web Development",
      issuer: "100xDevs",
      period: "2022",
    },
    {
      title: "Cloud Computing and DevOps",
      issuer: "IT World Education",
      period: "2022",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-start mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-4">
            Experience & Education
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground text-lg text-left">
            My professional journey, academic background, and continuous learning path.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience Column */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l border-border pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">{exp.period}</Badge>
                  </div>

                  <div className="mb-4">
                    <span className="text-muted-foreground font-medium">{exp.company}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-muted-foreground text-sm">{exp.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certs Column */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{edu.degree}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.slice(0, 4).map((c, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{c}</Badge>
                      ))}
                      {edu.courses.length > 4 && <Badge variant="secondary" className="text-xs">+{edu.courses.length - 4}</Badge>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-8">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-4 border border-border rounded-lg bg-card/50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <h4 className="font-medium text-sm">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
