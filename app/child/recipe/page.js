"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const params = useSearchParams();
  const router = useRouter();

  const country = params.get("country");
  const sweet = params.get("sweet");
  const music = params.get("music");

  const [recipe, setRecipe] = useState(null);

  // دیتابیس دستور پخت‌ها (نمونه کامل کارتونی)
  const RECIPE_DB = {
    گز: {
      img: "🍬",
      ingredients: ["آرد", "شکر", "عسل", "پودر پسته"],
      steps: [
        "همهٔ مواد را داخل یک کاسه‌ی کوچولو بریز.",
        "به‌آرومی با قاشق هم بزن تا یک خمیر خوشمزه درست بشه.",
        "خمیر را داخل قالب فشار بده.",
        "۱۰ دقیقه بزار تو یخچال… تمام! گز خوشمزه آماده‌ست 🎉",
      ],
    },

    "شیرینی نارگیلی": {
      img: "🥥",
      ingredients: ["پودر نارگیل", "شیر", "شکر"],
      steps: [
        "نارگیل رو همراه شیر و شکر مخلوط کن.",
        "خمیر رو قل‌قل بده تا قشنگ فرم بگیره.",
        "با قاشق گلوله گلوله بساز.",
        "۵ دقیقه داخل فر… تماااام! 😍",
      ],
    },

    ماکارون: {
      img: "🌈",
      ingredients: ["پودر بادام", "پودر قند", "تخم‌مرغ"],
      steps: [
        "سفیدهٔ تخم‌مرغ را خوب بزن تا پف کنه.",
        "پودر بادام + پودر قند را اضافه کن.",
        "خمیر را دایره‌ای روی سینی بچین.",
        "۱۰ دقیقه تو فر… ماکارون رنگین‌کمانی آماده شد 🌈",
      ],
    },

    // بقیه شیرینی‌ها نیز میتوانم اضافه کنم اگر بگی
  };

  useEffect(() => {
    if (sweet && RECIPE_DB[sweet]) {
      setRecipe(RECIPE_DB[sweet]);
    }
  }, [sweet]);

  if (!recipe)
    return (
      <main className="min-h-screen flex items-center justify-center text-xl">
        در حال بارگذاری...
      </main>
    );

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center">

      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow mb-4 animate-bounce">
        دستور پخت {sweet} 👩‍🍳🍰
      </h1>

      {/* نمایش ایموجی بزرگ شیرینی */}
      <div className="text-8xl mb-6 animate-pulse">{recipe.img}</div>

      {/* بلوک مواد لازم */}
      <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl max-w-md w-full mb-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-3">مواد لازم 🧺</h2>
        <ul className="list-disc pr-6 text-gray-700 space-y-2">
          {recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* مراحل پخت کارتونی */}
      <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl max-w-md w-full mb-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">مراحل پخت 🎨</h2>

        <div className="space-y-4">
          {recipe.steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 bg-pink-100 rounded-xl shadow hover:scale-[1.02] transition"
            >
              <span className="text-3xl">✨</span>
              <p className="text-gray-700">{i + 1}. {step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* موسیقی انتخاب‌شده */}
      <div className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg mb-8 animate-pulse">
        🎵 موسیقی تو: <b>{music}</b>
      </div>

      <button
        onClick={() => router.push("/")}
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
      >
        برگشت به خانه 🏡
      </button>
    </main>
  );
}
