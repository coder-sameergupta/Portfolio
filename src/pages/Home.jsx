import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ROLES = ['Full Stack Developer', 'React Enthusiast', 'Problem Solver', 'CS Student @ VIT']

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) { const t = setTimeout(() => setPause(false), 1200); return () => clearTimeout(t) }
    const current = ROLES[roleIdx]
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
        return () => clearTimeout(t)
      } else { const t = setTimeout(() => setDeleting(true), 2000); return () => clearTimeout(t) }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
        return () => clearTimeout(t)
      } else { setDeleting(false); setRoleIdx((roleIdx + 1) % ROLES.length); setPause(true) }
    }
  }, [displayed, deleting, roleIdx, pause])

  return (
    <span style={{ color: 'var(--accent-primary)' }}>
      {displayed}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  )
}

function FloatingOrb({ x, y, size, color, delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute', left: x, top: y,
        width: size, height: size, borderRadius: '50%',
        background: `radial-gradient(circle at 40% 40%, ${color}, transparent 70%)`,
        filter: 'blur(60px)', opacity: 0.25, pointerEvents: 'none',
      }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

const stats = [
  { value: '8.57', label: 'CGPA', suffix: '/10' },
  { value: '2', label: 'Projects Built', suffix: '+' },
  { value: '8', label: 'Certifications', suffix: '' },
  { value: 'Top 9', label: 'SummerOfCodeFest', suffix: '' },
]

const featuredProjects = [
  {
    title: 'Chemical Equipment Visualizer',
    desc: 'Full-stack web app for CSV data analysis with auto-generated PDF reports and interactive visualizations.',
    stack: ['Django', 'React', 'REST API', 'PostgreSQL'],
    accent: 'var(--accent-primary)',
    link: 'https://github.com/coder-sameergupta',
  },
  {
    title: 'Re-Wear Share',
    desc: 'Community platform for donating and exchanging clothes — with auth, donor-recipient messaging, and donation tracking.',
    stack: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    accent: 'var(--accent-secondary)',
    link: 'https://github.com/coder-sameergupta',
  },
]

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .hero-scroll-hint { animation: float 2.5s ease-in-out infinite; }
      `}</style>

      {/* ======= HERO ======= */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', paddingTop: 'var(--nav-height)', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

        {/* Orbs */}
        <FloatingOrb x="10%" y="15%" size={400} color="rgba(232,255,71,0.8)" delay={0} />
        <FloatingOrb x="70%" y="60%" size={500} color="rgba(255,107,53,0.8)" delay={3} />
        <FloatingOrb x="50%" y="-5%" size={300} color="rgba(77,159,255,0.8)" delay={6} />

        {/* Decorative line */}
        <div style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          width: '2rem', height: '45%',
          borderRight: '1px solid var(--border-subtle)', display: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 820 }}>
            {/* Pre-label */}
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Available for internships & projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4,0,0.2,1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(3.2rem, 9vw, 7rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '0.75rem',
              }}
            >
              Sameer<br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Gupta</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              <TypingText />
            </motion.div>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                maxWidth: 560,
                marginBottom: '2.5rem',
              }}
            >
              Third-year CS student at VIT Bhopal crafting scalable web applications.
              I bridge the gap between elegant UIs and robust backend systems — turning ideas into production-ready products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
            >
              <Link to="/projects" className="btn-primary">
                View Projects →
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
              <a
                href="https://github.com/coder-sameergupta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            >
              {[
                { label: 'LinkedIn', url: 'https://linkedin.com/in/sameer-gupta' },
                { label: 'LeetCode', url: 'https://leetcode.com/u/coder-sameergupta' },
                { label: 'Email', url: 'mailto:sameergupta7906@gmail.com' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute', bottom: '-4rem', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* ======= STATS ======= */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '2rem 1rem', borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--accent-primary)' }}>
                  {s.value}<span style={{ fontSize: '0.5em', color: 'var(--text-muted)' }}>{s.suffix}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){
          section > .container > div { grid-template-columns: repeat(2,1fr) !important; }
          section > .container > div > div:nth-child(2), section > .container > div > div:nth-child(4) { border-right: none !important; }
        }`}</style>
      </section>

      {/* ======= FEATURED PROJECTS ======= */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
          >
            <div>
              <div className="section-label">Featured Work</div>
              <h2 className="section-title">Projects that<br /><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-primary)' }}>matter</em></h2>
            </div>
            <Link to="/projects" className="btn-outline">View All →</Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {featuredProjects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                style={{
                  display: 'block',
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = p.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: `${p.accent}18`, border: `1px solid ${p.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>⚡</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>↗ VIEW</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.stack.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){
          section > .container > div:last-child { grid-template-columns: 1fr !important; }
        }`}</style>
      </section>

      {/* ======= CTA STRIP ======= */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Open to opportunities
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              Let's build something<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-primary)' }}>remarkable together</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Currently seeking internships and collaborative projects in full stack development.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
              <Link to="/resume" className="btn-outline">Download Resume</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
