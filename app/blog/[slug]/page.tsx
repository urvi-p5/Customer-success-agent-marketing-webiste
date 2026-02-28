"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/sections/Footer";
import { blogPosts } from "@/lib/data/blogData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import React from "react";

export default function BlogPostDetail() {
    const params = useParams();
    const slug = params.slug;
    
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="pt-40 text-center">
                <h1 className="text-4xl font-bold">Post not found</h1>
                <a href="/blog" className="text-vigil-purple-light underline mt-4 inline-block">Back to Blog</a>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            <Navbar />
            
            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-vigil-purple/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-10"
                    >
                        <Link 
                            href="/blog" 
                            className="flex items-center gap-2 text-xs font-bold text-muted hover:text-foreground transition-colors group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            BACK TO INSIGHTS
                        </Link>
                    </motion.div>

                    <motion.header 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 text-xs text-muted mb-6 uppercase tracking-[0.2em] font-bold">
                            <span className="text-vigil-purple-light">Industry Trends</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-8">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 py-6 border-y border-white/5">
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-vigil-purple/40 to-vigil-purple-light/20 flex items-center justify-center font-bold text-sm">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs text-muted font-bold uppercase tracking-wider">Author</p>
                                <p className="text-sm font-semibold">{post.author}</p>
                            </div>
                        </div>
                    </motion.header>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-purple max-w-none text-muted-foreground/90 lg:text-xl leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 pt-12 flex flex-col sm:flex-row items-center justify-between gap-8 bg-card/30 p-8 rounded-3xl border border-border/40"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2">Want to see SuccessAgent in action?</h3>
                            <p className="text-sm text-muted">Join the companies using AI to provide 24/7 proactive guidance.</p>
                        </div>
                        <Link 
                            href="/#book-demo"
                            className="px-8 py-3 rounded-full bg-vigil-purple text-white font-bold text-sm hover:bg-vigil-purple-light transition-all shadow-lg shadow-vigil-purple/20 text-center"
                        >
                            Book a Demo
                        </Link>
                    </motion.div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
