import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2020–21', title: 'Class 10 — ICSE', org: "St. Paul's Church College Unit-II", detail: 'Scored 91.6% — Built a strong foundation in sciences and mathematics.' },
  { year: '2022–23', title: 'Class 12 — CBSE', org: 'Sumeet Rahul Goel Memorial Sr. Sec. School', detail: 'Scored 94.8% — Developed passion for computer science and programming.' },
  { year: '2023', title: 'Joined VIT Bhopal', org: 'B.Tech — Computer Science', detail: 'Began undergraduate journey. Dove deep into DSA, web development, and competitive programming.' },
  { year: '2023–24', title: 'First Projects', org: 'Re-Wear Share', detail: 'Built first full-stack web application using Flask. Learned authentication, database design, and deployment.' },
  { year: '2024', title: 'Hackathon Achievement', org: 'SumeerOfCodeFest', detail: 'Reached Top 9 among 100 teams — validated problem-solving and teamwork skills under pressure.' },
  { year: '2024–25', title: 'Advanced Projects', org: 'Chemical Equipment Visualizer', detail: 'Built Django REST API + React frontend with data visualization, PDF generation, and file handling.' },
  { year: 'Present', title: 'Third Year', org: 'CGPA: 8.57/10', detail: 'Seeking internships, building projects, and levelling up in full-stack and system design.' },
]

const interests = [
  { icon: '♟', label: 'Chess', desc: 'Strategic thinking and competitive play' },
  { icon: '🎸', label: 'Guitar', desc: 'Playing and exploring music' },
  { icon: '💻', label: 'Competitive Coding', desc: 'LeetCode challenges and contests' },
  { icon: '🏗️', label: 'Building', desc: 'Creating tools that solve real problems' },
]

const achievements = [
  { icon: '🏆', text: 'Top 9 finalist among 100 teams — SumeerOfCodeFest Hackathon' },
  { icon: '📊', text: 'CGPA 8.57/10 — Consistently high academic performance' },
  { icon: '👥', text: 'Core Member — Finance Community, GrooVITy Club' },
  { icon: '💻', text: 'Active LeetCode competitor and problem solver' },
  { icon: '🎓', text: '8+ professional certifications across ML, Cloud, Java, Python' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            <div className="section-label">About Me</div>
            <h1 className="section-title" style={{ maxWidth: 700 }}>
              Developer, problem solver,<br />
              <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', color:'var(--accent-primary)' }}>perpetual learner</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>
            {/* Text */}
            <motion.div
              initial={{ opacity:0, x:-30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6 }}
            >
              <p style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.85, marginBottom:'1.5rem' }}>
                Hi, I'm <strong style={{ color:'var(--text-primary)' }}>Sameer Gupta</strong> — a third-year Computer Science undergraduate at <strong style={{ color:'var(--text-primary)' }}>VIT Bhopal University</strong>. I'm passionate about building full-stack web applications that are both technically solid and genuinely useful.
              </p>
              <p style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.85, marginBottom:'1.5rem' }}>
                My journey started with curiosity about how websites work, which quickly evolved into a love for backend systems, REST APIs, and creating seamless frontend experiences. I believe great software lives at the intersection of clean code and thoughtful design.
              </p>
              <p style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.85, marginBottom:'2rem' }}>
                Outside the terminal, I'm usually playing chess, picking up my guitar, or grinding LeetCode. I thrive in team environments and love the energy of hackathons — where constraints spark creativity.
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <Link to="/projects" className="btn-primary">View My Work →</Link>
                <a href="mailto:sameergupta7906@gmail.com" className="btn-outline">Get in Touch</a>
              </div>
            </motion.div>

            {/* Card grid */}
            <motion.div
              initial={{ opacity:0, x:30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.15 }}
            >
              {/* Profile card */}
              <div style={{ background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-md)', padding:'2rem', marginBottom:'1rem' }}>
                <div style={{ display:'flex', gap:'1rem', alignItems:'center', marginBottom:'1.5rem' }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background:'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.4rem', color:'var(--bg-primary)', flexShrink:0 }}>SG</div>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.1rem' }}>Sameer Gupta</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--text-muted)', letterSpacing:'0.08em' }}>Full Stack Developer</div>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
                  {[
                    { label:'Location', value:'Bhopal, MP' },
                    { label:'University', value:'VIT Bhopal' },
                    { label:'Batch', value:'2023–2027' },
                    { label:'CGPA', value:'8.57 / 10' },
                  ].map(item => (
                    <div key={item.label} style={{ padding:'0.75rem', background:'var(--bg-tertiary)', borderRadius:8 }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.25rem' }}>{item.label}</div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.9rem' }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
                {interests.map(i => (
                  <div key={i.label} style={{ padding:'1rem', background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:12, display:'flex', gap:'0.75rem', alignItems:'flex-start' }}>
                    <span style={{ fontSize:'1.3rem' }}>{i.icon}</span>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.875rem' }}>{i.label}</div>
                      <div style={{ fontSize:'0.75rem', color:'var(--text-muted)', marginTop:'0.15rem' }}>{i.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){
          section > .container > div[style*='grid-template-columns:1fr 1fr'] { grid-template-columns: 1fr !important; }
        }`}</style>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background:'var(--bg-secondary)', borderTop:'1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:'3rem' }}>
            <div className="section-label">Journey</div>
            <h2 className="section-title">My Timeline</h2>
          </motion.div>

          <div style={{ position:'relative', paddingLeft:'2rem' }}>
            {/* Vertical line */}
            <div style={{ position:'absolute', left:0, top:8, bottom:8, width:1, background:'var(--border-medium)' }} />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5, delay:i*0.1 }}
                style={{ position:'relative', paddingBottom:'2.5rem', paddingLeft:'1.5rem' }}
              >
                {/* Dot */}
                <div style={{
                  position:'absolute', left:'-2.5rem', top:6,
                  width:10, height:10, borderRadius:'50%',
                  background: item.year === 'Present' ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  border: item.year === 'Present' ? '2px solid var(--accent-primary)' : '2px solid var(--border-medium)',
                  boxShadow: item.year === 'Present' ? '0 0 12px var(--accent-primary)' : 'none',
                }} />
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--accent-primary)', letterSpacing:'0.1em', marginBottom:'0.3rem' }}>{item.year}</div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.05rem', marginBottom:'0.15rem' }}>{item.title}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--text-muted)', marginBottom:'0.5rem' }}>{item.org}</div>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.65, maxWidth:580 }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section" style={{ borderTop:'1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:'3rem' }}>
            <div className="section-label">Recognition</div>
            <h2 className="section-title">Achievements</h2>
          </motion.div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'1rem' }}>
            {achievements.map((a, i) => (
              <motion.div
                key={a.text}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay:i*0.08 }}
                style={{ padding:'1.25rem 1.5rem', background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-sm)', display:'flex', gap:'1rem', alignItems:'center' }}
              >
                <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{a.icon}</span>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.5 }}>{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
