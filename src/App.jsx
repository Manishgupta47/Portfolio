import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 px-2 sm:px-6 md:px-8"> {/* pt-16 instead of 20 for tighter top */}
        <section id="home" className="py-1">
          <Home />
        </section>
        <section id="about" className="py-1">
          <About />
        </section>
        <section id="projects" className="py-1">
          <Projects />
        </section>
        <section id="skills" className="py-1">
          <Skills />
        </section>
        <section id="contact" className="py-1">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
