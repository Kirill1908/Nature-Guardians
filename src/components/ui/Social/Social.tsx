import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type SocialProps = {
  iconColor?: string;
  iconHoverColor?: string;
  className?: string;
};

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: FaFacebookF, size: 18, label: "Facebook" },
  { href: "https://x.com", icon: FaXTwitter, size: 20, label: "Twitter" },
  { href: "https://instagram.com", icon: FaInstagram, size: 20, label: "Instagram" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, size: 22, label: "LinkedIn" },
];

export default function Social({
  iconColor = "text-gray-400",
  iconHoverColor = "hover:text-[#70C174]",
  className = "flex gap-6 mt-12 sm:mt-13 lg:mt-6.5 xl:mt-17.5",
}: SocialProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, size, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center cursor-pointer transition-colors duration-300 ${iconColor} ${iconHoverColor}`}
          aria-label={label}
        >
          <Icon size={size} />
        </Link>
      ))}
    </div>
  );
}