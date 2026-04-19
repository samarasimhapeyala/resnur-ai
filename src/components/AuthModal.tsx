import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

const AuthModal = ({ open, onOpenChange, mode, onModeChange }: AuthModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (mode === "signup" && !name.trim()) {
      toast({ title: "Missing name", description: "Please enter your name.", variant: "destructive" });
      return;
    }
    toast({
      title: mode === "login" ? "Welcome back! 🧠" : "Account created! 🚀",
      description: mode === "login" ? "You're logged in." : "Welcome to Resnur. Let's build intelligence.",
    });
    onOpenChange(false);
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Sign in or create your Resnur account</DialogTitle>
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-6 w-6 text-primary icon-brand-pulse" />
            <span className="font-display text-lg font-bold gradient-text">Resnur</span>
          </div>
          <Tabs value={mode} onValueChange={(v) => onModeChange(v as "login" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Log in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-0 outline-none">
              <h2 className="font-display text-2xl text-left text-foreground">Welcome back</h2>
              <p className="text-sm text-muted-foreground text-left mt-1">
                Log in to continue learning AI.
              </p>
            </TabsContent>
            <TabsContent value="signup" className="mt-0 outline-none">
              <h2 className="font-display text-2xl text-left text-foreground">Join Resnur</h2>
              <p className="text-sm text-muted-foreground text-left mt-1">
                Start your AI journey today — it&apos;s free.
              </p>
            </TabsContent>
          </Tabs>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="bg-background/50 border-border focus:border-primary" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background/50 border-border focus:border-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-background/50 border-border focus:border-primary" />
          </div>
          <Button variant="glow" type="submit" className="w-full">
            {mode === "login" ? "Log In" : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {mode === "login" ? "Need an account? " : "Have an account? "}
          <button
            type="button"
            className="text-primary font-medium link-animated"
            onClick={() => onModeChange(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Switch to Sign up" : "Switch to Log in"}
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
