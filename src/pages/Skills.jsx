import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: 'var(--accent-primary)',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 82 },
      { name: 'JavaScript', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ]
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: 'var(--accent-secondary)',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Framer Motion', level: 70 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Responsive Design', level: 88 },
    ]
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'Django', level: 75 },
      { name: 'Django REST Framework', level: 72 },
      { name: 'Flask', level: 78 },
      { name: 'REST APIs', level: 80 },
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: '⌥',
    color: 'var(--accent-purple)',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux/Bash', level: 68 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 75 },
    ]
  },
  {
    category: 'Databases',
    icon: '⬡',
    color: '#34d399',
    skills: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 72 },
      { name: 'SQLite', level: 78 },
    ]
  },
  {
    category: 'Coursework',
    icon: '△',
    color: '#f472b6',
    skills: [
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
      { name: 'Operating Systems', level: 72 },
      { name: 'DBMS', level: 75 },
      { name: 'Machine Learning', level: 65 },
    ]
  },
]

const techBadges = [
  'Java','Python','JavaScript','C++','React.js','Django','Flask',
  'HTML5','CSS3','PostgreSQL','MySQL','Git','GitHub','REST API',
  'Django REST','Postman','Linux','VS Code','MATLAB',
]

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      style={{ marginBottom: '1rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: 'var(--bg-tertiary)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.4,0,0.2,1] }}
          style={{ height: '100%', background: color, borderRadius: 2 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }}>
            <div className="section-label">Technical Arsenal</div>
            <h1 className="section-title">
              Skills &<br />
              <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', color:'var(--accent-primary)' }}>Expertise</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tech badge cloud */}
      <section style={{ padding: '2rem 0 4rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', padding: '1.5rem 0' }}
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.08, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                style={{
                  padding: '0.4rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 100,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                  cursor: 'default',
                  transition: 'all 0.2s',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skill cards with bars */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:'3rem' }}>
            <div className="section-label">Breakdown</div>
            <h2 className="section-title">Proficiency Levels</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                onMouseEnter={() => setHovered(gi)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-card)',
                  border: `1px solid ${hovered === gi ? group.color + '50' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${group.color}18`,
                    border: `1px solid ${group.color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '1rem', color: group.color,
                  }}>
                    {group.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>{group.category}</span>
                </div>
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={group.color} delay={si * 0.08} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft skills */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:'2.5rem' }}>
            <div className="section-label">Beyond the Code</div>
            <h2 className="section-title">Soft Skills</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { skill: 'Problem Solving', desc: 'Analytical thinking and LeetCode-tested' },
              { skill: 'Teamwork', desc: 'Collaborative hackathons and club work' },
              { skill: 'Communication', desc: 'Clear technical and non-technical writing' },
              { skill: 'Time Management', desc: 'Balancing academics, projects & coding' },
              { skill: 'Adaptability', desc: 'Fast learner across new stacks' },
              { skill: 'Leadership', desc: 'Finance Community core member' },
            ].map((s, i) => (
              <motion.div
                key={s.skill}
                initial={{ opacity:0, scale:0.95 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.3, delay:i*0.07 }}
                whileHover={{ y: -4 }}
                style={{ padding:'1.25rem', background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-sm)', cursor:'default' }}
              >
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', marginBottom:'0.4rem' }}>{s.skill}</div>
                <div style={{ fontSize:'0.8rem', color:'var(--text-muted)' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
