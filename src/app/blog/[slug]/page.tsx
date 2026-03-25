import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/BlogPost/BlogPost";
import { notFound } from "next/navigation";
import BackButton from "@/components/ui/BackButton/BackButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata = {
  title: "Blog",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-16 md:pt-0 pb-16 md:pb-24">
      <div className="hidden md:block main-container mx-auto px-6 md:px-0 md:pt-9 md:mb-10">
        <BackButton fallbackHref="/blog" />
      </div>
      <BlogPost post={post} />
    </main>
  );
}
