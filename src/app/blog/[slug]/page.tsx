import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/BlogPost/BlogPost";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata = {
  title: "Blog | Nature Guardians",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-12 md:pt-0">
      <div className="hidden md:block main-container mx-auto px-6 md:px-0 md:pt-9 md:mb-10">
        <Breadcrumbs />
      </div>
      <BlogPost post={post} />
    </main>
  );
}