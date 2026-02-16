"use client"

import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const columns = [
    {
      header: "FOUNDATIONS",
      items: [
        { name: "Node.js", sub: "Express + Fastify" },
        { name: "PostgreSQL", sub: "Primary database" },
        { name: "MongoDB", sub: "Document store" },
      ],
    },
    {
      header: "MESSAGING / CACHE",
      items: [
        { name: "Redis", sub: "Caching + Pub/Sub" },
        { name: "Kafka", sub: "Event streaming" },
        { name: "RabbitMQ", sub: "Task queues" },
      ],
    },
    {
      header: "COMPUTE / RUNTIME",
      items: [
        { name: "AWS Lambda", sub: "Serverless" },
        { name: "Docker", sub: "Containers" },
        { name: "Kubernetes", sub: "Orchestration" },
      ],
    },
    {
      header: "API / INFRA",
      items: [
        { name: "REST/GraphQL", sub: "API design" },
        { name: "gRPC", sub: "Service mesh" },
        { name: "Terraform", sub: "IaC" },
      ],
    },
    {
      header: "DEVTOOLS/INFRA",
      items: [
        { name: "GitHub Actions", sub: "CI/CD" },
        { name: "Prometheus", sub: "Monitoring" },
        { name: "Grafana", sub: "Dashboards" },
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
              {[0, 1, 2].map((rowIndex) => (
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
