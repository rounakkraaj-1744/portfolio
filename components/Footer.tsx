import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Rounakk Raaj Sabat</h2>
            <p className="text-muted-foreground mt-2">Building the future, one line of code at a time.</p>
          </div>
          <div className="flex gap-4 justify-center mb-4">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#333] transition-colors group"
          >
            <Github className="h-5 w-5 group-hover:text-white transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rounakk-raaj-745rrs/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#0077B5] transition-colors group"
          >
            <Linkedin className="h-5 w-5 group-hover:text-white transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1DA1F2] transition-colors group"
          >
            <Twitter className="h-5 w-5 group-hover:text-white transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="mailto:contact@example.com"
            className="p-2 rounded-full hover:bg-[#EA4335] transition-colors group"
          >
            <Mail className="h-5 w-5 group-hover:text-white transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rounakk Raaj Sabat. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

