import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TeamMember } from "@/data/team";

export default function TeamCard({ name, role, image, social }: TeamMember) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-72 h-80 rounded-lg aspect-3/4 overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>
      <h3 className="text-gray-800 font-medium text-xl leading-snug">{name}</h3>
      <p className="opacity-60 text-gray-800 text-xs font-medium mt-1 mb-4">{role}</p>

      <div className="flex items-center gap-5">
        <a
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#70C174] transition-colors duration-200"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="-mb-0.5 text-gray-800 hover:text-[#70C174] transition-colors duration-200"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="-mb-0.5 text-gray-800 hover:text-[#70C174] transition-colors duration-200"
        >
          <FaLinkedinIn size={21} />
        </a>
      </div>
    </div>
  );
}
