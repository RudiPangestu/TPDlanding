"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaArrowDown } from "react-icons/fa"; 
import Navbar from "../app/navbar";
import ParticleBackground from "../app/particles";
import 'aos/dist/aos.css';
import AOS from "aos";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Parallax and Particles */}
      <header 
        id="home" 
        className="relative w-full h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover z-20"
        style={{ backgroundImage: "url('/images/gtw.png')" }}
      >
        {/* Particle effect overlay (hapus dari hero section) */}
        <ParticleBackground className="absolute inset-0" />

        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gtw.png" 
            alt="Background"
            layout="fill"
            objectFit="contain"
            priority
            
          />
        </div>
        
        {/* Animated Particle effect overlay */}
        <ParticleBackground className="absolute inset-0" />
        
        <div className="z-20 text-center max-w-4xl px-4 relative">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
            data-aos="zoom-in"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Mahadewabox
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Channel parodi yang menghibur dengan konten humor tentang kehidupan mahasiswa dan kejadian viral di Indonesia
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a 
              href="#about" 
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full font-bold 
                hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 
                hover:shadow-lg hover:shadow-yellow-500/30 inline-flex items-center space-x-2"
            >
              <span>Let's Meet Us!</span>
              <FaArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
        
        {/* Animated Characters with improved hover */}
        <div 
          className="absolute bottom-0 left-10 md:left-1/4 w-1/3 md:w-1/4 z-20" 
          data-aos="fade-right" 
          data-aos-delay="300"
          style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}
        >
          <div className="transform hover:translate-y-[-15px] transition-all duration-500 filter hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            <Image 
              src="/images/loppy.png" 
              alt="Loppy" 
              width={250} 
              height={300} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-10 md:right-1/6 w-1/4 md:w-1/4 z-20" 
          data-aos="fade-left" 
          data-aos-delay="300"
          style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}
        >
          <div className="transform hover:translate-y-[-15px] transition-all duration-500 filter hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            <Image 
              src="/images/anomali.png" 
              alt="Anomali" 
              width={230} 
              height={280} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <FaArrowDown className="text-yellow-400 text-2xl" />
        </div>
      </header>

      {/* About Us Section with Particles and improved gradient */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100"></div>
        
        <ParticleBackground className="absolute inset-0" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 relative" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">About Us</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
          </div>
          <p 
            className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mahadewabox adalah channel parodi yang menghibur dengan konten humor tentang kehidupan mahasiswa dan kejadian viral di Indonesia. Kami menggabungkan kreativitas dan realita untuk menciptakan video yang relatable dan bikin ngakak!
          </p>
        </div>

        {/* Feature Cards with improved hover and shadows */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-yellow-500/20 border border-transparent hover:border-yellow-200 group" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300 group-hover:text-yellow-500">🎭</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300">Parodi Kreatif</h3>
            <p className="text-gray-600">Konten parodi original yang mengambil inspirasi dari pengalaman nyata mahasiswa Indonesia</p>
          </div>
          
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-yellow-500/20 border border-transparent hover:border-yellow-200 group" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300 group-hover:text-yellow-500">🔥</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300">Konten Viral</h3>
            <p className="text-gray-600">Selalu update dengan tren terbaru di kalangan mahasiswa dan media sosial Indonesia</p>
          </div>
          
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-yellow-500/20 border border-transparent hover:border-yellow-200 group" 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300 group-hover:text-yellow-500">😂</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300">Humor Lokal</h3>
            <p className="text-gray-600">Menyajikan humor khas Indonesia yang relatable untuk semua kalangan</p>
          </div>
        </div>
      </section>

      {/* Characters Section with enhanced hover effects and card design */}
      <section id="characters" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-100 to-white"></div>
        <ParticleBackground className="absolute inset-0" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-10 relative" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">Our Characters</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { img: "loppy", name: "Loppy", desc: "Mahasiswa" },
              { img: "anomali", name: "Anomali", desc: "Mahasiswa" },
              { img: "character3", name: "Character 3", desc: "Coming Soon!" }
            ].map((char, index) => (
              <div 
                key={index} 
                className="relative group"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform 
                  group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-yellow-400/20 border border-transparent 
                  group-hover:border-yellow-200 relative z-10">
                  
                  {/* Gradient background that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className="h-64 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={`/images/${char.img}.png`}
                      alt={char.name} 
                      width={200} 
                      height={240} 
                      className="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 
                      group-hover:drop-shadow-[0_10px_10px_rgba(255,215,0,0.3)]"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mt-4 group-hover:text-yellow-500 transition-colors duration-300">{char.name}</h3>
                  <p className="text-gray-600 mt-2">{char.desc}</p>
                  
                  {char.name === "Character 3" && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white text-2xl font-bold animate-pulse">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section with improved card design and animation */}
      <section id="videos" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-white"></div>
        <ParticleBackground className="absolute inset-0" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-10 relative" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">Our Content</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              },
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              },
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              }
            ].map((video, index) => (
              <div 
                key={index} 
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transform 
                transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 border border-transparent hover:border-yellow-200"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <div className="aspect-video relative bg-gray-800 overflow-hidden">
                  {/* Video thumbnail overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center 
                        transition-all duration-500 transform scale-90 group-hover:scale-110 shadow-lg group-hover:shadow-yellow-400/50">
                        <span className="text-3xl text-white group-hover:animate-pulse">▶</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold truncate group-hover:text-yellow-500 transition-colors duration-300">{video.title}</h3>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>{video.views}</span>
                    <span>{video.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            <a 
              href="#" 
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full font-bold 
                hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 
                hover:shadow-lg hover:shadow-yellow-500/30 inline-block"
            >
              Lihat Semua Video
            </a>
          </div>
        </div>
      </section>

      {/* Footer with enhanced design */}
      <footer className="py-16 w-full relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <ParticleBackground className="absolute inset-0 opacity-20" />

        <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 px-4">
          <div className="mb-8 relative overflow-hidden group">
            <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Follow Us
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-8 mb-8">
            <a
              href="https://instagram.com/mahadewabox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
            >
              <FaInstagram size={30} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
            </a>
            <a
              href="https://www.tiktok.com/@mahadewabox?_t=ZS-8uOi6E2f55k&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
            >
              <FaTiktok size={30} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
            </a>
          </div>
         
          <div id="contact" className="mt-4 text-center">
            <h3 className="text-xl font-bold mb-4 text-gradient-to-r from-yellow-300 to-amber-400">Contact Us</h3>
            <p className="text-gray-400 mb-2">For inquiries, please email us at:</p>
            <a 
              href="mailto:mahadewabox@gmail.com" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 hover:underline"
            >
              mahadewabox@gmail.com
            </a>
            <p className="text-center mt-8 text-gray-400">
              &copy; 2025 Mahadewabox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}