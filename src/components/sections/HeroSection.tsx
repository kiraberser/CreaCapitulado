import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Users, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Capítulo Estudiantil de Innovación
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tu potencial{' '}
                <span className="bg-gradient-to-r from-green-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent">
                  creativo
                </span>
                , nuestro{' '}
                <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  compromiso
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Únete a CREA, donde la innovación se encuentra con la educación. 
                Desarrollamos proyectos, organizamos eventos y creamos oportunidades 
                para el crecimiento académico y profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/registro">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Únete a CREA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-gray-300 px-8">
                <Play className="w-5 h-5 mr-2" />
                Ver Video
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-2 mx-auto lg:mx-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Miembros</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-2 mx-auto lg:mx-0">
                  <BookOpen className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto lg:mx-0">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Eventos</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 rounded-full"></div>
                    <div className="absolute top-16 left-0 w-12 h-20 bg-green-500"></div>
                    <div className="absolute top-0 left-12 w-20 h-12 bg-green-500 clip-path-triangle"></div>
                    
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-16 right-0 w-12 h-20 bg-yellow-400"></div>
                    <div className="absolute top-0 right-12 w-20 h-12 bg-yellow-400 clip-path-triangle-right"></div>
                    
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-16 left-0 w-12 h-20 bg-blue-500"></div>
                    <div className="absolute bottom-0 left-12 w-20 h-12 bg-blue-500 clip-path-triangle-up"></div>
                    
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500 rounded-full"></div>
                    <div className="absolute bottom-16 right-0 w-12 h-20 bg-red-500"></div>
                    <div className="absolute bottom-0 right-12 w-20 h-12 bg-red-500 clip-path-triangle-up-right"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-white border-4 border-black rounded-sm shadow-lg">
                      <div className="w-full h-full flex">
                        <div className="flex-1 border-r-2 border-black p-1">
                          <div className="space-y-1">
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                          </div>
                        </div>
                        <div className="flex-1 p-1">
                          <div className="space-y-1">
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                            <div className="h-1 bg-black rounded opacity-60"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <h2 className="text-6xl font-black text-gray-900 tracking-wider">CREA</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


