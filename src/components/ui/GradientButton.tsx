"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GradientButton = ({ className, children, ...props }: ButtonProps) => {
    return (
        <Button
            className={cn(
                "relative px-6 py-3 font-semibold rounded-sm transition-all",
                "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white",
                "shadow-lg shadow-green-500/30 hover:shadow-green-600/50",
                "hover:scale-105 active:scale-100 cursor-pointer",
                "focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                className
            )}
            {...props}
        >
            {children}
        </Button>
    );
};

export default GradientButton;
