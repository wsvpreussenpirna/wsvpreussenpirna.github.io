import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PlanDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch("/WSVEngine/Plan/plan.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id.toString() === id);
        setMatch(found);
      })
      .catch((err) => console.error("Fehler beim Laden des Spiels:", err));
  }, [id]);

  if (!match) {
    return (
      <main className="flex-grow bg-black text-white px-6 py-12">
        <p className="text-center">Spiel nicht gefunden...</p>
      </main>
    );
  }

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">{match.name}</h2>
      <div className="max-w-xl mx-auto p-6 shadow-md space-y-4">
        <h3 className="text-xl font-bold mt-6 mb-2 py-2">{match.type + " - Ergebnisse"}</h3>
        <div className="space-y-4">
          {match.results.map((r, index) => (
            <div key={index}>
              {/* Spielname */}
              <p className="text-sm text-left italic mb-1">{r.name}</p>

              {/* Ergebnis-Zeile */}
              <div className=" min-h-[calc(100%)] relative">
                <div className="relative">
                  <div className="p-[8px] overflow-hidden relative leading-none">
                    <span className="absolute top-0 left-0 w-8 h-3 bg-vereinsblau"></span>                  
                    <span className="absolute top-0 left-0 w-3 h-8 bg-vereinsblau"></span>
                    <span className="absolute bottom-0 right-0 w-8 h-3 bg-vereinsblau"></span>                  
                    <span className="absolute bottom-0 right-0 w-3 h-8 bg-vereinsblau"></span>
                    <div className="flex justify-between items-center bg-vereinsgelb text-vereinsblau px-3 py-3">
                      <span className="font-medium w-1/3 text-left">{r.home ? "WSV Preußen Pirna" : r.enemy}{" "}</span>
                      <span className="font-bold w-1/3 text-center">
                        {r.result_h} : {r.result_a}
                      </span>
                      <span className="w-1/3 text-right">{r.home ? r.enemy : "WSV Preußen Pirna"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right italic mt-4">
          <span>{match.date}</span>
        </div>
      </div>
    </main>
  );
}
