import { useEffect, useState } from "react";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);

  /* Testdaten 
  useEffect(() => {
    // Statt fetch → lokale Testdaten
    const testData = [
      {
        id: 1,
        title: "Testartikel 1",
        topic: "Allgemein",
        date: "30.09.2025",
        image: "/welcome.jpg", // oder ein Bild im public-Ordner
      },
      {
        id: 2,
        title: "Testartikel 2",
        topic: "Turnier",
        date: "28.09.2025",
        image: "/logo-wsvpp.png",
      },
    ];
    setNewsItems(testData);
  }, []);*/

  useEffect(() => {
    fetch("/WSVEngine/News/news.json")
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
                    src={"/WSVEngine/News/Bilder" + item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Inhalt */}
                  <div className="p-4">
                    <h3 className="text-xl text-vereinsblau font-bold mb-2">{item.title}</h3>
                    <div className="flex justify-between text-sm text-vereinsblau">
                        <p>{item.topic}</p>
                        <p>{item.date}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
