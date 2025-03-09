import Image from 'next/image';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Untuk ikon sosial media
import Navbar from '../app/navbar'; 

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <header className="relative w-full h-[200vh] sm:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-40">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">Mahadewabox</h1>
          <p className="text-white text-base sm:text-lg text-center">Humor, Cerita, dan Kreativitas Seputar Dunia Pelajar</p>
        </div>
      </header>
      
      {/* About Us */}
      
      <section id="about" className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Content We Create</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/images/content1.jpg" alt="Content 1" width={500} height={300} layout="responsive" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Content Title 1</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat mengenai konten ini.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/images/content2.jpg" alt="Content 2" width={500} height={300} layout="responsive" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Content Title 2</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat mengenai konten ini.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/images/content3.jpg" alt="Content 3" width={500} height={300} layout="responsive" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Content Title 3</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat mengenai konten ini.</p>
          </div>
        </div>
      </section>

      {/* Character Explanation */}
      <section id="characters" className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 ">Our Characters</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Character 1 */}
          <div className="text-center">
            <Image src="/images/botak.png" alt="Character 1" width={150} height={150} layout="responsive" className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">botak</h3>
            <p className="text-gray-600 mt-2">mahasiswa</p>
          </div>
          {/* Character 2 */}
          <div className="text-center">
            <Image src="/images/character2.jpg" alt="Character 2" width={150} height={150} layout="responsive" className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Character 2</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat karakter 2.</p>
          </div>
          {/* Character 3 */}
          <div className="text-center">
            <Image src="/images/character3.jpg" alt="Character 3" width={150} height={150} layout="responsive" className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Character 3</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat karakter 3.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 w-full bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
          <a href="https://instagram.com/mahadewabox" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.tiktok.com/@mahadewabox?_t=ZS-8uOi6E2f55k&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} />
          </a>
        </div>
        <p className="text-center mt-4">&copy; 2025 Mahadewabox. All rights reserved.</p>
      </footer>
    </div>  
  );
}