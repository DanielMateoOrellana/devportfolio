import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications, certInstitutions } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const institutionMeta: Record<string, { logo: string; bg: string }> = {
  Anthropic:          { logo: '/logos/anthropic.svg',   bg: 'rgba(232, 100, 26, 0.08)' },
  AWS:                { logo: '/logos/aws.svg',          bg: 'rgba(255, 153, 0, 0.08)'  },
  Platzi:             { logo: '/logos/platzi.svg',       bg: 'rgba(152, 202, 63, 0.08)' },
  HackerRank:         { logo: '/logos/hackerrank.svg',   bg: 'rgba(0, 234, 100, 0.08)'  },
  freeCodeCamp:       { logo: '/logos/freecodecamp.svg', bg: 'rgba(237, 237, 229, 0.06)'},
  'OpenCV University':{ logo: '/logos/opencv.svg',       bg: 'rgba(0, 201, 167, 0.08)'  },
}

export default function Certifications() {
  const [active, setActive] = useState('Todos')

  const visible =
    active === 'Todos'
      ? certifications
      : certifications.filter((c) => c.institution === active)

  const grouped = certInstitutions
    .filter((inst) => inst !== 'Todos')
    .reduce<Record<string, typeof certifications>>((acc, inst) => {
      const certs = visible.filter((c) => c.institution === inst)
      if (certs.length > 0) acc[inst] = certs
      return acc
    }, {})

  return (
    <section id="certs" className="py-28 border-t border-wire" aria-labelledby="certs-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-amber tracking-widest mb-3">04 —</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              id="certs-heading"
              className="font-syne font-black tracking-tighter text-body"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              CERTIFICACIONES
            </h2>
            <p className="font-mono text-xs text-ghost tracking-widest">
              {certifications.length} certificaciones
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar certificaciones por institución"
        >
          {certInstitutions.map((inst) => {
            const count =
              inst === 'Todos'
                ? certifications.length
                : certifications.filter((c) => c.institution === inst).length
            return (
              <button
                key={inst}
                role="tab"
                aria-selected={active === inst}
                aria-controls="certs-grid"
                onClick={() => setActive(inst)}
                className={`font-mono text-[10px] tracking-widest px-3 py-1.5 border transition-all duration-150 ${
                  active === inst
                    ? 'border-amber text-amber bg-amber/8'
                    : 'border-wire text-ghost hover:border-mid hover:text-mid'
                }`}
              >
                {inst === 'Todos' ? `TODOS (${count})` : `${inst.toUpperCase()} (${count})`}
              </button>
            )
          })}
        </motion.div>

        {/* Grid */}
        <div id="certs-grid" role="tabpanel" aria-label={`Certificaciones de ${active}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`grid gap-px bg-wire grid-cols-1 ${
                Object.keys(grouped).length >= 2 ? 'md:grid-cols-2' : ''
              } ${
                Object.keys(grouped).length >= 3 ? 'lg:grid-cols-3' : ''
              }`}
            >
              {Object.entries(grouped).map(([institution, certs]) => {
                const isSoleInstitution = Object.keys(grouped).length === 1
                const showTwoCols = certs.length > 6 && isSoleInstitution
                const meta = institutionMeta[institution]

                return (
                  <div key={institution} className="bg-bg p-6 flex flex-col">
                    {/* Institution header with logo */}
                    <div className="mb-5 pb-4 border-b border-wire">
                      <div className="flex items-center gap-3 mb-2">
                        {meta && (
                          <div
                            className="w-14 h-14 flex items-center justify-center rounded flex-shrink-0 p-2.5"
                            style={{ background: meta.bg }}
                          >
                            <img
                              src={meta.logo}
                              alt={`${institution} logo`}
                              className="w-full h-full object-contain"
                              style={{ filter: 'brightness(0) invert(1)' }}
                              loading="lazy"
                            />
                          </div>
                        )}
                        <h3 className="font-syne font-black text-xl text-body leading-tight">
                          {institution}
                        </h3>
                      </div>
                      <p className="font-mono text-[10px] text-ghost tracking-widest">
                        {certs.length} CERTIFICACIÓN{certs.length !== 1 ? 'ES' : ''}
                      </p>
                    </div>

                    {/* Cert list */}
                    <ul
                      className={`flex-1 ${
                        showTwoCols
                          ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 items-start'
                          : 'space-y-3'
                      }`}
                    >
                      {certs.map((cert) => (
                        <li key={cert.name} className="group/cert">
                          <p className="font-mono text-sm text-body leading-snug group-hover/cert:text-amber transition-colors duration-150">
                            {cert.name}
                          </p>
                          <p className="font-mono text-[10px] text-ghost mt-0.5">{cert.date}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
