const steps = [
  {
    id: "01",
    cadence: "Every day",
    title: "Daily concept drop",
    description:
      "One AI/ML concept explained visually every day. Slides, short notes, diagrams — all in one place.",
  },
  {
    id: "02",
    cadence: "Always on",
    title: "Community learning",
    description:
      "Discuss, ask questions, and share insights with learners who are on the same journey as you.",
  },
  {
    id: "03",
    cadence: "Weekly",
    title: "Newsletter digest",
    description:
      "Top AI concepts, tools and news — curated and delivered to your inbox every week. Free.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-up">
            How it works
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 animate-soft-reveal">
            Simple. Daily. <span className="gradient-text">Powerful.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className="group p-6 rounded-xl glass glow-border animate-shimmer-border hover:border-primary/30 transition-all duration-500 hover-scale animate-soft-reveal-delay"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <p className="text-primary/80 text-sm font-semibold mb-2">{step.id}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{step.cadence}</p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
