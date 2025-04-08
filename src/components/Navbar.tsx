import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          K U L D E E P
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-green-400' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-green-400' : ''}`}>
            About Me
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'text-green-400' : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-green-400' : ''}`}>
            Contact
          </Link>
          <a 
            href="/My_Resume.pdf" 
            target="_blank" 
            className="flex items-center space-x-2 px-4 py-2 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-all duration-300"
          >
            <FileText size={18} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-6">
          <Link to="/" className="block py-2 text-white hover:text-green-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-white hover:text-green-400" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
          <Link to="/projects" className="block py-2 text-white hover:text-green-400" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="block py-2 text-white hover:text-green-400" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a 
            href="/src/images/My_Resume.pdf" 
            target="_blank" 
            className="block mt-2 px-4 py-2 bg-green-400 text-gray-900 text-center rounded-lg hover:bg-green-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
