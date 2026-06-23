import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'center' }}>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '280px', height: '280px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #6c63ff22, #ff658422)',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '100px',
              animation: 'float 4s ease-in-out infinite',
              position: 'relative',
            }}>
              👨‍💻
              <div style={{ position: 'absolute', top: '-16px', right: '-16px', background: '#6c63ff', borderRadius: '12px', padding: '8px 14px', fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                MERN Stack
              </div>
              <div style={{ position: 'absolute', bottom: '-16px', left: '-16px', background: '#ff6584', borderRadius: '12px', padding: '8px 14px', fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                Nairobi 🇰🇪
              </div>
            </div>
          </div>

          <div>
            <div className="badge">About Me</div>
            <h2 className="section-title">Who I Am</h2>

            <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.9, marginBottom: '20px' }}>
              I'm a passionate full-stack developer and 2023 graduate from the Institute of Software Technologies, Nairobi. I love building products that combine great functionality with beautiful design.
            </p>
            <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.9, marginBottom: '32px' }}>
              When I'm not coding, you'll find me following football ⚽ or helping clients reposition their careers with better CVs. I'm actively seeking my first professional developer role where I can contribute, learn, and grow.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Name',     value: 'Leslie Luvutse'       },
                { label: 'Location', value: 'Nairobi, Kenya'        },
                { label: 'Email',    value: 'mrluvutse@gmail.com'   },
                { label: 'Status',   value: '🟢 Open to work'      },
              ].map((item) => (
                <div key={item.label} style={{ background: 'var(--surface)', borderRadius: '10px', padding: '14px 16px', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '11px', color: '#6c63ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: '#f0f0ff', fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://github.com/MrLuvutse" target="_blank" rel="noreferrer" className="btn btn-primary">GitHub Profile</a>
              <a href="mailto:mrluvutse@gmail.com" className="btn btn-outline">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}