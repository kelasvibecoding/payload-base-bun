# Resources 2

## Metadata
- **Category**: Resources
- **Objective**: Provide a visually-dominant, masonry-style resource catalog with integrated tabbed filtering and author stacks.
- **Use Case**: Tech blogs, industry news feeds, or digital media libraries where "Latest" and "Featured" status must be visually emphasized through layout asymmetry.
- **Visual Style**: High-fidelity architectural layout featuring a 3-block staggered masonry hero with gradient-overlay imagery and specialized "Featured" badges. Includes a detailed list-based "Latest Updates" section with functional tabbed horizontal filtering.
- **Interactivity**: Fluid tab-based state management for category switching, alongside sophisticated group-hover scaling effects and author avatar overlap stacks for social proof.

## Description
Resources 2 is the "Editorial Catalog" template. It moves away from predictable grids in favor of a masonry hero that creates instant visual hierarchy, marking specific pieces as higher value. The separation between the highly visual hero and the clean, functional "Latest updates" feed below makes it ideal for platforms that publish a mix of heavy whitepapers and frequent short-form updates.

## Source Code

```tsx
"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Data", "AI", "Security", "News"];

interface Blog {
  title: string;
  category: Exclude<(typeof categories)[number], "All">;
  date: string;
  author: string[];
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Exploring the Depths of Modern Data Analytics Techniques",
    category: "Data",
    date: "Dec 4, 2024",
    author: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    ],
    link: "#",
  },
  {
    title: "Navigating the Complex Landscape of Artificial Intelligence",
    category: "AI",
    date: "Dec 3, 2024",
    author: ["https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp"],
    link: "#",
  },
];

interface Resources2Props {
  className?: string;
}

const Resources2 = ({ className }: Resources2Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter(
    (blog) => selectedCategory === "All" || blog.category === selectedCategory,
  );

  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        <div className="mb-16 space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground">
            Knowledge Center
          </h1>
          <p className="text-xl font-medium text-muted-foreground leading-relaxed">
            Expert perspectives on infrastructure, security, and the digital future of professional services.
          </p>
        </div>

        {/* Masonry Hero */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:h-[600px]">
          {/* Main Featured Block */}
          <a
            href="#"
            className="group relative isolate overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:shadow-2xl lg:col-span-7"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ba454dc72896-unsplash.jpg"
              alt="modern infrastructure"
              className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-10">
              <Badge className="w-fit border-white/20 bg-white/10 backdrop-blur-md text-white font-bold py-1.5 px-4">
                <Sparkles className="mr-2 size-3.5" />
                Featured Report
              </Badge>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl text-balance">
                  Scaling Digital Infrastructure for the Post-SaaS Era
                </h2>
                <div className="flex items-center gap-4">
                  <time className="text-sm font-bold text-white/60 uppercase tracking-widest">
                    Dec 4, 2024
                  </time>
                  <div className="flex items-center -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} className="size-8 border-2 border-primary box-content">
                        <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Side Stack */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            {[
              {
                title: "Workflow Automation for Enterprise Efficiency",
                img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
                badge: "Latest"
              },
              {
                title: "Boosting Search Performance in Complex Datasets",
                img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-zr8IvMz0OWk-unsplash.jpg",
                badge: "Performance"
              }
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="group relative isolate overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 font-bold">
                      {item.badge}
                    </Badge>
                    <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* List Section */}
        <div className="mt-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Latest Insights
            </h2>
            <Tabs
              defaultValue="All"
              onValueChange={setSelectedCategory}
              className="w-full md:w-auto"
            >
              <TabsList className="flex h-auto gap-2 bg-muted/30 p-1.5 rounded-2xl border border-border">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-xl px-5 py-2 font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tracking-wide"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-0 border-t border-border">
            {filteredBlogs.map((blog, idx) => (
              <a
                key={idx}
                href={blog.link}
                className="group flex flex-col justify-between gap-6 border-b border-border py-10 transition-colors hover:bg-muted/30 md:flex-row md:items-center px-4 -mx-4 rounded-xl"
              >
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors max-w-2xl leading-tight">
                  {blog.title}
                </h3>
                <div className="flex w-full items-center justify-between gap-12 md:w-auto">
                  <Badge variant="outline" className="font-bold border-primary/20 text-primary">
                    {blog.category}
                  </Badge>
                  <time className="text-sm font-bold text-muted-foreground tabular-nums">
                    {blog.date}
                  </time>
                  <div className="flex items-center -space-x-2">
                    {blog.author.map((author, idx) => (
                      <Avatar key={idx} className="size-8 border-2 border-background shadow-sm">
                        <AvatarImage src={author} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resources2 };
```
