"use client"

import Link from "next/link"
import Image from "next/image"
import { Bookmark } from "lucide-react"
import { useInView } from "react-intersection-observer"

const articles = [
    {
        title: "Observability for Microservices",
        description:
            "If you're running services and debugging only through logs, then you're not wrong — you're slow. Metrics tell you before things break. This article covers Prometheus, Grafana, and exposing a /metrics endpoint in real services...",
        url: "https://rounakkraajsabat.medium.com/observability-for-microservices-b2d657d35c0c",
        date: "Jan 30",
        readTime: "10 min read",
        tag: "Observability",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*K6llp1sAUX8EYIRRYtiVGA.png",
    },
    {
        title: "Eventual Consistency & CQRS in Microservices",
        description:
            "At small scale, a single database + CRUD APIs work fine. At scale, reads and writes compete for resources and heavy joins slow down queries. This is where CQRS and eventual consistency enter the picture...",
        url: "https://rounakkraajsabat.medium.com/eventual-consistency-cqrs-in-microservices-df952922204b",
        date: "Jan 01",
        readTime: "12 min read",
        tag: "Systems",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*9uwlAuagMyOUj12BOEgapQ.png",
    },
    {
        title: "Production Techniques Every Fresher Backend Developer Must Follow",
        description:
            "Production code is not about clever logic. It's about predictability, safety, observability, and recovery. 10 hard rules from timeouts and retries to idempotency and structured logging...",
        url: "https://rounakkraajsabat.medium.com/production-techniques-every-fresher-backend-developer-must-follow-f74bc0b9c6fd",
        date: "Dec 30",
        readTime: "8 min read",
        tag: "Backend",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*FQO08uhR00vDP9pecwPjNA.png",
    },
    {
        title: "Caching Microservices Effectively with Redis",
        description:
            "Exploring the trade-offs between distributed locking and idempotency keys in Redis cluster environments. Cache-aside, write-through, TTL strategies, and pub/sub for multi-instance sync...",
        url: "https://rounakkraajsabat.medium.com/caching-microservices-effectively-with-redis-b31b64a1d573",
        date: "Dec 10",
        readTime: "8 min read",
        tag: "Backend",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*3FfWNcrsM7p1TgVORU81HQ.png",
    },
    {
        title: "Kafka Basics for Microservices",
        description:
            "Topics, partitions, consumer groups, and fault-tolerant event streaming. How companies like Netflix, Uber, and LinkedIn handle billions of messages daily with Apache Kafka...",
        url: "https://rounakkraajsabat.medium.com/kafka-basics-for-microservices-8b535ff6389d",
        date: "Nov 14",
        readTime: "10 min read",
        tag: "Systems",
        publication: "Cloud Infra",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*8AK9ArHMG0TxQfnSZL3bbQ.png",
    },
    {
        title: "Building Async Workflows with RabbitMQ",
        description:
            "Services should never wait for each other. RabbitMQ handles async messaging with exchanges, routing keys, dead letter queues, and reliable message acknowledgement...",
        url: "https://rounakkraajsabat.medium.com/building-async-workflows-with-rabbitmq-a03e2cb7ea6b",
        date: "Nov 09",
        readTime: "9 min read",
        tag: "Systems",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/940/1*XREy3WdBDRxpnI2l5JuL0Q.webp",
    },
    {
        title: "Understanding Asynchronous Communication: The Backbone of Distributed Systems",
        description:
            "Synchronous vs asynchronous communication, message brokers, pub/sub model, and event-driven architecture. The secret ingredient behind scalable, fault-tolerant real-time systems...",
        url: "https://rounakkraajsabat.medium.com/understanding-asynchronous-communication-the-backbone-of-distributed-systems-89c6faeb89c4",
        date: "Oct 31",
        readTime: "10 min read",
        tag: "Systems",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*F8T-lWS-G8SmYxcOoCeDOQ.jpeg",
    },
    {
        title: "Understanding GraphQL: From Basics to Advanced",
        description:
            "REST vs GraphQL vs gRPC — when to use each. Schema federation, code generation, resolvers with context, subscriptions, and mixing GraphQL with microservices at scale...",
        url: "https://rounakkraajsabat.medium.com/understanding-graphql-from-basics-to-advanced-68ada43408af",
        date: "Oct 25",
        readTime: "11 min read",
        tag: "Backend",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*DyqD2prG8IvMQHlNnpR1fA.png",
    },
    {
        title: "RPCs, gRPC, and tRPC: The Backbone of Modern Distributed Systems",
        description:
            "Protocol Buffers, HTTP/2, unary vs streaming RPCs. How gRPC works under the hood and why tRPC is lightning fast for full-stack TypeScript projects...",
        url: "https://rounakkraajsabat.medium.com/rpcs-grpc-and-trpc-the-backbone-of-modern-distributed-systems-712ac403f6a2",
        date: "Oct 21",
        readTime: "12 min read",
        tag: "Systems",
        publication: "Cloud Infra",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*uLOHQZ7bbe0VCq56sEW1aA.png",
    },
    {
        title: "Breaking the Monolith: A Simple Guide to Microservices",
        description:
            "When to use microservices — and when not to. Complete architecture flow with separate databases, Docker containers, and network-based inter-service communication...",
        url: "https://rounakkraajsabat.medium.com/breaking-the-monolith-a-simple-guide-to-microservices-ce93bfbe1914",
        date: "Oct 19",
        readTime: "9 min read",
        tag: "Systems",
        publication: "Engineering",
        thumbnail:
            "https://cdn-images-1.medium.com/max/1024/1*NeZNOnH-UTepr1lq_SYnvg.jpeg",
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

                {/* Articles List */}
                <div className="article-list">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.url}
                            target="_blank"
                            className="group block"
                        >
                            <article className="article-card">
                                {/* Left: Content */}
                                <div className="article-card-content">
                                    {/* Author line */}
                                    <div className="article-meta-line">
                                        <div className="article-avatar">
                                            <Image
                                                src="/myimage.jpg"
                                                alt="Rounakk Raaj Sabat"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="article-author">Rounakk Raaj Sabat</span>
                                        <span className="article-meta-sep">·</span>
                                        <span className="article-meta-label">in</span>
                                        <span className="article-publication">{article.publication}</span>
                                        <span className="article-meta-sep">·</span>
                                        <span className="article-date">{article.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="article-title">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="article-description">
                                        {article.description}
                                    </p>

                                    {/* Bottom meta */}
                                    <div className="article-bottom-meta">
                                        <span className="article-read-time">{article.readTime}</span>
                                        <span className="article-meta-sep">·</span>
                                        <span className="article-tag">{article.tag}</span>
                                        <Bookmark className="article-bookmark" />
                                    </div>
                                </div>

                                {/* Right: Thumbnail */}
                                <div className="article-thumbnail">
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 200px"
                                    />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
