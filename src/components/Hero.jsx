import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(100px, 15vh, 160px) clamp(20px, 8vw, 120px) clamp(60px, 10vh, 100px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,240,100,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(126,255,245,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 12px var(--accent)',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
          }}
        >
          Bhagyavi
          <br />
          <span style={{
            WebkitTextStroke: '1.5px rgba(255,255,255,0.2)',
            color: 'transparent',
          }}>
            Vangapandu
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          CS Engineering student at KL University with a{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>9.65 CGPA</span>,
          building beautiful frontend experiences with React.js and exploring data with Python.
        </motion.p>

        <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
          <a
            href="#projects"
            style={{
              background: 'var(--accent)',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.01em',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,240,100,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '14px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'border-color 0.2s, background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.55)} style={{ display: 'flex', gap: '1.2rem' }}>
          {[
            { icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
            { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <FiMail size={18} />, href: 'mailto:bhagyavi07@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(200,240,100,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  )
}
