import ProjectsGrid from "@/components/shared/ProjectsGrid/ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="main-container">
        <div className="px-5">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-18 h-0.5 bg-gray-800"></span>
            <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
              Projects we have done
            </span>
          </div>

          <div className="md:ps-24 mb-8 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight w-full max-w-[600px] md:max-w-2xl">
              We are creating sustainable society, for everyone and forever.
            </h2>
          </div>
        </div>

        <div className="px-5 md:px-0">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
