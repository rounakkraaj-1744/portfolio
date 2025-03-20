import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Innovators",
      period: "May 2023 - Aug 2023",
      description:
        "Worked on developing and maintaining web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
      skills: ["React", "Node.js", "MongoDB", "Git"],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "Jan 2023 - Present",
      description:
        "Actively contributing to open-source projects, fixing issues, and implementing new features. Collaborated with developers from around the world.",
      skills: ["Java", "Spring Boot", "JavaScript", "GitHub"],
    },
    {
      title: "Research Assistant",
      company: "University Research Lab",
      period: "Sep 2022 - Dec 2022",
      description:
        "Assisted in research on distributed systems and cloud computing. Implemented prototypes and conducted experiments to validate research hypotheses.",
      skills: ["Java", "Distributed Systems", "Cloud Computing", "Research"],
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">My professional journey and academic background.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="outline">{edu.period}</Badge>
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
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Data Structures and Algorithms</h4>
                        <p className="text-sm text-muted-foreground">Coursera</p>
                      </div>
                      <Badge>2023</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Full Stack Web Development</h4>
                        <p className="text-sm text-muted-foreground">Udemy</p>
                      </div>
                      <Badge>2022</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Cloud Computing Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">AWS Training</p>
                      </div>
                      <Badge>2022</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

