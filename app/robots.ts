import { MetadataRoute } from 'next'
import { personalInfo } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${personalInfo.baseUrl}/sitemap.xml`,
    }
}