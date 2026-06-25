import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home','about','skills','projects','contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

 const links = [
  { id: 'home',         label: 'Home'         },
  { id: 'about',        label: 'About'        },
  { id: 'services',     label: 'Services'     },
  { id: 'skills',       label: 'Skills'       },
  { id: 'projects',     label: 'Projects'     },
  { id: 'blog',         label: 'Blog'         },
  { id: 'contact',      label: 'Contact'      },
];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '16px 0',
        background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, background: 'linear-gradient(135deg, #6c63ff, #ff6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            LL.
          </div>

          <div style={{ display: 'flex', gap: '36px' }} className="desktop-nav">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: '15px', fontWeight: 500,
                color: active === l.id ? '#6c63ff' : '#8888aa',
                transition: 'color 0.2s',
              }}>
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo('contact')} className="btn btn-primary desktop-nav" style={{ padding: '10px 22px', fontSize: '14px' }}>
            Hire Me
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#f0f0ff', fontSize: '24px', display: 'none',
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10,10,15,0.98)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#f0f0ff', fontSize: '28px', cursor: 'pointer' }}>✕</button>
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              fontSize: '24px', fontWeight: 600,
              color: active === l.id ? '#6c63ff' : '#f0f0ff',
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}