export const personal = {
  name: 'Daniel Mateo',
  fullName: 'Daniel Alfredo Mateo Orellana',
  title: 'Ingeniero en Computación',
  tagline: 'Ingeniero de Software · Sistemas Empresariales & Cloud',
  bio: 'Ingeniero en Computación por ESPOL, actualmente construyendo infraestructura backend en producción real — microservicios Java/Spring Boot sobre AWS ECS, pipelines serverless con EventBridge y Lambda, e integraciones con Oracle Fusion Cloud. Antes, módulos ERP para la industria camaronera ecuatoriana. Me muevo desde el servidor hasta el navegador y de vuelta sin perder el hilo. Escribo código que escala, sobrevive incidentes y tiene tests que importan.',
  email: 'damateo@espol.edu.ec',
  phone: '+593 98 617 4238',
  location: 'Guayaquil, Ecuador',
  github: 'DanielMateoOrellana',
  githubUrl: 'https://github.com/DanielMateoOrellana',
  linkedin: 'daniel-mateo-orellana-642ab3284',
  linkedinUrl: 'https://www.linkedin.com/in/daniel-mateo-orellana-642ab3284',
  university: 'Escuela Superior Politécnica del Litoral (ESPOL)',
  degree: 'Ingeniero en Computación',
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  current: boolean
  bullets: string[]
  stack: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'TIA S.A.',
    role: 'Developer',
    period: 'Oct 2025 — Actualidad',
    current: true,
    bullets: [
      'Desarrolla y opera microservicios Java/Spring Boot y Python sobre AWS ECS, gestionando el ciclo completo desde build hasta soporte en producción con monitoreo CloudWatch.',
      'Diseña pipelines orientados a eventos con EventBridge y Lambda, procesa nóminas masivas en batch y mantiene integraciones automatizadas con Oracle Fusion Cloud (Payables/AP).',
      'Opera pipelines GitLab CI/Jenkins con análisis estático SonarQube; extiende ADempiere ERP en flujos de compras, inventario y finanzas.',
    ],
    stack: [
      'Java', 'Spring Boot', 'Python', 'AWS ECS', 'Lambda', 'EventBridge',
      'CloudWatch', 'Oracle PL/SQL', 'Oracle Fusion Cloud', 'ADempiere',
      'GitLab CI', 'Jenkins', 'Docker', 'Maven',
    ],
  },
  {
    company: 'Viaxperta',
    role: 'Junior Full-Stack Developer',
    period: 'May 2025 — Sep 2025',
    current: false,
    bullets: [
      'Construyó módulos ERP (Contabilidad, Nómina, Producción) con C#/ASP.NET MVC para plataformas que sirven a empresas camaroneras y grandes productoras ecuatorianas.',
      'Condujo sesiones de levantamiento de requerimientos con stakeholders, traduciendo necesidades complejas de negocio en entregables concretos dentro del sprint.',
      'Gestionó CI/CD con GitLab CI y Azure DevOps; aplicó TDD en colaboración con QA para mantener cobertura de pruebas en cada release.',
    ],
    stack: [
      'C#', 'ASP.NET MVC', 'Entity Framework', 'jQuery', 'T-SQL',
      'SQL Server', 'RDLC', 'GitLab CI', 'Azure DevOps', 'Scrum', 'TDD',
    ],
  },
]

export const skills: Record<string, string[]> = {
  'Cloud & Infraestructura': [
    'AWS ECS', 'Lambda', 'EventBridge', 'CloudWatch', 'SQS', 'SNS',
    'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Apache Kafka',
  ],
  'Backend': [
    'Java', 'Spring Boot', 'Python', 'C#', 'ASP.NET MVC',
    'NestJS', 'Node.js', 'Express', 'REST APIs', 'SOAP',
  ],
  'Datos': [
    'PostgreSQL', 'Oracle DB', 'SQL Server', 'MySQL',
    'Prisma', 'Entity Framework', 'PL/SQL', 'T-SQL',
  ],
  'Frontend': [
    'React', 'TypeScript', 'JavaScript', 'Angular', 'Ionic',
    'HTML5', 'CSS3', 'Tailwind CSS',
  ],
  'DevOps & CI/CD': [
    'GitLab CI', 'Jenkins', 'GitHub Actions', 'Azure DevOps',
    'SonarQube', 'Maven', 'Git',
  ],
  'Herramientas IA': ['Claude Code', 'OpenAI Codex', 'Gemini CLI'],
}

export interface Project {
  id: string
  number: string
  title: string
  description: string
  status: 'PRODUCCIÓN' | 'GITHUB' | 'LIVE'
  stack: string[]
  url?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'fiec',
    number: '01',
    title: 'Sistema de Gestión Documental FIEC',
    description:
      'Plataforma full-stack desarrollada a modo de tesis para la Facultad de Ingeniería en Electricidad y Computación de ESPOL. Gestiona procesos documentales con plantillas configurables, versionado de archivos por pasos, delegación de procesos y roles de usuario (Admin, Gestor, Lector, Ayudante). Exporta reportes ZIP. Actualmente en producción sirviendo a toda la FIEC.',
    status: 'PRODUCCIÓN',
    stack: [
      'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui',
      'NestJS', 'Prisma', 'PostgreSQL', 'Cloudflare R2', 'JWT', 'Vercel',
    ],
  },
  {
    id: 'elishop',
    number: '02',
    title: 'Elis_shop.ec',
    description:
      'Monorepo de e-commerce con landing page, catálogo de productos y sistema de inventario. API REST con autenticación JWT, imágenes almacenadas en Cloudflare R2. Desplegado en Vercel, Render y Neon con cero cold-start.',
    status: 'LIVE',
    stack: [
      'React 19', 'Vite', 'NestJS', 'TypeScript',
      'Prisma', 'PostgreSQL 16', 'Docker', 'Cloudflare R2', 'Passport',
    ],
    url: 'https://elishop-landing-page.vercel.app',
  },
  {
    id: 'flights',
    number: '03',
    title: 'Flights Backend',
    description:
      'Backend de reservas de vuelos organizado en microservicios (auth, flights, bookings) expuesto mediante API Gateway con Nginx. Implementa autenticación JWT RS256, búsqueda con seed de dataset Kaggle y control de concurrencia optimista para evitar sobreventa de asientos. Incluye colección Postman para pruebas end-to-end.',
    status: 'GITHUB',
    stack: [
      'Node.js 20', 'Fastify', 'Express', 'Prisma ORM',
      'PostgreSQL 16', 'Nginx', 'Docker Compose', 'JWT RS256',
    ],
    githubUrl: 'https://github.com/DanielMateoOrellana/flights-backend',
  },
  {
    id: 'flood',
    number: '04',
    title: 'Predicción de Riesgo de Inundación con CNN',
    description:
      'Modelo de Red Neuronal Convolucional entrenado sobre datasets hidrológicos históricos para clasificar niveles de riesgo de inundación en distintas zonas geográficas. Presentado en feria de investigación universitaria en enero 2025.',
    status: 'GITHUB',
    stack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib'],
  },
]

export interface Certification {
  name: string
  institution: string
  date: string
}

export const certifications: Certification[] = [
  { name: 'Claude Code 101', institution: 'Anthropic', date: 'Abr 2026' },
  { name: 'Claude Code in Action', institution: 'Anthropic', date: 'Abr 2026' },
  { name: 'Claude 101', institution: 'Anthropic', date: 'Abr 2026' },
  { name: 'AWS Academy Graduate — Data Engineering', institution: 'AWS', date: 'Ago 2025' },
  { name: 'AWS Academy Graduate — Cloud Security Foundations', institution: 'AWS', date: 'Jun 2025' },
  { name: 'AWS Academy Graduate — Cloud Foundations', institution: 'AWS', date: 'Jun 2025' },
  { name: 'Curso Profesional de DevOps', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Kubernetes', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Docker Avanzado', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Terraform', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso Básico de Jenkins', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de GitHub Actions', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso AWS Cloud Practitioner Certification', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Máquinas Virtuales con Google Cloud Platform', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Contenedores y Aplicaciones en la Nube con GCP', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Backend con Node.js: API REST con Express.js', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Backend con Node.js: Autenticación con Passport.js y JWT', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de React Avanzado', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'Curso de Ciberseguridad para Desarrollo Web', institution: 'Platzi', date: 'Mar 2025' },
  { name: 'SQL (Advanced)', institution: 'HackerRank', date: 'Mar 2025' },
  { name: 'Frontend Developer (React)', institution: 'HackerRank', date: 'Mar 2025' },
  { name: 'Data Visualization', institution: 'freeCodeCamp', date: 'Mar 2025' },
  { name: 'Responsive Web Design', institution: 'freeCodeCamp', date: 'Feb 2025' },
  { name: 'PyTorch Bootcamp', institution: 'OpenCV University', date: 'Feb 2025' },
]

export const certInstitutions = [
  'Todos',
  'Anthropic',
  'AWS',
  'Platzi',
  'HackerRank',
  'freeCodeCamp',
  'OpenCV University',
]
