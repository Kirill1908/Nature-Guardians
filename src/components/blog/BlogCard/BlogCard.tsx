import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "@/data/blogPosts";
import styles from "./BlogCard.module.css";

type BlogCardProps = {
  post: BlogPostType;
  index: number;
};

export default function BlogCard({ post, index }: BlogCardProps) {
  const isEven = index % 2 !== 0;

  return (
    <Link href={`/blog/${post.id}`}>
      <article className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center cursor-pointer`}>
        <div className="relative w-full md:w-1/2 h-[300px] rounded-lg overflow-hidden shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.description}>{post.description}</p>
          <span className={styles.button}>Read more</span>
        </div>
      </article>
    </Link>
  );
}