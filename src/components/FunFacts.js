import React from 'react';

const FACTS = [
  { icon: '⚽', fact: 'Football Fan', detail: 'Never miss a big match' },
  { icon: '☕', fact: '99+ Coffees', detail: 'Coded while caffeinated' },
  { icon: '🌍', fact: 'Nairobi Born', detail: 'Proudly Kenyan developer' },
  { icon: '🎯', fact: 'Self Taught', detail: 'Learning never stops' },
  { icon: '🌙', fact: 'Night Coder', detail: 'Best ideas come at night' },
  { icon: '📄', fact: 'CV Expert', detail: 'Helped 10+ clients get hired' },
];

export default function FunFacts() {
  return (
    <section className="section" style={{ background: 'var(--bg-3)' }}>
      <div className="container">
        <div className="badge reveal">Get To Know Me</div>
        <h2 className="section-title reveal">Fun Facts</h2>
        <p className="section-sub reveal">A few things about me beyond the code</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
          {FACTS.map((f) => (
            <div key={f.fact} className="fun-fact-card reveal">
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#f0f0ff', marginBottom: '4px' }}>{f.fact}</div>
              <div style={{ fontSize: '13px', color: '#8888aa' }}>{f.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}