import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const companyLogo: Record<string, string | null> = {
  'TIA S.A.': '/logos/tia.jpg',
  'Viaxperta': '/logos/viaxperta_logo.jpg',
}

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
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-wire hidden md:block"
          />

          <div className="space-y-20">
            {experience.map((item, i) => {
              const logo = companyLogo[item.company]
              return (
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

                  <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10">
                    {/* Left: company meta */}
                    <div className="min-w-0 pr-4">
                      <p className="font-mono text-[10px] text-ghost tracking-widest mb-3 uppercase">
                        {item.period}
                      </p>

                      {/* Logo + company name */}
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        {logo && (
                          <div className="w-16 h-16 rounded-xl border border-wire flex items-center justify-center overflow-hidden bg-white flex-shrink-0 shadow-sm">
                            <img
                              src={logo}
                              alt={`${item.company} logo`}
                              className="w-[85%] h-[85%] object-contain"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <h3 className="font-syne font-black text-2xl text-body leading-tight break-words min-w-0 flex-1">
                          {item.company}
                        </h3>
                      </div>

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
                          <li key={j} className="flex gap-3 group/bullet">
                            <span
                              aria-hidden="true"
                              className="text-amber text-xs mt-1 shrink-0 font-mono"
                            >
                              →
                            </span>
                            <p className="font-mono text-sm text-body leading-relaxed group-hover/bullet:text-amber transition-colors duration-150">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Stack tags — amber tinted */}
                      <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tecnologías">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            role="listitem"
                            className="font-mono text-[11px] text-amber/70 border border-amber/20 bg-amber/5 px-2 py-0.5 tracking-wider hover:text-amber hover:border-amber/50 hover:bg-amber/10 transition-all duration-150"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
