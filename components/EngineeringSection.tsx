"use client"

const engineeringAreas = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
        <rect x="2" y="3" width="8" height="18" rx="2" />
      </svg>
    ),
    title: "Backend",
    description: "Node.js, Express, Java, Rust",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Data",
    description: "PostgreSQL, MongoDB, Redis, Kafka",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 7h3v3H7zM14 7h3v3h-3z" />
      </svg>
    ),
    title: "Infrastructure",
    description: "AWS, Docker, Kubernetes, Terraform, Nginx",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11H5M19 11h1.95M12 19.95V21M12 3v1.05" />
      </svg>
    ),
    title: "Systems",
    description: "Distributed Systems, Event-Driven Architecture, Concurrency, Caching, Real-Time Systems",
  },
]

export default function EngineeringSection() {
  return (
    <section id="engineering" className="py-16 sm:py-20">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xs font-mono text-gray-400 font-semibold">03</span>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                Engineering
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
              How I think about building and operating systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {engineeringAreas.map((area) => (
            <div key={area.title} className="bg-white rounded-2xl p-5 border border-[#E7E5DE] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#E7E5DE] flex items-center justify-center bg-[#F7F5F0]">
                {area.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111111] tracking-tight">{area.title}</h3>
                <p className="text-xs text-gray-500 leading-snug mt-1">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}