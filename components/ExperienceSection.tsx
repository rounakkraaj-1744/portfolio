"use client"

import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const experiences = [
    {
      company: "Torqa Horizons",
      role: "Backend & Cloud Engineer Intern",
      period: "Sep 2025 — Jan 2026",
      location: "Delhi (Remote)",
      status: "RESOLVED",
      items: [
        { tag: "PROBLEM", type: "problem", text: "Engineered and scaled serverless e-commerce backend using Node.js + AWS Lambda, handling order, payment, and user flows with idempotent APIs and failure recovery." },
        { tag: "SOLUTION", type: "solution", text: "Integrated PhonePe payment gateway with secure webhooks, idempotency handling and webhook reliability." },
        { tag: "RECOVERY", type: "impact", text: "Implemented authentication using AWS Cognito and file storage with S3 + CloudFront for low-latency asset delivery." },
        { tag: "RESULT", type: "result", text: "Streamlined deployments and local testing using AWS SAM, with monitoring via CloudWatch and transactional emails through SES." },
      ],
    },
    {
      company: "GoLaddu Food Products Pvt. and Ltd.",
      role: "SDE Intern",
      period: "Aug 2025 — Oct 2025",
      location: "West Bengal (Remote)",
      status: "RESOLVED",
      items: [
        { tag: "TASK", type: "solution", text: "Built React Native frontend and Supabase backend enabling real-time user actions through Postgres schemas and edge functions." },
        { tag: "ACTIONS", type: "solution", text: "Enabled real-time data sync and user actions using Supabase subscriptions." },
        { tag: "RESULT", type: "result", text: "Set up GitHub Actions CI/CD, reducing deployment time by 30%, and collaborated directly with CTO on feature delivery." },
      ],
    },
    {
      company: "Strmly Technologies Pvt. and Ltd.",
      role: "Software Engineer Intern",
      period: "Feb 2025 — Jul 2025",
      location: "Delhi (Remote)",
      status: "RESOLVED",
      items: [
        { tag: "CONTEXT", type: "problem", text: "Architected a full-stack video streaming platform using Next.js, NestJS, and MongoDB, serving 1,000+ daily active users." },
        { tag: "ACTIONS", type: "solution", text: "Integrated Redis caching and AWS S3 using CloudFront URLs, reducing video load times by 25% and lowering backend load by ~30%." },
        { tag: "RESULT", type: "result", text: "Delivered scalable APIs and optimized backend services for high concurrency." },
      ],
    },
    {
      company: "Suminite",
      role: "Web Developer Intern",
      period: "Nov 2024 — Jan 2025",
      location: "West Bengal (Remote)",
      status: "RESOLVED",
      items: [
        { tag: "TASK", type: "solution", text: "Built scalable RESTful APIs with Express.js and responsive UIs using Next.js + TailwindCSS." },
        { tag: "ACTIONS", type: "solution", text: "Managed 50,000+ records in MongoDB and integrated Razorpay & PhonePe, supporting 5,000+ monthly users." },
        { tag: "RESULT", type: "result", text: "Improved user engagement by 20% through UI and API optimizations." },
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ maxWidth: "var(--max-container)" }}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-section flex items-center gap-3">
            <span className="section-number">01.</span>
            Production Incident Logs
          </h2>
          <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
            {`{view: → sequential_timeline}`}
          </span>
        </div>

        {/* Experience Entries */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="log-entry">
              {/* Log Header */}
              <div className="log-entry-header">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-sm font-semibold text-foreground font-mono">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">|</span>
                  <span className="text-xs text-muted-foreground font-mono">{exp.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground font-mono hidden sm:inline">{exp.period}</span>
                  <span className="tag-status">{`STATUS: ${exp.status}`}</span>
                </div>
              </div>

              {/* Log Body */}
              <div className="log-entry-body">
                {exp.items.map((item, i) => (
                  <div key={i} className="log-item">
                    <span className={`tag tag-${item.type} flex-shrink-0`}>
                      {item.tag}:
                    </span>
                    <span className="log-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
