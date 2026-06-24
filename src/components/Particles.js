import React, { useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.5 + 0.1};
        background: ${Math.random() > 0.5 ? 'rgba(108,99,255,0.4)' : 'rgba(255,101,132,0.4)'};
      `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return <div className="particles" ref={containerRef} />;
}