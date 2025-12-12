"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function KitPage() {
  const router = useRouter();
  const params = useSearchParams();

  const country = params.get("country");
  const sweet = params.get("sweet");

  const [showKitDetails, setShowKitDetails] = useState(false);

  const kitInfo = {
    price: 250000,
    items: [
      "پودر مخصوص شیرینی",
      "قالب و ابزار کوچک",
      "دستور پخت تصویری",
      "برچسب کودکانه",
    ],
  };

  function handleSelect(wantKit) {
    if (wantKit) {
      setShowKitDetails(true);
    } else {
      // نمی‌خواد → میره موسیقی
      router.push(`/child/music?country=${country}&sweet=${sweet}`);
    }
  }

  function handleBuyKit() {
    const hasAddress = localStorage.getItem("userAddress");

    if (!hasAddress) {
      router.push(`/child/address?country=${country}&sweet=${sweet}`);
    } else {
      router.push(`/child/payment?country=${country}&sweet=${sweet}`);
    }
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center">

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow"
      >
        کیت شیرینی می‌خوای؟ 🎁🧁
      </motion.h1>

      {!showKitDetails ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="flex gap-6 mt-6"
        >
          <button
            onClick={() => handleSelect(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            بله، می‌خوام
          </button>

          <button
            onClick={() => handleSelect(false)}
            className="bg-gray-400 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-gray-500"
          >
            نه، نمی‌خوام
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur shadow-xl rounded-2xl p-8 w-full max-w-md mt-8"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">محتویات کیت</h2>

          <ul className="list-disc pr-5 text-gray-700 space-y-2 mb-6">
            {kitInfo.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-gray-800 mb-6">
            قیمت کیت: <span className="text-green-600">{kitInfo.price.toLocaleString()}</span> تومان
          </p>

          <button
            onClick={handleBuyKit}
            className="w-full bg-green-500 text-white py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            خرید کیت
          </button>

          <button
            onClick={() => router.push(`/child/music?country=${country}&sweet=${sweet}`)}
            className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-xl hover:bg-gray-400 transition"
          >
            ادامه بدون خرید کیت
          </button>
        </motion.div>
      )}
    </main>
  );
}
