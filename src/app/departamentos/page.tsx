import { Mail, ExternalLink } from 'lucide-react';
import { departments } from '@/data/mockData';

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Departamentos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los talentosos miembros de CREA organizados por áreas de especialización. 
            Cada departamento contribuye con su experiencia única para crear soluciones innovadoras.
          </p>
        </div>

        <div className="space-y-16">
          {departments.map((department) => (
            <div key={department.id} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 ${department.color} rounded-full mr-4`}></div>
                  <h2 className="text-3xl font-bold text-gray-900">{department.name}</h2>
                </div>
                <p className="text-lg text-gray-600">{department.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{member.position}</p>
                      
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full border"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-3 py-1 bg-gray-200 text-xs font-medium text-gray-600 rounded-full">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-center space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors duration-200"
                          title={`Enviar email a ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <button
                          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors duration-200"
                          title={`Ver perfil completo de ${member.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  ¿Te interesa unirte al departamento de {department.name}?
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Más Información
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ser parte de CREA?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Únete a nuestros departamentos y desarrolla tus habilidades junto a estudiantes 
            apasionados por la innovación y la tecnología.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Postúlate Ahora
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Conoce Más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


