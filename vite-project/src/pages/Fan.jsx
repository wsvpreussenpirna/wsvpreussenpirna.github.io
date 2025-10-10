import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fan() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch("/WSVEngine/Fan/fan.json")
      .then((response) => response.json())
      .then((data) => setNewsItems(data))
      .catch((err) => console.error("Fehler beim Laden der News:", err));
  }, []);

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Downloads</h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {newsItems.map((item) => {
          const fileUrl = "/WSVEngine/Fan/Datein/" + item.file;
          var fileImage = "/logo-wsvpp.png" 
          if (item.file.split('.').pop().toLowerCase() === 'pdf') {
            fileImage = "/pdf-wsv.png"
          } else if (item.file.split('.').pop().toLowerCase() === 'png' || item.file.split('.').pop().toLowerCase() === 'jpg') {
            fileImage = fileUrl
          } 
          return (
            <div key={item.id}>
              <div className="p-[8px] overflow-hidden relative leading-none">
                <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span> 
                <div className="bg-vereinsgelb overflow-hidden">
                  <Link to={`/fan/${item.id}`} className="block">
                    <div className="w-full aspect-square overflow-hidden bg-black">
                      <img
                        src={fileImage}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </Link>
                  <div className="p-3 bg-vereinsgelb flex items-center justify-between">
                    <Link to={`/fan/${item.id}`} className="text-sm text-vereinsblau truncate">
                      <b>{item.title}</b>
                    </Link>
                    <a
                      href={fileUrl}
                      download
                      className="ml-2 px-3 py-1 rounded text-sm"
                    >
                        <img src="/download.png" alt="Download" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
