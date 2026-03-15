"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Save, Eye, Loader2 } from "lucide-react";
import ImageUpload from "@/components/blog/ImageUpload";
import { createClient } from "@/lib/supabase/client";
import type { Post, PostFormData } from "@/types/blog";

interface BlogPostFormProps {
  post?: Post;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [autoSlug, setAutoSlug] = useState(!post);

  const [formData, setFormData] = useState<PostFormData>({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    header_image_url: post?.header_image_url ?? "",
    body: post?.body ?? "",
    published: post?.published ?? false,
  });

  // Auto-generate slug from title
  useEffect(() => {
    if (autoSlug && formData.title) {
      setFormData((prev) => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [formData.title, autoSlug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "slug") {
      setAutoSlug(false);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.slug.trim()) {
      alert("Title and slug are required.");
      return;
    }

    setSaving(true);

    try {
      const supabase = createClient();

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from("posts")
          .update({
            title: formData.title,
            slug: formData.slug,
            header_image_url: formData.header_image_url || null,
            body: formData.body,
            published: formData.published,
          })
          .eq("id", post.id);

        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase.from("posts").insert({
          title: formData.title,
          slug: formData.slug,
          header_image_url: formData.header_image_url || null,
          body: formData.body,
          published: formData.published,
        });

        if (error) throw error;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save post. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-dark"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter post title"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Slug */}
      <div>
        <label
          htmlFor="slug"
          className="mb-2 block text-sm font-medium text-dark"
        >
          Slug
        </label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-body-color">/blog/</span>
          <input
            id="slug"
            name="slug"
            type="text"
            value={formData.slug}
            onChange={handleChange}
            placeholder="post-url-slug"
            required
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 font-mono text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        {autoSlug && (
          <p className="mt-1 text-xs text-body-color">
            Auto-generated from title
          </p>
        )}
      </div>

      {/* Header Image Upload */}
      <ImageUpload
        value={formData.header_image_url}
        onChange={(url) =>
          setFormData((prev) => ({ ...prev, header_image_url: url }))
        }
      />

      {/* Body Editor */}
      <div>
        <label
          htmlFor="body"
          className="mb-2 block text-sm font-medium text-dark"
        >
          Body{" "}
          <span className="font-normal text-body-color">(Markdown supported)</span>
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Write your blog post content here... (Markdown is supported)"
          rows={18}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-mono text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Published Toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={formData.published}
          onClick={() =>
            setFormData((prev) => ({ ...prev, published: !prev.published }))
          }
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
            formData.published ? "bg-primary" : "bg-gray-300"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
              formData.published ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <label className="text-sm font-medium text-dark">
          {formData.published ? "Published" : "Draft"}
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-btn transition-all duration-200 hover:bg-primary-700 hover:shadow-btn-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {post ? "Update Post" : "Create Post"}
        </button>

        {formData.slug && (
          <a
            href={`/blog/${formData.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-dark transition-colors hover:bg-gray-50"
          >
            <Eye className="h-4 w-4" />
            Preview
          </a>
        )}
      </div>
    </form>
  );
}
