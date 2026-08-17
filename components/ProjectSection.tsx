"use client"

import Section from "./Section"
import { projects } from "@/lib/constants"
import { AnimatedCarousel } from "@/components/ui/animated-carousel"

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <AnimatedCarousel carousels={projects} />
    </Section>
  )
}