import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-border bg-transparent hover:bg-foreground hover:text-background",
    ghost: "bg-transparent text-foreground hover:bg-accent",
    link: "bg-transparent text-primary underline-offset-4 hover:underline",
};

const sizeStyles = {
    sm: "h-9 px-3 text-xs tracking-wider",
    md: "h-11 px-6 text-sm tracking-widest",
    lg: "h-14 px-8 text-base tracking-[0.2em]",
    icon: "h-11 w-11 flex items-center justify-center rounded-none",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center uppercase font-sans font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 rounded-none",
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
