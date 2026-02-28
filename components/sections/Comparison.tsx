"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const comparisonRows = [
    {
        feature: "Detection Method",
        vigil: "Real-time behavioral AI",
        legacy: "Manual ticket reviews",
        vigilCheck: true,
        legacyCheck: false,
    },
    {
        feature: "Response Time",
        vigil: "< 500ms (instant)",
        legacy: "Hours to Days",
        vigilCheck: true,
        legacyCheck: false,
    },
    {
        feature: "Personalization",
        vigil: "Contextual, per-user",
        legacy: "Generic mass emails",
        vigilCheck: true,
        legacyCheck: false,
    },
    {
        feature: "Scalability",
        vigil: "Unlimited, autonomous",
        legacy: "Limited by headcount",
        vigilCheck: true,
        legacyCheck: false,
    },
    {
        feature: "Proactive Outreach",
        vigil: "Yes — before churn",
        legacy: "Only after complaints",
        vigilCheck: true,
        legacyCheck: false,
    },
    {
        feature: "Setup",
        vigil: "One-line SDK",
        legacy: "Weeks of integration",
        vigilCheck: true,
        legacyCheck: "partial" as const,
    },
];

export default function Comparison() {
    return (
        <section id="comparison" className="py-24 sm:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Why Teams{" "}
                        <span className="text-vigil-purple-light">Switch to Vigil</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        See how a proactive, AI-driven approach compares to traditional
                        customer success tools.
                    </p>
                </motion.div>

                {/* Comparison table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-border overflow-hidden"
                >
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-card">
                        <div className="p-4 sm:p-6 text-sm font-medium text-muted">
                            Feature
                        </div>
                        <div className="p-4 sm:p-6 text-sm font-semibold text-vigil-purple-light text-center border-x border-border bg-vigil-purple/5">
                            Vigil.AI
                            <span className="block text-[10px] text-muted font-normal mt-0.5">
                                Proactive · AI-Driven
                            </span>
                        </div>
                        <div className="p-4 sm:p-6 text-sm font-medium text-muted text-center">
                            Legacy Tools
                            <span className="block text-[10px] text-muted/60 font-normal mt-0.5">
                                Reactive · Manual
                            </span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisonRows.map((row, i) => (
                        <motion.div
                            key={row.feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 border-t border-border hover:bg-card/50 transition-colors"
                        >
                            <div className="p-4 sm:p-5 text-sm text-foreground font-medium flex items-center">
                                {row.feature}
                            </div>
                            <div className="p-4 sm:p-5 text-sm text-center border-x border-border bg-vigil-purple/5 flex items-center justify-center gap-2">
                                <Check size={16} className="text-success shrink-0" />
                                <span className="text-foreground hidden sm:inline text-xs">
                                    {row.vigil}
                                </span>
                            </div>
                            <div className="p-4 sm:p-5 text-sm text-center flex items-center justify-center gap-2">
                                {row.legacyCheck === "partial" ? (
                                    <Minus size={16} className="text-yellow-500 shrink-0" />
                                ) : (
                                    <X size={16} className="text-danger/60 shrink-0" />
                                )}
                                <span className="text-muted hidden sm:inline text-xs">
                                    {row.legacy}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
