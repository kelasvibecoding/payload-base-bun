# Resources 4

## Metadata
- **Category**: Resources
- **Objective**: Provide a high-density, professional news and partnership feed with sophisticated hover interactions.
- **Use Case**: Corporate newsrooms, official press release indices, or partnership milestone timelines where a clean, typographic-first presentation is required.
- **Visual Style**: Minimalist architectural layout featuring a split-screen approach with a sticky "Resources" vertical anchor. Items use edge-to-edge horizontal separators and large, bold primary text that translates on interaction.
- **Interactivity**: Fluid list-item hover highlights using `lg:hover:bg-muted`, alongside distinctive "Translate-X" animations on article titles and sliding `ArrowRight` icon reveals.

## Description
Resources 4 is the "Official Feed" template. It prioritizes clarity and authority over visual noise. By using a split-column layout where the section title remains persistent on the left, it provides clear navigational context while the user scrolls through the news feed on the right. Each entry includes metadata like category tags and author avatars, ensuring that the "Partnership" or "Press release" status of each update is immediately visible.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const news = [
  {
    title: "TechFlow AI Platform now available on Azure Marketplace",
    category: "Partnership",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    date: "June 15, 2024",
    link: "#",
  },
  {
    title: "CodeSphere: the journey behind our latest developer tool",
    category: "Press release",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    date: "June 10, 2024",
    link: "#",
  },
  {
    title: "DataViz & CloudNative announce collaboration on next-gen analytics tools",
    category: "Partnership",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    date: "May 28, 2024",
    link: "#",
  },
  {
    title: "QuantumByte launches EdgeCompute: a revolutionary edge computing platform",
    category: "News",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    date: "May 12, 2024",
    link: "#",
  },
  {
    title: "Join us at DevCon Global Summit 2024 in Berlin",
    category: "Press release",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    date: "May 5, 2024",
    link: "#",
  },
];

interface Resources4Props {
  className?: string;
}

const Resources4 = ({ className }: Resources4Props) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-2">
          {/* Section Anchor */}
          <div className="flex w-full max-w-56 items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            Resources
          </div>

          <div className="flex-1">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
              Stay in the loop?
              <br />
              <span className="text-muted-foreground/60 italic font-medium">
                Discover our recent updates.
              </span>
            </h2>

            <div className="mt-20">
              <Separator className="bg-foreground/10" />
              {news.map((item, idx) => (
                <Fragment key={idx}>
                  <a
                    href={item.link}
                    className="group flex flex-col justify-between gap-8 py-10 transition-all duration-500 lg:flex-row lg:items-center px-4 -mx-4 rounded-xl hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-6 text-xl font-bold transition-all duration-500 lg:group-hover:translate-x-6">
                      <p className="inline text-pretty text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                        <ArrowRight className="ml-4 inline size-5 shrink-0 opacity-0 -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between transition-all duration-500 lg:max-w-xs lg:group-hover:-translate-x-2">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary">
                          {item.category}
                        </p>
                        <time className="text-sm font-medium text-muted-foreground tabular-nums">
                          {item.date}
                        </time>
                      </div>
                      <Avatar className="size-10 border-2 border-background shadow-sm box-content ring-1 ring-border">
                        <AvatarImage src={item.avatar} />
                      </Avatar>
                    </div>
                  </a>
                  <Separator className="bg-foreground/5 last:hidden" />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resources4 };
```
