"use client"

import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const columns = [
    {
      header: "LANGUAGES",
      items: [
        { name: "TypeScript", sub: "Primary" },
        { name: "JavaScript", sub: "Core" },
        { name: "Java", sub: "Backend" },
        { name: "C", sub: "Systems" },
      ],
    },
    {
      header: "FRAMEWORKS",
      items: [
        { name: "Node.js", sub: "Runtime" },
        { name: "Express.js", sub: "REST APIs" },
        { name: "NestJS", sub: "Enterprise" },
        { name: "Next.js / React", sub: "Frontend" },
      ],
    },
    {
      header: "DATABASES",
      items: [
        { name: "PostgreSQL", sub: "Primary RDBMS" },
        { name: "MongoDB", sub: "Document store" },
        { name: "Pinecone", sub: "Vector DB" },
        { name: "Redis", sub: "Cache + Pub/Sub" },
      ],
    },
    {
      header: "CLOUD & DEVOPS",
      items: [
        { name: "AWS", sub: "EC2, S3, Lambda, EKS" },
        { name: "Docker / K8s", sub: "Containers" },
        { name: "Terraform / SAM", sub: "IaC" },
        { name: "GitHub Actions", sub: "CI/CD" },
      ],
    },
    {
      header: "AI & SYSTEMS",
      items: [
        { name: "LangChain", sub: "RAG pipelines" },
        { name: "LangGraph", sub: "Multi-agent" },
        { name: "Groq / Gemini", sub: "LLM APIs" },
        { name: "gRPC / tRPC", sub: "RPC protocols" },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-section flex items-center gap-3">
            <span className="section-number">03.</span>
            Tech Stack Decisions
          </h2>
          <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
            cat ./.env/stack/tech/tooling_base
          </span>
        </div>

        {/* Tech Table */}
        <div className="overflow-x-auto border border-border rounded-md">
          <table className="tech-table">
            <thead>
              <tr>
                {columns.map((col, i) => (
                  <th key={i}>{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map((rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => {
                    const item = col.items[rowIndex]
                    return (
                      <td key={colIndex}>
                        {item ? (
                          <>
                            <span className="text-foreground">{item.name}</span>
                            <span className="tech-sub">{item.sub}</span>
                          </>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
