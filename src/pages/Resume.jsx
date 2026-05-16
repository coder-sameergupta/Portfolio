import React from 'react'
import { motion } from 'framer-motion'

const resumeData = {
  education: [
    { degree: 'B.Tech — Computer Science', inst: 'VIT Bhopal University', year: '2023 – 2027', score: 'CGPA: 8.57/10', icon: '🎓' },
    { degree: 'Class 12 — CBSE', inst: 'Sumeet Rahul Goel Memorial Sr. Sec. School', year: '2022 – 2023', score: '94.8%', icon: '📚' },
    { degree: 'Class 10 — ICSE', inst: "St. Paul's Church College Unit-II", year: '2020 – 2021', score: '91.6%', icon: '📖' },
  ],
  skills: {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'C++'],
    'Web Technologies': ['HTML5', 'CSS3', 'React.js', 'Django', 'Flask', 'Django REST Framework'],
    'Databases': ['PostgreSQL', 'MySQL', 'SQLite'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
    'Coursework': ['Data Structures', 'Algorithms', 'OS', 'DBMS', 'Machine Learning'],
    'Soft Skills': ['Problem Solving', 'Teamwork', 'Communication'],
  },
  projects: [
    {
      title: 'Chemical Equipment Visualizer',
      stack: 'Django · React · PostgreSQL · REST API',
      bullets: [
        'Built a full-stack web app to upload CSV equipment data and view analysis insights',
        'Implemented authentication, file handling, and automated PDF report generation',
        'Developed Django REST API backend and responsive React frontend with database-driven statistics and visualizations',
      ]
    },
    {
      title: 'Re-Wear Share',
      stack: 'Flask · HTML · CSS · JavaScript',
      bullets: [
        'Web app for donation/exchange of clothes and essential items in local communities',
        'Implemented user authentication and donor-recipient communication features',
        'Designed database schema for tracking donations and user interests',
      ]
    },
  ],
  certifications: [
    'MATLAB Certificate', 'Vityarthi Java Certificate', 'Vityarthi Python Certificate',
    'Vityarthi AIML Certificate', 'NPTEL — Intro to Machine Learning',
    'Summer of Codefest', 'AWS Tech Essentials Certificate', 'Google IT Certificate',
  ],
  achievements: [
    'Top 9 finalist among 100 teams in SumeerOfCodeFest Hackathon',
    'Active participant in LeetCode coding competitions',
    'Consistently maintained high academic performance',
    'Core Member of the Finance Community of GrooVITy Club',
  ],
}

export default function Resume() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1.5rem' }}>
            <div>
              <div className="section-label">Curriculum Vitae</div>
              <h1 className="section-title">Resume</h1>
            </div>
            <div style={{ display:'flex', gap:'1rem' }}>
              <a
                href="mailto:sameergupta7906@gmail.com?subject=Resume Request — Sameer Gupta"
                className="btn-outline"
              >
                ✉ Request CV
              </a>
              <a
                href="https://github.com/coder-sameergupta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ↓ Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume preview */}
      <section className="section" style={{ paddingTop: 0, borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              maxWidth: 900,
              margin: '0 auto',
              fontFamily: 'var(--font-display)',
            }}
          >
            {/* Resume Header */}
            <div style={{ borderBottom: '2px solid var(--border-medium)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>
                Sameer <span style={{ color: 'var(--accent-primary)' }}>Gupta</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1rem' }}>
                Full Stack Developer · CS Student @ VIT Bhopal University
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'sameergupta7906@gmail.com', href: 'mailto:sameergupta7906@gmail.com' },
                  { label: '+91-7906813895', href: 'tel:+917906813895' },
                  { label: 'github.com/coder-sameergupta', href: 'https://github.com/coder-sameergupta' },
                  { label: 'linkedin.com/in/sameer-gupta', href: 'https://linkedin.com/in/sameer-gupta' },
                  { label: 'leetcode.com/u/coder-sameergupta', href: 'https://leetcode.com/u/coder-sameergupta' },
                ].map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--text-muted)', letterSpacing:'0.04em', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >{c.label}</a>
                ))}
              </div>
            </div>

            {/* Education */}
            <ResumeSection title="Education">
              {resumeData.education.map(e => (
                <div key={e.degree} style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', paddingBottom:'1rem', borderBottom:'1px solid var(--border-subtle)', marginBottom:'1rem', flexWrap:'wrap', gap:'0.5rem' }}>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'0.95rem' }}>{e.degree}</div>
                    <div style={{ color:'var(--text-secondary)', fontSize:'0.85rem', marginTop:'0.15rem' }}>{e.inst}</div>
                  </div>
                  <div style={{ textAlign:'right', flexShrink:0 }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--accent-primary)', fontWeight:600 }}>{e.score}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'0.1rem' }}>{e.year}</div>
                  </div>
                </div>
              ))}
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Technical Skills">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'0.75rem' }}>
                {Object.entries(resumeData.skills).map(([cat, items]) => (
                  <div key={cat}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{cat}: </span>
                    <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)' }}>{items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </ResumeSection>

            {/* Projects */}
            <ResumeSection title="Projects">
              {resumeData.projects.map(p => (
                <div key={p.title} style={{ marginBottom:'1.5rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.4rem', flexWrap:'wrap', gap:'0.5rem' }}>
                    <span style={{ fontWeight:700, fontSize:'0.95rem' }}>{p.title}</span>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', fontStyle:'italic' }}>{p.stack}</span>
                  </div>
                  <ul style={{ paddingLeft:'1.25rem' }}>
                    {p.bullets.map(b => (
                      <li key={b} style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.65, marginBottom:'0.25rem' }}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ResumeSection>

            {/* Certifications */}
            <ResumeSection title="Certifications">
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {resumeData.certifications.map(c => (
                  <span key={c} className="tag" style={{ fontSize:'0.78rem' }}>{c}</span>
                ))}
              </div>
            </ResumeSection>

            {/* Achievements */}
            <ResumeSection title="Achievements" last>
              <ul style={{ paddingLeft:'1.25rem' }}>
                {resumeData.achievements.map(a => (
                  <li key={a} style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.75 }}>{a}</li>
                ))}
              </ul>
            </ResumeSection>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            style={{ textAlign:'center', marginTop:'3rem' }}
          >
            <p style={{ color:'var(--text-muted)', fontFamily:'var(--font-mono)', fontSize:'0.78rem', letterSpacing:'0.1em', marginBottom:'1.5rem' }}>
              Want the full PDF version?
            </p>
            <a href="mailto:sameergupta7906@gmail.com?subject=Resume Request" className="btn-primary">
              ✉ Request Full Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ResumeSection({ title, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : '2.5rem' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem',
      }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem', letterSpacing:'-0.02em', textTransform:'uppercase', letterSpacing:'0.05em' }}>{title}</h3>
        <div style={{ flex:1, height:1, background:'var(--border-medium)' }} />
      </div>
      {children}
    </div>
  )
}
