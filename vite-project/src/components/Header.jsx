import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0057b8] text-white px-6 py-4 flex items-center justify-between shadow-md z-20 relative">
        <a href="/">
            <div className="flex items-center space-x-4">
            <img src="/logo-wsvpp.png" alt="WSV Preußen Pirna Logo" className="h-10 w-auto"/>
            <h1 className="font-bold text-lg">WSV Preußen Pirna</h1>
            </div>
        </a>

      {/* Navigation für große Bildschirme */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <a href="/about" className="hover:underline">Über uns</a>
        <a href="/news" className="hover:underline">News</a>
        <a href="/schedule" className="hover:underline">Spielplan</a>
        <a href="/fan" className="hover:underline">Fanbereich</a>
        <a href="/sponsor" className="hover:underline">Sponsoren</a>
        <a href="/contact" className="hover:underline">Kontakt</a>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-2xl z-30"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Overlay Menü */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#0057b8] text-white px-6 py-6 space-y-4 shadow-md z-10">
          <a href="/about" className="block hover:underline" onClick={() => setMenuOpen(false)}>Über uns</a>
          <a href="/news" className="block hover:underline" onClick={() => setMenuOpen(false)}>News</a>
          <a href="/schedule" className="block hover:underline" onClick={() => setMenuOpen(false)}>Spielplan</a>
          <a href="/fan" className="block hover:underline" onClick={() => setMenuOpen(false)}>Fanbereich</a>
          <a href="/sponsor" className="block hover:underline" onClick={() => setMenuOpen(false)}>Sponsoren</a>
          <a href="/contact" className="block hover:underline" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </div>
      )}
    </header>
  );
}
