import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
