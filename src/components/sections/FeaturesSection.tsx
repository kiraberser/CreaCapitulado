import React from 'react';
import { Users, BookOpen, Lightbulb, Target, Award, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Conecta con estudiantes apasionados por la innovación y el aprendizaje colaborativo.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Proyectos Reales',
      description: 'Participa en proyectos que resuelven problemas reales y generan impacto en la comunidad.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Desarrolla ideas creativas y soluciones innovadoras en un ambiente de experimentación.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Target,
      title: 'Objetivos Claros',
      description: 'Metas definidas y roadmaps claros para el desarrollo personal y profesional.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Award,
      title: 'Reconocimiento',
      description: 'Certificaciones y reconocimientos por tu participación y contribuciones destacadas.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Proyectos que trascienden fronteras y generan impacto a nivel nacional e internacional.',
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir CREA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia única que combina aprendizaje académico, 
            desarrollo profesional y crecimiento personal en un ambiente innovador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


