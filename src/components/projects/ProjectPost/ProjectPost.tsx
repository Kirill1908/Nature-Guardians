import Image from "next/image";
import { ProjectData } from "@/data/projects";

type ProjectPostProps = {
  project: ProjectData;
};

export default function ProjectPost({ project }: ProjectPostProps) {
  return (
    <article className="main-container pb-16 md:pb-24">
      {/* Title */}
      <div className="mx-auto px-4 mb-12 md:mb-16">
        <h1 className="text-[48px] md:text-[60px] font-bold text-[#1d2130] leading-[1.3] mb-8">
          {project.title}
        </h1>
        <div className="flex flex-col gap-6">
          {project.intro.map((paragraph, index) => (
            <p key={index} className="text-base text-[#525560] leading-[1.7]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-100 mb-12 md:mb-16 md:rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="mx-auto px-4 flex flex-col gap-5">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#1d2130] leading-[1.3] mb-2">
          {project.content.heading}
        </h2>
        <p className="text-base text-[#525560] leading-[1.7]">
          {project.content.text}
        </p>
        <ul className="flex flex-col gap-2 pl-6 list-disc">
          {project.content.list.map((item, i) => (
            <li key={i} className="text-base text-[#525560] leading-[1.7]">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base text-[#525560] leading-[1.7]">
          {project.content.conclusion}
        </p>
      </div>
    </article>
  );
}
