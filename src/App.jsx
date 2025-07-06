import React from "react";
import Navbar from "./components/Navbar"; 
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="w-full overflow-x-hidden scroll-smooth font-poppins bg-[#0f0f0f] text-white">
     
      <Navbar />

    
      <section id="home" className="min-h-screen pt-20"> 
        <Home />
      </section>

      
      <section id="about" className="min-h-screen pt-20">
        <About />
      </section>

   
      <section id="skills" className="min-h-screen pt-20">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen pt-20">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen pt-20">
        <Contact />
      </section>
    </div>
  );
}

export default App;



