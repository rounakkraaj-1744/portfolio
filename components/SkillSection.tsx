import { Code, Server, Smartphone, GitBranch, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 70 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Android (Java)", level: 80 },
        { name: "Flutter", level: 70 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 85 },
        { name: "Bash", level: 80 },
      ],
    },
    {
      title: "Systems Design",
      icon: <Layers className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Database Design", level: 85 },
        { name: "System Architecture", level: 80 },
        { name: "Microservices", level: 75 },
        { name: "Design Patterns", level: 85 },
      ],
    },
  ]

  // Function to render skill level bar
  const SkillLevelBar = ({ level }: { level: number }) => {
    return (
      <div className="w-full bg-muted rounded-full h-1.5">
        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            A comprehensive overview of my technical skills and competencies.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Technical Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-background rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <SkillLevelBar level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-semibold mb-6">Development Expertise</h4>
                <div className="space-y-6">
                  {[
                    { name: "Full Stack Development", percentage: 90 },
                    { name: "Mobile Development", percentage: 80 },
                    { name: "Systems Design", percentage: 85 },
                    { name: "DevOps", percentage: 75 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-primary font-medium">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-semibold mb-6">Professional Skills</h4>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { name: "Problem Solving", level: 95 },
                    { name: "Algorithm Design", level: 90 },
                    { name: "Code Quality", level: 90 },
                    { name: "Testing", level: 85 },
                    { name: "Documentation", level: 85 },
                    { name: "Agile Methodology", level: 80 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

