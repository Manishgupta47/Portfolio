import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import FadeInSection from './FadeInSection';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <FadeInSection delay={0}>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white shadow-md rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-poppins">

          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-400">Manish</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link, idx) => (
              <FadeInSection delay={idx * 0.1} key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={300}
                  offset={-80}
                  className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-all"
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-0 m-0 w-fit h-fit text-white"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <div
          className={`md:hidden absolute top-full right-4 bg-[#111827] z-40 w-fit overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <div className="flex flex-col items-start gap-3 px-4 py-3">
            {navLinks.map((link, idx) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={300}
                offset={-70}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 text-sm"
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </FadeInSection>
  );
};

export default NavBar;






