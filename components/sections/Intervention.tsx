"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MousePointerClick, MessageCircle, ArrowRight } from "lucide-react";

export default function Intervention() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [phase, setPhase] = useState<"idle" | "click" | "tooltip">("idle");

    useEffect(() => {
        if (isInView) {
            const t1 = setTimeout(() => setPhase("click"), 600);
            const t2 = setTimeout(() => setPhase("tooltip"), 2200);
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
            };
        }
    }, [isInView]);

    return (
        <section id="intervention" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        See It in{" "}
                        <span className="text-vigil-purple-light">Action</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        When a user hits a dead end, Vigil.AI steps in with contextual help
                        — in milliseconds.
                    </p>
                </motion.div>

                {/* Demo area */}
                <div ref={sectionRef} className="max-w-3xl mx-auto">
                    <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
                        {/* Mock app UI */}
                        <div className="border-b border-border px-4 py-2 flex items-center gap-3 bg-background/50">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-danger/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
                            </div>
                            <span className="text-xs text-muted">yourapp.com/settings/export</span>
                        </div>

                        <div className="p-8 sm:p-12 min-h-80 sm:min-h-100 relative">
                            {/* Mock settings page */}
                            <div className="mb-8">
                                <div className="h-3 w-32 bg-muted/20 rounded mb-4" />
                                <div className="space-y-3">
                                    <div className="h-10 rounded-lg bg-background/50 border border-border" />
                                    <div className="h-10 rounded-lg bg-background/50 border border-border" />
                                </div>
                            </div>

                            {/* The "dead" button */}
                            <div className="relative inline-block">
                                <motion.div
                                    className="px-5 py-2.5 rounded-lg bg-card border border-border text-sm text-muted flex items-center gap-2 cursor-not-allowed relative"
                                    animate={
                                        phase === "click"
                                            ? { x: [0, -2, 2, -2, 0] }
                                            : {}
                                    }
                                    transition={{ duration: 0.3, repeat: phase === "click" ? 2 : 0 }}
                                >
                                    Export Data
                                    <ArrowRight size={14} />

                                    {/* Dead click ripple */}
                                    {phase === "click" && (
                                        <>
                                            <motion.span
                                                className="absolute inset-0 rounded-lg border-2 border-danger/60"
                                                initial={{ opacity: 1, scale: 1 }}
                                                animate={{ opacity: 0, scale: 1.3 }}
                                                transition={{ duration: 0.8, repeat: 2 }}
                                            />
                                            <motion.div
                                                className="absolute -top-2 -right-2"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <MousePointerClick size={18} className="text-danger" />
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>

                                {/* Dead click label */}
                                {phase === "click" && (
                                    <motion.div
                                        className="absolute -bottom-8 left-0 flex items-center gap-1.5 text-xs text-danger font-medium"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-danger" />
                                        </span>
                                        Dead click detected (3x in 5s)
                                    </motion.div>
                                )}
                            </div>

                            {/* Vigil.AI tooltip intervention */}
                            {phase === "tooltip" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-72 bg-linear-to-br from-vigil-purple to-vigil-purple-dark rounded-xl p-5 shadow-2xl shadow-vigil-purple/30"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                            <MessageCircle size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white mb-1.5">
                                                Need help exporting?
                                            </p>
                                            <p className="text-xs text-white/75 leading-relaxed mb-3">
                                                It looks like you&apos;re trying to export data. You need to
                                                select a date range first. Let me walk you through it.
                                            </p>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 rounded-md bg-white text-vigil-purple-dark text-xs font-medium hover:bg-white/90 transition-colors">
                                                    Start Guide
                                                </button>
                                                <button className="px-3 py-1.5 rounded-md bg-white/10 text-white text-xs hover:bg-white/20 transition-colors">
                                                    Dismiss
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow pointer */}
                                    <div className="absolute -left-2 top-6 w-4 h-4 bg-vigil-purple rotate-45" />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center justify-center gap-8 mt-8">
                        <div
                            className={`flex items-center gap-2 text-sm transition-colors duration-300 ${phase === "click" || phase === "tooltip"
                                    ? "text-danger"
                                    : "text-muted"
                                }`}
                        >
                            <MousePointerClick size={16} />
                            <span>1. Dead Click</span>
                        </div>
                        <div className="w-8 h-px bg-border" />
                        <div
                            className={`flex items-center gap-2 text-sm transition-colors duration-300 ${phase === "tooltip"
                                    ? "text-vigil-purple-light"
                                    : "text-muted"
                                }`}
                        >
                            <MessageCircle size={16} />
                            <span>2. AI Intervenes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
