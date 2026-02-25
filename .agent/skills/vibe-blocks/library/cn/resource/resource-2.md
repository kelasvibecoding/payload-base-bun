# Resource 2

## Metadata
- **Category**: Resource
- **Objective**: Provide a premium article or deep-dive guide template with a high-impact branding hero.
- **Use Case**: Core editorial content, expert blog posts, or investigative reports that require a high-fidelity visual introduction and clear author attribution.
- **Visual Style**: Massive primary-colored background hero block that splits the viewport between textual metadata (left) and Situational illustrations (right). Features specialized rounded-button social share tiles and a clean, centered prose body.
- **Interactivity**: Fluid navigation transitions on the "Back" link and hovering scale effects on circular social action buttons.

## Description
Resource 2 is the "Editorial" template of the vibe-library. It leads with a powerful dual-pane hero that immediately establishes the article's tone. The use of a primary-colored background (e.g., brand blue or black) for the hero ensures high visibility, while the centered prose section is optimized for deep reading. It also includes integrated author bio blocks both at the top and bottom of the article to build credibility.

## Source Code

```tsx
"use client";

import { ArrowLeft, Facebook, Link, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Resource2Props {
  navigation: {
    backText: string;
    backHref: string;
    className?: string;
  };
  blog: {
    title: string;
    author: string;
    role: string;
    date: string;
    readTime: string;
    imageSrc: string;
    content: React.ReactNode;
  };
  social: {
    heading: string;
    links: Array<{
      icon: "link" | "linkedin" | "twitter" | "facebook";
      href: string;
      label: string;
    }>;
  };
  illustration: {
    imageSrc: string;
    imageAlt: string;
  };
  className?: string;
}

const Resource2 = ({
  className,
  navigation = {
    backText: "All Articles",
    backHref: "/resources",
  },
  blog = {
    title:
      "Building Sustainable Web Applications: A Developer's Guide to Green Coding",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    role: "Senior Developer",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: (
      <>
        <p>
          The digital world consumes more energy than the entire aviation
          industry. As developers, we have a responsibility to build
          applications that are not only functional and beautiful, but also
          sustainable for our planet.
        </p>

        <h2 className="text-foreground pt-8">The Carbon Footprint of Code</h2>
        <p>
          Every line of code we write has an environmental impact. From the
          energy consumed by servers to the resources used in manufacturing
          devices, our digital choices matter more than we think.
        </p>

        <h3 className="text-foreground">Understanding the Impact</h3>
        <p>
          Modern web applications are incredibly resource-intensive. Consider
          these staggering facts:
        </p>
        <ul className="list-disc pl-5 marker:text-primary">
          <li>
            <strong>Data centers</strong> consume 1% of global electricity
          </li>
          <li>
            <strong>Video streaming</strong> accounts for 3% of global carbon
            emissions
          </li>
          <li>
            <strong>Email spam</strong> generates 17 million tons of CO2
            annually
          </li>
        </ul>

        <blockquote className="border-l-4 border-primary pl-8 py-4 italic text-xl text-muted-foreground my-12 bg-muted/30 rounded-r-xl">
          <p>
            "The most sustainable code is the code you don't write. The second
            most sustainable is the code that runs efficiently."
          </p>
        </blockquote>

        <h2 className="text-foreground">Green Coding Principles</h2>
        <p>
          Here are the fundamental principles every developer should follow:
        </p>
        <ol className="list-decimal pl-5 marker:text-primary font-medium">
          <li>
            <strong>Optimize for performance:</strong> Faster code uses less
            energy
          </li>
          <li>
            <strong>Minimize dependencies:</strong> Every package adds to the
            bundle size
          </li>
          <li>
            <strong>Use efficient algorithms:</strong> Better complexity means
            less computation
          </li>
          <li>
            <strong>Implement caching strategies:</strong> Reduce redundant
            operations
          </li>
          <li>
            <strong>Choose green hosting:</strong> Renewable energy-powered
            servers
          </li>
        </ol>

        <h2 className="text-foreground pt-12">Practical Implementation</h2>
        <p>
          Let's look at some concrete examples of how to implement these
          principles:
        </p>

        <h4 className="font-bold text-foreground">1. Image Optimization</h4>
        <p>
          Images often account for 60-80% of a webpage's size. Use modern
          formats like WebP or AVIF, implement lazy loading, and serve
          appropriately sized images.
        </p>

        <h4 className="font-bold text-foreground">2. Code Splitting</h4>
        <p>
          Load only the JavaScript that users actually need. This reduces
          initial bundle size and improves performance.
        </p>
      </>
    ),
  },
  social = {
    heading: "Share this article",
    links: [
      { icon: "link", href: "#", label: "Copy link" },
      { icon: "linkedin", href: "#", label: "Share on LinkedIn" },
      { icon: "twitter", href: "#", label: "Share on X" },
      { icon: "facebook", href: "#", label: "Share on Facebook" },
    ],
  },
  illustration = {
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    imageAlt:
      "Sustainable web development illustration showing green coding practices and environmental impact",
  },
}: Resource2Props) => {
  const getIcon = (icon: string, className: string) => {
    switch (icon) {
      case "link":
        return <Link className={`size-4 ${className}`} />;
      case "linkedin":
        return <Linkedin className={`size-4 ${className}`} />;
      case "twitter":
        return <Twitter className={`size-4 ${className}`} />;
      case "facebook":
        return <Facebook className={`size-4 ${className}`} />;
      default:
        return null;
    }
  };

  return (
    <section className={cn("bg-background font-sans", className)}>
      <div className="min-h-[500px] bg-primary text-primary-foreground flex items-center">
        <div className="container py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            {/* Left Section - Content */}
            <div className="flex h-full max-w-md flex-col justify-between gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <a
                    href={navigation.backHref}
                    className="group/nav flex items-center gap-2 transition-all duration-300 hover:gap-4"
                  >
                    <ArrowLeft className="size-4" />
                    <span className="font-medium hover:underline underline-offset-4">
                      {navigation.backText}
                    </span>
                  </a>
                </div>
                <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                  {blog.title}
                </h1>
              </div>
              <div className="flex flex-col gap-10">
                <div className="space-y-1">
                  <p className="text-xl font-medium text-primary-foreground/90">{blog.author}</p>
                  <p className="text-primary-foreground/60 font-medium tracking-wide">
                    {blog.date} • {blog.readTime}
                  </p>
                </div>
                {/* Social Sharing */}
                <div className="space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50">{social.heading}</h3>
                  <div className="flex gap-4">
                    {social.links.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="group/btn h-12 w-12 rounded-full border-white/20 bg-white/10 transition-all hover:bg-white hover:text-primary"
                        asChild
                      >
                        <a href={link.href} aria-label={link.label}>
                          {getIcon(
                            link.icon,
                            "text-white group-hover/btn:text-primary transition-colors",
                          )}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Illustration */}
            <div className="lg:col-span-2 h-full w-full overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-[16/10] w-full">
                <img
                  src={illustration.imageSrc}
                  alt={illustration.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-24">
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-lg">
          {blog.content}
        </div>
        <div className="mt-20 flex flex-col justify-between gap-12 border-t border-border pt-12 md:flex-row items-center">
          <div className="flex items-center gap-5">
            <Avatar className="size-16 border-2 border-primary/20 xl:size-20">
              <AvatarImage src={blog.imageSrc} />
              <AvatarFallback>{blog.author[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-0.5">
              <p className="text-xl font-bold text-foreground">{blog.author}</p>
              <p className="text-base text-muted-foreground font-medium">{blog.role}</p>
            </div>
          </div>
          {/* Social Sharing Bottom */}
          <div className="space-y-5 flex flex-col items-center md:items-end">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{social.heading}</h3>
            <div className="flex gap-3">
              {social.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-border bg-muted/30 hover:bg-primary hover:text-white transition-all"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    {getIcon(link.icon, "transition-colors")}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resource2 };
```
