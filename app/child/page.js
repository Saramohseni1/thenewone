"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChildSweetsPage() {
  const router = useRouter();
  const params = useSearchParams();
  const country = params.get("country");

  const [selectedSweet, setSelectedSweet] = useState(null);
  const [sweets, setSweets] = useState([]);

  // دیتابیس شیرینی‌ها
  const SWEET_DB = {
    iran: [
      { id: "gaz", name: "گز اصفهان", emoji: "🍬" },
      { id: "sohan", name: "سوهان", emoji: "🍮" },
      { id: "shirini-nargili", name: "شیرینی نارگیلی", emoji: "🥥" },
    ],
    france: [
      { id: "macaron", name: "ماکارون", emoji: "🌈" },
      { id: "croissant", name: "کرواسان", emoji: "🥐" },
      { id: "eclair", name: "اکلر", emoji: "🍫" },
    ],
    italy: [
      { id: "tiramisu", name: "تیرامیسو", emoji: "🍰" },
      { id: "cannoli", name: "کانولی", emoji: "🥮" },
      { id: "biscotti", name: "بیسکوتی", emoji: "🍪" },
    ],
    japan: [
      { id: "mochi", name: "موجی", emoji: "🍡" },
      { id: "dorayaki", name: "دورایاکی", emoji: "🥞" },
      { id: "taiyaki", name: "تایاکی", emoji: "🐟" },
    ],
    mexico: [
      { id: "churros", name: "چوروز", emoji: "🥖" },
      { id: "tres-leches", name: "کیک تریس لچس", emoji: "🍰" },
      { id: "pan-dulce", name: "پن دولسه", emoji: "🍩" },
    ],
  };

  useEffect(() => {
    if (country && SWEET_DB[country]) {
      setSweets(SWEET_DB[country]);
    }
  }, [country]);

  function handleContinue() {
    if (!selectedSweet) return;

    router.push(`/child/music?country=${country}&sweet=${selectedSweet}`);
  }

  if (!country) {
    return (
      <main className="min-h-screen flex items-center justify-center text-lg">
        کشور انتخاب نشده ❌
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-purple-700 mb-4 drop-shadow"
      >
        انتخاب شیرینی 🍮
      </motion.h1>

      <p className="text-gray-800 mb-10 text-center max-w-md font-medium">
        یکی از شیرینی‌های محبوب این کشور را انتخاب کن!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {sweets.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setSelectedSweet(item.id)}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl text-center transition border
              ${
                selectedSweet === item.id
                  ? "border-purple-600 shadow-purple-300"
                  : "border-transparent"
              }`}
          >
            <div className="text-5xl mb-3">{item.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          </motion.div>
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