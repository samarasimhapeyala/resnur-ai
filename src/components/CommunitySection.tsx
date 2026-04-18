import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  Image,
  FileText,
  TrendingUp,
  Sparkles,
  BookOpen,
  Wrench,
  Hammer,
  ExternalLink,
  ChevronDown,
  Calendar,
  Sigma,
  Code2,
  BarChart3,
  Brain,
  Languages,
  Waypoints,
  Wand2,
  ScanEye,
  Target,
  ServerCog,
  Table2,
  Scale,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SECTION_ICON_MOTION } from "@/lib/section-icon-motion";
import { cn } from "@/lib/utils";

const LINKEDIN_PAGE = "https://www.linkedin.com/company/resnur-ai";
/** Optional: paste a LinkedIn “Embed this post” iframe `src` in `.env` as VITE_LINKEDIN_EMBED_URL */
const LINKEDIN_EMBED_SRC = import.meta.env.VITE_LINKEDIN_EMBED_URL as string | undefined;

const contentTypes = [
  {
    icon: Image,
    title: "AI Visual Slides",
    description: "Complex concepts explained through beautiful, shareable visual slides updated daily.",
    tag: "Daily",
  },
  {
    icon: FileText,
    title: "Short Notes",
    description: "Bite-sized concept breakdowns that fit in your coffee break. One concept, one note.",
    tag: "Concept-wise",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    description: "Engage in meaningful AI conversations. Ask questions, share projects, get feedback.",
    tag: "Interactive",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Stay ahead with weekly AI industry updates, paper reviews, and tool comparisons.",
    tag: "Weekly",
  },
];

const latestItems = [
  {
    title: "Backpropagation intuition — visual walkthrough",
    tag: "Deep Learning",
    ago: "2 days ago",
  },
  {
    title: "Attention vs self-attention: what actually changes",
    tag: "Transformers",
    ago: "4 days ago",
  },
  {
    title: "Linear algebra cheat sheet for ML practitioners",
    tag: "Maths for AI",
    ago: "1 week ago",
  },
  {
    title: "Building a tiny GPT-style block in PyTorch",
    tag: "Gen AI",
    ago: "1 week ago",
  },
  {
    title: "Tokenization and subwords in modern NLP",
    tag: "NLP",
    ago: "2 weeks ago",
  },
];

const topicsCatalog: { title: string; abbr?: string; icon: LucideIcon }[] = [
  { title: "Mathematics for AI", abbr: "Maths", icon: Sigma },
  { title: "Python", icon: Code2 },
  { title: "Machine Learning", abbr: "ML", icon: BarChart3 },
  { title: "Deep Learning", abbr: "DL", icon: Brain },
  { title: "Natural Language Processing", abbr: "NLP", icon: Languages },
  { title: "Transformers", icon: Waypoints },
  { title: "Generative AI", abbr: "Gen AI", icon: Wand2 },
  { title: "Computer Vision", abbr: "CV", icon: ScanEye },
  { title: "Reinforcement Learning", abbr: "RL", icon: Target },
  { title: "MLOps", icon: ServerCog },
  { title: "Data & evaluation", icon: Table2 },
  { title: "AI ethics & safety", icon: Scale },
];

const practicePillars = [
  {
    icon: BookOpen,
    title: "Hands-on exercises",
    description: "Notebook-style drills, quizzes, and mini-projects that reinforce every concept you learn.",
  },
  {
    icon: Wrench,
    title: "AI tools",
    description: "Curated stacks for training, deployment, and experimentation — from notebooks to APIs.",
  },
  {
    icon: Hammer,
    title: "MakerWorks",
    description: "Build-along sessions and challenges to ship real artifacts: demos, apps, and model cards.",
  },
];

const blogPosts = [
  {
    title: "Why visual-first AI education sticks",
    excerpt: "How slides, diagrams, and spaced repetition help you reason about models, not just run them.",
    href: "https://resnur.com/blog",
    readLabel: "Read post",
  },
  {
    title: "From calculus curiosity to transformer confidence",
    excerpt: "A practical path through the maths that actually shows up in modern deep learning.",
    href: "https://resnur.com/blog",
    readLabel: "Read post",
  },
  {
    title: "Community notes: what builders are shipping together",
    excerpt: "Highlights from discussions, MakerWorks submissions, and weekly digest themes.",
    href: "https://resnur.com/blog",
    readLabel: "Read post",
  },
];

const CommunitySection = () => {
  const [tabPanelsOpen, setTabPanelsOpen] = useState(false);

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="absolute top-20 right-10 w-20 h-20 rounded-full border border-primary/10 animate-spin-slow" />
      <div
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full border border-accent/10 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />
      <div className="absolute top-1/2 left-5 w-2 h-2 rounded-full bg-primary/30 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/20 animate-float-delay" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-up">Community</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
            Learn AI the <span className="gradient-text">resnur. Way</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up-delay">
            Daily AI/ML content curated for builders — visual, concise, and community-powered.
          </p>
        </div>

        <Collapsible open={tabPanelsOpen} onOpenChange={setTabPanelsOpen} className="mx-auto mb-20 w-full max-w-5xl">
          <Tabs
            defaultValue="latest"
            className="w-full"
            onValueChange={() => setTabPanelsOpen(true)}
          >
            {/* Single fused bar: scrollable tabs + one collapse control */}
            <div className="tabs-list-glow mb-10 flex w-full min-h-[3.25rem] items-stretch gap-1 rounded-xl border border-border/40 bg-muted/70 p-1.5 shadow-[inset_0_1px_0_hsl(var(--border)/0.35)] backdrop-blur-sm">
              <TabsList
                onPointerDownCapture={() => setTabPanelsOpen(true)}
                className={cn(
                  "inline-flex h-auto min-h-10 flex-1 min-w-0 flex-nowrap items-center justify-start gap-1 overflow-x-auto rounded-lg border-0 !bg-transparent p-0 text-muted-foreground !shadow-none backdrop-blur-none motion-safe:!animate-none",
                  "[scrollbar-width:thin] md:justify-center",
                )}
              >
                <TabsTrigger value="latest" className="shrink-0 px-3 py-2 sm:px-4">
                  Latest content
                </TabsTrigger>
                <TabsTrigger value="topics" className="shrink-0 px-3 py-2 sm:px-4">
                  Topics covered
                </TabsTrigger>
                <TabsTrigger value="practice" className="shrink-0 px-3 py-2 sm:px-4">
                  Practice
                </TabsTrigger>
                <TabsTrigger value="linkedin" className="shrink-0 px-3 py-2 sm:px-4">
                  LinkedIn
                </TabsTrigger>
                <TabsTrigger value="blogs" className="shrink-0 px-3 py-2 sm:px-4">
                  Blogs
                </TabsTrigger>
              </TabsList>
              <div className="hidden h-auto w-px shrink-0 bg-border/50 sm:block" aria-hidden />
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-all",
                    "hover:border-border/60 hover:bg-background/45 hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "data-[state=open]:text-primary",
                  )}
                  aria-label={tabPanelsOpen ? "Collapse tab content" : "Expand tab content"}
                >
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">

                <TabsContent value="latest" className="outline-none mt-0">
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                    {latestItems.map((item, li) => (
                      <div
                        key={item.title}
                        className="group flex flex-col gap-3 rounded-xl glass glow-border border-border/50 p-6 text-left transition-all hover:border-primary/25 hover-scale"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wide">
                            {item.tag}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span className={SECTION_ICON_MOTION[li % SECTION_ICON_MOTION.length]}>
                              <Calendar className="h-3.5 w-3.5" />
                            </span>
                            {item.ago}
                          </span>
                        </div>
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className={SECTION_ICON_MOTION[(li + 1) % SECTION_ICON_MOTION.length]}>
                            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                          </span>
                          Included for community members — full drops in the platform.
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="topics" className="outline-none mt-0">
                  <div className="space-y-8">
                    <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
                      Structured tracks from core maths and Python through classical ML, deep learning, language and vision,
                      all the way to Gen AI, MLOps, and responsible AI.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {topicsCatalog.map(({ title, abbr, icon: Icon }, topicIndex) => (
                        <div
                          key={title}
                          className="flex gap-4 rounded-xl border border-border/50 bg-card/20 p-5 text-left shadow-sm transition-all hover:border-primary/30 hover:bg-primary/[0.04] motion-safe:hover:-translate-y-0.5"
                        >
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15 ${SECTION_ICON_MOTION[topicIndex % SECTION_ICON_MOTION.length]}`}
                          >
                            <Icon className="h-7 w-7 text-primary interactive-icon" strokeWidth={1.75} aria-hidden />
                          </div>
                          <div className="min-w-0 flex flex-col justify-center gap-1">
                            <h3 className="font-display text-base font-semibold leading-snug text-foreground">{title}</h3>
                            {abbr ? (
                              <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                {abbr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="practice" className="outline-none mt-0">
                  <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                    {practicePillars.map((p, pi) => (
                      <div
                        key={p.title}
                        className="rounded-xl glass glow-border border-border/50 p-6 text-center md:text-left hover-scale transition-all hover:border-primary/25"
                      >
                        <div
                          className={`mx-auto md:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${SECTION_ICON_MOTION[pi % SECTION_ICON_MOTION.length]}`}
                        >
                          <p.icon className="h-6 w-6 text-primary interactive-icon" strokeWidth={1.75} />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="linkedin" className="outline-none mt-0">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Highlights from our LinkedIn — announcements, threads, and community spotlights.
                    </p>
                    {LINKEDIN_EMBED_SRC ? (
                      <div className="overflow-hidden rounded-xl border border-border/50 bg-card/30 shadow-lg">
                        <iframe
                          title="LinkedIn posts from resnur"
                          src={LINKEDIN_EMBED_SRC}
                          className="min-h-[520px] w-full border-0"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-primary/25 bg-primary/[0.03] px-6 py-16 text-center">
                        <p className="max-w-md text-sm text-muted-foreground">
                          Live LinkedIn posts will appear here soon. Follow us for carousels, announcements, and community
                          spotlights.
                        </p>
                        <Button variant="glow" asChild>
                          <a href={LINKEDIN_PAGE} target="_blank" rel="noopener noreferrer">
                            Follow on LinkedIn
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                    <div className="flex justify-center">
                      <Button variant="ghost-glow" size="sm" asChild>
                        <a href={LINKEDIN_PAGE} target="_blank" rel="noopener noreferrer">
                          Open LinkedIn page
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="blogs" className="outline-none mt-0">
                  <div className="grid gap-5">
                    {blogPosts.map((post) => (
                      <article
                        key={post.title}
                        className="flex flex-col gap-4 rounded-xl glass glow-border border-border/50 p-6 md:flex-row md:items-center md:justify-between md:gap-8 hover-scale transition-all hover:border-primary/25"
                      >
                        <div>
                          <h3 className="font-display text-lg font-semibold text-foreground">{post.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{post.excerpt}</p>
                        </div>
                        <Button variant="ghost-glow" className="shrink-0 gap-2" asChild>
                          <a href={post.href} target="_blank" rel="noopener noreferrer">
                            {post.readLabel}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </article>
                    ))}
                  </div>
                </TabsContent>
            </CollapsibleContent>
          </Tabs>
        </Collapsible>

        <div className="mb-8 mt-4 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Content formats</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {contentTypes.map((item, i) => (
            <div
              key={item.title}
              className="group flex gap-4 rounded-xl glass glow-border p-6 transition-all duration-500 hover:border-primary/30 hover-scale"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-visible rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 motion-safe:group-hover:scale-105 motion-safe:group-hover:-rotate-2 group-hover:shadow-[0_0_28px_-6px_hsl(var(--primary)/0.4)] ${SECTION_ICON_MOTION[(i + 1) % SECTION_ICON_MOTION.length]}`}
              >
                <item.icon className="h-6 w-6 text-primary interactive-icon" strokeWidth={1.75} />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
