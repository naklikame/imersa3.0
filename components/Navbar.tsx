"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Reference", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6">
      <nav
        className="lg-light flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500"
        style={{ width: "min(900px, 100%)" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0 mr-2">
          <img
            src="/logo-transparent.png"
            alt="Imersa"
            style={{ height: "34px", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#EEE9E4",
            color: "#1a2a1a",
            fontFamily: "var(--font-display)",
          }}
        >
          Kontakt
          <span className="text-base leading-none">→</span>
        </a>
      </nav>
    </header>
  );
}
