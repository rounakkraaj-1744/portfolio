import { CheckCircle2 } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "TypeScript", "Rust"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS"],
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Android (Java)"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Bash"],
    },
    {
      title: "Systems Design",
      skills: ["Database Design", "System Architecture", "Microservices", "Design Patterns"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            A comprehensive overview of my technical skills and competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">Technical Proficiency</h3>
          <div className="grid gap-6">
            {[
              { name: "Full Stack Development", percentage: 85 },
              { name: "Mobile Development", percentage: 75 },
              { name: "Systems Design", percentage: 70 },
              { name: "DevOps", percentage: 65 },
              { name: "Data Structures & Algorithms", percentage: 80 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}