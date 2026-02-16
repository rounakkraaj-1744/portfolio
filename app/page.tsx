import Hero from "@/components/HeroSection"
import Skills from "@/components/SkillSection"
import Projects from "@/components/ProjectSection"
import Experience from "@/components/ExperienceSection"
import About from "@/components/AboutSection"
import DebuggingStories from "@/components/DebuggingStoriesSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <DebuggingStories />
      <About />
      <Footer />
    </main>
  )
}