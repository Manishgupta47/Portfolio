import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeInSection from '../components/FadeInSection';
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 md:gap-10 bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins px-4 sm:px-6 md:px-20 py-16 relative">

     
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800 via-transparent to-transparent opacity-20 pointer-events-none"></div>

    
      <FadeInSection>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 z-10">

       
          <h2 className="text-base sm:text-lg md:text-xl text-indigo-400 font-medium flex items-center gap-2 justify-center md:justify-start">
            Hello <span className="animate-waving-hand">👋</span>
            <span className="ml-1 text-white">My name is</span>
          </h2>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Manish Kumar Kasaudhan
          </h1>

        
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'React.js Enthusiast',
              2000,
              'Node.js Backend Developer',
              2000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-sm sm:text-base md:text-lg font-medium text-indigo-300"
          />

          <div className="flex gap-6 justify-center md:justify-start pt-4">
            <a href="https://linkedin.com/in/manishkkasaudhan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="https://github.com/Manishgupta47" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="https://x.com/okay_bye_32" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="mailto:manishg2872@gmail.com">
              <FaEnvelope className="text-xl hover:text-indigo-400 transition" />
            </a>
          </div>

        
          <div className="pt-4">
            <a
              href="/ManishResume.pdf"
              download
              className="inline-block bg-white bg-opacity-10 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-20 backdrop-blur-md transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </FadeInSection>

     
      <FadeInSection delay={0.2}>
        <div className="w-full md:w-1/2 flex justify-center items-center z-10 md:ml-12">
          <div className="w-60 sm:w-72 md:w-96 aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="/Manish.png"
              alt="Manish Kumar Kasaudhan"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </FadeInSection>

    </div>
  );
};

export default Home;

