import React from 'react';
import FadeInSection from '../components/FadeInSection';
import { FaBolt } from 'react-icons/fa6'; // ⚡ Beat-like single icon

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins px-6 md:px-20 py-20 relative overflow-hidden">
      
      {/* Radial 3D Glow Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700 via-transparent to-transparent opacity-20"></div>

      <FadeInSection>
        <div className="max-w-6xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">

            {/* 🖼 Responsive GIF (No Border, Bigger Size) */}
            <div className="flex-shrink-0 w-full md:w-[40%]">
              <img
                src="https://gr7800.github.io/assets/AboutImg.gif"
                alt="Coder Working GIF"
                className="rounded-xl w-full h-auto object-cover object-center shadow-2xl"
              />
            </div>

            {/* 📄 Clean Paragraph Section */}
            <div className="text-gray-300 text-[1rem] leading-7 space-y-4 font-poppins md:w-[60%]">

              {[
                "I'm Manish Kumar Kasaudhan, a passionate MERN Stack Developer focused on building modern, scalable web applications.",
                "Currently working as a Website Developer Intern at Fuel It Online, Jaipur (Rajasthan), where I contribute to full-stack MERN projects.",
                "Completed a 6-month MERN Stack training from KG Coding and frontend development course from EISystem.",
                "With 1 year of experience, I specialize in clean, responsive UI and backend systems using React, Node.js, MongoDB, and Express."
              ].map((text, index) => (
                <p key={index} className="flex items-start gap-2">
                  <FaBolt className="text-indigo-400 text-[1rem] mt-1" />
                  <span>{text}</span>
                </p>
              ))}

            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;


