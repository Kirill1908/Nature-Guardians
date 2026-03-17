"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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

const getHeaderBg = (pathname: string): string => {
  if (pathname.startsWith("/events")) return "bg-[#EFF7F2]";
  if (["/media", "/donate", "/events"].includes(pathname))
    return "bg-[#EFF7F2]";
  if (pathname === "/contacts") return "bg-[#EBF0F9]";
  return "bg-white";
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const bgColor = getHeaderBg(pathname);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 p-4 backdrop-blur-md shadow-md ${bgColor}`}
      >
        <div className="main-container flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  href === "/donate"
                    ? `${styles.donateLink} ${pathname === "/donate" ? styles.donateLinkActive : ""}`
                    : `${styles.navLink} ${pathname === href ? styles.active : styles.inactive}`
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Burger button */}
          <button
            className="md:hidden cursor-pointer text-[#1D2130] transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Burger menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 md:hidden overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`p-4 flex items-center justify-between ${bgColor}`}>
          <div onClick={() => setIsOpen(false)}>
            <Logo />
          </div>
          <button
            className="cursor-pointer text-[#1D2130]"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={28} />
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
                  ? `${styles.donateLink} ${pathname === "/donate" ? styles.donateLinkActive : ""}`
                  : `${styles.mobileNavLink} ${pathname === href ? styles.active : styles.inactive}`
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
