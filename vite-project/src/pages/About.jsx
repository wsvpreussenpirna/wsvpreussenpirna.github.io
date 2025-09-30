export default function About() {
  const players = [
    { number: "4", name: "N. Junghans", joined: "18.8.2024", position: "IV/LV", role: "" },
    { number: "5", name: "S. Scherf", joined: "17.8.2024" ,position: "IV", role: "G/V"},
    { number: "7/27", name: "M. Oehlert", joined: "19.8.2024" ,position: "RV/RM", role: "V"},
    { number: "8", name: "F. Schildbach", joined: "5.11.2024" ,position: "TW", role: ""},
    { number: "9", name: "F. Junghans", joined: "17.8.2024" ,position: "ST", role: "K/T/G/V"},
    { number: "10", name: "E. Gruner", joined: "17.8.2024" ,position: "LM/LF", role: "K/G/V"},
    { number: "11", name: "J. Anders", joined: "26.8.2025" ,position: "RF", role: ""},   
    { number: "13", name: "L. ?", joined: "16.1.2025" ,position: "?", role: ""},     
    { number: "69", name: "P. Sturm", joined: "28.8.2024" ,position: "TW/IV", role: ""},
  ];

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12 space-y-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Geschichte */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Unsere Geschichte</h2>
        <p className="leading-relaxed">
          Der WSV Preußen Pirna wurde im Jahr XXXX gegründet und blickt auf eine
          lange Tradition im Fußball zurück. Über die Jahre hinweg hat sich der
          Verein durch Engagement, Leidenschaft und Teamgeist in der Region
          etabliert. Besonders stolz sind wir auf unsere Jugendarbeit, die viele
          Talente hervorgebracht hat.
        </p>
      </section>

      {/* Vorstand */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Vorstand</h2>
        <p className="leading-relaxed">
          Vorstandtext
        </p>
      </section>

      {/* Trainer */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Trainer</h2>
        <p className="leading-relaxed">
          Trainertext
        </p>
      </section>

      {/* Kader */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Kader</h2>
        <div className="overflow-x-auto">
          <div className="flex min-h-[calc(100%)]">
            <div className="relative flex flex-col">
                <div className="p-[8px] overflow-hidden relative leading-none">
                  <span className="absolute top-0 left-0 w-32 h-3 bg-vereinsblau"></span>                  
                  <span className="absolute top-0 left-0 w-3 h-32 bg-vereinsblau"></span>
                  <span className="absolute bottom-0 right-0 w-32 h-3 bg-vereinsblau"></span>                  
                  <span className="absolute bottom-0 right-0 w-3 h-32 bg-vereinsblau"></span>   
                  <table className="table-auto border-collapse text-left block bg-black">
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

