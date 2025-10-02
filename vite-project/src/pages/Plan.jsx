import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Plan() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("/WSVEngine/Plan/plan.json")
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error("Fehler beim Laden des Spielplans:", err));
  }, []);

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Spielplan</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {matches.map((match) => (
          <div className=" min-h-[calc(100%)] hover:scale-[1.02] transition-transform relative">
            <div className="relative">
              <div className="p-[8px] overflow-hidden relative leading-none">
                <span className="absolute top-0 left-0 w-8 h-3 bg-vereinsblau"></span>                  
                <span className="absolute top-0 left-0 w-3 h-8 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-8 h-3 bg-vereinsblau"></span>                  
                <span className="absolute bottom-0 right-0 w-3 h-8 bg-vereinsblau"></span>
                <Link
                  key={match.id}
                  to={`/plan/${match.id}`}
                  className="block bg-vereinsgelb text-vereinsblau px-6 py-4"
                >
                <div className="flex justify-between items-center">
                  <span className="font-bold">{match.date}</span>
                  <span className="italic">{match.type}</span>
                </div>
                <p className="mt-2">{match.name}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
