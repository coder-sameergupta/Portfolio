import React, { useState } from 'react'
import { motion } from 'framer-motion'

const contactLinks = [
  { icon: '✉', label: 'Email', value: 'sameergupta7906@gmail.com', href: 'mailto:sameergupta7906@gmail.com', accent: 'var(--accent-primary)' },
  { icon: 'GH', label: 'GitHub', value: 'github.com/coder-sameergupta', href: 'https://github.com/coder-sameergupta', accent: 'var(--text-secondary)' },
  { icon: 'LI', label: 'LinkedIn', value: 'linkedin.com/in/sameer-gupta', href: 'https://linkedin.com/in/sameer-gupta', accent: 'var(--accent-blue)' },
  { icon: 'LC', label: 'LeetCode', value: 'leetcode.com/u/coder-sameergupta', href: 'https://leetcode.com/u/coder-sameergupta', accent: 'var(--accent-secondary)' },
  { icon: '📞', label: 'Phone', value: '+91-7906813895', href: 'tel:+917906813895', accent: '#34d399' },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-medium)',
  borderRadius: 6,
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-display)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')

    try {
      const emailjs = (await import('@emailjs/browser')).default
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are missing. Please add them to your .env file.");
        setStatus('error')
        return;
      }

      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, publicKey)

      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
    } catch (err) {
      console.error("Email sending failed:", err);
      setStatus('error')
    }
  }

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }}>
            <div className="section-label">Let's Talk</div>
            <h1 className="section-title">
              Get in<br />
              <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', color:'var(--accent-primary)' }}>Touch</em>
            </h1>
            <p style={{ color:'var(--text-secondary)', fontSize:'1rem', lineHeight:1.75, maxWidth:480, marginTop:'1rem' }}>
              Whether it's a job opportunity, collaboration, or just to say hi — my inbox is always open. I typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main layout */}
      <section className="section" style={{ paddingTop:0, borderTop:'1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:'4rem', alignItems:'start' }}>

            {/* Left — Contact info */}
            <motion.div
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.5 }}
            >
              <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.25rem', marginBottom:'2rem', letterSpacing:'-0.02em' }}>
                Contact Information
              </h2>

              <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'3rem' }}>
                {contactLinks.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity:0, x:-15 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ delay: i*0.1 }}
                    style={{
                      display:'flex', alignItems:'center', gap:'1rem',
                      padding:'1rem 1.25rem',
                      background:'var(--bg-card)', border:'1px solid var(--border-subtle)',
                      borderRadius:'var(--radius-sm)', transition:'all 0.2s',
                      textDecoration:'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = c.accent
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{
                      width:36, height:36, borderRadius:8,
                      background:`${c.accent}15`, border:`1px solid ${c.accent}30`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:c.accent, flexShrink:0,
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.15rem' }}>{c.label}</div>
                      <div style={{ fontSize:'0.85rem', color:'var(--text-secondary)' }}>{c.value}</div>
                    </div>
                    <span style={{ marginLeft:'auto', fontSize:'0.8rem', color:'var(--text-muted)' }}>↗</span>
                  </motion.a>
                ))}
              </div>

              {/* Status tag */}
              <div style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                padding:'0.5rem 1rem', background:'rgba(232,255,71,0.06)',
                border:'1px solid rgba(232,255,71,0.2)', borderRadius:100,
              }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--accent-primary)', animation:'pulse 2s infinite' }} />
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--accent-primary)', letterSpacing:'0.1em' }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }`}</style>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity:0, x:20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.5, delay:0.15 }}
            >
              <div style={{ background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-md)', padding:'2.5rem' }}>
                <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.2rem', marginBottom:'2rem', letterSpacing:'-0.02em' }}>
                  Send a Message
                </h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity:0, scale:0.9 }}
                    animate={{ opacity:1, scale:1 }}
                    style={{ textAlign:'center', padding:'3rem 1rem' }}
                  >
                    <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✓</div>
                    <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.3rem', marginBottom:'0.5rem', color:'var(--accent-primary)' }}>Message Sent!</h3>
                    <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', marginBottom:'1.5rem' }}>
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button onClick={() => setStatus(null)} className="btn-outline" style={{ fontSize:'0.85rem' }}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
                      <Field label="Name" error={errors.name}>
                        <input
                          name="name" type="text" placeholder="Sameer Gupta"
                          value={form.name} onChange={handleChange}
                          style={{ ...inputStyle, borderColor: errors.name ? '#f87171' : 'var(--border-medium)' }}
                          onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.name ? '#f87171' : 'var(--border-medium)'}
                        />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input
                          name="email" type="email" placeholder="you@email.com"
                          value={form.email} onChange={handleChange}
                          style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : 'var(--border-medium)' }}
                          onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.email ? '#f87171' : 'var(--border-medium)'}
                        />
                      </Field>
                    </div>

                    <div style={{ marginBottom:'1rem' }}>
                      <Field label="Subject" error={errors.subject}>
                        <input
                          name="subject" type="text" placeholder="Internship Opportunity / Collaboration / Hi!"
                          value={form.subject} onChange={handleChange}
                          style={{ ...inputStyle, borderColor: errors.subject ? '#f87171' : 'var(--border-medium)' }}
                          onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.subject ? '#f87171' : 'var(--border-medium)'}
                        />
                      </Field>
                    </div>

                    <div style={{ marginBottom:'1.75rem' }}>
                      <Field label="Message" error={errors.message}>
                        <textarea
                          name="message" placeholder="Tell me about the opportunity or project..."
                          value={form.message} onChange={handleChange}
                          rows={5}
                          style={{ ...inputStyle, resize:'vertical', minHeight:130, borderColor: errors.message ? '#f87171' : 'var(--border-medium)' }}
                          onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.message ? '#f87171' : 'var(--border-medium)'}
                        />
                      </Field>
                    </div>

                    {status === 'error' && (
                      <div style={{ padding:'0.75rem 1rem', background:'rgba(248,113,113,0.1)', border:'1px solid rgba(248,113,113,0.3)', borderRadius:6, marginBottom:'1rem', color:'#f87171', fontSize:'0.85rem' }}>
                        Something went wrong. Please email me directly at sameergupta7906@gmail.com
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width:'100%', justifyContent:'center', padding:'0.9rem', fontSize:'0.95rem' }}
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <span style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                          <span style={{ animation:'spin 1s linear infinite', display:'inline-block' }}>◌</span>
                          Sending...
                        </span>
                      ) : 'Send Message →'}
                    </button>
                    <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>

                    <p style={{ textAlign:'center', fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'1rem', letterSpacing:'0.05em' }}>
                      Or email directly: sameergupta7906@gmail.com
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){
          section > .container > div[style*='grid-template-columns'] { grid-template-columns: 1fr !important; }
          div[style*='grid-template-columns:1fr 1fr'] { grid-template-columns: 1fr !important; }
        }`}</style>
      </section>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.5rem' }}>{label}</label>
      {children}
      {error && <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'#f87171', marginTop:'0.35rem' }}>{error}</p>}
    </div>
  )
}
