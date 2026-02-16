"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bookmark } from "lucide-react"
import Section from "./Section"
import { articles, personalInfo } from "@/lib/constants"

export default function Articles() {
    const [showAll, setShowAll] = useState(false)
    const displayedArticles = showAll ? articles : articles.slice(0, 3)

    return (
        <Section id="articles" number="06" title="Engineering Writing"
            headerExtra={
                <Link href={personalInfo.github} target="_blank" className="text-[10px] font-mono text-primary hover:underline" >
                    View all on Medium →
                </Link>
            }
        >
            <div className="article-list">
                {displayedArticles.map((article, index) => (
                    <Link key={index} href={article.url} target="_blank" className="group block">
                        <article className="article-card">
                            <div className="article-card-content">
                                <div className="article-meta-line">
                                    <div className="article-avatar">
                                        <Image src="/myimage.jpg" alt={personalInfo.name} fill className="object-cover" />
                                    </div>
                                    <span className="article-author">{personalInfo.name}</span>
                                    <span className="article-meta-sep">·</span>
                                    <span className="article-meta-label">in</span>
                                    <span className="article-publication">{article.publication}</span>
                                    <span className="article-meta-sep">·</span>
                                    <span className="article-date">{article.date}</span>
                                </div>

                                <h3 className="article-title">
                                    {article.title}
                                </h3>
                                <p className="article-description">
                                    {article.description}
                                </p>

                                <div className="article-bottom-meta">
                                    <span className="article-read-time">{article.readTime}</span>
                                    <span className="article-meta-sep">·</span>
                                    <span className="article-tag">{article.tag}</span>
                                    <Bookmark className="article-bookmark" />
                                </div>
                            </div>

                            <div className="article-thumbnail">
                                <Image src={article.thumbnail} alt={article.title} fill className="object-cover" sizes="(max-width: 640px) 100px, 180px" />
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {articles.length > 3 && (
                <div className="flex justify-center mt-8">
                    <button onClick={() => setShowAll(!showAll)} className="text-[10px] font-mono px-6 py-2 border border-border rounded bg-card hover:border-primary/50 hover:text-primary transition-all duration-200" >
                        {showAll ? "./show_less.sh" : "./see_more.sh"}
                    </button>
                </div>
            )}
        </Section>
    )
}