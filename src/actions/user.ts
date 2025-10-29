'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export interface RegisterFormState {
    success: boolean;
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export interface LoginFormState {
    success: boolean;
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

const registerSchema = z.object({
    firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmPassword: z.string(),
    career: z.string().min(1, 'Debes seleccionar una carrera'),
    semester: z.string().min(1, 'Debes seleccionar un semestre'),
    acceptTerms: z.string().refine((val) => val === 'on', 'Debes aceptar los términos y condiciones')
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
});

const loginSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(1, 'La contraseña es requerida'),
    rememberMe: z.string().optional()
});

export async function registerUser(prevState: RegisterFormState | null, formData: FormData) {
    try {
        const rawData = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
            career: formData.get('career') as string,
            semester: formData.get('semester') as string,
            acceptTerms: formData.get('acceptTerms') as string
        };

        // Validar con Zod
        const result = registerSchema.safeParse(rawData);

        if (!result.success) {
            const errors: { [key: string]: string[] } = {};
            result.error.issues.forEach((error) => {
                const path = error.path[0] as string;
                if (!errors[path]) {
                    errors[path] = [];
                }
                errors[path].push(error.message);
            });

            return {
                success: false,
                message: 'Por favor corrige los errores en el formulario',
                errors
            };
        }

        const dataForm = result.data;

        // Crear cliente de Supabase
        const supabase = await createClient();

        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('\n=== NUEVO REGISTRO DE USUARIO ===');
        console.log('Nombre:', dataForm.firstName, dataForm.lastName);
        console.log('Email:', dataForm.email);
        console.log('Carrera:', dataForm.career);
        console.log('Semestre:', dataForm.semester);
        console.log('\nDatos completos:');
        console.log(JSON.stringify(dataForm, null, 2));
        console.log('==================================\n');

        const {data, error} = await supabase.auth.signUp({
            email: dataForm.email,
            password: dataForm.password,
            options: {
                data: {
                    first_name: dataForm.firstName,
                    last_name: dataForm.lastName,
                    career: dataForm.career,
                    semester: dataForm.semester,
                    accept_terms: dataForm.acceptTerms
                }
            }
        })

        if (error) {
            console.error('Error en registerUser:', error);
            return {
                success: false,
                message: 'Error al crear la cuenta. Por favor, intenta nuevamente.'
            };
        }

        console.log('Usuario creado exitosamente:', data);

        return {
            success: true,
            message: '¡Cuenta creada exitosamente! Ya puedes iniciar sesión con tu nueva cuenta.'
        };
    } catch (error) {
        console.error('Error en registerUser:', error);
        return {
            success: false,
            message: 'Error al crear la cuenta. Por favor, intenta nuevamente.'
        };
    }
}

export async function loginUser(prevState: LoginFormState | null, formData: FormData) {
    try {
        const rawData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            rememberMe: formData.get('rememberMe') as string || ''
        };

        // Validar con Zod
        const result = loginSchema.safeParse(rawData);
        
        if (!result.success) {
            const errors: { [key: string]: string[] } = {};
            result.error.issues.forEach((error) => {
                const path = error.path[0] as string;
                if (!errors[path]) {
                    errors[path] = [];
                }
                errors[path].push(error.message);
            });

            return {
                success: false,
                message: 'Por favor corrige los errores en el formulario',
                errors
            };
        }

        const dataForm = result.data;

        // Crear cliente de Supabase
        const supabase = await createClient();

        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('\n=== INTENTO DE INICIO DE SESIÓN ===');
        console.log('Email:', dataForm.email);
        console.log('Recordarme:', dataForm.rememberMe === 'on');
        console.log('===================================\n');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: dataForm.email,
            password: dataForm.password,
        });

        if (error) {
            console.error('Error en loginUser:', error);
            return {
                success: false,
                message: 'Credenciales inválidas. Por favor, verifica tu email y contraseña.'
            };
        }

        console.log('Usuario autenticado exitosamente:', data);

        // Obtener el nombre del usuario desde los metadatos
        const userMetaData = data.user?.user_metadata;
        const firstName = userMetaData?.first_name || '';
        const lastName = userMetaData?.last_name || '';
        const userDisplayName = `${firstName} ${lastName}`.trim() || data.user?.email || 'Usuario';

        const cookieStore = await cookies();
        cookieStore.set('username', userDisplayName);
        cookieStore.set('accessToken', data.session?.access_token || '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 días
            path: '/'
        });

        revalidatePath('/');

        return {
            success: true,
            message: '¡Bienvenido de vuelta!'
        };
    } catch (error) {
        console.error('Error en loginUser:', error);
        return {
            success: false,
            message: 'Error al iniciar sesión. Por favor, intenta nuevamente.'
        };
    }
}

