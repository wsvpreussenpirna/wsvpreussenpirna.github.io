export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900">
      {/* Header */}
      <header className="bg-[#0057b8] text-white px-6 py-4 flex items-center justify-between shadow-md z-10 relative">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded"></div>
          <h1 className="font-bold text-lg">WSV Preußen Pirna</h1>
        </div>
        <nav className="space-x-6 font-medium">
          <a href="#" className="hover:underline">Startseite</a>
          <a href="#" className="hover:underline">Über uns</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Spielplan & Turniere</a>
          <a href="#" className="hover:underline">Fanbereich</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Sponsoren</a>
          <a href="#" className="hover:underline">Kontakt</a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        className="flex-grow bg-black bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <section className="px-6 py-12 grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">Willkommen</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-gray-300 rounded-lg h-48"></div>
        </section>

        {/* Social Links */}
        <section className="px-6 py-12 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 border rounded-lg flex items-center gap-2 text-white">
            📸 Instagram
          </button>
          <button className="px-6 py-3 border rounded-lg flex items-center gap-2 text-white">
            ▶️ WSV TV
          </button>
          <button className="px-6 py-3 border rounded-lg flex items-center gap-2 text-white">
            🛍️ Spized Shop
          </button>
          <button className="px-6 py-3 border rounded-lg flex items-center gap-2 text-white">
            🏆 Turniere
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0057b8] text-white text-center py-4 mt-auto">
        © {new Date().getFullYear()} WSV Preussen Pirna
      </footer>
    </div>
  )
}


