"use client"

import Section from "./Section"
import { projects } from "@/lib/constants"
import { AnimatedCarousel } from "@/components/ui/animated-carousel"

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <AnimatedCarousel carousels={projects as any} />
    </Section>
  )
}