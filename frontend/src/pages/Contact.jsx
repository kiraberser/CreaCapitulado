import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      toast.success('¡Mensaje enviado exitosamente!', {
        description: 'Te contactaremos pronto.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor, inténtalo nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
      value: 'Universidad Nacional\nBogotá, Colombia',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-blue-100">
              ¿Tienes preguntas sobre CREA? ¿Quieres unirte o colaborar con nosotros? 
              ¡Nos encantaría escuchar de ti!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.subject}
                      onChange={handleInputChange}
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
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
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

              {/* Contact Information */}
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

                {/* Additional Info */}
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
                    te invitamos a conocer más sobre nuestros procesos de selección.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Proceso de Admisión
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
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
};

export default Contact;