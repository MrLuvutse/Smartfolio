import React, { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#6c63ff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(108,99,255,0.4)',
        transition: 'all 0.2s ease',
        zIndex: 999,
      }}
    >
      ↑
    </button>
  );
}