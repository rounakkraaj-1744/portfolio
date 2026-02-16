import { personalInfo } from "@/lib/constants"

export default function Footer() {
  const footerUser = personalInfo.name.toLowerCase().replace(/\s+/g, "_")

  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ maxWidth: "var(--max-container)" }}>
        <p className="text-[11px] font-mono text-muted-foreground">
          <span className="text-primary">root@{footerUser}</span>
          <span className="text-muted-foreground">:~$</span>
          <span className="text-foreground ml-1">exit</span>
        </p>
        <p className="text-[10px] font-mono text-muted-foreground text-center">
          {personalInfo.name} © {new Date().getFullYear()} &nbsp;|&nbsp; Built with Incident-driven Development &nbsp;|&nbsp; System Uptime: 100%
        </p>
      </div>
    </footer>
  )
}