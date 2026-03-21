"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from 'react-icons/bs';

type BackButtonProps = {
  label?: string;
  className?: string;
   href?: string;
};

export default function BackButton({
  label = "Back",
  className = "",
   href,
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleBack}
      className={`cursor-pointer hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#70C174] hover:text-gray-800 transition-colors ${className}`}
    >
      <BsArrowLeft className="text-xl" />
      <span>{label}</span>
    </button>
  );
}
