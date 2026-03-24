import Image from "next/image";
import { BlogPostData } from "@/data/blogPosts";

type BlogPostProps = {
  post: BlogPostData;
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="pb-16 md:pb-24 main-container">
      {/* Title and Date */}
      <div className="max-w-[1024px] mx-auto px-4 mb-12 md:mb-16 text-center flex flex-col items-center">
        <p className="text-base text-[#1d2130] mb-4">{post.date}</p>
        <h1 className="text-[48px] md:text-[60px] font-bold text-[#1d2130] leading-[1.3] mb-4">
          {post.title}
        </h1>
        <p className="text-base text-[#525560] leading-[1.6]">
          {post.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[400px] mb-12 md:mb-16 md:rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-[1024px] mx-auto px-4 flex flex-col gap-5">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#1d2130] leading-[1.3] mb-2">
          {post.contentTitle}
        </h2>

        {post.content.map((block, index) => (
          <div key={index} className="flex flex-col gap-3">
            {block.heading && (
              <h3 className="text-[20px] md:text-[28px] font-bold text-[#1d2130] leading-[1.3]">
                {block.heading}
              </h3>
            )}

            {block.text && (
              <p className="text-base leading-[1.7] text-[#525560]">
                {block.text}
              </p>
            )}

            {block.list && (
              <ul className="flex flex-col gap-2 pl-6 list-disc">
                {block.list.map((item, i) => (
                  <li
                    key={i}
                    className="text-base leading-[1.7] text-[#525560]"
                  >
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
