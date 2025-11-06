'use server';

import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";

/**
 * Envía el newsletter usando Supabase Edge Functions (recomendado para evitar problemas de IP)
 * Esta función se ejecuta desde la infraestructura de Supabase, evitando problemas de IP
 */
export async function sendNewsletterViaSupabase(email: string) {
    try {
        // Usar service_role key para invocar Edge Functions desde el servidor
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!supabaseUrl || !supabaseServiceRoleKey) {
            console.error('=== ERROR DE CONFIGURACIÓN ===');
            console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓ Configurada' : '✗ NO configurada');
            console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓ Configurada' : '✗ NO configurada');
            console.error('================================');
            throw new Error('Configuración de Supabase no disponible para Edge Functions. Verifica las variables de entorno.');
        }

        console.log('Configuración verificada:');
        console.log('- Supabase URL:', supabaseUrl ? '✓' : '✗');
        console.log('- Service Role Key:', supabaseServiceRoleKey ? `✓ (${supabaseServiceRoleKey.substring(0, 20)}...)` : '✗');

        // Llamar directamente a la Edge Function usando fetch con autenticación Bearer
        const functionUrl = `${supabaseUrl}/functions/v1/send-newsletter-email`;
        
        console.log('Invoking Edge Function:', functionUrl);
        console.log('Email:', email);
        
        const response = await fetch(functionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${supabaseServiceRoleKey}`,
                'apikey': supabaseServiceRoleKey
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            const errorText = await response.text();
            let errorData;
            try {
                errorData = JSON.parse(errorText);
            } catch {
                errorData = { message: errorText };
            }
            
            console.error('=== ERROR AL INVOCAR EDGE FUNCTION ===');
            console.error('Status:', response.status);
            console.error('Status Text:', response.statusText);
            console.error('Error Data:', errorData);
            console.error('==========================================');
            
            if (response.status === 401) {
                throw new Error('Error 401: La SUPABASE_SERVICE_ROLE_KEY no es válida o la Edge Function no está desplegada. Verifica: 1) Que la key sea correcta, 2) Que la Edge Function esté desplegada en Supabase.');
            }
            
            throw new Error(`Error al invocar Edge Function: ${response.status} - ${errorData.message || response.statusText}`);
        }

        const data = await response.json();

        if (!data?.success) {
            console.error('Edge Function retornó error:', data);
            throw new Error(data?.error || 'Error desconocido al enviar email');
        }

        console.log('Newsletter enviado exitosamente vía Supabase Edge Function');
        return {
            success: true,
            message: '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.'
        };
    } catch (error) {
        console.error('Error en sendNewsletterViaSupabase:', error);
        return {
            success: false,
            message: 'Error al enviar email. Por favor, inténtalo nuevamente.'
        };
    }
}

/**
 * Envía el newsletter usando Brevo directamente desde el servidor de Vercel
 * Esta función requiere configurar BREVO_API_KEY en Vercel y puede tener problemas de IP
 */
export async function sendNewsletter(email: string) {
    try {
        // Verificar que la API key esté configurada
        const apiKey = process.env.BREVO_API_KEY;
        const templateId = process.env.BREVO_TEMPLATE_ID;
        
        if (!apiKey) {
            console.error('BREVO_API_KEY no está configurada en las variables de entorno');
            throw new Error('La configuración de email no está disponible');
        }

        // Crear una nueva instancia de la API en cada llamada
        const emailAPI = new TransactionalEmailsApi();
        
        // Configurar la autenticación correctamente
        emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

        // Crear el objeto de email
        const sendSmtpEmail = new SendSmtpEmail();
        sendSmtpEmail.to = [{ email }];
        
        if (templateId) {
            sendSmtpEmail.templateId = parseInt(templateId);
        } else {
            console.warn('BREVO_TEMPLATE_ID no está configurado, usando templateId por defecto: 3');
            sendSmtpEmail.templateId = 3;
        }

        // Enviar el email
        const response = await emailAPI.sendTransacEmail(sendSmtpEmail);
        
        console.log('Newsletter sent successfully:', response);
        
        return {
            success: true,
            message: '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.'
        };
    } catch (error: unknown) {
        console.error('Error sending newsletter:', error);
        
        // Extraer información del error de Brevo
        const errorResponse = (error as Error & { 
            status?: number;
            response?: { 
                status?: number;
                body?: unknown;
                text?: string;
            };
        }).response;
        
        const statusCode = errorResponse?.status || (error as Error & { status?: number }).status;
        const errorBody = errorResponse?.body;
        
        // Proporcionar mensajes de error más específicos
        if (statusCode === 401) {
            console.error('Error de autenticación: Verifica que BREVO_API_KEY sea correcta');
            throw new Error('Error de autenticación con el servicio de email. Verifica la configuración.');
        }
        
        // Error 403 generalmente indica restricciones de IP
        if (statusCode === 403) {
            console.error('Error 403 - Restricción de IP detectada');
            console.error('Detalles del error:', errorBody);
            console.error('SOLUCIÓN: Ve a la configuración de Brevo -> API Keys -> IP Restrictions');
            console.error('Si estás en desarrollo local, agrega tu IP o desactiva temporalmente las restricciones');
            console.error('Si estás en producción (Vercel, etc.), agrega las IPs del servidor o configura para permitir IPs dinámicas');
            throw new Error('Error de restricción de IP con el servicio de email. Verifica la configuración de IPs permitidas en Brevo.');
        }
        
        // Log detallado del error para debugging
        if (errorBody) {
            console.error('Detalles del error de Brevo:', JSON.stringify(errorBody, null, 2));
        }
        
        // Verificar si el mensaje de error menciona IP
        const errorMessage = (error as Error).message || '';
        if (errorMessage.toLowerCase().includes('ip') || errorMessage.toLowerCase().includes('forbidden')) {
            console.error('Error relacionado con IP detectado en el mensaje');
            throw new Error('Error de restricción de IP. Contacta al administrador para verificar la configuración de Brevo.');
        }
        
        throw error;
    }
}