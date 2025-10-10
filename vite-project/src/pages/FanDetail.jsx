import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function FanDetail() {
  const { id } = useParams(); // ID aus der URL
  const [file, setFile] = useState(null);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    fetch("/WSVEngine/Fan/fan.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === id);
        setFile(found);
      })
      .catch((err) => console.error("Fehler beim Laden der News:", err));
  }, [id]);

  // neues useEffect: rendert PDF-Seiten mit pdf.js als Canvas, so scrollt die Seite selbst
  useEffect(() => {
    if (!file) return;
    const ext = file.file.split('.').pop().toLowerCase();
    if (ext !== 'pdf') return;

    const fileUrl = "/WSVEngine/Fan/Datein/" + file.file;
    const container = pdfContainerRef.current;
    if (!container) return;
    container.innerHTML = "";
    let cancelled = false;

    const loadScript = () =>
      new Promise((resolve, reject) => {
        if (window.pdfjsLib) return resolve();
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("Failed to load pdf.js"));
        document.head.appendChild(s);
      });

    (async () => {
      try {
        await loadScript();
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

        const loadingTask = window.pdfjsLib.getDocument(fileUrl);
        const pdf = await loadingTask.promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) break;
          const page = await pdf.getPage(pageNum);
          const scale = 1.3; // anpassbar: größer für bessere Lesbarkeit
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.style.display = "block";
          canvas.style.margin = "16px 0";
          const context = canvas.getContext("2d");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);

          container.appendChild(canvas);
          await page.render({ canvasContext: context, viewport }).promise;
        }
      } catch (e) {
        console.error("PDF-Render-Fehler:", e);
        if (container) container.innerHTML = "<p>Fehler beim Laden der Vorschau.</p>";
      }
    })();

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, [file]);

  if (!file) {
    return (
      <main className="flex-grow bg-black text-white px-6 py-12">
        <p>Datei nicht gefunden...</p>
      </main>
    );
  }

  const fileUrl = "/WSVEngine/Fan/Datein/" + file.file;
  var filePreview = <p>Keine Vorschau verfügbar.</p>;
  if (file.file.split('.').pop().toLowerCase() === 'pdf') {
    // Container, der von pdf.js gefüllt wird (Canvas pro Seite) -> Seiten werden vollständig dargestellt und Page-Scroll funktioniert
    filePreview = (
        <div className="flex min-h-[calc(100%)] py-6">
            <div className="relative flex flex-col">
                <div className="p-[8px] overflow-hidden relative leading-none">
                <span className="absolute top-4 left-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute top-4 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-4 right-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute bottom-4 right-0 w-3 h-24 bg-vereinsblau"></span>
        <div className="w-full">
        <div ref={pdfContainerRef} />
      </div>
        </div>
        </div>
        </div>
    );
  } else if (file.file.split('.').pop().toLowerCase() === 'png' || file.file.split('.').pop().toLowerCase() === 'jpg') {
      filePreview = 
        <div className="flex min-h-[calc(100%)] py-6">
            <div className="relative flex flex-col">
                <div className="p-[8px] overflow-hidden relative leading-none">
                <span className="absolute top-0 left-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute top-0 left-0 w-3 h-24 bg-vereinsblau"></span>
                <span className="absolute bottom-0 right-0 w-24 h-3 bg-vereinsblau"></span>                  
                <span className="absolute bottom-0 right-0 w-3 h-24 bg-vereinsblau"></span>
        <img className="bg-black"
          src={"/WSVEngine/Fan/Datein/" + file.file}
          alt={file.title}
        />
        </div>
        </div>
        </div>
    }

  return (
    <main
      className="flex-grow bg-black bg-center bg-no-repeat bg-contain text-white px-6 py-6"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-3xl mx-auto p-6 ">
        <div className="flex items-center justify-between text-sm mb-4">
            <h2 className="text-3xl font-bold m-0">{file.title}</h2>
            <a href={fileUrl} download className="relative w-40 h-16 text-vereinsblau font-bold flex items-center justify-center shadow-md hover:opacity-90 overflow-hidden">
                <span className="relative z-1">Download</span>
                <span className="absolute top-2 left-2 w-36 h-12 bg-vereinsgelb" ></span>
                <span className="absolute top-0 left-0 w-8/40 h-3 bg-vereinsblau"></span>   
                <span className="absolute top-0 left-0 w-3 h-1/2 bg-vereinsblau"></span>   
                <span className="absolute bottom-0 right-0 w-8/40 h-3 bg-vereinsblau"></span> 
                <span className="absolute bottom-0 right-0 w-3 h-1/2 bg-vereinsblau"></span> 
            </a>
        </div>
        {filePreview}
      </div>
    </main>
  );
}
