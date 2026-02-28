"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Why Vigil", href: "/#why-vigil" },
    { label: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 glass"
                animate={{
                    paddingTop: scrolled ? "0.5rem" : "1rem",
                    paddingBottom: scrolled ? "0.5rem" : "1rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/">
                        <BrandLogo size={scrolled ? "sm" : "md"} />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/#book-demo">
                            <Button size="sm">Book Demo</Button>
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border"
                    >
                        <div className="px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted hover:text-foreground transition-colors py-2"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/#book-demo" onClick={() => setMobileOpen(false)}>
                                <Button size="sm" className="w-full">
                                    Book Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}
