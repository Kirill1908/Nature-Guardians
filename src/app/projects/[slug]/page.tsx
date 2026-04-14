import { projects } from "@/data/projects";
import ProjectPost from "@/components/projects/ProjectPost/ProjectPost";
import ProjectsGrid from "@/components/shared/ProjectsGrid/ProjectsGrid";
import { notFound } from "next/navigation";
import BackButton from "@/components/ui/BackButton/BackButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata = {
  title: "Projects",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-16 md:pt-0 pb-16 md:pb-24">
      <div className="hidden md:block main-container mx-auto md:px-0 md:pt-9 md:mb-10">
        <BackButton label="Back" fallbackHref="/projects" />
      </div>

      <ProjectPost project={project} />

      <div className="px-5 md:px-0">
        <ProjectsGrid />
      </div>
    </main>
  );
}
