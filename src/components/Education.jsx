import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    institution: 'KL University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2024 – Present',
    grade: 'CGPA: 9.65',
    icon: '🎓',
    current: true,
  },
  {
    institution: 'GEMS School',
    degree: 'Class XII',
    period: '2024',
    grade: 'CGPA: 8.8',
    icon: '🏫',
    current: false,
  },
  {
    institution: 'DIS School',
    degree: 'Class X',
    period: '2022',
    grade: 'CGPA: 9.6',
    icon: '📚',
    current: false,
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>04</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Education</span>
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
          }}
        >
          Academic journey
        </motion.h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '22px',
            top: '28px',
            bottom: '28px',
            width: '1px',
            background: 'linear-gradient(180deg, var(--accent), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Dot */}
                <div style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: item.current ? 'var(--accent)' : 'var(--bg-card)',
                  border: `1px solid ${item.current ? 'var(--accent)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  zIndex: 1,
                  boxShadow: item.current ? '0 0 20px rgba(200,240,100,0.25)' : 'none',
                }}>
                  {item.icon}
                </div>

                <div style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  border: `1px solid ${item.current ? 'rgba(200,240,100,0.2)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem 2rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                      {item.institution}
                      {item.current && (
                        <span style={{
                          marginLeft: '10px',
                          fontSize: '0.65rem',
                          background: 'var(--accent)',
                          color: '#000',
                          padding: '2px 8px',
                          borderRadius: '100px',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          verticalAlign: 'middle',
                        }}>Current</span>
                      )}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-display)' }}>{item.period}</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{item.grade}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
