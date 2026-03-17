import BlogPost from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </main>
  );
}