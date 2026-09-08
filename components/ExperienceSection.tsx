import { ArrowRight } from "lucide-react"

interface ExperienceData {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  techStack: string[]
}

const experiencesData: ExperienceData[] = [
  {
    company: "Proto Corp Pvt Ltd",
    role: "Software Engineer Intern",
    period: "Mar 2026 — Present",
    location: "Remote",
    bullets: [
      "Built real-time drone fleet monitoring platform with MQTT/EMQX and Socket.IO.",
      "Deployed and maintained services on AWS with Docker, improving deployment time by 35%.",
      "Worked on telemetry ingestion, fleet management and live video streaming.",
    ],
    techStack: ["MQTT", "EMQX", "Socket.IO", "AWS", "Docker"],
  },
  {
    company: "Torqis Horizons",
    role: "Backend & Cloud Engineer Intern",
    period: "Sep 2025 — Jan 2026",
    location: "Remote",
    bullets: [
      "Engineered serverless e-commerce backend using AWS Lambda, API Gateway and DynamoDB.",
      "Integrated PhonePe with secure webhook processing and idempotency controls.",
      "Implemented AWS Cognito auth and S3 + CloudFront asset delivery.",
    ],
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "S3", "CloudFront"],
  },
  {
    company: "GoLaddu Food Products",
    role: "SDE Intern",
    period: "Aug 2025 — Oct 2025",
    location: "Remote",
    bullets: [
      "Built React Native frontend and Supabase backend with real-time user actions.",
      "Enabled real-time data sync using Supabase subscriptions.",
      "Set up GitHub Actions CI/CD, reducing deployment time by 30%.",
    ],
    techStack: ["React Native", "Supabase", "PostgreSQL", "GitHub Actions"],
  },
  {
    company: "Strmly Technologies",
    role: "Software Engineer Intern",
    period: "Feb 2025 — Jul 2025",
    location: "Remote",
    bullets: [
      "Architected video streaming platform with Next.js, NestJS and MongoDB.",
      "Implemented Redis caching (30% reduction in backend load).",
      "Integrated AWS S3 + CloudFront for media delivery (25% faster load times).",
    ],
    techStack: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS S3", "CloudFront"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xs font-mono text-gray-400 font-semibold">02</span>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                Experience
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
              A concise view of my professional journey.
            </p>
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-[#D5D3CC] ml-2 sm:ml-3 pl-5 sm:pl-8 space-y-4">
          {experiencesData.map((exp) => (
            <div 
              key={exp.company} 
              className="relative group rounded-2xl p-4 sm:p-5 -mx-3 sm:-mx-4 border border-transparent hover:border-[#E7E5DE] hover:bg-white/80 hover:shadow-xs transition-colors duration-300 ease-out cursor-default"
              tabIndex={0}
              role="region"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Timeline Dot */}
              <span 
                className="absolute -left-[27px] sm:-left-[39px] top-6 w-2.5 h-2.5 rounded-full ring-4 ring-[#F7F5F0] bg-[#888888] group-hover:bg-[#111111] group-hover:ring-[#E7E5DE] transition-colors duration-300"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-start">
                
                {/* Left Column: Period, Company, Role */}
                <div className="lg:col-span-3">
                  <p className="text-[11px] font-mono text-gray-400 mb-1">{exp.period}</p>
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#111111] group-hover:text-black tracking-tight leading-tight transition-colors duration-200">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 font-normal">
                    {exp.role}
                  </p>
                </div>

                {/* Middle Column: Bullets & Tech Stack */}
                <div className="lg:col-span-7 space-y-2.5 text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  <div className="space-y-1.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="select-none shrink-0 text-gray-400 group-hover:text-gray-700 transition-colors duration-200">•</span>
                        <span className="group-hover:text-gray-800 transition-colors duration-200">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mr-1">
                      Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded-md bg-[#F2F0E8] text-[#444] text-[10px] font-medium font-mono border border-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Location + Arrow */}
                <div className="hidden lg:flex lg:col-span-2 items-center justify-end gap-2 pt-1">
                  <span className="text-xs text-gray-400">{exp.location}</span>
                  <ArrowRight 
                    className="w-3.5 h-3.5 text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black transition-all duration-300 ease-out" 
                    aria-hidden="true"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}