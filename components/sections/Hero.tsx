"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Pre-computed star positions for deterministic rendering
const STARS = [
    { top: 12, left: 5, opacity: 0.3, size: 1.5 },
    { top: 8, left: 23, opacity: 0.2, size: 2 },
    { top: 25, left: 67, opacity: 0.4, size: 1 },
    { top: 3, left: 45, opacity: 0.15, size: 2.5 },
    { top: 18, left: 82, opacity: 0.35, size: 1.2 },
    { top: 35, left: 12, opacity: 0.25, size: 1.8 },
    { top: 42, left: 91, opacity: 0.3, size: 1 },
    { top: 55, left: 38, opacity: 0.2, size: 2.2 },
    { top: 6, left: 73, opacity: 0.4, size: 1.3 },
    { top: 68, left: 55, opacity: 0.15, size: 1.7 },
    { top: 78, left: 8, opacity: 0.3, size: 2 },
    { top: 85, left: 42, opacity: 0.25, size: 1.5 },
    { top: 92, left: 78, opacity: 0.35, size: 1 },
    { top: 15, left: 95, opacity: 0.2, size: 2.3 },
    { top: 48, left: 18, opacity: 0.4, size: 1.1 },
    { top: 62, left: 85, opacity: 0.3, size: 1.6 },
    { top: 30, left: 50, opacity: 0.15, size: 2 },
    { top: 73, left: 30, opacity: 0.25, size: 1.4 },
    { top: 95, left: 60, opacity: 0.35, size: 1.8 },
    { top: 22, left: 15, opacity: 0.2, size: 2.1 },
];

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-vigil-purple/10 rounded-full blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="absolute inset-0">
                    {STARS.map((star, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: `${star.top}%`,
                                left: `${star.left}%`,
                                opacity: star.opacity,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vigil-purple/30 bg-vigil-purple/10 text-vigil-purple-light text-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vigil-purple opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-vigil-purple" />
                    </span>
                    Proactive Customer Intelligence
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
                >
                    Always Watching.{" "}
                    <br className="hidden sm:block" />
                    <span className="bg-linear-to-r from-vigil-purple to-vigil-purple-light bg-clip-text text-transparent">
                        Always Helping.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    VigilAI monitors every user session in real time, detecting dead clicks,
                    rage clicks, and abandoned flows before they turn into churn. It delivers
                    instant contextual help and triggers automated alerts when your team needs to step in.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#book-demo">
                        <Button size="lg" className="group">
                            Book a Demo
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Button>
                    </a>
                    <a href="#features">
                        <Button variant="secondary" size="lg" className="group">
                            Explore Features
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 text-vigil-purple-light"
                            />
                        </Button>
                    </a>
                </motion.div>

                {/* Hero visual — Dashboard screenshot */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 sm:mt-20 max-w-5xl mx-auto relative"
                >
                    <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-vigil-purple/10">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-danger/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-success/60" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="h-6 bg-card rounded-md flex items-center px-3 text-[10px] text-muted/60">
                                    app.vigilai.io/dashboard
                                </div>
                            </div>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/dashboard.png"
                            alt="Vigil.AI Dashboard — Real-time customer health overview"
                            className="w-full h-auto block"
                        />
                    </div>
                    {/* Glow effect beneath */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-vigil-purple/20 blur-[60px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
