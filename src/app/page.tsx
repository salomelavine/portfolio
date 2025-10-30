'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import Contact from '../components/Contact';
import Intrest from'../components/Interests';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
} 