import { useState } from "react";

export default function Header() {

  return (
    <header className="text-[#0057b8] bg-vereinsgelb px-6 py-4 flex items-center justify-between shadow-md z-20 relative">
        <a href="/tournaments">
            <div className="flex items-center space-x-4">
            <img src="/logo-wsvpp.png" alt="WSV Preußen Pirna Logo" className="h-10 w-auto"/>
            <h1 className="font-bold text-lg">Preußische Festspiele</h1>
            </div>
        </a>
    </header>
  );
}
