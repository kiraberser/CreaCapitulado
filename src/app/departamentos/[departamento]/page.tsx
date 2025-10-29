'use client';

import Link from 'next/link';
import { Mail, Phone, ArrowLeft, Sparkles, Award, Calendar } from 'lucide-react';
import { departments } from '@/data/mockData';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';

export default function DepartmentDetailPage({ params }: { params: Promise<{ departamento: string }> }) {
  const { departamento } = use(params);
  const department = departments.find(dept => dept.slug === departamento);

  if (!department) {
    notFound();
  }

  const gradientColors = {
    'from-blue-500 to-blue-700': 'bg-gradient-to-br from-blue-500/10 to-blue-700/5',
    'from-green-500 to-green-700': 'bg-gradient-to-br from-green-500/10 to-green-700/5',
    'from-yellow-500 to-orange-500': 'bg-gradient-to-br from-yellow-500/10 to-orange-500/5',
    'from-red-500 to-pink-500': 'bg-gradient-to-br from-red-500/10 to-pink-500/5',
  };

  const bgGradient = gradientColors[department.gradient as keyof typeof gradientColors];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${department.gradient} py-20`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/departamentos" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Departamentos
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl">{department.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {department.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                {department.longDescription}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white">
              <span className="font-semibold">{department.members.length}</span> Integrantes
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white">
              <Sparkles className="w-5 h-5 inline mr-2" />
              Equipo Activo
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales apasionados comprometidos con la excelencia y la innovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {department.members.map((member, index) => (
            <div key={member.id} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
              <Link
                href={`/departamentos/${departamento}/${member.slug}`}
                className="group block"
              >
              <div className={`${bgGradient} rounded-2xl shadow-lg transition-all duration-500 overflow-hidden`}>
                <div className="p-8">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${department.gradient} rounded-tr-full opacity-10`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Image with floating badge */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${department.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                      {member.position.includes('Coordinador') && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-2 shadow-lg">
                          <Award className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-1">{member.position}</p>
                    <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      Desde {member.joinDate}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full border border-gray-200 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-xs font-medium text-gray-600 rounded-full">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 text-center">
                    <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                      Ver perfil completo →
                    </span>
                  </div>
                </div>
                </div>
                {/* Extra padding for contact buttons */}
                <div className="h-16"></div>
              </div>
            </Link>

            {/* Contact buttons - Outside Link to avoid nesting */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-10">
              <a
                href={`mailto:${member.email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                title={`Email ${member.name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${member.phone}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-10 h-10 bg-green-100 hover:bg-green-200 text-green-600 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                title={`Llamar ${member.name}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
          ))}
        </div>

        {/* CTA Section */}
        {department.name !== "Presidencia y Vicepresidencia" && (

          <div className={`mt-20 bg-gradient-to-r ${department.gradient} rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Te gustaría unirte a {department.name}?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando personas talentosas y apasionadas para unirse a nuestro equipo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Aplicar Ahora
                </button>
                <Link href="/contacto" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Contactar al Equipo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
