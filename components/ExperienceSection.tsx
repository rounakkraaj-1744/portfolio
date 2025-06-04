"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
        "I am currently the founding Chief Technology Officer (CTO) at [Startup Name], a decentralized entertainment platform focused on empowering YouTube creators and short-form content. As the first tech member, I am leading the complete development of the MVP — from architecting scalable backend systems to building the frontend and setting up cloud infrastructure for high-concurrency video streaming. I collaborate closely with the CEO on key technical and strategic decisions, including roadmap planning, hiring, and scaling. Post-MVP, I’ll be expanding the tech team and establishing engineering best practices to support rapid growth and investor-backed scaling.",
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
        "Computer Organisation and Architecture"
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text">
            Experience & Education
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            My professional journey and academic background.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 neon-text">
              Work Experience
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group card-3d">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="card-3d-content">
                          <CardTitle className="group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/5">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 card-3d-content">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 card-3d-content">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
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
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group card-3d">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="card-3d-content">
                          <CardTitle className="group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                          <CardDescription>{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/5">
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 card-3d-content">{edu.description}</p>
                      <h4 className="font-semibold mb-2 card-3d-content">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2 card-3d-content">
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

            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Certifications</h3>
              <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group glow">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Data Structures and Algorithms
                        </h4>
                        <p className="text-sm text-muted-foreground">IT World Education</p>
                      </div>
                      <Badge className="bg-primary/5">2023</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Full Stack Web Development
                        </h4>
                        <p className="text-sm text-muted-foreground">100xDevs</p>
                      </div>
                      <Badge className="bg-primary/5">2022</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Cloud Computing and DevOps
                        </h4>
                        <p className="text-sm text-muted-foreground">IT World Education</p>
                      </div>
                      <Badge className="bg-primary/5">2022</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
