export default function Footer() {
  return (
    <footer style={{
      padding: '2rem clamp(20px, 8vw, 120px)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem' }}>
        BV<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
        © {new Date().getFullYear()} Bhagyavi Vangapandu. Built with React & Framer Motion.
      </span>
      <a
        href="#hero"
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          transition: 'color 0.2s',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
        }}
        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
        onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
      >
        Back to top ↑
      </a>
    </footer>
  )
}
