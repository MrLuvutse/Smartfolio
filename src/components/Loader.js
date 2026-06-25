import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setHidden(true), 1500);
    const timer2 = setTimeout(() => setRemoved(true), 2000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loader" />
      <div style={{
        fontSize: '24px',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        LL.
      </div>
      <div style={{ color: '#8888aa', fontSize: '14px' }}>
        Loading portfolio...
      </div>
    </div>
  );
}