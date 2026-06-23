import React, { useState } from 'react';

const PROJECTS = [
  {
    title: 'SpendWise',
    subtitle: 'Full Stack Finance App',
    description: 'A comprehensive personal finance manager built with the MERN stack. Features JWT authentication, budget tracking with email alerts, recurring transactions, multiple accounts, financial goals, AI spending insights, CSV export, dark mode, and mobile-responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Nodemailer', 'Recharts'],
    live: 'https://spendwise-one-steel.vercel.app',
    github: 'https://github.com/MrLuvutse/Spendwise',
    color: '#22c55e',
    emoji: '💰',
    featured: true,
  },
  {
    title: 'CineVault',
    subtitle: 'Movie Discovery App',
    description: 'A React-based movie discovery app with watchlist functionality, search, filters, and smooth animations. Built with Context API for state management and localStorage for persistence.',
    tags: ['React', 'Context API', 'CSS', 'TMDB API', 'LocalStorage'],
    live: '#',
    github: 'https://github.com/MrLuvutse',
    color: '#6c63ff',
    emoji: '🎬',
    featured: false,
  },
  {
    title: 'Smartfolio',
    subtitle: 'Developer Portfolio',
    description: 'This very portfolio! Built with React featuring smooth animations, typing effects, dark theme, mobile-responsive design, and skill showcasing.',
    tags: ['React', 'CSS3', 'JavaScript', 'Vercel'],
    live: '#',
    github: 'https://github.com/MrLuvutse',
    color: '#ff6584',
    emoji: '🚀',
    featured: false,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="badge">My Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">Projects I've built to showcase my full-stack skills</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderLeft: `3px solid ${project.color}`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(108,99,255,0.15)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  color: '#6c63ff', fontSize: '12px', fontWeight: 600,
                  padding: '4px 12px', borderRadius: '99px',
                }}>⭐ Featured</div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px', alignItems: 'start' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '16px',
                  background: `${project.color}22`, border: `1px solid ${project.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', flexShrink: 0,
                }}>
                  {project.emoji}
                </div>

                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#f0f0ff', marginBottom: '2px' }}>{project.title}</h3>
                    <span style={{ fontSize: '13px', color: project.color, fontWeight: 500 }}>{project.subtitle}</span>
                  </div>

                  <p style={{ color: '#8888aa', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '4px 12px', borderRadius: '99px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: '12px', color: '#8888aa', fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                        Live Demo →
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '13px' }}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="https://github.com/MrLuvutse" target="_blank" rel="noreferrer" className="btn btn-outline">
            See All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}