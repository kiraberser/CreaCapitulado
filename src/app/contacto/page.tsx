"use client";
import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import ContactForm from '../../components/contact/ContactForm';
import AdminMemberForm from '../../components/admin/AdminMemberForm';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'admin'>('contact');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminAuth = () => {
    if (adminPassword === 'admin123') {
      setIsAdminMode(true);
      toast.success('Modo administrador activado');
    } else {
      toast.error('Contraseña incorrecta');
    }
  };

  const handleAdminClose = () => {
    setIsAdminMode(false);
    setAdminPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ¿Tienes preguntas sobre CREA? ¿Quieres unirte o colaborar con nosotros? 
              ¡Nos encantaría escuchar de ti!
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'contact'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Contacto General
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'admin'
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Shield className="w-5 h-5" />
                Panel Admin
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'contact' ? (
              <ContactForm />
            ) : (
              // Admin Panel
              <div className="max-w-5xl mx-auto">
                {!isAdminMode ? (
                  // Admin Login
                  <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-auto">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Acceso Administrativo</h2>
                      <p className="text-gray-600">Ingresa la contraseña para continuar</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Input
                        type="password"
                        placeholder="Contraseña de administrador"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdminAuth()}
                      />
                      <Button
                        onClick={handleAdminAuth}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                      >
                        Ingresar
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Demo: usa &quot;admin123&quot; como contraseña
                      </p>
                    </div>
                  </div>
                ) : (
                  <AdminMemberForm onClose={handleAdminClose} />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h3>
            <p className="text-gray-600 mb-8">
              Nos encontramos en el campus de la Universidad Nacional en Bogotá, Colombia.
            </p>
            <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-600">
                [Mapa interactivo será integrado aquí]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


