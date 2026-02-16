"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function DebuggingStories() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    })

    const stories = [
        {
            title: "Race condition in real-time sync",
            label: "(Detailed)",
            description:
                "Identified a critical bug where multiple users updating the same record simultaneously caused data loss. Solved by implementing optimistic locking at the Postgres database layer, modified services to handle conflict resolution with exponential backoff and established test-driven concurrency checks across entities.",
            url: "#",
        },
        {
            title: "Cold start optimization thread",
            description:
                "Serverless Functions were experiencing 3s+ cold starts impacting checkout CX. Reduced latency to 4 million by extracting dependency management, enabled SIGP and established preheated+ environment for peak traffic scenarios.",
            url: "#",
        },
    ]

    return (
        <section id="debugging" className="section-padding">
            <div
                ref={ref}
                className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                style={{ maxWidth: "var(--max-container)" }}
            >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-section flex items-center gap-3">
                        <span className="section-number">04.</span>
                        Debugging Stories
                    </h2>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
                        vol_1 / debugging/threads.log
                    </span>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {stories.map((story, index) => (
                        <div key={index} className="case-study-card hover-lift">
                            <h3 className="text-card-title text-foreground font-mono mb-1">
                                <span className="text-primary">→ </span>
                                {story.title}
                                {story.label && (
                                    <span className="text-[10px] text-primary ml-2">{story.label}</span>
                                )}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                                {story.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
