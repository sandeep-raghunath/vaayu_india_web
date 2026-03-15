"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Post } from "@/types/blog";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two">
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          {post.header_image_url ? (
            <Image
              src={post.header_image_url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary text-white">
              <span className="text-4xl font-bold opacity-30">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-body-color">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.created_at}>{formattedDate}</time>
          </div>

          <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug text-dark transition-colors duration-200 group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-body-color">
            {post.body?.replace(/[#*_`>\-\[\]()!]/g, "").slice(0, 150)}...
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2">
            Read More
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
