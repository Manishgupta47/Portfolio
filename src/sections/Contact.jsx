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
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-poppins px-6 md:px-20 py-20">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">

          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://gr7800.github.io/assets/emailimg.png"
              alt="contact-image"
              className="w-full max-w-[550px] h-auto object-contain aos-init aos-animate"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">

         
            <div className="grid grid-cols-2 gap-4">
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
                  className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md"
                >
                  <span className="text-xl text-indigo-400">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

          
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>

        
        <div className="text-center text-gray-500 text-sm mt-20 border-t border-gray-700 pt-6">
          Designed and built by <span className="text-indigo-400 font-medium">Manish Kumar Kasaudhan</span>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;


