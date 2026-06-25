import React from 'react';
import Loader          from './components/Loader';
import ScrollReveal    from './components/ScrollReveal';
import Particles       from './components/Particles';
import ThemeToggle     from './components/ThemeToggle';
import ScrollTop       from './components/ScrollTop';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Counter         from './components/Counter';
import Services        from './components/Services';
import Skills          from './components/Skills';
import Projects        from './components/Projects';
import Timeline        from './components/Timeline';
import Certifications  from './components/Certifications';
import Testimonials    from './components/Testimonials';
import GitHubStats     from './components/GitHubStats';
import FunFacts        from './components/FunFacts';
import Blog            from './components/Blog';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Loader />
      <ScrollReveal />
      <Particles />
      <ThemeToggle />
      <ScrollTop />
      <Navbar />
      <Hero />
      <About />
      <Counter />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Testimonials />
      <GitHubStats />
      <FunFacts />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}