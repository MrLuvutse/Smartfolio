import React, { useEffect, useState } from 'react';

const TITLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Node.js Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);

  useEffect(() => {
    const target = TITLES[titleIndex];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '80px',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '680px' }}>
          <div className="badge animate">👋 Available for hire</div>

          <h1 className="animate-2" style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}>
            Hi, I'm{' '}
            <span style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Leslie Luvutse
            </span>
          </h1>

          <h2 className="animate-3" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#8888aa', marginBottom: '24px', minHeight: '40px' }}>
            <span style={{ color: '#6c63ff' }}>{displayed}</span>
            <span style={{ animation: 'pulse 1s infinite', color: '#6c63ff' }}>|</span>
          </h2>

          <p className="animate-4" style={{ fontSize: '18px', color: '#8888aa', lineHeight: 1.8, marginBottom: '40px', maxWidth: '560px' }}>
            A passionate software developer from Nairobi, Kenya 🇰🇪 — building full-stack web applications that solve real-world problems. Specializing in the MERN stack with a focus on clean code and great user experiences.
          </p>

          <div className="animate-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View My Work →</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Get In Touch</button>
            <a href="https://github.com/MrLuvutse" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          </div>

          <div style={{ display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap' }}>
            {[
              { num: '3+',  label: 'Projects Built' },
              { num: '2+',  label: 'Years Learning'  },
              { num: '10+', label: 'Tech Skills'     },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#6c63ff' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#8888aa', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}