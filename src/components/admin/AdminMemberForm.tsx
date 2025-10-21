"use client";
import React, { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { UserPlus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { departments } from '@/data/mockData';
import { addNewMember } from '@/actions/contact';

const initialState = {
  success: false,
  message: ''
};

interface AdminMemberFormProps {
  onClose: () => void;
}

export default function AdminMemberForm({ onClose }: AdminMemberFormProps) {
  const [memberState, memberAction, isMemberPending] = useActionState(addNewMember, initialState);
  
  // Estados para arrays dinámicos
  const [skills, setSkills] = useState(['']);
  const [achievements, setAchievements] = useState(['']);
  const [projects, setProjects] = useState(['']);

  const handleArrayChange = (field: 'skills' | 'achievements' | 'projects', index: number, value: string) => {
    if (field === 'skills') {
      const newArray = [...skills];
      newArray[index] = value;
      setSkills(newArray);
    } else if (field === 'achievements') {
      const newArray = [...achievements];
      newArray[index] = value;
      setAchievements(newArray);
    } else if (field === 'projects') {
      const newArray = [...projects];
      newArray[index] = value;
      setProjects(newArray);
    }
  };

  const addArrayItem = (field: 'skills' | 'achievements' | 'projects') => {
    if (field === 'skills') {
      setSkills([...skills, '']);
    } else if (field === 'achievements') {
      setAchievements([...achievements, '']);
    } else if (field === 'projects') {
      setProjects([...projects, '']);
    }
  };

  const removeArrayItem = (field: 'skills' | 'achievements' | 'projects', index: number) => {
    if (field === 'skills' && skills.length > 1) {
      setSkills(skills.filter((_, i) => i !== index));
    } else if (field === 'achievements' && achievements.length > 1) {
      setAchievements(achievements.filter((_, i) => i !== index));
    } else if (field === 'projects' && projects.length > 1) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    if (memberState?.success) {
      toast.success(memberState.message, {
        description: 'El nuevo integrante ha sido añadido al departamento.',
      });
      // Reset arrays
      setSkills(['']);
      setAchievements(['']);
      setProjects(['']);
    } else if (memberState?.message && !memberState?.success) {
      toast.error(memberState.message, {
        description: 'Por favor, inténtalo nuevamente.',
      });
    }
  }, [memberState]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Agregar Nuevo Miembro</h2>
            <p className="text-gray-600">Formulario administrativo completo</p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={onClose}
        >
          Cerrar Sesión
        </Button>
      </div>

      <form action={memberAction} className="space-y-8">
        {/* Información Básica */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Información Básica</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="member-name">Nombre Completo *</Label>
              <Input
                id="member-name"
                name="name"
                required
                placeholder="Ana García López"
              />
            </div>

            <div>
              <Label htmlFor="member-position">Posición *</Label>
              <Input
                id="member-position"
                name="position"
                required
                placeholder="Coordinador / Desarrollador / etc."
              />
            </div>

            <div>
              <Label htmlFor="member-email">Email *</Label>
              <Input
                id="member-email"
                name="email"
                type="email"
                required
                placeholder="email@crea.edu.co"
              />
            </div>

            <div>
              <Label htmlFor="member-phone">Teléfono *</Label>
              <Input
                id="member-phone"
                name="phone"
                type="tel"
                required
                placeholder="+57 300 123 4567"
              />
            </div>

            <div>
              <Label htmlFor="member-department">Departamento *</Label>
              <select
                id="member-department"
                name="department"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Seleccionar...</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.slug}>{dept.name}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="member-joinDate">Fecha de Ingreso *</Label>
              <Input
                id="member-joinDate"
                name="joinDate"
                required
                placeholder="Enero 2024"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="member-imageUrl">URL de Imagen de Perfil *</Label>
            <Input
              id="member-imageUrl"
              name="imageUrl"
              type="url"
              required
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <Label htmlFor="member-bio">Biografía *</Label>
            <Textarea
              id="member-bio"
              name="bio"
              required
              rows={4}
              placeholder="Descripción profesional del miembro..."
            />
          </div>
        </div>

        {/* Habilidades */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Habilidades</h3>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <Input
                name={`skill-${index}`}
                value={skill}
                onChange={(e) => handleArrayChange('skills', index, e.target.value)}
                placeholder={`Habilidad ${index + 1}`}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayItem('skills', index)}
                disabled={skills.length === 1}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => addArrayItem('skills')} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Agregar Habilidad
          </Button>
        </div>

        {/* Logros */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Logros y Reconocimientos</h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-3">
              <Input
                name={`achievement-${index}`}
                value={achievement}
                onChange={(e) => handleArrayChange('achievements', index, e.target.value)}
                placeholder={`Logro ${index + 1}`}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayItem('achievements', index)}
                disabled={achievements.length === 1}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => addArrayItem('achievements')} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Agregar Logro
          </Button>
        </div>

        {/* Proyectos */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Proyectos Destacados</h3>
          {projects.map((project, index) => (
            <div key={index} className="flex items-center gap-3">
              <Input
                name={`project-${index}`}
                value={project}
                onChange={(e) => handleArrayChange('projects', index, e.target.value)}
                placeholder={`Proyecto ${index + 1}`}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayItem('projects', index)}
                disabled={projects.length === 1}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => addArrayItem('projects')} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Agregar Proyecto
          </Button>
        </div>

        {/* Redes Sociales */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Redes Sociales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="member-linkedin">LinkedIn *</Label>
              <Input
                id="member-linkedin"
                name="linkedinUrl"
                required
                placeholder="linkedin.com/in/usuario"
              />
            </div>

            <div>
              <Label htmlFor="member-github">GitHub</Label>
              <Input
                id="member-github"
                name="githubUrl"
                placeholder="github.com/usuario"
              />
            </div>

            <div>
              <Label htmlFor="member-twitter">Twitter</Label>
              <Input
                id="member-twitter"
                name="twitterUrl"
                placeholder="@usuario"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6 text-lg"
          disabled={isMemberPending}
        >
          {isMemberPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Agregando Miembro...
            </>
          ) : (
            <>
              <UserPlus className="w-5 h-5 mr-2" />
              Agregar Miembro al Departamento
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

