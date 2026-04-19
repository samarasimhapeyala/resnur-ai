import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  onAuthOpen: (mode: "login" | "signup") => void;
}

const Navbar = ({ onAuthOpen }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 group/logo">
          <Zap className="h-7 w-7 text-primary icon-brand-pulse" />
          <span className="font-display text-xl font-bold gradient-text transition-opacity group-hover/logo:opacity-90">
            resnur. AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link-animated text-sm text-muted-foreground hover:text-primary transition-colors">
            Platform
          </a>
          <a href="#community" className="nav-link-animated text-sm text-muted-foreground hover:text-primary transition-colors">
            Community
          </a>
          <a href="#newsletter" className="nav-link-animated text-sm text-muted-foreground hover:text-primary transition-colors">
            Newsletter
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost-glow" size="sm" onClick={() => onAuthOpen("login")}>Log In</Button>
          <Button variant="glow" size="sm" onClick={() => onAuthOpen("signup")}>Get Started</Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-2 rounded-lg transition-colors hover:bg-primary/10 motion-safe:transition-transform motion-safe:active:scale-95"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border p-4 space-y-3">
          <a
            href="#features"
            className="nav-link-animated block text-sm text-muted-foreground hover:text-primary py-2 pl-1"
            onClick={() => setMobileOpen(false)}
          >
            Platform
          </a>
          <a
            href="#community"
            className="nav-link-animated block text-sm text-muted-foreground hover:text-primary py-2 pl-1"
            onClick={() => setMobileOpen(false)}
          >
            Community
          </a>
          <a
            href="#newsletter"
            className="nav-link-animated block text-sm text-muted-foreground hover:text-primary py-2 pl-1"
            onClick={() => setMobileOpen(false)}
          >
            Newsletter
          </a>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost-glow" size="sm" className="flex-1" onClick={() => { onAuthOpen("login"); setMobileOpen(false); }}>Log In</Button>
            <Button variant="glow" size="sm" className="flex-1" onClick={() => { onAuthOpen("signup"); setMobileOpen(false); }}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
