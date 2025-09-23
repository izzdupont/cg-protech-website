import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center">
      <p>Power by © {new Date().getFullYear()} CG-ProTech. All rights reserved.</p>
    </footer>
  );
}
