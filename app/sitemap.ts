import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cinematic-prompt-engine.vercel.app',
      lastModified: new Date(),
    },
  ]
}
