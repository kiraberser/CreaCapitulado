'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useActionState } from 'react';
import { ArrowLeft, Send, Plus, X, Briefcase, Award, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { departments } from '@/data/mockData';
import { submitApplicationForm } from '@/actions/contact';

const initialState = {
    success: false,
    message: ''
};

export default function ApplyPage() {
    const [state, formAction, isPending] = useActionState(submitApplicationForm, initialState);
    const [skills, setSkills] = useState(['']);

    const handleSkillChange = (index: number, value: string) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    const addSkill = () => {
        setSkills([...skills, '']);
    };

    const removeSkill = (index: number) => {
        if (skills.length > 1) {
            const newSkills = skills.filter((_, i) => i !== index);
            setSkills(newSkills);
        }
    };

    // Mostrar toast cuando cambie el estado
    useEffect(() => {
        if (state?.success) {
            toast.success(state.message, {
                description: 'Revisaremos tu solicitud y te contactaremos pronto.',
            });
            // Reset skills
            setSkills(['']);
        } else if (state?.message && !state?.success) {
            toast.error(state.message, {
                description: 'Por favor, inténtalo nuevamente.',
            });
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/contacto" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver a Contacto
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Únete a CREA
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            ¿Listo para formar parte de un equipo innovador? Completa tu aplicación y comienza tu camino con nosotros.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                                        <Briefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Formulario de Aplicación</h2>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Los campos marcados con * son obligatorios. Completa tu información para que podamos conocerte mejor.
                                </p>
                            </div>

                            <form action={formAction} className="space-y-8">
                                {/* Información Personal */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                                            1
                                        </div>
                                        Información Personal
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="name">Nombre Completo *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Ej: Juan Pérez García"
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
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Teléfono/WhatsApp *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="+57 300 123 4567"
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Información del Departamento */}
                                <div className="space-y-6 pt-6 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                            2
                                        </div>
                                        Departamento e Intereses
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="department">Departamento de Interés *</Label>
                                            <select
                                                id="department"
                                                name="department"
                                                required
                                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Selecciona un departamento</option>
                                                {departments.map(dept => (
                                                    <option key={dept.id} value={dept.slug}>
                                                        {dept.icon} {dept.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <Label htmlFor="position">Posición Deseada *</Label>
                                            <Input
                                                id="position"
                                                name="position"
                                                type="text"
                                                required
                                                placeholder="Ej: Desarrollador Frontend"
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="bio">Cuéntanos sobre ti *</Label>
                                        <Textarea
                                            id="bio"
                                            name="bio"
                                            required
                                            placeholder="Describe tu experiencia, intereses y qué te apasiona..."
                                            rows={4}
                                            className="mt-2"
                                        />
                                        <p className="text-sm text-gray-500 mt-1">Mínimo 100 caracteres</p>
                                    </div>
                                </div>

                                {/* Habilidades */}
                                <div className="space-y-6 pt-6 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                                            3
                                        </div>
                                        Habilidades Técnicas
                                    </h3>

                                    <div className="space-y-3">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Input
                                                    type="text"
                                                    name={`skill-${index}`}
                                                    value={skill}
                                                    onChange={(e) => handleSkillChange(index, e.target.value)}
                                                    placeholder={`Habilidad ${index + 1} (Ej: React, Python, Figma)`}
                                                    className="flex-1"
                                                />
                                                {skills.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSkill(index)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        {skills.length < 5 ? (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={addSkill}
                                            className="w-full border-dashed"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Agregar Habilidad
                                        </Button>
                                        ):(
                                            <p className="text-md text-gray-500 mt-1 text-center text-red-500 font-bold">Máximo 5 habilidades</p>
                                        )}
                                    </div>
                                </div>

                                {/* Motivación y Disponibilidad */}
                                <div className="space-y-6 pt-6 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                                            4
                                        </div>
                                        Motivación y Disponibilidad
                                    </h3>

                                    <div>
                                        <Label htmlFor="whyJoin">¿Por qué quieres unirte a CREA? *</Label>
                                        <Textarea
                                            id="whyJoin"
                                            name="whyJoin"
                                            required
                                            placeholder="Cuéntanos qué te motiva a formar parte de nuestro equipo..."
                                            rows={4}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="experience">Experiencia Relevante</Label>
                                        <Textarea
                                            id="experience"
                                            name="experience"
                                            placeholder="Proyectos anteriores, logros, contribuciones..."
                                            rows={3}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="availability">Disponibilidad Horaria *</Label>
                                        <select
                                            id="availability"
                                            name="availability"
                                            required
                                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Selecciona tu disponibilidad</option>
                                            <option value="full-time">Tiempo Completo (20+ horas/semana)</option>
                                            <option value="part-time">Medio Tiempo (10-20 horas/semana)</option>
                                            <option value="flexible">Flexible (Menos de 10 horas/semana)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold"
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Enviando Aplicación...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Enviar Aplicación
                                            </>
                                        )}
                                    </Button>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Al enviar esta aplicación, aceptas que procesemos tu información de acuerdo a nuestra política de privacidad.
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Briefcase className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Proceso Simple</h3>
                                <p className="text-sm text-gray-600">Revisión en 5-7 días hábiles</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Desarrollo Continuo</h3>
                                <p className="text-sm text-gray-600">Capacitación y mentoría</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Code className="w-6 h-6 text-pink-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Proyectos Reales</h3>
                                <p className="text-sm text-gray-600">Experiencia práctica valiosa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

