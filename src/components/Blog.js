import React from 'react';

const ARTICLES = [
  {
    title: 'How I Built SpendWise - A Full Stack Finance App',
    excerpt: 'A deep dive into building a complete MERN stack application with JWT auth, email notifications, recurring transactions and more.',
    date: 'June 2026',
    readTime: '8 min read',
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '💰',
    color: '#22c55e',
    link: 'https://github.com/MrLuvutse/Spendwise',
  },
  {
    title: 'Building Smooth Animations in React Without Libraries',
    excerpt: 'How to create professional-looking animations using pure CSS and React hooks - no Framer Motion needed.',
    date: 'May 2026',
    readTime: '5 min read',
    tags: ['React', 'CSS', 'Animation'],
    emoji: '✨',
    color: '#6c63ff',
    link: '#',
  },
  {
    title: 'JWT Authentication in Node.js - A Complete Guide',
    excerpt: 'Everything you need to know about implementing secure JWT authentication in your Express.js API from scratch.',
    date: 'April 2026',
    readTime: '10 min read',
    tags: ['Node.js', 'Security', 'JWT'],
    emoji: '🔐',
    color: '#ff6584',
    link: '#',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="badge">Knowledge Sharing</div>
        <h2 className="section-title">Articles and Blog</h2>
        <p className="section-sub">Thoughts, learnings and guides from my developer journey</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {ARTICLES.map(function(article) {
            return (
              <a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card"
                  style={{ height: '100%', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: article.color + '22',
                      border: '1px solid ' + article.color + '44',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      flexShrink: 0,
                    }}>
                      {article.emoji}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {article.tags.map(function(tag) {
                        return (
                          <span
                            key={tag}
                            style={{
                              padding: '3px 10px',
                              borderRadius: '99px',
                              background: article.color + '22',
                              color: article.color,
                              fontSize: '11px',
                              fontWeight: 600,
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f0f0ff', marginBottom: '10px', lineHeight: 1.4 }}>
                    {article.title}
                  </h3>

                  <p style={{ color: '#8888aa', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#8888aa' }}>{article.date}</span>
                    <span style={{ fontSize: '12px', color: '#6c63ff', fontWeight: 500 }}>{article.readTime} arrow</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}