# Daniel Mateo — Portfolio

Portfolio personal de Daniel Alfredo Mateo Orellana, Ingeniero en Computación — ESPOL.

## Levantar en desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Construir para producción

```bash
npm run build
npm run preview
```

## Editar contenido

Todo el contenido está centralizado en **`src/data/portfolio.ts`**. No necesitas tocar los componentes para actualizar datos.

| Sección | Qué editar |
|---|---|
| Datos personales, bio, contacto | `personal` |
| Experiencia laboral | `experience[]` |
| Stack técnico por categorías | `skills` |
| Proyectos | `projects[]` |
| Certificaciones | `certifications[]` |

## Foto de perfil

Reemplaza `public/profile-picture.jpeg` con tu foto. Recomendado: mínimo 800×1000px, ratio 4:5.

## Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** — tema configurado en `tailwind.config.js`
- **Framer Motion** — animaciones orquestadas con respeto a `prefers-reduced-motion`
- **Syne Variable** (display) + **IBM Plex Mono** (body) vía Fontsource

## Estructura

```
src/
├── components/
│   ├── Navigation.tsx   — Barra de navegación fija
│   ├── Hero.tsx         — Hero con boot sequence animada
│   ├── About.tsx        — Bio + arquitectura del stack
│   ├── Experience.tsx   — Línea de tiempo laboral
│   ├── Projects.tsx     — 4 proyectos con tarjetas
│   ├── Certifications.tsx — Muro filtrable de 25 certs
│   └── Contact.tsx      — Datos de contacto
├── data/
│   └── portfolio.ts     — TODA la data del portfolio
├── App.tsx
├── main.tsx
└── index.css
```
