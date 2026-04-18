import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme !== "light";

  return (
    <Button
      type="button"
      variant="ghost-glow"
      size="icon"
      className="group/theme h-9 w-9 overflow-hidden"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4 motion-safe:transition-all motion-safe:duration-500 motion-safe:group-hover/theme:rotate-45 motion-safe:group-hover/theme:scale-110 motion-safe:group-hover/theme:text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 motion-safe:transition-all motion-safe:duration-500 motion-safe:group-hover/theme:-rotate-12 motion-safe:group-hover/theme:scale-110 motion-safe:group-hover/theme:text-sky-400" />
      )}
    </Button>
  );
};

export default ThemeToggle;
