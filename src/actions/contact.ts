'use server';

export interface ContactFormState {
  success: boolean;
  message?: string;
}

export async function submitContactForm(prevState: ContactFormState | null, formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('=== FORMULARIO DE CONTACTO ===');
    console.log(JSON.stringify(data, null, 2));
    console.log('==============================\n');

    return {
      success: true,
      message: '¡Mensaje enviado exitosamente!'
    };
  } catch (error) {
    console.error('Error en submitContactForm:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje'
    };
  }
}

export async function submitApplicationForm(prevState: ContactFormState | null, formData: FormData) {
  try {
    const skills = [];
    let i = 0;
    while (formData.get(`skill-${i}`)) {
      const skill = formData.get(`skill-${i}`) as string;
      if (skill.trim()) skills.push(skill);
      i++;
    }

    const data = {
      personalInfo: {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
      },
      application: {
        department: formData.get('department'),
        position: formData.get('position'),
        bio: formData.get('bio'),
        skills: skills
      },
      links: {
        linkedin: formData.get('linkedinUrl'),
        github: formData.get('githubUrl'),
        portfolio: formData.get('portfolioUrl')
      },
      motivation: {
        whyJoin: formData.get('whyJoin'),
        experience: formData.get('experience'),
        availability: formData.get('availability')
      },
      timestamp: new Date().toISOString()
    };

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('\n=== NUEVA APLICACIÓN RECIBIDA ===');
    console.log('Nombre:', data.personalInfo.name);
    console.log('Email:', data.personalInfo.email);
    console.log('Departamento:', data.application.department);
    console.log('Posición:', data.application.position);
    console.log('\nDatos completos:');
    console.log(JSON.stringify(data, null, 2));
    console.log('===================================\n');

    return {
      success: true,
      message: '¡Aplicación enviada exitosamente! Te contactaremos pronto.'
    };
  } catch (error) {
    console.error('Error en submitApplicationForm:', error);
    return {
      success: false,
      message: 'Error al enviar la aplicación'
    };
  }
}

export async function addNewMember(prevState: ContactFormState | null, formData: FormData) {
  try {
    // Extraer arrays dinámicos
    const skills = [];
    const achievements = [];
    const projects = [];

    let i = 0;
    while (formData.get(`skill-${i}`)) {
      const skill = formData.get(`skill-${i}`) as string;
      if (skill.trim()) skills.push(skill);
      i++;
    }

    i = 0;
    while (formData.get(`achievement-${i}`)) {
      const achievement = formData.get(`achievement-${i}`) as string;
      if (achievement.trim()) achievements.push(achievement);
      i++;
    }

    i = 0;
    while (formData.get(`project-${i}`)) {
      const project = formData.get(`project-${i}`) as string;
      if (project.trim()) projects.push(project);
      i++;
    }

    const memberData = {
      basicInfo: {
        name: formData.get('name'),
        position: formData.get('position'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        department: formData.get('department'),
        joinDate: formData.get('joinDate'),
        imageUrl: formData.get('imageUrl')
      },
      bio: formData.get('bio'),
      skills: skills,
      achievements: achievements,
      projects: projects,
      social: {
        linkedin: formData.get('linkedinUrl'),
        github: formData.get('githubUrl'),
        twitter: formData.get('twitterUrl')
      },
      slug: (formData.get('name') as string)
        ?.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[^a-z0-9-]/g, ''),
      timestamp: new Date().toISOString()
    };

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('\n=== NUEVO MIEMBRO AGREGADO (ADMIN) ===');
    console.log('Nombre:', memberData.basicInfo.name);
    console.log('Posición:', memberData.basicInfo.position);
    console.log('Departamento:', memberData.basicInfo.department);
    console.log('Slug generado:', memberData.slug);
    console.log('\nHabilidades:', memberData.skills);
    console.log('Logros:', memberData.achievements);
    console.log('Proyectos:', memberData.projects);
    console.log('\nDatos completos:');
    console.log(JSON.stringify(memberData, null, 2));
    console.log('========================================\n');

    return {
      success: true,
      message: '¡Miembro agregado exitosamente al departamento!'
    };
  } catch (error) {
    console.error('Error en addNewMember:', error);
    return {
      success: false,
      message: 'Error al agregar el miembro'
    };
  }
}

