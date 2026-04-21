import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications, certInstitutions } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const institutionColors: Record<string, string> = {
  Anthropic: '#E8641A',
  AWS: '#FF9900',
  Platzi: '#98CA3F',
  HackerRank: '#00EA64',
  freeCodeCamp: '#0A0A23',
  'OpenCV University': '#00C9A7',
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
              CREDENCIALES
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

        {/* Newspaper grid */}
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
                return (
                  <div key={institution} className="bg-bg p-6 flex flex-col">
                    {/* Institution header */}
                    <div className="mb-5 pb-4 border-b border-wire">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          aria-hidden="true"
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: institutionColors[institution] ?? '#6B6B7A' }}
                        />
                        <h3 className="font-syne font-black text-xl text-body leading-tight">
                          {institution}
                        </h3>
                      </div>
                      <p className="font-mono text-[10px] text-ghost tracking-widest">
                        {certs.length} CERTIFICACIÓN{certs.length !== 1 ? 'ES' : ''}
                      </p>
                    </div>

                    {/* Cert list — 2 columns only when filtered to a single institution with many items, sm+ only */}
                    <ul
                      className={`flex-1 ${
                        showTwoCols
                          ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 items-start'
                          : 'space-y-3'
                      }`}
                    >
                      {certs.map((cert) => (
                        <li key={cert.name} className="group/cert">
                          <p className="font-mono text-xs text-mid leading-snug group-hover/cert:text-body transition-colors duration-150">
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
