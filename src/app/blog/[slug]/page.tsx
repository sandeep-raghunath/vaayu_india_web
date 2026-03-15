import { createClient } from "@/lib/supabase/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import type { Post } from "@/types/blog";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return [];
  }

  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const { data: posts } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  return (posts ?? []).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("posts")
    .select("title, body, header_image_url")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) {
    return { title: "Post Not Found | Vaayu India" };
  }

  return {
    title: `${post.title} | Vaayu India Blog`,
    description: post.body?.replace(/[#*_`>\-\[\]()!]/g, "").slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body?.replace(/[#*_`>\-\[\]()!]/g, "").slice(0, 160),
      images: post.header_image_url ? [post.header_image_url] : [],
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single<Post>();

  if (error || !post) {
    notFound();
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="pb-16 pt-28 lg:pt-32">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-body-color transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-dark sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-body-color">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.created_at}>{formattedDate}</time>
          </div>
        </header>

        {/* Header Image */}
        {post.header_image_url && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.header_image_url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        )}

        {/* Post Body */}
        <div className="prose prose-lg max-w-none prose-headings:text-dark prose-p:text-body-color prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-img:rounded-xl">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
