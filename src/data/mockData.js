// Mock data for the CREA application

export const departments = [
  {
    id: 1,
    slug: "presidencia-vicepresidencia",
    name: "Presidencia y Vicepresidencia",
    description: "Liderazgo y gestión estratégica",
    longDescription: "La dirección ejecutiva de CREA, encargada de establecer la visión estratégica, coordinar las áreas organizacionales y representar a la asociación estudiantil ante la comunidad universitaria.",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-700",
    icon: "👔",
    members: [
      {
        id: 1,
        slug: "diana-regina-espana-gonzalez",
        name: "Diana Regina España González",
        position: "Presidencia",
        email: "diana.espana@crea.edu.co",
        phone: "+57 300 000 0001",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre comprometida con el desarrollo estudiantil y la excelencia académica. Liderando CREA con visión estratégica y enfoque en el bienestar de la comunidad estudiantil.",
        skills: ["Liderazgo", "Gestión Estratégica", "Comunicación", "Negociación", "Planificación"],
        achievements: ["Matrícula: 22020657", "7to Semestre"],
        social: {
          email: "diana.espana@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Dirección General CREA"]
      },
      {
        id: 2,
        slug: "arath-eliud-huerta-mora",
        name: "Arath Eliud Huerta Mora",
        position: "Vicepresidencia",
        email: "arath.huerta@crea.edu.co",
        phone: "+57 300 000 0002",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre enfocado en el apoyo estratégico a la presidencia y la optimización de procesos internos de CREA.",
        skills: ["Planificación", "Apoyo Ejecutivo", "Coordinación", "Gestión"],
        achievements: ["Matrícula: 22020522", "7to Semestre"],
        social: {
          email: "arath.huerta@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Apoyo a Presidencia"]
      }
    ]
  },
  {
    id: 2,
    slug: "direccion-gestion-estudiantil",
    name: "Dirección de Gestión Estudiantil",
    description: "Apoyo y desarrollo estudiantil integral",
    longDescription: "Gestión integral del bienestar estudiantil mediante programas de apoyo, voluntariado, progreso académico y seguimiento personalizado de los estudiantes de CREA.",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-700",
    icon: "🎓",
    members: [
      {
        id: 3,
        slug: "denisse-abigail-calleja-oropeza",
        name: "Denisse Abigail Calleja Oropeza",
        position: "Dirección de Gestión Estudiantil",
        email: "denisse.calleja@crea.edu.co",
        phone: "+57 300 000 0003",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre comprometida con el bienestar y desarrollo integral de los estudiantes. Coordinando programas de apoyo y seguimiento académico.",
        skills: ["Gestión Estudiantil", "Liderazgo", "Comunicación", "Organización"],
        achievements: ["Matrícula: 22020528", "7to Semestre"],
        social: {
          email: "denisse.calleja@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Programas de Apoyo Estudiantil"]
      },
      {
        id: 4,
        slug: "carlos-raul-angel-chavez",
        name: "Carlos Raúl Ángel Chávez",
        position: "Coordinación de Apoyo y Voluntariado",
        email: "carlos.angel@crea.edu.co",
        phone: "+57 300 000 0004",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 5to semestre enfocado en el desarrollo de programas de voluntariado y apoyo comunitario.",
        skills: ["Voluntariado", "Gestión Comunitaria", "Organización"],
        achievements: ["Matrícula: 23020717", "5to Semestre"],
        social: {
          email: "carlos.angel@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Programa de Voluntariado"]
      },
      {
        id: 5,
        slug: "luis-ronaldo-mojica-hernandez",
        name: "Luis Ronaldo Mojica Hernández",
        position: "Auxiliar de Voluntariado",
        email: "luis.mojica@crea.edu.co",
        phone: "+57 300 000 0005",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre colaborando en la coordinación de actividades de voluntariado.",
        skills: ["Logística", "Coordinación", "Apoyo"],
        achievements: ["Matrícula: 22990597", "7to Semestre"],
        social: {
          email: "luis.mojica@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Apoyo Voluntariado"]
      },
      {
        id: 12,
        slug: "mairany-dalay-perez-hernandez",
        name: "Mairany Dalay Pérez Hernández",
        position: "Coordinación de Progreso Estudiantil",
        email: "mairany.perez@crea.edu.co",
        phone: "+57 300 000 0012",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre enfocada en el seguimiento y apoyo al progreso académico de los estudiantes.",
        skills: ["Mentoría", "Seguimiento Académico", "Gestión"],
        achievements: ["Matrícula: 22020560", "7to Semestre"],
        social: {
          email: "mairany.perez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Progreso Estudiantil"]
      },
      {
        id: 13,
        slug: "mariana-nieto-guevara",
        name: "Mariana Nieto Guevara",
        position: "Auxiliar de Monitorio Estudiantil",
        email: "mariana.nieto@crea.edu.co",
        phone: "+57 300 000 0013",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre colaborando en el monitoreo y seguimiento estudiantil.",
        skills: ["Monitoreo", "Análisis", "Apoyo"],
        achievements: ["Matrícula: 22020536", "7to Semestre"],
        social: {
          email: "mariana.nieto@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Monitoreo Estudiantil"]
      },
      {
        id: 6,
        slug: "kenia-paola-vazquez-cruz",
        name: "Kenia Paola Vázquez Cruz",
        position: "Staff Base",
        email: "kenia.vazquez@crea.edu.co",
        phone: "+57 300 000 0006",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Organización", "Coordinación"],
        achievements: ["Matrícula: 22020558", "7to Semestre"],
        social: {
          email: "kenia.vazquez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      },
      {
        id: 7,
        slug: "natalia-verde-hernandez",
        name: "Natalia Verde Hernández",
        position: "Staff Base",
        email: "natalia.verde@crea.edu.co",
        phone: "+57 300 000 0007",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 5to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Organización", "Logística"],
        achievements: ["Matrícula: 23020692", "5to Semestre"],
        social: {
          email: "natalia.verde@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      },
      {
        id: 8,
        slug: "naira-naomi-trinidad-aguilera",
        name: "Naira Naomi Trinidad Aguilera",
        position: "Staff Base",
        email: "naira.trinidad@crea.edu.co",
        phone: "+57 300 000 0008",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 5to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Comunicación", "Organización"],
        achievements: ["Matrícula: 23021114", "5to Semestre"],
        social: {
          email: "naira.trinidad@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      },
      {
        id: 9,
        slug: "diana-cristina-lazaro-tronco",
        name: "Diana Cristina Lázaro Tronco",
        position: "Staff Base",
        email: "diana.lazaro@crea.edu.co",
        phone: "+57 300 000 0009",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Gestión", "Comunicación"],
        achievements: ["Matrícula: 24020123", "4to Semestre"],
        social: {
          email: "diana.lazaro@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      },
      {
        id: 10,
        slug: "javier-sanchez-murillo",
        name: "Javier Sánchez Murillo",
        position: "Staff Base",
        email: "javier.sanchez@crea.edu.co",
        phone: "+57 300 000 0010",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Logística", "Coordinación"],
        achievements: ["Matrícula: 24020255", "4to Semestre"],
        social: {
          email: "javier.sanchez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      },
      {
        id: 11,
        slug: "carlos-alexander-ruiz-vazquez",
        name: "Carlos Alexander Ruiz Vázquez",
        position: "Staff Base",
        email: "carlos.ruiz@crea.edu.co",
        phone: "+57 300 000 0011",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en el equipo base de gestión estudiantil.",
        skills: ["Apoyo General", "Gestión", "Organización"],
        achievements: ["Matrícula: 24020109", "4to Semestre"],
        social: {
          email: "carlos.ruiz@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Staff Base"]
      }
    ]
  },
  {
    id: 3,
    slug: "direccion-proyectos",
    name: "Dirección de Proyectos",
    description: "Planificación y ejecución de iniciativas",
    longDescription: "Dirección encargada de planificar, organizar, validar y dar seguimiento a todos los proyectos de CREA, asegurando su correcta implementación y resultados exitosos.",
    color: "bg-green-500",
    gradient: "from-green-500 to-green-700",
    icon: "📊",
    members: [
      {
        id: 14,
        slug: "carlos-irvin-sanchez-coaury",
        name: "Carlos Irvin Sánchez Coaury",
        position: "Dirección de Proyectos",
        email: "carlos.sanchez@crea.edu.co",
        phone: "+57 300 000 0014",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre especializado en la dirección y coordinación de proyectos. Enfocado en la planificación estratégica y ejecución eficiente.",
        skills: ["Gestión de Proyectos", "Planificación", "Liderazgo", "Análisis"],
        achievements: ["Matrícula: 22020545", "7to Semestre"],
        social: {
          email: "carlos.sanchez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Dirección de Proyectos"]
      },
      {
        id: 15,
        slug: "alexa-jimenez-crespo",
        name: "Alexa Jiménez Crespo",
        position: "Coordinación de Planeación",
        email: "alexa.jimenez@crea.edu.co",
        phone: "+57 300 000 0015",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en la coordinación de la planeación estratégica de proyectos.",
        skills: ["Planeación", "Estrategia", "Organización"],
        achievements: ["Matrícula: 24020144", "4to Semestre"],
        social: {
          email: "alexa.jimenez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Planeación"]
      },
      {
        id: 16,
        slug: "gabriel-fernandez-gamboa",
        name: "Gabriel Fernández Gamboa",
        position: "Coordinación de Organización",
        email: "gabriel.fernandez@crea.edu.co",
        phone: "+57 300 000 0016",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre coordinando la organización de proyectos y eventos.",
        skills: ["Organización", "Logística", "Coordinación"],
        achievements: ["Matrícula: 22020961", "7to Semestre"],
        social: {
          email: "gabriel.fernandez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Organización"]
      },
      {
        id: 17,
        slug: "itzel-ariam-morales-pavon",
        name: "Itzel Ariam Morales Pavón",
        position: "Auxiliar de Integración",
        email: "itzel.morales@crea.edu.co",
        phone: "+57 300 000 0017",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre apoyando en la integración de proyectos.",
        skills: ["Integración", "Apoyo", "Coordinación"],
        achievements: ["Matrícula: 22020534", "7to Semestre"],
        social: {
          email: "itzel.morales@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Integración"]
      },
      {
        id: 18,
        slug: "andrik-antonio-martinez-sosa",
        name: "Andrik Antonio Martínez Sosa",
        position: "Coordinación de Validación",
        email: "andrik.martinez@crea.edu.co",
        phone: "+57 300 000 0018",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en la validación de proyectos y procesos.",
        skills: ["Validación", "Control de Calidad", "Análisis"],
        achievements: ["Matrícula: 24020115", "4to Semestre"],
        social: {
          email: "andrik.martinez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Validación"]
      },
      {
        id: 19,
        slug: "hazael-olmos-sosa",
        name: "Hazael Olmos Sosa",
        position: "Auxiliar de Seguimiento Administrativo",
        email: "hazael.olmos@crea.edu.co",
        phone: "+57 300 000 0019",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 4to semestre en el seguimiento administrativo de proyectos.",
        skills: ["Seguimiento", "Administración", "Gestión"],
        achievements: ["Matrícula: 24020112", "4to Semestre"],
        social: {
          email: "hazael.olmos@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Seguimiento Administrativo"]
      }
    ]
  },
  {
    id: 4,
    slug: "direccion-finanzas",
    name: "Dirección de Finanzas",
    description: "Gestión financiera y contable",
    longDescription: "Dirección responsable de la administración financiera de CREA, incluyendo contabilidad, recursos y gestión económica de todos los proyectos y actividades.",
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-orange-500",
    icon: "💰",
    members: [
      {
        id: 20,
        slug: "rubi-bravo-montiel",
        name: "Rubí Bravo Montiel",
        position: "Dirección de Finanzas",
        email: "rubi.bravo@crea.edu.co",
        phone: "+57 300 000 0020",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre liderando la dirección financiera de CREA con enfoque en transparencia y eficiencia.",
        skills: ["Gestión Financiera", "Contabilidad", "Liderazgo", "Administración"],
        achievements: ["Matrícula: 22020932", "7to Semestre"],
        social: {
          email: "rubi.bravo@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Dirección Financiera"]
      },
      {
        id: 21,
        slug: "kevin-antonio-parra-garcia",
        name: "Kevin Antonio Parra García",
        position: "Coordinación de Contabilidad",
        email: "kevin.parra@crea.edu.co",
        phone: "+57 300 000 0021",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre coordinando la contabilidad y registros financieros.",
        skills: ["Contabilidad", "Finanzas", "Análisis"],
        achievements: ["Matrícula: 22020537", "7to Semestre"],
        social: {
          email: "kevin.parra@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Contabilidad"]
      },
      {
        id: 22,
        slug: "juliet-naxheli-cruz-silva",
        name: "Juliet Naxheli Cruz Silva",
        position: "Coordinación de Recursos",
        email: "juliet.cruz@crea.edu.co",
        phone: "+57 300 000 0022",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre coordinando la gestión de recursos.",
        skills: ["Gestión de Recursos", "Logística", "Coordinación"],
        achievements: ["Matrícula: 22020627", "7to Semestre"],
        social: {
          email: "juliet.cruz@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Recursos"]
      },
      {
        id: 23,
        slug: "fatima-hernandez-acosta",
        name: "Fátima Hernández Acosta",
        position: "Auxiliar de Gestión de Recursos",
        email: "fatima.hernandez@crea.edu.co",
        phone: "+57 300 000 0023",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre apoyando en la gestión de recursos.",
        skills: ["Gestión", "Apoyo", "Organización"],
        achievements: ["Matrícula: 22020519", "7to Semestre"],
        social: {
          email: "fatima.hernandez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Gestión de Recursos"]
      }
    ]
  },
  {
    id: 5,
    slug: "direccion-comunicacion-difusion",
    name: "Dirección de Comunicación y Difusión",
    description: "Estrategias de comunicación y diseño",
    longDescription: "Dirección encargada de las comunicaciones institucionales, diseño digital, programación y difusión de todas las actividades e iniciativas de CREA.",
    color: "bg-pink-500",
    gradient: "from-pink-500 to-red-500",
    icon: "📱",
    members: [
      {
        id: 24,
        slug: "lilian-michelle-lopez-carrasco",
        name: "Lilián Michelle López Carrasco",
        position: "Dirección de Comunicación y Difusión",
        email: "lilian.lopez@crea.edu.co",
        phone: "+57 300 000 0024",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre liderando las comunicaciones y difusión de CREA.",
        skills: ["Comunicación", "Marketing", "Liderazgo", "Difusión"],
        achievements: ["Matrícula: 22020549", "7to Semestre"],
        social: {
          email: "lilian.lopez@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Dirección Comunicación"]
      },
      {
        id: 25,
        slug: "amely-velazco-vera",
        name: "Amely Velazco Vera",
        position: "Coordinación de Diseños Digitales",
        email: "amely.velazco@crea.edu.co",
        phone: "+57 300 000 0025",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 5to semestre coordinando los diseños digitales y creatividad visual.",
        skills: ["Diseño Digital", "Creatividad", "Adobe Suite", "Ilustración"],
        achievements: ["Matrícula: 23020677", "5to Semestre"],
        social: {
          email: "amely.velazco@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Diseños Digitales"]
      },
      {
        id: 26,
        slug: "carolina-yoreni-garcia-vergara",
        name: "Carolina Yoreni García Vergara",
        position: "Auxiliar de Diseño",
        email: "carolina.garcia@crea.edu.co",
        phone: "+57 300 000 0026",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 1er semestre apoyando en las labores de diseño.",
        skills: ["Diseño", "Creatividad", "Apoyo"],
        achievements: ["Matrícula: 25021124", "1er Semestre"],
        social: {
          email: "carolina.garcia@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Apoyo Diseño"]
      },
      {
        id: 27,
        slug: "adlem-airam-becerra-herrera",
        name: "Adlem Airam Becerra Herrera",
        position: "Auxiliar de Diseño",
        email: "adlem.becerra@crea.edu.co",
        phone: "+57 300 000 0027",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 10mo semestre colaborando en diseño.",
        skills: ["Diseño", "Experiencia", "Desarrollo Visual"],
        achievements: ["Matrícula: 21020212", "10mo Semestre"],
        social: {
          email: "adlem.becerra@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Apoyo Diseño"]
      },
      {
        id: 28,
        slug: "maria-fernanda-ruiz-sansores",
        name: "María Fernanda Ruiz Sansores",
        position: "Coordinación de Comunicación Institucional",
        email: "maria.ruiz@crea.edu.co",
        phone: "+57 300 000 0028",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 7to semestre coordinando la comunicación institucional.",
        skills: ["Comunicación", "Redacción", "Difusión"],
        achievements: ["Matrícula: 22020534", "7to Semestre"],
        social: {
          email: "maria.ruiz@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Comunicación Institucional"]
      },
      {
        id: 29,
        slug: "edwin-alfredo-vega-aldana",
        name: "Edwin Alfredo Vega Aldana",
        position: "Auxiliar de Programación",
        email: "edwin.vega@crea.edu.co",
        phone: "+57 300 000 0029",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Estudiante de 9no semestre encargado del desarrollo técnico y programación de plataformas.",
        skills: ["Programación", "Desarrollo Web", "Tecnología", "API"],
        achievements: ["Matrícula: 21020986", "9no Semestre"],
        social: {
          email: "edwin.vega@crea.edu.co"
        },
        joinDate: "2024",
        projects: ["Desarrollo Web", "Plataformas CREA"]
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

export const departmentsSelect = [
  'Presidencia y Vicepresidencia',
  'Dirección de Gestión Estudiantil',
  'Dirección de Proyectos',
  'Dirección de Finanzas',
  'Dirección de Comunicación y Difusión'
]

export const semesters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
