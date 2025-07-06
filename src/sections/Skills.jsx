import React from 'react';
import FadeInSection from '../components/FadeInSection';

const skills = [
  { name: 'HTML5', image: '/skills/html.png' },
  { name: 'CSS3', image: '/skills/css.png' },
  { name: 'JavaScript', image: '/skills/js.png' },
  { name: 'TypeScript', image: '/skills/ts.png' },
  { name: 'React.js', image: '/skills/react.png' },
  { name: 'Redux', image: '/skills/redux.png' },
  { name: 'TailwindCSS', image: '/skills/tailwind.png' },
  { name: 'Material UI', image: '/skills/mui.png' },
  { name: 'Bootstrap', image: '/skills/bootstrap.png' },
  { name: 'Node.js', image: '/skills/node.png' },
  { name: 'Express', image: '/skills/express.png' },
  { name: 'REST APIs', image: '/skills/api.png' },
  { name: 'MongoDB', image: '/skills/mongo.png' },
  { name: 'GIT', image: '/skills/git.png' },
  { name: 'GitHub Actions', image: '/skills/actions.png' },
  { name: 'GitHub Copilot', image: '/skills/copilot.png' },
  { name: 'NPM', image: '/skills/npm.png' },
  { name: 'Postman', image: '/skills/postman.png' },
  { name: 'WebSocket', image: '/skills/socket.png' },
  { name: 'Insomnia', image: '/skills/insomnia.png' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins px-4 sm:px-6 md:px-20 py-16">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">My Technical Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white bg-opacity-5 backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1"
              />
              <span className="text-[10px] sm:text-xs text-gray-200 text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skills;

