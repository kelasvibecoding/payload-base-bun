# Service 4

## Metadata
- **Category**: Service
- **Objective**: Provide a balanced service detail layout with a persistent expertise and stats sidebar.
- **Use Case**: Complex service descriptions that require high-level summaries and expertise highlights to remain visible as a "sticky" reference while reading.
- **Visual Style**: Split-layout design (66/33 horizontal split) featuring a clean typographic hero, icon-driven inline list components, and a structured sidebar with expert proficiency metrics.
- **Interactivity**: Sticky sidebar functionality that maintains critical "expertise" context as the user scrolls through the detailed service narrative.

## Description
Service 4 is optimized for information density and side-by-side comparison. By placing "Our Expertise" in a sticky sidebar, it ensures that while the user reads about the methodology, they are constantly reminded of the team's technical foundations (e.g., Figma, Adobe). The use of Lucide icons for inline headers makes the primary content highly scannable, making this ideal for complex professional services like digital engineering or strategic consulting.

## Source Code

```tsx
"use client";

import { BookOpen, Map, Palette, Pen, TestTube, Users } from "lucide-react";

import { cn } from "@/lib/utils";

interface Service4Props {
  className?: string;
}

const Service4 = ({ className }: Service4Props) => {
  const services = [
    {
      icon: Users,
      title: "User research and persona development",
    },
    {
      icon: Map,
      title: "Information architecture and user journey mapping",
    },
    {
      icon: Pen,
      title: "Wireframing and interactive prototyping",
    },
    {
      icon: Palette,
      title: "Visual design and brand integration",
    },
    {
      icon: TestTube,
      title: "Usability testing and design validation",
    },
    {
      icon: BookOpen,
      title: "Design system creation and documentation",
    },
  ];

  const stats = [
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/adobe-icon.png",
      title: "Adobe Creative Suite",
      value: "100%",
      description: "Design proficiency",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      value: "5+",
      description: "Years experience",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
      title: "Sketch",
      value: "200+",
      description: "Projects completed",
    },
  ];

  return (
    <section className={cn("pb-32 bg-background font-sans", className)}>
      {/* Simple Hero */}
      <div className="bg-muted py-32 border-b border-border">
        <div className="container">
          <div className="flex items-center justify-center gap-6">
            <div className="p-4 bg-background rounded-2xl shadow-sm">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
                alt="UX/UI Design"
                className="h-12 w-12 dark:invert"
              />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-foreground">
              UX/UI Design
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="py-24">
        <div className="container max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Content Section */}
            <div className="lg:col-span-2">
              <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed">
                <h2 className="text-foreground">User-Centered Design That Converts</h2>
                <p>
                  We believe that great design should be intuitive, accessible,
                  and purposeful for every user who interacts with your product.
                  Our UX/UI design approach focuses on understanding your users'
                  needs, behaviors, and pain points to create interfaces that
                  not only look beautiful but function seamlessly.
                </p>

                <h2 className="text-foreground mt-12">Creating Meaningful Digital Experiences</h2>
                <p>
                  We combine user research, information architecture, and visual
                  design to deliver experiences that drive engagement and
                  conversions.
                </p>

                <p>
                  Through comprehensive user research and testing, we validate
                  design decisions with real data. Our iterative design process
                  ensures that every element serves a purpose and contributes to
                  your business goals while providing an exceptional user
                  experience.
                </p>

                <p>
                  We specialize in creating design systems that scale with your
                  business, ensuring consistency across all touchpoints while
                  maintaining flexibility for future growth and evolution.
                </p>

                <h2 className="text-foreground mt-12 mb-6">Our UX/UI Design Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-muted/30 transition-colors">
                        <div className="flex-shrink-0 size-10 rounded-lg bg-primary/5 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium leading-tight text-foreground">{service.title}</span>
                      </div>
                    );
                  })}
                </div>

                <h2 className="text-foreground mt-16">Strategic Design for Business Success</h2>
                <p>
                  Our design philosophy centers on creating interfaces that
                  bridge the gap between user needs and business objectives. We
                  understand that great UX/UI design is not just about
                  aesthetics—it's about creating meaningful interactions that
                  drive results.
                </p>

                <p>
                  From initial concept to final implementation, we ensure that
                  every design element contributes to a cohesive user experience
                  that reflects your brand values and supports your business
                  goals. Our designs are optimized for performance,
                  accessibility, and scalability across all devices and
                  platforms.
                </p>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:sticky lg:top-8">
                <h3 className="mb-8 text-xl font-bold tracking-tight text-foreground">Our Expertise</h3>
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-background shadow-sm border border-border/50 group-hover:scale-110 transition-transform">
                        <img
                          src={stat.icon}
                          alt={stat.title}
                          className="h-7 w-7 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{stat.title}</div>
                        <div className="text-3xl font-bold tracking-tighter text-foreground">{stat.value}</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-8" />
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use industry-standard tools and methodologies to deliver world-class design results for our partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service4 };
```
