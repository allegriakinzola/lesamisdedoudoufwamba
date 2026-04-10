import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog | Les Amis de Doudou Fwamba",
  description:
    "Lisez nos articles sur le développement communautaire, les réformes et les actions de l'ASBL Les Amis de Doudou Fwamba.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Notre Blog"
        subtitle="Articles, analyses et réflexions sur nos actions et le développement de notre communauté."
        accent="Publications"
      />
      <BlogList />
    </>
  );
}
