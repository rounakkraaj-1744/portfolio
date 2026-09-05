import type { Article } from "./types"
import { articles as fallbackArticles } from "./constants"

const FEED_URL = "https://medium.com/feed/@rounakkraajsabat"

function clean(value: string) {
  return value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim()
}

function field(item: string, name: string) {
  return item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"))?.[1] ?? ""
}

export async function getMediumArticles(limit = 3): Promise<Article[]> {
  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!response.ok) throw new Error(`Medium feed returned ${response.status}`)
    const xml = await response.text()
    const parsed = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => {
      const item = match[1]
      const content = field(item, "content:encoded")
      const image = content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1]
      const published = new Date(clean(field(item, "pubDate")))
      return {
        title: clean(field(item, "title")),
        description: clean(field(item, "description")),
        url: clean(field(item, "link")),
        date: Number.isNaN(published.getTime()) ? "" : published.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        readTime: "",
        tag: "",
        publication: "Medium",
        thumbnail: image || fallbackArticles[0].thumbnail,
      }
    }).filter((article) => article.title && article.url)

    return parsed.slice(0, limit)
  } catch {
    return fallbackArticles.slice(0, limit)
  }
}
