import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '9.65', label: 'CGPA at KL University' },
  { value: '3+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '2024', label: 'Started B.Tech' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>01</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>About</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}>
              Building things<br />
              <span style={{ color: 'var(--accent)' }}>one line</span> at a time.
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
              I'm a Computer Science Engineering student based in Raipur, Chhattisgarh, currently pursuing my B.Tech at KL University. I have a deep interest in frontend development and love crafting interfaces that are both functional and visually compelling.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
              Beyond code, I bring strong communication and leadership skills to every team I join. I'm always looking to learn new technologies and push my understanding of computer science further.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              {stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    padding: '2rem 1.5rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1a1a24'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Languages</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['English', 'Hindi', 'Telugu'].map(lang => (
                  <span key={lang} style={{
                    padding: '4px 14px',
                    borderRadius: '100px',
                    border: '1px solid var(--border)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>{lang}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
