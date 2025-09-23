import React from "react";

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Cloud Guardian for Your Business
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Secure, scalable, and fully managed cloud infrastructure, hosting, and server management — so you can focus on growth.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700">Get Started</a>
        <a href="#services" className="px-6 py-3 bg-white text-blue-700 rounded-lg shadow hover:bg-gray-100">Learn More</a>
      </div>
    </section>
  );
}
