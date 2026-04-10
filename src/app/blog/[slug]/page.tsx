import type { Metadata } from "next";
import BlogPostDetail from "./BlogPostDetail";

export const metadata: Metadata = {
  title: "Article | Blog - Les Amis de Doudou Fwamba",
};

export default function BlogPostPage() {
  return <BlogPostDetail />;
}
