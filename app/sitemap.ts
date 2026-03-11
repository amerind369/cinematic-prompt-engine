import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cinematic-prompt-engine.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://cinematic-prompt-engine.vercel.app/examples',
      lastModified: new Date(),
    },
    {
      url: 'https://cinematic-prompt-engine.vercel.app/how-to-write-ai-prompts',
      lastModified: new Date(),
    },
  ]
}
