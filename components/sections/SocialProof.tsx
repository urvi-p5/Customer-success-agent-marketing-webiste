"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const logos = [
    "Acme Corp",
    "Nebula",
    "Stratos",
    "Vantage",
    "Luminary",
    "Apex",
];

export default function SocialProof() {
    return (
        <section id="social-proof" className="py-24 sm:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xs font-semibold tracking-[0.2em] uppercase text-vigil-purple-light mb-4"
                >
                    Built for CS Teams Who Can&apos;t Afford to Wait
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight mb-16"
                >
                    Trusted by{" "}
                    <span className="text-vigil-purple-light">Forward-Thinking</span>{" "}
                    Teams
                </motion.h2>

                {/* Logo row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16"
                >
                    {logos.map((name) => (
                        <div
                            key={name}
                            className="w-24 h-10 rounded-lg bg-card border border-border flex items-center justify-center"
                        >
                            <span className="text-xs font-medium text-muted/50 tracking-wide">
                                {name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Blockquote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative rounded-2xl border border-border bg-card p-8 sm:p-10 text-left">
                        {/* Purple left border accent */}
                        <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-linear-to-b from-vigil-purple to-vigil-purple-light" />

                        <Quote size={24} className="text-vigil-purple/40 mb-4" />

                        <p className="text-foreground italic leading-relaxed mb-6">
                            &ldquo;We used to lose users silently. Vigil.AI showed us exactly
                            where the friction was and intervened before we even knew there
                            was a problem. Our churn dropped 35% in the first quarter.&rdquo;
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-vigil-purple/20 flex items-center justify-center text-sm font-semibold text-vigil-purple-light">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Jane Doe</p>
                                <p className="text-xs text-muted">
                                    VP of Customer Success, Acme Corp
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
