import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <div style={{ fontSize: '24px', fontWeight: 800, background: 'linear-gradient(135deg, #6c63ff, #ff6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>
          LL.
        </div>
        <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '20px' }}>
          Built with React ⚛️ by Leslie Luvutse — Nairobi, Kenya 🇰🇪
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '20px' }}>
          {[
            { label: 'GitHub',   href: 'https://github.com/MrLuvutse'   },
            { label: 'LinkedIn', href: 'https://linkedin.com'            },
            { label: 'Email',    href: 'mailto:mrluvutse@gmail.com'      },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ color: '#8888aa', fontSize: '14px', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#6c63ff'}
              onMouseLeave={(e) => e.target.style.color = '#8888aa'}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ color: '#444466', fontSize: '13px' }}>
          © {new Date().getFullYear()} Leslie Luvutse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}