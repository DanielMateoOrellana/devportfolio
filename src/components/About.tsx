import { motion } from 'framer-motion'
import { personal, skills } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const layerAccent: Record<string, string> = {
  'Cloud & Infraestructura': '#00C9A7',
  'Backend': '#E8641A',
  'Datos': '#6B6B7A',
  'Frontend': '#E8641A',
  'DevOps & CI/CD': '#00C9A7',
  'Herramientas IA': '#EDEDE5',
}

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.65, delay, ease: EASE_EXPO },
  }
}

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-wire" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...reveal()} className="mb-16">
          <p className="font-mono text-xs text-amber tracking-widest mb-3">01 —</p>
          <h2
            id="about-heading"
            className="font-syne font-black tracking-tighter text-body"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            // QUIÉN SOY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio + metadata */}
          <motion.div {...reveal(0.08)}>
            <p className="font-mono text-sm text-body leading-relaxed mb-8">
              {personal.bio}
            </p>

            <div className="border-t border-wire pt-6 space-y-0">
              {[
                { label: 'Universidad', value: 'ESPOL' },
                { label: 'Título', value: personal.degree },
                { label: 'Ubicación', value: personal.location },
                { label: 'Idiomas', value: 'Español · Inglés (B2)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-wire py-3 group">
                  <span className="font-mono text-xs text-mid tracking-widest uppercase">{label}</span>
                  <span className="font-syne font-bold text-base text-body group-hover:text-amber transition-colors duration-150 text-right">{value}</span>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="mt-10">
              <p className="font-mono text-xs text-amber tracking-widest mb-5 uppercase">
                Habilidades blandas
              </p>
              <ul className="space-y-2">
                {[
                  'Resolución de problemas en sistemas distribuidos',
                  'Gestión de requerimientos con stakeholders',
                  'Mentoría técnica — Club KOKOA, ESPOL',
                  'Aprendizaje autónomo continuo',
                  'Trabajo en equipo Scrum/Kanban',
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-3 font-mono text-sm text-body hover:text-amber transition-colors duration-150 cursor-default">
                    <span className="text-amber shrink-0 mt-0.5">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stack architecture layers */}
          <div>
            <motion.p
              {...reveal(0.12)}
              className="font-mono text-xs text-ghost tracking-widest uppercase mb-4"
            >
              Arquitectura del stack
            </motion.p>

            <div className="border-t border-wire">
              {Object.entries(skills).map(([layer, techs], i) => (
                <motion.div
                  key={layer}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.06 * i, ease: EASE_EXPO }}
                  className="group border-b border-wire py-4 hover:bg-card/60 transition-colors duration-200 -mx-3 px-3"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-mono text-[10px] tracking-widest uppercase pt-0.5 shrink-0 w-32"
                      style={{ color: layerAccent[layer] ?? '#6B6B7A' }}
                    >
                      {layer}
                    </span>
                    <p className="font-mono text-sm text-body leading-relaxed group-hover:text-amber transition-colors duration-200">
                      {techs.join('  ·  ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
