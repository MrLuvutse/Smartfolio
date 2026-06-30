import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 🔑 Replace these with the values from your EmailJS dashboard
const EMAILJS_SERVICE_ID  = 'service_ccd1w1x';
const EMAILJS_TEMPLATE_ID = 'template_82a8yje';
const EMAILJS_PUBLIC_KEY  = 'TltP5um6oUPlJoEx9';

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [status,  setStatus]  = useState(''); // '', 'success', 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const contacts = [
    { icon: '📧', label: 'Email',    value: 'mrluvutse@gmail.com',            href: 'mailto:mrluvutse@gmail.com'   },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/leslie-luvutse', href: 'https://linkedin.com'         },
    { icon: '🐙', label: 'GitHub',   value: 'github.com/MrLuvutse',           href: 'https://github.com/MrLuvutse' },
    { icon: '📍', label: 'Location', value: 'Nairobi, Kenya',                 href: null                           },
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="badge">Contact</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-sub">Have a project or want to hire me? Let's talk!</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>

          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '24px' }}>Get In Touch</h3>
            <p style={{ color: '#8888aa', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
              I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contacts.map((c) => (
                <div key={c.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', background: 'var(--surface)',
                  borderRadius: '12px', border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '22px' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c63ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: '#f0f0ff', fontWeight: 500 }}>{c.value}</a>
                      : <span style={{ fontSize: '14px', color: '#f0f0ff', fontWeight: 500 }}>{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '13px', color: '#8888aa', display: 'block', marginBottom: '6px' }}>Name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" required
                    style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '8px', color: '#f0f0ff', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: '#8888aa', display: 'block', marginBottom: '6px' }}>Email</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="john@example.com" required
                    style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '8px', color: '#f0f0ff', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '13px', color: '#8888aa', display: 'block', marginBottom: '6px' }}>Subject</label>
                <input
                  name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Job opportunity / Project inquiry" required
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '8px', color: '#f0f0ff', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '13px', color: '#8888aa', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." required rows={5}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '8px', color: '#f0f0ff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              {status === 'success' && (
                <div style={{ padding: '12px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontSize: '14px', marginBottom: '16px' }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}