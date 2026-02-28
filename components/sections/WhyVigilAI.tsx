"use client";

import { motion } from "framer-motion";
import { Brain, Crosshair, Layers } from "lucide-react";

const differentiators = [
    {
        icon: Brain,
        title: "Autonomous, not rule-based",
        description: "AI decides what to show and when — no manual playbook configuration required.",
    },
    {
        icon: Crosshair,
        title: "Session-level precision",
        description: "Acts on micro-behaviors in real time, not just account-level signals from a CRM.",
    },
    {
        icon: Layers,
        title: "One pipeline, not three tools",
        description: "Detection, intervention, and escalation unified in a single intelligent agent.",
    },
];

export default function WhyVigilAI() {
    return (
        <section id="why-vigil" className="py-24 sm:py-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vigil-purple/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-vigil-purple-light mb-4">
                            Beyond Rule-Based Playbooks
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                            Why{" "}
                            <span className="text-vigil-purple-light">Vigil.AI</span>
                        </h2>
                        <p className="text-muted leading-relaxed max-w-lg">
                            Traditional customer success tools rely on static rules and manual
                            playbooks. Vigil.AI uses autonomous behavioral intelligence to
                            detect, intervene, and escalate — all in real time, all without
                            human configuration. It&apos;s the difference between a fire alarm and
                            a firefighter who&apos;s already there.
                        </p>
                    </motion.div>

                    {/* Right side — differentiators */}
                    <div className="space-y-6">
                        {differentiators.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-vigil-purple/30 hover:bg-card-hover"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-vigil-purple/15 flex items-center justify-center">
                                        <Icon size={20} className="text-vigil-purple-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
