import { useEffect, useState } from "react";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => setNewsItems(data))
      .catch((err) => console.error("Fehler beim Laden der News:", err));
  }, []);

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Neuigkeiten</h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
            <div className="relative flex flex-col hover:scale-[1.02] transition-transform">
                <div className="p-[8px] overflow-hidden relative leading-none">
                  <span className="absolute top-0 left-0 w-36 h-3 bg-vereinsblau"></span>                  
                  <span className="absolute top-0 left-0 w-3 h-36 bg-vereinsblau"></span>
                  <span className="absolute bottom-0 right-0 w-36 h-3 bg-vereinsblau"></span>                  
                  <span className="absolute bottom-0 right-0 w-3 h-36 bg-vereinsblau"></span> 
                  <div
                    key={item.id}
                    className="bg-vereinsgelb overflow-hidden"
                  >
                    {/* Titelbild */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Inhalt */}
                  <div className="p-4">
                    <h3 className="text-xl text-vereinsblau font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-vereinsblau mb-1">{item.topic}</p>
                    <p className="text-sm text-vereinsblau">{item.date}</p>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
