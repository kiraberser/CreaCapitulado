import { MetadataRoute } from 'next';
import { departments } from '@/data/mockData';
import { blogPosts } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://creacapitulado.vercel.app';

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/departamentos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/encuestas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Páginas de departamentos
  const departmentPages: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${baseUrl}/departamentos/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Páginas de miembros
  const memberPages: MetadataRoute.Sitemap = departments.flatMap((dept) =>
    dept.members.map((member) => ({
      url: `${baseUrl}/departamentos/${dept.slug}/${member.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  // Páginas de blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    // Generar slug desde el título
    const slug = post.title
      .toLowerCase()
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [...staticPages, ...departmentPages, ...memberPages, ...blogPages];
}

