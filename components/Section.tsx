"use client"

import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface SectionProps {
    id: string
    number?: string
    title?: string
    children: ReactNode
    className?: string
    headerExtra?: ReactNode
}

export default function Section({
    id,
    number,
    title,
    children,
    className,
    headerExtra,
}: SectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    })

    return (
        <section id={id} className={cn("section-padding", className)}>
            <div
                ref={ref}
                className={cn(
                    "container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ maxWidth: "var(--max-container)" }}
            >
                {(title || number) && (
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-section flex items-center gap-3">
                            {number && <span className="section-number">{number}.</span>}
                            {title}
                        </h2>
                        {headerExtra}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}
