"use client";
import React, { useEffect } from 'react';
import { useActionState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { submitContactForm } from '@/actions/contact';

const initialState = {
  success: false,
  message: ''
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@crea.edu.co',
    link: 'mailto:info@crea.edu.co'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+57 (1) 234-5678',
    link: 'tel:+5712345678'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Instituto Tecnologico de Veracruz',
    link: 'https://maps.google.com'
  }
];

export default function ContactForm() {
  const [contactState, contactAction, isContactPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (contactState?.success) {
      toast.success(contactState.message, {
        description: 'Te contactaremos pronto.',
      });
    } else if (contactState?.message && !contactState?.success) {
      toast.error(contactState.message, {
        description: 'Por favor, inténtalo nuevamente.',
      });
    }
  }, [contactState]);

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Envíanos un Mensaje
          </h2>
          <p className="text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <form action={contactAction} className="space-y-6">
          <div>
            <Label htmlFor="name">Nombre Completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre completo"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email">Correo Electrónico *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="subject">Asunto *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="¿De qué se trata tu mensaje?"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              className="mt-2"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isContactPending}
          >
            {isContactPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </>
            )}
          </Button>
        </form>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Información de Contacto
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Puedes contactarnos a través de cualquiera de estos medios. 
            Estamos aquí para ayudarte y responder todas tus preguntas.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              Tiempo de Respuesta
            </h3>
          </div>
          <p className="text-gray-600">
            Normalmente respondemos dentro de 24-48 horas. Para consultas urgentes, 
            puedes contactarnos directamente por WhatsApp o teléfono.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ¿Quieres Unirte a CREA?
          </h3>
          <p className="text-gray-600 mb-4">
            Si estás interesado en formar parte de nuestro equipo, 
            completa nuestro formulario de aplicación.
          </p>
          <Link href="/contacto/aplicar">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Aplicar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

