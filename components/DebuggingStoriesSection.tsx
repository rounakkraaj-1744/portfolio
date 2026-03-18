"use client"

import Section from "./Section"
import { stories } from "@/lib/constants"

export default function DebuggingStories() {
    return (
        <Section id="debugging" title="Debugging Stories">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stories.map((story, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100/50 hover-lift">
                        <h3 className="text-lg font-bold text-[#111] mb-2 flex items-center gap-2">
                            <span className="text-blue-600 font-bold">→</span>
                            {story.title}
                            {story.label && (
                                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-semibold">{story.label}</span>
                            )}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                            {story.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    )
}