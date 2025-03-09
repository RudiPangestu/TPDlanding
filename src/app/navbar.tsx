// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" bg-opacity-50 backdrop-blur-md text-white p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            Mahadewabox
          </Link>
        </div>
        <div className="space-x-4">
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
    </nav>
  );
};

export default Navbar;