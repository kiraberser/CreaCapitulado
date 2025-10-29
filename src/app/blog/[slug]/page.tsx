'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/mockData';

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  // Buscar post por slug
  const slugFromTitle = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  
  const post = blogPosts.find(p => slugFromTitle(p.title) === slug);

  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="inline-flex items-center"><User className="w-4 h-4 mr-2" />{post.author}</span>
              <span className="inline-flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(post.date).toLocaleDateString('es-ES')}</span>
              <span className="inline-flex items-center"><Clock className="w-4 h-4 mr-2" />{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <img src={post.image} alt={post.title} className="w-full rounded-xl" />
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}


