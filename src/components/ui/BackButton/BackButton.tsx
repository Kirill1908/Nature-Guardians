"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

type BackButtonProps = {
  label?: string;
  className?: string;
  fallbackHref?: string;
};

export default function BackButton({
  label = "Back",
  className = "",
  fallbackHref = "",
}: BackButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  const handleBack = () => {
    router.push(from ?? fallbackHref);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
