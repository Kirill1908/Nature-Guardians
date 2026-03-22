"use client";

import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OurNewsSectionProps = {
  className?: string;
};

export default function OurNewsSection({
  className = "pb-20",
}: OurNewsSectionProps) {
  const news = blogPosts.slice(-4);
  const pathname = usePathname();
  const isMedia = pathname === "/media";

  return (
    <section className={className}>
      <div className="main-container">
        {!isMedia && (
          <div className="flex items-center justify-between mb-12 px-6 md:px-0">
            <h2 className="text-4xl font-medium leading-14 text-gray-800">
              Read Our News
            </h2>
            <div className="flex-1 h-px bg-[#E5E5E5] ml-6 md:block"></div>
          </div>
        )}

        {/* Грід карток */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-6">
          {news.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Картинка */}
              <Link
                href={`/blog/${item.id}?from=/media`}
                className="group w-screen -mx-5 sm:mx-0 sm:w-full relative aspect-4/3 sm:rounded-lg overflow-hidden mb-4 block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>

              {/* Заголовок */}
              <h3 className="text-gray-800 font-bold text-[20px] leading-snug mb-2 transition-transform duration-200 group-hover:translate-y-px">
                <Link href={`/blog/${item.id}?from=/media`} className="group">
                  <span className="group-hover:underline decoration-2 underline-offset-4 decoration-gray-800 line-clamp-2">
                    {item.title}
                  </span>
                </Link>
              </h3>

              {/* Опис */}
              <p className="text-zinc-500 text-[16px] leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
