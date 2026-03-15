import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/blog/BlogPostForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/types/blog";

interface EditBlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({
  params,
}: EditBlogPostPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single<Post>();

  if (error || !post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/admin/blog"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-body-color transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Posts
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-dark">Edit Post</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one">
        <BlogPostForm post={post} />
      </div>
    </div>
  );
}
