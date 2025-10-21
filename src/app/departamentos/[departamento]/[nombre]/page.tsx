'use client';

import Link from 'next/link';
import { Mail, Phone, Github, Linkedin, Twitter, ArrowLeft, Award, Calendar, Briefcase, Code, Star, ExternalLink, MessageCircle } from 'lucide-react';
import { departments } from '@/data/mockData';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function MemberProfilePage({ 
  params 
}: { 
  params: Promise<{ departamento: string; nombre: string }> 
}) {
  const { departamento, nombre } = use(params);
  const department = departments.find(dept => dept.slug === departamento);
  
  if (!department) {
    notFound();
  }

  const member = department.members.find(m => m.slug === nombre);
  
  if (!member) {
    notFound();
  }

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header with back button */}
      <div className={`bg-gradient-to-r ${department.gradient} py-8`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href={`/departamentos/${departamento}`} 
            className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a {department.name}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Main Profile Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header with gradient */}
                <div className={`relative h-32 bg-gradient-to-r ${department.gradient}`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                  {member.position.includes('Coordinador') && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 rounded-full px-4 py-2 text-sm font-bold shadow-lg flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Coordinador
                    </div>
                  )}
                </div>

                <div className="relative px-6 pb-8">
                  {/* Profile Image */}
                  <div className="relative -mt-16 mb-4 flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${department.gradient} rounded-full blur-2xl opacity-60`}></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h1>
                    <p className="text-gray-600 font-medium mb-3">{member.position}</p>
                    <span className={`inline-block px-4 py-1 ${department.color} text-white text-sm font-medium rounded-full`}>
                      {department.name}
                    </span>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    Miembro desde {member.joinDate}
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 mb-6">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 group-hover:bg-blue-200 text-blue-600 rounded-lg transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">Email</p>
                        <p className="text-sm text-gray-900 font-medium truncate">{member.email}</p>
                      </div>
                    </a>

                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-green-100 group-hover:bg-green-200 text-green-600 rounded-lg transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">Teléfono</p>
                        <p className="text-sm text-gray-900 font-medium">{member.phone}</p>
                      </div>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Redes Sociales
                    </p>
                    {member.social.linkedin && (
                      <a
                        href={`https://${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          LinkedIn
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
                      </a>
                    )}
                    {'github' in member.social && member.social.github && (
                      <a
                        href={`https://${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <Github className="w-5 h-5 text-gray-900" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          GitHub
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
                      </a>
                    )}
                    {'twitter' in member.social && member.social.twitter && (
                      <a
                        href={`https://twitter.com/${member.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <Twitter className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-700 group-hover:text-blue-400 transition-colors">
                          {member.social.twitter}
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
                      </a>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 bg-gradient-to-r ${department.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}>
                    <MessageCircle className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Estadísticas Rápidas
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Proyectos</span>
                    <span className="text-lg font-bold text-gray-900">{member.projects.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Habilidades</span>
                    <span className="text-lg font-bold text-gray-900">{member.skills.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Logros</span>
                    <span className="text-lg font-bold text-gray-900">{member.achievements.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${department.gradient} rounded-xl`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sobre mí</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {member.bio}
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${department.gradient} rounded-xl`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Habilidades</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${department.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="relative px-5 py-3 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-transparent rounded-xl font-medium text-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${department.gradient} rounded-xl`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Logros y Reconocimientos</h2>
              </div>
              <div className="space-y-4">
                {member.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full flex-shrink-0">
                      <Star className="w-5 h-5 text-yellow-900" />
                    </div>
                    <p className="text-gray-800 font-medium pt-2">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${department.gradient} rounded-xl`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Proyectos Destacados</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {member.projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${department.gradient} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 ${department.color} rounded-full animate-pulse`}></div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Proyecto {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                        {project}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className={`bg-gradient-to-r ${department.gradient} rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  ¿Interesado en colaborar?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                  {member.name} está abierto/a a nuevas oportunidades de colaboración y proyectos innovadores.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Enviar Email
                  </a>
                  <Link
                    href={`/departamentos/${departamento}`}
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
                  >
                    Ver Equipo Completo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
  );
} 
