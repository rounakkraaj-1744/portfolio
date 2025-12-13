import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-bold flex items-center gap-2">
              <code className="text-primary">&lt;/&gt;</code> Rounakk Raaj
            </span>
            <p className="text-muted-foreground mt-2 text-sm">Building scalable systems and AI infrastructure.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="https://github.com/rounakkraaj-1744" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="https://www.linkedin.com/in/rounakk-raaj-745rrs/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="https://twitter.com/rounakkraaj" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="mailto:rounakkraaj707@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rounakk Raaj Sabat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

