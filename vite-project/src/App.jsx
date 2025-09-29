export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-700 to-green-900 text-white">
      {/* Logo / Vereinsname */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">WSV Preussen Pirna</h1>
        <p className="mt-2 text-lg">⚽ Offizielle Vereinsseite</p>
      </header>

      {/* Link-Buttons */}
      <main className="flex flex-col gap-4 w-64">
        <a
          href="https://instagram.com/wsv_preussen_pirna_24"
          target="_blank"
          className="block text-center bg-pink-500 hover:bg-pink-600 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          📸 Instagram
        </a>
        <a
          href="https://youtube.com/@WSV_Preussen_Pirna_TV"
          target="_blank"
          className="block text-center bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          🎥 WSV TV
        </a>
        <a
          href="#spized"
          target="_blank"
          className="block text-center bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg font-semibold shadow-lg transition text-black"
        >
          🛒 Spized Shop
        </a>
        <a
          href="#turniere"
          className="block text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          🏆 Turniere
        </a>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-sm opacity-75">
        © {new Date().getFullYear()} WSV Preussen Pirna
      </footer>
    </div>
  )
}


