import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Oscar Mutua',
    role: 'Client — CV Consulting',
    avatar: '👨‍💼',
    text: 'Leslie helped me completely reposition my CV from customer service to the utility sector. Within 2 weeks of using his new CV, I landed 3 interviews. Highly recommend his CV consulting services!',
    rating: 5,
  },
  {
    name: 'Sarah Kamau',
    role: 'Colleague — Software Developer',
    avatar: '👩‍💻',
    text: 'Leslie is a dedicated developer who picks up new technologies incredibly fast. His SpendWise project shows real maturity in how he thinks about user experience and backend architecture.',
    rating: 5,
  },
  {
    name: 'James Ochieng',
    role: 'Mentor — Institute of Software Technologies',
    avatar: '👨‍🏫',
    text: 'One of our most passionate graduates. Leslie consistently went above and beyond in his projects. His ability to build full-stack applications independently is impressive for someone at his stage.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  const next = () => setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="badge">Kind Words</div>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-sub">What people say about working with me</p>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="card" style={{ textAlign: 'center', padding: '48px 40px', position: 'relative' }}>
            {/* Quote mark */}
            <div style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(108,99,255,0.2)', fontFamily: 'Georgia', marginBottom: '8px' }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} style={{ color: '#f59e0b', fontSize: '20px' }}>★</span>
              ))}
            </div>

            {/* Text */}
            <p style={{ fontSize: '17px', color: '#c0c0d0', lineHeight: 1.8, marginBottom: '32px', fontStyle: 'italic' }}>
              {t.text}
            </p>

            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '50%',
                background: 'rgba(108,99,255,0.15)',
                border: '2px solid rgba(108,99,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px',
              }}>
                {t.avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '16px', color: '#f0f0ff' }}>{t.name}</div>
                <div style={{ fontSize: '13px', color: '#6c63ff' }}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '28px' }}>
            <button onClick={prev} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: '#f0f0ff', cursor: 'pointer', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>←</button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '99px',
                    background: i === active ? '#6c63ff' : 'var(--border)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button onClick={next} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: '#f0f0ff', cursor: 'pointer', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
