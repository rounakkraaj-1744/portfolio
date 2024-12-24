import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-muted-foreground">&copy; {new Date().getFullYear()} Rounakk Raaj Sabat. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/rounakkraaj-1744" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Github size={20} />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rounakk-raaj-745rrs" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Linkedin size={20} />
              </Button>
            </Link>
            <Link href="mailto:rounakkraaj707@gmail.com">
              <Button variant="ghost" size="icon" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

