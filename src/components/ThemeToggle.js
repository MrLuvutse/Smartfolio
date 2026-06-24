import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('smartfolio_theme');
    if (saved === 'light') setDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('smartfolio_theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'fixed',
        top: '80px',
        right: '24px',
        zIndex: 998,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease',
      }}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}