import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-wire" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-amber tracking-widest mb-3">02 —</p>
          <h2
            id="experience-heading"
            className="font-syne font-black tracking-tighter text-body"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            LÍNEA DE TIEMPO
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-wire hidden md:block"
          />

          <div className="space-y-20">
            {experience.map((item, i) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: EASE_EXPO }}
                className="md:pl-12 relative"
                aria-label={`${item.role} en ${item.company}`}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-bg hidden md:block ${
                    item.current ? 'bg-amber' : 'bg-wire'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">
                  {/* Left: company meta */}
                  <div>
                    <p className="font-mono text-[10px] text-ghost tracking-widest mb-2 uppercase">
                      {item.period}
                    </p>
                    <h3 className="font-syne font-black text-2xl text-body mb-1 leading-tight">
                      {item.company}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-amber">{item.role}</span>
                      {item.current && (
                        <span className="font-mono text-[10px] bg-amber/10 text-amber border border-amber/25 px-2 py-0.5 tracking-widest">
                          ACTUAL
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: bullets + stack */}
                  <div>
                    <ul className="space-y-4 mb-6" role="list">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="text-amber text-xs mt-0.5 shrink-0 font-mono"
                          >
                            →
                          </span>
                          <p className="font-mono text-xs text-mid leading-relaxed">{bullet}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tecnologías">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="font-mono text-[10px] text-ghost border border-wire px-2 py-0.5 tracking-wider hover:text-mid hover:border-mid/50 transition-colors duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
