export default function About() {
  const players = [
    { number: "4", name: "N. Junghannß", joined: "18.8.2024", position: "IV", role: "" },
    { number: "5", name: "S. Scherf", joined: "17.8.2024" ,position: "TW/IV/RM/ZOM", role: "G/V"},
    { number: "7/27", name: "M. Oehlert", joined: "19.8.2024" ,position: "RV/RM", role: "V"},
    { number: "8", name: "F. Schildbach", joined: "5.11.2024" ,position: "TW", role: ""},
    { number: "9", name: "F. Junghannß", joined: "17.8.2024" ,position: "ST", role: "K/T/G/V"},
    { number: "10", name: "E. Gruner", joined: "17.8.2024" ,position: "LM/LF", role: "K/G/V"},
    { number: "11", name: "J. Anders", joined: "26.8.2025" ,position: "RM/ZOM", role: ""},   
    { number: "13", name: "L. Rokitta", joined: "16.1.2025" ,position: "LV", role: ""},     
    { number: "69", name: "P. Sturm", joined: "28.8.2024" ,position: "TW/IV", role: ""},
  ];

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12 space-y-3"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Geschichte */}
      <section className="px-6 py-3 grid md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <h2 className="text-3xl font-bold mb-4">Unsere Geschichte</h2>
          <p className="leading-relaxed">Alles begann mit einer Wanderung am 17.08.2024 durch die schöne Landschaft unserer Sächsischen Schweiz nicht weit von Bad Schandau. Bei bestem Wetter und super Stimmung starteten wir, E. Gruner, S. Scherf und F. Junghannß unsere wohl kräftezehrendste Wanderung durch heimische Gefilde. Aufgrunddessen, dass wir alle leidenschaftliche Fußballfans sind, kam der Ballsport und Gespräche über englische, dänische und deutschen Ligen und Vereine nie zu kurz. Dies begleitete unsere enge Freundschaft auch schon während unseres Studiums und legte den Grundpfeiler für den Wunsch nach dem gemeinsamen Spielen in einem Verein. Schließlich wurde auf dem Heimweg die Büchse geöffnet und die Gespräche über das Gründen eines eigenen Hobbyvereins nahmen zu und vertieften sich von anfänglichem Witz bis zur Ernsthaftigkeit. Vereinsname und Vereinsfarben wurden schnell gefunden und passend gewählt. Beim Asiaten in Pirna stoßten wir dann gemeinsam auf unseren neu gegründeten Wandersportverein Preußen Pirna an, auch wenn unser Kürzel anfangs eine andere Randbedeutung hatte.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative p-[8px] overflow-hidden leading-none">
            <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
            <img
              src="/wanderung.png"
              alt="Bild der sächschen Schweiz mit Blick auf Lilienstein"
              className="max-h-96 w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-3 grid md:grid-cols-2 gap-12 items-center text-white">
        <div className="flex items-center justify-center">
          <div className="relative p-[8px] overflow-hidden leading-none h-full flex items-center">
            <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
            <img
              src="/trikot.png"
              alt="Erstes WSV Preußen Pirna Trikot"
              className="max-h-96 w-auto mx-auto"
            />
          </div>
        </div>
        <div>
          <p className="leading-relaxed">Nachfolgend ist es E. Gruner zu verdanken, dass wir mit unserem Verein binnen weniger Stunden nach dem Treffen Vereinswappen und erste Trikotsätze hatten. Unser bisher nie wirklich ausgesprochener, aber stets präsenter Traum einer Gründung eines eigenen Vereins nach unseren Vorstellungen, nahm die nächsten Tage nun weiter verstärkt Form an. Erste Transfers von N. Junghannß und M. Oehlert wurden eingetütet und der WSV Preußen Pirna fand in der Blütenfest-Arena auch seine sportliche Heimat. Nach gut einem Monat begannen wir mit regelmäßigen Trainings, bekamen weiteren Zuwachs (P. Sturm, F. Schildbach, L. Rokitta) und präsentierten uns erstmalig am 03.11.2024 beim Paulaner Cup im Vereinsgeschehen. Weitere Turniere, Transfers und Testspiele folgten, Derbys wurden beschlossen. Der WSV bahnte sich sportlich seinen Weg und etablierte sich im Raum Dresden-Pirna als ein ernstzunehmender Verein. Dank E. Gruner kamen wir zu eigener Trikotausstattung und einem eigenen kleinen Fanshop. F. Junghannß half dem Bau einer Fangemeinde und M. Oehlert ist die gute Anbindung zur örtlich ansässigen Gemeinde zu verdanken. Somit etablierte sich der Wandersportverein nicht nur sportlich auf dem Papier, sondern auch abseits des Platzes oder an Laternen. Preußen Pirna wurde größer und größer.</p>
        </div>
      </section>

      <section className="px-6 py-3 grid md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <p className="leading-relaxed">Auf dem Höhepunkt unseren ersten Jahres erlitten wir dann leider einen Rückschlag beim Männertagsturnier. Mit F. Junghannß verlor der WSV Preußen Pirna auf dem Platz einen erfahrenen Spieler und Mitbegründer durch einen zugezogenen Kreuzbandriss. Schnell standen wir vor unserer ersten enormen Herausforderung. Jedoch wollten wir das, was wir aus dem Boden stampften, niemals aufgeben und entwickelten Ideen. F. Junghannß wurde erster offizieller Cheftrainer vom Wandersportverein und E. Gruner zum alleinigen Kapitän. Doch im Zentrum dieses Wiederaufstehens steht die Gründung unseres ersten Vorstandes, mit dem Ziel, sportlich aufgebautes, trotz des starken Einschnittes, aufzufangen und den Verein aus Liebe und Verbundenheit wieder zu altem und noch schönerem Glanz zu bringen. Unser wahrgewordener Traum sollte nicht an diesem Punkt scheitern. Der gegründete Vorstand besteht seitdem aus den Gründervätern E. Gruner, S. Scherf und F. Junghannß und M. Oehlert. Letzterer zeichnete sich über das ganze gemeinsame Jahr zunehmend als Stütze unseres Vereinslebens aus. Anwesenheit bei fast jedem Training und jedem Turnier, unbändiger Wille nach eigener, sportlicher Verbesserung und Gedanken über das Gestalten noch größerer Präsenz nach Außen,  machten ihn unausweichlich bei der Wahl der Vorstandsmitglieder. Der mit der Vorstandsgründung erwünschte Aufschwung gelang und nun sind wir erneut auf dem Weg an die sächsische, sportliche Speerspitze im Hobbyfußball. Das bekannte erste schwere Jahr war überstanden und am 17.08.2025 konnten wir unser Jubiläum feiern.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative p-[8px] overflow-hidden leading-none">
            <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>
            <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
            <img
              src="/wappen_alt.jpg"
              alt="Altes Wappen mit Hintergrund"
              className="max-h-128 w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-3">
        <p className="leading-relaxed">
          Unser Weg wird weitergehen und niemals enden. Eine Freundesgruppe, die zusammenkam, zusammenblieb,  zusammenarbeite und auf ewig geeint diesen Weg ebnete und weiter bestreiten wird. 🔵🟡
        </p>
      </section>

      {/* Vorstand 
      <section className="px-6 py-3">
        <h2 className="text-3xl font-bold mb-4">Vorstand</h2>
        <p className="leading-relaxed">
          Vorstandtext
        </p>
      </section>*/}

      {/* Trainer 
      <section className="px-6 py-3">
        <h2 className="text-3xl font-bold mb-4">Trainer</h2>
        <p className="leading-relaxed">
          Trainertext
        </p>
      </section>*/}

      {/* Kader */}
      <section className="px-6 py-3">
        <h2 className="text-3xl font-bold mb-4">Kader</h2>
        <div className="overflow-x-auto">
          <div className="flex min-h-[calc(100%)]">
            <div className="relative flex flex-col w-full">
              <div className="p-[8px] overflow-hidden relative leading-none w-full">
                <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>
                <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
                {/* Mobile: Karten-Layout */}
                <div className="block sm:hidden w-full">
                  {players.map((player, idx) => (
                    <div
                      key={idx}
                      className="odd:bg-[#222] even:bg-[#333] hover:bg-[#444] w-full mb-0 flex flex-col"
                    >
                      <div className="px-4 py-2 text-left">{player.number}</div>
                      <div className="px-4 py-2 text-left">{player.name}</div>
                      <div className="px-4 py-2 text-left">{player.position}</div>
                      <div className="px-4 py-2 text-left">{player.joined}</div>
                      <div className="px-4 py-2 text-left">{player.role || ""}</div>
                    </div>
                  ))}
                </div>
                {/* Desktop: Tabelle */}
                <table className="table-auto border-collapse text-left bg-black w-full hidden sm:table">
                  <thead>
                    <tr className="bg-vereinsgelb text-white">
                      <th className="px-4 py-2">Nr.</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Position</th>
                      <th className="px-4 py-2">Beitritt</th>
                      <th className="px-4 py-2">Rolle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, idx) => (
                      <tr
                        key={idx}
                        className="odd:bg-[#222] even:bg-[#333] hover:bg-[#444]"
                      >
                        <td className="px-4 py-2">{player.number}</td>
                        <td className="px-4 py-2">{player.name}</td>
                        <td className="px-4 py-2">{player.position}</td>
                        <td className="px-4 py-2">{player.joined}</td>
                        <td className="px-4 py-2">{player.role || ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Legende */}
        <div className="mt-4 text-sm text-gray-300">
          <p className="font-bold mb-1">Legende:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-bold">K</span> = Kapitän</li>
            <li><span className="font-bold">T</span> = Trainer</li>
            <li><span className="font-bold">G</span> = Gründer</li>
            <li><span className="font-bold">V</span> = Vorstand</li>
          </ul>
        </div>
      </section>
    </main>
  );
}


