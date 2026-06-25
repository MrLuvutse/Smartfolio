import React from 'react';

const CERTS = [
  {
    title: 'Software Development Diploma',
    issuer: 'Institute of Software Technologies',
    year: '2023',
    icon: '🎓',
    color: '#6c63ff',
    verified: true,
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2023',
    icon: '🟨',
    color: '#f7df1e',
    verified: true,
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '🎨',
    color: '#ff6584',
    verified: true,
  },
  {
    title: 'React Developer',
    issuer: 'Sololearn',
    year: '2023',
    icon: '⚛️',
    color: '#61dafb',
    verified: true,
  },
];

export default function Certifications() {
  return (
    <section className="section">
      <div className="container">
        <div className="badge reveal">Credentials</div>
        <h2 className="section-title reveal">Certifications</h2>
        <p className="section-sub reveal">Certificates and qualifications I have earned</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px' }}>
          {CERTS.map((cert) => (
            <div key={cert.title} className="cert-card reveal">
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '12px',
                background: `${cert.color}22`,
                border: `1px solid ${cert.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', flexShrink: 0,
              }}>
                {cert.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#f0f0ff', marginBottom: '2px' }}>
                      {cert.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#8888aa' }}>
                      {cert.issuer}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {cert.verified && (
                      <span style={{ fontSize: '12px', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 10px', borderRadius: '99px', fontWeight: 600 }}>
                        ✓ Verified
                      </span>
                    )}
                    <span style={{ fontSize: '12px', color: '#8888aa' }}>{cert.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}