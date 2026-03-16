import Image from "next/image";
import Link from "next/link";

type LogoVariant = "header" | "footer";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

const getLogoSrc = (variant: LogoVariant): string => {
  return variant === "header"
    ? "/logo/logo-header.svg"
    : "/logo/logo-footer.svg";
};

export const Logo = ({ className = "", variant = "header" }: LogoProps) => {
  const logoSrc = getLogoSrc(variant);

  return (
    <Link
      href="/"
      className={`${className} select-none inline-block transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0`}
    >
      <Image
        className="w-50 h-auto"
        src={logoSrc}
        alt="Логотип Nature Guardians"
        width={150}
        height={50}
        priority={variant === "header"}
      />
    </Link>
  );
};
