import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import FadeInSection from './FadeInSection'; // adjust path if needed

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

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link, idx) => (
              <FadeInSection delay={idx * 0.1} key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={100}
                  className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-all"
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <FadeInSection>
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <FadeInSection delay={idx * 0.1} key={link}>
                    <Link
                      to={link.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-all"
                      onClick={closeMenu}
                    >
                      {link}
                    </Link>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </FadeInSection>
        )}
      </nav>
    </FadeInSection>
  );
};

export default NavBar;
