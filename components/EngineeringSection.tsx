import Link from "next/link"
import { ArrowUpRight, GitBranch, GitCommit, Users } from "lucide-react"
import { getGithubContributions } from "@/lib/github"

const levelClasses = [
  "bg-[#EEEDEA]",
  "bg-[#D9EBDD]",
  "bg-[#A7D5B0]",
  "bg-[#66B276]",
  "bg-[#287A42]",
]

function getWeeks(contributions: Awaited<ReturnType<typeof getGithubContributions>>["contributions"]) {
  if (!contributions.length) return []
  const byDate = new Map(contributions.map((day) => [day.date, day]))
  const start = new Date(`${contributions[0].date}T00:00:00Z`)
  start.setUTCDate(start.getUTCDate() - start.getUTCDay())
  return Array.from({ length: 53 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const date = new Date(start)
      date.setUTCDate(start.getUTCDate() + week * 7 + day)
      const key = date.toISOString().slice(0, 10)
      return byDate.get(key) ?? { date: key, count: 0, level: 0 }
    })
  )
}

function getTooltipAlignmentClass(weekIndex: number) {
  if (weekIndex < 6) {
    return "left-0 translate-x-0"
  }
  if (weekIndex > 46) {
    return "right-0 left-auto translate-x-0"
  }
  return "left-1/2 -translate-x-1/2"
}

export default async function EngineeringSection() {
  const github = await getGithubContributions()
  const weeks = getWeeks(github.contributions)

  return (
    <section id="engineering" className="py-16 sm:py-20 border-b border-[#E7E5DE] scroll-mt-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xs font-mono text-gray-400 font-semibold">03</span>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#111111] font-serif tracking-tight">
                Building in Public
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
              Consistent commits, experiments, projects, and the occasional rabbit hole.
            </p>
          </div>
          
          <Link 
            href={`https://github.com/${github.username}`} 
            target="_blank" 
            rel="noreferrer" 
            className="group btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-colors duration-200 shadow-xs self-start sm:self-auto"
          >
            <span>View on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* GitHub Contribution Graph Card */}
        <div className="rounded-2xl border border-[#E7E5DE] bg-white p-5 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl sm:text-2xl text-[#111111]">
              <strong>{github.total.toLocaleString()}</strong> contributions in {github.year}
            </p>
            <span className="hidden sm:inline-flex rounded-full border border-[#E7E5DE] px-3 py-1.5 text-xs text-gray-600 font-mono">
              {github.year}
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[760px] pt-2">
              {/* Month Labels */}
              <div className="flex gap-1.5 ml-8 mb-2 text-[11px] text-gray-500 font-mono">
                {Array.from({ length: 12 }, (_, index) => (
                  <span key={index} className="w-[calc(100%/12)]">
                    {new Date(Date.UTC(github.year, index, 1)).toLocaleDateString("en-US", {
                      month: "short",
                      timeZone: "UTC",
                    })}
                  </span>
                ))}
              </div>

              {/* Day rows and grid */}
              <div className="flex gap-2">
                <div className="flex flex-col justify-between py-0.5 text-[11px] text-gray-500 font-mono shrink-0 select-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="flex gap-1 flex-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1 flex-1">
                      {week.map((day) => (
                        <span
                          key={day.date}
                          className="relative group block aspect-square rounded-[3px] cursor-pointer"
                        >
                          <span
                            className={`absolute inset-0 rounded-[3px] transition-opacity hover:opacity-80 ${
                              levelClasses[Math.min(day.level, 4)]
                            }`}
                          />
                          {/* Non-clipping smart-aligned Tooltip */}
                          <span
                            className={`pointer-events-none absolute z-30 bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-[#111111] px-2 py-1 text-[10px] text-white shadow-md font-sans group-hover:block ${getTooltipAlignmentClass(
                              weekIndex
                            )}`}
                          >
                            {day.count} contribution{day.count === 1 ? "" : "s"} on {day.date}
                          </span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-end items-center gap-1.5 mt-4 text-[11px] text-gray-500 font-mono">
                <span>Less</span>
                {levelClasses.map((className) => (
                  <span key={className} className={`w-3 h-3 rounded-[3px] ${className}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Metric Stats Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-[#E7E5DE] mt-5 pt-6">
            <div className="flex items-center gap-3">
              <GitCommit className="w-5 h-5 text-gray-500" />
              <div>
                <strong className="text-lg sm:text-xl text-[#111111]">
                  {github.total.toLocaleString()}
                </strong>
                <p className="text-xs text-gray-500">Contributions in {github.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-gray-500" />
              <div>
                <strong className="text-lg sm:text-xl text-[#111111]">
                  {github.repositories.toLocaleString()}
                </strong>
                <p className="text-xs text-gray-500">Public repositories</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-500" />
              <div>
                <strong className="text-lg sm:text-xl text-[#111111]">Open Source</strong>
                <p className="text-xs text-gray-500">Passionate about building together</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
