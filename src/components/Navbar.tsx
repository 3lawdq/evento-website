"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const sections = ["services", "gallery", "why", "booking"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide / Show Navbar
      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(currentScroll);

      setScrolled(currentScroll > 80);

      // Active Section Detection
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 150;
          const height = element.offsetHeight;
          if (
            currentScroll >= offset &&
            currentScroll < offset + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className={`text-2xl md:text-3xl font-bold transition ${
            scrolled ? "text-[#165ba2]" : "text-white"
          }`}
        >
          Evento
        </a>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex gap-8 items-center font-medium transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative transition ${
                activeSection === section
                  ? "text-[#ba684c]"
                  : "hover:text-[#ba684c]"
              }`}
            >
              {section === "services" && "خدماتنا"}
              {section === "gallery" && "أعمالنا"}
              {section === "why" && "لماذا نحن"}
              {section === "booking" && "احجز الآن"}

              {activeSection === section && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ba684c] rounded-full"></span>
              )}
            </a>
          ))}

          <a
            href="https://wa.me/9647XXXXXXXX"
            target="_blank"
            className="bg-[#ba684c] text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            واتساب
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} color={scrolled ? "#165ba2" : "white"} />
          ) : (
            <Menu size={28} color={scrolled ? "#165ba2" : "white"} />
          )}
        </button>
      </div>
    </motion.nav>
  );
}