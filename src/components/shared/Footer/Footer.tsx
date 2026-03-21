"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { Logo } from "@/components/ui/Logo/Logo";
import Social from "@/components/ui/Social/Social";

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/media", label: "Media" },
  { href: "/contacts", label: "Contacts" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // "smooth" для плавності, "auto" для миттєвого стрибка
    });
  };

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      // console.log("Subscribing:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="py-14 bg-[#0B0706] text-white md:py-20 lg:py-24 px-4">
      <div className="main-container flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
        <div className="w-full lg:flex-2">
          <Logo variant="footer" className="w-50" />
        </div>

        <div className="w-full lg:flex-2 flex justify-start gap-12 sm:gap-20 md:gap-24">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-4 whitespace-nowrap">Our team</h4>
            <ul className="flex flex-col gap-6">
              {links.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.link}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-4 whitespace-nowrap">More</h4>
            <ul className="flex flex-col gap-6">
              {links.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.link}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:flex-3 flex flex-col">
          <h3 className="text-3xl md:text-4xl font-bold -mt-1.5 mb-8 leading-tight">
            Subscribe to get latest updates
          </h3>

          <form name="subscribe" onSubmit={handleSubmit} noValidate>
            <div className="relative flex flex-col md:flex-row gap-0 w-full md:min-w-sm">
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`${styles.input} ${error ? styles.inputError : ""}`}
              />
              <button
                type="submit"
                className={`${styles.submitBtn} ${isSubscribed ? styles.success : ""}`}
              >
                {isSubscribed ? "Done!" : "Subscribe"}
              </button>

              {error && (
                <span
                  className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1"
                  role="alert"
                >
                  {error}
                </span>
              )}
            </div>
          </form>

          <Social/>
        </div>
      </div>
    </footer>
  );
}
