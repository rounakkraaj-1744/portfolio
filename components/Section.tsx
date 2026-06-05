"use client"

import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface SectionProps {
    id: string
    title?: string
    children: ReactNode
    className?: string
}

export default function Section({ id, title, children, className }: SectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id={id} className={cn("section-padding bg-[#F4F3EF]", className)}>
            <div ref={ref}
                className={cn(
                    "container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )} style={{ maxWidth: "var(--max-container)" }}>
                {title && (
                    <div className="mb-10 text-left">
                        <h2 className="section-title text-[#111]">{title}</h2>
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}