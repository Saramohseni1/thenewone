"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MusicPage() {
  const router = useRouter();
  const params = useSearchParams();
  const country = params.get("country");
  const sweet = params.get("sweet");

  const musicList = ["شاد", "کارتونی", "آروم", "هیجانی"];

  function goNext(music) {
    router.push(`/child/recipe?country=${country}&sweet=${sweet}&music=${music}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center py-16 px-4">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-purple-700 mb-8"
      >
        انتخاب موسیقی 🎵
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {musicList.map((music) => (
          <motion.div
            key={music}
            whileHover={{ scale: 1.07 }}
            onClick={() => goNext(music)}
            className="cursor-pointer bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl text-center"
          >
            <h2 className="text-lg font-bold text-gray-700">{music}</h2>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
