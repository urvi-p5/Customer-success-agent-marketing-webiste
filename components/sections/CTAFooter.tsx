"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTAFooter() {
    return (
        <section id="book-demo" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-vigil-purple via-vigil-purple-dark to-purple-950 animate-gradient" />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    />

                    <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-6"
                        >
                            <Sparkles size={14} />
                            Early access — Limited spots
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
                        >
                            Ready to Save Your
                            <br />
                            At-Risk Customers?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed"
                        >
                            Join the SaaS teams using Vigil.AI to reduce churn by up to 40%.
                            Set up in minutes, not weeks.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="w-full sm:flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                            />
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white text-vigil-purple-dark hover:bg-white/90 shadow-lg shadow-black/20 font-semibold group"
                            >
                                Get Early Access
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-white/40 text-xs mt-4"
                        >
                            No credit card required · 14-day free trial · Cancel anytime
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
