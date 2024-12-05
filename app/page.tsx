'use client';

import HeroSection from "@/components/HeroSection";
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-500">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
