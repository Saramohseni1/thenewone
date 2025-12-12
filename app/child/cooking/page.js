"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CookingPage() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const sweet = searchParams.get("sweet");
  const age = localStorage.getItem("age");


  const [step, setStep] = useState(1);
  const [anim, setAnim] = useState(false);

  const steps = [
    {
      title: "مرحله ۱: آماده‌سازی مواد",
      text: `اول تمام مواد لازم برای درست کردن ${sweet} را آماده کن! 
      آرد، کره، شکر و چیزای خوشمزه دیگه... 🌟`,
      emoji: "🧺",
    },
    {
      title: "مرحله ۲: مخلوط کردن",
      text: "همه چیز را داخل یک کاسه بریز و خوب هم بزن! خیلی خوب! 👩‍🍳",
      emoji: "🥣",
    },
    {
      title: "مرحله ۳: پخت و تزئین",
      text: `الان ${sweet} خوشمزه‌ت رو بزار تو فر!  
      وقتی آماده شد می‌تونی با عشق تزئینش کنی ✨`,
      emoji: "🧁",
    },
  ];

  const clickSound = () => {
    const s = new Audio("/sounds/click.mp3");
    s.volume = 0.6;
    s.play();
  };

  const nextStep = () => {
    clickSound();
    setAnim(true);

    setTimeout(() => {
      setAnim(false);
      setStep((prev) => prev + 1);
    }, 700);
  };

  const isFinished = step > steps.length;

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center py-12 px-6">

      <h1 className="text-3xl font-bold text-pink-600 mb-10">
        🍰 آشپزی کودکانه – {sweet}
      </h1>

      {!isFinished ? (
        <div
          className={`max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl transition 
            ${anim ? "scale-95 opacity-80" : "scale-100 opacity-100"}`}
        >
          <div className="text-center text-6xl">{steps[step - 1].emoji}</div>

          <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">
            {steps[step - 1].title}
          </h2>

          <p className="text-gray-600 mt-4 text-center leading-7">
            {steps[step - 1].text}
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-3 rounded-full mt-8">
            <div
              className="h-3 bg-pink-400 rounded-full transition-all"
              style={{
                width: `${(step / steps.length) * 100}%`,
              }}
            />
          </div>

          <button
            onClick={nextStep}
            className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-lg transition shadow-lg"
          >
            مرحله بعد ➜
          </button>
        </div>
      ) : (
        <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-xl text-center">
          <div className="text-6xl">🎉</div>

          <h2 className="text-3xl font-bold text-pink-600 mt-4">
            آفرین! پختت تموم شد!
          </h2>

          <p className="text-gray-700 mt-4 text-lg leading-8">
            تو الان یک آشپز کوچولوی واقعی هستی!  
            شیرینی {sweet} مخصوص {country} با موفقیت درست شد 🍪✨
          </p>
        </div>
      )}
    </main>
  );
}
