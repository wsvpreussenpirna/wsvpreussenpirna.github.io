import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900 relative">
      {/* Header */}
      <header className="bg-[#0057b8] text-white px-6 py-4 flex items-center justify-between shadow-md z-20 relative">
        <div className="flex items-center space-x-4">
          {/* Vereinslogo */}
          <img
            src="/logo-wsvpp.png"
            alt="WSV Preußen Pirna Logo"
            className="h-10 w-auto"
          />
          <h1 className="font-bold text-lg">WSV Preußen Pirna</h1>
        </div>

        {/* Navigation für große Bildschirme */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:underline">Startseite</a>
          <a href="#" className="hover:underline">Über uns</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Spielplan & Turniere</a>
          <a href="#" className="hover:underline">Fanbereich</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Sponsoren</a>
          <a href="#" className="hover:underline">Kontakt</a>
        </nav>

        {/* Hamburger Button für kleine Bildschirme */}
        <button
          className="md:hidden text-2xl z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Overlay Menü */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#0057b8] text-white px-6 py-6 space-y-4 shadow-md z-10">
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Startseite</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Über uns</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>News</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Spielplan & Turniere</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Fanbereich</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Sponsoren</a>
          <a href="#" className="block hover:underline" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </div>
      )}

      {/* Main Content */}
      <main
        className="flex-grow bg-black bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <section className="px-6 py-12 grid md:grid-cols-2 gap-8 items-center text-white">
          {/* Willkommen-Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Willkommen</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Willkommen-Bild */}
          <div>
            <img
              src="/welcome.jpg"
              alt="Willkommensbild"
              className="rounded-lg shadow-lg max-h-64 w-auto mx-auto"
            />
          </div>
        </section>

        {/* Social Links */}
        <section className="px-6 py-12 flex flex-wrap gap-8 justify-center">
          <button className="relative w-40 h-16 text-vereinsblau font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">📸 Instagram</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </button>
          <button className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">▶️ WSV TV</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </button>
          <button className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">🛍️ Spized Shop</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </button>
          <button className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">🏆 Turniere</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0057b8] text-white text-center py-4 mt-auto">
        © {new Date().getFullYear()} WSV Preußen Pirna
      </footer>
    </div>
  );
}
