import {
    Article,
    DebuggingStory,
    Experience,
    PersonalInfo,
    Project,
    SkillColumn,
} from "./types"

export const personalInfo: PersonalInfo = {
    name: "Rounakk Raaj Sabat",
    role: "Backend Engineer",
    email: "rounakkraaj707@gmail.com",
    github: "https://github.com/rounakkraaj-1744",
    linkedin: "https://www.linkedin.com/in/rounakkraajsabat/",
    baseUrl: "https://rounakk.in",
}

export const experiences: Experience[] = [
    {
        company: "Torqa Horizons",
        role: "Backend & Cloud Engineer Intern",
        period: "Sep 2025 — Jan 2026",
        location: "Delhi (Remote)",
        status: "RESOLVED",
        items: [
            {
                tag: "PROBLEM",
                type: "problem",
                text: "Engineered and scaled serverless e-commerce backend using Node.js + AWS Lambda, handling order, payment, and user flows with idempotent APIs and failure recovery.",
            },
            {
                tag: "SOLUTION",
                type: "solution",
                text: "Integrated PhonePe payment gateway with secure webhooks, idempotency handling and webhook reliability.",
            },
            {
                tag: "RECOVERY",
                type: "impact",
                text: "Implemented authentication using AWS Cognito and file storage with S3 + CloudFront for low-latency asset delivery.",
            },
            {
                tag: "RESULT",
                type: "result",
                text: "Streamlined deployments and local testing using AWS SAM, with monitoring via CloudWatch and transactional emails through SES.",
            },
        ],
    },
    {
        company: "GoLaddu Food Products Pvt. and Ltd.",
        role: "SDE Intern",
        period: "Aug 2025 — Oct 2025",
        location: "West Bengal (Remote)",
        status: "RESOLVED",
        items: [
            {
                tag: "TASK",
                type: "solution",
                text: "Built React Native frontend and Supabase backend enabling real-time user actions through Postgres schemas and edge functions.",
            },
            {
                tag: "ACTIONS",
                type: "solution",
                text: "Enabled real-time data sync and user actions using Supabase subscriptions.",
            },
            {
                tag: "RESULT",
                type: "result",
                text: "Set up GitHub Actions CI/CD, reducing deployment time by 30%, and collaborated directly with CTO on feature delivery.",
            },
        ],
    },
    {
        company: "Strmly Technologies Pvt. and Ltd.",
        role: "Software Engineer Intern",
        period: "Feb 2025 — Jul 2025",
        location: "Delhi (Remote)",
        status: "RESOLVED",
        items: [
            {
                tag: "CONTEXT",
                type: "problem",
                text: "Architected a full-stack video streaming platform using Next.js, NestJS, and MongoDB, serving 1,000+ daily active users.",
            },
            {
                tag: "ACTIONS",
                type: "solution",
                text: "Integrated Redis caching and AWS S3 using CloudFront URLs, reducing video load times by 25% and lowering backend load by ~30%.",
            },
            {
                tag: "RESULT",
                type: "result",
                text: "Delivered scalable APIs and optimized backend services for high concurrency.",
            },
        ],
    },
    {
        company: "Suminite",
        role: "Web Developer Intern",
        period: "Nov 2024 — Jan 2025",
        location: "West Bengal (Remote)",
        status: "RESOLVED",
        items: [
            {
                tag: "TASK",
                type: "solution",
                text: "Built scalable RESTful APIs with Express.js and responsive UIs using Next.js + TailwindCSS.",
            },
            {
                tag: "ACTIONS",
                type: "solution",
                text: "Managed 50,000+ records in MongoDB and integrated Razorpay & PhonePe, supporting 5,000+ monthly users.",
            },
            {
                tag: "RESULT",
                type: "result",
                text: "Improved user engagement by 20% through UI and API optimizations.",
            },
        ],
    },
]

export const projects: Project[] = [
    {
        title: "NSE Stocks Arbitrage Bot",
        emoji: "📊",
        description:
            "Built an automated arbitrage trading bot executing cross-exchange strategies; achieved 15% annualized returns in backtests. Processed 1M+ stock data points/day with real-time latency under 200ms.",
        items: [
            {
                tag: "BOTTLENECK",
                type: "problem",
                text: "Real-time latency under 200ms for 1M+ data points/day.",
            },
            {
                tag: "SOLUTION",
                type: "solution",
                text: "Cross-exchange arbitrage strategies with 15% annualized returns.",
            },
        ],
        tags: [
            "TypeScript",
            "Next.js",
            "Express.js",
            "Rust",
            "Groq API",
            "LangChain",
        ],
        github: "https://github.com/rounakkraaj-1744",
        image: "/sab.png",
    },
    {
        title: "Observability Platform",
        emoji: "📡",
        description:
            "Developed a real-time observability dashboard and REST APIs for monitoring 50+ microservices. Deployed cloud-native infra with Docker + Kubernetes, improving delivery speed by 40% via ArgoCD automation.",
        items: [
            {
                tag: "BOTTLENECK",
                type: "problem",
                text: "Monitoring 50+ microservices with real-time alerting.",
            },
            {
                tag: "SOLUTION",
                type: "solution",
                text: "Prometheus + Grafana dashboards with ArgoCD GitOps deployment.",
            },
        ],
        tags: [
            "TypeScript",
            "NestJS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Prometheus",
        ],
        github: "https://github.com/rounakkraaj-1744",
        image: "/cloudops.png",
    },
]

export const skillColumns: SkillColumn[] = [
    {
        header: "LANGUAGES",
        items: [
            { name: "TypeScript", sub: "Primary" },
            { name: "JavaScript", sub: "Core" },
            { name: "Java", sub: "Backend" },
            { name: "C", sub: "Systems" },
        ],
    },
    {
        header: "FRAMEWORKS",
        items: [
            { name: "Node.js", sub: "Runtime" },
            { name: "Express.js", sub: "REST APIs" },
            { name: "NestJS", sub: "Enterprise" },
            { name: "Next.js / React", sub: "Frontend" },
        ],
    },
    {
        header: "DATABASES",
        items: [
            { name: "PostgreSQL", sub: "Primary RDBMS" },
            { name: "MongoDB", sub: "Document store" },
            { name: "Pinecone", sub: "Vector DB" },
            { name: "Redis", sub: "Cache + Pub/Sub" },
        ],
    },
    {
        header: "CLOUD & DEVOPS",
        items: [
            { name: "AWS", sub: "EC2, S3, Lambda, EKS" },
            { name: "Docker / K8s", sub: "Containers" },
            { name: "Terraform / SAM", sub: "IaC" },
            { name: "GitHub Actions", sub: "CI/CD" },
        ],
    },
    {
        header: "AI & SYSTEMS",
        items: [
            { name: "LangChain", sub: "RAG pipelines" },
            { name: "LangGraph", sub: "Multi-agent" },
            { name: "Groq / Gemini", sub: "LLM APIs" },
            { name: "gRPC / tRPC", sub: "RPC protocols" },
        ],
    },
]

export const stories: DebuggingStory[] = [
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

export const articles: Article[] = [
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
        title:
            "Production Techniques Every Fresher Backend Developer Must Follow",
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
        title:
            "Understanding Asynchronous Communication: The Backbone of Distributed Systems",
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