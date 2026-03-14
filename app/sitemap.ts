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

    {
      url: 'https://cinematic-prompt-engine.vercel.app/styles',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/styles/cyberpunk-prompts',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/styles/fantasy-prompts',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/industries',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/industries/filmmaking',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/industries/gaming',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/problems',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/problems/ai-images-look-unrealistic',
      lastModified: new Date(),
    },

    {
      url: 'https://cinematic-prompt-engine.vercel.app/problems/ai-lighting-looks-fake',
      lastModified: new Date(),
    },

  ]
}
