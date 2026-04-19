import { Zap, LinkedinIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const SOCIAL = [
  { href: "https://www.linkedin.com/company/resnur-ai", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/resnur.ai", label: "Instagram", Icon: InstagramIcon },
  { href: "https://twitter.com/resnur_ai", label: "Twitter", Icon: TwitterIcon },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-5">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6">
          {/* Left — icon + name */}
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Zap className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span className="font-display text-sm font-bold gradient-text">resnur. AI</span>
          </div>

          {/* Center — tagline, then copyright below */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="text-xs text-muted-foreground">Reasoning, Ease, Neural.</p>
            <p className="text-[11px] leading-snug text-muted-foreground">
              © {year}{" "}
              <a
                href="https://resnur.com"
                className="text-foreground/90 transition-colors link-animated hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                resnur.com
              </a>
              <span>. All rights reserved.</span>
            </p>
          </div>

          {/* Right — theme + social */}
          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:justify-end">
            <div className="flex items-center gap-1.5">
              <span className="sr-only">Color theme</span>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow resnur on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
