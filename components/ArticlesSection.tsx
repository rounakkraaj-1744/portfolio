import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Section from "./Section"
import { personalInfo } from "@/lib/constants"
import { getMediumArticles } from "@/lib/medium"

export default async function Articles() {
    const displayedArticles = await getMediumArticles(3)

    return (
        <Section id="articles" title="Articles">
            <div className="flex flex-col gap-8 mb-12">
                {displayedArticles.map((article) => (
                    <Link key={article.url} href={article.url} target="_blank" rel="noreferrer" className="group flex flex-col sm:flex-row gap-6 sm:gap-10 pb-8 border-b border-gray-200 last:border-0 hover-lift">
                        <div className="flex-1 order-2 sm:order-1">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                                    <Image src="/myimage.jpg" alt={personalInfo.name} fill className="object-cover" />
                                </div>
                                <span className="text-sm font-semibold text-[#111]">{personalInfo.name}</span>
                                <span className="text-gray-400 text-xs px-1">•</span>
                                <span className="text-sm text-gray-500">{article.date}</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-[#111] leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                                {article.description || `Read ${article.title} on Medium.`}
                            </p>

                            <div className="flex items-center gap-3 mt-4">
                                <span className="text-xs text-gray-400">{article.readTime}</span>
                            </div>
                        </div>

                        <div className="order-1 sm:order-2 shrink-0">
                            <div className="relative w-full h-48 sm:w-56 sm:h-36 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                                <Image src={article.thumbnail} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="https://rounakkraajsabat.medium.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read all on Medium <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    )
}