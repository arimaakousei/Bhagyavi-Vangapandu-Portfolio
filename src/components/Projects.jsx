import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'Student Management System',
    tech: ['React.js', 'JavaScript', 'CSS'],
    description:
      'A full-featured frontend application to add, update, delete and view student records. Built with reusable UI components and robust application state management.',
    highlights: ['CRUD operations', 'Reusable components', 'State management', 'Responsive UI'],
    accent: 'var(--accent)',
  },
  {
    number: '02',
    title: 'Python CLI Calculator',
    tech: ['Python', 'CLI', 'Functions'],
    description:
      'A command-line calculator supporting addition, subtraction, multiplication, and division. Clean code using Python functions and conditional logic for reliable computation.',
    highlights: ['Arithmetic operations', 'Input validation', 'Clean CLI UX', 'Modular code'],
    accent: 'var(--accent-2)',
  },
  {
    number: '03',
    title: 'Basic Data Analysis',
    tech: ['Python', 'NumPy', 'Pandas'],
    description:
      'Exploratory data analysis project using NumPy and Pandas. Performed dataset cleaning, preprocessing, and generated simple analytical insights from raw data.',
    highlights: ['Data cleaning', 'NumPy operations', 'Pandas DataFrames', 'Analytical insights'],
    accent: '#c8aaff',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>03</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Projects</span>
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
          Things I've built
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i * 0.12} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay, inView }) {
  const { number, title, tech, description, highlights, accent } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-card)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '2rem',
        alignItems: 'start',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="project-card"
      whileHover={{ borderColor: accent + '40' }}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at 0% 0%, ${accent}08 0%, transparent 60%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 800,
        color: accent + '20',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {number}
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
          color: 'var(--text)',
        }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.2rem', fontWeight: 300, fontSize: '0.95rem', maxWidth: '600px' }}>
          {description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
          {tech.map(t => (
            <span
              key={t}
              style={{
                padding: '3px 12px',
                borderRadius: '100px',
                background: accent + '15',
                color: accent,
                fontSize: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {highlights.map(h => (
            <span key={h} style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ color: accent, fontSize: '0.6rem' }}>▸</span> {h}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }} className="project-actions">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{
            width: '36px', height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          <FiGithub size={15} />
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-actions { display: none !important; }
        }
      `}</style>
    </motion.div>
  )
}
