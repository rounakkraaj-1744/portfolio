import Hero from "@/components/HeroSection"
import About from "@/components/AboutSection"
import Skills from "@/components/SkillSection"
import Projects from "@/components/ProjectSection"
import Experience from "@/components/ExperienceSection"
import Contact from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}