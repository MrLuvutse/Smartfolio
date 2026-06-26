import React from 'react';

var CERTS = [
  {
    title: 'Diploma in Software Development',
    issuer: 'Institute of Software Technologies, Nairobi',
    year: '2023',
    icon: '🎓',
    color: '#6c63ff',
    verified: true,
    detail: 'Reg No: 230451',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2023',
    icon: '🟨',
    color: '#f7df1e',
    verified: true,
    detail: 'Online Certification',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '🎨',
    color: '#ff6584',
    verified: true,
    detail: 'Online Certification',
  },
  {
    title: 'React Developer',
    issuer: 'Sololearn',
    year: '2023',
    icon: '⚛️',
    color: '#61dafb',
    verified: true,
    detail: 'Online Certification',
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
          {CERTS.map(function(cert) {
            return (
              <div key={cert.title} className="cert-card reveal">
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: cert.color + '22',
                  border: '1px solid ' + cert.color + '44',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0,
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
                      <div style={{ fontSize: '12px', color: '#6c63ff', marginTop: '2px' }}>
                        {cert.detail}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {cert.verified && (
                        <span style={{ fontSize: '12px', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 10px', borderRadius: '99px', fontWeight: 600 }}>
                          Verified
                        </span>
                      )}
                      <span style={{ fontSize: '12px', color: '#8888aa' }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '40px', padding: '28px', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#f0f0ff' }}>
            Official Documents
          </h3>
          <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '20px' }}>
            All my academic documents are available upon request for verification.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/LeslieLuvutse_CV.pdf"
              download="LeslieLuvutse_CV.pdf"
              className="btn btn-primary"
              style={{ fontSize: '13px', padding: '8px 18px' }}
            >
              Download CV
            </a>
            <a
              href="mailto:mrluvutse@gmail.com?subject=Document Request - Leslie Luvutse"
              className="btn btn-outline"
              style={{ fontSize: '13px', padding: '8px 18px' }}
            >
              Request Documents
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}