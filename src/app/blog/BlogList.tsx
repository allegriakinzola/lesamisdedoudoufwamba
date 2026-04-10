"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, FileText } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  author: string;
  createdAt: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl h-80 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText size={48} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Aucun article pour le moment
          </h2>
          <p className="text-gray-500 mb-6">
            Nos articles seront bientôt disponibles. Revenez nous voir !
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-rdc-blue font-semibold hover:underline"
          >
            Retour à l&apos;accueil <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Cover image */}
              <div className="aspect-video bg-gradient-to-br from-rdc-blue/10 via-rdc-yellow/5 to-rdc-red/10 relative overflow-hidden">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rdc-blue via-rdc-yellow to-rdc-red flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <span className="text-white font-bold text-xl">ADF</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug line-clamp-2 group-hover:text-rdc-blue transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-rdc-blue hover:text-rdc-blue-dark transition-colors"
                >
                  Lire la suite <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
