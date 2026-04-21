import { motion, useReducedMotion } from 'framer-motion'

const bootLines = [
  { text: '> sistema.init()', color: 'text-ghost' },
  { text: '> identificando_usuario...', color: 'text-ghost' },
  { text: '> cargando 47_módulos...', color: 'text-mid' },
  { text: '> conexión.establecida ✓', color: 'text-teal' },
]

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const d = (ms: number) => (reduce ? 0 : ms / 1000)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Presentación"
    >
      {/* Amber grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 100, 26, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 100, 26, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial amber glow — bottom left corner */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse at 0% 100%, rgba(232, 100, 26, 0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
        {/* ── Left: text content ── */}
        <div className="relative z-10">
          {/* Boot sequence */}
          <div className="mb-8" aria-hidden="true">
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: reduce ? 0 : -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: d(300 + i * 180),
                  duration: d(350),
                  ease: 'easeOut',
                }}
                className={`font-mono text-xs tracking-wide mb-1 ${line.color}`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Name — clipped slide-up reveal */}
          <div className="overflow-hidden mb-1">
            <motion.p
              initial={{ y: reduce ? 0 : 90, opacity: reduce ? 1 : 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: d(1300), duration: d(800), ease: EASE_EXPO }}
              className="font-syne font-black leading-none tracking-tighter text-body"
              style={{ fontSize: 'clamp(2.6rem, 10vw, 7.5rem)' }}
            >
              DANIEL
            </motion.p>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: reduce ? 0 : 90, opacity: reduce ? 1 : 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: d(1460), duration: d(800), ease: EASE_EXPO }}
              className="font-syne font-black leading-none tracking-tighter text-amber"
              style={{ fontSize: 'clamp(2.6rem, 10vw, 7.5rem)' }}
            >
              MATEO
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: d(1900), duration: d(600) }}
            className="font-mono text-xs text-mid tracking-[0.18em] uppercase mb-10 flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="inline-block w-6 h-px bg-amber flex-shrink-0"
            />
            Ingeniero de Software
            <span aria-hidden="true" className="text-wire">·</span>
            Sistemas Empresariales & Cloud
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d(2150), duration: d(500), ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="font-mono text-xs tracking-widest uppercase bg-amber text-bg px-6 py-3 hover:bg-amber-hot transition-colors duration-150 font-medium focus-visible:outline-amber"
            >
              Ver proyectos →
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest uppercase border border-wire text-mid px-6 py-3 hover:border-amber hover:text-amber transition-colors duration-150"
            >
              Contactar
            </a>
          </motion.div>
        </div>

        {/* ── Right: Profile photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: d(1700), duration: d(900), ease: EASE_EXPO }}
          className="hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative w-64 h-[22rem]">
            {/* Offset amber border frame */}
            <div className="absolute inset-0 border border-amber/25 translate-x-4 translate-y-4 pointer-events-none" />

            {/* Photo container */}
            <div
              className="relative w-full h-full overflow-hidden border border-amber/20"
              style={{ boxShadow: '0 0 80px rgba(232, 100, 26, 0.08)' }}
            >
              <img
                src="/profile-picture.jpeg"
                alt="Daniel Mateo Orellana, Ingeniero de Software"
                className="w-full h-full object-cover object-center"
                style={{ filter: 'contrast(1.08) saturate(0.75) brightness(0.88)' }}
                loading="eager"
                fetchPriority="high"
              />
              {/* Amber tint layer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'rgba(232, 100, 26, 0.07)',
                  mixBlendMode: 'color',
                }}
              />
              {/* Bottom gradient fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(9,9,14,0.6), transparent)',
                }}
              />
            </div>

            {/* Role badge */}
            <div className="absolute -bottom-3 left-0 right-0 flex justify-center">
              <span className="font-mono text-[10px] tracking-widest text-mid bg-card border border-wire px-3 py-1">
                INGENIERO EN COMPUTACIÓN · ESPOL
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d(2800), duration: d(500) }}
        aria-hidden="true"
        className="absolute bottom-8 left-6 font-mono text-xs text-ghost tracking-[0.3em] hidden md:flex items-center gap-3"
      >
        <div className="w-6 h-px bg-ghost" />
        SCROLL
      </motion.div>
    </section>
  )
}
