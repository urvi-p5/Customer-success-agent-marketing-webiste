"use client";

import { motion } from "framer-motion";
import { Activity, ShieldAlert, Zap, TrendingUp, Eye, Workflow, Play } from "lucide-react";

const features = [
    {
        title: "Real-Time Behavioral Analysis",
        description:
            "Track mapping signals like dead clicks, rage clicks, and navigation loops to paint a clear picture of user health.",
        icon: Activity,
        accent: "from-violet-500 to-purple-600",
        visual: (
            <div className="mt-4 flex items-end gap-1 h-20">
                {[40, 65, 35, 80, 55, 90, 70, 50, 85, 60, 95, 45].map((h, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-t bg-linear-to-t from-vigil-purple/60 to-vigil-purple-light/40"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>
        ),
        extraIcons: [Eye, TrendingUp],
        span: "md:col-span-2",
    },
    {
        title: "Session Correlation",
        description:
            "Correlate behavioral signals with product analytics to understand WHY a user is struggling.",
        icon: Eye,
        accent: "from-cyan-500 to-blue-500",
        visual: (
            <div className="mt-4 flex items-center justify-center">
                <div className="w-full max-w-30 aspect-video rounded-lg border border-white/10 bg-black/40 relative overflow-hidden flex items-center justify-center">
                    <Play size={24} className="text-white/40" />
                </div>
            </div>
        ),
        span: "md:col-span-1",
    },
    {
        title: "Churn Risk Scoring",
        description:
            "Dynamic health scores based on Behavioral Friction (30%), Feature Adoption (20%), and Engagement.",
        icon: ShieldAlert,
        accent: "from-orange-500 to-red-500",
        visual: (
            <div className="mt-4 relative flex items-center justify-center">
                <svg viewBox="0 0 120 70" className="w-full max-w-45">
                    <path
                        d="M10 60 A50 50 0 0 1 110 60"
                        fill="none"
                        stroke="rgba(39,39,42,0.5)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <motion.path
                        d="M10 60 A50 50 0 0 1 110 60"
                        fill="none"
                        stroke="url(#gauge-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 0.72 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                    <defs>
                        <linearGradient id="gauge-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#22C55E" />
                            <stop offset="50%" stopColor="#EAB308" />
                            <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute bottom-0 text-center">
                    <motion.span
                        className="text-2xl font-bold text-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        viewport={{ once: true }}
                    >
                        72
                    </motion.span>
                    <p className="text-[10px] text-muted uppercase tracking-wider">Health Score</p>
                </div>
            </div>
        ),
        span: "md:col-span-1",
    },
    {
        title: "Automated CS Workflow Triggers",
        description:
            "Trigger re-engagement emails, success calls, or escalation alerts based on declining health scores.",
        icon: Zap,
        accent: "from-cyan-500 to-blue-500",
        visual: (
            <div className="mt-4 space-y-2">
                {[
                    { label: "Health Drop", color: "bg-danger/20 text-danger", delay: 0 },
                    { label: "→ Call Task", color: "bg-vigil-purple/20 text-vigil-purple-light", delay: 0.3 },
                    { label: "→ Slack Alert", color: "bg-success/20 text-success", delay: 0.6 },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono ${step.color}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: step.delay }}
                        viewport={{ once: true }}
                    >
                        <Workflow size={12} />
                        {step.label}
                    </motion.div>
                ))}
            </div>
        ),
        extraIcons: [Workflow],
        span: "md:col-span-2",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function BentoGrid() {
    return (
        <section id="features" className="py-24 sm:py-32">
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
                        Intelligent Features,{" "}
                        <span className="text-vigil-purple-light">Real Impact</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Built to detect, score, and act on user behavior — automatically.
                    </p>
                </motion.div>

                {/* Bento grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={cardVariants}
                                className={`group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-vigil-purple/30 hover:bg-card-hover overflow-hidden ${feature.span}`}
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-vigil-purple/10 rounded-full blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br ${feature.accent} mb-4`}
                                    >
                                        <Icon size={20} className="text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {feature.visual}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
