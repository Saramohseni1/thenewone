"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChildCountryPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

const countries = [
  { id: "iran", name: "ایران", emoji: "🇮🇷" },
  { id: "france", name: "فرانسه", emoji: "🇫🇷" },
  { id: "italy", name: "ایتالیا", emoji: "🇮🇹" },
  { id: "japan", name: "ژاپن", emoji: "🇯🇵" },
  { id: "mexico", name: "مکزیک", emoji: "🇲🇽" },
];


  function handleContinue() {
    if (!selected) return;
    router.push(`/child/sweets?country=${selected}`);
  }

  return (
    <main className="min-h-screen px-6 py-10 flex flex-col items-center bg-gradient-to-b from-pink-200 to-purple-300">
      
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow">
        انتخاب کشور 🍰🌍
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {countries.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`cursor-pointer rounded-2xl p-6 shadow-xl bg-white/80 backdrop-blur 
              hover:scale-105 transition border
              ${
                selected === c.id
                  ? "border-purple-600 shadow-purple-300"
                  : "border-transparent"
              }`}
          >
            <p className="text-2xl text-center font-bold text-gray-800">
              {c.emoji} {c.name}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selected}
        className="mt-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-3 rounded-xl shadow-lg hover:opacity-90 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        ادامه
      </button>
    </main>
  );
}
