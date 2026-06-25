import React from 'react';

const EVENTS = [
  {
    year: '2021',
    title: 'Started Learning to Code',
    description: 'Began my coding journey with HTML, CSS and JavaScript. Built my first static websites.',
    icon: '🌱',
    color: '#43e97b',
  },
  {
    year: '2022',
    title: 'Enrolled at Institute of Software Technologies',
    description: 'Started formal software development education in Nairobi, Kenya. Learned programming fundamentals, data structures and algorithms.',
    icon: '🎓',
    color: '#6c63ff',
  },
  {
    year: '2023',
    title: 'Graduated & Started Building Projects',
    description: 'Graduated from IST and immediately started building portfolio projects. Learned React, Node.js and MongoDB.',
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    year: '2024',
    title: 'Built CineVault',
    description: 'Built my first full React app — a movie discovery platform with watchlist, search and smooth animations.',
    icon: '🎬',
    color: '#ff6584',
  },
  {
    year: '2025',
    title: 'Built SpendWise',
    description: 'Built a complete full-stack MERN finance app with JWT auth, email notifications, recurring transactions, and deployed it live.',
    icon: '💰',
    color: '#22c55e',
  },
  {
    year: '2026',
    title: 'Open to Work',
    description: 'Actively seeking my first professional developer role. Ready to contribute, learn and grow in a great team.',
    icon: '🚀',
    color: '#6c63ff',
  },
];

export default function Timeline() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="badge reveal">My Journey</div>
        <h2 className="section-title reveal">Experience & Timeline</h2>
        <p className="section-sub reveal">How I got here — my coding journey so far</p>

        <div className="timeline">
          {EVENTS.map((event, i) => (
            <div key={event.year} className={`timeline-item reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  background: `${event.color}22`,
                  border: `1px solid ${event.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', flexShrink: 0,
                }}>
                  {event.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', color: event.color, fontWeight: 700, padding: '2px 10px', background: `${event.color}22`, borderRadius: '99px' }}>
                      {event.year}
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f0f0ff' }}>
                      {event.title}
                    </h3>
                  </div>
                  <p style={{ color: '#8888aa', fontSize: '14px', lineHeight: 1.7 }}>
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}