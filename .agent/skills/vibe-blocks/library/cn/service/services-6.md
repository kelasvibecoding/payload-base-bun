# Service 6

## Metadata
- **Category**: Service
- **Objective**: Provide a centered, high-density informational page with perfectly balanced typographic focus.
- **Use Case**: Deep content-heavy service pages where a centered narrative is required but must still provide visual data (expertise blocks and related service navigation).
- **Visual Style**: Symmetrical, centered architectural layout (max-width 3xl) featuring a large centered icon hero, a dedicated "Expertise" 3-column grid between blocks, and a wide-format "Related Services" footer section.
- **Interactivity**: Dynamic icon transitions (color shifts) and card hover states to provide subtle interactive feedback while maintaining a high-fidelity typographic focus.

## Description
Service 6 is the "Symmetrical" service template. By centering all core elements (heading, icons, and intro text), it creates an immediate sense of balance and focus. This layout is particularly effective for services that rely heavily on storytelling or long-form methodology explanations. The insertion of a technical expertise grid right after the intro provides immediate credibility, while the wide-format footer ensures a graceful exit path for the user.

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

interface Service6Props {
  className?: string;
}

const Service6 = ({ className }: Service6Props) => {
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
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container max-w-3xl">
        {/* Icon and Intro */}
        <div className="mb-20 space-y-10 text-center">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-muted p-6 shadow-sm border border-border">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
                alt="UX/UI Design"
                className="h-14 w-14 dark:invert"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl text-foreground">
              UX/UI Design
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              We believe that great design should be intuitive, accessible, and
              purposeful for every user who interacts with your product.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-24">
          <h2 className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Our Expertise & Toolset
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-muted/30 border border-border/50 p-8 text-center transition-all hover:bg-muted/50"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background shadow-sm">
                  <img
                    src={stat.icon}
                    alt={stat.title}
                    className="h-8 w-8 object-contain grayscale-0"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-foreground">{stat.title}</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto prose prose-neutral mb-24 max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed text-center md:text-left">
          <h2 className="text-foreground text-center">Creating Meaningful Digital Experiences</h2>
          <p>
            We combine user research, information architecture, and visual
            design to deliver experiences that drive engagement and conversions.
          </p>

          <p>
            Through comprehensive user research and testing, we validate design
            decisions with real data. Our iterative design process ensures that
            every element serves a purpose and contributes.
          </p>

          <h2 className="text-foreground mt-16 mb-8 text-center">Our UX/UI Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 not-prose">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-border/40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{service.title}</span>
                </div>
              );
            })}
          </div>

          <h2 className="text-foreground mt-20 text-center">Strategic Design for Business Success</h2>
          <p>
            Our design philosophy centers on creating interfaces that bridge the
            gap between user needs and business objectives. We understand that
            great UX/UI design is not just about aesthetics—it's about creating
            meaningful interactions.
          </p>
        </div>

        {/* Related Services */}
        <div className="rounded-2xl border border-border bg-muted/20 p-12">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group h-full">
                  <a
                    href={service.link}
                    className="block h-full space-y-3 rounded-2xl bg-background border border-border/50 p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted group-hover:bg-primary/5 transition-colors">
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground">
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

export { Service6 };
```
