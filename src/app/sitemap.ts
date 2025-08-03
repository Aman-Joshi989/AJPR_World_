import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ajprworld.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://ajprworld.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://ajprworld/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://ajprworld.com',
            lastModified: '2021-01-01',
            changeFrequency: 'weekly',
            priority: 0.5,
            images: ['https://ajprworld.com/image.jpg'],
        },
        {
            url: 'https://ajprwold.com.com',
            lastModified: '2021-01-01',
            changeFrequency: 'weekly',
            priority: 0.5,
            videos: [
                {
                    title: 'ajprwold.com',
                    thumbnail_loc: 'https://ajprwold.com.com/image.jpg',
                    description: 'this is the description',
                },
            ],
        },
    ]
}

