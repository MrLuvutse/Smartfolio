import React from 'react';

const SERVICES = [
  {
    icon: '💻',
    title: 'Full Stack Development',
    description: 'Building complete web applications from frontend to backend using React, Node.js, Express and MongoDB.',
    features: ['React & Next.js', 'Node.js & Express', 'MongoDB & REST APIs', 'JWT Authentication'],
    color: '#6c63ff',
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive and interactive user interfaces with modern technologies.',
    features: ['Responsive Design', 'Animations & Effects', 'Performance Optimization', 'Cross-browser Compatibility'],
    color: '#ff6584',
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    description: 'Building robust APIs and server-side applications that power your web and mobile apps.',
    features: ['REST API Design', 'Database Design', 'Authentication & Security', 'Email Integration'],
    color: '#43e97b',
  },
  {
    icon: '📄',
    title: 'CV Consulting',
    description: 'Helping professionals reposition their careers with powerful, ATS-friendly CVs that get interviews.',
    features: ['CV Redesign', 'Career Repositioning', 'LinkedIn Optimization', 'Interview Preparation'],
    color: '#f59e0b',
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="badge">What I Offer</div>
        <h2 className="section-title">My Services</h2>
        <p className="section-sub">Here's how I can help you and your business</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card"
              style={{ borderTop: `3px solid ${service.color}` }}
            >
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '14px',
                background: `${service.color}22`,
                border: `1px solid ${service.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '16px',
              }}>
                {service.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#f0f0ff' }}>
                {service.title}
              </h3>

              <p style={{ color: '#8888aa', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                {service.description}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#8888aa' }}>
                    <span style={{ color: service.color, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}