import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vigil-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        const variants = {
            default:
                "bg-gradient-to-r from-vigil-purple to-vigil-purple-dark text-white shadow-lg shadow-vigil-purple/25 hover:shadow-vigil-purple/40 hover:brightness-110 active:scale-[0.98]",
            secondary:
                "bg-card text-foreground border border-border hover:bg-card-hover hover:border-vigil-purple/50 active:scale-[0.98]",
            outline:
                "border border-border text-foreground hover:bg-card hover:border-vigil-purple/50",
            ghost: "text-muted hover:text-foreground hover:bg-card",
        };

        const sizes = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-5 text-sm",
            lg: "h-12 px-8 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
