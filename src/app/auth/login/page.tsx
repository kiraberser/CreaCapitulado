"use client";

import React, { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import toast, { Toaster } from 'react-hot-toast';
import { loginUser, type LoginFormState } from '@/actions/user';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState<LoginFormState | null, FormData>(
    loginUser,
    null
  );
  
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // Manejar cambios de estado y mostrar toasts
  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message || '¡Bienvenido de vuelta!');
        // Redirigir después de login exitoso
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        toast.error(state.message || 'Error al iniciar sesión');
      }
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <Link href="/" className="absolute bg-white rounded-full p-2 top-4 left-4 shadow-md cursor-pointer">
        <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer" /> 
      </Link>
      <div className="w-full max-w-md bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-2xl p-4">
        <div className="text-center mb-8 rounded-2xl p-4">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-yellow-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">CREA</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Iniciar Sesión
          </h1>
          <p className="text-gray-600">
            Accede a tu cuenta de miembro CREA
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className={`pl-10 ${state?.errors?.email ? 'border-red-500' : ''}`}
                />
              </div>
              {state?.errors?.email && (
                <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Tu contraseña"
                  className={`pl-10 pr-10 ${state?.errors?.password ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {state?.errors?.password && (
                <p className="text-red-500 text-sm mt-1">{state.errors.password[0]}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Recordarme
                </Label>
                <input type="hidden" name="rememberMe" value={rememberMe ? 'on' : ''} />
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">Iniciar Sesión</span>
                </>
              )}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => toast('Próximamente disponible', { icon: 'ℹ️' })}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Iniciar con Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => toast('Próximamente disponible', { icon: 'ℹ️' })}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Iniciar con Facebook
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/auth/registro" className="text-blue-600 hover:text-blue-800 font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}


