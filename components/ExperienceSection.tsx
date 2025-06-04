"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowDown } from "lucide-react"

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

  const experiences = [
    {
      title: "Chief Technology Offier (CTO)",
      company: "BOOM Entertainment",
      period: "June 2025 - Present",
      description:
        "I am currently the founding Chief Technology Officer (CTO) at [Startup Name], a decentralized entertainment platform focused on empowering YouTube creators and short-form content. As the first tech member, I am leading the complete development of the MVP — from architecting scalable backend systems to building the frontend and setting up cloud infrastructure for high-concurrency video streaming. I collaborate closely with the CEO on key technical and strategic decisions, including roadmap planning, hiring, and scaling. Post-MVP, I'll be expanding the tech team and establishing engineering best practices to support rapid growth and investor-backed scaling.",
      skills: ["Next.js", "NestJS", "State Management", "System Design", "Problem Solving", "Leadership"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "May 2024 - Apr 2025",
      description:
        "Delivered custom web solutions for 10+ clients across diverse industries and individuals. Designed and developed high-performance full-stack applications with a focus on scalability, Implemented modern frontend animations and UI/UX best practices to create seamless user experiences. Built robust backends with Node.js, Express, NestJS, and integrated relational and NoSQL databases (e.g., PostgreSQL, MongoDB). Managed CI/CD pipelines, containerization (Docker), cloud deployments (e.g., AWS, Vercel), and infrastructure as code.Integrated real-time features, email services, and third-party APIs. Set up monitoring and logging tools (e.g., Grafana, Prometheus, Sentry) to ensure performance and observability.",
      skills: ["React.js", "Express.js", "NextJS", "NestJS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    },
    {
      title: "Web Development Intern",
      company: "Suminite",
      period: "April 2025 - May 2025",
      description:
        "Developed and maintained scalable frontend features using Next.js, focusing on clean UI/UX and responsive design principles. Integrated secure payment gateways including Razorpay and PhonePe, ensuring seamless transaction flows. Built and optimized RESTful APIs using Express.js, with thorough API testing and validation. Utilized MongoDB for efficient data modeling, storage, and retrieval, ensuring optimal performance for dynamic content. Collaborated across teams to deliver full-stack solutions in an agile environment, with a focus on performance, scalability, and maintainability.- MongoDB database for fetching and storing data",
      skills: ["NextJS", "Express.js", "MongoDB", "Git/Github", "Razorpay API", "Phonepe API"],
    },
    {
      title: "Technical Instructor",
      company: "Self-Employed",
      period: "Jan 2024 - May 2025",
      description:
        "Taught Java and Data Structures & Algorithms to students through self-created courses and tutorials. Simplified complex programming concepts to make them more accessible for beginners. Created structured learning paths, coding exercises, and real-world problem-solving sessions. Managed content distribution and student engagement independently.",
      skills: ["Java", "Data Structures and Algorithms", "LeetCode", "Problem Solving"],
    },
  ]

  const education = [
    {
      degree: "BTech in Computer Science and Engineering",
      institution: "NIST University",
      period: "2021 - 2025 (Expected)",
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

  return (
    <section id="experience" className="py-20 relative overflow-hidden cyberpunk-grid">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            Experience and Education
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            My professional journey and academic background.
          </motion.p>
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-8 neon-text text-center">
            Work Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.7)] z-10"></div>

                {/* Content */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                  <Card className="border border-border/50 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(var(--primary),0.15)] group overflow-visible transform hover:scale-105 hover:-rotate-1 transition-transform duration-300">
                    {/* Connector line */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-primary ${index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
                    ></div>

                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="self-start bg-primary/5 text-xs">
                          {exp.period}
                        </Badge>
                        <CardTitle className="group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}

            {/* Timeline end arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full flex flex-col items-center">
              <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
            </div>
          </div>
        </motion.div>

        {/* Education and Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 neon-text">
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-transform duration-300">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rotate-45 transform origin-bottom-left"></div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                          <CardDescription>{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/5">
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <h4 className="font-semibold mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 neon-text">
              Certifications
            </motion.h3>
            <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-transform duration-300">
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30"></div>

              <CardContent className="pt-6 pl-6">
                <ul className="space-y-6">
                  <motion.li variants={itemVariants} className="relative pl-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        Data Structures and Algorithms
                      </h4>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">IT World Education</p>
                        <Badge className="bg-primary/5">2023</Badge>
                      </div>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="relative pl-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        Full Stack Web Development
                      </h4>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">100xDevs</p>
                        <Badge className="bg-primary/5">2022</Badge>
                      </div>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="relative pl-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        Cloud Computing and DevOps
                      </h4>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">IT World Education</p>
                        <Badge className="bg-primary/5">2022</Badge>
                      </div>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
