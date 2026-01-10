import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://anishpoudel.com',
      lastModified: new Date(),
    },
    {
      url: 'https://anishpoudel.com/projects',
      lastModified: new Date(),
    },
  ]
}
