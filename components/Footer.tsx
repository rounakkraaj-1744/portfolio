import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-muted-foreground">&copy; {new Date().getFullYear()} Rounakk Raaj Sabat. All rights reserved.</p>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">About</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Projects</Link>
            <Link href="#code-review" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Code Review</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link>
          </nav>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Github size={20} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Mail size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

