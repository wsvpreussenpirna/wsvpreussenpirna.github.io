export default function Tournaments() {
  return (
    <main
      className="flex flex-col items-center justify-center flex-grow bg-black text-center text-white px-6 py-12 bg-center bg-no-repeat bg-contain"
      //style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-4xl font-bold mb-6">Preußische Festspiele</h2>
      <p className="text-lg text-gray-300 mb-10">Coming soon...</p>

      {/* Home-Button */}
      <a
        href="/"
        className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden"
      >
        <span className="relative z-10">Home</span>

        {/* Hintergrund und Ecken */}
        <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb"></span>
        <span className="absolute top-0 left-0 w-8 h-3 bg-vereinsblau"></span>
        <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>
        <span className="absolute bottom-0 right-0 w-8 h-3 bg-vereinsblau"></span>
        <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span>
      </a>
    </main>
  );
}

