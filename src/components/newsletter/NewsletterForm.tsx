"use client";

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
import { subscribeNewsletter } from '@/actions/newsletter';

const initialState = {
    success: false,
    message: ''
};

interface NewsletterFormProps {
    className?: string;
    variant?: 'default' | 'compact' | 'inline';
}

export default function NewsletterForm({ className = '', variant = 'default' }: NewsletterFormProps) {
    const [newsletterState, newsletterAction, isNewsletterPending] = useActionState(subscribeNewsletter, initialState);

    useEffect(() => {
        if (newsletterState?.success) {
            toast.success(newsletterState.message || '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.', {
                duration: 4000,
            });
        } else if (newsletterState?.message && !newsletterState?.success) {
            toast.error(newsletterState.message || 'Error al procesar tu suscripción. Por favor, inténtalo nuevamente.', {
                duration: 4000,
            });
        }
    }, [newsletterState]);

    // Variante compacta (solo input y botón)
    if (variant === 'compact') {
        return (
            <form action={newsletterAction} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
                <Input
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-blue-400"
                    disabled={isNewsletterPending}
                />
                <Button
                    type="submit"
                    disabled={isNewsletterPending}
                    className="cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white whitespace-nowrap"
                >
                    {isNewsletterPending ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Enviando...</span>
                        </>
                    ) : (
                        <>
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">Suscribirse</span>
                        </>
                    )}
                </Button>
            </form>
        );
    }

    // Variante inline (en una línea)
    if (variant === 'inline') {
        return (
            <form action={newsletterAction} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
                <div className="flex-1">
                    <Input
                        name="email"
                        type="email"
                        required
                        placeholder="Ingresa tu correo electrónico"
                        className="w-full"
                        disabled={isNewsletterPending}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={isNewsletterPending}
                    className="cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                    {isNewsletterPending ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Mail className="w-4 h-4 mr-2" />
                            Suscribirse
                        </>
                    )}
                </Button>
            </form>
        );
    }

    // Variante por defecto (con label y descripción)
    return (
        <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                        Newsletter CREA
                    </h3>
                </div>
                <p className="text-gray-600 text-sm">
                    Suscríbete para recibir las últimas novedades, eventos y recursos exclusivos directamente en tu bandeja de entrada.
                </p>
            </div>

            <form action={newsletterAction} className="space-y-4">
                <div>
                    <Label htmlFor="newsletter-email">Correo Electrónico</Label>
                    <Input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="mt-2"
                        disabled={isNewsletterPending}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    disabled={isNewsletterPending}
                >
                    {isNewsletterPending ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Mail className="w-4 h-4 mr-2" />
                            Suscribirse al Newsletter
                        </>
                    )}
                </Button>
            </form>

            {newsletterState?.success && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800">
                        {newsletterState.message}
                    </p>
                </div>
            )}
        </div>
    );
}

