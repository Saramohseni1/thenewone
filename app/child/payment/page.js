"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const params = useSearchParams();

  const country = params.get("country");
  const sweet = params.get("sweet");

  const [loading, setLoading] = useState(false);

  function handlePay() {
    setLoading(true);

    setTimeout(() => {
      router.push(`/child/music?country=${country}&sweet=${sweet}`);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-200 flex flex-col items-center px-6 py-10">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-purple-700 mb-6"
      >
        پرداخت امن 🧁💳
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
      >
        <p className="text-lg font-semibold text-gray-700 mb-4">
          مبلغ قابل پرداخت:
        </p>

        <p className="text-3xl font-bold text-green-600 mb-8">
          ۲۵۰,۰۰۰ تومان
        </p>

        <button
          onClick={handlePay}
          disabled={loading}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white w-full py-3 rounded-xl shadow-lg hover:opacity-90 transition disabled:bg-gray-400"
        >
          {loading ? "در حال پردازش..." : "پرداخت"}
        </button>
      </motion.div>
    </main>
  );
}