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
      title: "Frontend Development Intern",
      company: "TechSolutions Inc.",
      period: "May 2023 - Aug 2023",
      description:
        "Led the development of responsive UI components using React and Next.js. Implemented state management with Redux and optimized application performance. Collaborated with the design team to ensure pixel-perfect implementation of mockups.",
      skills: ["React", "Next.js", "Redux", "TailwindCSS", "TypeScript"],
    },
    {
      title: "Backend Engineering Intern",
      company: "DataSystems Ltd.",
      period: "Jan 2023 - Apr 2023",
      description:
        "Designed and implemented RESTful APIs using Node.js and Express. Worked with MongoDB and PostgreSQL databases to optimize query performance. Implemented authentication and authorization systems using JWT and OAuth2.0.",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "Docker"],
    },
    {
      title: "Software Development Intern",
      company: "Tech Innovators",
      period: "May 2022 - Aug 2022",
      description:
        "Worked on developing and maintaining web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
      skills: ["React", "Node.js", "MongoDB", "Git"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Digital Solutions Agency",
      period: "Jan 2022 - Apr 2022",
      description:
        "Developed and maintained client websites and web applications. Implemented responsive designs and integrated third-party APIs. Worked with a team of designers and developers to deliver high-quality solutions.",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Web Development Intern",
      company: "Creative Web Studio",
      period: "Sep 2021 - Dec 2021",
      description:
        "Assisted in the development of client websites using modern web technologies. Created responsive layouts and implemented interactive features. Collaborated with designers to translate mockups into functional websites.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "Jan 2021 - Present",
      description:
        "Actively contributing to open-source projects, fixing issues, and implementing new features. Collaborated with developers from around the world.",
      skills: ["Java", "Spring Boot", "JavaScript", "GitHub"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      period: "2021 - 2025 (Expected)",
      description:
        "Focusing on computer science fundamentals, data structures, algorithms, and software engineering principles.",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
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
                        <p className="text-sm text-muted-foreground">Coursera</p>
                      </div>
                      <Badge className="bg-primary/5">2023</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Full Stack Web Development
                        </h4>
                        <p className="text-sm text-muted-foreground">Udemy</p>
                      </div>
                      <Badge className="bg-primary/5">2022</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Cloud Computing Fundamentals
                        </h4>
                        <p className="text-sm text-muted-foreground">AWS Training</p>
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
