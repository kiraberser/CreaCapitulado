// Mock data for the CREA application

export const departments = [
  {
    id: 1,
    name: "Desarrollo de Software",
    description: "Creación de aplicaciones web y móviles innovadoras",
    color: "bg-blue-500",
    members: [
      {
        id: 1,
        name: "Ana García López",
        position: "Coordinador",
        email: "ana.garcia@crea.edu.co",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        skills: ["React", "Node.js", "Python", "MongoDB"]
      },
      {
        id: 2,
        name: "Carlos Rodríguez",
        position: "Desarrollador Frontend",
        email: "carlos.rodriguez@crea.edu.co",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        skills: ["Vue.js", "TypeScript", "CSS", "Figma"]
      },
      {
        id: 3,
        name: "María Fernández",
        position: "Desarrolladora Backend",
        email: "maria.fernandez@crea.edu.co",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        skills: ["Django", "PostgreSQL", "Docker", "AWS"]
      }
    ]
  },
  {
    id: 2,
    name: "Diseño y UX/UI",
    description: "Creación de experiencias digitales excepcionales",
    color: "bg-green-500",
    members: [
      {
        id: 4,
        name: "Laura Martínez",
        position: "Coordinadora de Diseño",
        email: "laura.martinez@crea.edu.co",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      },
      {
        id: 5,
        name: "Diego Morales",
        position: "Diseñador UX",
        email: "diego.morales@crea.edu.co",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        skills: ["Sketch", "InVision", "User Testing", "Wireframing"]
      }
    ]
  },
  {
    id: 3,
    name: "Marketing Digital",
    description: "Estrategias digitales para el crecimiento y la comunicación",
    color: "bg-yellow-500",
    members: [
      {
        id: 6,
        name: "Sofía Hernández",
        position: "Coordinadora Marketing",
        email: "sofia.hernandez@crea.edu.co",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        skills: ["Google Analytics", "Social Media", "Content Strategy", "SEO"]
      },
      {
        id: 7,
        name: "Alejandro Ruiz",
        position: "Community Manager",
        email: "alejandro.ruiz@crea.edu.co",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        skills: ["Instagram", "TikTok", "Copywriting", "Canva"]
      }
    ]
  },
  {
    id: 4,
    name: "Investigación e Innovación",
    description: "Proyectos de investigación y desarrollo tecnológico",
    color: "bg-red-500",
    members: [
      {
        id: 8,
        name: "Dr. Roberto Silva",
        position: "Director de Investigación",
        email: "roberto.silva@crea.edu.co",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
        skills: ["Machine Learning", "Data Science", "Research Methodology", "Python"]
      },
      {
        id: 9,
        name: "Valentina López",
        position: "Investigadora Junior",
        email: "valentina.lopez@crea.edu.co",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        skills: ["R", "Statistics", "Data Visualization", "Academic Writing"]
      }
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "El Futuro de la Inteligencia Artificial en la Educación",
    excerpt: "Exploramos cómo la IA está transformando la manera en que aprendemos y enseñamos, creando nuevas oportunidades educativas.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    author: "Ana García López",
    date: "2024-01-15",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Metodologías Ágiles para Estudiantes",
    excerpt: "Cómo implementar Scrum y Kanban en proyectos estudiantiles para mejorar la productividad y colaboración en equipo.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: "Carlos Rodríguez",
    date: "2024-01-12",
    category: "Productividad",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "Diseño Inclusivo: Creando para Todos",
    excerpt: "La importancia del diseño universal en la creación de productos digitales accesibles para todas las personas.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: "Laura Martínez",
    date: "2024-01-10",
    category: "Diseño",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    readTime: "7 min"
  },
  {
    id: 4,
    title: "Emprendimiento Universitario: De la Idea al MVP",
    excerpt: "Una guía práctica para estudiantes que quieren convertir sus ideas innovadoras en productos mínimos viables.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: "Sofía Hernández",
    date: "2024-01-08",
    category: "Emprendimiento",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    readTime: "10 min"
  },
  {
    id: 5,
    title: "Sostenibilidad y Tecnología Verde",
    excerpt: "Cómo la tecnología puede contribuir a un futuro más sostenible y qué papel jugamos los estudiantes en este cambio.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: "Dr. Roberto Silva",
    date: "2024-01-05",
    category: "Sostenibilidad",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop",
    readTime: "9 min"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "María José Ramírez",
    position: "Ex-miembro CREA, Ingeniera de Software en Google",
    content: "CREA me brindó las herramientas y la experiencia necesarias para desarrollarme profesionalmente. Los proyectos colaborativos y el ambiente de innovación fueron fundamentales en mi formación.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Andrés Gómez",
    position: "CEO de TechStartup Colombia",
    content: "El networking y las oportunidades de crecimiento que encontré en CREA fueron invaluables. Aquí nació la idea de mi startup y encontré a mi co-fundador.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Catalina Vásquez",
    position: "Diseñadora UX en Mercado Libre",
    content: "En CREA aprendí a trabajar en equipos multidisciplinarios y desarrollé habilidades que uso todos los días en mi trabajo. Es una comunidad increíble.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];


