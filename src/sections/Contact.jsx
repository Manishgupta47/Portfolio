import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClear = () =>
    setFormData({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted ✅");
    handleClear();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins px-4 sm:px-6 md:px-20 py-16 sm:py-20">
      <FadeInSection>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-start justify-center">

          {/* 🔵 Left - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://gr7800.github.io/assets/emailimg.png"
              alt="contact"
              className="w-full max-w-[420px] sm:max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* 🟣 Right - Contact Form and Links */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">

            {/* Links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Manishgupta47' },
                { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/manishkkasaudhan' },
                { icon: <FaXTwitter />, label: 'X / Twitter', href: 'https://x.com/okay_bye_32' },
                { icon: <FaEnvelope />, label: 'Email', href: 'mailto:manishg2872@gmail.com' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-3 flex items-center justify-center gap-2 hover:scale-105 transition shadow-md"
                >
                  <span className="text-lg sm:text-xl text-indigo-400">{item.icon}</span>
                  <span className="text-xs sm:text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none text-sm"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none text-sm"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none text-sm"
                required
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition text-sm"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-16 border-t border-gray-700 pt-5">
          Designed & Built by <span className="text-indigo-400 font-medium">Manish Kumar Kasaudhan</span>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;



