import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tabs-list-glow inline-flex h-11 items-center justify-center rounded-xl bg-muted/70 p-1 text-muted-foreground shadow-[inset_0_1px_0_hsl(var(--border)/0.35)] backdrop-blur-sm border border-border/40",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative z-10 inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ring-offset-background transition-all duration-300 ease-out",
      "hover:text-foreground/95 motion-safe:hover:bg-background/35 motion-safe:hover:-translate-y-px",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.35),0_0_0_1px_hsl(var(--primary)/0.12)]",
      "data-[state=active]:motion-safe:scale-[1.02]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "before:pointer-events-none before:absolute before:inset-x-3 before:-bottom-0.5 before:h-0.5 before:rounded-full before:bg-gradient-to-r before:from-sky-400 before:via-cyan-400 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 data-[state=active]:before:opacity-100",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-[state=active]:motion-safe:animate-in data-[state=active]:motion-safe:fade-in-0 data-[state=active]:motion-safe:zoom-in-95 data-[state=active]:motion-safe:duration-300",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
