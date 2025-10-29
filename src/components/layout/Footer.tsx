"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  if (isAuthPage) return null;
  return (
    <footer className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Decorative circles - similar to HeroSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14 bg-white rounded-xl shadow-lg p-2 hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/logo.png" 
                  alt="CREA Logo" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-white-400 bg-clip-text text-transparent">
                <span className="text-white">CREA</span>
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              <span className="font-semibold text-white">Tu potencial creativo, nuestro compromiso.</span>
              <br />
              Comunidad estudiantil dedicada a la administración, creatividad y desarrollo profesional.
            </p>

            {/* Social Media with modern design */}
            <div className="flex flex-wrap gap-3">
              <Link 
                href="https://www.facebook.com/CREA.ITV" 
                target="_blank"
                className="group"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link 
                href="https://www.instagram.com/crea_itver/" 
                target="_blank"
                className="group"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
                { href: '/departamentos', label: 'Departamentos' },
                { href: '/blog', label: 'Blog' },
                { href: '/contacto', label: 'Contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@crea.edu.co" 
                  className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">info@crea.edu.co</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5712345678" 
                  className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="font-medium">+57 (1) 234-5678</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="font-medium">Instituto Tecnologico de<br />Veracruz, Mexico</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 <span className="font-semibold text-white">CREA</span> - Capítulo Estudiantil. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


