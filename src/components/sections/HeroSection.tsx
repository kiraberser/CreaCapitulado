import React from 'react';
import Link from 'next/link';
import { Users, BookOpen, Lightbulb, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Gradiente difuminado en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>
      {/* Círculos decorativos animados mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos grandes principales */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

        {/* Círculos medianos */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob-slow animation-delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animation-delay-1000"></div>

        {/* Círculos pequeños adicionales */}
        <div className="absolute top-1/6 right-1/6 w-56 h-56 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob-slow animation-delay-2000"></div>
        <div className="absolute bottom-1/6 left-1/6 w-48 h-48 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-3000"></div>
        <div className="absolute top-2/3 left-1/5 w-60 h-60 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob-slow animation-delay-1000"></div>
        <div className="absolute bottom-2/3 right-1/5 w-52 h-52 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="mb-6 lg:mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Capítulo Estudiantil de Innovación
              </div>

              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <div className="text-center lg:text-left">
                  Tu potencial{' '}
                  <span className="bg-gradient-to-r from-green-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent">
                    creativo
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Únete a CREA, donde la innovación se encuentra con la educación.
                Desarrollamos proyectos, organizamos eventos y creamos oportunidades
                para el crecimiento académico y profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start">
              <Link href="/contacto/aplicar">
              <Button className="text-sm font-medium cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Únete a CREA
              </Button>
              </Link>
          
            </div>

            <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 justify-center lg:justify-start mt-8 sm:mt-10 lg:mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-green-100 rounded-xl mb-2 mx-auto shadow-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-green-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-gray-900">29+</div>
                <div className="text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-gray-600">Miembros</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-yellow-100 rounded-xl mb-2 mx-auto shadow-lg">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-yellow-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-gray-900">4+</div>
                <div className="text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-blue-100 rounded-xl mb-2 mx-auto shadow-lg">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-gray-900">5+</div>
                <div className="text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-gray-600">Eventos</div>
              </div>
            </div>
          </div>

          {/* Logo Section - Visible en mobile, a la derecha en desktop */}
          <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/images/logo.png"
              alt="CREA Logo"
              width={400}
              height={400}
              className="drop-shadow-2xl mb-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] 2xl:w-[480px] 2xl:h-[480px]"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
