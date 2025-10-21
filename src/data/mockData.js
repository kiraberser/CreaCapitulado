// Mock data for the CREA application

export const departments = [
  {
    id: 1,
    slug: "desarrollo-software",
    name: "Desarrollo de Software",
    description: "Creación de aplicaciones web y móviles innovadoras",
    longDescription: "Nuestro equipo de desarrollo está comprometido con la creación de soluciones tecnológicas de vanguardia. Trabajamos con las últimas tecnologías y frameworks para desarrollar aplicaciones que impactan positivamente en la comunidad universitaria.",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-700",
    icon: "💻",
    members: [
      {
        id: 1,
        slug: "ana-garcia",
        name: "Ana García López",
        position: "Coordinador",
        email: "ana.garcia@crea.edu.co",
        phone: "+57 300 123 4567",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Apasionada por el desarrollo full-stack y la arquitectura de software. Con 3 años de experiencia en proyectos universitarios y startups, me especializo en crear soluciones escalables y eficientes.",
        skills: ["React", "Node.js", "Python", "MongoDB", "AWS", "Docker"],
        achievements: ["Líder de 5 proyectos exitosos", "Ganadora Hackathon Nacional 2023", "Certificación AWS Solutions Architect"],
        social: {
          linkedin: "linkedin.com/in/anagarcia",
          github: "github.com/anagarcia",
          twitter: "@anagarcia_dev"
        },
        joinDate: "Enero 2022",
        projects: ["Sistema de Gestión Académica", "App de Movilidad Campus", "Portal Estudiantil"]
      },
      {
        id: 2,
        slug: "carlos-rodriguez",
        name: "Carlos Rodríguez",
        position: "Desarrollador Frontend",
        email: "carlos.rodriguez@crea.edu.co",
        phone: "+57 301 234 5678",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Especialista en crear interfaces de usuario intuitivas y atractivas. Me encanta transformar diseños complejos en código limpio y mantenible.",
        skills: ["Vue.js", "TypeScript", "CSS", "Figma", "Tailwind", "Animation"],
        achievements: ["UI/UX Award 2023", "Contributor Open Source", "Speaker en ConferenciaJS"],
        social: {
          linkedin: "linkedin.com/in/carlosrodriguez",
          github: "github.com/carlosr",
          twitter: "@carlos_frontend"
        },
        joinDate: "Marzo 2022",
        projects: ["Rediseño Portal CREA", "Dashboard Analytics", "Sistema de Componentes UI"]
      },
      {
        id: 3,
        slug: "maria-fernandez",
        name: "María Fernández",
        position: "Desarrolladora Backend",
        email: "maria.fernandez@crea.edu.co",
        phone: "+57 302 345 6789",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Experta en arquitecturas de backend robustas y APIs escalables. Mi pasión es optimizar el rendimiento y garantizar la seguridad de las aplicaciones.",
        skills: ["Django", "PostgreSQL", "Docker", "AWS", "Redis", "GraphQL"],
        achievements: ["Certificación Django Advanced", "Optimización de API 300%", "Mentora Backend 10+ estudiantes"],
        social: {
          linkedin: "linkedin.com/in/mariafernandez",
          github: "github.com/mariaf",
          twitter: "@maria_backend"
        },
        joinDate: "Agosto 2021",
        projects: ["API REST Unificada", "Sistema de Microservicios", "Backend Chat en Tiempo Real"]
      }
    ]
  },
  {
    id: 2,
    slug: "diseno-ux-ui",
    name: "Diseño y UX/UI",
    description: "Creación de experiencias digitales excepcionales",
    longDescription: "Creamos experiencias digitales memorables centradas en el usuario. Combinamos investigación, diseño visual y usabilidad para desarrollar productos que las personas aman usar.",
    color: "bg-green-500",
    gradient: "from-green-500 to-green-700",
    icon: "🎨",
    members: [
      {
        id: 4,
        slug: "laura-martinez",
        name: "Laura Martínez",
        position: "Coordinadora de Diseño",
        email: "laura.martinez@crea.edu.co",
        phone: "+57 303 456 7890",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bio: "Diseñadora con enfoque en crear experiencias inclusivas y accesibles. Creo firmemente que el buen diseño debe ser para todos.",
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems", "Accessibility"],
        achievements: ["Diseño Inclusivo Award", "Design System CREA Creator", "Mentora 15+ diseñadores"],
        social: {
          linkedin: "linkedin.com/in/lauramartinez",
          behance: "behance.net/lauramartinez",
          dribbble: "dribbble.com/lauramartinez"
        },
        joinDate: "Febrero 2021",
        projects: ["CREA Design System", "App Inclusiva Campus", "Rediseño Plataforma Virtual"]
      },
      {
        id: 5,
        slug: "diego-morales",
        name: "Diego Morales",
        position: "Diseñador UX",
        email: "diego.morales@crea.edu.co",
        phone: "+57 304 567 8901",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bio: "Especialista en investigación de usuarios y arquitectura de información. Me apasiona entender las necesidades reales de los usuarios para crear soluciones efectivas.",
        skills: ["Sketch", "InVision", "User Testing", "Wireframing", "Journey Mapping", "A/B Testing"],
        achievements: ["User Research Specialist", "5 estudios publicados", "UX Optimization +40%"],
        social: {
          linkedin: "linkedin.com/in/diegomorales",
          behance: "behance.net/diegomorales",
          twitter: "@diego_ux"
        },
        joinDate: "Junio 2022",
        projects: ["Research Sistema Académico", "UX Flow App Móvil", "Testing Plataforma CREA"]
      }
    ]
  },
  {
    id: 3,
    slug: "marketing-digital",
    name: "Marketing Digital",
    description: "Estrategias digitales para el crecimiento y la comunicación",
    longDescription: "Conectamos con la comunidad a través de estrategias digitales innovadoras. Creamos contenido relevante y campañas que generan impacto real.",
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-orange-500",
    icon: "📱",
    members: [
      {
        id: 6,
        slug: "sofia-hernandez",
        name: "Sofía Hernández",
        position: "Coordinadora Marketing",
        email: "sofia.hernandez@crea.edu.co",
        phone: "+57 305 678 9012",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        bio: "Estratega digital con pasión por el data-driven marketing. Creo en el poder de los datos para crear campañas que realmente conecten con las audiencias.",
        skills: ["Google Analytics", "Social Media", "Content Strategy", "SEO", "Email Marketing", "Data Analysis"],
        achievements: ["Crecimiento 200% RRSS", "Google Analytics Certified", "Campaña Viral 1M+ alcance"],
        social: {
          linkedin: "linkedin.com/in/sofiahernandez",
          twitter: "@sofia_marketing",
          instagram: "@sofia.mkt"
        },
        joinDate: "Enero 2021",
        projects: ["Estrategia Digital CREA", "Campaña Nuevo Semestre", "Newsletter Mensual"]
      },
      {
        id: 7,
        slug: "alejandro-ruiz",
        name: "Alejandro Ruiz",
        position: "Community Manager",
        email: "alejandro.ruiz@crea.edu.co",
        phone: "+57 306 789 0123",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Creador de contenido y gestor de comunidades. Me encanta crear historias que conecten emocionalmente y generen conversación.",
        skills: ["Instagram", "TikTok", "Copywriting", "Canva", "Video Editing", "Community Building"],
        achievements: ["Comunidad 50K+ miembros", "Contenido Viral 5M+ views", "Engagement Rate +8%"],
        social: {
          linkedin: "linkedin.com/in/alejandroruiz",
          twitter: "@alex_community",
          tiktok: "@alex.crea"
        },
        joinDate: "Abril 2022",
        projects: ["CREA en TikTok", "Serie de Videos Campus", "Gestión Comunidad Discord"]
      }
    ]
  },
  {
    id: 4,
    slug: "investigacion-innovacion",
    name: "Investigación e Innovación",
    description: "Proyectos de investigación y desarrollo tecnológico",
    longDescription: "Exploramos las fronteras de la tecnología a través de la investigación aplicada. Desarrollamos proyectos que contribuyen al avance científico y tecnológico.",
    color: "bg-red-500",
    gradient: "from-red-500 to-pink-500",
    icon: "🔬",
    members: [
      {
        id: 8,
        slug: "roberto-silva",
        name: "Dr. Roberto Silva",
        position: "Director de Investigación",
        email: "roberto.silva@crea.edu.co",
        phone: "+57 307 890 1234",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
        bio: "PhD en Ciencias de la Computación con especialización en Machine Learning. Apasionado por aplicar la IA para resolver problemas reales en la educación.",
        skills: ["Machine Learning", "Data Science", "Research Methodology", "Python", "TensorFlow", "Academic Writing"],
        achievements: ["10+ papers publicados", "PhD en Computer Science", "Proyecto financiado Colciencias"],
        social: {
          linkedin: "linkedin.com/in/robertosilva",
          github: "github.com/drsilva",
          scholar: "scholar.google.com/robertosilva"
        },
        joinDate: "Septiembre 2020",
        projects: ["IA para Predicción Académica", "Análisis Big Data Educativo", "ML en Plataformas LMS"]
      },
      {
        id: 9,
        slug: "valentina-lopez",
        name: "Valentina López",
        position: "Investigadora Junior",
        email: "valentina.lopez@crea.edu.co",
        phone: "+57 308 901 2345",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de maestría en Data Science. Me fascina descubrir patrones en los datos y convertirlos en insights accionables.",
        skills: ["R", "Statistics", "Data Visualization", "Academic Writing", "Jupyter", "Tableau"],
        achievements: ["Best Student Paper 2023", "3 investigaciones publicadas", "Beca de Investigación"],
        social: {
          linkedin: "linkedin.com/in/valentinalopez",
          github: "github.com/vlopez",
          scholar: "scholar.google.com/valentinalopez"
        },
        joinDate: "Febrero 2023",
        projects: ["Análisis Deserción Estudiantil", "Visualización Datos Campus", "Survey Research Estudiantil"]
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


