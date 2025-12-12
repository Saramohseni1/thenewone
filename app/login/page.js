"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // گرفتن یوزر ذخیره‌شده
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("ابتدا ثبت‌نام کنید.");
      return;
    }

    // چک ایمیل
    if (savedUser.email !== email) {
      setError("ایمیل پیدا نشد.");
      return;
    }

    // چک رمز عبور (نسخه کامل)
    if (savedUser.password !== password) {
      setError("رمز عبور اشتباه است.");
      return;
    }

    // ذخیره وضعیت لاگین
    localStorage.setItem("loggedIn", "true");

    // انتقال به داشبورد
    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          ورود به حساب
        </h1>

        <form onSubmit={handleLogin}>

          <label className="block text-gray-700 mb-2">ایمیل</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-pink-400"
            placeholder="example@email.com"
          />

          <label className="block text-gray-700 mb-2">رمز عبور</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-pink-400"
            placeholder="********"
          />

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
          >
            ورود
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          حساب نداری؟{" "}
          <Link href="/register" className="text-pink-500 font-semibold">
            ثبت‌نام
          </Link>
        </p>

      </div>
    </main>
  );
}
