import { createClient } from "@/lib/supabase/server";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/types/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Vaayu India",
  description:
    "Read the latest insights, news, and updates from Vaayu India on AHU innovation, HVAC technology, and sustainable cooling solutions.",
};

export const revalidate = 60;

export default async function BlogListPage() {
  const supabase = await createClient();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .returns<Post[]>();

  if (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <section className="pb-16 pt-28 lg:pt-32">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-dark sm:text-5xl">
            Our Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-body-color">
            Stay updated with the latest insights, innovations, and news from
            Vaayu India.
          </p>
        </div>

        {/* Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 rounded-full bg-gray-100 p-6">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-dark">
              No posts yet
            </h3>
            <p className="text-body-color">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
