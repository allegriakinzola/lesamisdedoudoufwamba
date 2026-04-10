"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        if (data.id && data.published) {
          setPost(data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-rdc-blue/30 border-t-rdc-blue rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">404</h1>
          <p className="text-gray-500 mb-6">Article non trouvé.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-rdc-blue font-semibold hover:underline"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rdc-blue via-rdc-blue-dark to-[#003d6b] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rdc-yellow/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-rdc-red/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              {post.updatedAt !== post.createdAt && (
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  Mis à jour le{" "}
                  {new Date(post.updatedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
          >
            {/* Rendered rich HTML content */}
            <div
              className="blog-content prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3 prose-h2:text-rdc-blue-dark
                prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                prose-li:text-gray-700 prose-li:mb-1
                prose-blockquote:border-l-4 prose-blockquote:border-rdc-blue prose-blockquote:bg-rdc-blue-light/50 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-strong:text-gray-900
                prose-hr:border-gray-200 prose-hr:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rdc-blue text-white font-semibold rounded-full hover:bg-rdc-blue-dark transition-colors shadow-md"
            >
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
