"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/activites", label: "Activités" },
  { href: "/evenements", label: "Événements" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top accent bar with DRC flag colors */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-rdc-blue" />
        <div className="flex-1 bg-rdc-yellow" />
        <div className="flex-1 bg-rdc-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm md:text-base">ADF</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm md:text-base text-gray-900 leading-tight">
                Les Amis de
              </p>
              <p className="font-bold text-sm md:text-base text-rdc-blue leading-tight">
                Doudou Fwamba
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rdc-blue hover:bg-rdc-blue-light rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-rdc-blue hover:bg-rdc-blue-dark rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Nous Rejoindre
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-rdc-blue hover:bg-rdc-blue-light rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-3 px-5 py-3 text-base font-semibold text-white bg-rdc-blue hover:bg-rdc-blue-dark rounded-full transition-colors"
              >
                Nous Rejoindre
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
