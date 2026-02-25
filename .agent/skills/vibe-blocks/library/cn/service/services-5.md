# Service 5

## Metadata
- **Category**: Service
- **Objective**: Provide a comprehensive service detail page with integrated expertise stats and automated related service cross-links.
- **Use Case**: Sophisticated agency service landing pages that aim to maximize conversion and engagement by suggesting complementary offerings (e.g., Brand Identity as it relates to UX/UI).
- **Visual Style**: Professional 3-column split layout (2/3 content, 1/3 sidebar) featuring a modern hero header, a technical prose section, and a dual-purpose sidebar containing expertise markers and interactive cross-service tiles.
- **Interactivity**: Dynamic group-hover effects on "Related Service" cards that shift icon colors and background states to encourage discovery.

## Description
Service 5 is a robust informational hub. It solves the problem of "dead-end" service pages by providing a persistent "Related Services" block in the sidebar. The visual hierarchy is meticulously tuned for readability, with a large-scale introductory paragraph followed by a clean prose section. This layout is perfect for businesses with a diverse service portfolio where cross-selling and service discovery are primary business objectives.

## Source Code

```tsx
"use client";

import { Code, Droplet, Layout, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";

interface Service5Props {
  className?: string;
}

const Service5 = ({ className }: Service5Props) => {
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
      <div className="container max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Content Section */}
          <div className="lg:col-span-2">
            {/* Icon and Intro */}
            <div className="mb-12 space-y-10">
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-2xl bg-muted p-5 shadow-sm border border-border">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
                    alt="UX/UI Design"
                    className="h-10 w-10 dark:invert"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl text-foreground">
                  UX/UI Design
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                  We believe that great design should be intuitive, accessible,
                  and purposeful for every user who interacts with your product.
                  Our UX/UI design approach focuses on understanding your users'
                  needs, behaviors, and pain points back to results.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed">
              <h2 className="text-foreground">Creating Meaningful Digital Experiences</h2>
              <p>
                We combine user research, information architecture, and visual
                design to deliver experiences that drive engagement and
                conversions.
              </p>

              <p>
                Through comprehensive user research and testing, we validate
                design decisions with real data. Our iterative design process
                ensures that every element serves a purpose and contributes to
                your business goals.
              </p>

              <p>
                We specialize in creating design systems that scale with your
                business, ensuring consistency across all touchpoints while
                maintaining flexibility for future growth and evolution.
              </p>

              <h2 className="text-foreground mt-12">Our UX/UI Design Services</h2>
              <ul className="list-disc pl-5 marker:text-primary space-y-2">
                <li>User research and persona development</li>
                <li>Information architecture and user journey mapping</li>
                <li>Wireframing and interactive prototyping</li>
                <li>Visual design and brand integration</li>
                <li>Usability testing and design validation</li>
                <li>Design system creation and documentation</li>
              </ul>

              <h2 className="text-foreground mt-16">Strategic Design for Business Success</h2>
              <p>
                Our design philosophy centers on creating interfaces that bridge
                the gap between user needs and business objectives. We
                understand that great UX/UI design is not just about
                aesthetics—it's about creating meaningful interactions that
                drive results.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10 lg:col-span-1">
            {/* Stats Section */}
            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="mb-8 text-xl font-bold tracking-tight text-foreground">Our Expertise</h3>
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-background shadow-sm border border-border/50 transition-transform group-hover:scale-105">
                      <img
                        src={stat.icon}
                        alt={stat.title}
                        className="h-7 w-7 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="text-sm font-bold text-foreground">{stat.title}</div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="mb-8 text-xl font-bold tracking-tight text-foreground">Related Services</h3>
              <div className="space-y-3">
                {relatedServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="group">
                      <a
                        href={service.link}
                        className="block space-y-1 rounded-xl p-4 transition-all hover:bg-background hover:shadow-sm border border-transparent hover:border-border/60"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground leading-snug pl-7">
                          {service.description}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service5 };
```
