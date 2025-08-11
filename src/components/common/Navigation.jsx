import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Project', href: '/project' },
    { name: 'Blog', href: '/news' },
  ];

  return (
    // <nav className="fixed top-0 left-0 w-full bg-primary backdrop-blur-md shadow-lg z-50 transition-all duration-300">
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
            >
              <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="font-bold text-xl text-gray-800">SEAC</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact">
            <Button
            >
              Contact Us
            </Button>
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></span>
                <span
                  className={`absolute top-2 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                  className={`absolute top-4 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
            </div>
            <span className="font-bold text-xl text-gray-800">SLEEK</span>
          </div>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-6 space-y-2 " style={{ backgroundColor: 'var(--color-bg-dark)' }}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={toggleMenu}
              className={`block px-4 py-3 text-on-dark hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4">
         
          <Link to="/contact">
            <Button
            >
              Contact Us
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;