"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "67%",
        description: "of churn happens before a support ticket is ever created",
    },
    {
        value: "3×",
        description: "more likely to cancel if users struggle in first 7 days",
    },
    {
        value: "2–3 weeks",
        description: "too late is when the average CS team responds",
    },
];

export default function ProblemStatement() {
    return (
        <section id="problem" className="py-24 sm:py-32 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xs font-semibold tracking-[0.2em] uppercase text-vigil-purple-light mb-4"
                >
                    The Hidden Cost of Reactive Support
                </motion.p>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                >
                    Your Users Are Struggling{" "}
                    <span className="text-vigil-purple-light">in Silence</span>
                </motion.h2>

                {/* Body copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-muted max-w-[60ch] mx-auto mb-16 leading-relaxed"
                >
                    Most customer success teams only find out about user frustration after
                    the damage is done. By the time a ticket is filed or a churn signal
                    appears, the opportunity to intervene has already passed.
                </motion.p>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.value}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-vigil-purple/40 overflow-hidden"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-vigil-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Glass frost effect */}
                            <div className="absolute inset-0 bg-linear-to-b from-vigil-purple/[0.03] to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-vigil-purple to-vigil-purple-light bg-clip-text text-transparent mb-3">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
