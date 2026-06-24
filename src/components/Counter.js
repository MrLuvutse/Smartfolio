import React, { useEffect, useState, useRef } from 'react';

function CountUp({ target, duration = 2000, suffix = '' }) {
  const [count,   setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps    = 60;
    const interval = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { label: 'Projects Built',    target: 3,  suffix: '+'  },
  { label: 'Technologies Used', target: 10, suffix: '+'  },
  { label: 'GitHub Commits',    target: 50, suffix: '+'  },
  { label: 'Cups of Coffee',    target: 99, suffix: '☕' },
];

export default function Counter() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-3)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          {STATS.map((stat) => (
            <div key={stat.label} className="card" style={{ padding: '32px 20px' }}>
              <div className="counter-value">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}