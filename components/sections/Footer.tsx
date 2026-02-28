"use client";

import BrandLogo from "@/components/shared/BrandLogo";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Capabilities", href: "#capabilities" },
    ],
    Company: [
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#book-demo" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12">
                    {/* Brand column */}
                    <div className="col-span-2">
                        <BrandLogo size="md" className="mb-4" />
                        <p className="text-sm text-muted max-w-xs leading-relaxed mb-6">
                            Vigil.AI detects user struggle patterns and intervenes
                            proactively — so your customers never churn silently.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-vigil-purple/40 transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                        © 2026 Vigil.AI. All rights reserved.
                    </p>
                    <p className="text-xs text-muted/60">
                        Built with care for customer success teams everywhere.
                    </p>
                </div>
            </div>
        </footer>
    );
}
