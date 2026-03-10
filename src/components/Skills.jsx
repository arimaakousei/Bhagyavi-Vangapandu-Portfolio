import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Framer Motion', level: 65 },
    ],
  },
  {
    category: 'Tools & Libraries',
    skills: [
      { name: 'NumPy & Pandas', level: 75 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    category: 'Concepts',
    skills: [
      { name: 'Data Structures', level: 75 },
      { name: 'OOP', level: 80 },
      { name: 'Problem Solving', level: 78 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-display)' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            borderRadius: '2px',
            background: `linear-gradient(90deg, var(--accent), var(--accent-2))`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>02</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '3rem',
            lineHeight: 1.1,
          }}
        >
          What I work with
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillGroups.map(({ category, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 + 0.2 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}>
                {category}
              </div>
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={gi * 0.1 + i * 0.08 + 0.3} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
