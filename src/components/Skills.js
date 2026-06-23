import React from 'react';

const SKILLS = [
  { name: 'React.js',     level: 85, color: '#61dafb', icon: '⚛️' },
  { name: 'Node.js',      level: 80, color: '#6cc24a', icon: '🟢' },
  { name: 'JavaScript',   level: 85, color: '#f7df1e', icon: '🟨' },
  { name: 'MongoDB',      level: 75, color: '#47a248', icon: '🍃' },
  { name: 'Express.js',   level: 80, color: '#ffffff', icon: '🚀' },
  { name: 'HTML & CSS',   level: 90, color: '#e34f26', icon: '🎨' },
  { name: 'Git & GitHub', level: 80, color: '#f05032', icon: '🐙' },
  { name: 'REST APIs',    level: 80, color: '#6c63ff', icon: '🔗' },
  { name: 'JWT Auth',     level: 75, color: '#ff6584', icon: '🔐' },
  { name: 'Tailwind CSS', level: 70, color: '#38bdf8', icon: '💨' },
];

const TOOLS = [
  'VS Code', 'Postman', 'MongoDB Atlas', 'Vercel', 'Render',
  'GitHub', 'Nodemailer', 'Recharts', 'React Router', 'Axios',
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="badge">My Skills</div>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-sub">Technologies and tools I use to build full-stack applications</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className="card" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '15px' }}>{skill.name}</span>
                </div>
                <span style={{ fontSize: '13px', color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '99px', height: '6px', overflow: 'hidden' }}>
                <div style={{ width: `${skill.level}%`, height: '100%', background: skill.color, borderRadius: '99px', transition: 'width 1s ease' }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#8888aa' }}>Tools & Platforms</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {TOOLS.map((tool) => (
              <span key={tool} style={{
                padding: '8px 18px', borderRadius: '99px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                fontSize: '14px', color: '#f0f0ff', fontWeight: 500,
                cursor: 'default', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = '#6c63ff'; e.target.style.color = '#6c63ff'; }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = '#f0f0ff'; }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}