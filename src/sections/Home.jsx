import React from "react";
import { TypeAnimation } from "react-type-animation";
import FadeInSection from "../components/FadeInSection";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 pt-24 md:pt-32 bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins relative overflow-hidden">
      
   
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800 via-transparent to-transparent opacity-20 pointer-events-none" />

      
      <FadeInSection>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 z-10">
          <h2 className="text-base sm:text-lg text-indigo-400 font-medium flex items-center justify-center md:justify-start gap-2">
            Hello <span className="inline-block animate-waving-hand">👋</span>
            <span className="ml-1 text-white">My name is</span>
          </h2>

         
          <h1 className="text-[clamp(1.7rem,4.5vw,3rem)] font-bold text-white leading-tight whitespace-nowrap">
            Manish Kumar Kasaudhan
          </h1>

      
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React.js Enthusiast",
              2000,
              "Node.js Backend Developer",
              2000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-base sm:text-lg font-medium text-indigo-300"
          />

         
          <div className="flex gap-6 justify-center md:justify-start pt-4">
            <a href="https://linkedin.com/in/manishkkasaudhan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="https://github.com/Manishgupta47" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="https://twitter.com/okay_bye_32" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-indigo-400 transition" />
            </a>
            <a href="mailto:manishg2872@gmail.com">
              <FaEnvelope className="text-xl hover:text-indigo-400 transition" />
            </a>
          </div>

          
          <div className="pt-4">
            <a
              href="/ManishResume.pdf"
              target="_blank"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 transition text-white px-6 py-2 rounded-full font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      </FadeInSection>

      
      <FadeInSection delay={0.2}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center z-10 mb-10 md:mb-0">
          <div className="w-64 sm:w-80 md:w-[420px] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-xl hover:scale-105 transition-transform duration-500">
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







