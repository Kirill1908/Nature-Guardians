import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="md:h-130 px-5 py-16 md:py-24 overflow-hidden">
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-6">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Projects
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl lg:text-6xl text-gray-800 leading-[67.20px] mb-8 font-bold">
              Projects for a <br className="hidden lg:block" /> better world
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              Discover our ongoing environmental initiatives. From reforestation
              and wildlife protection to urban cleanliness programs, we are
              committed to making a lasting impact on our planet.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-full md:aspect-auto md:rounded-xl">
              <Image
                src="/images/projects/hero-project.jpeg"
                alt="Projects hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="main-container border-t border-gray-200" />

      <section className="px-5 pb-18 bg-white pt-16">
        <div className="main-container space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

<section className="bg-[#EBF0F9] py-16 px-5 md:px-0">
  <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex items-start gap-4">
      <Image src="/images/icons/1.svg" alt="plantation icon" width={32} height={32} className="shrink-0" />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">200+ Plantation in 1 week</h3>
        <p className="text-zinc-600 text-base leading-6">Our volunteers plant hundreds of trees every week, restoring forests and rebuilding natural habitats across the region.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <Image src="/images/icons/2.svg" alt="donation icon" width={32} height={32} className="shrink-0" />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">230 People Have donated</h3>
        <p className="text-zinc-600 text-base leading-6">Generous supporters from around the world have contributed to our environmental programs, making real change possible.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <Image src="/images/icons/3.svg" alt="people icon" width={32} height={32} className="shrink-0" />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">30+ people joined</h3>
        <p className="text-zinc-600 text-base leading-6">A growing community of passionate volunteers has joined our mission to protect nature and build a more sustainable future.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <Image src="/images/icons/4.svg" alt="raised icon" width={32} height={32} className="shrink-0" />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">$324 Raised for this initiate</h3>
        <p className="text-zinc-600 text-base leading-6">Every dollar raised goes directly to funding our conservation projects, from wildlife protection to urban greening initiatives.</p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
