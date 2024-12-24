import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink } from 'lucide-react'
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: 'PassSafeX',
    description: 'A modern & secure password manager with end-to-end encryption, multi-device sync, and intuitive UI.',
    image: '/password.png?height=200&width=300',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Prisma', 'Encryption'],
    demoLink: '#',
    githubLink: 'https://github.com/rounakkraaj-1744/Project_PassSafeX',
  },
  {
    title: 'CodeBriefs',
    description: 'A markdown-based blogging platform for developers, featuring syntax highlighting and collaborative editing.',
    image: '/codebriefs.png?height=200&width=300',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Netlify'],
    demoLink: 'https://codebriefs.netlify.app',
    githubLink: 'https://github.com/rounakkraaj-1744/Project_CodeBriefs',
  },
  {
    title: 'MusicHunter',
    description: 'A personalized music discovery app using machine learning to recommend new tracks based on listening history.',
    image: '/musichunter.png?height=200&width=300',
    tags: ['Next.jS', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'Spotify API'],
    demoLink: '#',
    githubLink: 'https://github.com/rounakkraaj-1744/Project_MusicHunter',
  },{
    title: 'WeatherApp',
    description: 'A simple, sleek and light weight weather app to know the accurate weather of your location.',
    image: '/weather.png?height=200&width=300',
    tags: ['Next.js', 'Express.js', 'OpenWeatherMap API'],
    demoLink: '#',
    githubLink: 'https://github.com/rounakkraaj-1744/Project_MusicHunter',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-100">
                    {project.title}
                  </CardTitle>
                  <p className="text-indigo-700 dark:text-indigo-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-600 dark:text-indigo-200 dark:hover:bg-indigo-800/50"
                    onClick={() => window.open(project.demoLink, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-600 dark:text-indigo-200 dark:hover:bg-indigo-800/50"
                    onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

