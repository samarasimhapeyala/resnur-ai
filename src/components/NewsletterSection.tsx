import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SECTION_ICON_MOTION } from "@/lib/section-icon-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setSubscribed(true);
    toast({ title: "You're in! 🎉", description: "Welcome to the resnur. AI newsletter." });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Floating dots */}
      <div className="absolute top-10 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-float" />
      <div className="absolute bottom-10 right-1/4 w-3 h-3 rounded-full bg-accent/15 animate-float-delay" />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center glass glow-border rounded-2xl p-8 md:p-12 animate-pulse-glow hover-scale transition-transform duration-500">
          <div
            className={`h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float ${SECTION_ICON_MOTION[1]}`}
          >
            <Mail className="h-7 w-7 text-primary interactive-icon" strokeWidth={1.75} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Stay <span className="gradient-text">Ahead</span> of AI
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get daily AI/ML concepts, slides, and community highlights straight to your inbox. No spam, pure intelligence. More updates coming soon.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary animate-fade-up">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">You're subscribed! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border focus:border-primary h-12"
              />
              <Button variant="glow" size="lg" type="submit" className="shrink-0 hover-scale">
                Subscribe (Coming Soon)
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
