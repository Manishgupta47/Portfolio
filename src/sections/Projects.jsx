import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    name: "CryptoPulse",
    images: ["/projects/crypto1.png", "/projects/crypto3.png", "/projects/crypto2.png"],
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "WebSocket"],
    description:
      "CryptoPulse is a responsive web application that tracks real-time prices of major cryptocurrencies like Bitcoin, Ethereum, Solana, and more using WebSocket technology. It provides live updating charts, 24-hour historical price data, and export options in PDF format.",
    github: "https://github.com/Manishgupta47/CryptoPulse",
    demo: "https://crypto-pulse-qb6q.vercel.app/",
  },
  {
    name: "MultiTenant DataBase",
    images: ["/projects/multi1.png", "/projects/multi2.png", "/projects/multi3.png"],
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Nodemailer", "JWT", "dotenv", "bcrypt.js"],
    description:
      "A scalable multi-tenant backend system built with Node.js and MongoDB that allows a Super Admin to create and manage multiple Admins, each having their own isolated database.",
    github: "https://github.com/Manishgupta47/MultiTenantDataBase",
    demo: "https://multitenantdatabase-1.onrender.com/",
  },
  {
    name: "One Cart",
    images: ["/projects/cart1.png", "/projects/cart2.png", "/projects/cart3.png"],
    tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "JWT", "Chart.js"],
    description:
      "OneCart is a complete multi-role e-commerce platform built for both users and admins, featuring cart & wishlist management, order tracking, and a powerful admin dashboard.",
    github: "https://github.com/Manishgupta47/OneCart",
    demo: "https://one-cart-manish.netlify.app",
  },
  {
    name: "Weather Forecast",
    images: ["/projects/wea1.png", "/projects/wea2.png", "/projects/wea3.png"],
    tech: ["React", "OpenWeather API", "Vite", "CSS3", "Responsive Design"],
    description:
      "A sleek and responsive weather app using OpenWeatherMap API. Users can search any city to view temperature, humidity, and weather conditions with animated backgrounds.",
    github: "https://github.com/Manishgupta47/WeatherApp",
    demo: "https://weather-app-2zpz.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="bg-[#1c1f2a] rounded-2xl overflow-hidden border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-indigo-500 transition-all duration-300">
      <img
        src={project.images[currentImage]}
        alt={project.name}
        className="w-full h-52 object-cover transition-all duration-500"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-indigo-600/20 text-indigo-300 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {project.description.length > 140
            ? project.description.slice(0, 140) + "..."
            : project.description}
        </p>
        <div className="flex gap-5 pt-2">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="text-xl text-white hover:text-indigo-400 transition" />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="text-xl text-white hover:text-indigo-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white px-6 py-16 md:px-20 font-poppins overflow-hidden">

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800 via-transparent to-transparent opacity-20 pointer-events-none" />

    
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-indigo-400">
          My Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInSection delay={index * 0.1} key={index}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


