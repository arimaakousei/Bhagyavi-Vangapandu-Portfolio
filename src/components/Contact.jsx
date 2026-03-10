import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const contactItems = [
    { icon: <FiMail size={16} />, label: 'Email', value: 'bhagyavi07@gmail.com', href: 'mailto:bhagyavi07@gmail.com' },
    { icon: <FiPhone size={16} />, label: 'Phone', value: '+91 6265521092', href: 'tel:+916265521092' },
    { icon: <FiMapPin size={16} />, label: 'Location', value: 'Raipur, Chhattisgarh, India', href: null },
    { icon: <FiGithub size={16} />, label: 'GitHub', value: 'github.com/bhagyavi', href: 'https://github.com' },
    { icon: <FiLinkedin size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/bhagyavi', href: 'https://linkedin.com' },
  ]

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>06</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contact</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: '1.5rem',
            }}>
              Let's<br />
              <span style={{ color: 'var(--accent)' }}>work</span><br />
              together.
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '380px', fontWeight: 300 }}>
              I'm actively looking for internships and opportunities. Whether you have a role, a project idea, or just want to say hi — my inbox is always open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
            }}
          >
            {contactItems.map(({ icon, label, value, href }, i) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  padding: '1.1rem 1.75rem',
                  borderBottom: i < contactItems.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                        fontWeight: 400,
                        transition: 'color 0.2s',
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
