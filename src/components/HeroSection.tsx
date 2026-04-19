import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onAuthOpen: (mode: "signup") => void;
}

const layerX = [10, 30, 50, 70, 90];
const layerY = [
  [14, 34, 54, 74, 90],
  [10, 26, 42, 58, 74, 90],
  [16, 34, 52, 70, 88],
  [12, 28, 44, 60, 76, 92],
  [18, 38, 58, 78, 92],
];

const neuralNodes = layerX.flatMap((left, layerIndex) =>
  layerY[layerIndex].map((top, nodeIndex) => ({
    id: `node-${layerIndex}-${nodeIndex}`,
    cx: left,
    cy: top,
    delay: `${(layerIndex * 0.32 + nodeIndex * 0.2).toFixed(2)}s`,
  })),
);

const neuralEdges = layerX.slice(0, -1).flatMap((left, layerIndex) =>
  layerY[layerIndex].flatMap((top, fromIndex) => {
    const currentCount = layerY[layerIndex].length;
    const nextCount = layerY[layerIndex + 1].length;
    const mappedIndex =
      currentCount === 1 ? 0 : (fromIndex * (nextCount - 1)) / (currentCount - 1);
    const anchorLow = Math.floor(mappedIndex);
    const anchorHigh = Math.ceil(mappedIndex);
    const targetIndices = Array.from(
      new Set([anchorLow - 1, anchorLow, anchorHigh, anchorHigh + 1]),
    ).filter((targetIndex) => targetIndex >= 0 && targetIndex < nextCount);

    return targetIndices.map((targetIndex) => {
        const x1 = left;
        const y1 = top;
        const x2 = layerX[layerIndex + 1];
        const y2 = layerY[layerIndex + 1][targetIndex];
        const cx = ((x1 + x2) / 2 + (targetIndex - fromIndex) * 1.4).toFixed(2);
        const cy = ((y1 + y2) / 2).toFixed(2);

        return {
          id: `edge-${layerIndex}-${fromIndex}-${targetIndex}`,
          d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`,
          delay: `${(layerIndex * 0.24 + fromIndex * 0.12 + targetIndex * 0.08).toFixed(2)}s`,
        };
      });
  }),
);

const inputLines = layerY[0].map((top, index) => ({
  id: `input-${index}`,
  d: `M 2 ${top} L ${layerX[0]} ${top}`,
  delay: `${(index * 0.14).toFixed(2)}s`,
}));

const outputLines = layerY[layerY.length - 1].map((top, index) => ({
  id: `output-${index}`,
  d: `M ${layerX[layerX.length - 1]} ${top} L 98 ${top}`,
  delay: `${(index * 0.14 + 0.3).toFixed(2)}s`,
}));

const HERO_STATS = [
  { value: "Daily", label: "AI Concepts" },
  { value: "100+", label: "Topics Covered" },
  { value: "1K+", label: "Community Members" },
  { value: "Free", label: "To start" },
] as const;

const HERO_STAT_FLOAT_CLASSES = ["animate-float", "animate-float-delay", "animate-float-delay-2", "animate-float"] as const;

const HeroSection = ({ onAuthOpen }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full ai-backprop-network opacity-[0.09]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {inputLines.map((line) => (
          <g key={line.id}>
            <path className="ai-edge" d={line.d} />
            <path className="ai-edge-flow-forward" d={line.d} style={{ animationDelay: line.delay }} />
          </g>
        ))}

        {neuralEdges.map((edge) => (
          <g key={edge.id}>
            <path className="ai-edge" d={edge.d} />
            <path className="ai-edge-flow-forward" d={edge.d} style={{ animationDelay: edge.delay }} />
            <path className="ai-edge-flow-backward" d={edge.d} style={{ animationDelay: edge.delay }} />
          </g>
        ))}

        {outputLines.map((line) => (
          <g key={line.id}>
            <path className="ai-edge" d={line.d} />
            <path className="ai-edge-flow-forward" d={line.d} style={{ animationDelay: line.delay }} />
          </g>
        ))}

        {neuralNodes.map((node) => (
          <circle
            key={node.id}
            className="ai-node"
            cx={node.cx}
            cy={node.cy}
            r="0.5"
            style={{ animationDelay: node.delay }}
          />
        ))}
      </svg>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-up">
          <div className="group/badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-shimmer-border text-primary text-sm font-medium mb-8 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:-translate-y-0.5 cursor-default">
            <Sparkles
              className="h-4 w-4 animate-hero-badge-icon text-sky-400/95 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover/badge:scale-110 motion-safe:group-hover/badge:text-sky-300"
              aria-hidden
            />
            <span>resnur. AI Learning & Building Platform · More Coming Soon</span>
          </div>
        </div>

        <h1 className="animate-fade-up font-tagline text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.12] tracking-tight mb-6 max-w-5xl mx-auto">
          <span className="text-foreground">
            Learn <span className="gradient-text">AI</span> the way it
          </span>
          <br />
          <span className="text-foreground">was </span>
          <span className="gradient-text">meant to be.</span>
        </h1>

        <p className="animate-fade-up-delay text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Master AI & ML through daily bite-sized concepts, interactive slides, and a thriving community.
          From neural depth to everyday ease.
        </p>

        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="glow"
            size="lg"
            className="group/cta text-base px-8 hover-scale"
            onClick={() => onAuthOpen("signup")}
          >
            Join the Community
            <ArrowRight className="ml-2 h-5 w-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/cta:translate-x-1.5" />
          </Button>
          <Button variant="ghost-glow" size="lg" className="text-base px-8 hover-scale" onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>
            Subscribe to Newsletter
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8 max-w-3xl mx-auto animate-fade-up-delay-2 px-2">
          {HERO_STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center ${HERO_STAT_FLOAT_CLASSES[i]}`}>
              <div className="text-2xl font-bold text-primary glow-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono font-medium tracking-tight leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
