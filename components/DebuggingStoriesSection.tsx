"use client"

import Section from "./Section"
import { stories } from "@/lib/constants"

export default function DebuggingStories() {
    return (
        <Section id="debugging" number="04" title="Debugging Stories"
            headerExtra={
                <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground">
                    vol_1 / debugging/threads.log
                </span>
            }
        >
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
        </Section>
    )
}