export interface Post {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  header_image_url: string | null;
  body: string;
  published: boolean;
}

export interface PostFormData {
  title: string;
  slug: string;
  header_image_url: string;
  body: string;
  published: boolean;
}
