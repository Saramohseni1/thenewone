"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  const selectMode = (mode) => {
    localStorage.setItem("mode", mode);

    if (mode === "child") router.push("/child/country");
    if (mode === "adult") router.push("/adult");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-lg">
        در حال بارگذاری...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200/70 to-purple-900/80 flex flex-col items-center py-20 px-4">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg"
      >
        🍰 Story • Bake • Tune
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl font-semibold mb-12 text-pink-100"
      >
        لطفاً یک حالت را انتخاب کنید
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">

        {/* کارت کودک */}
        <motion.div
          onClick={() => selectMode("child")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer p-10 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md
                     border border-pink-300/50 text-center transition hover:shadow-pink-400/50
                     w-72"
        >
          <div className="text-5xl mb-4">👶</div>
          <h3 className="font-bold text-2xl text-purple-700">کودک</h3>
          <p className="text-gray-600 mt-2">
            داستان + موسیقی + شیرینی مخصوص بچه‌ها
          </p>
        </motion.div>

        {/* کارت بزرگسال */}
        <motion.div
          onClick={() => selectMode("adult")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer p-10 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md
                     border border-purple-400/50 text-center transition hover:shadow-purple-500/50
                     w-72"
        >
          <div className="text-5xl mb-4">🧑‍🦱</div>
          <h3 className="font-bold text-2xl text-pink-700">بزرگسال</h3>
          <p className="text-gray-600 mt-2">
            Mindful Baking + موسیقی آرامش‌بخش
          </p>
        </motion.div>

      </div>
    </main>
  );
}
