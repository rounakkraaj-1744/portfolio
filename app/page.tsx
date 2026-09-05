import Hero from "@/components/HeroSection"
import TechStrip from "@/components/SkillSection"
import Projects from "@/components/ProjectSection"
import Experience from "@/components/ExperienceSection"
import EngineeringSection from "@/components/EngineeringSection"
import WritingAndAboutSection from "@/components/WritingAndAboutSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111] overflow-x-hidden">
      <Hero />
      <TechStrip />
      <Projects />
      <Experience />
      <EngineeringSection />
      <WritingAndAboutSection />
      <Footer />
    </main>
  )
}