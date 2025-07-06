import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    name: "CryptoPulse",
    images: ["/projects/crypto1.png", "/projects/crypto3.png", "/projects/crypto2.png"],
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "WebSocket"],
    description:
      "CryptoPulse is a responsive web application that tracks real-time prices of major cryptocurrencies using WebSocket and Chart.js.",
    github: "https://github.com/Manishgupta47/CryptoPulse",
    demo: "https://crypto-pulse-qb6q.vercel.app/",
  },
  {
    name: "MultiTenant DataBase",
    images: ["/projects/multi1.png", "/projects/multi2.png", "/projects/multi3.png"],
    tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT", "bcrypt.js"],
    description:
      "Multi-tenant backend system allowing Super Admin to manage isolated databases for multiple Admins and their users.",
    github: "https://github.com/Manishgupta47/MultiTenantDataBase",
    demo: "https://multitenantdatabase-1.onrender.com/",
  },
  {
    name: "One Cart",
    images: ["/projects/cart1.png", "/projects/cart2.png", "/projects/cart3.png"],
    tech: ["Node.js", "MongoDB", "React", "Tailwind CSS", "JWT"],
    description:
      "Multi-role e-commerce platform with cart, wishlist, admin panel, revenue tracking and full CRUD support.",
    github: "https://github.com/Manishgupta47/OneCart",
    demo: "https://one-cart-manish.netlify.app",
  },
  {
    name: "Weather Forecast",
    images: ["/projects/wea1.png", "/projects/wea2.png", "/projects/wea3.png"],
    tech: ["React", "OpenWeather API", "CSS3", "Responsive Design"],
    description:
      "Weather app using OpenWeatherMap API with responsive design and live search for city weather details.",
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
    <div className="bg-[#1c1f2a] rounded-xl overflow-hidden border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-indigo-500 transition-all duration-300 flex flex-col text-sm sm:text-base">
      <img
        src={project.images[currentImage]}
        alt={project.name}
        className="w-full h-36 sm:h-44 object-cover transition-all duration-500"
      />
      <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-1 mb-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-indigo-600/20 text-indigo-300 text-[10px] sm:text-xs font-medium px-2 py-[2px] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description}
          </p>
        </div>

        <div className="flex gap-3 pt-3">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="text-base sm:text-xl text-white hover:text-indigo-400 transition" />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="text-base sm:text-xl text-white hover:text-indigo-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#111827] text-white px-4 sm:px-6 md:px-20 py-16 font-poppins">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
        My Projects
      </h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInSection delay={index * 0.1} key={index}>
            <ProjectCard project={project} />
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;

