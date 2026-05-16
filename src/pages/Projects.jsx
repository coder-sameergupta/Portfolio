import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Chemical Equipment Visualizer',
    desc: 'A full-stack web platform that allows engineers to upload CSV files containing chemical equipment data, automatically generates insightful analytics, and produces professional PDF reports — complete with database-driven statistics and interactive data visualizations.',
    longDesc: 'Built with Django REST API on the backend and React on the frontend. Features include CSV file upload with parsing, authentication & authorization, interactive charts, automated report generation as downloadable PDFs, and a responsive dashboard UI with real-time statistics.',
    stack: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'PDF Generation', 'Data Visualization', 'Authentication'],
    category: 'Full Stack',
    github: 'https://github.com/coder-sameergupta',
    demo: 'https://github.com/coder-sameergupta',
    highlights: ['Django REST API backend', 'React responsive frontend', 'Automated PDF report generation', 'CSV data parsing & analysis', 'Database-driven statistics'],
    year: '2024',
    accent: 'var(--accent-primary)',
  },
  {
    id: 2,
    title: 'Re-Wear Share',
    desc: 'A community-driven web application enabling local donation and exchange of clothes and essential items. The platform connects donors with recipients, tracks donation histories, and facilitates direct communication — making charitable giving simple and local.',
    longDesc: 'Developed with Flask on the backend and vanilla HTML/CSS/JavaScript frontend. Implements full user authentication, donor-recipient messaging system, donation tracking with statuses, and a carefully designed database schema for efficient data management.',
    stack: ['Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Authentication', 'REST API'],
    category: 'Web App',
    github: 'https://github.com/coder-sameergupta',
    demo: 'https://github.com/coder-sameergupta',
    highlights: ['User authentication & sessions', 'Donor-recipient messaging', 'Database schema design', 'Donation tracking system', 'Community-focused UX'],
    year: '2023',
    accent: 'var(--accent-secondary)',
  },
]

const categories = ['All', 'Full Stack', 'Web App']

export default function Projects() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.stack.some(s => s.toLowerCase().includes(search.toLowerCase()))
    const matchFilter = filter === 'All' || p.category === filter
    return matchSearch && matchFilter
  })

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }}>
            <div className="section-label">Portfolio</div>
            <h1 className="section-title">
              Projects &<br />
              <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', color:'var(--accent-primary)' }}>Builds</em>
            </h1>
            <p style={{ color:'var(--text-secondary)', fontSize:'1rem', lineHeight:1.7, maxWidth:560, marginTop:'1rem' }}>
              Every project here is a real problem solved. From full-stack web platforms to community apps — built with clean code and genuine purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '1.5rem 0 2rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: 380 }}>
              <svg style={{ position:'absolute', left:'0.9rem', top:'50%', transform:'translateY(-50%)', color:'var(--text-muted)' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by name or tech..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '0.65rem 1rem 0.65rem 2.5rem',
                  background: 'var(--bg-card)', border: '1px solid var(--border-medium)',
                  borderRadius: 6, color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-medium)'}
              />
            </div>

            {/* Category filters */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: filter === cat ? 'var(--accent-primary)' : 'var(--bg-card)',
                    color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    border: '1px solid ' + (filter === cat ? 'var(--accent-primary)' : 'var(--border-medium)'),
                    borderRadius: 6,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: filter === cat ? 700 : 400,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.08em', marginLeft:'auto' }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                style={{ textAlign:'center', padding:'4rem 0', color:'var(--text-muted)', fontFamily:'var(--font-mono)', fontSize:'0.85rem' }}
              >
                No projects match your search.
              </motion.div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity:0, y:20 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, scale:0.95 }}
                    transition={{ duration:0.4, delay:i*0.1 }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = p.accent + '60'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                  >
                    {/* Card header */}
                    <div style={{ padding: '2rem', borderBottom: expanded === p.id ? '1px solid var(--border-subtle)' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <span style={{
                              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                              padding: '0.2rem 0.6rem',
                              background: `${p.accent}15`,
                              border: `1px solid ${p.accent}35`,
                              borderRadius: 4,
                              color: p.accent,
                              letterSpacing: '0.08em',
                            }}>{p.category}</span>
                            <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)' }}>{p.year}</span>
                          </div>
                          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.4rem', letterSpacing:'-0.025em', marginBottom:'0.75rem' }}>{p.title}</h3>
                          <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7, maxWidth:640 }}>{p.desc}</p>
                        </div>

                        {/* Action buttons */}
                        <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', flexShrink:0 }}>
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize:'0.8rem', padding:'0.5rem 1.2rem', whiteSpace:'nowrap' }}>
                            GitHub ↗
                          </a>
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize:'0.8rem', padding:'0.5rem 1.2rem', whiteSpace:'nowrap' }}>
                            Live Demo ↗
                          </a>
                        </div>
                      </div>

                      {/* Stack tags */}
                      <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'1.25rem' }}>
                        {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>

                      {/* Expand toggle */}
                      <button
                        onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                        style={{
                          marginTop:'1.25rem',
                          background:'none', border:'none', cursor:'pointer',
                          fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                          color:'var(--text-muted)', letterSpacing:'0.08em',
                          display:'flex', alignItems:'center', gap:'0.4rem',
                          transition:'color 0.2s', padding:0,
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >
                        {expanded === p.id ? '▲ COLLAPSE' : '▼ MORE DETAILS'}
                      </button>
                    </div>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {expanded === p.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4,0,0.2,1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                              <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Deep Dive</p>
                              <p style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.75 }}>{p.longDesc}</p>
                            </div>
                            <div>
                              <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Key Features</p>
                              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                                {p.highlights.map(h => (
                                  <div key={h} style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
                                    <div style={{ width:5, height:5, borderRadius:'50%', background:p.accent, flexShrink:0 }} />
                                    <span style={{ fontSize:'0.875rem', color:'var(--text-secondary)' }}>{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'4rem 0', borderTop:'1px solid var(--border-subtle)', background:'var(--bg-secondary)', textAlign:'center' }}>
        <div className="container">
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--text-muted)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'0.75rem' }}>More coming soon</p>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.2rem)', letterSpacing:'-0.025em', marginBottom:'1.5rem' }}>
              See all my code on GitHub
            </h2>
            <a href="https://github.com/coder-sameergupta" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit GitHub →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
