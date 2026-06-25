import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Counter     from './components/Counter';
import Services    from './components/Services';
import Skills      from './components/Skills';
import Particles   from './components/Particles';
import ThemeToggle from './components/ThemeToggle';
import ScrollTop   from './components/ScrollTop';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';

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
      <Services />
      <Skills />
      <Projects/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <GitHubStats/>
      <Footer/>
    </>
  );
}