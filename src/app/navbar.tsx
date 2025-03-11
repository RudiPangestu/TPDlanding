"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event for navbar background change and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Track active section for navbar highlighting
      const sections = ['home', 'about', 'characters', 'videos', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        <div className={`text-2xl font-bold transition-all duration-300 ${
          isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
        }`}>
          <Link 
            href="#home" 
            scroll={false} 
            className={`flex items-center transition-all duration-300 ${
              isScrolled 
                ? 'hover:text-amber-600' 
                : 'hover:text-yellow-300'
            }`}
          >
            <span className={isScrolled 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400' 
              : 'text-white'
            }>
              Mahadewabox
            </span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'characters', 'videos', 'contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item}`}
              className={`font-medium transition-all duration-300 px-2 py-1 rounded-md ${
                activeSection === item 
                  ? isScrolled 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-yellow-300 border-b-2 border-yellow-300'
                  : isScrolled 
                    ? 'text-gray-800 hover:text-amber-500 hover:bg-amber-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition-colors duration-300 p-2 rounded-full ${
            isScrolled 
              ? 'text-gray-800 hover:bg-amber-50 hover:text-amber-500' 
              : 'text-white hover:bg-white/10 hover:text-yellow-300'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Enhanced with animations */}
      <div className={`
        md:hidden fixed inset-0 bg-gradient-to-br from-amber-900/95 to-gray-900/95 backdrop-blur-md z-40 
        transition-all duration-500 transform
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Close menu"
          >
            <FaTimes size={28} />
          </button>
          
          {['home', 'about', 'characters', 'videos', 'contact'].map((item, index) => (
            <Link 
              key={item}
              href={`#${item}`}
              onClick={toggleMenu}
              className={`text-2xl font-medium transition-all duration-300 transform hover:scale-110 
                ${activeSection === item 
                  ? 'text-yellow-300 border-b-2 border-yellow-300' 
                  : 'text-white hover:text-yellow-300'
                }
              `}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;