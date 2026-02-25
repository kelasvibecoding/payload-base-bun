# Resources 5

## Metadata
- **Category**: Resources
- **Objective**: Provide a conversion-heavy learning catalog or course portal with sophisticated visual animations.
- **Use Case**: Learning Management Systems (LMS), developer education hubs, or technical guide portals where user engagement and "Start" conversion are primary goals.
- **Visual Style**: High-fidelity architectural layout featuring deep alternating split-panes. Each course entry includes specialized course badges, rich metadata icons (Lessons, Videos, Duration), author BIOS, and a custom 3D "Stack" illustration using CSS transforms and expressive gradients.
- **Interactivity**: Dynamic "Duo" shadow illustration that reacts to hover with `scale-[1.03]` and `-rotate-2` effects, alongside primary-action hover highlights and fluid responsive scaling.

## Description
Resources 5 is designed for the "Educator" brand archetype. It focuses on breaking down complex learning objectives into scannable, data-rich segments. The use of a custom 3D visual stack on the right of each entry provides a unique "Vibe" that feels premium and tech-forward. Integrated metadata for audience types and lesson counts allows professional users to quickly assess the value of the content before clicking "Start".

## Source Code

```tsx
"use client";

import { ArrowRight, BookOpen, Play, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Resources5Props {
  courses?: Array<{
    badge?: string;
    title: string;
    description: string;
    author: {
      name: string;
      title: string;
      avatar: string;
      className?: string;
    };
    image: string;
    lessons: number;
    videos: number;
    duration: string;
    audience: string[];
    gradient: string;
    cta: {
      text: string;
      url: string;
    };
  }>;
  className?: string;
}

const DEFAULT_COURSES = [
  {
    badge: "Advanced Course",
    title: "Mastering Database Architecture at Scale",
    description:
      "Deep dive into partitioned systems, high-availability schemas, and performance optimization for enterprise-grade applications with real-world workloads.",
    author: {
      name: "Alex Chen",
      title: "Staff Engineer at Vibe Systems",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    lessons: 18,
    videos: 24,
    duration: "4h 42m",
    audience: ["DevOps", "Backend Engineers"],
    gradient: "from-blue-500/20 to-purple-500/20",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    cta: { text: "Start Learning", url: "#" },
  },
  {
    badge: "Core Fundamentals",
    title: "Modern UI Composition with Shadcn & React",
    description:
      "Learn the principles of accessible component design, atomic architecture, and complex state management using the latest React primitives.",
    author: {
      name: "Maria Rodriguez",
      title: "Design Systems Lead",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    lessons: 12,
    videos: 15,
    duration: "2h 15m",
    audience: ["Designers", "Frontend Devs"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    cta: { text: "Watch Now", url: "#" },
  },
];

const Resources5 = ({
  className,
  courses = DEFAULT_COURSES
}: Resources5Props) => {
  return (
    <section className={cn("bg-background py-32 font-sans", className)}>
      <div className="flex flex-col gap-0 border-b border-border">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col gap-12 border-t border-border py-24 hover:bg-muted/30 transition-colors"
          >
            <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8 order-2 md:order-1">
                <div className="space-y-4">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 font-bold px-4">
                    {course.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold tracking-tight lg:text-4xl text-foreground">{course.title}</h3>
                </div>

                {/* Rich Meta Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-muted-foreground bg-muted/50 p-4 rounded-2xl border border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-background shadow-sm border border-border">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span>{course.audience.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-background shadow-sm border border-border">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-background shadow-sm border border-border">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <span>{course.videos} Videos, {course.duration}</span>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  {course.description}
                </p>

                {/* Combined Author & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12 border-2 border-primary/20 ring-4 ring-background">
                      <AvatarImage src={course.author.avatar} />
                      <AvatarFallback>{course.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <p className="font-bold text-foreground">{course.author.name}</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                        {course.author.title}
                      </p>
                    </div>
                  </div>

                  <a
                    href={course.cta.url}
                    className="group/btn flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>{course.cta.text}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right Visual Stack Illustration */}
              <div className="order-1 md:order-2">
                <div
                  className={cn(
                    "group/stack relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-br transition-all duration-700 ease-out hover:scale-[1.02] hover:-rotate-1",
                    course.gradient
                  )}
                >
                    {/* Layered Cards Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-4/5 aspect-square bg-white shadow-2xl rounded-2xl border border-black/5 -rotate-6 translate-x-4 opacity-40 translate-y-4"></div>
                        <div className="absolute w-4/5 aspect-square bg-white shadow-2xl rounded-2xl border border-black/5 rotate-3 -translate-x-4 opacity-60 -translate-y-4"></div>
                        <div className="absolute w-4/5 h-4/5 bg-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl border border-border group-hover/stack:scale-105 transition-transform duration-700 overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover/stack:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Resources5 };
```
