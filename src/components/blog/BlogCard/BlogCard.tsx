import { BlogPostData } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: BlogPostData;
};
export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div
      key={post.id}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${
        post.index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group relative h-75 lg:h-100 overflow-hidden shadow-lg -mx-5 w-[calc(100%+2.5rem)] md:mx-0 md:w-1/2 md:rounded-xl"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col items-start">

        <Link href={`/blog/${post.id}`} className="group block">
          <h3 className="text-3xl lg:text-4xl xl:leading-[57.60px] font-bold text-gray-800 mb-2 leading-tight transition-transform duration-200 group-hover:translate-y-px">
            <span className="group-hover:underline decoration-2 underline-offset-4 decoration-gray-800">
              {post.title}
            </span>
          </h3>
        </Link>

        <p className="text-zinc-600 mb-8 line-clamp-3">{post.description}</p>

        <Link
          href={`/blog/${post.id}`}
          className="px-8 py-4 bg-[#70C174] text-white rounded-sm hover:opacity-90 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
