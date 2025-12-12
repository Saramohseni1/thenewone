"use client";
export const dynamic = "force-dynamic";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ChildSweetsPage() {
  const router = useRouter();
  const params = useSearchParams();
  const country = params.get("country");

  const [selectedSweet, setSelectedSweet] = useState(null);
  const [sweets, setSweets] = useState([]);

  const SWEET_DB = {
    iran: [
      { id: "گز", name: "گز اصفهان", emoji: "🍬" },
      { id: "سوهان", name: "سوهان", emoji: "🍮" },
      { id: "شیرینی نارگیلی", name: "شیرینی نارگیلی", emoji: "🥥" },
    ],
    france: [
      { id: "ماکارون", name: "ماکارون", emoji: "🌈" },
      { id: "کرواسان", name: "کرواسان", emoji: "🥐" },
      { id: "اکلر", name: "اکلر", emoji: "🍫" },
    ],
    italy: [
      { id: "تیرامیسو", name: "تیرامیسو", emoji: "🍰" },
      { id: "کانولی", name: "کانولی", emoji: "🥮" },
      { id: "بیسکوتی", name: "بیسکوتی", emoji: "🍪" },
    ],
    japan: [
      { id: "موجی", name: "موجی", emoji: "🍡" },
      { id: "دورایاکی", name: "دورایاکی", emoji: "🥞" },
      { id: "تایاکی", name: "تایاکی", emoji: "🐟" },
    ],
    mexico: [
      { id: "چوروز", name: "چوروز", emoji: "🥖" },
      { id: "کیک تریس لچس", name: "کیک تریس لچس", emoji: "🍰" },
      { id: "پن دولسه", name: "پن دولسه", emoji: "🍩" },
    ],
  };

  useEffect(() => {
    if (country && SWEET_DB[country]) {
      setSweets(SWEET_DB[country]);
    }
  }, [country]);

  function handleContinue() {
    if (!selectedSweet) return;
    router.push(`/child/kit?country=${country}&sweet=${selectedSweet}`);
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-4 drop-shadow">
        انتخاب شیرینی 🍮
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {sweets.map((sweet) => (
          <div
            key={sweet.id}
            onClick={() => setSelectedSweet(sweet.id)}
            className={`cursor-pointer p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl hover:scale-105 transition border
            ${
              selectedSweet === sweet.id
                ? "border-purple-600 shadow-purple-300"
                : "border-transparent"
            }`}
          >
            <div className="text-5xl mb-3">{sweet.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800">{sweet.name}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedSweet}
        className="mt-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-3 rounded-xl shadow-lg hover:opacity-90 transition disabled:bg-gray-400"
      >
        ادامه
      </button>
    </main>
  );
}
