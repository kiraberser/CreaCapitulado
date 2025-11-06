"use client";
import React, { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import toast, {Toaster} from 'react-hot-toast';

import { registerUser, type RegisterFormState } from '@/actions/user';
import { useRouter } from 'next/navigation';
import { departmentsSelect as careers, semesters } from '@/data/mockData';

export default function RegisterPage() {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState<RegisterFormState | null, FormData>(
    registerUser,
    null
  );
  
  // Solo mantenemos estado para campos que no se pueden controlar directamente (Select, Checkbox)
  const [career, setCareer] = React.useState('');
  const [semester, setSemester] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  // Manejar cambios de estado y mostrar toasts
  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message || '¡Cuenta creada exitosamente! Ya puedes iniciar sesión con tu nueva cuenta.');
        // Resetear formulario después de éxito
        if (formRef.current) {
          formRef.current.reset();
          setCareer('');
          setSemester('');
          setAcceptTerms(false);
        }
        // Opcional: redirigir después de 2 segundos
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000);
      } else {
        const errorMessage = state.message || 'Error al crear la cuenta';
        toast.error(errorMessage);
      }
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 max-w-md border-2 border-gray-200 rounded-2xl p-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-yellow-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">CREA</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Únete a CREA
          </h1>
          <p className="text-gray-600">
            Crea tu cuenta y forma parte de nuestra comunidad
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Nombre</Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName">Apellido</Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Tu apellido"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

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
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="career">Carrera</Label>
                <Select onValueChange={setCareer} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona tu carrera" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    {careers.map((careerOption) => (
                      <SelectItem className="bg-white cursor-pointer text-gray-900 hover:bg-gray-100" key={careerOption} value={careerOption}>
                        {careerOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="semester">Semestre</Label>
                <Select onValueChange={setSemester}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Semestre" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    {semesters.map((semesterOption) => (
                      <SelectItem className="bg-white cursor-pointer text-gray-900 hover:bg-gray-100" key={semesterOption} value={semesterOption}>
                        {semesterOption}° Semestre
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
                  placeholder="Mínimo 8 caracteres"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="Confirma tu contraseña"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                className="mt-1"
              />
              <Label htmlFor="acceptTerms" className="text-sm text-gray-600">
                Acepto los{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                  términos y condiciones
                </Link>
                {' '}y la{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                  política de privacidad
                </Link>
              </Label>
            </div>

            {/* Campos ocultos para enviar datos al FormData */}
            <input type="hidden" name="career" value={career} />
            <input type="hidden" name="semester" value={semester} />
            <input type="hidden" name="acceptTerms" value={acceptTerms ? 'on' : ''} />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creando cuenta...
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">Crear Cuenta</span>
                </>
              )}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}


