import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-[#003300] text-white py-2"> 
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <Link to="/" className="text-white mx-2 text-sm hover:text-[#66cc66]">Home</Link>
          <Link to="/about" className="text-white mx-2 text-sm hover:text-[#66cc66]">About</Link>
          <Link to="/services" className="text-white mx-2 text-sm hover:text-[#66cc66]">Services</Link>
          <Link to="/contact" className="text-white mx-2 text-sm hover:text-[#66cc66]">Get in Touch</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 my-2">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66cc66]">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66cc66]">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66cc66]">
            <FaGithub size={24} />
          </a>
        </div>

        <p className="text-xs text-[#e0e0e0]">
          &copy; 2023 Non-Copyrighted Upload by Farmera
        </p>
      </div>
    </footer>
  );
};

export default Footer;
