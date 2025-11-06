import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";

export async function sendNewsletter(email: string) {
    try {
        // Verificar que la API key esté configurada
        const apiKey = process.env.BREVO_API_KEY;
        
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
        sendSmtpEmail.templateId = 1;

        // Enviar el email
        const response = await emailAPI.sendTransacEmail(sendSmtpEmail);
        
        console.log('Newsletter sent successfully:', response);
        
        return {
            success: true,
            message: '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.'
        };
    } catch (error: any) {
        console.error('Error sending newsletter:', error);
        
        // Proporcionar mensajes de error más específicos
        if (error.status === 401 || error.response?.status === 401) {
            console.error('Error de autenticación: Verifica que BREVO_API_KEY sea correcta');
            throw new Error('Error de autenticación con el servicio de email. Verifica la configuración.');
        }
        
        if (error.response?.body) {
            console.error('Detalles del error:', error.response.body);
        }
        
        throw error;
    }
}