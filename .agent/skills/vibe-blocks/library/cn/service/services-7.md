# Service 7

## Metadata
- **Category**: Service
- **Objective**: Provide a wide-format, structured service detail page with distinct sectional grouping.
- **Use Case**: Agencies or product studios that want a "portal" feel for each service, where expertise and navigation are clearly demarcated from the main narrative.
- **Visual Style**: Structured max-width container (4xl) featuring a large icon hero, a distinct "Expertise" horizontal grid with compact bordered tiles, followed by a wide-format "Related Services" cross-link section with persistent borders.
- **Interactivity**: Clean, minimalist hover transitions on bordered navigation tiles that emphasize professional capability and tool proficiency.

## Description
Service 7 is designed for structural efficiency. By using clear vertical sections separated by generous whitespace and bordered containers, it avoids the "wall of text" problem common in service descriptions. The "Expertise" section uses compact horizontal tiles which are perfect for displaying software certifications or specialized skillsets without overwhelming the primary narrative layout.

## Source Code

```tsx
"use client";

import {
  BookOpen,
  Code,
  Droplet,
  Layout,
  Map,
  Palette,
  Pen,
  Smartphone,
  TestTube,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Service7Props {
  className?: string;
}

const Service7 = ({ className }: Service7Props) => {
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
      description: "Design proficiency",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      description: "Years experience",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
      title: "Sketch",
      description: "Projects completed",
    },
  ];

  const relatedServices = [
    {
      icon: Droplet,
      title: "Brand Identity",
      description: "Logo design and brand guidelines",
      link: "#",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website development",
      link: "#",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "iOS and Android app interfaces",
      link: "#",
    },
    {
      icon: Layout,
      title: "Design Systems",
      description: "Scalable component libraries",
      link: "#",
    },
  ];

  return (
    <section className={cn("py-24 bg-background font-sans", className)}>
      <div className="container max-w-5xl">
        {/* Icon and Intro */}
        <div className="mb-20 space-y-10">
          <div className="flex justify-start">
            <div className="rounded-full bg-muted p-8 shadow-sm border border-border">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
                alt="UX/UI Design"
                className="h-16 w-16 dark:invert"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl text-foreground">
              UX/UI Design
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground font-medium">
              We believe that great design should be intuitive, accessible, and
              purposeful for every user who interacts with your product.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight md:text-2xl text-foreground">
                Our Expertise
              </h2>
              <p className="mt-1 text-sm text-muted-foreground font-medium">
                Professional tools and proven experience
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 group transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/5 transition-colors">
                  <img
                    src={stat.icon}
                    alt={stat.title}
                    className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{stat.title}</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-neutral mb-24 max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-lg">
          <h2 className="text-foreground">Creating Meaningful Digital Experiences</h2>
          <p>
            We combine user research, information architecture, and visual
            design to deliver experiences that drive engagement and conversions.
          </p>

          <p>
            Through comprehensive user research and testing, we validate design
            decisions with real data. Our iterative design process ensures that
            every element serves a purpose and contributes.
          </p>

          <h2 className="text-foreground mt-16 mb-8">Our UX/UI Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 not-prose">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-center gap-4 py-4 border-b border-border/50 group">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-4 w-4 transition-colors" />
                  </div>
                  <span className="text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{service.title}</span>
                </div>
              );
            })}
          </div>

          <h2 className="text-foreground mt-20">Strategic Design for Business Success</h2>
          <p>
            Our design philosophy centers on creating interfaces that bridge the
            gap between user needs and business objectives. We understand that
            great UX/UI design is not just about aesthetics.
          </p>
        </div>

        {/* Related Services */}
        <div className="border-t border-border pt-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-foreground">
              Related Services
            </h2>
            <p className="mt-2 text-muted-foreground font-medium">
              Explore our other design and development offerings
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group h-full">
                  <a
                    href={service.link}
                    className="flex flex-col h-full space-y-4 rounded-2xl border border-border bg-card p-8 transition-all hover:bg-muted/30 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground font-medium">
                      {service.description}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service7 };
```
