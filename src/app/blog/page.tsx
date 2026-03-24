import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard/BlogCard";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="md:h-130 px-5 py-16 md:py-24 overflow-hidden">
        <div className="main-container flex flex-col md:gap-14 md:flex-row">
          <div className="flex-[1.5] lg:flex-[1.8]">
            <div className="flex items-center gap-6 mb-6">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Blog
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl lg:text-6xl text-gray-800 leading-[67.20px] mb-8 font-bold">
              Stories for a <br className="hidden lg:block" /> greener world
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              Explore our latest articles on ecology, sustainability, and
              environmental action. We believe that informed communities are
              empowered communities — ready to protect our planet for future
              generations.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="h-75 relative overflow-hidden shadow-sm -mx-5 w-[calc(100%+2.5rem)] aspect-4/3 md:mx-0 md:w-full md:max-w-125 md:h-80 md:aspect-auto md:rounded-xl">
              <Image
                src="/images/blog/hero-blog.jpeg"
                alt="Blog hero"
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

      <section className="px-5 pb-16 md:pb-24 bg-white pt-16 md:pt-24">
        <div className="main-container flex flex-col gap-16 md:gap-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
