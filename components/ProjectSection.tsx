import {Button} from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
      { 
        title: 'PassSafeX', 
        description: 'A modern & secured password manager',
        gradient: 'from-amber-100 to-indigo-100 dark:from-amber-900 dark:to-indigo-900'
      },
      { 
        title: 'CodeBriefs', 
        description: 'A markdown blogpost app',
        gradient: 'from-indigo-100 to-amber-100 dark:from-indigo-900 dark:to-amber-900'
      },
      { 
        title: 'MusicHunter', 
        description: 'A personalized music player app',
        gradient: 'from-amber-200 to-indigo-200 dark:from-amber-800 dark:to-indigo-800'
      },
    ];
  
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className={`bg-gradient-to-br ${project.gradient} hover:shadow-lg transition-all duration-300 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-100">{project.title}</h3>
                    <p className="text-indigo-700 dark:text-indigo-200 mb-4">{project.description}</p>
                    <Button variant="outline" 
                      className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-600 dark:text-indigo-200 dark:hover:bg-indigo-800/50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }