"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* هدر */}
      <header className="w-full py-5 px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          🍰 Story • Bake • Tune
        </motion.div>

        <Link href="/login">
          <motion.button
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="bg-pink-500 text-white px-5 py-2 rounded-xl text-sm hover:bg-pink-600 transition"
          >
            ورود / ثبت‌نام
          </motion.button>
        </Link>
      </header>

      {/* هیرو */}
      <section className="text-center py-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold leading-relaxed"
        >
          تجربه‌ای جدید از پخت شیرینی  
          <span className="text-pink-500"> همراه با داستان و موسیقی </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 text-lg"
        >
          سفری جذاب بین شیرینی‌پزی، ماجراجویی و آرامش…
        </motion.p>

        <Link href="/login">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-xl text-lg hover:bg-pink-600 transition"
          >
            شروع کن
          </motion.button>
        </Link>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="w-full max-w-3xl mx-auto h-72 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/landing/hero.jpg"
              alt="Hero Image"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* مراحل */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">چطور کار می‌کنه؟</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* مرحله ۱ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              🎨
            </div>
            <h3 className="mt-4 font-bold text-xl">انتخاب تم</h3>
            <p className="text-gray-600 mt-2">انتخاب تم بزرگسال یا کودک + کشور و شیرینی</p>

            <div className="mt-6 w-full h-52 rounded-xl overflow-hidden shadow">
              <Image 
                src="/landing/step1.jpg"
                alt="Step 1"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* مرحله ۲ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              🎵
            </div>
            <h3 className="mt-4 font-bold text-xl">ساخت تجربه با هوش مصنوعی</h3>
            <p className="text-gray-600 mt-2">ساخت داستان و پلی‌لیست شخصی‌سازی‌شده</p>

            <div className="mt-6 w-full h-52 rounded-xl overflow-hidden shadow">
              <Image 
                src="/landing/step2.jpg"
                alt="Step 2"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* مرحله ۳ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              🧁
            </div>
            <h3 className="mt-4 font-bold text-xl">شروع پخت مرحله‌به‌مرحله</h3>
            <p className="text-gray-600 mt-2">همراه با راهنمای صوتی و تصویری</p>

            <div className="mt-6 w-full h-52 rounded-xl overflow-hidden shadow">
              <Image 
                src="/landing/step3.jpg"
                alt="Step 3"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* تجربه کاربران */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">تجربه کاربران</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-5 rounded-xl shadow"
          >
            <div className="h-40 rounded-xl overflow-hidden mb-4">
              <Image src="/landing/testimonial1.jpg" alt="user1" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 text-sm">«خیلی تجربه متفاوت و جذاب بود!»</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-5 rounded-xl shadow"
          >
            <div className="h-40 rounded-xl overflow-hidden mb-4">
              <Image src="/landing/testimonial2.jpg" alt="user2" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 text-sm">«موسیقی مرحله‌ها عالی بود.»</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-5 rounded-xl shadow"
          >
            <div className="h-40 rounded-xl overflow-hidden mb-4">
              <Image src="/landing/testimonial3.jpg" alt="user3" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 text-sm">«کیت‌ها کیفیت خوبی داشتن.»</p>
          </motion.div>

        </div>
      </section>

      {/* فوتر */}
      <footer className="py-10 text-center text-gray-500">
        © 2025 Story • Bake • Tune
      </footer>

    </main>
  );
}
