import { MetadataRoute } from 'next'
import { personalInfo } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: personalInfo.baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${personalInfo.baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${personalInfo.baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}