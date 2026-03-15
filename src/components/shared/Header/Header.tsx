"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "../../ui/Logo/Logo";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/media", label: "Media" },
  { href: "/contacts", label: "Contacts" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="p-4 bg-white shadow-md">
      <div className="main-container flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                href === "/donate"
                  ? styles.donateLink
                  : `${styles.navLink} ${pathname === href ? styles.active : styles.inactive}`
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#1D2130] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1D2130] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1D2130] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Burger menu */}
      <div className={`fixed inset-0 z-100 bg-white transform transition-transform duration-300 md:hidden overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex items-center justify-between">
          <div onClick={() => setIsOpen(false)}>
            <Logo />
          </div>
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-8 mt-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={
                href === "/donate"
                  ? styles.donateLink
                  : `${styles.mobileNavLink} ${pathname === href ? styles.active : styles.inactive}`
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}