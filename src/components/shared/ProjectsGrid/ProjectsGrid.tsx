import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col justify-between pt-20 px-12 pb-12">
              <div>
                <h3 className="text-white font-bold text-[28px] leading-tight mb-3 line-clamp-2 min-h-[64px]">
                  {project.title}
                </h3>
                <p className="text-white/80 text-base leading-6 line-clamp-3">
                  {project.description}
                </p>
              </div>
              <span className="inline-block bg-white text-gray-800 font-medium text-base px-8 py-4 rounded-sm w-fit transition-colors duration-200 hover:bg-[#70C174] hover:text-white">
                See more
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
