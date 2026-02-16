"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

// Medium icon component
function MediumIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
    )
}

export default function Articles() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const articles = [
        {
            title: "CQRS and Eventual Consistency",
            content: "Separate read and write models — commands emit events, queries read denormalized projections.",
            url: "https://medium.com/@rounakkraajsabat",
        },
        {
            title: "10 Backend Practices Every Junior Dev Must Know",
            content: "Production code is about predictability, safety, observability, and recovery.",
            url: "https://medium.com/@rounakkraajsabat",
        },
        {
            title: "Caching Microservices Effectively with Redis",
            content: "Cache-aside pattern, TTL as safety net, pub/sub for multi-instance sync.",
            url: "https://medium.com/@rounakkraajsabat/caching-microservices-effectively-with-redis-b31b64a1d573",
        },
        {
            title: "Kafka Basics for Microservices",
            content: "Topics, partitions, consumer groups, and fault-tolerant event streaming.",
            url: "https://medium.com/@rounakkraajsabat/kafka-basics-for-microservices-8b535ff6389d",
        },
        {
            title: "Building Async Workflows with RabbitMQ",
            content: "Reliable async messaging for transactional workflows and task queues.",
            url: "https://medium.com/@rounakkraajsabat/building-async-workflows-with-rabbitmq-a03e2cb7ea6b",
        },
        {
            title: "Understanding Asynchronous Communication",
            content: "Message brokers, pub/sub, and event-driven architecture at scale.",
            url: "https://medium.com/@rounakkraajsabat/understanding-asynchronous-communication-the-backbone-of-distributed-systems-89c6faeb89c4",
        },
        {
            title: "Understanding GraphQL: From Basics to Advanced",
            content: "REST vs GraphQL vs gRPC — when to use each in microservices.",
            url: "https://medium.com/@rounakkraajsabat/understanding-graphql-from-basics-to-advanced-68ada43408af",
        },
        {
            title: "RPCs, gRPC, and tRPC",
            content: "Protocol Buffers, unary vs streaming RPCs, and modern RPC patterns.",
            url: "https://medium.com/@rounakkraajsabat/rpcs-grpc-and-trpc-the-backbone-of-modern-distributed-systems-712ac403f6a2",
        },
        {
            title: "Breaking the Monolith: A Guide to Microservices",
            content: "When to use microservices — and when not to. Complete architecture flow.",
            url: "https://medium.com/@rounakkraajsabat/breaking-the-monolith-a-simple-guide-to-microservices-ce93bfbe1914",
        },
    ]

    return (
        <section
            id="articles"
            className="bg-background"
            style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-xl)" }}
        >
            <div
                ref={ref}
                className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                style={{ maxWidth: "var(--max-container)" }}
            >
                {/* Section Header */}
                <div style={{ marginBottom: "var(--space-lg)" }}>
                    <h2 className="text-section">
                        Engineering Writing
                    </h2>
                    <p className="text-muted-foreground mt-3">
                        Deep dives into distributed systems, backend patterns, and production engineering.
                    </p>
                </div>

                {/* Masonry Article Cards */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.url}
                            target="_blank"
                            className="group block mb-4 break-inside-avoid"
                        >
                            <div
                                className="border border-border rounded-xl bg-card hover-accent-border transition-all duration-200"
                                style={{ padding: "var(--space-md)" }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0 ring-2 ring-border">
                                            <Image
                                                src="/myimage.jpg"
                                                alt="Rounakk Raaj"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground leading-tight">
                                                Rounakk Raaj
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                @rounakkraajsabat
                                            </p>
                                        </div>
                                    </div>
                                    <MediumIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                                    {article.title}
                                </h3>

                                {/* Content */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {article.content}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View all */}
                <div style={{ marginTop: "var(--space-lg)" }}>
                    <Link
                        href="https://rounakkraajsabat.medium.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 link-underline"
                    >
                        <MediumIcon className="w-4 h-4" />
                        <span>View all on Medium</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
