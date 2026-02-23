```
payload-base-bun\.agent\skills\vibe-blocks\library\cn\blog\blog30.md
```# Blog 30

## Metadata
- **Category**: Blog
- **Objective**: Display a vertical blog post listing with alternating layout and read more links.
- **Use Case**: Blog archives, news sections, and content hubs with vertical layout.
- **Visual Style**: Vertical layout with alternating content and images, rounded cards, and arrow icons.
- **Interactivity**: Static display with hover effects on images and arrow icons.

## Description
A vertical blog listing component featuring a vertical layout of blog posts with alternating content and images. Each post includes a title, date, description, and a read more link with arrow icon. The layout features rounded cards with hover effects on images and arrow icons. The component displays a large heading and includes a vertical stack of blog posts with consistent spacing and typography.

## Source Code
```tsx
import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Blog30Props {
  className?: string;
}

const Blog30 = ({ className }: Blog30Props) => {
  const blogPosts = [
    {
      href: "#",
      date: "June 15, 2024",
      title: "The Future of AI Innovation",
      content:
        "Explore how cutting-edge AI technologies are revolutionizing business processes, enhancing productivity, and creating unprecedented opportunities for growth across diverse sectors.",
      tags: ["AI", "Innovation", "Technology", "Future", "Business"],
    },
    {
      href: "#",
      date: "June 12, 2024",
      title: "Mastering React Performance Optimization",
      content:
        "Discover techniques for optimizing React applications including memoization, lazy loading, and efficient state management for faster applications.",
      tags: ["React", "Performance", "Optimization", "Web Development", "Frontend"],
    },
    {
      href: "#",
      date: "June 10, 2024",
      title: "Building Scalable Backend Systems",
      content:
        "Learn about microservices, GraphQL, and event-driven architectures powering today's most successful applications with practical insights.",
      tags: ["Backend", "Scalability", "Architecture", "API", "Cloud"],
    },
    {
      href: "#",
      date: "June 8, 2024",
      title: "Advanced JavaScript Programming Concepts",
      content:
        "Deep dive into async programming, design patterns, and modern ES6+ features for clean, maintainable, and efficient JavaScript code.",
      tags: ["JavaScript", "Programming", "ES6", "Async", "Design Patterns"],
    },
    {
      href: "#",
      date: "June 5, 2024",
      title: "Cybersecurity Essentials for Modern Applications",
      content:
        "Explore security concepts and implementation strategies for protecting backend systems including authentication, authorization, and data protection.",
      tags: ["Security", "Cybersecurity", "Authentication", "Backend", "Data Protection"],
    },
  ];

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <h1 className="mb-12 max-w-lg font-sans text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          Discover Our Fresh Content
        </h1>

        <div className="flex flex-col gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col gap-6 md:flex-row">
              <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-3xl md:w-1/2">
                <img
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${index + 1}.svg`}
                  alt={`Blog post ${index + 1`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-center md:w-1/2">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {post.title}
                </h2>
                <p className="mb-4 text-lg leading-relaxed font-normal text-muted-foreground md:pr-24 xl:pr-32">
                  {post.content}
                </p>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="h-6 rounded-md"
                    >
                      <span className="text-md font-medium text-muted-foreground">
                        {tag}
                      </span>
                    </Badge>
                  ))}
                </div>
                <a href={post.href}>
                  <Button
                    variant="ghost"
                    className="inline-flex items-center gap-4 px-0 text-lg font-semibold text-primary transition-all ease-in-out hover:gap-6"
                  >
                    Read More
                    <ArrowRightIcon />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog30 };
