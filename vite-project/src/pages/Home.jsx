export default function Home() {
  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Willkommen Section */}
      <section className="px-6 py-12 grid md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <h2 className="text-4xl font-bold mb-4">Schön, dass du hier bist!</h2>
          <p className="mb-6">
            Das ist die offizielle Webseite des Wandersportvereins Preußen Pirna 2024 e. V. Nach der Gründung am 17. August 2024 und zahlreich absolvierten Turnieren und Spielen, konnten wir uns als geschätzter Hobbyverein im Raum Dresden-Pirna etablieren. Von anstehenden Turnieren bis hin zum Fanshop - In diesem Bereich findest du alles, was du über den WSV Preußen Pirna wissen musst. Werde auch du Teil unserer Geschichte!
          </p>
        </div>
        <div>
          <img
            src="/welcome.jpg"
            alt="Willkommensbild"
            className="rounded-lg shadow-lg max-h-64 w-auto mx-auto"
          />
        </div>
      </section>

      {/* Social Buttons */}
      <section className="px-6 py-12 flex flex-wrap gap-8 justify-center">
          <a href="https://www.instagram.com/wsv_preussen_pirna_24
" className="relative w-40 h-16 text-vereinsblau font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">📸 Instagram</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </a>
          <a href="https://www.youtube.com/@WSV_Preussen_Pirna_TV" className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">▶️ WSV TV</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </a>
          <a href="https://teams.spized.com/wsvpp" className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">🛍️ Spized Shop</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </a>
          <a href="/tournaments" className="relative w-40 h-16 text-[#0057b8] font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
            <span class="relative z-1">🏆 Turniere</span>
            <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
            <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
            <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
            <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
            <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
          </a>
        </section>
    </main>
  );
}