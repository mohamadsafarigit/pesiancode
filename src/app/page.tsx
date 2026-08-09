"use client";

import Link from "next/link";
import { useState } from "react";

<span>
  <Link href="/login" className="hover:text-white transition">
    Login
  </Link>
</span>

export default function Home() {
  const testimonials = [
    {
      text: "Amazing hosting service. Fast, reliable and easy to use.",
      stars: "★★★★★",
    },
    {
      text: "Great support team! They helped me migrate my website smoothly.",
      stars: "★★★★★",
    },
    {
      text: "Best pricing and performance. Highly recommended!",
      stars: "★★★★★",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  return (
    <main className="font-sans bg-[#0f172a] text-white">

      {/* Navbar */}
      <nav className="flex justify-start items-center px-8 py-5 bg-white" dir="ltr">
        <h1 className="text-2xl font-bold text-black " >Hostinger Clone</h1>
        <div className="flex gap-6 text-black px-30  ">
          <span> Web Hosting </span>
          <span> VPS Hosting </span>
          <span> Domain </span>
    <span>
      <Link href="/login" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out px-10 py-2 rounded-full border border-black-1000 hover:border-blue-500 ml-60">
        Login
      </Link>
    </span>
    <span>
      <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out px-8 py-2 rounded-full border border-black-1000 hover:border-blue-500 bg-blue-500">
        Contact
      </Link>
    </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">
        <h2 className="text-5xl font-bold mb-4">
          From idea to online success
        </h2>
        <p className="text-gray-300 mb-8">
          Build your website with fast, secure hosting.
        </p>
        <button className="px-8 py-4 bg-purple-600 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-20">
        {[
          { title: "Web Hosting", price: "$2.99/mo" },
          { title: "Cloud Hosting", price: "$9.99/mo" },
          { title: "VPS Hosting", price: "$4.99/mo" },
          { title: "WordPress Hosting", price: "$2.99/mo" },
        ].map((p) => (
          <div key={p.title} className="bg-[#1e293b] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-purple-400 text-lg">{p.price}</p>
          </div>
        ))}
      </section>

      {/* Brands */}
      <section className="flex justify-center gap-10 py-10 text-gray-400">
        {["GitHub", "DHL", "Caterpillar", "Figma"].map((b) => (
          <span key={b} className="text-xl">{b}</span>
        ))}
      </section>

      {/* Testimonials */}
     <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">What our customers say</h2>

        <div className="bg-[#1e293b] p-8 rounded-xl text-center">
          <p className="text-gray-300 text-lg transition-all duration-300">
            “{testimonials[index].text}”
          </p>
          <p className="mt-4 text-purple-400 text-xl">
            {testimonials[index].stars}
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="px-4 py-2 bg-[#0f172a] rounded-lg hover:bg-purple-600 transition"
            >
              ◀
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-[#0f172a] rounded-lg hover:bg-purple-600 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#0d1324] text-gray-300 py-14 px-10 mt-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Hostinger Clone</h3>
      <p className="text-sm leading-6">
        Fast, secure and reliable hosting for your websites and projects.
      </p>
    </div>

    {/* Hosting */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Hosting</h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white transition">Web Hosting</li>
        <li className="hover:text-white transition">Cloud Hosting</li>
        <li className="hover:text-white transition">VPS Hosting</li>
        <li className="hover:text-white transition">WordPress Hosting</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Company</h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white transition">About Us</li>
        <li className="hover:text-white transition">Careers</li>
        <li className="hover:text-white transition">Blog</li>
        <li className="hover:text-white transition">Contact</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Support</h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white transition">Help Center</li>
        <li className="hover:text-white transition">Status</li>
        <li className="hover:text-white transition">Report Issue</li>
        <li className="hover:text-white transition">Community</li>
      </ul>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
    © 2026 Hostinger Clone — Built with Next.js + Tailwind
  </div>
</footer>


    </main>
  );
}
