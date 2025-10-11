export default function Sponsor() {
  const sponsors = [
    {
      name: "Blütenfest Arena",
      logo: "/logo-ba.png",
      text: "Die Blütenfest Arena unterstützt uns bereits seit unserer Gründung. Hauptsächlich dient sie als Spielstätte und Hauptübungsgelände für unseren Verein. Zudem ist sie ein wichtiger Partner für die Ausrichtung unserer Heimspiele und Heimturniere. Dank Umbaumaßnahmen verfügt sie mitlerweile auch über einen Stromanschluss, um uns in den kalten Wintermonaten mit Licht zu versorgen.",
    },
    {
      name: "WSV TV",
      logo: "/logo-wsvtv.png",
      text: "Seit unserem ersten Jubiläum im Jahr 2025, haben wir mit WSV TV einen starken Medienpartner an unserer Seite. WSV TV produziert seitdem regelmäßig Videos von unseren Spielen, Turnieren und Events. Alles wird dann auf dem YouTube-Kanal von WSV TV veröffentlicht. Zudem ist WSV TV auch noch in Kontakt mit unseren Ultras, um bestmögliches Videomaterial zu erhalten.",
    },
    {
      name: "WSV Engine",
      logo: "/logo-wsve.png",
      text: "Im Oktober 2025 wurde die WSV Engine gegründet, welche seitdem die offizielle Webseite des WSV Preußen Pirna betreibt. Die WSV Engine stellt außerdem eine einfach zu bedienen Schnitstelle zur Webseite bereit. Diese kann dann von unserem Vorstand verwendet werden, um Vereinsupdates schnellstmöglich zu unseren Fans zu liefern. Die WSV Engine verbessert die Webseite zudem ständig, um unseren Fans das bestmögliche Erlebnis zu bieten.",
    },
  ];

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-cover text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Unsere Sponsoren</h2>

      <div className="grid gap-8 md:grid-cols-3 text-center items-stretch">
        {sponsors.map((s, index) => (
          <div key={index} className="h-full">
            <div className="relative flex flex-col h-full">
              <div className="p-[8px] overflow-hidden relative leading-none h-full">
                <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>
                <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
                <div className="bg-vereinsgelb text-vereinsblau p-6 flex flex-col items-center h-full">
                  <h3 className="text-xl font-bold mb-4">{s.name}</h3>
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="mx-auto mb-4 h-64 object-contain"
                  />
                  <p className="text-sm">{s.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}