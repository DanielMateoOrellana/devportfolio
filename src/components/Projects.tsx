import { motion } from 'framer-motion'
import { projects, type Project } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const statusStyle: Record<Project['status'], string> = {
  PRODUCCIÓN: 'text-teal border-teal/40 bg-teal/5',
  GITHUB: 'text-mid border-wire',
  LIVE: 'text-amber border-amber/40 bg-amber/5',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE_EXPO }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group relative border border-wire bg-card hover:border-amber/35 transition-all duration-300 p-6 flex flex-col"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <span
          aria-hidden="true"
          className="font-syne font-black leading-none select-none"
          style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: 'rgba(232, 100, 26, 0.12)',
            lineHeight: 1,
          }}
        >
          {project.number}
        </span>
        <span
          className={`font-mono text-[10px] border px-2 py-1 tracking-widest ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-body text-xl mb-3 group-hover:text-amber transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-body leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Tecnologías">
        {project.stack.map((tech) => (
          <span
            key={tech}
            role="listitem"
            className="font-mono text-[11px] text-amber/70 border border-amber/20 bg-amber/5 px-2 py-0.5 tracking-wider hover:text-amber hover:border-amber/50 transition-all duration-150"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-5 border-t border-wire pt-4 mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-mid hover:text-amber transition-colors tracking-wider flex items-center gap-2 focus-visible:outline-amber"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <span aria-hidden="true">→</span> GitHub
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-amber hover:text-amber-hot transition-colors tracking-wider flex items-center gap-2 focus-visible:outline-amber"
            aria-label={`Ver demo de ${project.title}`}
          >
            <span aria-hidden="true">→</span> Ver demo
          </a>
        )}
        {!project.githubUrl && !project.url && (
          <span className="font-mono text-xs text-ghost tracking-wider">
            Producción institucional
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-wire" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-amber tracking-widest mb-3">03 —</p>
          <h2
            id="projects-heading"
            className="font-syne font-black tracking-tighter text-body"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            EN PRODUCCIÓN
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-wire">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
