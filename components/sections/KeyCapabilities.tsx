"use client";

import { motion } from "framer-motion";
import { Activity, Eye, MessageSquare, ShieldAlert, Workflow } from "lucide-react";

const capabilities = [
    {
        title: "Behavioral Analytics",
        description:
            "Track dead clicks, rage clicks, navigation loops, and idle time to understand exactly where users struggle.",
        icon: Activity,
        accent: "from-violet-500 to-purple-600",
    },
    {
        title: "Session Correlation",
        description:
            "Correlate behavioral signals with product events to understand the full context of user frustration.",
        icon: Eye,
        accent: "from-cyan-500 to-blue-500",
    },
    {
        title: "Contextual Help Delivery",
        description:
            "Deliver tooltips, video guides, and documentation at the exact moment a user needs assistance.",
        icon: MessageSquare,
        accent: "from-emerald-500 to-green-600",
    },
    {
        title: "Churn Risk Scoring",
        description:
            "Dynamic health scores updated in real time based on behavioral friction, feature adoption, and engagement.",
        icon: ShieldAlert,
        accent: "from-orange-500 to-red-500",
    },
    {
        title: "Automated CS Workflows",
        description:
            "Trigger re-engagement emails, success calls, Slack alerts, or escalation tasks when health scores drop.",
        icon: Workflow,
        accent: "from-pink-500 to-rose-600",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function KeyCapabilities() {
    return (
        <section id="capabilities" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-vigil-purple-light mb-4">
                        Everything Your CS Team Needs. Automated.
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Key{" "}
                        <span className="text-vigil-purple-light">Capabilities</span>
                    </h2>
                </motion.div>

                {/* Capabilities grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                variants={cardVariants}
                                className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-vigil-purple/30 hover:bg-card-hover overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-vigil-purple/8 rounded-full blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    <div
                                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br ${cap.accent} mb-4`}
                                    >
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {cap.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
