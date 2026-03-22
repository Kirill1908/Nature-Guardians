import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";

export default function TopNewsList() {
  return (
    <div className="p-6 flex flex-col gap-6">
      {blogPosts.slice(0, 3).map((item) => (
        <div key={item.id} className="flex gap-6 items-start">
          <Link
            href={`/blog/${item.id}?from=/media`}
            className="group relative w-48 h-40 max-[470px]:w-30 max-[470px]:h-30 shrink-0 rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="192px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>

          <div className="">
            <h3 className="text-gray-800 font-medium md:text-xl leading-tight mb-1 transition-transform duration-200 group-hover:translate-y-px">
              <Link href={`/blog/${item.id}?from=/media`} className="group">
                <span className="group-hover:underline decoration-2 underline-offset-4 decoration-gray-800">
                  {item.title}
                </span>
              </Link>
            </h3>
            <p className="max-[470px]:hidden text-zinc-600 text-base font-normal leading-6 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
