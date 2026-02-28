"use client";

import { motion } from "framer-motion";
import { Eye, BarChart3, MessageCircle, BellRing } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Watch",
        description:
            "Our SDK silently monitors every session — tracking clicks, scrolls, navigation patterns, and idle time in real time.",
        icon: Eye,
    },
    {
        number: "02",
        title: "Score",
        description:
            "Behavioral signals are scored into a dynamic health index. Friction events like rage clicks and dead clicks lower the score instantly.",
        icon: BarChart3,
    },
    {
        number: "03",
        title: "Intervene",
        description:
            "When a user struggles, Vigil.AI delivers contextual help — tooltips, video guides, or documentation — exactly when they need it.",
        icon: MessageCircle,
    },
    {
        number: "04",
        title: "Escalate",
        description:
            "If in-app help isn't enough, automated emails, Slack alerts, and CS task creation kick in so your team can step in fast.",
        icon: BellRing,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-vigil-purple-light mb-4">
                        Proactive Intelligence, Delivered at the Right Moment
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        How{" "}
                        <span className="text-vigil-purple-light">Vigil.AI</span>{" "}
                        Works
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border" />

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="relative text-center"
                            >
                                {/* Step number circle */}
                                <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-vigil-purple/15 border border-vigil-purple/30 flex items-center justify-center mb-6">
                                    <Icon size={20} className="text-vigil-purple-light" />
                                </div>

                                {/* Step number */}
                                <p className="text-xs font-mono text-vigil-purple-light mb-2">
                                    {step.number}
                                </p>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted leading-relaxed max-w-[28ch] mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
