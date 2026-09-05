"use client"

const experiencesData = [
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
  },
  {
    company: "Torqa Horizons",
    role: "Backend & Cloud Engineer Intern",
    period: "Sep 2025 — Jan 2026",
    location: "Remote",
    bullets: [
      "Engineered serverless e-commerce backend using AWS Lambda, API Gateway and DynamoDB.",
      "Integrated PhonePe with secure webhook processing and idempotency controls.",
      "Implemented AWS Cognito auth and S3 + CloudFront asset delivery.",
    ],
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
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

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

        <div className="relative border-l border-[#D5D3CC] ml-2 sm:ml-3 pl-6 sm:pl-8 space-y-10">
          {experiencesData.map((exp, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#111111] ring-4 ring-[#F7F5F0]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-start">
                <div className="lg:col-span-3">
                  <p className="text-[11px] font-mono text-gray-400 mb-1">{exp.period}</p>
                  <h3 className="text-sm font-bold text-[#111111] tracking-tight leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 font-normal">
                    {exp.role}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-1 text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="text-gray-400 select-none shrink-0">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:flex lg:col-span-2 justify-end">
                  <span className="text-xs text-gray-400">{exp.location}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}