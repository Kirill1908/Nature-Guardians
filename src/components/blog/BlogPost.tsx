import Image from "next/image";
import { BlogPostType } from "@/data/blogPosts";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className={`${styles.post} border-b border-gray-200 main-container`}>

      {/* Block 1 */}
      <div className={`${styles.intro} flex flex-col items-center`}>
        <p className={`${styles.date} mb-4`}>{post.date}</p>
        <h1 className={`${styles.title} mb-4`}>{post.title}</h1>
        <p className={`${styles.description} mb-8`}>{post.description}</p>
      </div>

      {/* Block 2 */}
      <div className="relative w-full h-[400px] mb-12 md:rounded-lg overflow-hidden main-container">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Block 3 */}
      <div className={`${styles.content} flex flex-col gap-6`}>
        <h2 className={`${styles.contentTitle} mb-2`}>{post.contentTitle}</h2>
        {post.content.map((block, index) => (
          <div key={index}>
            {block.heading && (
              <h3 className={`${styles.heading} mb-3`}>{block.heading}</h3>
            )}
            {block.text && (
              <p className={styles.text}>{block.text}</p>
            )}
            {block.list && (
              <ul className="flex flex-col gap-2 pl-4">
                {block.list.map((item, i) => (
                  <li key={i} className={`${styles.listItem} list-disc`}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </article>
  );
}