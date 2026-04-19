import { Brain, Layers, Users, Cpu, BookOpen, Rocket } from "lucide-react";
import { SECTION_ICON_MOTION } from "@/lib/section-icon-motion";

const features = [
  {
    icon: Brain,
    title: "AI-First Learning",
    description: "Concept-by-concept AI & ML education through visual slides, short notes, and interactive content — delivered daily.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with learners and builders. Share insights, discuss breakthroughs, and grow together in the resnur. AI community.",
  },
  {
    icon: Layers,
    title: "Build with AI",
    description: "From prototyping to production — tools and guidance to turn your AI ideas into real products.",
  },
  {
    icon: Cpu,
    title: "Neural Reasoning",
    description: "Go beyond tutorials. Develop deep reasoning skills that make you think like an AI engineer.",
  },
  {
    icon: BookOpen,
    title: "Curated Content",
    description: "Handpicked AI/ML resources, research breakdowns, and trend analysis — no noise, only signal.",
  },
  {
    icon: Rocket,
    title: "Ship Faster",
    description: "Access pre-built AI templates, workflows, and integrations to accelerate your product development.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Moving background particles */}
      <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-primary/20 animate-drift" />
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-accent/20 animate-drift-delay" />
      <div className="absolute bottom-20 left-1/3 w-4 h-4 rounded-full bg-primary/10 animate-drift-delay-2" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-up">The Platform</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
            Everything AI. <span className="gradient-text">One Platform.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up-delay">
            resnur. AI is your all-in-one AI ecosystem — learn, build, and innovate without limits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl glass glow-border hover:border-primary/30 transition-all duration-500 hover-scale"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`relative h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 overflow-visible transition-all duration-300 group-hover:bg-primary/20 motion-safe:group-hover:scale-105 motion-safe:group-hover:rotate-2 group-hover:shadow-[0_0_28px_-6px_hsl(var(--primary)/0.4)] ${SECTION_ICON_MOTION[i % SECTION_ICON_MOTION.length]}`}
              >
                <feature.icon className="h-6 w-6 text-primary interactive-icon" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
