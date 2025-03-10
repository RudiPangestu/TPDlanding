import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa"; 
import Navbar from "../app/navbar";
import FeatureCard from "../app/featurecard";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

{/* Header */}
      <header className="relative w-full h-[200vh] sm:h-[80vh] bg-cover bg-center">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#144E83" }}
        >
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Mahadewabox
          </h1>
          <p className="text-white text-base sm:text-lg text-center">
            Humor, Cerita, dan Kreativitas Seputar Dunia Pelajar
          </p>
          <img src="/images/bestie.png" alt="Bestie" />
        </div>
      </header>

{/* About Us */}
      <section id="about" className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tentang Mahadewabox</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Mahadewabox adalah channel parodi yang menghibur dengan konten humor tentang kehidupan mahasiswa dan kejadian viral di Indonesia. Kami menggabungkan kreativitas dan realita untuk menciptakan video yang relatable dan bikin ngakak!
          </p>
        </div>

        {/* Feature Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon="🎭" 
            title="Parodi Kreatif" 
            description="Konten parodi original yang mengambil inspirasi dari pengalaman nyata mahasiswa Indonesia" 
          />
          <FeatureCard 
            icon="🔥" 
            title="Konten Viral" 
            description="Selalu update dengan tren terbaru di kalangan mahasiswa dan media sosial Indonesia" 
          />
          <FeatureCard 
            icon="😂" 
            title="Humor Lokal" 
            description="Menyajikan humor khas Indonesia yang relatable untuk semua kalangan" 
          />
        </div>
      </section>

{/* Content Section */}
<section id="content" className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Konten Kami</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {["content1", "content2", "content3"].map((item, index) => (
      <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image 
          src={`/images/${item}.jpg`}
          alt={`Content ${index + 1}`} 
          width={500} 
          height={300} 
          layout="responsive" 
          className="rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">Content Title {index + 1}</h3>
        <p className="text-gray-600 mt-2">Deskripsi singkat mengenai konten ini.</p>

        {/* Overlay untuk Coming Soon */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100">
          <span className="text-white text-2xl font-bold">Coming Soon</span>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Character Explanation */}
      <section id="characters" className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Characters</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "loppy", name: "Loppy", desc: "Mahasiswa" },
            { img: "anomali", name: "Anomali", desc: "Mahasiswa" },
            { img: "character3", name: "Character 3", desc: "Coming Soon!" }
          ].map((char, index) => (
            <div key={index} className="text-center">
              <Image 
                src={`/images/${char.img}.png`}
                alt="char.name" 
                width={200} 
                height={180} 
                className=" mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{char.name}</h3>
              <p className="text-gray-600 mt-2">{char.desc}</p>
            </div>
          ))}
        </div>
      </section>

  {/* Footer */}
      <footer className="py-8 w-full bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
          <a
            href="https://instagram.com/mahadewabox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.tiktok.com/@mahadewabox?_t=ZS-8uOi6E2f55k&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={30} />
          </a>
        </div>
        <p className="text-center mt-4">&copy; 2025 Mahadewabox. All rights reserved.</p>
      </footer>
    </div>
  );
}
