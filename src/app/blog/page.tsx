import Image from "next/image";
import BlogCard from "@/components/blog/BlogCard/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main>
      {/* Герой блок */}
      <section className="py-16">
        <div className="main-container flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Our Blog
              </span>
            </div>
            <div className="pl-[88px]"> 
            <h1 className="text-5xl font-bold text-[#0b0706] leading-tight mt-4">
              Stories for a greener world
            </h1>
            <p className="text-base text-[#525560] leading-relaxed">
              Explore our latest articles on ecology, sustainability, and
              environmental action. We believe that informed communities
              are empowered communities — ready to protect our planet for
              future generations.
              </p>
              </div>
          </div>
          <div className="relative w-full md:w-[45%] h-[340px] rounded-lg overflow-hidden shrink-0">
            <Image
              src="/images/blog/hero-blog.jpeg"
              alt="Blog hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="main-container border-t border-gray-200" />

      {/* Список карток */}
      <section className="main-container py-16">
        <div className="flex flex-col gap-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}