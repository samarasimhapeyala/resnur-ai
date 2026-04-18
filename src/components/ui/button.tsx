import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.55)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 motion-safe:hover:-translate-y-px",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground motion-safe:hover:-translate-y-px motion-safe:hover:border-primary/25",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 motion-safe:hover:-translate-y-px",
        ghost: "hover:bg-accent hover:text-accent-foreground motion-safe:hover:-translate-y-px",
        link: "text-primary underline-offset-4 hover:underline motion-safe:hover:translate-y-0 motion-safe:active:scale-100",
        glow:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(217_91%_60%/0.28)] hover:shadow-[0_0_32px_hsl(217_91%_60%/0.5)] motion-safe:hover:-translate-y-1",
        "ghost-glow":
          "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.25)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
