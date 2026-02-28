"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/sections/Footer";
import { blogPosts } from "@/lib/data/blogData";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-vigil-purple-light">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            Insights, strategies, and industry deep-dives to help you build
            proactive customer success in the AI era.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-vigil-purple/40 transition-all group flex flex-col"
            >
              <div className="p-8 flex-1 text-card-foreground">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground/60 mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 font-bold px-2 py-0.5 rounded-full bg-vigil-purple/20 text-vigil-purple-light text-[9px]">
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-vigil-purple-light transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground/80 leading-relaxed mb-6 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8 pt-0 mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center text-xs font-bold text-foreground border-b border-white/10 w-fit pb-1 group-hover:border-vigil-purple-light/40 transition-all hover:gap-2 gap-1.5"
                >
                  Read Article{" "}
                  <ArrowRight size={14} className="text-vigil-purple-light" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
