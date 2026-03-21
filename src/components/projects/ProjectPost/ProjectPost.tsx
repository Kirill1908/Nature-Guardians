import Image from "next/image";
import { ProjectData } from "@/data/projects";
import styles from "./ProjectPost.module.css";

type ProjectPostProps = {
  project: ProjectData;
};

export default function ProjectPost({ project }: ProjectPostProps) {
  return (
    <article className={`${styles.post} main-container`}>

      {/* Block 1 — intro text */}
      <div className={styles.intro}>
        <h1 className={`${styles.title} mb-8`}>{project.title}</h1>
        <div className={`${styles.introText} flex flex-col gap-6 mb-8`}>
          {project.intro.map((paragraph, index) => (
            <p key={index} className={styles.text}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Block 2 — image */}
      <div className="relative w-full h-[400px] mb-12 md:rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Block 3 — content */}
      <div className={`${styles.content} flex flex-col gap-6`}>
        <h2 className={`${styles.contentTitle} mb-2`}>{project.content.heading}</h2>
        <p className={styles.text}>{project.content.text}</p>
        <ul className="flex flex-col gap-2 pl-4">
          {project.content.list.map((item, i) => (
            <li key={i} className={`${styles.listItem} list-disc`}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.text}>{project.content.conclusion}</p>
      </div>

    </article>
  );
}