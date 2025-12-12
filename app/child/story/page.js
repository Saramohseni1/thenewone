"use client";

import { useSearchParams } from "next/navigation";

export default function StoryPage() {
  const params = useSearchParams();

  const sweet = params.get("sweet");
  const country = params.get("country");
  const music = params.get("music");

  return (
    <main className="min-h-screen px-8 py-16 bg-pink-100 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">داستان جادویی 📖✨</h1>

      <p className="max-w-xl text-lg text-gray-700 leading-relaxed">
        امروز تو سفری جادویی به <b>{country}</b> رفتی و با کمک یک موسیقی
        <b> {music} </b>
        ، شیرینی خوشمزه‌ی <b>{sweet}</b> رو پختی.  
        این شیرینی قدرت خنده و شادی داره و هرکی بخوره، تا یک ساعت می‌خنده!  
        آفرین قهرمان پُف‌قندی ما 🍰💖
      </p>
    </main>
  );
}
