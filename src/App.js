import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Counter     from './components/Counter';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import Particles   from './components/Particles';
import ThemeToggle from './components/ThemeToggle';
import ScrollTop   from './components/ScrollTop';
import './index.css';

export default function App() {
  return (
    <>
      <Particles />
      <ThemeToggle />
      <ScrollTop />
      <Navbar />
      <Hero />
      <About />
      <Counter />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}