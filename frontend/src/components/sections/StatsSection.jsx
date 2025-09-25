import React from 'react';
import { Users, BookOpen, Calendar, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '150+',
      label: 'Miembros Activos',
      description: 'Estudiantes comprometidos con la innovación',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      number: '25+',
      label: 'Proyectos Completados',
      description: 'Soluciones reales implementadas exitosamente',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      number: '50+',
      label: 'Eventos Organizados',
      description: 'Workshops, charlas y actividades académicas',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Premios Obtenidos',
      description: 'Reconocimientos a nivel nacional e internacional',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Logros en Números
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los resultados hablan por sí solos. Estos números reflejan nuestro compromiso 
            con la excelencia y el impacto positivo en la comunidad estudiantil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <IconComponent className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;