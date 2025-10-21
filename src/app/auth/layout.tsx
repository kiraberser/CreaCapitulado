import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Panel Izquierdo - Branding & Design */}

      <div className="hidden md:flex md:flex-1 relative bg-gradient-to-br from-blue-600  to-blue-800 overflow-hidden">
        {/* Círculos decorativos animados */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob-slow"></div>
        </div>

        {/* Contenido del panel izquierdo */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white w-full">
          {/* Botón de regreso */}
          <Link 
            href="/" 
            className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm hover:bg-white/50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
          >
            <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Logo prominente */}
          <Link href="/" className="mb-8 group cursor-pointer">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              {/* Logo container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl group-hover:shadow-white/30 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="CREA Logo"
                  width={180}
                  height={180}
                  priority={true}
                  className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Texto principal */}
          <div className="text-center max-w-md space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Bienvenido a{' '}
              <span className="block text-yellow-300 mt-2">CREA</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Tu potencial creativo, nuestro compromiso
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Comunidad Activa</p>
                  <p className="text-sm text-blue-200">+150 miembros innovadores</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Proyectos Reales</p>
                  <p className="text-sm text-blue-200">Impacto en la comunidad</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Aprendizaje Continuo</p>
                  <p className="text-sm text-blue-200">Talleres y eventos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel Derecho - Formulario */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white min-h-screen md:min-h-0">
        {/* Mobile Logo & Back Button */}
        <div className="md:hidden absolute top-6 left-6 right-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-1.5">
              <Image
                src="/images/logo.png"
                alt="CREA Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CREA
            </span>
          </Link>
          
          <Link 
            href="/" 
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
        </div>

        <div className="w-full max-w-md mt-16 md:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
