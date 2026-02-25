# Service 3

## Metadata
- **Category**: Service
- **Objective**: Provide a data-driven service detail page with integrated technical stats and proficiency metrics.
- **Use Case**: Agencies or technical service providers where quantifying expertise (e.g., project count, software proficiency) is critical for building client trust.
- **Visual Style**: Cinematic image-backed hero section followed by a high-contrast 3-column "Stats" block with software icons, and a comprehensive prose section.
- **Interactivity**: Dynamic stat grid that highlights specific professional milestones and software certifications.

## Description
Service 3 is built for teams that lead with expertise. By placing a "Stats & Technical" section immediately after the hero, it validates the agency's claims with hard data (like "100% Design Proficiency" or "200+ Projects Completed"). This component is highly effective for specialized services like UX Design, Cloud Infrastructure, or Data Science where clients are looking for proven track records and specific tool-set mastery.

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

interface Service3Props {
  className?: string;
}

const Service3 = ({ className }: Service3Props) => {
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
      {/* Full Width Hero with Background Image */}
      <div
        className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage:
            "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/christopher-gower-vjMgqUkS8q8-unsplash.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container text-center">
          <div className="mx-auto flex flex-col items-center space-y-8">
            <div className="rounded-full bg-white/10 backdrop-blur-md p-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux-white.svg"
                alt="UX/UI Design"
                className="w-16 h-16"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
                UX/UI Design
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                Merging technical excellence with artistic vision to build superior digital products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Technical Section */}
      <div className="bg-muted/50 py-20 border-y border-border">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/5">
                    <img
                      src={stat.icon}
                      alt={stat.title}
                      className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-primary">{stat.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24">
        <div className="container">
          <div className="mx-auto prose prose-neutral max-w-3xl dark:prose-invert prose-headings:tracking-tight leading-relaxed">
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
              your business goals while providing an exceptional user
              experience.
            </p>

            <p>
              We specialize in creating design systems that scale with your
              business, ensuring consistency across all touchpoints while
              maintaining flexibility for future growth and evolution.
            </p>

            <h2 className="text-foreground pt-8">Our UX/UI Design Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 not-prose mt-6">
              {[
                "User research and persona development",
                "Information architecture and journey mapping",
                "Wireframing and interactive prototyping",
                "Visual design and brand integration",
                "Usability testing and validation",
                "Design system creation",
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-border/50 text-muted-foreground font-medium">
                    <div className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
              ))}
            </div>

            <h2 className="text-foreground pt-12">Strategic Design for Business Success</h2>
            <p>
              Our design philosophy centers on creating interfaces that bridge
              the gap between user needs and business objectives. We understand
              that great UX/UI design is not just about aesthetics—it's about
              creating meaningful interactions that drive results.
            </p>

            <p>
              From initial concept to final implementation, we ensure that every
              design element contributes to a cohesive user experience that
              reflects your brand values and supports your business goals. Our
              designs are optimized for performance, accessibility, and
              scalability across all devices and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service3 };
```
