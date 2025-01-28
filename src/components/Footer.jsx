import React from "react";
import Logo from "../assets/Logo.svg"; // Adjust the path based on your component location

const Footer = () => {
  // Function for smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100">
    <footer className="bg-[#020010] text-white py-12 px-4 md:px-10 rounded-t-2xl">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src={Logo} alt="UzCanSat Logo" className="h-16 mb-8" />

        {/* Navigation Links */}
        <nav className="flex gap-10 text-sm md:text-base mb-8">
          {[
            { name: "О конкурсе", id: "concourse" },
            { name: "Галерея", id: "firstSec" },
            { name: "Партнёры", id: "carousel" },
            { name: "Спонсоры", id: "price" },
          ].map(({ name, id }) => (
            <button
              key={name}
              onClick={() => scrollToSection(id)}
              className="text-white transition hover:text-gray-400"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-700 my-4"></div>

        {/* Copyright Text */}
        <p className="text-xs mt-6 text-gray-400">
          © 2025 UzCanSat. Все права защищены.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
