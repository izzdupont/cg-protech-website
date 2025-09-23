import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">CG-ProTech</h1>
      <ul className="flex space-x-6">
        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}
