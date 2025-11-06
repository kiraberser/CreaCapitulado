'use server';

import { sendNewsletter } from '@/api/newsletter';
import { createClient } from '@/utils/supabase/server';

export interface NewsletterFormState {
    success: boolean;
    message?: string;
}

export async function subscribeNewsletter(prevState: NewsletterFormState | null, formData: FormData) {
    try {
        const email = formData.get('email') as string;

        // Validación básica
        if (!email || !email.includes('@')) {
            return {
                success: false,
                message: 'Por favor ingresa un correo electrónico válido'
            };
        }

        // Normalizar email (minúsculas, trim)
        const normalizedEmail = email.toLowerCase().trim();

        // Crear cliente de Supabase
        const supabase = await createClient();

        // Verificar si el email ya existe en la base de datos
        const { data: existingNewsletter, error: checkError } = await supabase
            .from('Newsletter')
            .select('id, email')
            .eq('email', normalizedEmail)
            .maybeSingle(); // maybeSingle retorna null si no encuentra nada, en lugar de error

        if (checkError) {
            console.error('Error al verificar suscripción:', checkError);
            return {
                success: false,
                message: 'Error al verificar tu suscripción. Por favor, inténtalo nuevamente.'
            };
        }

        // Si el email ya existe, no enviar correo pero informar al usuario
        if (existingNewsletter) {
            console.log('\n=== SUSCRIPCIÓN DUPLICADA ===');
            console.log('Email:', normalizedEmail);
            console.log('Ya suscrito desde:', existingNewsletter);
            console.log('============================\n');

            return {
                success: true,
                message: '¡Ya estás suscrito a nuestro newsconstter! Revisa tu bandeja de entrada.'
            };
        }

        // Si no existe, guardar en Supabase
        const { data: newsletter, error: insertError } = await supabase
            .from('Newsletter')
            .insert([
                {
                    email: normalizedEmail,
                }
            ])
            .select()
            .single();

        if (insertError) {
            console.error('Error al guardar suscripción:', insertError);
            return {
                success: false,
                message: 'Error al guardar tu suscripción. Por favor, inténtalo nuevamente.'
            };
        }

        console.log('\n=== NUEVA SUSCRIPCIÓN AL NEWSLETTER ===');
        console.log('Email:', normalizedEmail);
        console.log('ID:', newsletter);
        console.log('========================================\n');

        // Enviar correo de bienvenida solo si es un nuevo suscriptor
        try {
            await sendNewsletter(normalizedEmail);
            return {
                success: true,
                message: '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.'
            };
        } catch (emailError: unknown) {
            // Si falla el envío del email pero ya se guardó en la BD, informar pero no fallar completamente
            console.error('Error al enviar email, pero suscripción guardada:', emailError);
            
            // Si es un error de configuración (API key faltante), informar al usuario
            if ((emailError as Error).message?.includes('configuración')) {
                return {
                    success: false,
                    message: 'Tu suscripción fue guardada, pero hubo un error al enviar el correo de confirmación. Por favor, contacta al administrador.'
                };
            }
            
            // Para otros errores de email, considerar éxito parcial (email guardado)
            return {
                success: true,
                message: '¡Te has suscrito exitosamente! Revisa tu bandeja de entrada.'
            };
        }
    } catch (error) {
        console.error('Error en subscribeNewsletter:', error);
        return {
            success: false,
            message: 'Error al procesar tu suscripción. Por favor, inténtalo nuevamente.'
        };
    }
}