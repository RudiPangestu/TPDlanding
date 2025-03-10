// components/Navbar.tsx
"use client"; // Add this line to mark the component as a client component

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-opacity-50 backdrop-blur-md text-black p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            Mahadewabox
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#about" className="hover:text-gray-600">
            About Us
          </Link>
          <Link href="#characters" className="hover:text-gray-600">
            Characters
          </Link>
          <Link href="#content" className="hover:text-gray-600">
            Content
          </Link>
          
          <Link href="#contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-opacity-50 backdrop-blur-md p-4">
          <div className="flex flex-col space-y-2">
            <Link href="#about" className="hover:text-gray-600">
              About Us
            </Link>
            <Link href="#content" className="hover:text-gray-600">
              Content
            </Link>
            <Link href="#characters" className="hover:text-gray-600">
              Characters
            </Link>
            <Link href="#contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;