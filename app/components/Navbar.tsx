"use client";

import { useState } from "react";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { whatsappUrl } from "@/app/lib/constants";
import Link from "next/link";

const navLinks = [
  { type: "internal", href: "#tentang", label: "Tentang Sertifikasi" },
  { type: "internal", href: "#layanan", label: "Layanan" },
  { type: "internal", href: "#industri", label: "Industri" },
  { type: "internal", href: "#tahapan", label: "Tahapan Sertifikasi" },
  { type: "internal", href: "#produk", label: "Kategori Produk" },
  { type: "external", href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 left-4 right-4 md:left-0 md:right-0 max-w-7xl md:mx-auto bg-white shadow-sm z-50 rounded-2xl md:rounded-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 md:h-16">
          <Image
            alt="logo"
            src={logoImg}
            width={100}
            height={33}
            className="md:w-30"
          />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-6 py-2 bg-teal-800 text-white rounded-full hover:bg-teal-700 transition text-sm font-medium"
            >
              Mulai Proses
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-gray-100 px-4 pb-4 text-center">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) =>
              link.type === "internal" ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-sm py-2 px-2 rounded-lg hover:bg-gray-50 transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-2 px-6 py-2 bg-teal-800 text-white rounded-full hover:bg-teal-700 transition text-sm font-medium w-full"
            >
              Mulai Proses
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
