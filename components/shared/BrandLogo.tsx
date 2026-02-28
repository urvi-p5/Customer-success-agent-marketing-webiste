"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className, size = "md" }: BrandLogoProps) {
    const sizes = {
        sm: "h-6",
        md: "h-8",
        lg: "h-10",
    };

    return (
        <div className={cn("flex items-center", className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/logo.png"
                alt="Vigil.AI"
                className={cn("w-auto", sizes[size])}
            />
        </div>
    );
}
