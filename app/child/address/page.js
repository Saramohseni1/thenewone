"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AddressPage({ searchParams }) {
  const router = useRouter();

  const country = searchParams.country;
  const sweet = searchParams.sweet;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");

  function handleSubmit() {
    if (!form.name || !form.phone || !form.address) {
      return setError("لطفاً تمام فیلدها را پر کنید.");
    }

    localStorage.setItem("userAddress", JSON.stringify(form));

    router.push(`/child/payment?country=${country}&sweet=${sweet}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center px-6 py-10">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-purple-700 mb-8 drop-shadow"
      >
        تکمیل آدرس 📦
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl w-full max-w-md"
      >
        <label className="block mb-4">
          <p className="font-semibold mb-1">نام و نام خانوادگی</p>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 rounded-xl border"
          />
        </label>

        <label className="block mb-4">
          <p className="font-semibold mb-1">شماره تماس</p>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-2 rounded-xl border"
          />
        </label>

        <label className="block mb-4">
          <p className="font-semibold mb-1">آدرس کامل</p>
          <textarea
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full p-2 rounded-xl border h-24"
          />
        </label>

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full py-3 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          ادامه به پرداخت
        </button>
      </motion.div>
    </main>
  );
}
