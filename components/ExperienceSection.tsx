"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

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

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      title: "SDE-1 Intern",
      company: "Strmly: Decentralized Entertainment",
      period: "June 2024 - July 2024",
      location: "Remote",
      description:
        "Acted as the sole developer and founding engineer during MVP phase. Took end-to-end ownership of product development, architecture, deployment, and collaboration with CEO/founder. Led the end-to-end development of a full-stack video platform.",
      skills: [
        "Next.js",
        "NestJS",
        "State Management",
        "System Design",
        "MongoDB",
        "Redis",
        "AWS S3",
        "Railway",
        "Vercel",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "May 2024 - Apr 2025",
      location: "Remote",
      description:
        "Delivered custom web solutions for 10+ clients across diverse industries. Built robust backends with Node.js, Express, NestJS, and integrated relational and NoSQL databases. Managed CI/CD pipelines, containerization, and cloud deployments.",
      skills: ["React.js", "Express.js", "NextJS", "NestJS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    },
    {
      title: "Web Development Intern",
      company: "Suminite",
      period: "April 2024 - May 2024",
      location: "Remote",
      description:
        "Developed and maintained scalable frontend features using Next.js. Integrated secure payment gateways including Razorpay and PhonePe. Built and optimized RESTful APIs using Express.js with MongoDB integration.",
      skills: ["NextJS", "Express.js", "MongoDB", "Git/Github", "Razorpay API", "Phonepe API"],
    },
    {
      title: "Technical Instructor",
      company: "Self-Employed",
      period: "Jan 2024 - May 2025",
      location: "Remote",
      description:
        "Taught Java and Data Structures & Algorithms to students through self-created courses and tutorials. Simplified complex programming concepts and created structured learning paths with real-world problem-solving sessions.",
      skills: ["Java", "Data Structures and Algorithms", "LeetCode", "Problem Solving"],
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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Journey</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            Experience & Education
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground mt-4 text-lg">
            My professional journey, academic background, and continuous learning path.
          </motion.p>
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-12 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h3>

          <div className="relative max-w-7xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30 hidden md:block"></div>

            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30 md:hidden"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    variants={isLeft ? leftVariants : rightVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 shadow-lg z-10 hidden md:flex">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-primary">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="absolute left-8 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 z-10 md:hidden">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-primary">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Left side card */}
                    {isLeft && (
                      <div className="hidden md:block w-[calc(50%-2rem)] pr-8">
                        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
                          {/* Gradient border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-px rounded-lg">
                            <div className="h-full w-full bg-background rounded-lg"></div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10 p-6 text-right">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-start justify-end gap-2 mb-2">
                                <Badge variant="secondary" className="bg-muted/50">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {exp.location}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
                                >
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {exp.period}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors text-right">
                                {exp.title}
                              </CardTitle>
                              <CardDescription className="text-base font-medium text-right">
                                {exp.company}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="p-0">
                              <p className="text-muted-foreground mb-4 leading-relaxed text-right">{exp.description}</p>

                              <div className="flex flex-wrap gap-2 justify-end">
                                {exp.skills.map((skill, skillIndex) => (
                                  <Badge
                                    key={skillIndex}
                                    variant="secondary"
                                    className="text-xs bg-muted/30 hover:bg-primary/10 transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </div>

                          {/* Connecting line */}
                          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-8 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        </Card>
                      </div>
                    )}

                    {/* Right side card */}
                    {!isLeft && (
                      <div className="hidden md:block w-[calc(50%-2rem)] pl-8 ml-auto">
                        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
                          {/* Gradient border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-px rounded-lg">
                            <div className="h-full w-full bg-background rounded-lg"></div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10 p-6 text-left">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-start justify-start gap-2 mb-2">
                                <Badge
                                  variant="outline"
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
                                >
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {exp.period}
                                </Badge>
                                <Badge variant="secondary" className="bg-muted/50">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {exp.location}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors text-left">
                                {exp.title}
                              </CardTitle>
                              <CardDescription className="text-base font-medium text-left">
                                {exp.company}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="p-0">
                              <p className="text-muted-foreground mb-4 leading-relaxed text-left">{exp.description}</p>

                              <div className="flex flex-wrap gap-2 justify-start">
                                {exp.skills.map((skill, skillIndex) => (
                                  <Badge
                                    key={skillIndex}
                                    variant="secondary"
                                    className="text-xs bg-muted/30 hover:bg-primary/10 transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </div>

                          {/* Connecting line */}
                          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-8 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        </Card>
                      </div>
                    )}

                    {/* Mobile card (always left-aligned) */}
                    <div className="md:hidden ml-16 w-full pr-4">
                      <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
                        {/* Gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-px rounded-lg">
                          <div className="h-full w-full bg-background rounded-lg"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 text-left">
                          <CardHeader className="p-0 mb-4">
                            <div className="flex items-start justify-start gap-2 mb-2">
                              <Badge
                                variant="outline"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
                              >
                                <Calendar className="w-3 h-3 mr-1" />
                                {exp.period}
                              </Badge>
                              <Badge variant="secondary" className="bg-muted/50">
                                <MapPin className="w-3 h-3 mr-1" />
                                {exp.location}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                          </CardHeader>

                          <CardContent className="p-0">
                            <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="text-xs bg-muted/30 hover:bg-primary/10 transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </div>

                        {/* Mobile connecting line */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-4 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Timeline end indicator */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex justify-center mt-12"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education and Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6 text-green-500" />
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl group relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-300 bg-gradient-to-br from-background to-background/80">
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 p-px rounded-lg">
                      <div className="h-full w-full bg-background rounded-lg"></div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-600/20 rotate-45 transform origin-bottom-left"></div>
                    </div>

                    <div className="relative z-10 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <Badge
                            variant="outline"
                            className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0"
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {edu.period}
                          </Badge>
                          <Badge variant="secondary" className="bg-muted/50">
                            <MapPin className="w-3 h-3 mr-1" />
                            {edu.location}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-green-600 transition-colors">{edu.degree}</CardTitle>
                        <CardDescription className="font-medium">{edu.institution}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4">{edu.description}</p>
                        <h4 className="font-semibold mb-2 text-green-600">Key Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="secondary"
                              className="bg-green-500/10 text-green-700 hover:bg-green-500/20 transition-colors"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-orange-500" />
              Certifications
            </motion.h3>
            <Card className="border-0 shadow-lg hover:shadow-xl group relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-300 bg-gradient-to-br from-background to-background/80">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 p-px rounded-lg">
                <div className="h-full w-full bg-background rounded-lg"></div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600"></div>

              <div className="relative z-10">
                <CardContent className="pt-6 pl-6">
                  <ul className="space-y-6">
                    {certifications.map((cert, index) => (
                      <motion.li key={index} variants={itemVariants} className="relative pl-6">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600"></div>
                        <div>
                          <h4 className="font-medium group-hover:text-orange-600 transition-colors">{cert.title}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <Badge className="bg-orange-500/10 text-orange-700 border-orange-500/20">
                              {cert.period}
                            </Badge>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
