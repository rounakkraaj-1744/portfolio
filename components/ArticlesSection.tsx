"use client"

import Link from "next/link"
import Image from "next/image"
import { Bookmark } from "lucide-react"
import { useInView } from "react-intersection-observer"

const articles = [
    {
        title: "Observability for Microservices",
        description: "If you're running services and debugging only through logs, then you're not wrong — you're slow. Metrics tell you before things break...",
        url: "https://rounakkraajsabat.medium.com/observability-for-microservices-b2d657d35c0c",
        date: "Jan 30",
        readTime: "10 min read",
        tag: "Observability",
        publication: "Engineering",
    },
    {
        title: "Eventual Consistency & CQRS in Microservices",
        description: "At small scale, a single database + CRUD APIs work fine. At scale, reads and writes compete for resources, heavy joins slow down queries...",
        url: "https://rounakkraajsabat.medium.com/eventual-consistency-cqrs-in-microservices-df952922204b",
        date: "Jan 01",
        readTime: "12 min read",
        tag: "Systems",
        publication: "Engineering",
    },
    {
        title: "Production Techniques Every Fresher Backend Developer Must Follow",
        description: "Production code is not about clever logic. It's about predictability, safety, observability, and recovery. 10 hard rules every backend dev must know...",
        url: "https://rounakkraajsabat.medium.com/production-techniques-every-fresher-backend-developer-must-follow-f74bc0b9c6fd",
        date: "Dec 30",
        readTime: "8 min read",
        tag: "Backend",
        publication: "Engineering",
    },
    {
        title: "Caching Microservices Effectively with Redis",
        description: "Cache-aside pattern, TTL as safety net, pub/sub for multi-instance sync. Exploring the trade-offs between distributed locking and idempotency keys...",
        url: "https://rounakkraajsabat.medium.com/caching-microservices-effectively-with-redis-b31b64a1d573",
        date: "Dec 10",
        readTime: "8 min read",
        tag: "Backend",
        publication: "Engineering",
    },
    {
        title: "Kafka Basics for Microservices",
        description: "Topics, partitions, consumer groups, and fault-tolerant event streaming. How companies like Netflix and Uber handle billions of messages daily...",
        url: "https://rounakkraajsabat.medium.com/kafka-basics-for-microservices-8b535ff6389d",
        date: "Nov 14",
        readTime: "10 min read",
        tag: "Systems",
        publication: "Cloud Infra",
    },
    {
        title: "Building Async Workflows with RabbitMQ",
        description: "Reliable async messaging for transactional workflows and task queues. Exchanges, routing keys, dead letter queues, and hands-on implementation...",
        url: "https://rounakkraajsabat.medium.com/building-async-workflows-with-rabbitmq-a03e2cb7ea6b",
        date: "Nov 09",
        readTime: "9 min read",
        tag: "Systems",
        publication: "Engineering",
    },
    {
        title: "Understanding Asynchronous Communication: The Backbone of Distributed Systems",
        description: "Message brokers, pub/sub, and event-driven architecture at scale. Why async communication is the secret behind scalable, fault-tolerant systems...",
        url: "https://rounakkraajsabat.medium.com/understanding-asynchronous-communication-the-backbone-of-distributed-systems-89c6faeb89c4",
        date: "Oct 31",
        readTime: "10 min read",
        tag: "Systems",
        publication: "Engineering",
    },
    {
        title: "Understanding GraphQL: From Basics to Advanced",
        description: "REST vs GraphQL vs gRPC — when to use each in microservices. Schema federation, code generation, and mixing GraphQL with microservices...",
        url: "https://rounakkraajsabat.medium.com/understanding-graphql-from-basics-to-advanced-68ada43408af",
        date: "Oct 25",
        readTime: "11 min read",
        tag: "Backend",
        publication: "Engineering",
    },
    {
        title: "RPCs, gRPC, and tRPC: The Backbone of Modern Distributed Systems",
        description: "Protocol Buffers, unary vs streaming RPCs, and modern RPC patterns. How gRPC works under the hood and why tRPC is lightning fast for TypeScript...",
        url: "https://rounakkraajsabat.medium.com/rpcs-grpc-and-trpc-the-backbone-of-modern-distributed-systems-712ac403f6a2",
        date: "Oct 21",
        readTime: "12 min read",
        tag: "Systems",
        publication: "Cloud Infra",
    },
    {
        title: "Breaking the Monolith: A Simple Guide to Microservices",
        description: "When to use microservices — and when not to. Complete architecture flow, containerization, and the property of each microservice explained...",
        url: "https://rounakkraajsabat.medium.com/breaking-the-monolith-a-simple-guide-to-microservices-ce93bfbe1914",
        date: "Oct 19",
        readTime: "9 min read",
        tag: "Systems",
        publication: "Engineering",
    },
]

export default function Articles() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    })

    return (
        <section id="articles" className="section-padding">
            <div
                ref={ref}
                className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                style={{ maxWidth: "var(--max-container)" }}
            >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-section flex items-center gap-3">
                        <span className="section-number">06.</span>
                        Engineering Writing
                    </h2>
                    <Link
                        href="https://rounakkraajsabat.medium.com"
                        target="_blank"
                        className="text-[10px] font-mono text-primary hover:underline"
                    >
                        View all on Medium →
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="space-y-4">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.url}
                            target="_blank"
                            className="group block"
                        >
                            <div className="case-study-card hover-lift flex flex-col sm:flex-row gap-4">
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    {/* Author line */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                            <Image
                                                src="/myimage.jpg"
                                                alt="Rounakk Sabat"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-xs text-foreground font-medium">Rounakk Sabat</span>
                                        <span className="text-xs text-muted-foreground">·</span>
                                        <span className="text-xs text-primary">{article.publication}</span>
                                        <span className="text-xs text-muted-foreground">·</span>
                                        <span className="text-xs text-muted-foreground">{article.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-1.5 leading-snug">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                                        {article.description}
                                    </p>

                                    {/* Meta row */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border text-muted-foreground">
                                            {article.tag}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground font-mono">
                                            {article.readTime}
                                        </span>
                                        <Bookmark className="h-3.5 w-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
