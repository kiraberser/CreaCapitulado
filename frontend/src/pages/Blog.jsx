import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Tecnología', 'Productividad', 'Diseño', 'Emprendimiento', 'Sostenibilidad'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog CREA
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explora artículos sobre tecnología, innovación, y desarrollo personal 
              escritos por nuestra comunidad de estudiantes y expertos.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'Todas' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-gray-600">
              {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` en ${selectedCategory}`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>

          {/* Posts Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Post Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & Read Time */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} lectura
                    </span>
                  </div>

                  {/* Read More */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta con otros términos de búsqueda o explora diferentes categorías.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Mantente Actualizado
            </h3>
            <p className="text-gray-300 mb-8">
              Suscríbete a nuestro newsletter y recibe los últimos artículos directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Suscribirme
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;