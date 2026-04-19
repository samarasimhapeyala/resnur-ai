import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost-glow"
      size="icon"
      className="group/theme relative h-9 w-9 shrink-0 overflow-hidden"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Both icons in the same box to avoid layout shift on hydration / toggle */}
      <Sun
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover/theme:rotate-45 motion-safe:group-hover/theme:scale-110 motion-safe:group-hover/theme:text-amber-400",
          mounted && isDark ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover/theme:-rotate-12 motion-safe:group-hover/theme:scale-110 motion-safe:group-hover/theme:text-sky-400",
          !mounted || !isDark ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
    </Button>
  );
};

export default ThemeToggle;
