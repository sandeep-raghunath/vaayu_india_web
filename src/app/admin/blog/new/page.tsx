import BlogPostForm from "@/components/blog/BlogPostForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewBlogPostPage() {
  return (
    <div>
      <Link
        href="/admin/blog"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-body-color transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Posts
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-dark">Create New Post</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one">
        <BlogPostForm />
      </div>
    </div>
  );
}
