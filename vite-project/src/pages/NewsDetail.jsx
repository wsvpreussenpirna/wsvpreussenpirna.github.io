import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NewsDetail() {
  const { id } = useParams(); // ID aus der URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/WSVEngine/News/news.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === id);
        setArticle(found);
      })
      .catch((err) => console.error("Fehler beim Laden der News:", err));
  }, [id]);

  if (!article) {
    return (
      <main className="flex-grow bg-black text-white px-6 py-12">
        <p>Artikel nicht gefunden...</p>
      </main>
    );
  }

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-3xl mx-auto p-6 ">
        <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
        <div className="flex justify-between text-sm mb-4">
          <span>{article.topic}</span>
          <span>{article.date}</span>
        </div>
        <div className="flex min-h-[calc(100%)] py-6">
              <div className="relative flex flex-col">
                <div className="p-[8px] overflow-hidden relative leading-none">
                <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
        <img
          src={"/WSVEngine/News/Bilder/" + article.image}
          alt={article.title}
        />
        </div>
        </div>
        </div>
        {/* Artikelinhalt */}
        <p>{article.content || "Kein Artikeltext verfügbar."}</p>
      </div>
    </main>
  );
}
