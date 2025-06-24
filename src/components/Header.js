import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  // استعمل المفاتيح بدل النصوص المباشرة
  const navLinks = [
    { label: t("home"), href: "#hero" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("joinus"), href: "#joinus" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/60 backdrop-blur-xl shadow-lg border-b border-green-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-12">
        {/* Brand (with gradient text and slight shadow) */}
        <a
          href="#hero"
          className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-green-700 via-green-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm select-none cursor-pointer"
        >
          {t("brand")}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-base font-bold items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-xl transition bg-white/0 hover:bg-green-50 hover:text-green-700 hover:shadow-lg focus:outline-none focus:bg-green-100 duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Hamburger for Mobile */}
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-green-100 transition"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t("menu")}
          >
            <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      {menuOpen && (
        <nav className="md:hidden fixed right-3 left-3 top-16 bg-white/95 border border-green-100 rounded-2xl shadow-2xl p-6 flex flex-col gap-5 z-50 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-extrabold py-2 rounded-xl hover:bg-green-50 hover:text-green-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
