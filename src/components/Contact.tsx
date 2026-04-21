import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const contactItems = [
  {
    label: 'EMAIL',
    value: personal.email,
    href: `mailto:${personal.email}`,
    primary: true,
    external: false,
  },
  {
    label: 'TELÉFONO',
    value: personal.phone,
    href: `tel:+593986174238`,
    primary: false,
    external: false,
  },
  {
    label: 'GITHUB',
    value: `@${personal.github}`,
    href: personal.githubUrl,
    primary: false,
    external: true,
  },
  {
    label: 'LINKEDIN',
    value: 'daniel-mateo-orellana',
    href: personal.linkedinUrl,
    primary: false,
    external: true,
  },
  {
    label: 'UBICACIÓN',
    value: personal.location,
    href: null,
    primary: false,
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-wire" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-amber tracking-widest mb-3">05 —</p>
          <h2
            id="contact-heading"
            className="font-syne font-black tracking-tighter text-body"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            HANDSHAKE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: contact list */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_EXPO }}
              className="font-mono text-sm text-body leading-relaxed mb-8"
            >
              Disponible para oportunidades full-time, colaboraciones técnicas
              o simplemente para hablar de arquitectura de sistemas.
            </motion.p>

            <div className="border-t border-wire">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE_EXPO }}
                  className="border-b border-wire py-4 flex items-center justify-between gap-4 group"
                >
                  <span className="font-mono text-[10px] text-ghost tracking-widest w-24 shrink-0 uppercase">
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      aria-label={`${item.label}: ${item.value}`}
                      className={`font-mono text-sm text-right hover:text-amber transition-colors duration-150 break-all ${
                        item.primary ? 'text-amber' : 'text-mid'
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-mid text-right">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: typographic monogram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            aria-hidden="true"
            className="hidden lg:flex flex-col items-center justify-center py-12"
          >
            <p
              className="font-syne font-black leading-none text-wire select-none"
              style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
            >
              DM
            </p>
            <p className="font-mono text-[10px] text-ghost tracking-[0.5em] uppercase mt-2">
              Daniel Mateo · Guayaquil
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-wire flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p className="font-mono text-xs text-ghost">
            © 2026 Daniel Alfredo Mateo Orellana
          </p>
          <p className="font-mono text-xs text-ghost">
            React · Vite · TypeScript · Tailwind · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
