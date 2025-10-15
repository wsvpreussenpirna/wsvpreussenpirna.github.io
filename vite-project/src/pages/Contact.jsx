export default function Contact() {
  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Überschrift bleibt oben */}
      <h2 className="text-3xl font-bold mb-12 text-center">Kontakt</h2>

      {/* Beide Boxen mittig unter der Überschrift */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        
        {/* --- E-Mail --- */}
        <div className="relative flex flex-col">
          <div className="p-[8px] overflow-hidden relative leading-none">
            {/* Blaue Ecken */}
            <span className="absolute top-0 left-0 w-8 h-3 bg-vereinsblau"></span>
            <span className="absolute top-0 left-0 w-3 h-8 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-8 h-3 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-3 h-8 bg-vereinsblau"></span>

            <div className="p-6 bg-vereinsgelb text-vereinsblau w-72 text-center flex flex-col justify-center items-center">
              <a
                href="mailto:wsvpreussenpirna@gmail.com"
                className="font-semibold hover:opacity-80 block"
              >
                <h3 className="text-xl font-bold mb-4">E-Mail</h3>
                <p className="text-sm mb-2">Schreib uns gerne direkt per Mail:</p>
                <p className="underline break-all">wsvpreussenpirna@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* --- Instagram --- */}
        <div className="relative flex flex-col">
          <div className="p-[8px] overflow-hidden relative leading-none">
            {/* Blaue Ecken */}
            <span className="absolute top-0 left-0 w-8 h-3 bg-vereinsblau"></span>
            <span className="absolute top-0 left-0 w-3 h-8 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-8 h-3 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-3 h-8 bg-vereinsblau"></span>

            <div className="p-6 bg-vereinsgelb text-vereinsblau w-72 text-center flex flex-col justify-center items-center">
              <a
                href="https://www.instagram.com/wsv_preussen_pirna_24/"
                className="font-semibold hover:opacity-80 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold mb-4">Instagram</h3>
                <p className="text-sm mb-2">Schreib uns eine DM auf Instagram:</p>
                <p className="underline">@wsv_preussen_pirna_24</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
