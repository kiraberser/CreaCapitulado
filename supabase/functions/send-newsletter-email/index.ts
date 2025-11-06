import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY")
const BREVO_TEMPLATE_ID = Deno.env.get("BREVO_TEMPLATE_ID") ?? '3'

serve(async (req: Request) => {
    // Permitir CORS
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            },
        })
    }

    try {
        // Solo permitir POST
        if (req.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), {
                status: 405,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
        }

        const { email } = await req.json()

        if (!email || !email.includes('@')) {
            return new Response(JSON.stringify({ error: 'Email inválido' }), {
                status: 400,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
        }

        if (!BREVO_API_KEY) {
            console.error('BREVO_API_KEY no está configurada')
            return new Response(JSON.stringify({ error: 'Config no disponible' }), {
                status: 500,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
        }

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'api-key': BREVO_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: [{ email }],
                templateId: Number(BREVO_TEMPLATE_ID),
            }),
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            console.error('Error de Brevo:', response.status, errorData)
            return new Response(JSON.stringify({ error: 'Error al enviar email', details: errorData }), {
                status: response.status,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
        }

        const data = await response.json()
        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })

    } catch (error) {
        console.error('Error en Edge Function:', error)
        return new Response(JSON.stringify({ error: 'Error interno del servidor', message: error.message }), {
            status: 500,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
    }
})

