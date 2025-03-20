import About from "@/components/AboutSection";
import Experience from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Projects from "@/components/ProjectSection";
import Skills from "@/components/SkillSection";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
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

