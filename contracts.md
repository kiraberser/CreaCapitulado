# CREA Landing Page - Contratos de API

## Estado Actual
✅ **Frontend completo implementado** con datos mock
- Landing page con hero section y logo CREA
- Header con navegación completa
- Páginas: Home, About, Departments, Blog, Contact, Login, Register
- Footer con enlaces y redes sociales
- Componentes responsivos con Tailwind CSS

## Datos Mock Implementados (src/data/mockData.js)

### 1. Departamentos
```javascript
departments = [
  {
    id, name, description, color, 
    members: [{ id, name, position, email, image, skills }]
  }
]
```

### 2. Blog Posts
```javascript
blogPosts = [
  {
    id, title, excerpt, content, author, date, 
    category, image, readTime
  }
]
```

### 3. Testimonials
```javascript
testimonials = [
  { id, name, position, content, image }
]
```

## APIs a Implementar en Backend

### 1. Autenticación
```
POST /api/auth/register
- Body: { firstName, lastName, email, password, career, semester }
- Response: { user, token }

POST /api/auth/login  
- Body: { email, password }
- Response: { user, token }

GET /api/auth/profile
- Headers: Authorization: Bearer <token>
- Response: { user }
```

### 2. Departamentos
```
GET /api/departments
- Response: [{ id, name, description, color, memberCount }]

GET /api/departments/:id/members
- Response: { department, members: [{ id, name, position, email, image, skills }] }

POST /api/departments/:id/join (authenticated)
- Body: { message, skills }
- Response: { success, message }
```

### 3. Blog
```
GET /api/blog/posts
- Query: ?category=<category>&search=<term>&page=<num>
- Response: { posts: [], totalPages, currentPage }

GET /api/blog/posts/:id
- Response: { post, relatedPosts }

POST /api/blog/posts (authenticated, admin)
- Body: { title, content, excerpt, category, image }
- Response: { post }
```

### 4. Contacto
```
POST /api/contact
- Body: { name, email, subject, message }
- Response: { success, message }
- Action: Send email notification
```

### 5. Newsletter
```
POST /api/newsletter/subscribe
- Body: { email }
- Response: { success, message }
```

## Modelos de Base de Datos (MongoDB)

### User
```javascript
{
  _id, firstName, lastName, email, password (hashed),
  career, semester, role, department, skills,
  createdAt, updatedAt
}
```

### Department
```javascript
{
  _id, name, description, color,
  coordinatorId, members: [userId],
  createdAt, updatedAt
}
```

### BlogPost
```javascript
{
  _id, title, slug, content, excerpt,
  authorId, category, image, status,
  publishedAt, createdAt, updatedAt
}
```

### ContactMessage
```javascript
{
  _id, name, email, subject, message,
  status, createdAt
}
```

### NewsletterSubscriber
```javascript
{
  _id, email, status, subscribedAt
}
```

## Integración Frontend-Backend

### 1. Reemplazar Mock Data
- `src/data/mockData.js` → API calls con axios
- Implementar loading states y error handling
- Agregar skeletons para mejor UX

### 2. Autenticación
- Context API para estado global del usuario
- JWT token storage (localStorage/cookies)
- Protected routes para páginas de miembros

### 3. Forms Integration
- Validación con Zod + react-hook-form
- Toast notifications con Sonner
- Error handling consistente

### 4. Estado Global
- Context API para user authentication
- React Query para cache de datos
- Loading/error states management

## Próximos Pasos

1. ✅ Frontend completo con mock data
2. 🔲 Implementar modelos MongoDB
3. 🔲 Crear endpoints de API
4. 🔲 Integrar frontend con backend
5. 🔲 Testing y validaciones
6. 🔲 Deploy y optimizaciones

## Funcionalidades Adicionales Sugeridas
- Dashboard de miembros
- Sistema de eventos/actividades
- Galería de proyectos
- Sistema de notificaciones
- Chat interno entre miembros