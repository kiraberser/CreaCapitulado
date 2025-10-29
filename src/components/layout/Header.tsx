"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteCookie, getUsername } from '@/actions/cookies';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const pathname = usePathname();

  const router = useRouter();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Departamentos', href: '/departamentos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isAuthPage = pathname.startsWith("/auth");

  useEffect(() => {
    const getUsernameAsync = async () => {
      const username = await getUsername();
      setUsername(username || null);
    }
    getUsernameAsync();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAuthPage) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/5'
        : 'bg-white/90 backdrop-blur-md'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 p-2 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="CREA Logo"
                width={56}
                height={56}
                priority={true}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CREA
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Capítulo Estudiantil</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <span className="absolute inset-0 bg-blue-50 rounded-lg"></span>
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {username ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Bienvenido, {username}</span>
                <Button variant="ghost" className="text-sm cursor-pointer font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300" onClick={() => {
                  deleteCookie('username');
                  deleteCookie('accessToken');
                  router.push('/');
                }}>
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    className="text-sm cursor-pointer font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/auth/registro">
                  <Button className="text-sm font-medium cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center hover:shadow-md transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${pathname === item.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-100 mt-2">
                {username ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-600 text-center">
                      Bienvenido, {username}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                      onClick={() => {
                        deleteCookie('username');
                        deleteCookie('accessToken');
                        setIsMenuOpen(false);
                        router.push('/');
                      }}
                    >
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full justify-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                      >
                        Iniciar Sesión
                      </Button>
                    </Link>
                    <Link href="/auth/registro" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Únete a CREA
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


