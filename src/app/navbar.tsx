"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-[#F8F3D9] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-black'}`}>
          <Link href="#home" scroll={false} className="flex items-center hover:text-amber-600 transition-colors duration-300">
            Mahadewabox
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'characters', 'content', 'contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item}`}
              className={`font-medium transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400 hover:text-amber-600 ${
                isScrolled ? 'text-black' : 'text-yellow'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-yellow'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-40 
        transition-all duration-300 transform
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {['home', 'about', 'characters', 'content', 'contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item}`}
              onClick={toggleMenu}
              className="text-yellow text-2xl font-medium hover:text-yellow-400 transition-colors duration-300"
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